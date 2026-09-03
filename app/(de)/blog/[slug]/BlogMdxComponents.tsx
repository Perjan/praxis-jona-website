import Image from "next/image";
import React from "react";

type MedicalCalloutVariant = "note" | "indication" | "safety" | "evidence";

const calloutStyles: Record<MedicalCalloutVariant, string> = {
  note: "border-slate-200 bg-slate-50 text-slate-900",
  indication: "border-teal-200 bg-teal-50 text-teal-950",
  safety: "border-amber-200 bg-amber-50 text-amber-950",
  evidence: "border-blue-200 bg-blue-50 text-blue-950",
};

export function MedicalCallout({
  title,
  variant = "note",
  children,
}: {
  title: string;
  variant?: MedicalCalloutVariant;
  children: React.ReactNode;
}) {
  return (
    <aside className={`not-prose my-8 rounded-lg border p-5 ${calloutStyles[variant]}`}>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide">{title}</p>
      <div className="space-y-3 text-base leading-7">{children}</div>
    </aside>
  );
}

type MetricCard = {
  label: string;
  value: string;
  description: string;
};

export function MetricCards({ items }: { items: MetricCard[] }) {
  return (
    <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">{item.label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-950">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

type EvidenceRow = {
  source: string;
  href: string;
  population: string;
  finding: string;
  takeaway: string;
};

export function EvidenceTable({
  rows,
  labels = {
    source: "Source",
    population: "Population",
    finding: "Finding",
    takeaway: "Clinical takeaway",
  },
}: {
  rows: EvidenceRow[];
  labels?: {
    source: string;
    population: string;
    finding: string;
    takeaway: string;
  };
}) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-stone-50 text-xs uppercase tracking-wide text-slate-600">
            <tr>
              <th className="border-b border-stone-200 px-4 py-3 font-semibold">{labels.source}</th>
              <th className="border-b border-stone-200 px-4 py-3 font-semibold">{labels.population}</th>
              <th className="border-b border-stone-200 px-4 py-3 font-semibold">{labels.finding}</th>
              <th className="border-b border-stone-200 px-4 py-3 font-semibold">{labels.takeaway}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {rows.map((row) => (
              <tr key={row.href} className="align-top">
                <td className="px-4 py-4 font-medium text-teal-700">
                  <a href={row.href} target="_blank" rel="noopener noreferrer" className="underline decoration-teal-300 underline-offset-4">
                    {row.source}
                  </a>
                </td>
                <td className="px-4 py-4 text-slate-700">{row.population}</td>
                <td className="px-4 py-4 text-slate-700">{row.finding}</td>
                <td className="px-4 py-4 text-slate-700">{row.takeaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type ComparisonRow = {
  topic: string;
  oral: string;
  infusion: string;
};

export function ComparisonTable({
  rows,
  labels = {
    topic: "Question",
    oral: "Oral iron",
    infusion: "Iron infusion",
  },
}: {
  rows: ComparisonRow[];
  labels?: {
    topic: string;
    oral: string;
    infusion: string;
  };
}) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-stone-50 text-sm font-semibold text-slate-900">
            <div className="border-b border-stone-200 px-4 py-3">{labels.topic}</div>
            <div className="border-b border-l border-stone-200 px-4 py-3">{labels.oral}</div>
            <div className="border-b border-l border-stone-200 px-4 py-3">{labels.infusion}</div>
          </div>
          {rows.map((row) => (
            <div key={row.topic} className="grid grid-cols-[1fr_1.2fr_1.2fr] text-sm text-slate-700">
              <div className="border-b border-stone-100 px-4 py-4 font-medium text-slate-950">{row.topic}</div>
              <div className="border-b border-l border-stone-100 px-4 py-4">{row.oral}</div>
              <div className="border-b border-l border-stone-100 px-4 py-4">{row.infusion}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type ProcessStep = {
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="not-prose my-8 grid gap-4 sm:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <p className="font-semibold text-slate-950">{step.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

type BarChartItem = {
  label: string;
  value: number;
  detail?: string;
};

export function SimpleBarChart({
  title,
  subtitle,
  max = 100,
  items,
}: {
  title: string;
  subtitle?: string;
  max?: number;
  items: BarChartItem[];
}) {
  return (
    <figure className="not-prose my-8 rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
      <figcaption>
        <p className="text-base font-semibold text-slate-950">{title}</p>
        {subtitle && <p className="mt-1 text-sm leading-6 text-slate-600">{subtitle}</p>}
      </figcaption>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between gap-4 text-sm">
              <span className="font-medium text-slate-800">{item.label}</span>
              <span className="text-slate-600">{item.value}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-stone-100">
              <div
                className="h-full rounded-full bg-teal-700"
                style={{ width: `${Math.max(0, Math.min(100, (item.value / max) * 100))}%` }}
              />
            </div>
            {item.detail && <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>}
          </div>
        ))}
      </div>
    </figure>
  );
}

export function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="not-prose my-10">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="w-full rounded-lg border border-stone-200 bg-stone-50 shadow-sm"
        unoptimized={src.endsWith(".svg")}
      />
      {caption && <figcaption className="mt-3 text-sm leading-6 text-slate-600">{caption}</figcaption>}
    </figure>
  );
}
