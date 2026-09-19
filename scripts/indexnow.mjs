// Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver —
// they share submissions). Run AFTER deploying: `npm run indexnow`.
// Requires INDEXNOW_KEY (the key file public/<key>.txt must be live at the site root).
// Google does not use IndexNow — submit the sitemap in Search Console instead.
import { readFileSync, existsSync, readdirSync } from 'node:fs';

const ORIGIN = 'https://truecodeai.com';
const key =
  process.env.INDEXNOW_KEY ||
  (existsSync('.env') && /INDEXNOW_KEY=(\w+)/.exec(readFileSync('.env', 'utf8'))?.[1]) ||
  // fall back to the key file already shipped in public/
  readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.slice(0, 32);
if (!key) {
  console.error('INDEXNOW_KEY not set (see .env.example)');
  process.exit(1);
}

const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !u.includes('unsplash'));
if (urlList.length === 0) throw new Error('no URLs found in live sitemap — is the site deployed?');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(ORIGIN).host, key, keyLocation: `${ORIGIN}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} urls submitted`);
if (res.status >= 400) process.exit(1);
