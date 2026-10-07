// Read-only rendered audit. Does not click CTAs, submit forms or send analytics.
import { pathToFileURL } from 'node:url';

export const ORIGIN = 'https://praxisjona.de';
export const PRIORITY_PAIRS = [
  ['/leistungen/eiseninfusion-kosten', '/en/services/iron-infusion-costs'],
  ['/leistungen/infusionstherapie', '/en/services/infusion-therapy'],
  ['/leistungen/prp-haarausfall', '/en/services/prp-hair-loss'],
  ['/leistungen/haarausfall-berlin-mitte', '/en/services/hair-loss-berlin-mitte'],
  ['/aesthetik/prp-behandlung', '/en/aesthetics/prp-treatment'],
  ['/aesthetik/prp-behandlung/prp-gesicht', '/en/aesthetics/prp-treatment/prp-face'],
  ['/aesthetik/prp-behandlung/prp-augenregion-bei-dunklen-augenringen', '/en/aesthetics/prp-treatment/prp-under-eye-area-dark-circles'],
  ['/aesthetik/preise', '/en/aesthetics/prices'],
  ['/blog/eiseninfusion-frauen-eisenmangel-vorteile', '/en/blog/iron-infusion-women-iron-deficiency-benefits'],
];

export function shouldBlockRequest(requestUrl, method) {
  const url = new URL(requestUrl);
  const telemetry = /moneycoach\.ai$|google-analytics\.com$|googletagmanager\.com$|vercel-insights\.com$/.test(url.hostname) || /\/(?:_vercel\/insights|_vercel\/speed-insights|api\/send)(?:\/|$)/.test(url.pathname);
  return method !== 'GET' || telemetry;
}

export function validatePages(pages, sitemapUrls) {
  const issues = [];
  const byUrl = new Map(pages.map(p => [p.url, p]));
  for (const p of pages) {
    const add = (code, detail) => issues.push({ url: p.url, view: p.view, code, detail });
    if (p.status !== 200) add('http', `HTTP ${p.status}`);
    if (p.finalUrl !== p.url) add('redirect', p.finalUrl);
    if (p.canonicalCount !== 1 || p.canonical !== p.url) add('canonical', p.canonical || 'Missing');
    if (/(?:\bnoindex\b|\bnone\b)/i.test(`${p.robots},${p.headerRobots}`)) add('noindex', 'Meta or HTTP robots directive');
    const locale = new URL(p.url).pathname.startsWith('/en/') ? 'en' : 'de';
    if (p.lang !== locale) add('language', `Expected ${locale}, found ${p.lang}`);
    if (p.alternates[locale] !== p.url) add('hreflang-self', `Missing ${locale} self reference`);
    for (const [language, url] of Object.entries(p.alternates)) {
      const other = byUrl.get(url);
      if (!other) add('hreflang-target', `${language}: unaudited target ${url}`);
      else {
        if (other.canonical !== url || other.status !== 200) add('hreflang-target', `${language}: noncanonical or non-200 target`);
        if (other.alternates[locale] !== p.url) add('hreflang-return', `${language}: missing return link`);
      }
    }
    if (!sitemapUrls.has(p.url)) add('sitemap', 'Missing from sitemap');
    if (p.h1Count !== 1) add('h1', `${p.h1Count} H1 elements`);
    if (!p.title || !p.description) add('metadata', 'Missing title or description');
    if (p.schemaErrors?.length) add('schema-json', p.schemaErrors.join('; '));
    if (p.expectedSchema && !p.schemaTypes.includes(p.expectedSchema)) add('schema-type', `Missing ${p.expectedSchema}`);
    if (p.faqMismatches?.length) add('faq-content', p.faqMismatches.join('; '));
    if (p.scrollWidth > p.viewport + 1) add('overflow', `${p.scrollWidth}px content / ${p.viewport}px viewport`);
  }
  return issues;
}

// Self-contained so the same inspector can run in Chromium and on raw SSR HTML.
export function inspectDocument() {
  const normalize = text => (text || '').replace(/\s+/g, ' ').trim();
  const main = (document.querySelector('main') || document.body).cloneNode(true);
  main.querySelectorAll('script,style').forEach(n => n.remove());
  // textContent joins adjacent block elements without separators; whitespace
  // differences between paragraphs/lists and JSON-LD are not claim mismatches.
  const content = normalize(main.textContent).replace(/\s/g, '');
  const schemaTypes = [], schemaErrors = [], faqMismatches = [];
  const textFromHtml = html => {
    const el = document.createElement('div'); el.innerHTML = html || '';
    return normalize(el.textContent);
  };
  const walk = node => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    const types = [].concat(node['@type'] || []);
    schemaTypes.push(...types);
    if (types.includes('FAQPage')) {
      for (const q of [].concat(node.mainEntity || [])) {
        const name = textFromHtml(q.name);
        const answer = textFromHtml(q.acceptedAnswer?.text);
        if (!name || !answer || !content.includes(name.replace(/\s/g, '')) || !content.includes(answer.replace(/\s/g, ''))) faqMismatches.push(name || 'Unnamed FAQ');
      }
    }
    Object.values(node).forEach(walk);
  };
  document.querySelectorAll('script[type="application/ld+json"]').forEach(s => {
    try { walk(JSON.parse(s.textContent)); } catch { schemaErrors.push('Invalid JSON-LD'); }
  });
  return {
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    canonicalCount: document.querySelectorAll('link[rel="canonical"]').length,
    alternates: Object.fromEntries([...document.querySelectorAll('link[hreflang]')].map(n => [n.getAttribute('hreflang'), n.getAttribute('href')])),
    lang: document.documentElement.lang,
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content,
    robots: [...document.querySelectorAll('meta[name="robots"],meta[name="googlebot"]')].map(n => n.content).join(','),
    h1Count: document.querySelectorAll('h1').length,
    schemaTypes: [...new Set(schemaTypes)], schemaErrors, faqMismatches,
    viewport: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  };
}

export async function runAudit() {
  const { JSDOM } = await import('jsdom');
  const { chromium } = await import('@playwright/test');
  const get = async path => {
    const response = await fetch(new URL(path, ORIGIN), { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
    return response;
  };
  const robots = await (await get('/robots.txt')).text();
  const sitemapIndex = new JSDOM(await (await get('/sitemap.xml')).text(), { contentType: 'text/xml' });
  const sitemapUrls = new Set();
  for (const node of sitemapIndex.window.document.querySelectorAll('sitemap > loc')) {
    const child = new URL(node.textContent);
    if (child.origin !== ORIGIN) throw new Error('Unexpected cross-origin sitemap');
    const xml = new JSDOM(await (await get(child.pathname)).text(), { contentType: 'text/xml' });
    xml.window.document.querySelectorAll('url > loc').forEach(n => sitemapUrls.add(n.textContent));
    xml.window.close();
  }
  sitemapIndex.window.close();
  if (!sitemapUrls.size) throw new Error('Empty sitemap');
  const pages = [];
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext();
    // Block telemetry before navigation. No clicks and no non-GET requests.
    await context.route('**/*', route => {
      return shouldBlockRequest(route.request().url(), route.request().method()) ? route.abort() : route.continue();
    });
    for (const path of PRIORITY_PAIRS.flat()) {
      const url = ORIGIN + path;
      const response = await get(path);
      const raw = new JSDOM(await response.text(), { url, runScripts: 'outside-only' });
      const ssr = raw.window.eval(`(${inspectDocument.toString()})()`);
      pages.push({ ...ssr, url, finalUrl: response.url, status: response.status, headerRobots: response.headers.get('x-robots-tag') || '', view: 'ssr' });
      raw.window.close();
      for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
        const page = await context.newPage();
        try {
          await page.setViewportSize(viewport);
          const result = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
          const snapshot = await page.evaluate(inspectDocument);
          pages.push({ ...snapshot, url, finalUrl: page.url(), status: result.status(), headerRobots: result.headers()['x-robots-tag'] || '', view: `${viewport.width}px`, expectedSchema: path.includes('/blog/') ? 'BlogPosting' : 'BreadcrumbList' });
        } finally { await page.close(); }
      }
    }
  } finally { await browser.close(); }
  return {
    generatedAt: new Date().toISOString(), origin: ORIGIN,
    limitations: 'Technical eligibility only, not proof of Google indexing, rich-result eligibility, medical accuracy or field Core Web Vitals. Robots rules require manual review.',
    sitemapUrlCount: sitemapUrls.size,
    robotsSitemaps: robots.split('\n').filter(line => /^Sitemap:/i.test(line)),
    pages, issues: validatePages(pages, sitemapUrls),
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const report = await runAudit();
    console.log(JSON.stringify(report, null, 2));
    if (report.issues.length) process.exitCode = 1;
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
