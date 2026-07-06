import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const API = 'https://www.googleapis.com/webmasters/v3/sites';
const cfg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config/gsc-dashboard.config.json'), 'utf8'));

const SITE = process.env.GSC_SITE || cfg.site;
const START = process.env.GSC_START_DATE;
const END = process.env.GSC_END_DATE;
const SEARCH_TYPES = (process.env.GSC_SEARCH_TYPES || cfg.searchTypes.join(',')).split(',').map((s) => s.trim()).filter(Boolean);
const DIMENSIONS = cfg.dimensions || ['date', 'country', 'device', 'page', 'query'];
const QUERY_DIMENSIONS = ['query'];
const ROW_LIMIT = Number(cfg.rowLimit || 25000);

function runGcloud(args) {
  const res = spawnSync('gcloud', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  return res.status === 0 ? res.stdout.trim() : '';
}

const TOKEN = process.env.GSC_ACCESS_TOKEN || runGcloud(['auth', 'application-default', 'print-access-token']);
const QUOTA_PROJECT = process.env.GSC_QUOTA_PROJECT || cfg.quotaProject || runGcloud(['config', 'get-value', 'project']);

if (!TOKEN) {
  console.error('[gsc:fetch] GSC_ACCESS_TOKEN or gcloud application-default credentials are required. Refusing to use sample data.');
  process.exit(1);
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function defaultRange() {
  const end = new Date();
  end.setDate(end.getDate() - Number(cfg.lagDays || 2));
  const start = new Date(end);
  start.setDate(start.getDate() - Number(cfg.defaultDays || 28) + 1);
  return { start: isoDate(start), end: isoDate(end) };
}

function parseIsoDate(value) {
  const [year, month, day] = String(value).split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function addDays(value, days) {
  const date = parseIsoDate(value);
  date.setUTCDate(date.getUTCDate() + days);
  return isoDate(date);
}

function inclusiveDayCount(startDate, endDate) {
  const start = parseIsoDate(startDate);
  const end = parseIsoDate(endDate);
  return Math.round((end.getTime() - start.getTime()) / 86400000) + 1;
}

function previousRange(startDate, endDate) {
  const days = inclusiveDayCount(startDate, endDate);
  return {
    start: addDays(startDate, -days),
    end: addDays(startDate, -1)
  };
}

async function queryType(type, startDate, endDate, dimensions = DIMENSIONS) {
  const url = API + '/' + encodeURIComponent(SITE) + '/searchAnalytics/query';
  const body = { startDate, endDate, dimensions, rowLimit: ROW_LIMIT, startRow: 0, type };
  const rows = [];

  while (true) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + TOKEN,
        'Content-Type': 'application/json',
        ...(QUOTA_PROJECT && QUOTA_PROJECT !== '(unset)' ? { 'X-Goog-User-Project': QUOTA_PROJECT } : {})
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      throw new Error('GSC API ' + res.status + ': ' + await res.text());
    }

    const data = await res.json();
    const batch = data.rows || [];
    rows.push(...batch);
    if (batch.length < body.rowLimit) break;
    body.startRow += body.rowLimit;
  }

  return rows;
}

function toRecord(row, searchType, dimensions = DIMENSIONS) {
  const record = { searchType, clicks: row.clicks || 0, impressions: row.impressions || 0, ctr: row.ctr || 0, position: row.position || 0 };
  for (const [index, dimension] of dimensions.entries()) {
    record[dimension] = row.keys?.[index] || '';
  }
  return record;
}

async function fetchRange({ label, startDate, endDate, dimensions }) {
  const all = [];
  for (const type of SEARCH_TYPES) {
    const rows = await queryType(type, startDate, endDate, dimensions);
    all.push(...rows.map((row) => toRecord(row, type, dimensions)));
    console.log('[gsc:fetch] ' + label + ' ' + type + ': ' + rows.length + ' rows');
  }
  return all;
}

async function main() {
  const range = defaultRange();
  const startDate = START || range.start;
  const endDate = END || range.end;
  const comparisonRange = previousRange(startDate, endDate);
  const outDir = path.join(process.cwd(), 'data/gsc/raw');
  fs.mkdirSync(outDir, { recursive: true });

  const all = await fetchRange({ label: 'detail current', startDate, endDate, dimensions: DIMENSIONS });
  const queryRows = await fetchRange({ label: 'query current', startDate, endDate, dimensions: QUERY_DIMENSIONS });
  const previousQueryRows = await fetchRange({
    label: 'query previous',
    startDate: comparisonRange.start,
    endDate: comparisonRange.end,
    dimensions: QUERY_DIMENSIONS
  });

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const payload = {
    site: SITE,
    startDate,
    endDate,
    previousStartDate: comparisonRange.start,
    previousEndDate: comparisonRange.end,
    generatedAt: new Date().toISOString(),
    rows: all,
    queryRows,
    previousQueryRows
  };
  const out = path.join(outDir, 'search-analytics-' + startDate + '_' + endDate + '-' + stamp + '.json');
  fs.writeFileSync(out, JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(outDir, 'search-analytics-latest.json'), JSON.stringify(payload, null, 2));
  console.log('[gsc:fetch] wrote ' + out + ' (' + all.length + ' detail records, ' + queryRows.length + ' current query records, ' + previousQueryRows.length + ' previous query records)');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
