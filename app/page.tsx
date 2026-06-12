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
import { homepageJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'TrueCodeAI® — AI Development Company India | MVPs, AI Agents & Custom ML',
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
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'TrueCodeAI — AI & Software Development Company India',
      },
    ],
  },
  twitter: {
    title: 'TrueCodeAI® — AI Development Company India',
    description: '50 engineers. MVPs, AI agents, voice bots & custom ML shipped in weeks. Describe it — we build it.',
    images: ['https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
};

const pageSchema = JSON.stringify(homepageJsonLd);

export default function HomePage() {
  return (
    <>
      <Script id="homepage-schema" type="application/ld+json" strategy="beforeInteractive">
        {pageSchema}
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
