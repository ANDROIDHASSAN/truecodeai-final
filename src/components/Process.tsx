import { useRef } from 'react';
import { gsap } from 'gsap';
import { process } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';

/** Idea → production in five moves, stitched by a growing accent line. */
export default function Process() {
  const root = useRef<HTMLElement>(null);

  useReveal(root, (scroller) => {
    gsap.from('.proc-head .reveal', {
      scrollTrigger: { trigger: '.proc-head', scroller, start: 'top 80%' },
      y: 36,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      immediateRender: false,
    });
    gsap.from('.proc-step', {
      scrollTrigger: { trigger: '.proc-track', scroller, start: 'top 82%' },
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.12,
      immediateRender: false,
    });
    gsap.fromTo(
      '.proc-line',
      { scaleX: 0 },
      {
        scrollTrigger: { trigger: '.proc-track', scroller, start: 'top 75%' },
        scaleX: 1,
        duration: 1.6,
        ease: 'power2.out',
        immediateRender: false,
      },
    );
  });

  return (
    <section
      id="process"
      ref={root}
      data-scroll-section
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-36 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="proc-head max-w-3xl">
          <div className="label reveal flex items-center gap-3">
            <span className="accent">✦</span> idea → production
          </div>
          <h2 className="reveal mt-6 display-xl text-4xl md:text-7xl font-medium text-gradient">
            From a sentence
            <br />
            <span className="font-serif-i accent font-normal">to a system.</span>
          </h2>
        </div>

        <div className="proc-track relative mt-20">
          <div className="proc-line absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-[#ff6a1a] via-white/20 to-transparent origin-left hidden md:block" />
          <div className="grid gap-y-12 md:grid-cols-5 md:gap-x-6">
            {process.map((step) => (
              <div key={step.n} className="proc-step relative">
                <span className="relative z-10 grid place-items-center h-6 w-6 rounded-full bg-[#ff6a1a] text-black font-mono text-[10px] font-bold">
                  {step.n.replace('0', '')}
                </span>
                <h3 className="mt-5 font-display text-xl md:text-2xl font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed md:pr-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
