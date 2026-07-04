import { useRef } from 'react';
import { gsap } from 'gsap';
import { listings } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';

/** Featured residences — big image cards with an inner parallax drift on scroll. */
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
      id="residences"
      ref={root}
      data-scroll-section
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-36 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="work-head flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="label reveal flex items-center gap-3">
              <span className="accent">✦</span> featured residences
            </div>
            <h2 className="reveal mt-6 display-xl text-4xl md:text-7xl font-medium text-gradient">
              A handful of
              <br />
              <span className="font-serif-i accent font-normal">the exceptional.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-white/55">
            A glimpse of the current collection. The most private homes are shown
            by invitation only — ask your advisor.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {listings.map((p, i) => (
            <article
              key={p.name}
              data-hover
              className={`work-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e] ${i % 3 === 0 ? 'md:col-span-2' : ''}`}
            >
              <div
                className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[16/11]'}`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="work-img absolute inset-0 w-full h-[124%] -top-[12%] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

                {p.status && (
                  <span className="absolute top-5 left-5 glass rounded-full font-mono text-[10px] uppercase tracking-widest accent px-3 py-1.5">
                    {p.status}
                  </span>
                )}
                <span className="absolute top-5 right-5 glass rounded-full font-mono text-[11px] tracking-wide text-white px-3.5 py-1.5">
                  {p.price}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="label !text-[#c9a45c]">{p.city}</div>
                      <h3 className="mt-2 font-display text-3xl md:text-5xl font-medium text-white">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/65 max-w-lg hidden sm:block">
                        {p.blurb}
                      </p>
                    </div>
                    <span className="shrink-0 inline-grid place-items-center h-11 w-11 rounded-full border border-white/25 text-white/70 transition-all duration-500 group-hover:bg-[#c9a45c] group-hover:text-black group-hover:border-[#c9a45c] group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  {/* spec strip */}
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
                    <span>
                      <span className="accent">{p.beds}</span> beds
                    </span>
                    <span>
                      <span className="accent">{p.baths}</span> baths
                    </span>
                    <span>
                      <span className="accent">{p.area}</span>
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
