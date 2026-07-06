import { appendImplementation } from './implementation-history.mjs';

const raw = process.argv.slice(2).join(' ').trim();

if (!raw) {
  console.error('[gsc:record-implementation] Pass one JSON object argument.');
  console.error('Example: npm run gsc:record-implementation -- \'{"summary":"Updated page","why":"CTR near-win","pages":["/blog/example"],"changes":["Retitled page"]}\'');
  process.exit(1);
}

let entry;
try {
  entry = JSON.parse(raw);
} catch (error) {
  console.error('[gsc:record-implementation] Invalid JSON:', error.message);
  process.exit(1);
}

if (!entry.summary || !entry.why || !Array.isArray(entry.changes)) {
  console.error('[gsc:record-implementation] Required fields: summary, why, changes[].');
  process.exit(1);
}

const payload = appendImplementation(entry);
console.log('[gsc:record-implementation] recorded ' + payload.implementedAt + ' ' + payload.summary);
