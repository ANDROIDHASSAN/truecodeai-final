import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { markets } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';

/**
 * Markets index — an editorial list of the four flagship regions where a
 * floating image preview chases the cursor over the hovered row.
 */
export default function Services() {
  const root = useRef<HTMLElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useReveal(root, (scroller) => {
    gsap.from('.cap-head .reveal', {
      scrollTrigger: { trigger: '.cap-head', scroller, start: 'top 80%' },
      y: 36,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      immediateRender: false,
    });
    gsap.from('.cap-row', {
      scrollTrigger: { trigger: '.cap-list', scroller, start: 'top 80%' },
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.09,
      immediateRender: false,
    });
  });

  // floating preview chases the cursor (desktop only)
  useEffect(() => {
    const el = root.current;
    const float = floatRef.current;
    if (!el || !float) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const x = gsap.quickTo(float, 'x', { duration: 0.5, ease: 'power3.out' });
    const y = gsap.quickTo(float, 'y', { duration: 0.5, ease: 'power3.out' });
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      x(e.clientX - r.left);
      y(e.clientY - r.top);
    };
    el.addEventListener('mousemove', move);
    return () => el.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const float = floatRef.current;
    if (!float) return;
    gsap.to(float, {
      scale: active === null ? 0 : 1,
      rotate: active === null ? -6 : 0,
      opacity: active === null ? 0 : 1,
      duration: 0.45,
      ease: 'expo.out',
    });
  }, [active]);

  return (
    <section
      id="markets"
      ref={root}
      data-scroll-section
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-36 border-t border-white/10 overflow-hidden"
    >
      {/* floating image preview */}
      <div
        ref={floatRef}
        className="pointer-events-none absolute z-20 hidden md:block w-[340px] h-[240px] -mt-[120px] -ml-[170px] rounded-2xl overflow-hidden scale-0 opacity-0 border border-white/15 shadow-2xl"
      >
        {markets.map((m, i) => (
          <img
            key={m.n}
            src={m.image}
            alt=""
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="cap-head flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="label reveal flex items-center gap-3">
              <span className="accent">✦</span> the markets
            </div>
            <h2 className="reveal mt-6 display-xl text-4xl md:text-7xl font-medium text-gradient">
              Four cities.
              <br />
              <span className="font-serif-i accent font-normal">One standard.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-white/55">
            We represent buyers in the four markets that define global luxury —
            each with a dedicated desk and a book of homes you will not find
            listed anywhere.
          </p>
        </div>

        <div className="cap-list mt-16 border-t border-white/10">
          {markets.map((m, i) => (
            <div
              key={m.n}
              data-hover
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="cap-row group relative grid grid-cols-12 items-start md:items-center gap-x-4 gap-y-3 border-b border-white/10 py-8 md:py-10 transition-colors duration-500 hover:bg-white/[0.025] cursor-pointer"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs accent">
                {m.n}
              </div>
              <div className="col-span-10 md:col-span-4 transition-transform duration-500 group-hover:translate-x-3">
                <h3 className="font-display text-2xl md:text-4xl font-medium text-white">
                  {m.city}
                </h3>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                  {m.country}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 md:pl-6">
                <p className="text-white/55 text-sm md:text-base">{m.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-white/12 px-3 py-1 text-white/45 group-hover:border-[#c9a45c]/40 group-hover:text-white/70 transition-colors duration-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-2 flex md:flex-col md:items-end justify-between md:justify-center gap-1 md:text-right">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                    from
                  </div>
                  <div className="font-display text-lg md:text-2xl accent">{m.from}</div>
                </div>
                <div className="font-mono text-[11px] text-white/45">
                  {m.listings} residences
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-serif-i text-xl md:text-2xl text-white/50">
          Looking somewhere else? Our private network reaches
          <span className="accent"> well beyond the four</span>. Just ask.
        </p>
      </div>
    </section>
  );
}
