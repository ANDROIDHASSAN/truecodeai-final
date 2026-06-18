import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/site';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Work — TrueCodeAI Case Studies',
  description:
    'See what TrueCodeAI has shipped: production dashboards, AI agents, SaaS platforms, and custom automations for clients across industries.',
  alternates: { canonical: 'https://truecodeai.com/work' },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> shipped
        </div>
        <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-3xl">
          Things we
          <br />
          <span className="font-serif-i accent font-normal">actually built.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          No concept mockups. No wireframes presented as "case studies." These are production systems, live products, and real automations running for real businesses.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff6a1a]/30 transition-colors"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a] mb-3">{p.category}</div>
                <h2 className="font-display text-xl font-medium text-white group-hover:text-[#ff6a1a] transition-colors">{p.name}</h2>
                <p className="mt-2 text-sm text-white/50">{p.blurb}</p>
                {p.metric && <div className="mt-3 font-mono text-[11px] text-white/30">{p.metric}</div>}
                <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a] opacity-0 group-hover:opacity-100 transition-opacity">
                  View case study →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-6">Want to be next? Tell us what you need.</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-9 h-14 text-base transition-transform duration-300 hover:scale-105"
          >
            Start your project ↗
          </a>
        </div>
      </section>
    </main>
  );
}
