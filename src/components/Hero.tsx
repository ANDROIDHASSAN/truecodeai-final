import { hero } from '../data/site';

/**
 * Above the fold. Real-text H1 (what we sell, in buyer words), visible on first
 * paint: the entrance is CSS-only (transform, never opacity on the text) so LCP
 * doesn't wait for JavaScript. Background is pure CSS — no video, no image.
 */
export default function Hero() {
  return (
    <section
      id="top"
      data-scroll-section
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#060607] flex flex-col"
    >
      {/* aurora + grid backdrop */}
      <div aria-hidden className="hero-aurora absolute inset-0">
        <span className="hero-blob hero-blob-a" />
        <span className="hero-blob hero-blob-b" />
        <span className="hero-blob hero-blob-c" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]"
      />

      <div className="relative flex-1 w-full px-6 md:px-10 pt-32 md:pt-36 pb-14 flex">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center">
        <div className="hero-in [animation-delay:60ms] label inline-flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff6a1a] opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff6a1a]" />
          </span>
          {hero.kicker}
        </div>

        <h1 className="mt-8 display-xl font-semibold text-white text-[11vw] sm:text-[8.5vw] lg:text-[6.6vw] leading-[0.95] max-w-[16ch] lg:max-w-none">
          <span className="line-mask">
            <span className="hero-line [animation-delay:120ms]">{hero.titleA}</span>
          </span>
          <span className="line-mask">
            <span className="hero-line [animation-delay:220ms]">{hero.titleB}</span>
          </span>
          <span className="line-mask">
            <span className="hero-line [animation-delay:320ms] font-serif-i font-normal accent">{hero.titleC}</span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            <p className="hero-in [animation-delay:420ms] text-base md:text-lg leading-relaxed text-white/80">{hero.blurb}</p>
            <div className="hero-in [animation-delay:500ms] mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#ff6a1a] text-black font-medium rounded-full px-7 h-12 text-sm transition-transform duration-500 hover:scale-105"
              >
                Get a fixed price in 48h <span aria-hidden>↗</span>
              </a>
              <a
                href="/tools/ai-project-cost-calculator"
                className="btn-fill inline-flex items-center rounded-full border border-white/25 px-6 h-12 text-sm text-white"
              >
                Estimate your project cost
              </a>
            </div>
          </div>

          <dl className="hero-in [animation-delay:580ms] grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 lg:gap-x-10">
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse border-l border-white/15 pl-4">
                <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/65 max-w-[120px] leading-snug">{s.label}</dt>
                <dd className="font-display font-medium text-3xl md:text-4xl tracking-tight text-white tabular-nums whitespace-nowrap">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </div>
    </section>
  );
}
