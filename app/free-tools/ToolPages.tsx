import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Locale } from 'app/lib/i18n-routing';
import { buildMetadata } from 'app/components/pageMetadata';
import { copy, menopauseFaq } from './copy';
import { toolPath, tools, type ToolKind } from './definition';
import HealthCheck from './HealthCheck';
import articlePairs from './article-pairs.json';
import { Constants } from 'app/Constants';
import './tools.css';

export function toolsMetadata(locale: Locale, slug?: string) {
  const tool = slug ? tools.find(item => item[locale] === slug) : undefined;
  if (slug && !tool) notFound();
  return buildMetadata({ title: `${tool ? tool.title[locale] : copy[locale].hub} | Praxis Jona`, description: tool ? tool.description[locale] : copy[locale].intro, canonical: tool ? toolPath(tool.kind, locale) : `${locale === 'en' ? '/en' : ''}/free-tools`, alternate: tool ? toolPath(tool.kind, locale === 'en' ? 'de' : 'en') : `${locale === 'en' ? '' : '/en'}/free-tools`, locale });
}
export function ToolsHub({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <div className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
    <p className="text-sm uppercase tracking-widest text-stone-600">{c.eyebrow}</p>
    <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-primary sm:text-5xl">{c.hub}</h1>
    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">{c.intro}</p>
    <div className="mt-12 grid gap-6 md:grid-cols-3">{tools.map((tool, index) => <article key={tool.kind} className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-7">
      <p className="text-sm text-stone-500">0{index + 1}</p><h2 className="mt-5 font-serif text-2xl text-primary">{tool.title[locale]}</h2>
      <p className="mb-8 mt-4 flex-1 leading-relaxed text-stone-700">{tool.description[locale]}</p>
      <Link className="font-semibold text-primary underline underline-offset-4" href={toolPath(tool.kind, locale)}>{c.start} →<span className="sr-only"> {tool.title[locale]}</span></Link>
    </article>)}</div>
    <p className="mt-10 max-w-3xl text-sm leading-relaxed text-stone-600">{c.notice}</p>
    <p className="mt-4 text-sm">{c.author} <Link className="underline" href={`${locale === 'en' ? '/en' : ''}/blog/authors/jonida-gjolli`}>Dr. med. Jonida Gjolli</Link></p>
  </div>;
}
export function ToolPage({ locale, slug }: { locale: Locale; slug: string }) {
  const tool = tools.find(item => item[locale] === slug);
  if (!tool) notFound();
  const c = copy[locale];
  const related = articlePairs.filter(pair => pair.topic === (tool.kind === 'perimenopause' ? 'perimenopause' : 'eisen'));
  const url = `${Constants.baseUrl}${toolPath(tool.kind, locale)}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: tool.heading[locale],
    description: tool.description[locale],
    inLanguage: locale,
    reviewedBy: {
      '@type': 'Person',
      name: 'Dr. med. Jonida Gjolli',
      url: `${Constants.baseUrl}${locale === 'en' ? '/en' : ''}/blog/authors/jonida-gjolli`,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: c.hub, item: `${Constants.baseUrl}${locale === 'en' ? '/en' : ''}/free-tools` },
        { '@type': 'ListItem', position: 2, name: tool.title[locale], item: url },
      ],
    },
  };
  return <div className="free-tool-page mx-auto max-w-3xl px-5 py-10 sm:py-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <div className="free-tool-intro">
      <nav aria-label={locale === 'en' ? 'Breadcrumb' : 'Brotkrumennavigation'}><Link href={`${locale === 'en' ? '/en' : ''}/free-tools`} className="text-sm font-semibold text-primary underline">← {c.back}</Link></nav>
      <h1 className="mt-8 font-serif text-4xl font-semibold text-primary sm:text-5xl">{tool.heading[locale]}</h1>
      <p className="mt-5 text-lg leading-relaxed text-stone-700">{tool.intro[locale]}</p>
      <p className="mt-4 text-sm text-stone-600">{tool.kind === 'perimenopause' ? (locale === 'en' ? 'About 3 minutes · No registration' : 'Etwa 3 Minuten · Ohne Anmeldung') : (locale === 'en' ? 'No registration' : 'Ohne Anmeldung')}</p>
      <p className="my-6 text-sm leading-relaxed text-stone-600">{tool.notice[locale]}</p>
      <p className="mb-8 text-sm">{c.author} <Link className="underline" href={`${locale === 'en' ? '/en' : ''}/blog/authors/jonida-gjolli`}>Dr. med. Jonida Gjolli</Link></p>
    </div>
    <noscript><p>{locale === 'en' ? 'JavaScript is needed for interactive results. You can read the related articles below.' : 'Für interaktive Ergebnisse ist JavaScript erforderlich. Lesen Sie alternativ die folgenden Beiträge.'}</p></noscript>
    <HealthCheck kind={tool.kind as ToolKind} locale={locale} />
    <div className="free-tools-support">
      {tool.kind === 'perimenopause' && <section className="mt-12"><h2 className="font-serif text-2xl font-semibold text-primary">{c.faq}</h2>{menopauseFaq[locale].map(([question, answer]) => <details key={question} className="mt-4 rounded-xl border border-stone-200 p-5"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-3 leading-relaxed">{answer}</p></details>)}</section>}
      <nav className="mt-12" aria-label={c.back}><h2 className="font-serif text-2xl font-semibold text-primary">{c.back}</h2><ul className="mt-4 space-y-3">{tools.filter(item => item.kind !== tool.kind).map(item => <li key={item.kind}><Link className="text-primary underline" href={toolPath(item.kind, locale)}>{item.title[locale]}</Link></li>)}</ul></nav>
      <section className="mt-12"><h2 className="font-serif text-2xl font-semibold text-primary">{c.related}</h2><ul className="mt-4 space-y-3">{related.map(pair => <li key={pair.de}><Link className="text-primary underline" href={`${locale === 'en' ? '/en' : ''}/blog/${pair[locale]}`}>{pair.title[locale]}</Link></li>)}</ul></section>
    </div>
  </div>;
}
