import { spawnSync } from 'node:child_process';
import { recordPipelineRun } from './pipeline-storage.mjs';

function run(cmd, args) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', shell: process.platform === 'win32' });
  if (res.status !== 0) throw new Error(cmd + ' ' + args.join(' ') + ' failed with status ' + (res.status || 1));
}

const startedAt = new Date().toISOString();
try {
  run('node', ['scripts/gsc/fetch-search-analytics.mjs']);
  run('node', ['scripts/gsc/build-dashboard.mjs']);
  run('node', ['scripts/gsc/export-title-test-candidates.mjs']);
  run('node', ['scripts/gsc/build-recommendations.mjs']);
  run('node', ['scripts/gsc/build-dashboard-snapshot.mjs']);
  recordPipelineRun({ status: 'success', sourceType: 'gsc', startedAt, completedAt: new Date().toISOString() });
  run('node', ['scripts/gsc/build-dashboard-snapshot.mjs']);
} catch (err) {
  recordPipelineRun({ status: 'failed', sourceType: 'gsc', startedAt, completedAt: new Date().toISOString(), errors: [err.message || String(err)] });
  console.error(err.message || err);
  process.exit(1);
}
