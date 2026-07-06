import fs from 'node:fs';
import path from 'node:path';

export const implementationHistoryPath = path.join(process.cwd(), 'data/gsc/implementation-history.jsonl');

export function readImplementationHistory(limit = 50) {
  if (!fs.existsSync(implementationHistoryPath)) return [];

  const lines = fs
    .readFileSync(implementationHistoryPath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return lines
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort((a, b) => String(b.implementedAt || '').localeCompare(String(a.implementedAt || '')))
    .slice(0, limit);
}

export function appendImplementation(entry) {
  fs.mkdirSync(path.dirname(implementationHistoryPath), { recursive: true });
  const payload = {
    implementedAt: new Date().toISOString(),
    source: 'manual-seo-geo',
    ...entry,
  };

  fs.appendFileSync(implementationHistoryPath, JSON.stringify(payload) + '\n');
  return payload;
}
