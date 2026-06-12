// Typed JSON-LD helpers — only real data, no fabricated US addresses.

export const organizationJsonLd = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id': 'https://truecodeai.com/#organization',
  name: 'TrueCodeAI',
  alternateName: ['TrueCode AI', 'TrueCode Artificial Intelligence'],
  url: 'https://truecodeai.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://truecodeai.com/favicon.svg',
    width: 400,
    height: 400,
  },
  image: [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop',
  ],
  description:
    'TrueCodeAI is a 50-engineer software and AI development studio headquartered in Nashik, India, serving US and global clients — shipping startups, production-grade MVPs, AI agents, voice automation, and custom ML models.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nashik',
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422001',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 20.0059, longitude: 73.7797 },
  telephone: '+91-9716978692',
  email: 'truecodeai@gmail.com',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9716978692',
      contactType: 'sales',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      email: 'truecodeai@gmail.com',
      contactType: 'customer support',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
  foundingDate: '2023',
  areaServed: ['US', 'Worldwide'],
  slogan: 'We Build Anything',
  priceRange: '$$',
  currenciesAccepted: 'USD, INR, EUR, GBP',
  paymentAccepted: 'Wire Transfer, Credit Card',
  knowsAbout: [
    'Software Development', 'Artificial Intelligence', 'Machine Learning',
    'Large Language Models', 'Generative AI', 'AI Agents', 'Voice AI',
    'Natural Language Processing', 'Computer Vision', 'React', 'Next.js',
    'Node.js', 'TypeScript', 'Python', 'FastAPI', 'Cloud Computing',
    'AWS', 'Google Cloud Platform', 'Azure', 'DevOps', 'Kubernetes',
    'Docker', 'Web3', 'Blockchain', 'Cybersecurity', 'MVP Development',
    'Startup Development', 'Business Automation', 'MLOps',
  ],
  sameAs: [
    'https://www.linkedin.com/company/truecodeai',
    'https://twitter.com/truecodeai',
    'https://github.com/truecodeai',
    'https://www.instagram.com/truecodeai',
  ],
};

export const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': 'https://truecodeai.com/#website',
  url: 'https://truecodeai.com',
  name: 'TrueCodeAI',
  description: "India's leading AI & software development studio — 50 engineers shipping MVPs, AI agents, and custom ML models worldwide.",
  publisher: { '@id': 'https://truecodeai.com/#organization' },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://truecodeai.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const professionalServiceJsonLd = {
  '@type': 'ProfessionalService',
  '@id': 'https://truecodeai.com/#service',
  name: 'TrueCodeAI — AI & Software Development Studio',
  url: 'https://truecodeai.com',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  priceRange: '$$',
  description: 'End-to-end AI and software development: startups, production-grade MVPs, AI agents, voice agents, AI automation, custom ML models, cloud infrastructure, DevOps, Web3, and cybersecurity.',
  provider: { '@id': 'https://truecodeai.com/#organization' },
  areaServed: ['US', 'Worldwide'],
  serviceType: [
    'Software Development', 'AI Development', 'MVP Development',
    'Machine Learning', 'Voice Agent Development', 'AI Automation',
    'DevOps', 'Cloud Computing', 'Web3 Development', 'Cybersecurity',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: 5,
    ratingCount: 5,
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sara Lindqvist' },
      reviewBody: 'Their voice agent answers every call to our clinics. Bookings happen at 2am now. It paid for itself inside the first month.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2025-11-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Daniel Okafor' },
      reviewBody: "The MVP they shipped survived our Series A traffic spike untouched. Most agencies sell speed or quality. Somehow this was both.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2025-12-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Priya Sharma' },
      reviewBody: 'They trained a demand-forecasting model on three years of our messy data and it now drives our entire purchasing.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2025-10-20',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Marcus Chen' },
      reviewBody: 'One pod handled our app, our cloud and our security audit. Six vendors became one WhatsApp group. I will never go back.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2026-01-10',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Elena Rossi' },
      reviewBody: 'I described the idea on a Tuesday call. The kickoff doc arrived Wednesday morning. They really do build anything — and fast.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: '2026-02-28',
    },
  ],
};

export const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://truecodeai.com/#webpage',
      url: 'https://truecodeai.com',
      name: 'TrueCodeAI® — AI Development Company India | MVPs, AI Agents & Custom ML',
      isPartOf: { '@id': 'https://truecodeai.com/#website' },
      about: { '@id': 'https://truecodeai.com/#organization' },
      description: "India's AI & software development studio. 50 engineers shipping startups, production-grade MVPs, AI agents, voice agents & custom ML worldwide in weeks.",
      datePublished: '2024-01-15',
      dateModified: '2026-06-13',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truecodeai.com/' }],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://truecodeai.com/#faq',
      mainEntity: [
        { '@type': 'Question', name: 'What does TrueCodeAI build?', acceptedAnswer: { '@type': 'Answer', text: "TrueCodeAI builds anything software: startups end-to-end, production-grade MVPs, AI agents, voice agents, AI automation workflows, custom ML models, business solutions, cloud infrastructure, DevOps pipelines, Web3 applications, and cybersecurity audits. If you can describe it, we ship it." } },
        { '@type': 'Question', name: 'How fast can TrueCodeAI ship an MVP?', acceptedAnswer: { '@type': 'Answer', text: 'TrueCodeAI can kick off your project within 24 hours of your first call. Most production-grade MVPs are shipped in 4–8 weeks, with CI/CD, monitoring and production architecture from day one — no rewrite later.' } },
        { '@type': 'Question', name: 'Where is TrueCodeAI based?', acceptedAnswer: { '@type': 'Answer', text: 'TrueCodeAI is headquartered in Nashik, Maharashtra, India (PIN 422001), operating remote-first with a 50-engineer team serving clients in the US, UK, Europe, Middle East, and worldwide.' } },
        { '@type': 'Question', name: 'How do I start a project with TrueCodeAI?', acceptedAnswer: { '@type': 'Answer', text: 'Message TrueCodeAI on WhatsApp at +91-9716978692 or email truecodeai@gmail.com. You\'ll receive a scoped plan with architecture, team, timeline and fixed price within 48 hours.' } },
        { '@type': 'Question', name: 'How much does software development cost at TrueCodeAI?', acceptedAnswer: { '@type': 'Answer', text: 'TrueCodeAI provides fixed-price engagements tailored to project scope. Contact us for a free estimate — you\'ll receive a detailed quote within 48 hours.' } },
        { '@type': 'Question', name: 'What AI development services does TrueCodeAI offer?', acceptedAnswer: { '@type': 'Answer', text: "TrueCodeAI's AI division builds: custom LLM-powered AI agents, voice AI agents for phone and chat, AI process automation, custom ML model training, LLM fine-tuning, RAG systems, computer vision, and NLP solutions — all production-ready." } },
        { '@type': 'Question', name: 'Can TrueCodeAI build AI agents for my business?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. TrueCodeAI specialises in custom AI agent development that automates sales, customer support, appointment booking, ticket routing and complex multi-step workflows. Agents integrate with your existing CRM, ticketing system and communication tools.' } },
        { '@type': 'Question', name: 'What technologies does TrueCodeAI use?', acceptedAnswer: { '@type': 'Answer', text: 'TrueCodeAI engineers work across React, Next.js, Node.js, TypeScript, Python, FastAPI, PostgreSQL, MongoDB, AWS, GCP, Azure, Kubernetes, Docker, LangChain, OpenAI, Anthropic Claude, Whisper, Solidity, and more.' } },
        { '@type': 'Question', name: 'Does TrueCodeAI work with international clients?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. TrueCodeAI works with clients across the US, UK, EU, Middle East, Southeast Asia and worldwide. All projects run on async-first communication via Slack and Linear, with dedicated overlap hours for your timezone.' } },
        { '@type': 'Question', name: 'What makes TrueCodeAI different from other software development companies in India?', acceptedAnswer: { '@type': 'Answer', text: 'TrueCodeAI is a studio, not a body-shop. You get a dedicated cross-functional pod — frontend, backend, AI, cloud and security — under one roof. Projects ship in weeks at production grade, not months as a prototype. Fixed price, one point of contact, no surprise invoices.' } },
      ],
    },
  ],
};

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function servicePageJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  breadcrumbs: { name: string; url: string }[];
  faq?: { q: string; a: string }[];
}) {
  const graph: object[] = [
    {
      '@type': 'Service',
      name: opts.name,
      description: opts.description,
      url: opts.url,
      provider: { '@id': 'https://truecodeai.com/#organization' },
      areaServed: ['US', 'Worldwide'],
    },
    breadcrumbJsonLd(opts.breadcrumbs),
  ];
  if (opts.faq?.length) graph.push(faqJsonLd(opts.faq));
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  modifiedAt: string;
  breadcrumbs: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: opts.title,
        description: opts.description,
        url: opts.url,
        datePublished: opts.publishedAt,
        dateModified: opts.modifiedAt,
        publisher: { '@id': 'https://truecodeai.com/#organization' },
        author: { '@id': 'https://truecodeai.com/#organization' },
      },
      breadcrumbJsonLd(opts.breadcrumbs),
    ],
  };
}
