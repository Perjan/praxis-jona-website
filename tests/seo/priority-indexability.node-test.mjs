import test from 'node:test';
import assert from 'node:assert/strict';
import { validatePages, shouldBlockRequest, inspectDocument } from '../../scripts/seo/priority-indexability.mjs';
import { JSDOM } from 'jsdom';

const origin = 'https://praxisjona.de';
function fixture() {
  const alternates = { de: `${origin}/de-page`, en: `${origin}/en/page` };
  return ['de', 'en'].map(locale => ({
    url: alternates[locale], finalUrl: alternates[locale], status: 200,
    canonical: alternates[locale], canonicalCount: 1, alternates, lang: locale,
    title: 'A useful page', description: 'A useful description', h1Count: 1,
    robots: '', headerRobots: '', schemaTypes: ['BreadcrumbList'],
    schemaErrors: [], faqMismatches: [], expectedSchema: 'BreadcrumbList',
    viewport: 390, scrollWidth: 390,
  }));
}
function check(pages = fixture(), sitemap = pages.map(p => p.url)) {
  return validatePages(pages, new Set(sitemap));
}
test('canonical reciprocal locale pair passes', () => assert.deepEqual(check(), []));
for (const [name, mutate, code] of [
  ['redirect', p => { p.finalUrl = `${origin}/other`; }, 'redirect'],
  ['HTTP error', p => { p.status = 404; }, 'http'],
  ['cross-locale canonical', p => { p.canonical = `${origin}/en/page`; }, 'canonical'],
  ['duplicate canonical', p => { p.canonicalCount = 2; }, 'canonical'],
  ['meta noindex', p => { p.robots = 'noindex, follow'; }, 'noindex'],
  ['X-Robots none', p => { p.headerRobots = 'googlebot: none'; }, 'noindex'],
  ['wrong HTML language', p => { p.lang = 'en'; }, 'language'],
  ['missing self hreflang', p => { p.alternates = { en: `${origin}/en/page` }; }, 'hreflang-self'],
  ['duplicate H1', p => { p.h1Count = 2; }, 'h1'],
  ['missing metadata', p => { p.title = ''; }, 'metadata'],
  ['malformed JSON-LD', p => { p.schemaErrors = ['Invalid JSON']; }, 'schema-json'],
  ['missing expected rendered schema', p => { p.schemaTypes = []; }, 'schema-type'],
  ['FAQ answer missing from page content', p => { p.faqMismatches = ['Question']; }, 'faq-content'],
  ['mobile overflow', p => { p.scrollWidth = 430; }, 'overflow'],
]) {
  test(`detects ${name}`, () => {
    const pages = fixture(); mutate(pages[0]);
    assert.ok(check(pages).some(i => i.code === code));
  });
}
test('detects absent sitemap URL', () => assert.ok(check(fixture(), []).some(i => i.code === 'sitemap')));
test('detects a nonreciprocal alternate', () => {
  const pages = fixture(); pages[1].alternates = { en: `${origin}/en/page` };
  assert.ok(check(pages).some(i => i.code === 'hreflang-return'));
});
test('does not require optional x-default', () => assert.deepEqual(check(), []));
test('browser audit blocks analytics GETs and all writes before navigation', () => {
  for (const url of ['https://analytics.moneycoach.ai/script.js', 'https://analytics.moneycoach.ai/api/send', 'https://praxisjona.de/_vercel/insights/view']) {
    assert.equal(shouldBlockRequest(url, 'GET'), true);
  }
  assert.equal(shouldBlockRequest(`${origin}/api/forms`, 'POST'), true);
  assert.equal(shouldBlockRequest(`${origin}/_next/static/style.css`, 'GET'), false);
});
test('FAQ inspection respects block boundaries and cannot match its own JSON-LD', () => {
  const schema = { '@type': 'FAQPage', mainEntity: [
    { name: 'A question?', acceptedAnswer: { text: 'First sentence. Second sentence.' } },
    { name: 'Absent question?', acceptedAnswer: { text: 'Absent answer.' } },
  ] };
  const dom = new JSDOM(`<main><h2>A question?</h2><p>First sentence.</p><p>Second sentence.</p><script type="application/ld+json">${JSON.stringify(schema)}</script></main>`, { runScripts: 'outside-only' });
  const result = dom.window.eval(`(${inspectDocument.toString()})()`);
  assert.deepEqual(Array.from(result.faqMismatches), ['Absent question?']);
  dom.window.close();
});
