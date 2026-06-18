import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { services, getServiceBySlug } from '@/content/services';
import { solutions } from '@/content/solutions';
import { site } from '@/data/site';

export const revalidate = 86400;

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.metaDescription,
    alternates: { canonical: `https://truecodeai.com/services/${svc.slug}` },
    openGraph: {
      title: svc.title,
      description: svc.metaDescription,
      url: `https://truecodeai.com/services/${svc.slug}`,
      siteName: 'TrueCodeAI',
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const relatedSols = solutions.filter((s) => svc.relatedSolutions.includes(s.slug));

  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://truecodeai.com/services/${svc.slug}#service`,
        name: svc.title,
        description: svc.metaDescription,
        provider: { '@id': 'https://truecodeai.com/#organization' },
        areaServed: ['US', 'GB', 'AU', 'CA', 'Worldwide'],
        url: `https://truecodeai.com/services/${svc.slug}`,
      },
      {
        '@type': 'FAQPage',
        '@id': `https://truecodeai.com/services/${svc.slug}#faq`,
        mainEntity: svc.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truecodeai.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://truecodeai.com/services' },
          { '@type': 'ListItem', position: 3, name: svc.title, item: `https://truecodeai.com/services/${svc.slug}` },
        ],
      },
    ],
  });

  return (
    <>
      <Script id={`service-schema-${slug}`} type="application/ld+json" strategy="beforeInteractive">
        {schema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-white/35 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#ff6a1a]">{svc.slug}</span>
          </nav>

          <div className="label flex items-center gap-3 mb-6">
            <span className="accent">✦</span> service
          </div>

          <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-4xl leading-none mb-6">
            {svc.headline}
          </h1>
          <p className="max-w-2xl text-lg text-white/60 leading-relaxed">
            {svc.subheadline}
          </p>

          {/* Outcomes */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {svc.outcomes.map((o) => (
              <div key={o.label} className="glass rounded-2xl p-5 text-center">
                <div className="font-display text-3xl font-medium text-[#ff6a1a]">{o.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">{o.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 pb-20">
          <h2 className="font-display text-3xl font-medium text-white mb-10">What&apos;s included</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {svc.features.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6">
                <h3 className="font-display text-base font-medium text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 pb-20">
          <h2 className="font-display text-3xl font-medium text-white mb-10">Common questions</h2>
          <div className="space-y-4">
            {svc.faq.map((item) => (
              <details
                key={item.q}
                className="glass rounded-2xl px-6 py-5 group"
              >
                <summary className="font-display text-base font-medium text-white cursor-pointer list-none flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-[#ff6a1a] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/55 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related solutions */}
        {relatedSols.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 md:px-10 pb-20">
            <h2 className="font-display text-3xl font-medium text-white mb-10">Related solutions</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedSols.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="group glass rounded-2xl p-6 border border-white/10 hover:border-[#ff6a1a]/30 transition-all"
                >
                  <h3 className="font-display text-base font-medium text-white group-hover:text-[#ff6a1a] transition-colors mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed line-clamp-2">{sol.metaDescription}</p>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a]">View →</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 pb-24">
          <div className="glass rounded-3xl p-10 text-center">
            <p className="font-display text-3xl text-white mb-3">{svc.cta}</p>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Tell us what you need — we scope it for free and reply within 24 hours with a plan and fixed price.
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
