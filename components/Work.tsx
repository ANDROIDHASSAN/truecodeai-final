'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { projects } from '@/data/site';
import { useReveal } from '@/components/SmoothScrollProvider';

export default function Work() {
  const root = useRef<HTMLElement>(null);

  useReveal(root, (scroller) => {
    gsap.from('.work-head .reveal', {
      scrollTrigger: { trigger: '.work-head', scroller, start: 'top 80%' },
      y: 36,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      immediateRender: false,
    });

    gsap.utils.toArray<HTMLElement>('.work-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, scroller, start: 'top 88%' },
        y: 90,
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        ease: 'expo.out',
        immediateRender: false,
      });
      const img = card.querySelector('.work-img');
      if (img) {
        gsap.fromTo(
          img,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              scroller,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      }
    });
  });

  return (
    <section
      id="work"
      ref={root}
      data-scroll-section
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-36 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="work-head flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="label reveal flex items-center gap-3">
              <span className="accent">✦</span> selected work
            </div>
            <h2 className="reveal mt-6 display-xl text-4xl md:text-7xl font-medium text-gradient">
              Built here.
              <br />
              <span className="font-serif-i accent font-normal">Used everywhere.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-white/55">
            Platforms, products and tools we've taken from idea to tens of thousands of users.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              data-hover
              className={`work-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e] ${i % 3 === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="work-img absolute inset-0 w-full h-[124%] -top-[12%] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                {p.status && (
                  <span className="absolute top-5 right-5 glass rounded-full font-mono text-[10px] uppercase tracking-widest accent px-3 py-1.5">
                    {p.status}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between gap-4">
                  <div>
                    <div className="label !text-white/60">{p.category}</div>
                    <h3 className="mt-2 font-display text-3xl md:text-5xl font-medium text-white">{p.name}</h3>
                    <p className="mt-2 text-sm text-white/60 max-w-md hidden sm:block">{p.blurb}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono text-xs accent whitespace-nowrap">{p.metric}</div>
                    <span className="mt-3 inline-grid place-items-center h-11 w-11 rounded-full border border-white/25 text-white/70 transition-all duration-500 group-hover:bg-[#ff6a1a] group-hover:text-black group-hover:border-[#ff6a1a] group-hover:rotate-45">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
