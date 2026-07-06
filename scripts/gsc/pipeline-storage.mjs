import fs from 'node:fs';
import path from 'node:path';

const MAX_RUNS = 12;

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function artifact(baseDir, key, relativePath) {
  const filePath = path.join(baseDir, relativePath);
  if (!fs.existsSync(filePath)) return { key, path: relativePath, exists: false, modifiedAt: null, size: 0 };
  const stats = fs.statSync(filePath);
  return { key, path: relativePath, exists: true, modifiedAt: stats.mtime.toISOString(), size: stats.size };
}

export function recordPipelineRun({ baseDir = process.cwd(), status, sourceType, startedAt, completedAt, errors = [], notes = [] }) {
  const dashboardDir = path.join(baseDir, 'data/gsc/dashboard');
  fs.mkdirSync(dashboardDir, { recursive: true });
  const historyPath = path.join(dashboardDir, 'pipeline-runs-latest.json');
  const manifestPath = path.join(dashboardDir, 'pipeline-manifest-latest.json');
  const run = {
    id: completedAt || startedAt || new Date().toISOString(),
    startedAt,
    completedAt,
    status,
    sourceType,
    errors,
    notes,
    artifacts: [
      artifact(baseDir, 'raw', 'data/gsc/raw/search-analytics-latest.json'),
      artifact(baseDir, 'dashboard', 'data/gsc/dashboard/dashboard-latest.json'),
      artifact(baseDir, 'report', 'data/gsc/reports/cluster-report-latest.json'),
      artifact(baseDir, 'titleCandidates', 'data/gsc/dashboard/title-test-candidates.csv'),
      artifact(baseDir, 'recommendations', 'data/gsc/dashboard/recommendations-latest.json'),
      artifact(baseDir, 'snapshot', 'data/gsc/dashboard/dashboard-snapshot-latest.json')
    ]
  };
  const history = [run, ...readJson(historyPath, [])].slice(0, MAX_RUNS);
  const manifest = { updatedAt: completedAt || new Date().toISOString(), latestRun: run, recentRuns: history };
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  return manifest;
}

export function readPipelineManifest(baseDir = process.cwd()) {
  return readJson(path.join(baseDir, 'data/gsc/dashboard/pipeline-manifest-latest.json'), { updatedAt: null, latestRun: null, recentRuns: [] });
}
