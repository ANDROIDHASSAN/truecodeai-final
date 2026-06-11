import { useRef } from 'react';
import { gsap } from 'gsap';
import { screenshots } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';
import screen1 from '../img/hero/screen1.webp';

function Frame({ src, url }: { src: string; url: string }) {
  return (
    <div className="browser-frame shrink-0 w-[300px] md:w-[460px]" data-hover>
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="ml-3 font-mono text-[10px] text-white/35 truncate">{url}</span>
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={src}
          alt="product screenshot"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}

/**
 * Screenshot wall — two browser-frame rows drifting in opposite
 * directions as you scroll through the section.
 */
export default function Screenshots() {
  const root = useRef<HTMLElement>(null);

  useReveal(root, (scroller) => {
    gsap.from('.shot-head .reveal', {
      scrollTrigger: { trigger: '.shot-head', scroller, start: 'top 80%' },
      y: 36,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      immediateRender: false,
    });

    const scrub = {
      trigger: root.current,
      scroller,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    };
    gsap.fromTo('.shot-row-a', { x: 80 }, { x: -260, ease: 'none', scrollTrigger: scrub });
    gsap.fromTo('.shot-row-b', { x: -260 }, { x: 80, ease: 'none', scrollTrigger: scrub });
  });

  const urls = [
    'interify.app/projects',
    'cupcount.in/pos',
    'console.truecodeai.com',
    'studio.truecodeai.com/agents',
    'ml.truecodeai.com/training',
    'voice.truecodeai.com/calls',
  ];

  return (
    <section
      id="screens"
      ref={root}
      data-scroll-section
      className="relative bg-[#0a0a0c] py-24 md:py-36 border-t border-white/10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(80%_70%_at_50%_30%,black,transparent)]" />
      <div className="orb h-[380px] w-[380px] bg-[#ff6a1a] opacity-[0.06] right-[-120px] top-[-80px]" />

      <div className="shot-head relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="label reveal flex items-center gap-3">
          <span className="accent">✦</span> {screenshots.kicker}
        </div>
        <h2 className="reveal mt-6 display-xl text-4xl md:text-7xl font-medium text-gradient max-w-3xl">
          Real screens.
          <br />
          <span className="font-serif-i accent font-normal">Shipped software.</span>
        </h2>
        <p className="reveal mt-6 max-w-md text-white/55">
          No concept mockups — these are live dashboards, agent consoles and
          apps pulled straight from products we run in production.
        </p>
      </div>

      <div className="relative mt-16 space-y-6 -rotate-1">
        <div className="shot-row-a flex gap-6 w-max pl-6">
          <Frame src={screen1} url="truecodeai.com/dashboard" />
          {screenshots.rowA.map((src, i) => (
            <Frame key={src} src={src} url={urls[i]} />
          ))}
        </div>
        <div className="shot-row-b flex gap-6 w-max pl-6">
          {screenshots.rowB.map((src, i) => (
            <Frame key={src} src={src} url={urls[i + 4]} />
          ))}
        </div>
      </div>
    </section>
  );
}
