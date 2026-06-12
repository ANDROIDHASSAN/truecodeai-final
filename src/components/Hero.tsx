import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { hero } from '../data/site';
import img1 from '../img/hero/hero1.jfif';
import img2 from '../img/hero/hero2.jfif';
import img3 from '../img/hero/hero3.jfif';
import img4 from '../img/hero/hero4.jfif';
import img5 from '../img/hero/hero5.jfif';

const SLIDES = [img1, img2, img3, img4, img5];
const INTERVAL = 4000;

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const prevRef = useRef<HTMLImageElement>(null);

  // Fade out the previous slide whenever it changes
  useEffect(() => {
    if (prev === null || !prevRef.current) return;
    gsap.fromTo(prevRef.current, { opacity: 1 }, { opacity: 0, duration: 1.2, ease: 'power2.inOut' });
  }, [prev]);

  // Slideshow interval
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % SLIDES.length;
      });
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  // Intro text animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2, defaults: { ease: 'expo.out' } });
      tl.from('.hero-char', {
        yPercent: 130,
        rotate: 6,
        duration: 1.1,
        stagger: 0.035,
      }).from('.hero-soft', { y: 28, opacity: 0, duration: 1, stagger: 0.1 }, '-=0.8');

      gsap.utils.toArray<HTMLElement>('.stat-num').forEach((el) => {
        const target = Number(el.dataset.value || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          delay: 0.8,
          ease: 'power3.out',
          onUpdate: () => { el.textContent = String(Math.round(obj.v)); },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const headline = `${hero.titleA} ${hero.titleB}`;

  return (
    <section
      id="top"
      ref={root}
      data-scroll-section
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-black"
    >
      {/* Current slide */}
      <img
        key={current}
        className="absolute inset-0 w-full h-full object-cover"
        src={SLIDES[current]}
        alt="TrueCodeAI — software studio background"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      {/* Previous slide fading out on top */}
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          ref={prevRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={SLIDES[prev]}
          alt=""
          aria-hidden
          loading="lazy"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#060607] via-[#060607]/70 to-transparent" />

      <div className="relative h-full w-full px-6 md:px-10 flex flex-col justify-end pb-10 md:pb-14">
        <h1
          aria-label={headline}
          className="display-xl font-bold text-white text-[13.5vw] md:text-[11vw] leading-[0.92] select-none"
        >
          <span className="line-mask">
            <span aria-hidden>
              {hero.titleA.split('').map((c, i) => (
                <span key={i} className="hero-char inline-block" aria-hidden>
                  {c === ' ' ? ' ' : c}
                </span>
              ))}
            </span>
          </span>
          <span className="line-mask">
            <span aria-hidden>
              {hero.titleB.split('').map((c, i) => (
                <span key={i} className="hero-char inline-block">
                  {c}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="hero-soft max-w-md text-[15px] md:text-base leading-relaxed font-medium text-white">
            {hero.blurb}
          </p>

          <div className="hero-soft grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:items-end sm:gap-7 md:gap-10">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-medium text-3xl md:text-5xl tracking-tight text-white">
                  <span className="stat-num tabular-nums" data-value={s.value}>0</span>
                  <span className="accent">{s.suffix}</span>
                </div>
                <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-white/80 mt-1.5 max-w-[120px] sm:max-w-[90px] leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-soft absolute bottom-10 right-6 md:right-10 hidden lg:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
          scroll
          <span className="block h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
