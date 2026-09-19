import { useEffect, useState } from 'react';
import { nav, site } from '../data/site';
import { scrollToTarget } from '../smooth/SmoothScroll';

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 font-display font-semibold tracking-tight text-[17px] text-white">
      <span aria-hidden className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#ff9a5c] to-[#ff4d1a] text-[13px] font-bold text-black shadow-[0_0_24px_rgba(255,106,26,0.35)]">
        T
      </span>
      <span>
        TrueCode<span className="accent">AI</span>
      </span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // frosted bar once the page moves; transparent over the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock page scroll behind the mobile menu
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const go = (href: string) => (e: React.MouseEvent) => {
    setOpen(false);
    // only intercept in-page hash links whose target exists here; everything else navigates normally
    const hash = href.includes('#') ? href.slice(href.indexOf('#')) : '';
    if (!hash || !document.querySelector(hash)) return;
    e.preventDefault();
    scrollToTarget(hash);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[9950] transition-[background-color,border-color,backdrop-filter] duration-500 border-b ${
          scrolled || open ? 'bg-[#060607]/75 backdrop-blur-xl border-white/[0.08]' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <Logo />

          <nav aria-label="Main" className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={go(item.href)}
                className="rounded-full px-3.5 py-2 text-sm capitalize text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              onClick={go('/#contact')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#ff6a1a] px-4 h-9 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Get a quote <span aria-hidden>↗</span>
            </a>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-white/10"
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 top-0 block h-px w-4 bg-white transition-transform duration-300 ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
                <span className={`absolute left-0 bottom-0 block h-px w-4 bg-white transition-transform duration-300 ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu sheet */}
      <div
        className={`fixed inset-0 z-[9940] md:hidden bg-[#060607]/95 backdrop-blur-2xl transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col px-6 pt-24 pb-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={go(item.href)}
              tabIndex={open ? 0 : -1}
              className="border-b border-white/[0.08] py-4 font-display text-2xl font-medium capitalize text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={go('/#contact')}
            tabIndex={open ? 0 : -1}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#ff6a1a] font-medium text-black"
          >
            Get a fixed price in 48h
          </a>
          <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1} className="mt-auto text-sm text-zinc-400">
            {site.email}
          </a>
        </nav>
      </div>
    </>
  );
}
