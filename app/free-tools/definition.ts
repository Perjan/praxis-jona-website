import ironFields from './clinical/iron-fields.json';
import menopauseFields from './clinical/perimenopause-fields.json';
import english from './clinical/english.json';
import { evaluateIron, evaluateIntake, references } from './clinical/iron.mjs';
import { evaluate, symptomLabels } from './clinical/perimenopause.mjs';
import type { Locale } from 'app/lib/i18n-routing';

import type { ToolKind } from './catalog';
export { tools, toolPath } from './catalog';
export type { ToolKind } from './catalog';
export type Answers = Record<string, string | string[]>;
export type Field = { name: string; title: string; hint?: string; type: string; options?: { value: string; label: string }[] };
export type ResultSection = { title: string; text: string; level?: string; certainty?: string; limitation?: string; observe?: string; sources?: { label: string; url: string }[] };
export type ToolResult = { code: string; title: string; intro: string; next?: string; urgent: boolean; sections: ResultSection[]; warnings: { level: string; text: string }[] };

// Keep the approved German decision engines unchanged. Translate presentation only.
export function translate(text: string, locale: Locale): string {
  return locale === 'en' ? english[text] ?? text : text;
}
export function fieldsForTool(kind: ToolKind, locale: Locale): Field[] {
  const fields: Field[] = kind === 'perimenopause' ? menopauseFields.map(field => field.name === 'symptoms' ? { ...field, options: Object.entries(symptomLabels).map(([value, label]) => ({ value, label })) } : field) : ironFields[kind];
  return fields.map(field => ({ ...field, title: translate(field.title, locale), hint: translate(field.hint ?? '', locale), options: field.options?.map(option => ({ ...option, label: translate(option.label, locale) })) }));
}
export function visibleFields(kind: ToolKind, answers: Answers, locale: Locale = 'de'): Field[] {
  return fieldsForTool(kind, locale).filter(field => {
    if (answers.warning === 'acute' || answers.warning === 'emergency') return kind === 'perimenopause' ? field.name === 'warning' : ['group', 'warning'].includes(field.name);
    if (kind !== 'perimenopause' && answers.group === 'special') return ['group', 'warning'].includes(field.name);
    if (kind === 'intake' && answers.taking === 'no') return ['group', 'warning', 'taking'].includes(field.name);
    return true;
  });
}
export function emptyAnswers(kind: ToolKind): Answers {
  return Object.fromEntries(fieldsForTool(kind, 'de').map(field => [field.name, field.type === 'checkbox' ? [] : '']));
}
export function evaluateTool(kind: ToolKind, answers: Answers, locale: Locale): ToolResult {
  const t = (text: string) => translate(text, locale);
  if (kind === 'perimenopause') {
    const output = evaluate(answers);
    return { code: output.stage, title: t(output.title), intro: t(output.explanation), next: t(output.next), urgent: output.stage === 'urgent', warnings: output.warnings.map(w => ({ ...w, text: t(w.text) })), sections: output.education.map(section => ({ ...section, title: t(section.title), text: t(section.text), certainty: t(section.certainty), limitation: t(section.limitation), observe: t(section.observe), sources: section.sources.map(source => ({ ...source, label: t(source.label) })) })) };
  }
  const output = kind === 'status' ? evaluateIron(answers) : evaluateIntake(answers);
  let intro = t(output.intro);
  if (locale === 'en' && output.intro.startsWith('Besonders relevant: ')) {
    let issues = output.intro.slice('Besonders relevant: '.length).split('. Das sind')[0];
    for (const [source, target] of Object.entries(english).sort((a, b) => b[0].length - a[0].length)) {
      issues = issues.replaceAll(source, target);
    }
    intro = `Particularly relevant: ${issues}. These are possible starting points, not proof of the cause of low ferritin. Do not change a medical prescription on your own.`;
  }
  return { code: output.code, title: t(output.title), intro, urgent: output.urgent, warnings: [], sections: output.sections.map(section => ({ ...section, title: t(section.title), text: t(section.text), sources: section.source ? [{ label: t(references[section.source].title), url: references[section.source].url }] : [] })) };
}
