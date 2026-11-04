import test from 'node:test';
import assert from 'node:assert/strict';
import { buildInspectionPlan } from '../../scripts/seo/openseo-plan.mjs';

const origin = 'https://praxisjona.de';
const now = new Date('2026-11-04T12:00:00Z');
const plan = (overrides = {}) => buildInspectionPlan({
  history: [],
  priorityPaths: [],
  origin,
  now,
  maxUrlsPerCall: 10,
  recentChangeDays: 45,
  ...overrides,
});

test('lists recently changed pages before priority pages and removes duplicates', () => {
  const result = plan({
    history: [{ implementedAt: '2026-11-02', pages: ['/free-tools', '/shared'] }],
    priorityPaths: ['/shared', '/leistungen/eiseninfusion-kosten'],
  });
  assert.deepEqual(result.batches, [[
    `${origin}/free-tools`,
    `${origin}/shared`,
    `${origin}/leistungen/eiseninfusion-kosten`,
  ]]);
});

test('ignores history entries outside the window or without a valid date', () => {
  const result = plan({
    history: [
      { implementedAt: '2026-09-01', pages: ['/old'] },
      { implementedAt: 'unknown', pages: ['/undated'] },
      { implementedAt: '2026-10-20T00:00:00+02:00', pages: ['/recent'] },
    ],
  });
  assert.deepEqual(result.batches, [[`${origin}/recent`]]);
});

test('keeps absolute URLs on the site and reports every other value', () => {
  const result = plan({
    history: [{
      implementedAt: '2026-11-02',
      pages: [`${origin}/absolute`, 'https://example.com/other', 'not-a-path'],
    }],
  });
  assert.deepEqual(result.batches, [[`${origin}/absolute`]]);
  assert.deepEqual(result.skipped, ['https://example.com/other', 'not-a-path']);
});

test('accepts history entries without pages', () => {
  assert.deepEqual(plan({ history: [{ implementedAt: '2026-11-02' }] }).batches, []);
});

test('splits URLs into batches that fit one inspect_urls call', () => {
  const priorityPaths = Array.from({ length: 23 }, (_, index) => `/page-${index}`);
  const sizes = plan({ priorityPaths }).batches.map((batch) => batch.length);
  assert.deepEqual(sizes, [10, 10, 3]);
});
