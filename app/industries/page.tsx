import type { Metadata } from 'next';
import Link from 'next/link';
import { nicheGroups } from '@/content/niches';
import { solutions } from '@/content/solutions';

export const metadata: Metadata = {
  title: 'Industries We Serve — TrueCodeAI Automation',
  description:
    'TrueCodeAI builds custom automation software for trades, healthcare clinics, real estate, professional services, e-commerce, and AI-native businesses across the USA and globally.',
  alternates: { canonical: 'https://truecodeai.com/industries' },
};

export default function IndustriesHubPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> industries
        </div>
        <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-3xl">
          We build for
          <br />
          <span className="font-serif-i accent font-normal">your specific world.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          Generic software solves generic problems. We build automation tailored to the actual workflows, compliance needs, and customer expectations of your industry.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nicheGroups.map((group) => {
            const count = solutions.filter((s) => s.niche === group.slug).length;
            return (
              <Link
                key={group.slug}
                href={`/industries/${group.slug}`}
                className="group glass rounded-2xl p-8 transition-all duration-500 hover:border-[#ff6a1a]/40 hover:-translate-y-1.5"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a] mb-3">
                  {count} solutions
                </div>
                <h2 className="font-display text-2xl font-medium text-white group-hover:text-[#ff6a1a] transition-colors">
                  {group.label}
                </h2>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{group.description}</p>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-white/30 group-hover:text-[#ff6a1a] transition-colors">
                  Explore →
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
