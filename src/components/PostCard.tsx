import { readingTime, type Post } from '../data/posts';
import { authorFor } from '../data/authors';

export const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

const w = (src: string, width: number) => src.replace(/w=\d+/, `w=${width}`);

export default function PostCard({
  post,
  eager = false,
  featured = false,
  as: Heading = 'h3',
}: {
  post: Post;
  eager?: boolean;
  /** wide image-left layout for the lead story of a listing page */
  featured?: boolean;
  as?: 'h2' | 'h3';
}) {
  const href = `/blog/${post.slug}`;
  return (
    <article
      className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 transition-colors"
      data-hover
    >
      <a href={href} className={`h-full ${featured ? 'flex flex-col md:grid md:grid-cols-5' : 'flex flex-col'}`}>
        <div className={`aspect-[16/9] overflow-hidden ${featured ? 'md:col-span-3 md:aspect-auto md:min-h-[340px]' : ''}`}>
          <img
            src={w(post.cover, 800)}
            srcSet={`${w(post.cover, 480)} 480w, ${w(post.cover, 800)} 800w, ${w(post.cover, 1200)} 1200w`}
            sizes={featured ? '(min-width: 768px) 660px, 100vw' : '(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw'}
            alt={post.coverAlt}
            width={1400}
            height={788}
            loading={eager ? 'eager' : 'lazy'}
            {...(eager ? { fetchpriority: 'high' } : {})}
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className={`flex flex-1 flex-col p-6 ${featured ? 'md:col-span-2 md:p-8 md:justify-center' : ''}`}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
            <span className="accent">{post.kind ?? 'Guide'}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{fmtDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{readingTime(post)} min read</span>
          </div>
          <Heading
            className={`mt-3 font-display font-medium text-white group-hover:text-[#ff6a1a] transition-colors ${
              featured ? 'text-2xl md:text-4xl leading-tight' : 'text-xl leading-snug'
            }`}
          >
            {post.title}
          </Heading>
          <p className={`mt-3 text-sm text-white/65 leading-relaxed ${featured ? 'md:text-base' : 'line-clamp-3'}`}>{post.description}</p>
          <div className="mt-auto pt-5 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs text-white/55">By {authorFor(post.author).name}</span>
            {post.tags.slice(0, featured ? 3 : 2).map((t) => (
              <span key={t} className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-white/15 px-3 py-1 text-white/70">
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
