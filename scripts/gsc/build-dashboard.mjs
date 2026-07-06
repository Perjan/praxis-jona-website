import fs from 'node:fs';
import path from 'node:path';
import { readImplementationHistory } from './implementation-history.mjs';

const cfg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config/gsc-dashboard.config.json'), 'utf8'));
const rawPath = path.join(process.cwd(), 'data/gsc/raw/search-analytics-latest.json');

if (!fs.existsSync(rawPath)) {
  console.error('[gsc:dashboard] Missing data/gsc/raw/search-analytics-latest.json. Run npm run gsc:fetch first.');
  process.exit(1);
}

function classify(query = '') {
  for (const cluster of cfg.clusters || []) {
    if (new RegExp(cluster.regex, 'i').test(query)) return cluster.name;
  }
  return 'other';
}

function isBrand(query = '') {
  return cfg.brandRegex ? new RegExp(cfg.brandRegex, 'i').test(query) : false;
}

function aggregate(rows, keyFn) {
  const map = new Map();
  for (const row of rows) {
    const key = keyFn(row) || 'unknown';
    const current = map.get(key) || { key, clicks: 0, impressions: 0, weightedPosition: 0 };
    current.clicks += row.clicks || 0;
    current.impressions += row.impressions || 0;
    current.weightedPosition += (row.position || 0) * (row.impressions || 0);
    map.set(key, current);
  }
  return [...map.values()].map((row) => ({
    key: row.key,
    clicks: row.clicks,
    impressions: row.impressions,
    ctr: row.impressions ? row.clicks / row.impressions : 0,
    position: row.impressions ? row.weightedPosition / row.impressions : 0
  })).sort((a, b) => b.clicks - a.clicks);
}

function zeroRow(key) {
  return { key, clicks: 0, impressions: 0, ctr: 0, position: 0 };
}

function compareQueryRows(currentRows, previousRows) {
  const current = aggregate(currentRows.filter((row) => row.query), (row) => row.query);
  const previous = aggregate(previousRows.filter((row) => row.query), (row) => row.query);
  const currentMap = new Map(current.map((row) => [row.key, row]));
  const previousMap = new Map(previous.map((row) => [row.key, row]));
  const keys = new Set([...currentMap.keys(), ...previousMap.keys()]);

  return [...keys].map((key) => {
    const currentRow = currentMap.get(key) || zeroRow(key);
    const previousRow = previousMap.get(key) || zeroRow(key);
    const clickDelta = currentRow.clicks - previousRow.clicks;
    const clickChange = previousRow.clicks ? clickDelta / previousRow.clicks : null;
    const impressionDelta = currentRow.impressions - previousRow.impressions;

    return {
      key,
      query: key,
      clicks: currentRow.clicks,
      previousClicks: previousRow.clicks,
      clickDelta,
      clickChange,
      impressions: currentRow.impressions,
      previousImpressions: previousRow.impressions,
      impressionDelta,
      ctr: currentRow.ctr,
      previousCtr: previousRow.ctr,
      ctrDelta: currentRow.ctr - previousRow.ctr,
      position: currentRow.position,
      previousPosition: previousRow.position,
      positionDelta: currentRow.position && previousRow.position ? currentRow.position - previousRow.position : 0
    };
  });
}

function buildQueryInsights(raw) {
  const queryCfg = cfg.queryInsights || {};
  const limit = Number(queryCfg.limit || 25);
  const trendLimit = Number(queryCfg.trendLimit || limit);
  const minAbsoluteClickDelta = Number(queryCfg.minAbsoluteClickDelta || 1);
  const minTopClicks = Number(queryCfg.minTopClicks || 1);
  const currentRows = raw.queryRows || raw.rows || [];
  const previousRows = raw.previousQueryRows || [];
  const compared = compareQueryRows(currentRows, previousRows);

  return {
    metric: 'clicks',
    currentStartDate: raw.startDate,
    currentEndDate: raw.endDate,
    previousStartDate: raw.previousStartDate || null,
    previousEndDate: raw.previousEndDate || null,
    top: compared
      .filter((row) => row.clicks >= minTopClicks)
      .sort((a, b) => (b.clicks - a.clicks) || (b.impressions - a.impressions) || a.query.localeCompare(b.query))
      .slice(0, limit),
    trendingUp: compared
      .filter((row) => row.clickDelta >= minAbsoluteClickDelta)
      .sort((a, b) => (b.clickDelta - a.clickDelta) || (b.clicks - a.clicks) || a.query.localeCompare(b.query))
      .slice(0, trendLimit),
    trendingDown: compared
      .filter((row) => row.clickDelta <= -minAbsoluteClickDelta)
      .sort((a, b) => (a.clickDelta - b.clickDelta) || (b.previousClicks - a.previousClicks) || a.query.localeCompare(b.query))
      .slice(0, trendLimit)
  };
}

function fmtPct(value) {
  return (value * 100).toFixed(2) + '%';
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function table(title, rows) {
  const body = rows.slice(0, 25).map((row) => '<tr><td>' + escapeHtml(row.key) + '</td><td>' + row.clicks + '</td><td>' + row.impressions + '</td><td>' + fmtPct(row.ctr) + '</td><td>' + row.position.toFixed(2) + '</td></tr>').join('');
  return '<section><h2>' + escapeHtml(title) + '</h2><table><thead><tr><th>Key</th><th>Clicks</th><th>Impressions</th><th>CTR</th><th>Position</th></tr></thead><tbody>' + body + '</tbody></table></section>';
}

function dominantClusterByPage(rows) {
  const byPage = new Map();
  for (const row of rows) {
    const page = row.page || '';
    if (!page) continue;
    const cluster = row.cluster || 'other';
    if (!byPage.has(page)) byPage.set(page, new Map());
    const clusterMap = byPage.get(page);
    clusterMap.set(cluster, (clusterMap.get(cluster) || 0) + (row.clicks || 0));
  }
  return [...byPage.entries()].map(([page, clusters]) => {
    const ranked = [...clusters.entries()].sort((a, b) => b[1] - a[1]);
    return { page, cluster: ranked[0]?.[0] || 'other' };
  });
}

const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
const rows = (raw.rows || []).map((row) => ({ ...row, cluster: classify(row.query), isBrand: isBrand(row.query) }));
const queryRows = (raw.queryRows || raw.rows || []).map((row) => ({ ...row, cluster: classify(row.query), isBrand: isBrand(row.query) }));
const brandClicks = rows.filter((row) => row.isBrand).reduce((sum, row) => sum + row.clicks, 0);
const nonBrandClicks = rows.filter((row) => !row.isBrand).reduce((sum, row) => sum + row.clicks, 0);
const nonBrand = rows.filter((row) => !row.isBrand);
const nearWinCfg = cfg.nearWin || {};
const minImpressions = Number(nearWinCfg.minImpressions || 500);
const minPosition = Number(nearWinCfg.minPosition || 4);
const maxPosition = Number(nearWinCfg.maxPosition || 15);
const maxPages = Number(nearWinCfg.maxPages || 50);
const byPage = aggregate(nonBrand, (row) => row.page);
const byQuery = aggregate(nonBrand, (row) => row.query);
const nearWin = byPage
  .filter((row) => row.impressions >= minImpressions)
  .filter((row) => row.position >= minPosition && row.position <= maxPosition)
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, maxPages);

const dashboard = {
  generatedAt: new Date().toISOString(),
  source: path.relative(process.cwd(), rawPath),
  site: raw.site,
  startDate: raw.startDate,
  endDate: raw.endDate,
  summary: {
    totalRows: rows.length,
    brandClicks,
    nonBrandClicks,
    nonBrandShare: nonBrandClicks / ((brandClicks + nonBrandClicks) || 1)
  },
  byCluster: aggregate(rows, (row) => row.cluster),
  byPage,
  byQuery,
  queryInsights: buildQueryInsights(raw),
  allQueries: aggregate(queryRows, (row) => row.query),
  byCountry: aggregate(nonBrand, (row) => row.country),
  byDevice: aggregate(nonBrand, (row) => row.device),
  bySearchType: aggregate(rows, (row) => row.searchType),
  nearWin,
  pageClusters: dominantClusterByPage(nonBrand),
  implementationHistory: readImplementationHistory(100)
};

const outDir = path.join(process.cwd(), 'data/gsc/dashboard');
const reportDir = path.join(process.cwd(), 'data/gsc/reports');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(reportDir, { recursive: true });
const stamp = dashboard.generatedAt.replace(/[:.]/g, '-');
fs.writeFileSync(path.join(outDir, 'dashboard-' + stamp + '.json'), JSON.stringify(dashboard, null, 2));
fs.writeFileSync(path.join(outDir, 'dashboard-latest.json'), JSON.stringify(dashboard, null, 2));
fs.writeFileSync(path.join(reportDir, 'cluster-report-' + stamp + '.json'), JSON.stringify(dashboard, null, 2));
fs.writeFileSync(path.join(reportDir, 'cluster-report-latest.json'), JSON.stringify(dashboard, null, 2));

const md = [
  '# GSC Dashboard',
  '',
  'Site: ' + dashboard.site,
  'Range: ' + dashboard.startDate + ' to ' + dashboard.endDate,
  'Generated: ' + dashboard.generatedAt,
  '',
  '## Summary',
  '',
  '- Rows: ' + dashboard.summary.totalRows,
  '- Brand clicks: ' + dashboard.summary.brandClicks,
  '- Non-brand clicks: ' + dashboard.summary.nonBrandClicks,
  '- Non-brand share: ' + fmtPct(dashboard.summary.nonBrandShare),
  ''
];

for (const [title, data] of [['Cluster', dashboard.byCluster], ['Top Pages', dashboard.byPage], ['Top Queries', dashboard.byQuery], ['Countries', dashboard.byCountry]]) {
  md.push('## ' + title, '', '| Key | Clicks | Impressions | CTR | Position |', '|---|---:|---:|---:|---:|');
  for (const row of data.slice(0, 25)) md.push('| ' + row.key + ' | ' + row.clicks + ' | ' + row.impressions + ' | ' + fmtPct(row.ctr) + ' | ' + row.position.toFixed(2) + ' |');
  md.push('');
}

md.push(
  '## Queries leading to your site',
  '',
  'Current range: ' + dashboard.queryInsights.currentStartDate + ' to ' + dashboard.queryInsights.currentEndDate,
  'Previous range: ' + (dashboard.queryInsights.previousStartDate || 'missing') + ' to ' + (dashboard.queryInsights.previousEndDate || 'missing'),
  ''
);

for (const [title, data] of [['Top', dashboard.queryInsights.top], ['Trending up', dashboard.queryInsights.trendingUp], ['Trending down', dashboard.queryInsights.trendingDown]]) {
  md.push('### ' + title, '', '| Query | Clicks | Previous clicks | Change | Change % |', '|---|---:|---:|---:|---:|');
  for (const row of data.slice(0, 25)) {
    const changePct = row.clickChange === null ? (row.clickDelta > 0 ? 'New' : '') : fmtPct(Math.abs(row.clickChange));
    md.push('| ' + row.query + ' | ' + row.clicks + ' | ' + row.previousClicks + ' | ' + row.clickDelta + ' | ' + changePct + ' |');
  }
  md.push('');
}

fs.writeFileSync(path.join(outDir, 'dashboard-' + stamp + '.md'), md.join('\n'));
fs.writeFileSync(path.join(outDir, 'dashboard-latest.md'), md.join('\n'));

const queryInsightHtml = table('Queries leading to your site - Top', dashboard.queryInsights.top) + table('Queries leading to your site - Trending up', dashboard.queryInsights.trendingUp) + table('Queries leading to your site - Trending down', dashboard.queryInsights.trendingDown);
const html = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>GSC Dashboard</title><style>body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;margin:32px;color:#111827;background:#f8fafc}main{max-width:1180px;margin:auto}section{background:white;border:1px solid #e5e7eb;border-radius:8px;padding:18px;margin:16px 0}table{width:100%;border-collapse:collapse;font-size:14px}th,td{border-bottom:1px solid #e5e7eb;padding:8px;text-align:right}th:first-child,td:first-child{text-align:left}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}.card{background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px}.value{font-size:28px;font-weight:700}</style></head><body><main><h1>GSC Dashboard</h1><p>' + escapeHtml(dashboard.site) + ' | ' + dashboard.startDate + ' to ' + dashboard.endDate + '</p><div class="cards"><div class="card"><div>Rows</div><div class="value">' + dashboard.summary.totalRows + '</div></div><div class="card"><div>Brand clicks</div><div class="value">' + dashboard.summary.brandClicks + '</div></div><div class="card"><div>Non-brand clicks</div><div class="value">' + dashboard.summary.nonBrandClicks + '</div></div><div class="card"><div>Non-brand share</div><div class="value">' + fmtPct(dashboard.summary.nonBrandShare) + '</div></div></div>' + queryInsightHtml + table('Clusters', dashboard.byCluster) + table('Top Pages', dashboard.byPage) + table('Top Queries', dashboard.byQuery) + table('Countries', dashboard.byCountry) + '</main></body></html>';
fs.writeFileSync(path.join(outDir, 'index.html'), html);
console.log('[gsc:dashboard] wrote ' + path.join(outDir, 'dashboard-latest.json'));
console.log('[gsc:dashboard] wrote ' + path.join(outDir, 'index.html'));
