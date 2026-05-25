import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon, ClockIcon, CreditCardIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Constants } from "app/Constants";
import AppointmentBookingButton from "app/components/AppointmentBookingButton";
import { MotionCard, MotionSection } from "app/components/Motion";
import TreatmentPricingBlock from "app/components/pricing/TreatmentPricingBlock";
import { pricingSections } from "app/components/pricing/pricingData";
import { getAestheticSectionMarkdown, getAestheticSectionTitle, type AestheticSectionKey } from "app/content/aesthetikSource";

type MarkdownNode =
  | { type: "h1" | "h2" | "h3" | "p" | "rule"; text?: string }
  | { type: "list"; items: string[] };

type AestheticDetailPage = {
  sectionKey: AestheticSectionKey;
  slug: string;
  title: string;
  href: string;
};

const detailPages: Partial<Record<AestheticSectionKey, AestheticDetailPage[]>> = {
  prp: [
    { sectionKey: "prp", slug: "prp-gesicht", title: "PRP Gesicht", href: "/aesthetik/prp-behandlung/prp-gesicht" },
    { sectionKey: "prp", slug: "prp-augenregion-bei-dunklen-augenringen", title: "PRP Augenregion bei dunklen Augenringen", href: "/aesthetik/prp-behandlung/prp-augenregion-bei-dunklen-augenringen" },
    { sectionKey: "prp", slug: "prp-gesicht-hals-und-dekollete", title: "PRP Gesicht, Hals & Dekolleté", href: "/aesthetik/prp-behandlung/prp-gesicht-hals-und-dekollete" },
    { sectionKey: "prp", slug: "vampire-lifting-prp-kombiniert-mit-medizinischem-microneedling", title: "Vampire Lifting / PRP kombiniert mit medizinischem Microneedling", href: "/aesthetik/prp-behandlung/vampire-lifting-prp-kombiniert-mit-medizinischem-microneedling" },
  ],
  microneedling: [
    { sectionKey: "microneedling", slug: "microneedling-gesicht", title: "Microneedling Gesicht", href: "/aesthetik/microneedling/microneedling-gesicht" },
    { sectionKey: "microneedling", slug: "microneedling-gesicht-hals", title: "Microneedling Gesicht + Hals", href: "/aesthetik/microneedling/microneedling-gesicht-hals" },
    { sectionKey: "microneedling", slug: "microneedling-gesicht-hals-dekollete", title: "Microneedling Gesicht + Hals + Dekolleté", href: "/aesthetik/microneedling/microneedling-gesicht-hals-dekollete" },
    { sectionKey: "microneedling", slug: "microneedling-gesicht-exosome", title: "Microneedling Gesicht Exosome", href: "/aesthetik/microneedling/microneedling-gesicht-exosome" },
  ],
};

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
  { title: "Haartherapie bei Haarausfall", href: "/leistungen/haarausfall-berlin-mitte", eyebrow: "Haar & Kopfhaut" },
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

const prpCommonSectionTitles = [
  "Wie läuft die Behandlung ab?",
  "Wie oft sind PRP- oder Vampire-Lifting-Behandlungen sinnvoll?",
  "Was sollte ich nach der Behandlung beachten?",
  "Wann sind Ergebnisse sichtbar?",
  "Individuelle regenerative Behandlungskonzepte",
];

const microneedlingCommonSectionTitles = [
  "Wie läuft die Behandlung ab?",
  "Wie viele Sitzungen sind sinnvoll?",
  "Optionale regenerative Wirkstoffkombinationen",
  "Wann können zusätzliche regenerative Wirkstoffe sinnvoll sein?",
  "Was sollte ich nach der Behandlung beachten?",
  "Wann sind Ergebnisse sichtbar?",
];

const eyebrowClassName = "text-sm font-semibold uppercase tracking-[0.22em] text-primary/70";

function hasText(node: MarkdownNode): node is Extract<MarkdownNode, { text?: string }> & { text: string } {
  return "text" in node && typeof node.text === "string";
}

function stripBold(text: string) {
  return text.replace(/^\*\*(.*)\*\*$/, "$1");
}

function sectionId(text: string | undefined) {
  if (!text) {
    return undefined;
  }

  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "und")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAestheticDetailPages(sectionKey: AestheticSectionKey) {
  return detailPages[sectionKey] ?? [];
}

export function getAestheticDetailPage(sectionKey: AestheticSectionKey, slug: string) {
  return getAestheticDetailPages(sectionKey).find((page) => page.slug === slug);
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

const priceAnchorBySection: Partial<Record<AestheticSectionKey, string>> = {
  botulinumtoxin: "botox",
  prp: "prp",
  microneedling: "microneedling",
  hair: "haarausfall",
  skinbooster: "skinbooster",
};

function CtaButtons({ sectionKey }: { sectionKey: AestheticSectionKey }) {
  const priceAnchor = priceAnchorBySection[sectionKey];
  const priceHref = priceAnchor ? `/aesthetik/preise#${priceAnchor}` : "/aesthetik/preise";

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <AppointmentBookingButton
        locale="de"
        className="inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker"
      >
        Termin buchen
      </AppointmentBookingButton>
      <Link
        href={priceHref}
        className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-6 py-3 text-base font-serif font-medium text-primary transition hover:border-primary/40 hover:bg-stone-50"
      >
        Preise ansehen
      </Link>
    </div>
  );
}

function HeroImage({ sectionKey, className = "" }: { sectionKey: AestheticSectionKey; className?: string }) {
  const image = heroImages[sectionKey];

  return (
    <div className={`relative overflow-hidden rounded-xl bg-lightBeige shadow-xl ring-1 ring-primary/10 ${className}`}>
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

function ParagraphNodes({ nodes }: { nodes: MarkdownNode[] }) {
  return <div className="space-y-5 text-lg leading-8 text-primaryLighter">{renderCompactNodes(nodes)}</div>;
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

function takeUntilRule(nodes: MarkdownNode[], start: number) {
  const children: MarkdownNode[] = [];
  let cursor = start;

  while (cursor < nodes.length && nodes[cursor].type !== "rule") {
    children.push(nodes[cursor]);
    cursor += 1;
  }

  if (cursor < nodes.length && nodes[cursor].type === "rule") {
    cursor += 1;
  }

  return { children, cursor };
}

function getDetailHrefByTitle(sectionKey: AestheticSectionKey) {
  return Object.fromEntries(getAestheticDetailPages(sectionKey).map((page) => [page.title, page.href]));
}

function extractTitledSection(nodes: MarkdownNode[], title: string) {
  const index = nodes.findIndex((node) => node.type === "h3" && node.text === title);

  if (index < 0) {
    return [];
  }

  return takeUntilHeading(nodes, index + 1).children;
}

function extractDetailNodes(nodes: MarkdownNode[], title: string) {
  const index = nodes.findIndex((node) => node.type === "h3" && node.text === title);

  if (index < 0) {
    return [];
  }

  return takeUntilRule(nodes, index + 1).children;
}

function extractSections(nodes: MarkdownNode[], titles: string[]) {
  return titles.flatMap((title) => {
    const section = extractTitledSection(nodes, title);

    return section.length > 0 ? [{ type: "h3", text: title } as MarkdownNode, ...section] : [];
  });
}

function pickListItems(nodes: MarkdownNode[], allowedItems: string[]) {
  return nodes.map((node) => {
    if (node.type !== "list") {
      return node;
    }

    return { ...node, items: node.items.filter((item) => allowedItems.includes(item)) };
  }).filter((node) => node.type !== "list" || node.items.length > 0);
}

function getMicroneedlingDetailNodes(nodes: MarkdownNode[], slug: string) {
  const introNodes = nodes.filter((node, index) => {
    if (index === 0 || node.type === "h1") {
      return false;
    }

    return index < nodes.findIndex((item) => item.type === "h3" && item.text === "Was ist medizinisches Microneedling?");
  });
  const basicSections = extractSections(nodes, [
    "Was ist medizinisches Microneedling?",
    "Für welche Hautprobleme kann Microneedling sinnvoll sein?",
  ]);

  if (slug === "microneedling-gesicht-exosome") {
    return [
      ...introNodes,
      ...extractSections(nodes, [
        "Was sind Exosome?",
        "Welche Exosome verwenden wir?",
        "Wann können Exosome sinnvoll sein?",
        "Können Exosome mit anderen Behandlungen kombiniert werden?",
      ]),
    ];
  }

  const regionItemsBySlug: Record<string, string[]> = {
    "microneedling-gesicht": ["Gesicht"],
    "microneedling-gesicht-hals": ["Gesicht", "Hals"],
    "microneedling-gesicht-hals-dekollete": ["Gesicht", "Hals", "Dekolleté"],
  };
  const regionNodes = pickListItems(
    extractSections(nodes, ["Welche Regionen können behandelt werden?"]),
    regionItemsBySlug[slug] ?? [],
  );

  return [...introNodes, ...basicSections, ...regionNodes];
}

function getDetailNodes(sectionKey: AestheticSectionKey, nodes: MarkdownNode[], detailPage: AestheticDetailPage) {
  if (sectionKey === "microneedling") {
    return getMicroneedlingDetailNodes(nodes, detailPage.slug);
  }

  return extractDetailNodes(nodes, detailPage.title);
}

function detailSummary(sectionKey: AestheticSectionKey, nodes: MarkdownNode[], detailPage: AestheticDetailPage) {
  for (const node of getDetailNodes(sectionKey, nodes, detailPage)) {
    if (hasText(node)) {
      return node.text;
    }
  }

  return "";
}

function extractFaqs(nodes: MarkdownNode[]) {
  const faqIndex = nodes.findIndex((node) => node.type === "h2" && node.text && /^Häufige Fragen/.test(node.text));

  if (faqIndex < 0) {
    return { title: "Häufige Fragen", items: [] as { question: string; answer: MarkdownNode[] }[] };
  }

  const faqNode = nodes[faqIndex];
  const title = hasText(faqNode) ? faqNode.text : "Häufige Fragen";
  const items: { question: string; answer: MarkdownNode[] }[] = [];
  let index = faqIndex + 1;

  while (index < nodes.length && nodes[index].type !== "h2") {
    const node = nodes[index];

    if (node.type === "h3" && node.text) {
      const answer = takeUntilHeading(nodes, index + 1);
      items.push({ question: node.text, answer: answer.children });
      index = answer.cursor;
      continue;
    }

    index += 1;
  }

  return { title, items };
}

function formatDetailPrice(sectionKey: AestheticSectionKey, slug: string) {
  const section = sectionKey === "microneedling" ? pricingSections.microneedling : pricingSections.prp;
  const row = section.rows.find((item) => item.detailHref?.de?.endsWith(`/${slug}`));
  const amount = row?.price?.amount;

  return amount ? `ab ${amount} €` : sectionKey === "microneedling" ? "ab 249 €" : "ab 199 €";
}

function AestheticDetailFacts({ sectionKey, slug }: { sectionKey: AestheticSectionKey; slug: string }) {
  const facts =
    sectionKey === "microneedling"
      ? [
          {
            title: "Dauer",
            icon: ClockIcon,
            body: (
              <>
                Die Behandlung dauert in der Regel <strong>45 bis 60 Minuten</strong>.
              </>
            ),
          },
          {
            title: "Sitzungen",
            icon: SparklesIcon,
            body: (
              <>
                Meist <strong>3–5 Sitzungen</strong> im Abstand von etwa 4–6 Wochen.
              </>
            ),
          },
          {
            title: "Preis",
            icon: CreditCardIcon,
            body: <strong>{formatDetailPrice(sectionKey, slug)}</strong>,
          },
        ]
      : [
          {
            title: "Dauer",
            icon: ClockIcon,
            body: (
              <>
                Die Behandlung dauert in der Regel <strong>45 bis 60 Minuten</strong>.
              </>
            ),
          },
          {
            title: "Serie",
            icon: SparklesIcon,
            body: (
              <>
                Häufig zunächst <strong>3–4 Behandlungen</strong> im Abstand von etwa 3–4 Wochen.
              </>
            ),
          },
          {
            title: "Preis",
            icon: CreditCardIcon,
            body: <strong>{formatDetailPrice(sectionKey, slug)}</strong>,
          },
        ];

  return (
    <MotionSection className="relative z-20 -mt-[50px] px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20 ring-1 ring-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.title} className="flex min-h-[112px] items-start gap-4 p-5 sm:p-6 lg:min-h-[132px] lg:p-7">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-16 sm:w-16">
                    <Icon className="h-8 w-8 stroke-[2.2] text-white sm:h-9 sm:w-9" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-sans text-xl font-semibold leading-tight text-white sm:text-2xl">{fact.title}</h2>
                    <p className="mt-2 text-base leading-7 text-white/70 sm:text-lg [&_strong]:font-semibold [&_strong]:text-white/70">{fact.body}</p>
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

function AestheticCommonSections({ sectionKey, nodes }: { sectionKey: AestheticSectionKey; nodes: MarkdownNode[] }) {
  const commonSectionTitles = sectionKey === "microneedling" ? microneedlingCommonSectionTitles : prpCommonSectionTitles;
  const sections = commonSectionTitles
    .map((title) => ({ title, nodes: extractTitledSection(nodes, title) }))
    .filter((section) => section.nodes.length > 0);

  return (
    <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <MotionCard key={section.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
            <h2 className="font-serif text-2xl font-semibold text-primary">{section.title}</h2>
            <div className="mt-5">
              <ParagraphNodes nodes={section.nodes} />
            </div>
          </MotionCard>
        ))}
      </div>
    </MotionSection>
  );
}

function AestheticFaqSection({ nodes }: { nodes: MarkdownNode[] }) {
  const faq = extractFaqs(nodes);

  if (faq.items.length === 0) {
    return null;
  }

  return (
    <MotionSection className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="font-serif text-3xl font-semibold text-primary">{faq.title}</h2>
      <div className="mt-8 space-y-4">
        {faq.items.map((item) => (
          <details key={item.question} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{item.question}</summary>
            <div className="mt-4">
              <ParagraphNodes nodes={item.answer} />
            </div>
          </details>
        ))}
      </div>
    </MotionSection>
  );
}

function StructuredBody({ nodes, sectionKey }: { nodes: MarkdownNode[]; sectionKey: AestheticSectionKey }) {
  const sections: JSX.Element[] = [];
  const detailHrefByTitle = sectionKey === "prp" ? getDetailHrefByTitle(sectionKey) : {};
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
              <details id={sectionId(faq.question)} key={faq.question} className="scroll-mt-28 rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
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
        <MotionSection id={sectionId(node.text)} key={`heading-${sections.length}`} className="mx-auto max-w-5xl scroll-mt-28 px-4 pt-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
        </MotionSection>,
      );
      index += 1;
      continue;
    }

    if (node.type === "h3" && node.text) {
      const detailHref = detailHrefByTitle[node.text];

      if (detailHref) {
        const result = takeUntilRule(nodes, index + 1);
        const card = (
          <MotionCard className="h-full rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <h2 className="font-serif text-2xl font-semibold text-primary">{node.text}</h2>
            <div className="mt-5 space-y-3">{renderCompactNodes(result.children)}</div>
            <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">Mehr erfahren</span>
          </MotionCard>
        );

        sections.push(
          <Link id={sectionId(node.text)} key={`card-${sections.length}`} href={detailHref} className="block h-full scroll-mt-28">
            {card}
          </Link>,
        );
        index = result.cursor;
        continue;
      }

      const nextContentNode = nodes.slice(index + 1).find((item) => item.type !== "rule");

      if (nextContentNode?.type === "h3") {
        sections.push(
          <MotionSection id={sectionId(node.text)} key={`heading-${sections.length}`} className="mx-auto max-w-5xl scroll-mt-28 px-4 pt-14 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
          </MotionSection>,
        );
        index += 1;
        continue;
      }

      const result = takeUntilHeading(nodes, index + 1);
      sections.push(
        <MotionCard id={sectionId(node.text)} key={`card-${sections.length}`} className="scroll-mt-28 rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
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
    if (section.key?.toString().includes("card-")) {
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
  const mobileHeroLeadNodes = heroNodes.slice(0, 1);
  const mobileHeroBodyNodes = heroNodes.slice(1);
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
            <div className="mt-6 hidden lg:block">
              <RenderNodes nodes={heroNodes} />
            </div>
            <div className="mt-6 lg:hidden">
              <RenderNodes nodes={mobileHeroLeadNodes} />
              <HeroImage sectionKey={sectionKey} className="mt-8" />
              <div className="mt-8">
                <RenderNodes nodes={mobileHeroBodyNodes} />
              </div>
            </div>
            <CtaButtons sectionKey={sectionKey} />
          </div>
          <HeroImage sectionKey={sectionKey} className="hidden lg:block" />
        </MotionSection>

        <FactStrip sectionKey={sectionKey} />
        <TreatmentPricingBlock canonical={canonical} locale="de" />
        <div id="behandlungsdetails" className="scroll-mt-28">
          <StructuredBody nodes={bodyNodes} sectionKey={sectionKey} />
        </div>

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

export function AestheticMarkdownDetailPage({ sectionKey, slug, parentCanonical }: { sectionKey: AestheticSectionKey; slug: string; parentCanonical: string }) {
  const detailPage = getAestheticDetailPage(sectionKey, slug);

  if (!detailPage) {
    return null;
  }

  const markdown = getAestheticSectionMarkdown(sectionKey);
  const nodes = parseMarkdown(markdown);
  const parentTitle = getAestheticSectionTitle(sectionKey);
  const detailNodes = getDetailNodes(sectionKey, nodes, detailPage);
  const descriptionNode = detailNodes.find(hasText);
  const description = descriptionNode?.text ?? `${detailPage.title} in der Praxis Jona Berlin-Mitte.`;
  const siblings = getAestheticDetailPages(sectionKey).filter((page) => page.slug !== slug);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: parentTitle, item: `${Constants.baseUrl}${parentCanonical}` },
      { "@type": "ListItem", position: 3, name: detailPage.title, item: `${Constants.baseUrl}${detailPage.href}` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: detailPage.title,
    description,
    provider: { "@id": `${Constants.baseUrl}/#organization`, name: "Praxis Jona" },
    areaServed: "Berlin-Mitte",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-24">
          <div>
            <p className={eyebrowClassName}>{parentTitle}</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{detailPage.title}</h1>
            <div className="mt-8 lg:hidden">
              <HeroImage sectionKey={sectionKey} />
            </div>
            <div className="mt-6">
              <ParagraphNodes nodes={detailNodes} />
            </div>
            <CtaButtons sectionKey={sectionKey} />
          </div>
          <div className="hidden lg:block">
            <HeroImage sectionKey={sectionKey} />
          </div>
        </MotionSection>

        <AestheticDetailFacts sectionKey={sectionKey} slug={slug} />
        <AestheticCommonSections sectionKey={sectionKey} nodes={nodes} />
        <AestheticFaqSection nodes={nodes} />

        <MotionSection className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-lightBeige p-8">
            <h2 className="font-serif text-3xl font-semibold text-primary">
              {sectionKey === "microneedling" ? "Weitere Microneedling-Themen" : "Weitere PRP-Behandlungen"}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {siblings.map((item, index) => (
                <Link key={item.href} href={item.href} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10 transition hover:shadow-md">
                  <MotionCard delay={Math.min(index * 0.04, 0.2)} className="h-full">
                    <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-primaryLighter">{detailSummary(sectionKey, nodes, item)}</p>
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
  const mobileLeadNodes = introNodes.slice(0, 2);
  const mobileBodyNodes = introNodes.slice(2);

  return (
    <div className="overflow-hidden bg-white">
      <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">Haut, Mimik & Regeneration</p>
          <div className="hidden lg:block">
            <RenderNodes nodes={introNodes} />
          </div>
          <div className="lg:hidden">
            <RenderNodes nodes={mobileLeadNodes} />
            <HeroImage sectionKey="hub" className="mt-8" />
            <div className="mt-8">
              <RenderNodes nodes={mobileBodyNodes} />
            </div>
          </div>
          <CtaButtons sectionKey="hub" />
        </div>
        <HeroImage sectionKey="hub" className="hidden lg:block" />
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
