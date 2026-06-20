import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { locations, getLocationBySlug } from '@/content/locations';
import { solutions } from '@/content/solutions';
import { site } from '@/data/site';

export const revalidate = 86400;

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

type Props = { params: Promise<{ location: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) return {};
  const title = `AI Development Company in ${loc.city}${loc.state ? `, ${loc.state}` : ''} | TrueCodeAI`;
  const description = `TrueCodeAI builds AI agents, voice bots, RAG systems, and custom software for businesses in ${loc.city}. ${loc.businessContext.split('.')[0]}.`;
  return {
    title,
    description,
    alternates: { canonical: `https://truecodeai.com/hire/${loc.slug}` },
    openGraph: {
      title,
      description,
      url: `https://truecodeai.com/hire/${loc.slug}`,
      siteName: 'TrueCodeAI',
    },
  };
}

const FEATURED_SOLUTIONS = [
  'ai-phone-agents-contractors',
  'ai-chatbot-small-business',
  'crm-automation-small-business',
  'ai-lead-qualification',
  'workflow-automation-consulting',
  'rag-knowledge-base-ai',
].slice(0, 4);

export default async function HireLocationPage({ params }: Props) {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) notFound();

  const cityLabel = loc.state ? `${loc.city}, ${loc.state}` : `${loc.city}, ${loc.country}`;
  const pageUrl = `https://truecodeai.com/hire/${loc.slug}`;

  const featuredSols = solutions.filter((s) => FEATURED_SOLUTIONS.includes(s.slug)).slice(0, 4);

  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${pageUrl}#service`,
        name: `TrueCodeAI — AI Development for ${loc.city} Businesses`,
        description: `AI development company serving businesses in ${cityLabel}. We build AI agents, voice bots, RAG systems, and custom software.`,
        provider: { '@id': 'https://truecodeai.com/#organization' },
        areaServed: { '@type': 'City', name: loc.city, containedInPlace: { '@type': 'Country', name: loc.country } },
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truecodeai.com' },
          { '@type': 'ListItem', position: 2, name: 'Hire', item: 'https://truecodeai.com/hire' },
          { '@type': 'ListItem', position: 3, name: cityLabel, item: pageUrl },
        ],
      },
    ],
  });

  const SERVICES_LIST = [
    { name: 'AI Agents', desc: 'Autonomous agents that handle research, email, and multi-step workflows without human involvement.' },
    { name: 'Voice AI', desc: 'AI phone agents that answer calls, book appointments, and qualify leads — 24/7, in your brand voice.' },
    { name: 'RAG Systems', desc: 'AI that answers questions from your documentation, knowledge base, and business data — accurately.' },
    { name: 'CRM and Workflow Automation', desc: 'Connect your tools, eliminate manual data entry, and automate the processes that slow your team down.' },
    { name: 'Custom Software', desc: 'Production-grade web applications, APIs, and dashboards — built with Next.js, TypeScript, and Supabase.' },
    { name: 'AI Chatbots', desc: 'Customer support, lead capture, and FAQ bots that resolve 70%+ of inquiries without a human.' },
  ];

  const industries = loc.industryFocus;

  return (
    <>
      <Script id={`hire-schema-${loc.slug}`} type="application/ld+json" strategy="beforeInteractive">
        {schema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
          <nav className="flex items-center gap-2 font-mono text-[11px] text-white/35 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/hire" className="hover:text-white transition-colors">Hire</Link>
            <span>/</span>
            <span className="text-[#ff6a1a]">{cityLabel}</span>
          </nav>

          <div className="label flex items-center gap-3 mb-6">
            <span className="accent">✦</span> {loc.country === 'US' ? loc.region : loc.country}
          </div>

          <h1 className="display-xl text-4xl md:text-6xl font-medium text-gradient max-w-4xl leading-tight mb-6">
            AI Development for {loc.city} Businesses
          </h1>

          <p className="max-w-2xl text-lg text-white/60 leading-relaxed mb-4">
            We build AI agents, voice bots, RAG systems, and custom software for companies in {cityLabel} — delivered
            in weeks, not months, at transparent fixed prices.
          </p>

          <p className="max-w-2xl text-base text-white/45 leading-relaxed mb-10">
            {loc.businessContext}
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

        {/* Local market context */}
        <section className="bg-[#0a0a0c] border-t border-white/10 py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-medium text-white mb-4">
                  The {loc.city} AI market
                </h2>
                <p className="text-white/60 leading-relaxed mb-4">{loc.techScene}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {industries.map((ind) => (
                    <span key={ind} className="glass rounded-full px-4 py-1.5 font-mono text-[11px] text-white/55">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="font-display text-lg font-medium text-white mb-6">Why {loc.city} businesses choose TrueCodeAI</h3>
                <ul className="space-y-3">
                  {[
                    `${loc.city}-focused delivery — we understand your local market and buyer expectations`,
                    'Fixed-price projects — no hourly billing surprises',
                    'Production-grade systems, not demos or prototypes',
                    'Full source code ownership — no vendor lock-in',
                    'English-first team with async communication that works across time zones',
                    'Post-launch support and maintenance included',
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

        {/* Services */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
          <h2 className="font-display text-3xl font-medium text-white mb-10">
            What we build for {loc.city} businesses
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_LIST.map((svc) => (
              <div key={svc.name} className="glass rounded-2xl p-6">
                <h3 className="font-display text-base font-medium text-white mb-2">{svc.name}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-[#0a0a0c] border-t border-white/10 py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '2–4 weeks', label: 'typical delivery' },
                { value: '$0', label: 'cost to scope' },
                { value: '100%', label: 'source code owned by you' },
                { value: '24h', label: 'response time' },
              ].map((o) => (
                <div key={o.label} className="text-center">
                  <div className="font-display text-3xl font-medium text-[#ff6a1a]">{o.value}</div>
                  <div className="mt-2 text-sm text-white/45">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured solutions */}
        {featuredSols.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
            <h2 className="font-display text-3xl font-medium text-white mb-10">
              Popular solutions for {loc.city} companies
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {featuredSols.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="group glass rounded-2xl p-6 border border-white/10 hover:border-[#ff6a1a]/30 transition-all"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a] mb-2">
                    {sol.niche.replace(/-/g, ' ')}
                  </div>
                  <h3 className="font-display text-base font-medium text-white group-hover:text-[#ff6a1a] transition-colors mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed line-clamp-2">{sol.metaDescription}</p>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a]">Learn more →</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 pb-24">
          <div className="glass rounded-3xl p-10 text-center">
            <p className="font-display text-3xl text-white mb-3">
              Ready to build in {loc.city}?
            </p>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Tell us what you need — we scope it for free and reply within 24 hours with a plan and fixed price. No commitment required.
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
