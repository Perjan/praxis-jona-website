// Offline helper for the praxis-openseo skill. OpenSEO is reached through the
// agent connector, so this script makes no network calls: it only prepares the
// URL batches an agent passes to the free `inspect_urls` tool.
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { readImplementationHistory } from '../gsc/implementation-history.mjs';
import { ORIGIN, PRIORITY_PAIRS } from './priority-indexability.mjs';

const DAY_MS = 24 * 60 * 60 * 1000;

export function buildInspectionPlan({ history, priorityPaths, origin, now, maxUrlsPerCall, recentChangeDays }) {
  const oldest = now.getTime() - recentChangeDays * DAY_MS;
  const recentPages = history
    .filter((entry) => Date.parse(entry.implementedAt) >= oldest)
    .flatMap((entry) => entry.pages ?? []);

  const urls = new Set();
  const skipped = [];
  for (const page of [...recentPages, ...priorityPaths]) {
    if (page.startsWith('/')) urls.add(origin + page);
    else if (page.startsWith(`${origin}/`)) urls.add(page);
    else skipped.push(page);
  }

  const list = [...urls];
  const batches = [];
  for (let start = 0; start < list.length; start += maxUrlsPerCall) {
    batches.push(list.slice(start, start + maxUrlsPerCall));
  }
  return { batches, skipped };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const config = JSON.parse(fs.readFileSync('config/openseo.config.json', 'utf8'));
  const plan = buildInspectionPlan({
    // readImplementationHistory returns all entries up to this limit, newest first.
    history: readImplementationHistory(500),
    priorityPaths: PRIORITY_PAIRS.flat(),
    origin: ORIGIN,
    now: new Date(),
    ...config.inspection,
  });
  console.log(JSON.stringify({ projectId: config.projectId, tool: 'inspect_urls', ...plan }, null, 2));
}
