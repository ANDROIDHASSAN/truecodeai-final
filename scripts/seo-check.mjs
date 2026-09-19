// Build gate: fails `npm run build` on SEO regressions across every prerendered page.
// Checks: title ≤ 60, description ≤ 160, exactly one <h1>, canonical present,
// valid JSON-LD, a contact form on the page, and every internal link resolves.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const dist = resolve('dist');
const pages = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html') pages.push(p);
  }
})(dist);

// independent count so an empty walk can't pass silently
const sitemapUrls = (readFileSync(join(dist, 'sitemap.xml'), 'utf8').match(/<loc>https:\/\/truecodeai\.com[^<]*<\/loc>/g) || []).length;
if (pages.length === 0 || pages.length !== sitemapUrls)
  throw new Error(`seo-check: ${pages.length} pages on disk vs ${sitemapUrls} in sitemap`);

const exists = (path) => {
  const clean = path.split('#')[0].split('?')[0].replace(/\/+$/, '');
  if (clean === '') return true;
  return existsSync(join(dist, clean, 'index.html')) || existsSync(join(dist, clean)) || existsSync(join(dist, `${clean}.html`));
};
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");

const errors = [];
for (const file of pages) {
  const h = readFileSync(file, 'utf8');
  const rel = file.slice(dist.length) || '/';
  const title = decode(/<title>([^<]*)<\/title>/.exec(h)?.[1] ?? '');
  const desc = decode(/<meta\s+name="description"\s+content="([^"]*)"/.exec(h)?.[1] ?? '');
  const body = h.split('<div id="root">')[1] ?? '';
  if (!title || title.length > 60) errors.push(`${rel}: title ${title.length} chars`);
  if (!desc || desc.length > 160) errors.push(`${rel}: description ${desc.length} chars`);
  const h1 = (body.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${rel}: ${h1} <h1>`);
  if (!/<link rel="canonical" href="https:\/\/truecodeai\.com/.test(h)) errors.push(`${rel}: no canonical`);
  if (!body.includes('<form')) errors.push(`${rel}: no contact form`);
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      errors.push(`${rel}: invalid JSON-LD`);
    }
  }
  for (const m of body.matchAll(/href="(\/[^"]*)"/g)) if (!exists(m[1])) errors.push(`${rel}: broken link ${m[1]}`);
}

if (errors.length) {
  console.error(`seo-check FAILED (${errors.length}):\n  ` + [...new Set(errors)].join('\n  '));
  process.exit(1);
}
console.log(`seo-check: ${pages.length} pages OK`);
