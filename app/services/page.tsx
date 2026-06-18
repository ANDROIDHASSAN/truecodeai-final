import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services — AI, Automation, CRM & Integrations',
  description:
    'TrueCodeAI delivers four core service lines: AI development, business process automation, custom CRM builds, and system integrations. 50 engineers. Ships in weeks.',
  alternates: { canonical: 'https://truecodeai.com/services' },
  openGraph: {
    title: 'Services — TrueCodeAI',
    description: 'AI development, automation, custom CRM and system integrations — built to production grade by a 50-engineer studio in weeks.',
    siteName: 'TrueCodeAI',
    url: 'https://truecodeai.com/services',
  },
};

const icons: Record<string, string> = {
  ai: '⬡',
  automation: '⟳',
  crm: '◈',
  integrations: '⇄',
};

export default function ServicesHubPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> what we do
        </div>
        <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-3xl">
          Services built for
          <br />
          <span className="font-serif-i accent font-normal">real results.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          Four focused service lines. One studio with 50 engineers. Everything delivered production-grade — no handoff to a junior team, no scope creep, no rewrite later.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group glass rounded-3xl p-8 border border-white/10 hover:border-[#ff6a1a]/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-3xl text-[#ff6a1a] mb-5 font-mono">{icons[svc.slug] ?? '✦'}</div>
              <h2 className="font-display text-2xl font-medium text-white group-hover:text-[#ff6a1a] transition-colors mb-3">
                {svc.slug.charAt(0).toUpperCase() + svc.slug.slice(1)}
              </h2>
              <p className="text-white/55 leading-relaxed mb-6">{svc.subheadline}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {svc.features.slice(0, 3).map((f) => (
                  <span key={f.title} className="glass rounded-full px-3 py-1 font-mono text-[10px] text-white/50">
                    {f.title}
                  </span>
                ))}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#ff6a1a]">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
