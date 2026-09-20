import { useRef } from 'react';
import { gsap } from 'gsap';
import { contact, site } from '../data/site';
import { useReveal } from '../smooth/SmoothScroll';
import ContactForm from './ContactForm';

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useReveal(root, (scroller) => {
    // immediateRender:false → if the trigger never fires, content stays VISIBLE
    gsap.from('.cta-el', {
      scrollTrigger: { trigger: '.cta-inner', scroller, start: 'top 88%' },
      y: 48,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      immediateRender: false,
    });
  });

  return (
    <section
      id="contact"
      ref={root}
      data-scroll-section
      className="relative bg-[#060607] px-6 md:px-10 py-32 md:py-48 border-t border-white/10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.3] [mask-image:radial-gradient(80%_60%_at_50%_40%,black,transparent)]" />
      <div className="orb h-[460px] w-[460px] bg-[#ff6a1a] opacity-10 left-1/2 top-1/3 -translate-x-1/2" />

      <div className="cta-inner relative max-w-4xl mx-auto text-center">
        <div className="cta-el label inline-flex items-center gap-3">
          <span className="accent">✦</span> {contact.kicker}
        </div>
        <h2 className="cta-el mt-8 display-xl text-4xl md:text-7xl text-white">
          {contact.titleA}
          <br />
          <span className="font-serif-i">
            {contact.titleB}
          </span>
        </h2>
        <p className="cta-el mt-8 text-white/65 max-w-xl mx-auto text-lg">{contact.desc}</p>

        <div className="cta-el mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 bg-[#ff6a1a] text-black font-medium rounded-full px-9 h-14 text-base transition-transform duration-500 hover:scale-105"
          >
            {contact.ctaPrimary}
            <span>↗</span>
          </a>
          <a
            href={site.whatsapp}
            className="btn-fill inline-flex items-center rounded-full px-9 h-14 border border-white/25 text-white"
          >
            {contact.ctaSecondary}
          </a>
        </div>

        <div className="cta-el mt-16">
          <ContactForm />
        </div>

        <div className="cta-el mt-14 font-mono text-xs text-white/40 tracking-[0.18em] uppercase">
          {site.email} · replies within 24h · {site.location}
        </div>
      </div>
    </section>
  );
}
