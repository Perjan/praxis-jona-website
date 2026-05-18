import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Constants } from "app/Constants";
import { MotionCard, MotionSection } from "app/components/Motion";
import { getAestheticSectionMarkdown, getAestheticSectionTitle, type AestheticSectionKey } from "app/content/aesthetikSource";

type MarkdownNode =
  | { type: "h1" | "h2" | "h3" | "p" | "rule"; text?: string }
  | { type: "list"; items: string[] };

const heroImages: Record<AestheticSectionKey, { src: string; alt: string; objectPositionClass?: string }> = {
  hub: {
    src: "/images/clinic/clinic-philo-2025.jpg",
    alt: "Behandlungsstuhl für ästhetische Medizin in der Praxis Jona in Berlin-Mitte",
    objectPositionClass: "object-[28%_68%]",
  },
  botulinumtoxin: {
    src: "/images/clinic/clinic-newA.jpg",
    alt: "Behandlungsraum der Praxis Jona in Berlin-Mitte",
    objectPositionClass: "object-[22%_50%]",
  },
  prp: {
    src: "/images/clinic/clinic-newA.jpg",
    alt: "Behandlungsraum der Praxis Jona für regenerative Ästhetik und PRP in Berlin-Mitte",
    objectPositionClass: "object-[22%_50%]",
  },
  microneedling: {
    src: "/images/clinic/clinic-newA-new2.jpg",
    alt: "Praxis Jona Behandlungsraum für medizinisches Microneedling in Berlin-Mitte",
    objectPositionClass: "object-[35%_50%]",
  },
  hair: {
    src: "/images/clinic/clinic-hero-2025.jpg",
    alt: "Praxis Jona in Berlin-Mitte für Haartherapie bei Haarausfall",
    objectPositionClass: "object-[30%_50%]",
  },
  skinbooster: {
    src: "/images/clinic/clinic-philo-2025.jpg",
    alt: "Behandlungsstuhl der Praxis Jona für Skinbooster und regenerative Hauttherapien in Berlin-Mitte",
    objectPositionClass: "object-[28%_68%]",
  },
};

const subpages = [
  { title: "Botulinumtoxin-Behandlungen", href: "/botox-behandlung", eyebrow: "Mimik & Linien" },
  { title: "PRP / Eigenbluttherapie", href: "/aesthetik/prp-behandlung", eyebrow: "Regeneration" },
  { title: "Medizinisches Microneedling", href: "/aesthetik/microneedling", eyebrow: "Struktur" },
  { title: "Haartherapie bei Haarausfall", href: "/aesthetik/haarausfall", eyebrow: "Haar & Kopfhaut" },
  { title: "Skinbooster & regenerative Hauttherapien", href: "/aesthetik/polynukleotide", eyebrow: "Skin Quality" },
];

const sectionFacts: Record<Exclude<AestheticSectionKey, "hub" | "botulinumtoxin">, { title: string; value: string; icon: typeof ClockIcon }[]> = {
  prp: [
    { title: "Dauer", value: "45 bis 60 Minuten", icon: ClockIcon },
    { title: "Serie", value: "3–4 Behandlungen", icon: CalendarDaysIcon },
    { title: "Fokus", value: "Hautqualität", icon: SparklesIcon },
  ],
  microneedling: [
    { title: "Dauer", value: "45 bis 60 Minuten", icon: ClockIcon },
    { title: "Sitzungen", value: "3–5 Sitzungen", icon: CalendarDaysIcon },
    { title: "Technologie", value: "Dermapen®", icon: SparklesIcon },
  ],
  hair: [
    { title: "Dauer", value: "45 bis 60 Minuten", icon: ClockIcon },
    { title: "Sitzungen", value: "3–4 Sitzungen", icon: CalendarDaysIcon },
    { title: "Diagnostik", value: "Laboruntersuchungen", icon: SparklesIcon },
  ],
  skinbooster: [
    { title: "Dauer", value: "30 bis 45 Minuten", icon: ClockIcon },
    { title: "Sitzungen", value: "3–4 Sitzungen", icon: CalendarDaysIcon },
    { title: "Fokus", value: "Hautqualität", icon: SparklesIcon },
  ],
};

function hasText(node: MarkdownNode): node is Extract<MarkdownNode, { text?: string }> & { text: string } {
  return "text" in node && typeof node.text === "string";
}

function stripBold(text: string) {
  return text.replace(/^\*\*(.*)\*\*$/, "$1");
}

function parseMarkdown(markdown: string): MarkdownNode[] {
  const nodes: MarkdownNode[] = [];
  const lines = markdown.split("\n");
  let listItems: string[] = [];
  let inCodeBlock = false;

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (!line) {
      flushList();
      continue;
    }

    if (inCodeBlock) {
      nodes.push({ type: "p", text: line });
      continue;
    }

    if (line === "⸻") {
      flushList();
      nodes.push({ type: "rule" });
      continue;
    }

    if (line.startsWith("# ")) {
      flushList();
      nodes.push({ type: "h1", text: line.replace(/^# /, "") });
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      nodes.push({ type: "h2", text: line.replace(/^## /, "") });
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      nodes.push({ type: "h2", text: line.replace(/^### /, "") });
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ") || line.startsWith("✔ ")) {
      listItems.push(line.replace(/^[-*]\s+/, "").replace(/^✔\s+/, ""));
      continue;
    }

    flushList();
    nodes.push({ type: /^\*\*.*\*\*$/.test(line) ? "h3" : "p", text: stripBold(line) });
  }

  flushList();
  return nodes;
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function CtaButtons() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={Constants.appointmentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker"
      >
        Termin buchen
      </Link>
      <Link
        href="/aesthetik/preise"
        className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-6 py-3 text-base font-serif font-medium text-primary transition hover:border-primary/40 hover:bg-stone-50"
      >
        Preise ansehen
      </Link>
    </div>
  );
}

function HeroImage({ sectionKey }: { sectionKey: AestheticSectionKey }) {
  const image = heroImages[sectionKey];

  return (
    <div className="relative overflow-hidden rounded-xl bg-lightBeige shadow-xl ring-1 ring-primary/10">
      <Image
        src={image.src}
        alt={image.alt}
        width={900}
        height={720}
        priority
        sizes="(min-width: 1024px) 36vw, 92vw"
        className={`h-72 w-full object-cover sm:h-96 lg:h-[30rem] ${image.objectPositionClass ?? "object-center"}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/20" />
    </div>
  );
}

function FactStrip({ sectionKey }: { sectionKey: AestheticSectionKey }) {
  if (sectionKey === "hub" || sectionKey === "botulinumtoxin") {
    return null;
  }

  return (
    <MotionSection className="relative z-20 -mt-[50px] px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20 ring-1 ring-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {sectionFacts[sectionKey].map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.title} className="flex min-h-[112px] items-start gap-4 p-5 sm:p-6 lg:min-h-[132px] lg:p-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-[52px] sm:w-[52px]">
                    <Icon className="h-6 w-6 stroke-[2.2] text-white sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-sans text-base font-semibold leading-tight text-white sm:text-lg">{fact.title}</h2>
                    <p className="mt-2 text-base leading-7 text-white/75 sm:text-lg">{fact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function RenderNodes({ nodes, skipFirstHeading = false }: { nodes: MarkdownNode[]; skipFirstHeading?: boolean }) {
  let firstHeadingSkipped = false;

  return (
    <div className="space-y-7">
      {nodes.map((node, index) => {
        if (skipFirstHeading && node.type === "h1" && !firstHeadingSkipped) {
          firstHeadingSkipped = true;
          return null;
        }

        if (node.type === "h1") {
          return <h2 key={index} className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{node.text}</h2>;
        }

        if (node.type === "h2") {
          return <h2 key={index} className="pt-8 font-serif text-3xl font-semibold text-primary">{node.text}</h2>;
        }

        if (node.type === "h3") {
          return <h3 key={index} className="pt-3 font-serif text-2xl font-semibold text-primary">{node.text}</h3>;
        }

        if (node.type === "p") {
          return <p key={index} className="text-lg leading-8 text-primaryLighter">{node.text}</p>;
        }

        if (node.type === "list") {
          return (
            <ul key={index} className="space-y-3 text-lg leading-8 text-primaryLighter">
              {node.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return <div key={index} className="h-px bg-primary/10" />;
      })}
    </div>
  );
}

function renderCompactNodes(nodes: MarkdownNode[]) {
  return nodes.map((node, index) => {
    if (node.type === "p") {
      return <p key={index} className="leading-7 text-primaryLighter">{node.text}</p>;
    }

    if (node.type === "list") {
      return (
        <ul key={index} className="space-y-2 text-primaryLighter">
          {node.items.map((item) => (
            <li key={item} className="flex gap-3 leading-7">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (node.type === "rule") {
      return <div key={index} className="h-px bg-primary/10" />;
    }

    if (node.type === "h3") {
      return <h3 key={index} className="pt-2 font-serif text-xl font-semibold text-primary">{node.text}</h3>;
    }

    if (node.type === "h2") {
      return <h2 key={index} className="pt-2 font-serif text-2xl font-semibold text-primary">{node.text}</h2>;
    }

    return null;
  });
}

function takeUntilHeading(nodes: MarkdownNode[], start: number) {
  const children: MarkdownNode[] = [];
  let cursor = start;

  while (cursor < nodes.length && nodes[cursor].type !== "h2" && nodes[cursor].type !== "h3") {
    if (nodes[cursor].type !== "rule") {
      children.push(nodes[cursor]);
    }
    cursor += 1;
  }

  return { children, cursor };
}

function StructuredBody({ nodes }: { nodes: MarkdownNode[] }) {
  const sections: JSX.Element[] = [];
  let index = 0;

  while (index < nodes.length) {
    const node = nodes[index];

    if (node.type === "rule") {
      index += 1;
      continue;
    }

    if (node.type === "h2" && node.text && /^(Häufige Fragen|Frequently asked questions)/.test(node.text)) {
      const faqs: { question: string; answer: MarkdownNode[] }[] = [];
      index += 1;

      while (index < nodes.length) {
        const question = nodes[index];

        if (question.type === "h2") {
          break;
        }

        if (question.type === "h3" && question.text) {
          const result = takeUntilHeading(nodes, index + 1);
          faqs.push({ question: question.text, answer: result.children });
          index = result.cursor;
          continue;
        }

        index += 1;
      }

      sections.push(
        <MotionSection key={`faq-${sections.length}`} className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{faq.question}</summary>
                <div className="mt-4 space-y-3">{renderCompactNodes(faq.answer)}</div>
              </details>
            ))}
          </div>
        </MotionSection>,
      );
      continue;
    }

    if (node.type === "h2") {
      sections.push(
        <MotionSection key={`heading-${sections.length}`} className="mx-auto max-w-5xl px-4 pt-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
        </MotionSection>,
      );
      index += 1;
      continue;
    }

    if (node.type === "h3" && node.text) {
      const nextContentNode = nodes.slice(index + 1).find((item) => item.type !== "rule");

      if (nextContentNode?.type === "h3") {
        sections.push(
          <MotionSection key={`heading-${sections.length}`} className="mx-auto max-w-5xl px-4 pt-14 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
          </MotionSection>,
        );
        index += 1;
        continue;
      }

      const result = takeUntilHeading(nodes, index + 1);
      sections.push(
        <MotionCard key={`card-${sections.length}`} className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-primary">{node.text}</h2>
          <div className="mt-5 space-y-3">{renderCompactNodes(result.children)}</div>
        </MotionCard>,
      );
      index = result.cursor;
      continue;
    }

    const result = takeUntilHeading(nodes, index);

    if (result.children.length > 0) {
      sections.push(
        <MotionSection key={`intro-${sections.length}`} className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-5 text-lg leading-8 text-primaryLighter">{renderCompactNodes(result.children)}</div>
        </MotionSection>,
      );
    }

    index = result.cursor;
  }

  const groupedSections: JSX.Element[] = [];
  let pendingCards: JSX.Element[] = [];

  const flushCards = () => {
    if (pendingCards.length > 0) {
      groupedSections.push(
        <MotionSection key={`grid-${groupedSections.length}`} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">{pendingCards}</div>
        </MotionSection>,
      );
      pendingCards = [];
    }
  };

  sections.forEach((section) => {
    if (section.key?.toString().startsWith("card-")) {
      pendingCards.push(section);
      return;
    }

    flushCards();
    groupedSections.push(section);
  });

  flushCards();

  return <>{groupedSections}</>;
}

export function AestheticMarkdownPage({ sectionKey, canonical }: { sectionKey: AestheticSectionKey; canonical: string }) {
  const markdown = getAestheticSectionMarkdown(sectionKey);
  const nodes = parseMarkdown(markdown);
  const title = getAestheticSectionTitle(sectionKey);
  const heroNodes = nodes.filter((node) => node.type !== "h1").slice(0, 2);
  const bodyNodes = nodes.filter((node) => node.type !== "h1").slice(2);
  const descriptionNode = nodes.filter(hasText).find((node) => node.type === "h3" || node.type === "p");
  const description = descriptionNode?.text ?? title;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: title, item: `${Constants.baseUrl}${canonical}` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: title,
    description,
    provider: { "@id": `${Constants.baseUrl}/#organization`, name: "Praxis Jona" },
    areaServed: "Berlin-Mitte",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">Ästhetik</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{title}</h1>
            <div className="mt-6">
              <RenderNodes nodes={heroNodes} />
            </div>
            <CtaButtons />
          </div>
          <HeroImage sectionKey={sectionKey} />
        </MotionSection>

        <FactStrip sectionKey={sectionKey} />
        <StructuredBody nodes={bodyNodes} />

        <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex max-w-3xl items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <SparklesIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-primary">Weitere ästhetische Behandlungen</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {subpages
                .filter((item) => item.href !== canonical)
                .map((item, index) => (
                  <Link key={item.href} href={item.href} className="block h-full">
                    <MotionCard delay={Math.min(index * 0.04, 0.2)} className="h-full rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-lightBeige text-primary">
                        <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryLighter">{item.eyebrow}</p>
                      <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
                      <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">Mehr erfahren</span>
                    </MotionCard>
                  </Link>
                ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}

export function AestheticMarkdownHub() {
  const markdown = getAestheticSectionMarkdown("hub");
  const nodes = parseMarkdown(markdown);
  const subpageIndex = nodes.findIndex((node) => node.type === "h2" && node.text === "Subpages");
  const introNodes = subpageIndex >= 0 ? nodes.slice(0, subpageIndex) : nodes;

  return (
    <div className="overflow-hidden bg-white">
      <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">Haut, Mimik & Regeneration</p>
          <RenderNodes nodes={introNodes} />
          <CtaButtons />
        </div>
        <HeroImage sectionKey="hub" />
      </MotionSection>

      <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-semibold text-primary">Ästhetische Behandlungen</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {subpages.map((item, index) => (
              <Link key={item.href} href={item.href} className="block h-full">
                <MotionCard delay={Math.min(index * 0.04, 0.2)} className="h-full rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryLighter">{item.eyebrow}</p>
                  <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
                  <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">Mehr erfahren</span>
                </MotionCard>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
