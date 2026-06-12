'use client';

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
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

type SmoothCtx = { ready: boolean };
const Ctx = createContext<SmoothCtx>({ ready: false });
export const useSmoothScroll = () => useContext(Ctx);

/**
 * Module-level handle to the live Lenis instance — used by Nav (outside the
 * Provider tree) for programmatic scrollTo on link clicks.
 */
export const loco: { current: Lenis | null } = { current: null };

/**
 * Scoped GSAP reveal hook. Waits until Lenis is ready, then runs `build`
 * inside a gsap.context scoped to `scopeRef`. Passes `window` as the
 * scroller so every ScrollTrigger inside just uses native scroll position.
 */
export function useReveal(
  scopeRef: React.RefObject<HTMLElement | null>,
  build: (scroller: Window & typeof globalThis) => void,
) {
  const { ready } = useSmoothScroll();
  useEffect(() => {
    if (!ready || !scopeRef.current) return;
    const ctx = gsap.context(() => build(window), scopeRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const tickerFn = useRef<(time: number) => void>(null!);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduceMotion,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    loco.current = lenis;

    tickerFn.current = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn.current);
    gsap.ticker.lagSmoothing(0);

    lenis.on('scroll', ScrollTrigger.update);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    setReady(true);

    return () => {
      lenis.destroy();
      loco.current = null;
      gsap.ticker.remove(tickerFn.current);
      window.removeEventListener('load', onLoad);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <Ctx.Provider value={{ ready }}>{children}</Ctx.Provider>;
}
