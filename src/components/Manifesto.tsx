import { useRef } from 'react';
import { gsap } from 'gsap';
import { manifesto } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';

// words that flash in the accent colour as they illuminate
const HOT = new Set([
  'describe',
  'build',
  'startup.',
  'production',
  'agent',
  'voice',
  'model',
  'idea.',
  'fifty',
]);

/** Word-by-word scroll-scrubbed manifesto — the classic awwwards reveal. */
export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useReveal(root, (scroller) => {
    gsap.from('.man-kicker', {
      scrollTrigger: { trigger: root.current, scroller, start: 'top 80%' },
      y: 24,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      immediateRender: false,
    });

    // each word brightens + lifts slightly as it crosses the viewport
    gsap.fromTo(
      '.man-word',
      { opacity: 0.16, y: 16 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.man-text',
          scroller,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      },
    );
  });

  const words = manifesto.text.split(' ');

  return (
    <section
      ref={root}
      data-scroll-section
      className="relative bg-[#060607] px-6 md:px-10 py-28 md:py-44 overflow-hidden"
    >
      <div className="orb h-[420px] w-[420px] bg-[#ff6a1a] opacity-[0.06] -left-40 top-20" />

      <div className="max-w-5xl mx-auto">
        <div className="man-kicker label flex items-center gap-3">
          <span className="accent">✦</span> {manifesto.kicker}
        </div>
        <p className="man-text mt-10 font-display text-3xl md:text-[3.4rem] font-medium leading-[1.18] tracking-tight">
          {words.map((w, i) => (
            <span
              key={i}
              className={`man-word inline-block mr-[0.28em] will-change-transform ${
                HOT.has(w.replace(/[—]/g, '')) ? 'accent' : 'text-white'
              }`}
            >
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
