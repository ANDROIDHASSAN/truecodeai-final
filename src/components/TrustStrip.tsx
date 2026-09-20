import { projects } from '../data/site';

/** Products we've shipped, as a slow marquee under the hero. Text, not logos — crawlable and weightless. */
export default function TrustStrip() {
  const names = projects.map((p) => `${p.name} · ${p.category}`);
  return (
    <section
      data-scroll-section
      aria-label="Products we have shipped"
      className="relative border-y border-white/10 bg-[#08080a] py-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center gap-6">
        <span className="label shrink-0 hidden sm:block">shipped for</span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <ul className="marquee-track gap-12 font-display text-lg md:text-xl text-white/70 [animation-duration:45s] motion-reduce:[animation:none]">
            {[...names, ...names].map((n, i) => (
              <li key={i} aria-hidden={i >= names.length} className="whitespace-nowrap">
                <span className="accent mr-3">✦</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
