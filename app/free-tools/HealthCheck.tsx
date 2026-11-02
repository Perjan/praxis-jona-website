'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import type { Locale } from 'app/lib/i18n-routing';
import { emptyAnswers, evaluateTool, visibleFields, type Answers, type ToolKind, type ToolResult } from './definition';
import { copy } from './copy';

const button = 'rounded-xl border border-primary px-5 py-3 font-semibold text-primary hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary';

export default function HealthCheck({ kind, locale }: { kind: ToolKind; locale: Locale }) {
  const c = copy[locale];
  const [answers, setAnswers] = useState<Answers>(() => emptyAnswers(kind));
  const [result, setResult] = useState<ToolResult | null>(null);
  const [error, setError] = useState('');
  const [missing, setMissing] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLElement>(null);
  const fields = visibleFields(kind, answers, locale);
  const urgent = answers.warning === 'acute' || answers.warning === 'emergency';
  const warning = answers.warning && answers.warning !== 'none' ? evaluateTool(kind, { ...emptyAnswers(kind), group: 'adult', taking: 'yes', warning: answers.warning }, locale) : null;
  const immediate = urgent ? [warning?.intro, ...warning?.warnings.map(item => item.text) ?? []].join(' ') : warning?.warnings.map(item => item.text).join(' ') || (answers.warning === 'bleeding' ? warning?.sections.find(section => section.level === 'attention')?.text : '');

  function change(name: string, value: string | string[]) {
    setAnswers(previous => ({ ...previous, [name]: value }));
    setResult(null);
    setError('');
    setMissing(previous => previous.filter(item => item !== name));
  }
  function reset() {
    setAnswers(emptyAnswers(kind));
    setResult(null);
    setError('');
    setMissing([]);
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>('input')?.focus());
  }
  function submit(event: React.FormEvent) {
    event.preventDefault();
    setResult(null);
    const unanswered = urgent ? [] : fields.filter(field => field.type === 'radio' && !answers[field.name]).map(field => field.name);
    setMissing(unanswered);
    if (unanswered.length) {
      setError(c.required);
      formRef.current?.querySelector<HTMLInputElement>(`[name="${unanswered[0]}"]`)?.focus();
      return;
    }
    // Hidden inputs never influence a result or the printed summary.
    const active = Object.fromEntries(fields.map(field => [field.name, answers[field.name]]));
    try {
      setResult(evaluateTool(kind, active, locale));
      setError('');
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch {
      setError(c.numberError);
      requestAnimationFrame(() => document.getElementById('tool-error')?.focus());
    }
  }
  return (
    <div className="health-check" data-tool-urgent={urgent}>
      <p className="mb-6 rounded-xl bg-stone-100 p-5 text-sm leading-relaxed">{c.privacy}</p>
      <form ref={formRef} onSubmit={submit} noValidate autoComplete="off" aria-label={c.result}>
        <div className="space-y-6">
          {fields.map(field => (
            <fieldset key={field.name} className="rounded-2xl border border-stone-200 p-5 sm:p-6" aria-invalid={missing.includes(field.name)} aria-describedby={field.hint ? `${field.name}-hint` : undefined}>
              <legend className="max-w-full px-2 text-lg font-semibold text-primary">{field.title}</legend>
              {field.hint && <p id={`${field.name}-hint`} className="mb-4 text-sm leading-relaxed text-stone-600">{field.hint}</p>}
              {field.type === 'number' ? (
                <input id={field.name} aria-label={field.title} name={field.name} type="text" inputMode="decimal" value={answers[field.name] as string} onChange={event => change(field.name, event.target.value)} className="w-full max-w-xs rounded-lg border-stone-300 focus:border-primary focus:ring-primary" />
              ) : (
                <div className="grid gap-3">
                  {field.options?.map(option => {
                    const selected = Array.isArray(answers[field.name]) ? answers[field.name].includes(option.value) : answers[field.name] === option.value;
                    return (
                      <label key={option.value} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 leading-relaxed ${selected ? 'border-primary bg-green-50' : 'border-stone-200 hover:bg-stone-50'}`}>
                        <input type={field.type as 'radio' | 'checkbox'} name={field.name} value={option.value} checked={selected} required={field.type === 'radio'} aria-invalid={missing.includes(field.name)} onChange={event => change(field.name, field.type === 'checkbox' ? (event.target.checked ? [...answers[field.name] as string[], option.value] : (answers[field.name] as string[]).filter(value => value !== option.value)) : option.value)} className="mt-1 h-5 w-5 shrink-0 border-stone-400 text-primary focus:ring-primary" />
                        <span>{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </fieldset>
          ))}
        </div>
        {immediate && <p role="alert" className="mt-6 rounded-xl border-2 border-red-700 bg-red-50 p-5 font-semibold leading-relaxed text-red-950">{immediate}</p>}
        {error && <p id="tool-error" role="alert" tabIndex={-1} className="mt-5 text-red-800">{error}</p>}
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className={`${button} bg-primary text-white hover:bg-primaryDarker`}>{c.submit}</button>
          {!result && <button type="button" onClick={reset} className={button}>{c.reset}</button>}
        </div>
      </form>
      {result && (
        <section ref={resultRef} tabIndex={-1} aria-labelledby="tool-result-title" className="health-check-result mt-10 rounded-2xl border border-primary p-6 outline-none sm:p-8">
          <p className="mb-3 text-sm uppercase tracking-widest text-stone-600">{c.result}</p>
          {result.warnings.map((item, index) => <p key={index} className="mb-4 rounded-lg bg-red-50 p-4 text-red-950">{item.text}</p>)}
          <h2 id="tool-result-title" className="text-2xl font-semibold text-primary">{result.title}</h2>
          <p className="mt-4 leading-relaxed">{result.intro}</p>
          {result.next && <p className="mt-4 font-medium leading-relaxed">{result.next}</p>}
          {!result.urgent && <>
            <h3 className="mt-8 text-xl font-semibold">{c.summary}</h3>
            <dl className="mt-4 space-y-4 text-sm">
              {fields.map(field => {
                const value = answers[field.name];
                const label = Array.isArray(value) ? value.map(entry => field.options?.find(option => option.value === entry)?.label).join(', ') || c.none : field.options?.find(option => option.value === value)?.label || value || c.unknown;
                return <div key={field.name}><dt className="font-semibold">{field.title}</dt><dd className="mt-1">{label}</dd></div>;
              })}
            </dl>
          </>}
          {result.sections.map((section, index) => <div key={index} className="mt-8 border-t border-stone-200 pt-6">
            <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
            <p className="mt-3 leading-relaxed">{section.text}</p>
            {section.certainty && <p className="mt-3 text-sm text-stone-600">{section.certainty}</p>}
            {section.limitation && <p className="mt-3 leading-relaxed"><strong>{c.limitation}: </strong>{section.limitation}</p>}
            {section.observe && <p className="mt-3 leading-relaxed"><strong>{c.observe}: </strong>{section.observe}</p>}
            {!!section.sources?.length && <details className="mt-4 text-sm"><summary className="cursor-pointer font-semibold">{c.sources}</summary><ul className="mt-2 space-y-2">{section.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="break-words underline">{source.label}</a></li>)}</ul></details>}
          </div>)}
          {kind === 'perimenopause' && !result.urgent && <div className="mt-8 rounded-xl bg-stone-100 p-5"><h3 className="font-semibold">{c.hormoneTitle}</h3><p className="mt-2 leading-relaxed">{c.hormone}</p></div>}
          {!result.urgent && <p className="mt-6 text-sm leading-relaxed">{c.notice}</p>}
          <div className="tool-actions mt-8 flex flex-wrap gap-3">
            <button type="button" className={button} onClick={() => window.print()}>{c.print}</button>
            <button type="button" className={button} onClick={() => { setResult(null); formRef.current?.querySelector<HTMLInputElement>('input')?.focus(); }}>{c.edit}</button>
            <button type="button" className={button} onClick={reset}>{c.reset}</button>
          </div>
          {!result.urgent && <Link className="mt-6 inline-block font-semibold text-primary underline" href={locale === 'en' ? '/en/contact' : '/kontakt'}>{c.contact}</Link>}
        </section>
      )}
    </div>
  );
}
