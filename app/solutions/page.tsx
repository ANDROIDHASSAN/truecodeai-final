import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { solutions } from '@/content/solutions';
import { nicheGroups } from '@/content/niches';
import { itemListJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Business Automation Solutions',
  description:
    'Browse 36 industry-specific automation solutions for trades, clinics, real estate, professional services, and e-commerce. Custom-built by TrueCodeAI.',
  alternates: { canonical: 'https://truecodeai.com/solutions' },
};

const listSchema = JSON.stringify(
  itemListJsonLd(
    solutions.map((s) => ({ slug: s.slug, title: s.title })),
    'https://truecodeai.com/solutions'
  )
);

export default function SolutionsHubPage() {
  return (
    <>
      <Script id="solutions-list-schema" type="application/ld+json" strategy="beforeInteractive">
        {listSchema}
      </Script>
      <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> all solutions
        </div>
        <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-3xl">
          Automation built
          <br />
          <span className="font-serif-i accent font-normal">for your industry.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          36 purpose-built automation workflows for trades, clinics, real estate, professional services, e-commerce, and AI-native businesses.
        </p>

        <div className="mt-20 space-y-20">
          {nicheGroups.map((group) => {
            const groupSolutions = solutions.filter((s) => s.niche === group.slug);
            return (
              <div key={group.slug} id={group.slug}>
                <div className="flex items-center gap-4 mb-8">
                  <Link href={`/industries/${group.slug}`} className="font-display text-2xl md:text-3xl font-medium text-white hover:text-[#ff6a1a] transition-colors">
                    {group.label}
                  </Link>
                  <span className="font-mono text-xs text-white/30 uppercase tracking-widest pt-1">{groupSolutions.length} solutions</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {groupSolutions.map((sol) => (
                    <Link
                      key={sol.slug}
                      href={`/solutions/${sol.slug}`}
                      className="group glass rounded-2xl p-6 transition-all duration-500 hover:border-[#ff6a1a]/40 hover:-translate-y-1"
                    >
                      <h2 className="font-display text-lg font-medium text-white group-hover:text-[#ff6a1a] transition-colors">
                        {sol.title}
                      </h2>
                      <p className="mt-2 text-sm text-white/50 line-clamp-2">{sol.metaDescription}</p>
                      <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a]">
                        View solution →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </main>
    </>
  );
}
