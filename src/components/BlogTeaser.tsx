import { sortedPosts } from '../data/posts';
import PostCard from './PostCard';

/** Latest three articles on the homepage — internal links from the strongest page to the blog. */
export default function BlogTeaser() {
  return (
    <section
      id="blog"
      data-scroll-section
      className="relative bg-[#060607] px-6 md:px-10 py-24 md:py-32 border-t border-white/10"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="label">
              <span className="accent">✦</span> from the studio
            </div>
            <h2 id="blog-heading" className="mt-6 display-xl text-4xl md:text-6xl font-medium text-white">
              Guides, with real numbers.
            </h2>
          </div>
          <a href="/blog" className="btn-fill inline-flex items-center self-start md:self-auto rounded-full border border-white/25 px-6 h-11 text-sm text-white">
            all articles ↗
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sortedPosts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
