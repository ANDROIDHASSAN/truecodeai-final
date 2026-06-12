import Link from 'next/link';
import { nav, site } from '@/data/site';

const hubs = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Free Tools', href: '/tools' },
  { label: 'Our Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-scroll-section
      className="relative bg-[#0a0a0c] border-t border-white/10 px-6 md:px-10 pt-16 pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="display-xl font-semibold text-white/[0.05] leading-none text-[21vw] md:text-[15vw] select-none -mb-[2vw]">
          TrueCode<span className="text-[#ff6a1a]/10">AI</span>
        </div>

        <div className="relative grid gap-10 md:grid-cols-4 border-t border-white/10 pt-10">
          <div className="max-w-xs md:col-span-1">
            <div className="font-display font-semibold text-white text-lg">
              TrueCode<span className="accent">AI</span>
              <span className="text-white/40 text-[10px] align-super ml-0.5">®</span>
            </div>
            <p className="mt-4 text-sm text-white/50">{site.tagline}</p>
            <p className="mt-1 text-sm text-white/40">{site.location}</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] accent">
              50+ engineers · 6 divisions
            </p>
          </div>

          <div>
            <div className="label">homepage</div>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={`/${item.href}`} className="text-white/60 hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label">explore</div>
            <ul className="mt-4 space-y-2">
              {hubs.map((h) => (
                <li key={h.href}>
                  <Link href={h.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {h.label}
                  </Link>
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
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill rounded-full border border-white/15 px-4 py-2 text-xs text-white/70"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[11px] text-white/40">
          <span>© {year} {site.name} — say it, we build it.</span>
          <div className="flex gap-6">
            <a href="/privacy-policy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
