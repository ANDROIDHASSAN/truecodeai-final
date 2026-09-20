import type { ReactNode } from 'react';
import type { Crumb } from '../seo';
import { site } from '../data/site';
import Nav from './Nav';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import ContactForm from './ContactForm';
import CtaBanner from './CtaBanner';

/**
 * Layout for every non-home page: nav, breadcrumbs, content, CTA + contact form, footer.
 * Plain document scroll — no Locomotive — keeps these pages light and native.
 */
export default function PageShell({
  crumbs,
  children,
  wide = false,
}: {
  crumbs: Crumb[];
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <>
      <Nav />
      <main className="bg-[#060607] min-h-screen">
        <div className={`mx-auto px-6 md:px-10 pt-32 md:pt-36 ${wide ? 'max-w-6xl' : 'max-w-3xl'}`}>
          <Breadcrumbs crumbs={crumbs} />
        </div>
        {children}

        <section className="max-w-3xl mx-auto px-6 md:px-10 pb-8">
          <CtaBanner />
        </section>

        <section
          id="contact"
          className="border-t border-white/10 px-6 md:px-10 py-24"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="contact-heading" className="display-xl text-4xl md:text-6xl font-medium text-white">
              Tell us what you want to exist.
            </h2>
            <p className="mt-4 text-white/65">
              We reply within 24 hours at {site.email} with how we would build it.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
