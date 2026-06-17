import type { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Screenshots from '@/components/Screenshots';
import Team from '@/components/Team';
import Reviews from '@/components/Reviews';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { homepageJsonLd, howtoJsonLd } from '@/lib/jsonld';
import { process as processSteps } from '@/data/site';

export const metadata: Metadata = {
  // absolute bypasses the root layout template (%s | TrueCodeAI) — this page IS the brand root
  // 59 chars — within Google's ~60-char SERP display limit
  title: {
    absolute: 'TrueCodeAI® — AI Development Company India | MVPs & Agents',
  },
  // 155 chars — within Google's 150-160 char snippet limit
  description:
    "India's AI & software studio — 50 engineers. Production-grade MVPs, AI agents, voice bots & custom ML shipped worldwide in weeks. Kickoff in 24 hours.",
  alternates: { canonical: 'https://truecodeai.com' },
  openGraph: {
    // 32 chars — punchy for social cards
    title: 'TrueCodeAI® — We Build Anything',
    // 107 chars — within the ~125-char social preview limit
    description:
      '50-engineer AI studio. MVPs, AI agents, voice automation & custom ML shipped in weeks. Kickoff in 24 hours.',
    url: 'https://truecodeai.com',
    siteName: 'TrueCodeAI',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'TrueCodeAI — AI & Software Development Company India',
      },
    ],
  },
  twitter: {
    title: 'TrueCodeAI® — We Build Anything',
    description:
      '50-engineer AI studio. MVPs, AI agents, voice automation & custom ML shipped in weeks. Kickoff in 24 hours.',
    images: ['/opengraph-image'],
  },
};

const pageSchema = JSON.stringify(homepageJsonLd);
const howtoSchema = JSON.stringify({
  '@context': 'https://schema.org',
  ...howtoJsonLd(processSteps.map((s) => ({ title: s.title, desc: s.desc }))),
});

export default function HomePage() {
  return (
    <>
      <Script id="homepage-schema" type="application/ld+json" strategy="beforeInteractive">
        {pageSchema}
      </Script>
      <Script id="howto-schema" type="application/ld+json" strategy="beforeInteractive">
        {howtoSchema}
      </Script>
      <main className="bg-[#060607]">
        <Hero />
        <Manifesto />
        <Services />
        <Work />
        <Screenshots />
        <Team />
        <Reviews />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
