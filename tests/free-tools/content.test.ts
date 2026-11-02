import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import pairs from 'app/free-tools/article-pairs.json';
import { localizedPathForLocale } from 'app/lib/i18n-routing';
import { fieldsForTool, tools, toolPath, evaluateTool } from 'app/free-tools/definition';

describe('bilingual approved content', () => {
  it('connects all 17 article pairs and their clinical sources', () => {
    expect(pairs).toHaveLength(17);
    for (const pair of pairs) for (const locale of ['de', 'en'] as const) {
      const post = readFileSync(`posts/${locale === 'en' ? 'en/' : ''}${pair[locale]}.mdx`, 'utf8');
      expect(post).toContain(`slugDe: "${pair.de}"`);
      expect(post).toContain(`slugEn: "${pair.en}"`);
      expect(post).toContain('medicalReviewer: "jonida-gjolli"');
      expect(post).toContain(locale === 'en' ? '## Sources' : '## Quellen');
      expect(post).toContain('/free-tools/');
      expect(post).not.toMatch(/\.html\)|index\.html|Noch nicht veröffentlicht|Status: redaktioneller/);
      const other = locale === 'en' ? 'de' : 'en';
      expect(localizedPathForLocale(`${locale === 'en' ? '/en' : ''}/blog/${pair[locale]}`, other)).toBe(`${other === 'en' ? '/en' : ''}/blog/${pair[other]}`);
      for (const link of Array.from(post.matchAll(/\]\((\/[^)]+)\)/g))) {
        if (link[1].includes('/free-tools/')) expect(tools.some(tool => toolPath(tool.kind, locale) === link[1])).toBe(true);
      }
    }
  });
  it('keeps the same field names and option values in both languages', () => {
    for (const tool of tools) {
      const de = fieldsForTool(tool.kind, 'de');
      const en = fieldsForTool(tool.kind, 'en');
      expect(en.map(f => [f.name, f.type, f.options?.map(o => o.value)])).toEqual(de.map(f => [f.name, f.type, f.options?.map(o => o.value)]));
      expect(localizedPathForLocale(toolPath(tool.kind, 'de'), 'en')).toBe(toolPath(tool.kind, 'en'));
      expect(localizedPathForLocale(toolPath(tool.kind, 'en'), 'de')).toBe(toolPath(tool.kind, 'de'));
      for (let index = 0; index < de.length; index++) {
        expect(en[index].title).not.toBe(de[index].title);
        for (let option = 0; option < (de[index].options?.length ?? 0); option++) {
          const original = de[index].options![option].label;
          if (!/^[\d–-]+$/.test(original)) expect(en[index].options![option].label).not.toBe(original);
        }
      }
    }
  });
  it('translates the complete intake result with multiple issues', () => {
    const result = evaluateTool('intake', { group: 'adult', taking: 'yes', warning: 'none', confirmed: 'yes', type: 'salt', dose: '60plus', schedule: 'daily', food: 'with', blockers: ['coffee', 'minerals'], vitamin: 'no', adherence: 'missed', tolerance: 'good', duration: 'long', response: 'flat', conditions: [] }, 'en');
    expect(result.intro).toContain('Coffee, tea or calcium');
    expect(JSON.stringify(result)).not.toMatch(/Kaffee|Regelmäßigkeit|Mahlzeitenabstand|Prüf|Einnahme/);
  });
});
