import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { hero } from '../data/site';

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  // intro + count-up
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25, defaults: { ease: 'expo.out' } });
      tl.from('.hero-char', {
        yPercent: 130,
        rotate: 5,
        duration: 1.15,
        stagger: 0.03,
      }).from('.hero-soft', { y: 30, opacity: 0, duration: 1, stagger: 0.1 }, '-=0.85');

      gsap.utils.toArray<HTMLElement>('.stat-num').forEach((el) => {
        const target = Number(el.dataset.value || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.1,
          delay: 0.9,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  // cinematic crossfade between the four markets
  useEffect(() => {
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % hero.slides.length),
      5200,
    );
    return () => window.clearInterval(id);
  }, []);

  const headline = `${hero.titleA} ${hero.titleB}`;

  return (
    <section
      id="top"
      ref={root}
      data-scroll-section
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-black"
    >
      {/* crossfading city frames */}
      {hero.slides.map((s, i) => (
        <div
          key={s.city}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.city}
            className={`h-full w-full object-cover ${i === active ? 'kenburns' : ''}`}
          />
        </div>
      ))}

      {/* scrims — legible text top and bottom */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#060607] via-[#060607]/70 to-transparent" />

      <div className="relative h-full w-full px-6 md:px-10 flex flex-col justify-between pt-28 md:pt-32 pb-10 md:pb-14">
        {/* topline + live city label */}
        <div className="hero-soft flex items-center justify-between">
          <div className="label flex items-center gap-3">
            <span className="accent">✦</span> {hero.topline}
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a45c] animate-pulse" />
            now viewing · {hero.slides[active].city}
          </div>
        </div>

        <div>
          {/* headline */}
          <h1
            aria-label={headline}
            className="display-xl font-semibold text-white text-[13.5vw] md:text-[9.5vw] leading-[0.9] select-none"
          >
            <span className="line-mask">
              <span aria-hidden>
                {hero.titleA.split('').map((c, i) => (
                  <span key={i} className="hero-char inline-block" aria-hidden>
                    {c === ' ' ? ' ' : c}
                  </span>
                ))}
              </span>
            </span>
            <span className="line-mask">
              <span aria-hidden className="text-gold font-serif-i not-italic">
                {hero.titleB.split('').map((c, i) => (
                  <span key={i} className="hero-char inline-block">
                    {c}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="hero-soft max-w-md text-[15px] md:text-base leading-relaxed font-medium text-white/90">
              {hero.blurb}
            </p>

            {/* stats — 2×2 on phones */}
            <div className="hero-soft grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:items-end sm:gap-7 md:gap-10">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display font-medium text-3xl md:text-5xl tracking-tight text-white">
                    <span className="stat-num tabular-nums" data-value={s.value}>
                      0
                    </span>
                    <span className="accent">{s.suffix}</span>
                  </div>
                  <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-white/75 mt-1.5 max-w-[120px] sm:max-w-[95px] leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* slide indicators */}
      <div className="absolute bottom-10 right-6 md:right-10 hidden lg:flex items-center gap-2.5">
        {hero.slides.map((s, i) => (
          <button
            key={s.city}
            aria-label={`View ${s.city}`}
            onClick={() => setActive(i)}
            data-hover
            className={`h-1 rounded-full transition-all duration-500 ${
              i === active ? 'w-9 bg-[#c9a45c]' : 'w-4 bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
