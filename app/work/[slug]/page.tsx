import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { projects, getProjectBySlug } from '@/data/site';
import { site } from '@/data/site';

export const revalidate = 86400;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.category} Case Study`,
    description: `${project.blurb} Built by TrueCodeAI. Result: ${project.metric}.`,
    alternates: { canonical: `https://truecodeai.com/work/${project.slug}` },
    openGraph: {
      title: `${project.name} by TrueCodeAI`,
      description: `${project.blurb} Result: ${project.metric}.`,
      url: `https://truecodeai.com/work/${project.slug}`,
      siteName: 'TrueCodeAI',
      images: [{ url: project.image, width: 1800, alt: project.name }],
      type: 'article',
    },
  };
}

export default async function WorkCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const pageUrl = `https://truecodeai.com/work/${project.slug}`;
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${project.name} — ${project.category} Case Study`,
        description: project.blurb,
        isPartOf: { '@id': 'https://truecodeai.com/#website' },
        about: { '@id': 'https://truecodeai.com/#organization' },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truecodeai.com' },
          { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://truecodeai.com/work' },
          { '@type': 'ListItem', position: 3, name: project.name, item: pageUrl },
        ],
      },
    ],
  });

  return (
    <>
      <Script id={`work-schema-${slug}`} type="application/ld+json" strategy="beforeInteractive">
        {schema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        {/* Hero image */}
        <div className="w-full aspect-[21/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        <article className="max-w-4xl mx-auto px-6 md:px-10 pt-12 pb-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-[11px] text-white/35 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <span>/</span>
            <span className="text-[#ff6a1a]">{project.name}</span>
          </nav>

          {/* Meta */}
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#ff6a1a] mb-4">
            {project.category}
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight mb-4">
            {project.name}
          </h1>

          <p className="text-xl text-white/60 leading-relaxed mb-12 border-b border-white/10 pb-10">
            {project.blurb}
          </p>

          {/* Outcomes row */}
          {project.outcomes && (
            <div className="grid grid-cols-3 gap-4 mb-14">
              {project.outcomes.map((o) => (
                <div key={o.label} className="glass rounded-2xl p-5 text-center">
                  <div className="font-display text-3xl font-medium text-[#ff6a1a]">{o.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">{o.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge */}
          {project.challenge && (
            <section className="mb-10">
              <h2 className="font-display text-2xl font-medium text-white mb-4">The challenge</h2>
              <p className="text-white/65 leading-relaxed text-[17px]">{project.challenge}</p>
            </section>
          )}

          {/* Solution */}
          {project.solution && (
            <section className="mb-10">
              <h2 className="font-display text-2xl font-medium text-white mb-4">What we built</h2>
              <p className="text-white/65 leading-relaxed text-[17px]">{project.solution}</p>
            </section>
          )}

          {/* Stack */}
          {project.stack && (
            <section className="mb-14">
              <h2 className="font-display text-2xl font-medium text-white mb-4">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="glass rounded-full px-4 py-1.5 font-mono text-[11px] text-white/60">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="glass rounded-3xl p-8 text-center">
            <p className="font-display text-2xl text-white mb-2">Want a project like this?</p>
            <p className="text-white/50 mb-6">
              Tell us what you need — we scope and price it for free within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-8 h-12 text-base transition-transform duration-300 hover:scale-105"
              >
                Start on WhatsApp ↗
              </a>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 glass rounded-full px-8 h-12 text-base text-white/70 hover:text-white transition-colors"
              >
                ← See all work
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
