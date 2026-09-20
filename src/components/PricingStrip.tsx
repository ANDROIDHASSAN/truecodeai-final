import { services } from '../data/services';

// The four offers most buyers arrive for; each card links to its service page.
const FEATURED = ['whatsapp-ai-agent-development', 'voice-ai-agent-development', 'ai-agent-development', 'mvp-development'];

/** Packages + timelines on the homepage; prices are quoted per brief, never listed. */
export default function PricingStrip() {
  const cards = FEATURED.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  return (
    <section
      id="pricing"
      data-scroll-section
      aria-labelledby="pricing-heading"
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="label">
              <span className="accent">✦</span> pricing
            </div>
            <h2 id="pricing-heading" className="mt-6 display-xl text-4xl md:text-6xl font-medium text-white">
              A fixed price,
              <br />
              <span className="font-serif-i accent font-normal">in writing, in 48 hours.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/65">
            Fixed scope, fixed price, milestone payments. Send a three-sentence brief and you get a written quote — no
            call needed.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((s) => {
            const first = s.pricing[0];
            return (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                data-hover
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-500 hover:border-[#ff6a1a]/50 hover:bg-white/[0.04]"
              >
                <h3 className="font-display text-xl font-medium text-white">{s.name}</h3>
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">live in</div>
                <div className="mt-1 font-display text-3xl font-medium text-white">{first.timeline}</div>
                <div className="mt-1 text-sm text-white/60">{first.tier}</div>
                <p className="mt-5 text-sm text-white/65 leading-relaxed flex-1">{s.outcomes[0]}.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-white group-hover:text-[#ff6a1a] transition-colors">
                  See scope & tiers <span aria-hidden>→</span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/65">
          <a href="#contact" className="btn-fill inline-flex items-center rounded-full border border-white/25 px-6 h-11 text-white">
            Get your fixed price ↗
          </a>
          <a href="/services" className="underline decoration-[#ff6a1a]/50 underline-offset-4 hover:text-white">
            All services and packages
          </a>
        </div>
      </div>
    </section>
  );
}
