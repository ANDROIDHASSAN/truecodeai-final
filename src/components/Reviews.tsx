import { useRef } from 'react';
import { gsap } from 'gsap';
import { reviews } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';

/** Client reviews — glass cards popping in with a blur-up stagger. */
export default function Reviews() {
  const root = useRef<HTMLElement>(null);

  useReveal(root, (scroller) => {
    gsap.from('.rev-head .reveal', {
      scrollTrigger: { trigger: '.rev-head', scroller, start: 'top 80%' },
      y: 36,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      immediateRender: false,
    });
    gsap.fromTo(
      '.rev-card',
      { y: 70, opacity: 0, scale: 0.92, filter: 'blur(10px)' },
      {
        scrollTrigger: { trigger: '.rev-grid', scroller, start: 'top 82%' },
        y: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'expo.out',
        stagger: 0.09,
        immediateRender: false,
      },
    );
  });

  return (
    <section
      id="reviews"
      ref={root}
      data-scroll-section
      className="relative bg-[#0a0a0c] px-6 md:px-10 py-24 md:py-36 border-t border-white/10 overflow-hidden"
    >
      <div className="orb h-[400px] w-[400px] bg-[#ff6a1a] opacity-[0.05] right-[-100px] bottom-0" />

      <div className="max-w-7xl mx-auto">
        <div className="rev-head flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="label reveal flex items-center gap-3">
              <span className="accent">✦</span> client reviews
            </div>
            <h2 className="reveal mt-6 display-xl text-4xl md:text-7xl font-medium text-gradient">
              Don’t take
              <br />
              <span className="font-serif-i accent font-normal">our word for it.</span>
            </h2>
          </div>
          <div className="reveal flex items-center gap-4">
            <div className="flex -space-x-3">
              {reviews.slice(0, 4).map((r) => (
                <img
                  key={r.name}
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full border-2 border-[#0a0a0c] object-cover"
                />
              ))}
            </div>
            <div>
              <div className="accent text-sm tracking-widest">★★★★★</div>
              <div className="text-xs text-white/50 mt-0.5">
                from founders & operators worldwide
              </div>
            </div>
          </div>
        </div>

        <div className="rev-grid mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              data-hover
              className="rev-card glass rounded-3xl p-7 flex flex-col justify-between transition-all duration-500 hover:border-[#ff6a1a]/40 hover:-translate-y-1.5"
            >
              <div>
                <div className="accent text-xs tracking-[0.3em]">★★★★★</div>
                <blockquote className="mt-5 text-white/80 leading-relaxed text-[15px]">
                  “{r.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3.5 border-t border-white/10 pt-5">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover border border-white/15"
                />
                <div>
                  <div className="font-display font-medium text-white text-sm">
                    {r.name}
                  </div>
                  <div className="text-xs text-white/45 mt-0.5">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
