import type { Metadata } from 'next';
import Script from 'next/script';
import { Space_Grotesk, Instrument_Serif, Space_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Cursor from '@/components/Cursor';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { organizationJsonLd, websiteJsonLd, professionalServiceJsonLd } from '@/lib/jsonld';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://truecodeai.com'),
  title: {
    default: 'TrueCodeAI® — AI Development Company India | MVPs, AI Agents & Custom ML',
    template: '%s | TrueCodeAI',
  },
  description:
    "India's AI & software development studio — 50 engineers. Production-grade MVPs, AI agents, voice bots & custom ML shipped in weeks. Trusted worldwide. Kickoff in 24 hours.",
  keywords: [
    'software development company India',
    'AI development company India',
    'MVP development company',
    'AI agent development',
    'voice agent development',
    'custom ML models',
    'AI automation company',
    'startup development company India',
  ],
  authors: [{ name: 'TrueCodeAI' }],
  creator: 'TrueCodeAI',
  publisher: 'TrueCodeAI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: { type: 'website', siteName: 'TrueCodeAI', locale: 'en_US' },
  twitter: { card: 'summary_large_image', site: '@truecodeai', creator: '@truecodeai' },
  verification: { google: 'a89c243b1c973ad6' },
  alternates: {
    canonical: 'https://truecodeai.com',
    languages: { en: 'https://truecodeai.com', 'x-default': 'https://truecodeai.com' },
  },
};

const siteSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [organizationJsonLd, websiteJsonLd, professionalServiceJsonLd],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${spaceMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#060607" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TrueCodeAI" />
        <meta name="application-name" content="TrueCodeAI" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik, Maharashtra, India" />
        <meta name="geo.position" content="20.0059;73.7797" />
        <meta name="ICBM" content="20.0059, 73.7797" />
        {/* LCP preload — first hero slide is the largest contentful paint candidate */}
        <link rel="preload" as="image" href="/img/hero/hero1.jfif" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {/* Site-wide structured data — static TypeScript constants serialised server-side */}
        <Script id="site-schema" type="application/ld+json" strategy="beforeInteractive">
          {siteSchema}
        </Script>
        <Cursor />
        <Nav />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
