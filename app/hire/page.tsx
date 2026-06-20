import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { locations, getUSLocations, getInternationalLocations } from '@/content/locations';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Hire an AI Development Company | TrueCodeAI — Every City Worldwide',
  description: 'TrueCodeAI builds AI agents, voice bots, RAG systems, and custom software for businesses in every US city and major international market. Fixed pricing, 2–4 week delivery.',
  alternates: { canonical: 'https://truecodeai.com/hire' },
  openGraph: {
    title: 'Hire an AI Development Company | TrueCodeAI',
    description: 'AI development for businesses in Austin, New York, London, Dubai and 50+ cities worldwide. Fixed pricing, no surprises.',
    url: 'https://truecodeai.com/hire',
    siteName: 'TrueCodeAI',
  },
};

const schema = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://truecodeai.com/hire#webpage',
      url: 'https://truecodeai.com/hire',
      name: 'Hire an AI Development Company | TrueCodeAI',
      description: 'TrueCodeAI builds AI agents, voice bots, and custom software for businesses worldwide.',
      isPartOf: { '@id': 'https://truecodeai.com/#website' },
      about: { '@id': 'https://truecodeai.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truecodeai.com' },
        { '@type': 'ListItem', position: 2, name: 'Hire', item: 'https://truecodeai.com/hire' },
      ],
    },
  ],
});

export default function HirePage() {
  const usLocations = getUSLocations();
  const intlLocations = getInternationalLocations();

  return (
    <>
      <Script id="hire-hub-schema" type="application/ld+json" strategy="beforeInteractive">
        {schema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
          <div className="label flex items-center gap-3 mb-6">
            <span className="accent">✦</span> hire
          </div>
          <h1 className="display-xl text-4xl md:text-6xl font-medium text-gradient max-w-4xl leading-tight mb-6">
            AI Development for Every City, Every Market
          </h1>
          <p className="max-w-2xl text-lg text-white/60 leading-relaxed mb-10">
            We build AI agents, voice bots, RAG systems, and custom software for businesses across the US and worldwide.
            Fixed pricing. 2–4 week delivery. Source code is yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-10 h-14 text-base transition-transform duration-300 hover:scale-105"
            >
              Start a project ↗
            </a>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 glass rounded-full px-10 h-14 text-base text-white/70 hover:text-white transition-colors"
            >
              Browse solutions
            </Link>
          </div>
        </section>

        {/* US Cities */}
        <section className="bg-[#0a0a0c] border-t border-white/10 py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <h2 className="font-display text-3xl font-medium text-white mb-2">United States</h2>
            <p className="text-white/45 mb-10 text-sm">Find AI development resources tailored to your city&apos;s market</p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {usLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/hire/${loc.slug}`}
                  className="group glass rounded-xl p-4 border border-white/10 hover:border-[#ff6a1a]/30 transition-all"
                >
                  <div className="font-display text-sm font-medium text-white group-hover:text-[#ff6a1a] transition-colors">
                    {loc.city}
                  </div>
                  <div className="font-mono text-[10px] text-white/35 mt-0.5">{loc.state}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* International */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
          <h2 className="font-display text-3xl font-medium text-white mb-2">International</h2>
          <p className="text-white/45 mb-10 text-sm">AI development for businesses outside the US</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {intlLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/hire/${loc.slug}`}
                className="group glass rounded-xl p-4 border border-white/10 hover:border-[#ff6a1a]/30 transition-all"
              >
                <div className="font-display text-sm font-medium text-white group-hover:text-[#ff6a1a] transition-colors">
                  {loc.city}
                </div>
                <div className="font-mono text-[10px] text-white/35 mt-0.5">{loc.country}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 pb-24">
          <div className="glass rounded-3xl p-10 text-center">
            <p className="font-display text-3xl text-white mb-3">Don&apos;t see your city?</p>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              We work with businesses everywhere. Message us on WhatsApp and we&apos;ll scope your project for free within 24 hours.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-10 h-14 text-base transition-transform duration-300 hover:scale-105"
            >
              Get in touch ↗
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
