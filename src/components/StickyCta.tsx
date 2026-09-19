import { site } from '../data/site';

const hasWhatsApp = !/wa\.me\/0+$/.test(site.whatsapp);

/** Phone-only bottom bar: the quote form is always one tap away. Hidden on md+ where the nav CTA is visible. */
export default function StickyCta() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-[9930] border-t border-white/10 bg-[#060607]/90 backdrop-blur-xl px-4 py-3 flex gap-2">
      <a
        href="#contact"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6a1a] text-black font-medium h-11 text-sm"
      >
        Get a fixed price <span aria-hidden>↗</span>
      </a>
      {hasWhatsApp && (
        <a
          href={site.whatsapp}
          className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 h-11 text-sm text-white"
        >
          WhatsApp
        </a>
      )}
    </div>
  );
}
