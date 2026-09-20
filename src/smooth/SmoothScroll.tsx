import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth scrolling via Lenis. Unlike the old Locomotive setup this keeps the
 * *native* page scroll — Ctrl+F, anchor links, the scrollbar and position:sticky
 * all behave normally; Lenis only eases the wheel. ScrollTrigger uses the
 * window as its scroller, so no proxy is needed.
 */
const Ctx = createContext(false);

/** Module-level handle for components outside the provider (e.g. the fixed Nav). */
export const lenis: { current: Lenis | null } = { current: null };

/** Smooth-scroll to an in-page target; falls back to native smooth scroll. */
export function scrollToTarget(target: string | HTMLElement, offset = -10) {
  if (lenis.current) lenis.current.scrollTo(target, { offset });
  else (typeof target === 'string' ? document.querySelector(target) : target)?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Scoped GSAP reveal hook. Runs `build` inside a gsap.context scoped to
 * `scopeRef` once the page is mounted; `scroller` is the window.
 */
export function useReveal(scopeRef: React.RefObject<HTMLElement>, build: (scroller: Window) => void) {
  const ready = useContext(Ctx);
  useEffect(() => {
    if (!ready || !scopeRef.current) return;
    const ctx = gsap.context(() => build(window), scopeRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let instance: Lenis | null = null;
    let tick: ((t: number) => void) | null = null;

    if (!reduceMotion) {
      instance = new Lenis({ lerp: 0.1, smoothWheel: true });
      instance.on('scroll', ScrollTrigger.update);
      tick = (t: number) => instance!.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      lenis.current = instance;
    }

    // recompute trigger positions once fonts and images settle
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    setReady(true);

    return () => {
      window.removeEventListener('load', onLoad);
      if (tick) gsap.ticker.remove(tick);
      instance?.destroy();
      lenis.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <Ctx.Provider value={ready}>{children}</Ctx.Provider>;
}
