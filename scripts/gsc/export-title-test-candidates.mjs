import fs from 'node:fs';
import path from 'node:path';

const cfg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config/gsc-dashboard.config.json'), 'utf8'));
const reportPath = path.join(process.cwd(), 'data/gsc/reports/cluster-report-latest.json');
const outDir = path.join(process.cwd(), 'data/gsc/dashboard');

if (!fs.existsSync(reportPath)) {
  console.error('[gsc:title-tests] Missing data/gsc/reports/cluster-report-latest.json. Run npm run gsc:dashboard first.');
  process.exit(1);
}

function csv(value) {
  return JSON.stringify(String(value ?? ''));
}

function suggestion(pathname) {
  const value = String(pathname || '').toLowerCase();
  const rules = cfg.titleSuggestionRules || [];
  for (const rule of rules) {
    if (new RegExp(rule.regex, 'i').test(value)) return rule.suggestion;
  }
  if (/\b(best|pricing|price|review|alternative|vs)\b/.test(value)) return 'Test a comparison title that states the category, audience, and differentiator.';
  if (/\b(how|guide|setup|fix|tutorial)\b/.test(value)) return 'Test a how-to title that leads with the task and one concrete outcome.';
  return 'Test an answer-first title that names the problem and the practical outcome.';
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
const maxTitleCandidates = Number(cfg.recommendationLimits?.maxTitleCandidates || 30);
const nearWin = report.nearWin || [];
const lines = ['page,clicks,impressions,ctr,position,suggested_test'];

for (const row of nearWin.slice(0, maxTitleCandidates)) {
  lines.push([csv(row.key), row.clicks || 0, row.impressions || 0, Number(row.ctr || 0).toFixed(4), Number(row.position || 0).toFixed(2), csv(suggestion(row.key))].join(','));
}

fs.mkdirSync(outDir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const content = lines.join('\n') + '\n';
fs.writeFileSync(path.join(outDir, 'title-test-candidates-' + stamp + '.csv'), content);
fs.writeFileSync(path.join(outDir, 'title-test-candidates.csv'), content);
console.log('[gsc:title-tests] wrote ' + path.join(outDir, 'title-test-candidates.csv'));
