import { homeFaq } from '../data/site';

/** Visible FAQ; the same Q&A is emitted as FAQPage JSON-LD for "/" in src/seo.ts. */
export default function HomeFaq() {
  return (
    <section
      id="faq"
      data-scroll-section
      aria-labelledby="faq-heading"
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="label">
            <span className="accent">✦</span> questions
          </div>
          <h2 id="faq-heading" className="mt-6 display-xl text-4xl md:text-6xl font-medium text-white">
            Straight answers.
          </h2>
          <p className="mt-6 max-w-sm text-white/65">
            Still unsure? Send three sentences about your project — a real engineer replies within 24 hours.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#ff6a1a] text-black font-medium rounded-full px-7 h-12 text-sm transition-transform duration-500 hover:scale-105"
          >
            Ask us directly <span aria-hidden>↗</span>
          </a>
        </div>
        <div className="prose-dark !text-base">
          {homeFaq.map((f, i) => (
            <details key={f.q} className="faq" open={i === 0}>
              <summary className="!text-lg">{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
