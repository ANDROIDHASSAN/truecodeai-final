import { marquee } from '../data/site';

/** Infinite scrolling band of the markets we operate in. */
export default function Marquee() {
  // duplicate the list so the -50% keyframe loops seamlessly
  const items = [...marquee, ...marquee];

  return (
    <section
      data-scroll-section
      className="relative bg-[#060607] border-y border-white/10 py-6 md:py-8 overflow-hidden"
    >
      <div className="marquee-track items-center">
        {items.map((city, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-serif-i text-3xl md:text-5xl text-white/85 px-6 md:px-10">
              {city}
            </span>
            <span className="accent text-lg md:text-xl">✦</span>
          </span>
        ))}
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#060607] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#060607] to-transparent" />
    </section>
  );
}
