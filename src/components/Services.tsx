import { useRef } from 'react';
import { gsap } from 'gsap';
import { capabilities, type Capability } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';

// Bento order: the two most-searched offers large, training as a full-width band.
const FEATURED = ['AI agents', 'Voice agents'];
const BAND = 'AI training for your team';

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-300">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#ff6a1a] group-hover:bg-[#ff6a1a] group-hover:text-black"
    >
      ↗
    </span>
  );
}

function Card({ c, n, size }: { c: Capability; n: number; size: 'lg' | 'sm' | 'band' }) {
  const span = size === 'lg' ? 'md:col-span-6' : size === 'band' ? 'md:col-span-12' : 'md:col-span-4';
  return (
    <a href={c.href} className={`bento-card card group flex flex-col overflow-hidden ${span}`}>
      {size === 'lg' && (
        <div className="relative aspect-[16/7] overflow-hidden border-b border-white/[0.08]">
          <img
            src={c.image.replace(/w=\d+/, 'w=900')}
            alt=""
            loading="lazy"
            decoding="async"
            width={900}
            height={394}
            className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/20 to-transparent" />
        </div>
      )}
      <div className={`flex flex-1 flex-col p-6 md:p-7 ${size === 'band' ? 'md:flex-row md:items-center md:gap-10' : ''}`}>
        <div className="flex-1">
          <div className="font-mono text-xs text-[#ff6a1a]">{String(n).padStart(2, '0')}</div>
          <h3 className={`mt-3 font-display font-semibold text-white ${size === 'sm' ? 'text-xl' : 'text-2xl md:text-3xl'}`}>{c.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{c.desc}</p>
          <Tags tags={c.tags} />
        </div>
        <div className={size === 'band' ? 'mt-6 md:mt-0' : 'mt-6 flex justify-end'}>
          <Arrow />
        </div>
      </div>
    </a>
  );
}

/** Capabilities as a bento grid of cards; every card links to its service page. */
export default function Services() {
  const root = useRef<HTMLElement>(null);

  useReveal(root, (scroller) => {
    gsap.from('.bento-card', {
      scrollTrigger: { trigger: '.bento', scroller, start: 'top 82%' },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.06,
      immediateRender: false,
    });
  });

  const featured = capabilities.filter((c) => FEATURED.includes(c.title));
  const band = capabilities.find((c) => c.title === BAND);
  const rest = capabilities.filter((c) => !FEATURED.includes(c.title) && c.title !== BAND);

  return (
    <section
      id="capabilities"
      ref={root}
      data-scroll-section
      aria-labelledby="capabilities-heading"
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="label">capabilities</div>
            <h2 id="capabilities-heading" className="mt-5 display-xl text-4xl md:text-6xl text-white">
              What we build, <span className="font-serif-i">end to end.</span>
            </h2>
          </div>
          <p className="max-w-sm text-zinc-400">
            Nine ways clients use the studio. Each links to scope, timeline and fixed-price ranges.
          </p>
        </div>

        <div className="bento mt-14 grid gap-4 md:grid-cols-12">
          {featured.map((c, i) => (
            <Card key={c.n} c={c} n={i + 1} size="lg" />
          ))}
          {rest.map((c, i) => (
            <Card key={c.n} c={c} n={featured.length + i + 1} size="sm" />
          ))}
          {band && <Card c={band} n={capabilities.length} size="band" />}
        </div>
      </div>
    </section>
  );
}
