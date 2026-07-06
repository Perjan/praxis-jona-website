import fs from 'node:fs';
import path from 'node:path';
import { buildRecommendations } from './recommendation-engine.mjs';

const cfg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config/gsc-dashboard.config.json'), 'utf8'));
const gscDir = path.join(process.cwd(), 'data/gsc');
const reportPath = path.join(gscDir, 'reports/cluster-report-latest.json');
const titleCandidatesPath = path.join(gscDir, 'dashboard/title-test-candidates.csv');
const recommendationsPath = path.join(gscDir, 'dashboard/recommendations-latest.json');
const recommendationsMdPath = path.join(gscDir, 'dashboard/recommendations-latest.md');
const outDir = path.join(gscDir, 'dashboard');

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"' && line[i + 1] === '"' && inQuotes) {
      current += '"';
      i += 1;
      continue;
    }
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === ',' && !inQuotes) {
      fields.push(current);
      current = '';
      continue;
    }
    current += char;
  }
  fields.push(current);
  return fields;
}

function parseTitleCandidates(csv) {
  const lines = csv.split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length <= 1) return [];
  return lines.slice(1).map((line) => {
    const [page, clicks, impressions, ctr, position, suggestedTest] = parseCsvLine(line);
    return {
      page,
      clicks: Number(clicks) || 0,
      impressions: Number(impressions) || 0,
      ctr: Number(ctr) || 0,
      position: Number(position) || 0,
      suggestedTest
    };
  });
}

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function fmtPct(value) {
  return (value * 100).toFixed(2) + '%';
}

function renderMarkdown(payload) {
  const lines = ['# GSC Recommendations', '', 'Generated: ' + payload.generatedAt, 'Mode: ' + payload.mode, 'Source report: ' + payload.sourceReport, 'Source title tests: ' + payload.sourceTitleTests, '', '## Proposals', ''];
  if (!payload.proposals.length) {
    lines.push('_No active proposals._', '');
  }
  for (const proposal of payload.proposals) {
    lines.push('### ' + proposal.opportunityType + ' | ' + proposal.priority.toUpperCase());
    lines.push('- ID: ' + proposal.id);
    lines.push('- Page: ' + proposal.page);
    lines.push('- Cluster: ' + proposal.cluster);
    lines.push('- Signal: ' + proposal.currentSignal.clicks + ' clicks, ' + proposal.currentSignal.impressions + ' impressions, ' + fmtPct(proposal.currentSignal.ctr) + ' CTR, position ' + proposal.currentSignal.position.toFixed(2));
    lines.push('- Reason: ' + proposal.reason);
    lines.push('- Proposed change: ' + proposal.proposedChange);
    lines.push('- Expected outcome: ' + proposal.expectedOutcome);
    lines.push('- Status: ' + proposal.status);
    lines.push('');
  }
  lines.push('## Changes', '');
  if (!payload.changes.length) {
    lines.push('_No accepted or shipped changes logged yet._');
  } else {
    for (const change of payload.changes) {
      lines.push('- [' + change.status + '] ' + change.page + ' | ' + change.changeType + ' | ' + change.summary + ' (' + change.updatedAt + ')');
      if (change.notes) lines.push('  Notes: ' + change.notes);
    }
  }
  lines.push('');
  return lines.join('\n');
}

if (!fs.existsSync(reportPath)) {
  console.error('[gsc:recommendations] Missing data/gsc/reports/cluster-report-latest.json. Run npm run gsc:dashboard first.');
  process.exit(1);
}
if (!fs.existsSync(titleCandidatesPath)) {
  console.error('[gsc:recommendations] Missing data/gsc/dashboard/title-test-candidates.csv. Run npm run gsc:title-tests first.');
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
const report = readJson(reportPath, {});
const titleCandidates = parseTitleCandidates(fs.readFileSync(titleCandidatesPath, 'utf8'));
const existingRecommendations = readJson(recommendationsPath, null);
const payload = buildRecommendations({ report, titleCandidates, existingRecommendations, config: cfg });
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const markdown = renderMarkdown(payload);

fs.writeFileSync(path.join(outDir, 'recommendations-' + stamp + '.json'), JSON.stringify(payload, null, 2));
fs.writeFileSync(recommendationsPath, JSON.stringify(payload, null, 2));
fs.writeFileSync(path.join(outDir, 'recommendations-' + stamp + '.md'), markdown);
fs.writeFileSync(recommendationsMdPath, markdown);
console.log('[gsc:recommendations] wrote ' + recommendationsPath);
