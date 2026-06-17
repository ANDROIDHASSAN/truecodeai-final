import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/content/posts';

export const metadata: Metadata = {
  title: 'Blog — Business Automation Insights',
  description:
    'Practical guides on AI agents, business automation and operational efficiency for US small business owners, contractors and founders.',
  alternates: { canonical: 'https://truecodeai.com/blog' },
};

export default function BlogHubPage() {
  return (
    <main className="min-h-screen bg-[#060607] text-white">
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="label flex items-center gap-3 mb-6">
          <span className="accent">✦</span> insights
        </div>
        <h1 className="display-xl text-5xl md:text-7xl font-medium text-gradient max-w-3xl">
          Automation
          <br />
          <span className="font-serif-i accent font-normal">without the jargon.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/55 text-lg">
          Practical guides for business owners who want to automate more and do less manual work.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass rounded-2xl p-7 transition-all duration-500 hover:border-[#ff6a1a]/40 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a]">{post.category}</span>
                <span className="text-white/20">·</span>
                <span className="font-mono text-[10px] text-white/35">{post.readingTime}</span>
              </div>
              <h2 className="font-display text-xl font-medium text-white group-hover:text-[#ff6a1a] transition-colors leading-snug mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-white/50 leading-relaxed line-clamp-3">{post.excerpt}</p>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-[#ff6a1a]">
                Read article →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
