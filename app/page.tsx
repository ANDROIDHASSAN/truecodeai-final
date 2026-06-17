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
  title: {
    absolute: 'TrueCodeAI® — AI Development Company India | MVPs, AI Agents & Custom ML',
  },
  description:
    "India's AI & software development studio — 50 engineers. Production-grade MVPs, AI agents, voice bots & custom ML shipped in weeks. Trusted worldwide. Kickoff in 24 hours.",
  alternates: { canonical: 'https://truecodeai.com' },
  openGraph: {
    title: 'TrueCodeAI® — AI Development Company India | MVPs in Weeks',
    description:
      '50-engineer AI & software studio. Startups, production-grade MVPs, AI agents, voice automation & custom ML — from idea to live product in weeks.',
    url: 'https://truecodeai.com',
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
    title: 'TrueCodeAI® — AI Development Company India',
    description: '50 engineers. MVPs, AI agents, voice bots & custom ML shipped in weeks. Describe it — we build it.',
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
