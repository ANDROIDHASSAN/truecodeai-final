import { useEffect, useState, type FormEvent } from 'react';
import { site } from '../data/site';

/**
 * Lead-capture form used on every page.
 * Posts JSON to VITE_FORM_ENDPOINT (Formspree / Basin / your own API).
 * ponytail: if no endpoint is configured it falls back to a prefilled mailto —
 * swap in a real endpoint before launch.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const BUDGETS = ['< $5k', '$5k – $25k', '$25k – $100k', '$100k+', 'Not sure yet'];

type Status = 'idle' | 'sending' | 'sent' | 'error';

/** First-touch attribution: which campaign / referrer / landing page brought this lead. */
function leadSource(): Record<string, string> {
  try {
    const KEY = 'tc_first_touch';
    const saved = sessionStorage.getItem(KEY);
    if (saved) return JSON.parse(saved);
    const q = new URLSearchParams(window.location.search);
    const src: Record<string, string> = { landing: window.location.pathname, referrer: document.referrer || 'direct' };
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
      const v = q.get(k);
      if (v) src[k] = v;
    }
    sessionStorage.setItem(KEY, JSON.stringify(src));
    return src;
  } catch {
    return { landing: window.location.pathname };
  }
}

const field =
  'w-full rounded-xl bg-white/[0.04] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ff6a1a] transition-colors';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  // record first touch as soon as any page with a form loads
  useEffect(() => {
    leadSource();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (data._gotcha) return; // honeypot

    if (!ENDPOINT) {
      const src = leadSource();
      const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nBudget: ${data.budget}\n\n${data.message}\n\n— page: ${window.location.pathname} · came from: ${src.utm_source ?? src.referrer} · landed on: ${src.landing}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `New build request from ${data.name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, page: window.location.pathname, ...leadSource() }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-2xl text-left"
      aria-label="Contact TrueCodeAI"
      noValidate={false}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="label">name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={`mt-2 ${field}`} />
        </label>
        <label className="block">
          <span className="label">email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={`mt-2 ${field}`}
          />
        </label>
        <label className="block">
          <span className="label">company</span>
          <input name="company" autoComplete="organization" placeholder="Optional" className={`mt-2 ${field}`} />
        </label>
        <label className="block">
          <span className="label">budget</span>
          <select name="budget" defaultValue="" className={`mt-2 ${field} bg-[#0a0a0c]`}>
            <option value="" disabled>
              Select a range
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="label">what do you want to exist?</span>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="A napkin sketch, a voice-note transcript, half an idea — all valid."
            className={`mt-2 ${field} resize-y`}
          />
        </label>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-3 bg-[#ff6a1a] text-black font-medium rounded-full px-8 h-12 text-sm transition-transform duration-500 hover:scale-105 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send it'} <span>↗</span>
        </button>
        <span role="status" aria-live="polite" className="font-mono text-xs text-white/50">
          {status === 'sent' && 'Got it — we reply within 24 hours.'}
          {status === 'error' && `Something broke. Email us at ${site.email}.`}
        </span>
      </div>
    </form>
  );
}
