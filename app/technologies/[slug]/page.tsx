import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { technologies, getTechnologyBySlug } from '@/content/technologies';
import { site } from '@/data/site';

export const revalidate = 86400;

export async function generateStaticParams() {
  return technologies.map((t) => ({ slug: t.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) return {};
  return {
    title: `${tech.name} Development Services | TrueCodeAI`,
    description: tech.metaDescription,
    alternates: { canonical: `https://truecodeai.com/technologies/${tech.slug}` },
    openGraph: {
      title: `${tech.name} — ${tech.tagline}`,
      description: tech.metaDescription,
      url: `https://truecodeai.com/technologies/${tech.slug}`,
      siteName: 'TrueCodeAI',
    },
  };
}

export default async function TechnologyPage({ params }: Props) {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) notFound();

  const pageUrl = `https://truecodeai.com/technologies/${tech.slug}`;

  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${tech.name} Development Services | TrueCodeAI`,
        description: tech.metaDescription,
        isPartOf: { '@id': 'https://truecodeai.com/#website' },
        about: { '@id': 'https://truecodeai.com/#organization' },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: tech.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truecodeai.com' },
          { '@type': 'ListItem', position: 2, name: 'Technologies', item: 'https://truecodeai.com/technologies' },
          { '@type': 'ListItem', position: 3, name: tech.name, item: pageUrl },
        ],
      },
    ],
  });

  const relatedTechs = technologies.filter((t) => tech.related.includes(t.slug));

  return (
    <>
      <Script id={`tech-schema-${slug}`} type="application/ld+json" strategy="beforeInteractive">
        {schema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-white/35 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/technologies" className="hover:text-white transition-colors">Technologies</Link>
            <span>/</span>
            <span className="text-[#ff6a1a]">{tech.name}</span>
          </nav>

          <div className="label flex items-center gap-3 mb-6">
            <span className="accent">✦</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">{tech.category}</span>
          </div>

          <h1 className="display-xl text-4xl md:text-6xl font-medium text-gradient max-w-4xl leading-tight mb-4">
            {tech.headline}
          </h1>

          <p className="max-w-2xl text-lg text-white/60 leading-relaxed mb-10">
            {tech.subheadline}
          </p>

          {/* Outcomes */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {tech.outcomes.map((o) => (
              <div key={o.label} className="glass rounded-2xl p-5 text-center">
                <div className="font-display text-2xl md:text-3xl font-medium text-[#ff6a1a]">{o.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">{o.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="bg-[#0a0a0c] border-t border-white/10 py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div>
                <h2 className="font-display text-2xl font-medium text-white mb-4">How we use {tech.name}</h2>
                <p className="text-white/60 leading-relaxed">{tech.description}</p>
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="font-display text-base font-medium text-white mb-4">What this means for your project</h3>
                <ul className="space-y-3">
                  {[
                    `Production-ready ${tech.name} integrations, not demos`,
                    'Code you own — no black boxes',
                    'Engineers who have shipped real systems with this stack',
                    'Ongoing support and updates after launch',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="text-[#ff6a1a] mt-0.5 shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
          <h2 className="font-display text-3xl font-medium text-white mb-10">
            What we build with {tech.name}
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tech.useCases.map((uc) => (
              <div key={uc.title} className="glass rounded-2xl p-6">
                <h3 className="font-display text-base font-medium text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0c] border-t border-white/10 py-20">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <h2 className="font-display text-3xl font-medium text-white mb-10">Common questions</h2>
            <div className="space-y-4">
              {tech.faq.map((item) => (
                <details key={item.q} className="glass rounded-2xl px-6 py-5 group">
                  <summary className="font-display text-base font-medium text-white cursor-pointer list-none flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-[#ff6a1a] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-white/55 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related technologies */}
        {relatedTechs.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
            <h2 className="font-display text-2xl font-medium text-white mb-8">Related technologies</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTechs.map((t) => (
                <Link
                  key={t.slug}
                  href={`/technologies/${t.slug}`}
                  className="group glass rounded-2xl p-6 border border-white/10 hover:border-[#ff6a1a]/30 transition-all"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a] mb-2">{t.category}</div>
                  <h3 className="font-display text-base font-medium text-white group-hover:text-[#ff6a1a] transition-colors">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/45">{t.tagline}</p>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a]">View →</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 pb-24">
          <div className="glass rounded-3xl p-10 text-center">
            <p className="font-display text-3xl text-white mb-3">
              Want to build with {tech.name}?
            </p>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Tell us what you are building — we scope it for free and reply within 24 hours with a plan and fixed price.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-10 h-14 text-base transition-transform duration-300 hover:scale-105"
            >
              Start on WhatsApp ↗
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
