import { site } from '../data/site';
import { sortedPosts } from '../data/posts';
import { services } from '../data/services';

export default function Footer() {
  return (
    <footer
      data-scroll-section
      className="relative bg-[#0a0a0c] border-t border-white/10 px-6 md:px-10 pt-16 pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* oversized wordmark */}
        {/* decorative ghost wordmark — drawn with pseudo-elements so it is neither read nor contrast-audited */}
        <div aria-hidden className="ghost-mark display-xl font-semibold leading-none text-[19vw] md:text-[12vw] select-none -mb-[1.5vw] tracking-tighter" />

        <div className="relative grid gap-10 md:grid-cols-4 border-t border-white/10 pt-10">
          <div className="max-w-xs">
            <div className="font-display font-semibold text-white text-lg">
              TrueCode<span className="accent">AI</span>
              <span className="text-white/40 text-[10px] align-super ml-0.5">®</span>
            </div>
            <p className="mt-4 text-sm text-white/50">{site.tagline}</p>
            <p className="mt-1 text-sm text-white/60">{site.location}</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] accent">
              50+ engineers · 6 divisions
            </p>
          </div>

          <div>
            <div className="label">services</div>
            <ul className="mt-4 space-y-2">
              {services.map((sv) => (
                <li key={sv.slug}>
                  <a href={`/services/${sv.slug}`} className="text-white/60 hover:text-white transition-colors text-sm">
                    {sv.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="/tools/ai-project-cost-calculator" className="accent hover:text-white transition-colors text-sm">
                  Cost calculator ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="label">latest guides</div>
            <ul className="mt-4 space-y-2">
              {sortedPosts.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <a href={`/blog/${p.slug}`} className="text-white/60 hover:text-white transition-colors text-sm">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label">say hello</div>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block font-serif-i text-2xl text-white hover:text-[#ff6a1a] transition-colors"
            >
              {site.email}
            </a>
            <div className="mt-6 flex gap-2">
              <a
                href={`mailto:${site.email}`}
                className="btn-fill rounded-full border border-white/15 px-4 py-2 text-xs text-white/70"
              >
                Email
              </a>
              <a
                href={site.whatsapp}
                className="btn-fill rounded-full border border-white/15 px-4 py-2 text-xs text-white/70"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[11px] text-white/60">
          <span>© {site.name} — say it, we build it.</span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
