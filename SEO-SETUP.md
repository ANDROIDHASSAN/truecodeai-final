# SEO Setup — TrueCodeAI

## What was built

This migration moves TrueCodeAI from Vite+React SPA to Next.js 15 App Router with full SSG/ISR.

---

## Architecture

### Routing

| Route | Type | Notes |
|---|---|---|
| `/` | Static | Homepage — all 10 sections server-rendered |
| `/solutions` | Static | Hub page listing all 36 solutions by group |
| `/solutions/[slug]` | SSG (ISR 24h) | One page per solution — unique content, FAQ, schema |
| `/industries` | Static | Hub page listing all 8 industry groups |
| `/industries/[niche]` | SSG (ISR 24h) | One page per niche — links to solutions + cross-links |
| `/tools` | Static | Free tools hub |
| `/tools/automation-roi-calculator` | Static | Client widget + server SEO content block |
| `/work` | Static | Portfolio page |
| `/blog` | Static | Coming soon placeholder |
| `/compare` | Static | Coming soon placeholder |
| `/sitemap.xml` | Dynamic | Auto-generated — enumerates all 57 routes |
| `/robots.txt` | Dynamic | Next.js MetadataRoute |

### Content files

- `content/solutions.ts` — 36 solution entries, each with keyword, meta description, problem, how-it-works, 5–6 features, 3 outcome stats, 3–5 FAQ items
- `content/niches.ts` — 8 niche groups mapping slugs to solution lists

---

## Structured Data (JSON-LD)

All schemas live in `lib/jsonld.ts`.

### Site-wide (injected in `app/layout.tsx`)

- `Organization` + `LocalBusiness` — Nashik HQ, areaServed: US + Worldwide
- `WebSite` + `SearchAction`
- `ProfessionalService` with `AggregateRating` (4.9 / 5, 47 reviews) and 5 individual `Review` entries

### Homepage (`app/page.tsx`)

- `WebPage`
- `FAQPage` with 10 Q&As

### Solution pages (`/solutions/[slug]`)

- `Service` with provider, areaServed, url
- `BreadcrumbList`
- `FAQPage` (per-solution FAQ)

### Industry pages (`/industries/[niche]`)

- `Service` with provider, areaServed, url
- `BreadcrumbList`

---

## Metadata

- All pages use Next.js `generateMetadata` (or static `metadata` export)
- Google Search Console verification: `a89c243b1c973ad6` (preserved from original site)
- `alternates.canonical` set on every route
- `openGraph` and `twitter` cards on homepage and solution pages
- `robots.txt` allows all, points to sitemap

---

## Fonts

Three fonts loaded via `next/font/google` with CSS variable mode:

| Variable | Font | Usage |
|---|---|---|
| `--font-space-grotesk` | Space Grotesk | Display, body (`.font-display`, base) |
| `--font-instrument-serif` | Instrument Serif | Accent italic (`.font-serif-i`) |
| `--font-space-mono` | Space Mono | Labels, mono elements |

---

## Performance notes

- All section components are `'use client'` for GSAP — server renders the markup, client hydrates animations
- Images use plain `<img>` on Hero/Work (GSAP controls transform); `next/image` on Reviews avatars
- Hero images are in `public/img/hero/` — served as static assets
- CSS variables for design tokens: `--accent: #ff6a1a`, `--bg: #060607`, `--fg: #ffffff`
- Lenis smooth scroll synced to GSAP ticker for animation frame alignment

---

## Non-developer checklist

After deploying, complete these steps manually:

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Verify domain ownership (HTML tag method is already configured — meta tag in `app/layout.tsx`)
3. Submit `https://truecodeai.com/sitemap.xml` under Sitemaps

### Google Business Profile
- Ensure business is listed at [business.google.com](https://business.google.com)
- Category: Software Development / IT Services
- Service area: United States + Worldwide
- Business address: Nashik, Maharashtra, India (real HQ — do not use a US address)

### Schema validation
- Paste any page URL into [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- Should detect: Organization, FAQPage on homepage; Service + FAQ + Breadcrumb on solution pages

### Core Web Vitals
After first Vercel deploy, run Lighthouse on:
1. Homepage (`/`)
2. One solution page (e.g. `/solutions/ai-answering-service-hvac`)
3. ROI Calculator (`/tools/automation-roi-calculator`)

Target: Performance ≥ 90, SEO = 100, Accessibility ≥ 90

### Vercel settings
- Framework: Next.js (auto-detected from vercel.json)
- Build command: `npm run build`
- Output: `.next` (Next.js default — no outputDirectory needed)
- Node version: 20.x

### Content to add later
- `/work/[case-study]` — individual case study pages (stub is scaffold-ready)
- `/blog/[slug]` — blog articles (MDX recommended)
- `/compare/[slug]` — comparison pages (e.g. TrueCodeAI vs. Zapier)

---

## Branch

All work is on `feat/nextjs-migration`. Merge to `master` after Lighthouse verification.
