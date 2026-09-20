# TrueCodeAI — 14-Day Launch Plan for Fast Leads

Goal: enquiries in the form within 14 days of deploy, not rankings on a dashboard.
Everything below is ordered by **speed to a lead**. Do the top of each day first.

Honest framing: Google indexes a new domain in 1–7 days and ranks fresh, low-competition
pages (news, long-tail) within days. Head terms ("AI development company") take months.
The "days" plan wins on **freshness + long-tail + distribution**, and gets leads from
distribution channels before Google contributes anything.

---

## Day 0 — Deploy day (2 hours)

| # | Action | Why | Done when |
|---|---|---|---|
| 1 | Set `VITE_FORM_ENDPOINT` (Formspree/Basin) and the real WhatsApp number in `src/data/site.ts` | Every lead currently ends in a mailto / dead link | You receive a test submission and a WhatsApp click works |
| 2 | Deploy `dist/` (Netlify / Vercel / Cloudflare Pages — all serve `/blog/x/` from folders) | — | `https://truecodeai.com/blog/ai-funding-this-week` returns 200 with content |
| 3 | **Google Search Console**: verify domain, submit `https://truecodeai.com/sitemap-index.xml` | Fastest path into Google's index | Sitemap status "Success" |
| 4 | Search Console → URL Inspection → **Request indexing** for: home, `/blog`, all 5 news posts, 3 tutorials | Manual requests are processed within hours–days | 10 requests submitted |
| 5 | **Bing Webmaster Tools**: import from GSC, then run `npm run indexnow` | Bing/DuckDuckGo/Yandex index in hours via IndexNow | Script prints `IndexNow: 200` |
| 6 | **Google Business Profile** (Nashik): category "Software company", link site, add photos, first post | Local pack + brand SERP in days; free | Profile live and verified (postcard may take days — start now) |
| 7 | Set `INDEXNOW_KEY` in `.env`; the key file is already in `public/` | — | — |

## Day 1 — Brand SERP & directories (3 hours)

Google trusts a company it can see elsewhere. Each of these is a real backlink and a
profile that ranks for "TrueCodeAI" immediately.

1. **LinkedIn company page** — full description, "AI agents · Voice agents · MVPs", link, 3 posts (one per news article, tag the funded company + lead investor).
2. **Crunchbase** company profile (free) — founded, Nashik, services. Ranks top-3 for brand terms in a day.
3. **Clutch, GoodFirms, DesignRush** — the three directories buyers of dev studios actually use. Fill every field; request 3 client reviews (HappyWedz, Interify, CupCount) this week. Clutch reviews = leads directly.
4. **GitHub org** with a public repo (e.g. the eval-suite runner from the tutorial) — engineers check.
5. **Product Hunt** "maker" profile for the founder; ship one free tool later (Day 8).
6. **X/Twitter, Instagram** — claim handles, link back. No content needed yet.

## Days 1–3 — Newsjacking cadence (the "days not weeks" engine)

The news series (`src/data/posts-news.ts`) exists for one reason: **fresh, specific
pages have almost no competition for 48–72 hours** and Google surfaces them fast.

Daily loop (45 min):
1. 09:00 IST: scan TechCrunch `/tag/funding`, Inc42 Funding Galore, YourStory, Crunchbase News.
2. Pick **one** round that touches agents / voice / ML / security / India. Skip pure model-lab mega-rounds — everyone covers those.
3. Write the post from the source (**never** add figures not in the article), using the existing pattern: *What was announced* table → *Why it matters* → *How you'd build it* → CTA. 600–900 words. `kind: 'News'`, `source:` filled.
4. Rebuild, deploy, `npm run indexnow`, GSC "Request indexing" for that URL.
5. Post on LinkedIn within the hour: 5-line take + link; **tag the company and the lead investor**. Funded startups reshare congratulations — that reshare is a backlink-adjacent signal and real traffic.
6. Update `/blog/ai-funding-this-week` every Friday (bump `updated`, add the row). One URL, refreshed weekly, accumulates authority.

Target: 5 news posts in week one, 3/week after. This is the fastest indexable content you can produce.

## Days 2–5 — Distribution (where the first leads actually come from)

Google will not send a lead in week one. These will:

| Channel | What to do | Expected |
|---|---|---|
| **LinkedIn (founder profile)** | 1 post/day, alternating: a news take, a tutorial excerpt ("how we build a WhatsApp agent — step 3 of 9"), a cost table screenshot. Always end with "DM me or the form". | Highest-yield channel for a studio. First DMs within days. |
| **WhatsApp broadcast** to past clients/network | "We now build voice + WhatsApp agents. Here is what it costs: [link to cost post]" | 1–3 warm conversations |
| **Reddit** r/artificial, r/SaaS, r/startups, r/indianstartups | Answer questions with real numbers; link only when it genuinely answers. The cost and "what is an agent" posts are made for this. | Referral traffic + Reddit threads rank on Google within days |
| **Hacker News** | Submit the eval-suite tutorial and the LLM-cost tutorial as "Show HN"-adjacent content. Technical, no marketing tone. | If it lands: thousands of visits and engineer referrals |
| **Quora** | 5 answers on "how much does an MVP cost in India", "AI agent development cost" — link the cost posts | Quora answers rank fast for long-tail |
| **Cold outreach (jugaad edition)** | Every company in the news series just raised money and is hiring engineers. Email the founder: "Congrats — we wrote this about your round [link]; if you need a build partner for X, here's our pricing." 5/day. | Warm because you gave them press first |
| **Comment on TechCrunch/LinkedIn threads** about the rounds you covered, with a one-line insight and the link | Leaves a trail; occasional referral |

## Days 6–7 — Measure and tighten

1. GSC → Pages: how many indexed? If < 50%, request indexing on the rest, check for "Crawled – not indexed" (thin pages) and add depth.
2. GSC → Performance: which queries show impressions? Rewrite the matching post's title to the exact phrasing people use.
3. Form submissions → which page did they come from? (`page` field is sent with every submission.) Double down on that page type.
4. Add 2 more internal links from the homepage sections to the best-performing posts.

## Day 8+ — Compounding

- **Free tool** (Product Hunt + backlinks): an "AI agent cost estimator" page — five questions, instant range, form to get the real quote. Lead magnet and link magnet in one. (Ask and I'll build it — no dependencies.)
- **Case studies**: one page per live client product with real screenshots and a number ("bookings up 31%"). Case studies convert better than any blog post; three of them beat thirty articles.
- **Guest posts**: pitch the "why AI agents fail" piece to Inc42 / YourStory / Analytics India Mag as a contributed article. One high-authority link moves the whole domain.
- **Reviews**: keep collecting on Clutch/Google Business Profile. 10 reviews with "AI agent" in the text is a ranking factor for the local pack.
- **Weekly**: 3 news posts, 1 tutorial or guide, Friday roundup update, `npm run indexnow`.

---

## What NOT to do (it will cost you rank)

- No paid backlinks, PBNs or "1000 backlinks for $50". A new domain gets sandboxed for this.
- No fake reviews or self-serving review schema. Google ignores it on Organization pages and can penalise.
- No AI-spun 5,000-word posts. Google's helpful-content system demotes sites that publish thin volume; every post here has tables, sources and a point of view — keep that bar.
- No keyword-stuffed titles. The build checks ≤60/≤160; keep it.
- Don't invent funding numbers. Every news post links its primary source; that's both a ranking signal (outbound citations) and the only ethical option.

## The three numbers to watch

1. **Form submissions per week** (the only KPI that matters)
2. Indexed pages in GSC (target: 100% by day 10)
3. Impressions in GSC (target: first 1,000 by day 14 — from news + long-tail)
