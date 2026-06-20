import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { technologies } from '@/content/technologies';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Technologies We Use | AI Stack, Tools & Frameworks | TrueCodeAI',
  description: 'See the AI models, frameworks, databases, and tools TrueCodeAI uses to build production AI agents, voice bots, RAG systems, and web applications.',
  alternates: { canonical: 'https://truecodeai.com/technologies' },
  openGraph: {
    title: 'Our Technology Stack | TrueCodeAI',
    description: 'Claude Code, Anthropic API, OpenAI, LangChain, Pinecone, ElevenLabs, Vapi, Next.js and more — the tools we use to build production AI systems.',
    url: 'https://truecodeai.com/technologies',
    siteName: 'TrueCodeAI',
  },
};

const schema = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://truecodeai.com/technologies#webpage',
      url: 'https://truecodeai.com/technologies',
      name: 'Technologies We Use | TrueCodeAI',
      description: 'AI models, frameworks, databases, and tools TrueCodeAI uses for production AI development.',
      isPartOf: { '@id': 'https://truecodeai.com/#website' },
      about: { '@id': 'https://truecodeai.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truecodeai.com' },
        { '@type': 'ListItem', position: 2, name: 'Technologies', item: 'https://truecodeai.com/technologies' },
      ],
    },
  ],
});

const CATEGORY_ORDER = [
  'AI Coding Agent',
  'AI Code Editor',
  'AI Model API',
  'AI Framework',
  'Voice AI Platform',
  'Voice AI',
  'Vector Database',
  'Workflow Automation',
  'Communications Platform',
  'Frontend Framework',
  'Backend as a Service',
  'Programming Language',
];

export default function TechnologiesPage() {
  const grouped: Record<string, typeof technologies> = {};
  for (const tech of technologies) {
    if (!grouped[tech.category]) grouped[tech.category] = [];
    grouped[tech.category].push(tech);
  }

  const orderedCategories = [
    ...CATEGORY_ORDER.filter((c) => grouped[c]),
    ...Object.keys(grouped).filter((c) => !CATEGORY_ORDER.includes(c)),
  ];

  return (
    <>
      <Script id="tech-hub-schema" type="application/ld+json" strategy="beforeInteractive">
        {schema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
          <div className="label flex items-center gap-3 mb-6">
            <span className="accent">✦</span> technologies
          </div>
          <h1 className="display-xl text-4xl md:text-6xl font-medium text-gradient max-w-4xl leading-tight mb-6">
            Our Technology Stack
          </h1>
          <p className="max-w-2xl text-lg text-white/60 leading-relaxed">
            We use the best tools available for each job — not a one-size-fits-all stack. Here is what we build with and why.
          </p>
        </section>

        {/* Technologies by category */}
        {orderedCategories.map((category) => (
          <section key={category} className="border-t border-white/10 py-16">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-[#ff6a1a] mb-6">{category}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[category].map((tech) => (
                  <Link
                    key={tech.slug}
                    href={`/technologies/${tech.slug}`}
                    className="group glass rounded-2xl p-6 border border-white/10 hover:border-[#ff6a1a]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="font-display text-lg font-medium text-white group-hover:text-[#ff6a1a] transition-colors mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed mb-4">{tech.tagline}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {tech.outcomes.slice(0, 1).map((o) => (
                          <span key={o.label} className="font-mono text-[10px] text-[#ff6a1a]">
                            {o.value} {o.label}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a] opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 py-24">
          <div className="glass rounded-3xl p-10 text-center">
            <p className="font-display text-3xl text-white mb-3">Ready to build?</p>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Tell us what you need — we scope it for free and reply within 24 hours with the right stack and a fixed price.
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
