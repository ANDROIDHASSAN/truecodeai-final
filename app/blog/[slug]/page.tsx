import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { posts, getPostBySlug } from '@/content/posts';
import { articleJsonLd } from '@/lib/jsonld';
import { site } from '@/data/site';

export const revalidate = 86400;

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `https://truecodeai.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://truecodeai.com/blog/${post.slug}`,
      siteName: 'TrueCodeAI',
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

// Parse inline markdown (bold + links) into React nodes — no dangerouslySetInnerHTML
function InlineMd({ text }: { text: string }) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {tokens.map((tok, i) => {
        if (tok.startsWith('**') && tok.endsWith('**')) {
          return <strong key={i} className="text-white font-medium">{tok.slice(2, -2)}</strong>;
        }
        const linkMatch = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          return (
            <Link key={i} href={linkMatch[2]} className="text-[#ff6a1a] underline underline-offset-2 hover:no-underline">
              {linkMatch[1]}
            </Link>
          );
        }
        return <span key={i}>{tok}</span>;
      })}
    </>
  );
}

function renderTable(block: string) {
  const rows = block.split('\n').filter((r) => r.trim().startsWith('|'));
  const isHeader = rows.length >= 2 && /^\|[-| :]+\|$/.test(rows[1].trim());
  const dataRows = isHeader ? [rows[0], ...rows.slice(2)] : rows;
  const headerRow = isHeader ? rows[0] : null;
  const parseRow = (row: string) =>
    row.split('|').filter((_, ci) => ci > 0 && ci < row.split('|').length - 1).map((c) => c.trim());
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        {headerRow && (
          <thead>
            <tr>
              {parseRow(headerRow).map((cell, ci) => (
                <th key={ci} className="px-4 py-2 text-left text-white font-medium border-b border-white/20 font-mono text-[11px] uppercase tracking-widest">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {dataRows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/10">
              {parseRow(row).map((cell, ci) => (
                <td key={ci} className="px-4 py-2 text-white/60 leading-relaxed">
                  <InlineMd text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBody(body: string) {
  const sections = body.split('\n\n').filter(Boolean);
  return sections.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="font-display text-2xl font-medium text-white mt-12 mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    }
    if (block.startsWith('---')) {
      return <hr key={i} className="border-white/10 my-10" />;
    }
    // Markdown table — contains | on multiple lines
    if (block.includes('|') && block.split('\n').filter((l) => l.trim().startsWith('|')).length >= 2) {
      return <div key={i} className="glass rounded-xl overflow-hidden">{renderTable(block)}</div>;
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter((l) => l.startsWith('- '));
      return (
        <ul key={i} className="space-y-2 pl-4 border-l border-[#ff6a1a]/30">
          {items.map((item, j) => (
            <li key={j} className="text-white/65 leading-relaxed">
              <InlineMd text={item.replace(/^- /, '')} />
            </li>
          ))}
        </ul>
      );
    }
    // Numbered lists
    if (/^\d+\./.test(block.split('\n')[0])) {
      const items = block.split('\n').filter((l) => /^\d+\./.test(l));
      return (
        <ol key={i} className="space-y-2 pl-4 border-l border-[#ff6a1a]/30 list-decimal list-inside">
          {items.map((item, j) => (
            <li key={j} className="text-white/65 leading-relaxed">
              <InlineMd text={item.replace(/^\d+\.\s*/, '')} />
            </li>
          ))}
        </ol>
      );
    }
    // Bold-only block (standalone feature label)
    if (block.startsWith('**') && block.endsWith('**') && !block.slice(2).includes('**')) {
      return (
        <p key={i} className="font-medium text-white mt-6">
          {block.slice(2, -2)}
        </p>
      );
    }
    return (
      <p key={i} className="text-white/65 leading-relaxed text-[17px]">
        <InlineMd text={block} />
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const schema = JSON.stringify(
    articleJsonLd({
      title: post.title,
      description: post.metaDescription,
      url: `https://truecodeai.com/blog/${post.slug}`,
      publishedAt: post.publishedAt,
      modifiedAt: post.publishedAt,
      breadcrumbs: [
        { name: 'Home', url: 'https://truecodeai.com' },
        { name: 'Blog', url: 'https://truecodeai.com/blog' },
        { name: post.title, url: `https://truecodeai.com/blog/${post.slug}` },
      ],
    })
  );

  return (
    <>
      <Script id={`post-schema-${slug}`} type="application/ld+json" strategy="beforeInteractive">
        {schema}
      </Script>

      <main className="min-h-screen bg-[#060607] text-white">
        <article className="max-w-3xl mx-auto px-6 md:px-10 pt-36 pb-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-[11px] text-white/35 uppercase tracking-widest mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#ff6a1a]">{post.category}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#ff6a1a]">{post.category}</span>
            <span className="text-white/20">·</span>
            <time className="font-mono text-[11px] text-white/40" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span className="text-white/20">·</span>
            <span className="font-mono text-[11px] text-white/40">{post.readingTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-white/60 leading-relaxed mb-12 border-b border-white/10 pb-10">
            {post.excerpt}
          </p>

          {/* Body */}
          <div className="space-y-6">{renderBody(post.body)}</div>

          {/* CTA */}
          <div className="mt-16 glass rounded-3xl p-8 text-center">
            <p className="font-display text-2xl text-white mb-2">Ready to build with AI?</p>
            <p className="text-white/50 mb-6">
              Tell us what you need — we scope it for free and reply within 24 hours with a fixed price.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff6a1a] text-black font-medium rounded-full px-8 h-12 text-base transition-transform duration-300 hover:scale-105"
            >
              Start on WhatsApp ↗
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
