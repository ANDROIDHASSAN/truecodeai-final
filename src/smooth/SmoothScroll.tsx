import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type SmoothCtx = {
  /** the locomotive scroll container element (the ScrollTrigger scroller) */
  el: HTMLElement | null;
  /** the live LocomotiveScroll instance */
  scroll: any | null;
  /** true once locomotive + ScrollTrigger proxy are wired up */
  ready: boolean;
};

const Ctx = createContext<SmoothCtx>({ el: null, scroll: null, ready: false });

export const useSmoothScroll = () => useContext(Ctx);

/**
 * Module-level handle to the live locomotive instance, for components that
 * live OUTSIDE the scroll container (e.g. the fixed Nav) and can't use context.
 */
export const loco: { current: any | null } = { current: null };

/**
 * Scoped GSAP reveal hook. Waits until Locomotive is ready, then runs `build`
 * inside a gsap.context scoped to `scopeRef`, with the locomotive container
 * pre-wired as the ScrollTrigger scroller via gsap defaults.
 */
export function useReveal(
  scopeRef: React.RefObject<HTMLElement>,
  build: (scroller: HTMLElement) => void,
) {
  const { el, ready } = useSmoothScroll();
  useEffect(() => {
    if (!ready || !el || !scopeRef.current) return;
    const ctx = gsap.context(() => build(el), scopeRef);
    // a refresh after each section registers keeps positions accurate
    ScrollTrigger.refresh();
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, el]);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<SmoothCtx>({
    el: null,
    scroll: null,
    ready: false,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let locomotive: any;
    let killed = false;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      if (killed) return;

      locomotive = new LocomotiveScroll({
        el: container,
        smooth: !reduceMotion,
        lerp: 0.085,
        multiplier: 1,
        smartphone: { smooth: false },
        tablet: { smooth: false },
      });

      // keep ScrollTrigger in sync with locomotive's virtual scroll
      locomotive.on('scroll', ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(container, {
        scrollTop(value?: number) {
          return arguments.length
            ? locomotive.scrollTo(value, { duration: 0, disableLerp: true })
            : locomotive.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: (container.style as any).transform ? 'transform' : 'fixed',
      });

      // every ScrollTrigger in the app should default to this scroller
      ScrollTrigger.defaults({ scroller: container });

      const refresh = () => locomotive.update();
      ScrollTrigger.addEventListener('refresh', refresh);

      // recompute once fonts / late layout settle
      const onLoad = () => {
        locomotive.update();
        ScrollTrigger.refresh();
      };
      window.addEventListener('load', onLoad);

      ScrollTrigger.refresh();
      loco.current = locomotive;
      (window as any).__loco = locomotive;
      setState({ el: container, scroll: locomotive, ready: true });

      // store cleanup for the late listeners
      (locomotive as any).__cleanup = () => {
        ScrollTrigger.removeEventListener('refresh', refresh);
        window.removeEventListener('load', onLoad);
      };
    })();

    return () => {
      killed = true;
      loco.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (locomotive) {
        locomotive.__cleanup?.();
        locomotive.destroy();
      }
    };
  }, []);

  return (
    <Ctx.Provider value={state}>
      <div ref={containerRef} data-scroll-container>
        {children}
      </div>
    </Ctx.Provider>
  );
}
