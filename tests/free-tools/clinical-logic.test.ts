import { describe, expect, it } from 'vitest';
import { evaluateTool, fieldsForTool, visibleFields } from 'app/free-tools/definition';

const adult = { group: 'adult', warning: 'none', ferritin: '', tsat: '', hb: 'normal', crp: 'normal', symptoms: [], risks: [], recent: 'no', rls: 'no' };
describe('approved tool safety rules', () => {
  it.each(['de', 'en'] as const)('prioritises emergencies without requiring other answers (%s)', locale => {
    for (const kind of ['status', 'intake', 'perimenopause'] as const) {
      expect(evaluateTool(kind, { warning: kind === 'perimenopause' ? 'emergency' : 'acute' }, locale).urgent).toBe(true);
    }
  });
  it('keeps ferritin boundaries and decimal commas unchanged in both languages', () => {
    for (const locale of ['de', 'en'] as const) {
      expect(evaluateTool('status', { ...adult, ferritin: '30' }, locale).code).toBe('deficiency');
      expect(evaluateTool('status', { ...adult, ferritin: '30,1' }, locale).code).toBe('borderline');
      expect(evaluateTool('status', { ...adult, ferritin: '50', symptoms: ['fatigue'] }, locale).code).toBe('symptom-range');
      expect(() => evaluateTool('status', { ...adult, tsat: '101' }, locale)).toThrow();
    }
  });
  it('does not classify special groups or recently treated laboratory values', () => {
    expect(evaluateTool('status', { ...adult, group: 'special', ferritin: '10' }, 'en').code).toBe('special');
    expect(evaluateTool('status', { ...adult, recent: 'yes', ferritin: '10' }, 'en').code).toBe('context');
  });
  it('keeps warnings available when irrelevant fields are hidden', () => {
    expect(visibleFields('status', { group: 'special' }).map(f => f.name)).toEqual(['group', 'warning']);
    expect(visibleFields('intake', { group: 'adult', taking: 'no' }).map(f => f.name)).toEqual(['group', 'warning', 'taking']);
    expect(visibleFields('perimenopause', { warning: 'emergency' }).map(f => f.name)).toEqual(['warning']);
  });
  it('does not infer a hormone deficiency or probability', () => {
    const result = evaluateTool('perimenopause', { age: 'under40', context: 'none', period: 'year', change: 'yes', symptoms: ['heat'], burden: 'mild', warning: 'none' }, 'en');
    expect(result.code).toBe('younger');
    expect(result).not.toHaveProperty('probability');
    expect(result).not.toHaveProperty('hormoneDiagnosis');
  });
  it('provides translated labels from the same field definitions', () => {
    expect(fieldsForTool('status', 'en')[0].title).toBe('Who is this check for?');
  });
});
