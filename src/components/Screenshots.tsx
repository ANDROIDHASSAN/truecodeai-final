import { useRef } from 'react';
import { gsap } from 'gsap';
import { gallery } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';

function Photo({ src, caption }: { src: string; caption: string }) {
  return (
    <figure
      className="group relative shrink-0 w-[300px] md:w-[460px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e]"
      data-hover
    >
      <div className="aspect-[16/11] overflow-hidden">
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <figcaption className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">
        <span className="accent">✦</span> {caption}
      </figcaption>
    </figure>
  );
}

/**
 * Interiors gallery — two photo rows drifting in opposite
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

  return (
    <section
      id="gallery"
      ref={root}
      data-scroll-section
      className="relative bg-[#0a0a0c] py-24 md:py-36 border-t border-white/10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(80%_70%_at_50%_30%,black,transparent)]" />
      <div className="orb h-[380px] w-[380px] bg-[#c9a45c] opacity-[0.06] right-[-120px] top-[-80px]" />

      <div className="shot-head relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="label reveal flex items-center gap-3">
          <span className="accent">✦</span> {gallery.kicker}
        </div>
        <h2 className="reveal mt-6 display-xl text-4xl md:text-7xl font-medium text-gradient max-w-3xl">
          Real homes.
          <br />
          <span className="font-serif-i accent font-normal">Not renders.</span>
        </h2>
        <p className="reveal mt-6 max-w-md text-white/55">{gallery.desc}</p>
      </div>

      <div className="relative mt-16 space-y-6 -rotate-1">
        <div className="shot-row-a flex gap-6 w-max pl-6">
          {gallery.rowA.map((p) => (
            <Photo key={p.src} src={p.src} caption={p.caption} />
          ))}
        </div>
        <div className="shot-row-b flex gap-6 w-max pl-6">
          {gallery.rowB.map((p) => (
            <Photo key={p.src} src={p.src} caption={p.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}
