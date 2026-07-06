import fs from 'node:fs';
import path from 'node:path';
import { readPipelineManifest } from './pipeline-storage.mjs';
import { implementationHistoryPath, readImplementationHistory } from './implementation-history.mjs';

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readText(filePath, fallback = '') {
  if (!fs.existsSync(filePath)) return fallback;
  return fs.readFileSync(filePath, 'utf8');
}

function modifiedAt(filePath) {
  try {
    return fs.statSync(filePath).mtime.toISOString();
  } catch {
    return null;
  }
}

const gscDir = path.join(process.cwd(), 'data/gsc');
const dashboardDir = path.join(gscDir, 'dashboard');
const dashboardPath = path.join(dashboardDir, 'dashboard-latest.json');
const recommendationsPath = path.join(dashboardDir, 'recommendations-latest.json');
const markdownPath = path.join(dashboardDir, 'dashboard-latest.md');
const titleCandidatesPath = path.join(dashboardDir, 'title-test-candidates.csv');
const manifest = readPipelineManifest();
const dashboard = readJson(dashboardPath, {});
const recommendations = readJson(recommendationsPath, {});

fs.mkdirSync(dashboardDir, { recursive: true });
const payload = {
  generatedAt: new Date().toISOString(),
  dashboard,
  recommendations,
  implementationHistory: readImplementationHistory(100),
  dashboardMarkdown: readText(markdownPath, ''),
  refresh: manifest,
  artifacts: {
    dashboard: { path: 'data/gsc/dashboard/dashboard-latest.json', modifiedAt: modifiedAt(dashboardPath) },
    markdown: { path: 'data/gsc/dashboard/dashboard-latest.md', modifiedAt: modifiedAt(markdownPath) },
    titleCandidates: { path: 'data/gsc/dashboard/title-test-candidates.csv', modifiedAt: modifiedAt(titleCandidatesPath) },
    recommendations: { path: 'data/gsc/dashboard/recommendations-latest.json', modifiedAt: modifiedAt(recommendationsPath) },
    implementationHistory: { path: 'data/gsc/implementation-history.jsonl', modifiedAt: modifiedAt(implementationHistoryPath) }
  }
};
const stamp = payload.generatedAt.replace(/[:.]/g, '-');
fs.writeFileSync(path.join(dashboardDir, 'dashboard-snapshot-' + stamp + '.json'), JSON.stringify(payload, null, 2));
fs.writeFileSync(path.join(dashboardDir, 'dashboard-snapshot-latest.json'), JSON.stringify(payload, null, 2));
console.log('[gsc:snapshot] wrote ' + path.join(dashboardDir, 'dashboard-snapshot-latest.json'));
