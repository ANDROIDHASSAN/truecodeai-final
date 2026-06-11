import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { nav, site } from '../data/site';
import { loco } from '../smooth/SmoothScroll';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  // drop in after the preloader curtain lifts
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-bar', {
        y: -80,
        opacity: 0,
        duration: 1.1,
        delay: 0.3,
        ease: 'expo.out',
      });
    }, root);
    return () => ctx.revert();
  }, []);

  // staggered links when the mobile menu opens
  useEffect(() => {
    if (!open) return;
    const ctx = gsap.context(() => {
      gsap.from('.menu-link', {
        yPercent: 120,
        duration: 0.8,
        stagger: 0.07,
        ease: 'expo.out',
      });
    }, root);
    return () => ctx.revert();
  }, [open]);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (loco.current) loco.current.scrollTo(href, { offset: -10 });
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={root}>
      <header className="fixed top-0 left-0 right-0 z-[9950] px-4 md:px-8 pt-4">
        <div className="nav-bar glass-strong rounded-2xl px-5 md:px-7 h-14 flex items-center justify-between">
          <a
            href="#top"
            onClick={go('#top')}
            className="font-display font-semibold tracking-tight text-lg text-white"
          >
            TrueCode<span className="accent">AI</span>
            <span className="text-white/40 text-[10px] align-super ml-0.5">®</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={go(item.href)}
                className="label !text-white/60 hover:!text-[#ff6a1a] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill hidden sm:inline-flex items-center rounded-full border border-white/25 px-5 h-9 text-sm font-medium text-white"
            >
              start a build
            </a>
            <button
              aria-label="menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid place-items-center h-9 w-9"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-px w-6 bg-white transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
                />
                <span
                  className={`block h-px w-6 bg-white transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* full-screen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[9940] bg-[#060607]/90 backdrop-blur-2xl flex flex-col justify-center px-8 py-24 overflow-y-auto md:hidden">
          {nav.map((item, i) => (
            <div key={item.href} className="line-mask py-1.5">
              <a
                href={item.href}
                onClick={go(item.href)}
                className="menu-link block display-xl text-[2.25rem] xs:text-5xl font-medium text-white"
              >
                <span className="font-mono text-sm accent mr-4">0{i + 1}</span>
                {item.label}
              </a>
            </div>
          ))}
          <div className="line-mask mt-12">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link block font-serif-i text-2xl accent"
            >
              start a build
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
