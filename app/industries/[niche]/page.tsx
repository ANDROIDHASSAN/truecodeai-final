import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { nicheGroups } from '@/content/niches';
import { solutions, getSolutionsByNiche } from '@/content/solutions';
import { site } from '@/data/site';
import { servicePageJsonLd } from '@/lib/jsonld';

export const revalidate = 86400;

export async function generateStaticParams() {
  return nicheGroups.map((g) => ({ niche: g.slug }));
}

type Props = { params: Promise<{ niche: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { niche } = await params;
  const group = nicheGroups.find((g) => g.slug === niche);
  if (!group) return {};
  return {
    title: `${group.label} Automation Software — TrueCodeAI`,
    description: group.description,
    alternates: { canonical: `https://truecodeai.com/industries/${group.slug}` },
    openGraph: {
      title: `${group.label} Automation Software`,
      description: group.description,
      url: `https://truecodeai.com/industries/${group.slug}`,
      siteName: 'TrueCodeAI',
      type: 'website',
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { niche } = await params;
  const group = nicheGroups.find((g) => g.slug === niche);
  if (!group) notFound();

  const groupSolutions = getSolutionsByNiche(niche);

  const schema = JSON.stringify(servicePageJsonLd({
    name: `${group.label} Automation Software`,
    description: group.description,
    url: `https://truecodeai.com/industries/${group.slug}`,
    breadcrumbs: [
      { name: 'Home', url: 'https://truecodeai.com' },
      { name: 'Industries', url: 'https://truecodeai.com/industries' },
      { name: group.label, url: `https://truecodeai.com/industries/${group.slug}` },
    ],
  }));

  return (
    <>
      <Script id={`industry-schema-${niche}`} type="application/ld+json" strategy="beforeInteractive">
        {schema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-white/35 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#ff6a1a]">{group.label}</span>
          </nav>

          <div className="label flex items-center gap-3 mb-6">
            <span className="accent">✦</span> {groupSolutions.length} solutions
          </div>
          <h1 className="display-xl text-4xl md:text-6xl font-medium text-gradient max-w-4xl">
            {group.label}
            <br />
            <span className="font-serif-i accent font-normal">Automation Software</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/55 text-lg">{group.description}</p>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-8 h-14 text-base transition-transform duration-300 hover:scale-105"
          >
            Discuss your automation needs ↗
          </a>
        </section>

        {/* Solutions grid */}
        <section className="bg-[#0a0a0c] border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-10">
              Solutions for {group.label}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {groupSolutions.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="group glass rounded-2xl p-7 transition-all duration-500 hover:border-[#ff6a1a]/40 hover:-translate-y-1.5"
                >
                  <h3 className="font-display text-lg font-medium text-white group-hover:text-[#ff6a1a] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/50 line-clamp-3">{sol.metaDescription}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                    {sol.outcomes.slice(0, 3).map((o) => (
                      <div key={o.label} className="text-center">
                        <div className="font-display text-lg font-semibold text-[#ff6a1a]">{o.value}</div>
                        <div className="text-[10px] text-white/35 mt-0.5 leading-tight">{o.label}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other industries */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-white/10">
          <h2 className="font-display text-2xl font-medium text-white mb-8">Browse other industries</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nicheGroups.filter((g) => g.slug !== niche).map((g) => (
              <Link
                key={g.slug}
                href={`/industries/${g.slug}`}
                className="group glass rounded-2xl p-5 transition-all duration-300 hover:border-[#ff6a1a]/40"
              >
                <div className="font-display text-base font-medium text-white group-hover:text-[#ff6a1a] transition-colors">{g.label}</div>
                <div className="font-mono text-[10px] text-white/30 mt-1">
                  {solutions.filter((s) => s.niche === g.slug).length} solutions
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
