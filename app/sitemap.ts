import type { MetadataRoute } from 'next';
import { solutions } from '@/content/solutions';
import { nicheGroups } from '@/content/niches';
import { posts } from '@/content/posts';
import { projects } from '@/data/site';
import { services } from '@/content/services';
import { locations } from '@/content/locations';
import { technologies } from '@/content/technologies';

const BASE = 'https://truecodeai.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/solutions`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hire`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/technologies`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tools/automation-roi-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    // compare is noindex — excluded from sitemap until content is ready
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const industryRoutes: MetadataRoute.Sitemap = nicheGroups.map((g) => ({
    url: `${BASE}/industries/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const workRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE}/hire/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const technologyRoutes: MetadataRoute.Sitemap = technologies.map((t) => ({
    url: `${BASE}/technologies/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...workRoutes,
    ...locationRoutes,
    ...technologyRoutes,
  ];
}
