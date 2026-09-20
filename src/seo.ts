// Per-route <head> data and JSON-LD. Consumed by entry-server.tsx (prerender)
// and by Breadcrumbs.tsx (visible trail). Single source of truth for URLs.
import { legalPages } from './data/legal';
import { posts, sortedPosts, readingTime } from './data/posts';
import { authorFor } from './data/authors';
import { services } from './data/services';
import { homeFaq } from './data/site';

export const ORIGIN = 'https://truecodeai.com';
export const ORG_ID = `${ORIGIN}/#org`;
export const SITE_ID = `${ORIGIN}/#website`;
export const OG_IMAGE = `${ORIGIN}/og.png`;

export type Crumb = { name: string; path: string };

export type Route = {
  path: string;
  title: string;
  description: string;
  ogType: 'website' | 'article';
  image: string;
  crumbs: Crumb[];
  jsonLd: Record<string, unknown>[];
  lastmod: string;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  priority: string;
};

const url = (path: string) => (path === '/' ? `${ORIGIN}/` : `${ORIGIN}${path}`);

const breadcrumbLd = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: url(c.path),
  })),
});

const webPageLd = (r: { path: string; title: string; description: string }, extra: Record<string, unknown> = {}) => ({
  '@type': 'WebPage',
  '@id': `${url(r.path)}#webpage`,
  url: url(r.path),
  name: r.title,
  description: r.description,
  isPartOf: { '@id': SITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en',
  ...extra,
});

const HOME: Crumb = { name: 'Home', path: '/' };
const BLOG: Crumb = { name: 'Blog', path: '/blog' };
const SERVICES: Crumb = { name: 'Services', path: '/services' };

const TODAY = '2026-09-19';

export const PER_PAGE = 10;
export const blogPageCount = Math.ceil(posts.length / PER_PAGE);
export const blogPagePath = (n: number) => (n <= 1 ? '/blog' : `/blog/page/${n}`);

export function buildRoutes(): Route[] {
  const routes: Route[] = [];

  // home
  const home = {
    path: '/',
    title: 'TrueCodeAI — Software Studio for MVPs, AI Agents & Custom ML',
    description:
      '50-engineer software studio in Nashik, India. We build startups, production-grade MVPs, AI agents, voice agents, automation and custom ML models.',
  };
  routes.push({
    ...home,
    ogType: 'website',
    image: OG_IMAGE,
    crumbs: [HOME],
    jsonLd: [
      webPageLd(home),
      {
        '@type': 'FAQPage',
        mainEntity: homeFaq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '1.0',
  });

  // blog index
  const blog = {
    path: '/blog',
    title: 'Blog — MVP, AI Agent & ML Guides from TrueCodeAI',
    description:
      'Practical guides on MVP cost and timelines, AI agent development, voice agents and custom ML — written by the engineers who build them.',
  };
  routes.push({
    ...blog,
    ogType: 'website',
    image: OG_IMAGE,
    crumbs: [HOME, BLOG],
    jsonLd: [
      webPageLd(blog, { '@type': 'CollectionPage' }),
      breadcrumbLd([HOME, BLOG]),
      {
        '@type': 'Blog',
        '@id': `${ORIGIN}/blog#blog`,
        url: `${ORIGIN}/blog`,
        name: 'TrueCodeAI Blog',
        publisher: { '@id': ORG_ID },
        blogPost: posts.map((p) => ({ '@id': `${ORIGIN}/blog/${p.slug}#article` })),
      },
    ],
    lastmod: posts.reduce((m, p) => (p.updated > m ? p.updated : m), '2026-01-01'),
    changefreq: 'weekly',
    priority: '0.8',
  });

  // blog pages 2..N — page 1 is /blog. Self-canonical: each page lists different posts.
  for (let n = 2; n <= blogPageCount; n++) {
    const path = blogPagePath(n);
    const page = {
      path,
      title: `Blog — Page ${n} of ${blogPageCount} | TrueCodeAI`,
      description: `Page ${n} of ${blogPageCount} of the TrueCodeAI blog: guides on MVP cost, AI agents, voice agents, automation and custom ML from our engineers.`,
    };
    const crumbs = [HOME, BLOG, { name: `Page ${n}`, path }];
    const onPage = sortedPosts.slice((n - 1) * PER_PAGE, n * PER_PAGE);
    routes.push({
      ...page,
      ogType: 'website',
      image: OG_IMAGE,
      crumbs,
      jsonLd: [
        webPageLd(page, { '@type': 'CollectionPage', isPartOf: { '@id': `${ORIGIN}/blog#blog` } }),
        breadcrumbLd(crumbs),
        {
          '@type': 'ItemList',
          itemListElement: onPage.map((p, i) => ({ '@type': 'ListItem', position: (n - 1) * PER_PAGE + i + 1, url: url(`/blog/${p.slug}`) })),
        },
      ],
      lastmod: onPage.reduce((m, p) => (p.updated > m ? p.updated : m), '2026-01-01'),
      changefreq: 'weekly',
      priority: '0.5',
    });
  }

  // posts
  for (const p of posts) {
    const path = `/blog/${p.slug}`;
    const crumbs = [HOME, BLOG, { name: p.title, path }];
    routes.push({
      path,
      // brand suffix only when it fits in Google's ~60-char title slot
      title: p.title.length <= 47 ? `${p.title} | TrueCodeAI` : p.title,
      description: p.description,
      ogType: 'article',
      image: p.cover,
      crumbs,
      jsonLd: [
        {
          '@type': p.kind === 'News' ? 'NewsArticle' : 'BlogPosting',
          '@id': `${url(path)}#article`,
          ...(p.source ? { citation: { '@type': 'CreativeWork', name: p.source.name, url: p.source.url } } : {}),
          mainEntityOfPage: `${url(path)}#webpage`,
          headline: p.title,
          description: p.description,
          image: p.cover,
          datePublished: p.date,
          dateModified: p.updated,
          author: (() => {
            const a = authorFor(p.author);
            return a.type === 'Organization'
              ? { '@type': 'Organization', '@id': ORG_ID, name: a.name }
              : { '@type': 'Person', name: a.name, jobTitle: a.role, worksFor: { '@id': ORG_ID }, ...(a.url ? { sameAs: [a.url] } : {}) };
          })(),
          articleSection: p.kind ?? 'Guide',
          publisher: { '@id': ORG_ID },
          keywords: p.tags.join(', '),
          wordCount: readingTime(p) * 220,
          timeRequired: `PT${readingTime(p)}M`,
          inLanguage: 'en',
          isPartOf: { '@id': `${ORIGIN}/blog#blog` },
        },
        webPageLd({ path, title: p.title, description: p.description }, { datePublished: p.date, dateModified: p.updated }),
        breadcrumbLd(crumbs),
        {
          '@type': 'FAQPage',
          mainEntity: p.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
      lastmod: p.updated,
      changefreq: 'monthly',
      priority: '0.7',
    });
  }

  // services index
  const svc = {
    path: '/services',
    title: 'Services & Pricing — AI Agents, Voice, MVPs | TrueCodeAI',
    description:
      'AI agents, voice and WhatsApp agents, MVPs, MCP servers, custom ML, automation and team training — fixed-price ranges, timelines and what you get.',
  };
  routes.push({
    ...svc,
    ogType: 'website',
    image: OG_IMAGE,
    crumbs: [HOME, SERVICES],
    jsonLd: [
      webPageLd(svc, { '@type': 'CollectionPage' }),
      breadcrumbLd([HOME, SERVICES]),
      {
        '@type': 'ItemList',
        itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: `${ORIGIN}/services/${s.slug}`, name: s.name })),
      },
    ],
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.9',
  });

  // service pages — the money pages
  for (const s of services) {
    const path = `/services/${s.slug}`;
    const crumbs = [HOME, SERVICES, { name: s.name, path }];
    const prices = s.pricing
      .map((p) => /\$([\d.]+)k/.exec(p.price)?.[1])
      .filter(Boolean)
      .map((n) => Number(n) * 1000);
    routes.push({
      path,
      title: s.title,
      description: s.description,
      ogType: 'website',
      image: OG_IMAGE,
      crumbs,
      jsonLd: [
        webPageLd({ path, title: s.title, description: s.description }),
        breadcrumbLd(crumbs),
        {
          '@type': 'Service',
          '@id': `${url(path)}#service`,
          name: s.name,
          serviceType: s.name,
          description: s.description,
          provider: { '@id': ORG_ID },
          areaServed: 'Worldwide',
          ...(prices.length
            ? { offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: Math.min(...prices), highPrice: Math.max(...prices) } }
            : {}),
        },
        {
          '@type': 'FAQPage',
          mainEntity: s.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
      ],
      lastmod: TODAY,
      changefreq: 'monthly',
      priority: '0.9',
    });
  }

  // free tool
  const calc = {
    path: '/tools/ai-project-cost-calculator',
    title: 'AI & App Project Cost Calculator (2026) | TrueCodeAI',
    description:
      'Free calculator: estimate the cost and timeline of an AI agent, voice agent, WhatsApp agent, MVP or ML model in USD and INR — based on real 2026 studio quotes.',
  };
  routes.push({
    ...calc,
    ogType: 'website',
    image: OG_IMAGE,
    crumbs: [HOME, { name: 'Cost calculator', path: calc.path }],
    jsonLd: [
      webPageLd(calc),
      breadcrumbLd([HOME, { name: 'Cost calculator', path: calc.path }]),
      {
        '@type': 'WebApplication',
        name: 'AI & App Project Cost Calculator',
        url: url(calc.path),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
        provider: { '@id': ORG_ID },
      },
    ],
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.9',
  });

  // legal
  for (const l of legalPages) {
    const crumbs = [HOME, { name: l.title, path: l.path }];
    routes.push({
      path: l.path,
      title: `${l.title} — TrueCodeAI`,
      description: l.description,
      ogType: 'website',
      image: OG_IMAGE,
      crumbs,
      jsonLd: [webPageLd({ path: l.path, title: l.title, description: l.description }), breadcrumbLd(crumbs)],
      lastmod: TODAY,
      changefreq: 'yearly',
      priority: '0.3',
    });
  }

  return routes;
}

export const routes = buildRoutes();
export const routeFor = (path: string) => routes.find((r) => r.path === path);
