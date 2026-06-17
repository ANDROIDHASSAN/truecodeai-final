import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { solutions, getSolutionBySlug } from '@/content/solutions';
import { site } from '@/data/site';
import { servicePageJsonLd, faqJsonLd } from '@/lib/jsonld';

export const revalidate = 86400;

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) return {};
  return {
    title: sol.title,
    description: sol.metaDescription,
    alternates: { canonical: `https://truecodeai.com/solutions/${sol.slug}` },
    openGraph: {
      title: sol.title,
      description: sol.metaDescription,
      url: `https://truecodeai.com/solutions/${sol.slug}`,
      siteName: 'TrueCodeAI',
      type: 'website',
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) notFound();

  const related = solutions.filter((s) => sol.related.includes(s.slug));

  const serviceSchema = JSON.stringify(servicePageJsonLd({
    name: sol.title,
    description: sol.metaDescription,
    url: `https://truecodeai.com/solutions/${sol.slug}`,
    breadcrumbs: [
      { name: 'Home', url: 'https://truecodeai.com' },
      { name: 'Solutions', url: 'https://truecodeai.com/solutions' },
      { name: sol.title, url: `https://truecodeai.com/solutions/${sol.slug}` },
    ],
    faq: sol.faq,
  }));
  const faqSchema = JSON.stringify(faqJsonLd(sol.faq));

  return (
    <>
      <Script id={`sol-schema-${slug}`} type="application/ld+json" strategy="beforeInteractive">
        {serviceSchema}
      </Script>
      <Script id={`faq-schema-${slug}`} type="application/ld+json" strategy="beforeInteractive">
        {faqSchema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-white/35 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-[#ff6a1a]">{sol.title}</span>
          </nav>

          <div className="label flex items-center gap-3 mb-6">
            <span className="accent">✦</span> {sol.niche.replace(/-/g, ' ')}
          </div>
          <h1 className="display-xl text-4xl md:text-6xl font-medium text-gradient max-w-4xl">
            {sol.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/55 max-w-2xl">{sol.subheadline}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-8 h-13 text-base transition-transform duration-300 hover:scale-105"
            >
              {sol.cta} ↗
            </a>
            <Link
              href="/tools/automation-roi-calculator"
              className="inline-flex items-center rounded-full px-8 h-13 border border-white/20 text-white hover:border-white/40 transition-colors"
            >
              Calculate your ROI
            </Link>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-[#0a0a0c] border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-3 gap-6">
              {sol.outcomes.map((o) => (
                <div key={o.label} className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-semibold text-[#ff6a1a]">{o.value}</div>
                  <div className="mt-2 text-sm text-white/50">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem + How It Works */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-5">The problem</h2>
            <p className="text-white/60 leading-relaxed">{sol.problem}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-5">How it works</h2>
            <p className="text-white/60 leading-relaxed">{sol.howItWorks}</p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#0a0a0c] border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-12">What you get</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sol.features.map((f) => (
                <div key={f.title} className="glass rounded-2xl p-6">
                  <h3 className="font-display text-lg font-medium text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-white/50">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-12">Common questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {sol.faq.map((item) => (
              <div key={item.q} className="glass rounded-2xl p-6">
                <h3 className="font-display font-medium text-white mb-3">{item.q}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#060607] border-t border-white/10 py-24 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white">{sol.cta}</h2>
            <p className="mt-4 text-white/50">Tell us about your business and we\'ll scope this for you — no commitment required.</p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-10 h-14 text-base transition-transform duration-300 hover:scale-105"
            >
              Get started on WhatsApp ↗
            </a>
          </div>
        </section>

        {/* Related solutions */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-white/10">
            <h2 className="font-display text-2xl font-medium text-white mb-8">Related solutions</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/solutions/${r.slug}`}
                  className="group glass rounded-2xl p-6 transition-all duration-300 hover:border-[#ff6a1a]/40 hover:-translate-y-1"
                >
                  <h3 className="font-display text-lg font-medium text-white group-hover:text-[#ff6a1a] transition-colors">{r.title}</h3>
                  <p className="mt-2 text-sm text-white/45 line-clamp-2">{r.metaDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
