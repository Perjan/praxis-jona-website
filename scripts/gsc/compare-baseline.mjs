import fs from 'node:fs';
import path from 'node:path';

/**
 * Compare current Search Console data against a captured baseline.
 *
 * Usage: node scripts/gsc/compare-baseline.mjs [baselineFile]
 *
 * Run `npm run gsc:fetch` first so the latest pull is current. Written for the
 * 28-day playbook: the baseline records the queries the work targeted, so this
 * reports whether those specific queries moved rather than whether the site
 * total drifted.
 */

const baselineArg = process.argv[2];
const baselineDir = path.join(process.cwd(), 'data/gsc/baselines');
const baselineFile = baselineArg
  ? path.resolve(baselineArg)
  : path.join(baselineDir, fs.readdirSync(baselineDir).filter((f) => f.endsWith('.json')).sort().pop());

const baseline = JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
const current = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/gsc/raw/search-analytics-latest.json'), 'utf8'));
const rows = current.rows.filter((r) => r.searchType === 'web');

function stats(query) {
  const sel = rows.filter((r) => r.query === query);
  const impressions = sel.reduce((s, r) => s + r.impressions, 0);
  const clicks = sel.reduce((s, r) => s + r.clicks, 0);
  const position = impressions ? sel.reduce((s, r) => s + r.position * r.impressions, 0) / impressions : 0;
  return { impressions, clicks, ctr: impressions ? clicks / impressions : 0, position };
}

const arrow = (n) => (n > 0 ? '+' : '') + n;
const pad = (v, n) => String(v).padStart(n);

console.log('baseline : ' + baseline.baselineRange.start + ' -> ' + baseline.baselineRange.end);
console.log('current  : ' + current.startDate + ' -> ' + current.endDate);
console.log('');
console.log('query'.padEnd(36) + 'clicks      impressions        position');
console.log('-'.repeat(84));

let baseClicks = 0, nowClicks = 0;

for (const [query, before] of Object.entries(baseline.queries)) {
  const after = stats(query);
  baseClicks += before.clicks;
  nowClicks += after.clicks;

  // Position improves as the number falls, so invert the sign for display.
  const posDelta = before.position && after.position ? before.position - after.position : null;

  console.log(
    query.slice(0, 35).padEnd(36)
    + pad(before.clicks, 3) + ' -> ' + pad(after.clicks, 3) + ' (' + pad(arrow(after.clicks - before.clicks), 4) + ')  '
    + pad(before.impressions, 5) + ' -> ' + pad(after.impressions, 5) + '  '
    + pad(before.position.toFixed(1), 5) + ' -> ' + pad(after.position.toFixed(1), 5)
    + (posDelta === null ? '' : ' (' + arrow(posDelta.toFixed(1)) + ')'),
  );
}

console.log('-'.repeat(84));
console.log('tracked clicks: ' + baseClicks + ' -> ' + nowClicks
  + '  (' + arrow(nowClicks - baseClicks) + ', '
  + (baseClicks ? arrow(((nowClicks - baseClicks) / baseClicks * 100).toFixed(0)) + '%' : 'n/a') + ')');
console.log('');
console.log('Judge CTR changes first; ranking changes need longer than one cycle to settle.');
