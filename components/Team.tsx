'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { team } from '@/data/site';
import { useReveal } from '@/components/SmoothScrollProvider';

export default function Team() {
  const root = useRef<HTMLElement>(null);

  useReveal(root, (scroller) => {
    gsap.from('.team-head .reveal', {
      scrollTrigger: { trigger: '.team-head', scroller, start: 'top 80%' },
      y: 36,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      immediateRender: false,
    });
    gsap.from('.div-card', {
      scrollTrigger: { trigger: '.div-grid', scroller, start: 'top 82%' },
      y: 56,
      opacity: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.09,
      immediateRender: false,
    });

    const countUp = (el: HTMLElement, target: number, pad = 0, dur = 1.6) => {
      const obj = { v: 0 };
      return gsap.to(obj, {
        v: target,
        duration: dur,
        ease: 'power3.out',
        onUpdate: () => {
          const n = String(Math.round(obj.v));
          el.textContent = pad ? n.padStart(pad, '0') : n;
        },
      });
    };

    const onceVisible = (selector: string, fire: () => void) => {
      const node = root.current?.querySelector(selector) as HTMLElement | null;
      if (!node) return;
      if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
        fire();
        return;
      }
      ScrollTrigger.create({ trigger: selector, scroller, start: 'top 85%', once: true, onEnter: fire });
    };

    const big = root.current?.querySelector('.team-big-num') as HTMLElement | null;
    onceVisible('.team-head', () => big && countUp(big, 50, 0, 1.8));
    onceVisible('.div-grid', () => {
      gsap.utils.toArray<HTMLElement>('.div-num').forEach((el) => {
        countUp(el, Number(el.dataset.value || 0), 2, 1.4);
      });
    });

    gsap.fromTo(
      '.team-img',
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: '.team-photo', scroller, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  return (
    <section
      id="team"
      ref={root}
      data-scroll-section
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-36 border-t border-white/10 overflow-hidden"
    >
      <div className="orb h-[460px] w-[460px] bg-[#ff6a1a] opacity-[0.05] left-1/2 top-0 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="team-head grid gap-10 lg:grid-cols-2 items-end">
          <div>
            <div className="label reveal flex items-center gap-3">
              <span className="accent">✦</span> {team.kicker}
            </div>
            <div className="reveal mt-6 flex items-start gap-3">
              <span className="team-big-num display-xl font-semibold accent text-[26vw] lg:text-[13vw] leading-none tabular-nums">
                0
              </span>
              <span className="font-serif-i text-2xl md:text-4xl text-white/70 mt-4 md:mt-8">
                engineers,
                <br />
                one roof.
              </span>
            </div>
            <p className="reveal mt-6 max-w-md text-white/55">{team.desc}</p>
          </div>

          <div className="team-photo reveal relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/11]">
            <img
              src={team.image}
              alt="the TrueCodeAI team at work"
              loading="lazy"
              className="team-img absolute inset-0 w-full h-[124%] -top-[12%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-5 left-5 glass rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
              delivery pods · worldwide
            </div>
          </div>
        </div>

        <div className="div-grid mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.divisions.map((d) => (
            <div
              key={d.name}
              data-hover
              className="div-card group glass rounded-3xl p-7 transition-colors duration-500 hover:border-[#ff6a1a]/40"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl md:text-2xl font-medium text-white">{d.name}</h3>
                <div className="font-display font-semibold text-4xl md:text-5xl accent tabular-nums">
                  <span className="div-num" data-value={d.count}>00</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/50">{d.desc}</p>
              <div className="mt-6 h-px w-full bg-white/10 overflow-hidden">
                <div className="h-full w-0 bg-[#ff6a1a] transition-all duration-700 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
