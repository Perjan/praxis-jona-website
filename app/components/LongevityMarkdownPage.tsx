import Image from "next/image";
import Link from "next/link";
import {
  BeakerIcon,
  CalendarDaysIcon,
  CurrencyEuroIcon,
  HeartIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Constants, type AppointmentBookingUrls } from "app/Constants";
import { MotionCard, MotionSection } from "app/components/Motion";
import {
  getLongevitySectionMarkdown,
  getLongevitySectionTitle,
  type LongevityLocale,
  type LongevitySectionKey,
} from "app/content/longevitySource";

type MarkdownNode =
  | { type: "h1" | "h2" | "h3" | "p" | "rule"; text?: string }
  | { type: "list"; items: string[] };

const heroImages: Record<LongevitySectionKey, { src: string; alt: Record<LongevityLocale, string>; objectPositionClass?: string }> = {
  hub: {
    src: "/images/clinic/clinic-newA.jpg",
    alt: {
      de: "Ruhiger Behandlungs- und Beratungsraum der Praxis Jona für Prävention und Longevity in Berlin-Mitte",
      en: "Calm consultation and treatment room at Praxis Jona for prevention and longevity in Berlin-Mitte",
    },
    objectPositionClass: "object-[18%_55%] lg:object-[22%_50%]",
  },
  micronutrients: {
    src: "/images/leistungen/lab.png",
    alt: {
      de: "Labordiagnostik für Mikronährstoffanalyse in der Praxis Jona",
      en: "Labor diagnostics for micronutrient analysis at Praxis Jona",
    },
    objectPositionClass: "object-center",
  },
  ironInfusion: {
    src: "/images/leistungen/infusionTherapy.png",
    alt: {
      de: "Infusionstherapie bei Eisenmangel in der Praxis Jona",
      en: "Infusion therapy for iron deficiency at Praxis Jona",
    },
    objectPositionClass: "object-center",
  },
  vitaminInfusion: {
    src: "/images/leistungen/syringe.png",
    alt: {
      de: "Vitamininfusionen und Mikronährstoffinfusionen in der Praxis Jona",
      en: "Vitamin infusions and micronutrient infusions at Praxis Jona",
    },
    objectPositionClass: "object-center",
  },
  weightLoss: {
    src: "/images/leistungen/glp1-syringe.png",
    alt: {
      de: "Medizinische Gewichtsreduktion und GLP-1-Therapie in der Praxis Jona",
      en: "Medical weight loss and GLP-1 therapy at Praxis Jona",
    },
    objectPositionClass: "object-center",
  },
};

const detailConfig: Record<
  Exclude<LongevitySectionKey, "hub">,
  {
    de: { canonical: string; alternate: string; eyebrow: string; secondaryCta: string; secondaryHref: string };
    en: { canonical: string; alternate: string; eyebrow: string; secondaryCta: string; secondaryHref: string };
    facts: Record<LongevityLocale, { title: string; value: string; icon: typeof BeakerIcon }[]>;
  }
> = {
  micronutrients: {
    de: {
      canonical: "/leistungen/mikronahrstoffanalyse",
      alternate: "/en/services/micronutrient-analysis",
      eyebrow: "Mikronährstoffe & Labordiagnostik",
      secondaryCta: "Health / Longevity",
      secondaryHref: "/praevention-longevity",
    },
    en: {
      canonical: "/en/services/micronutrient-analysis",
      alternate: "/leistungen/mikronahrstoffanalyse",
      eyebrow: "Micronutrients & lab diagnostics",
      secondaryCta: "Health / Longevity",
      secondaryHref: "/en/prevention-longevity",
    },
    facts: {
      de: [
        { title: "Fokus", value: "Müdigkeit, Erschöpfung, Haarausfall", icon: BeakerIcon },
        { title: "Grundlage", value: "Anamnese, Ernährung, Laborwerte", icon: ShieldCheckIcon },
        { title: "Kosten", value: "Beratung ab 61,20 €", icon: CurrencyEuroIcon },
      ],
      en: [
        { title: "Focus", value: "fatigue, exhaustion, hair loss", icon: BeakerIcon },
        { title: "Basis", value: "history, nutrition, lab values", icon: ShieldCheckIcon },
        { title: "Cost", value: "consultation from €61.20", icon: CurrencyEuroIcon },
      ],
    },
  },
  ironInfusion: {
    de: {
      canonical: "/leistungen/eiseninfusion-kosten",
      alternate: "/en/services/iron-infusion-costs",
      eyebrow: "Eisenmangel & Infusion",
      secondaryCta: "Infusionstherapie",
      secondaryHref: "/leistungen/infusionstherapie",
    },
    en: {
      canonical: "/en/services/iron-infusion-costs",
      alternate: "/leistungen/eiseninfusion-kosten",
      eyebrow: "Iron deficiency & infusion",
      secondaryCta: "Infusion therapy",
      secondaryHref: "/en/services/infusion-therapy",
    },
    facts: {
      de: [
        { title: "Fokus", value: "nachgewiesener Eisenmangel", icon: BeakerIcon },
        { title: "Dauer", value: "meist 30 bis 45 Minuten", icon: CalendarDaysIcon },
        { title: "Kosten", value: "ab 150,95 €", icon: CurrencyEuroIcon },
      ],
      en: [
        { title: "Focus", value: "documented iron deficiency", icon: BeakerIcon },
        { title: "Duration", value: "usually 30 to 45 minutes", icon: CalendarDaysIcon },
        { title: "Cost", value: "from €150.95", icon: CurrencyEuroIcon },
      ],
    },
  },
  vitaminInfusion: {
    de: {
      canonical: "/leistungen/infusionstherapie",
      alternate: "/en/services/infusion-therapy",
      eyebrow: "Vitamininfusionen & Regeneration",
      secondaryCta: "Mikronährstoffanalyse",
      secondaryHref: "/leistungen/mikronahrstoffanalyse",
    },
    en: {
      canonical: "/en/services/infusion-therapy",
      alternate: "/leistungen/infusionstherapie",
      eyebrow: "Vitamin infusions & regeneration",
      secondaryCta: "Micronutrient analysis",
      secondaryHref: "/en/services/micronutrient-analysis",
    },
    facts: {
      de: [
        { title: "Fokus", value: "Energie, Immunsystem, Regeneration", icon: SparklesIcon },
        { title: "Dauer", value: "meist 30 bis 60 Minuten", icon: CalendarDaysIcon },
        { title: "Grundlage", value: "ärztliche Einschätzung", icon: ShieldCheckIcon },
      ],
      en: [
        { title: "Focus", value: "energy, immune system, regeneration", icon: SparklesIcon },
        { title: "Duration", value: "usually 30 to 60 minutes", icon: CalendarDaysIcon },
        { title: "Basis", value: "physician assessment", icon: ShieldCheckIcon },
      ],
    },
  },
  weightLoss: {
    de: {
      canonical: "/leistungen/abnehmspritze",
      alternate: "/en/services/weight-loss-injection",
      eyebrow: "Medizinische Gewichtsreduktion",
      secondaryCta: "Ernährungsberatung",
      secondaryHref: "/leistungen/ernaehrungsmedizin",
    },
    en: {
      canonical: "/en/services/weight-loss-injection",
      alternate: "/leistungen/abnehmspritze",
      eyebrow: "Medical weight loss",
      secondaryCta: "Nutrition counseling",
      secondaryHref: "/en/services/nutritional-medicine",
    },
    facts: {
      de: [
        { title: "Fokus", value: "Stoffwechsel, Essverhalten, Lebensstil", icon: ScaleIcon },
        { title: "Therapie", value: "GLP-1 bei passender Indikation", icon: HeartIcon },
        { title: "Begleitung", value: "quartalsweise oder monatlich", icon: CalendarDaysIcon },
      ],
      en: [
        { title: "Focus", value: "metabolism, eating behavior, lifestyle", icon: ScaleIcon },
        { title: "Therapy", value: "GLP-1 when indicated", icon: HeartIcon },
        { title: "Follow-up", value: "quarterly or monthly", icon: CalendarDaysIcon },
      ],
    },
  },
};

const bookingUrlsBySection: Partial<Record<LongevitySectionKey, AppointmentBookingUrls>> = {
  micronutrients: Constants.appointmentUrlsByService.micronutrients,
  ironInfusion: Constants.appointmentUrlsByService.ironInfusion,
  weightLoss: Constants.appointmentUrlsByService.weightLossInjection,
};

const hubSubpages: Record<LongevityLocale, { title: string; href?: string; eyebrow: string; description: string }[]> = {
  de: [
    { title: "Mikronährstoffberatung", href: "/leistungen/mikronahrstoffanalyse", eyebrow: "Laborbasiert", description: "Ärztlich geführte Mikronährstoffanalyse und Beratung." },
    { title: "Eiseninfusionen", href: "/leistungen/eiseninfusion-kosten", eyebrow: "Eisenmangel", description: "Diagnostik und Infusionstherapie bei nachgewiesenem Eisenmangel." },
    { title: "Vitamininfusionen", href: "/leistungen/infusionstherapie", eyebrow: "Regeneration", description: "Vitamin- und Mikronährstoffinfusionen nach ärztlicher Einschätzung." },
    { title: "Abnehmspritze", href: "/leistungen/abnehmspritze", eyebrow: "GLP-1", description: "Ärztlich begleitete medizinische Gewichtsreduktion." },
    { title: "Ernährungsberatung", href: "/leistungen/ernaehrungsmedizin", eyebrow: "Ernährung", description: "Medizinische Ernährungsempfehlungen für Alltag, Stoffwechsel und Gewicht." },
    { title: "Erweiterte Check-ups & Prävention", href: "/leistungen/private-check-up", eyebrow: "Check-up", description: "Erweiterte Vorsorge und Prävention über Standardleistungen hinaus." },
    { title: "Reiseimpfungen", href: "/leistungen/reiseimpfungen", eyebrow: "Reisemedizin", description: "Reiseimpfberatung und Impfungen nach Ziel, Risiko und Impfstatus." },
    { title: "HER – Prävention & Longevity für Frauen", href: "/praevention", eyebrow: "Frauen", description: "Ein geplanter Schwerpunkt für weibliche Prävention und Longevity." },
  ],
  en: [
    { title: "Micronutrient consultation", href: "/en/services/micronutrient-analysis", eyebrow: "Lab-based", description: "Physician-led micronutrient analysis and consultation." },
    { title: "Iron infusions", href: "/en/services/iron-infusion-costs", eyebrow: "Iron deficiency", description: "Diagnostics and infusion therapy for documented iron deficiency." },
    { title: "Vitamin infusions", href: "/en/services/infusion-therapy", eyebrow: "Regeneration", description: "Vitamin and micronutrient infusions after medical assessment." },
    { title: "Weight-loss injection", href: "/en/services/weight-loss-injection", eyebrow: "GLP-1", description: "Physician-supervised medical weight loss." },
    { title: "Nutrition counseling", href: "/en/services/nutritional-medicine", eyebrow: "Nutrition", description: "Medical nutrition recommendations for everyday life, metabolism and weight." },
    { title: "Extended check-ups & prevention", href: "/en/services/private-insurance-check-up", eyebrow: "Check-up", description: "Extended prevention beyond standard services." },
    { title: "Travel vaccinations", href: "/en/services/travel-vaccinations", eyebrow: "Travel medicine", description: "Travel vaccination counseling and vaccinations by destination, risk and records." },
    { title: "HER – prevention & longevity for women", href: "/en/prevention", eyebrow: "Women", description: "A planned focus area for female prevention and longevity." },
  ],
};

function stripBold(text: string) {
  return text.replace(/^\*\*(.*)\*\*$/, "$1");
}

function parseMarkdown(markdown: string): MarkdownNode[] {
  const nodes: MarkdownNode[] = [];
  const lines = markdown.split("\n");
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line === "⸻") {
      flushList();
      nodes.push({ type: "rule" });
      continue;
    }

    if (line.startsWith("# ")) {
      flushList();
      nodes.push({ type: "h1", text: line.replace(/^# /, "").replace(/:$/, "") });
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

    if (line.startsWith("- ") || line.startsWith("* ")) {
      listItems.push(stripBold(line.replace(/^[-*]\s+/, "")));
      continue;
    }

    flushList();
    nodes.push({ type: /^\*\*.*\*\*$/.test(line) ? "h3" : "p", text: stripBold(line) });
  }

  flushList();
  return nodes;
}

function textNodes(nodes: MarkdownNode[]) {
  return nodes.filter((node): node is Extract<MarkdownNode, { text?: string }> & { text: string } => "text" in node && typeof node.text === "string");
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function CtaButtons({
  locale,
  secondaryCta,
  secondaryHref,
  bookingUrls,
}: {
  locale: LongevityLocale;
  secondaryCta?: string;
  secondaryHref?: string;
  bookingUrls?: AppointmentBookingUrls;
}) {
  const appointmentHref = bookingUrls?.private ?? Constants.appointmentUrl;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={appointmentHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker"
      >
        {locale === "en" ? "Book appointment" : "Termin buchen"}
      </Link>
      {secondaryCta && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-6 py-3 text-base font-serif font-medium text-primary transition hover:border-primary/40 hover:bg-stone-50"
        >
          {secondaryCta}
        </Link>
      )}
    </div>
  );
}

function HeroImage({ sectionKey, locale }: { sectionKey: LongevitySectionKey; locale: LongevityLocale }) {
  const image = heroImages[sectionKey];

  return (
    <div className="relative min-w-0 overflow-hidden rounded-xl bg-lightBeige shadow-xl ring-1 ring-primary/10">
      <Image
        src={image.src}
        alt={image.alt[locale]}
        width={900}
        height={720}
        priority
        sizes="(min-width: 1024px) 36vw, 92vw"
        className={`h-72 w-full max-w-full object-cover sm:h-96 lg:h-[30rem] ${image.objectPositionClass ?? "object-center"}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/20" />
    </div>
  );
}

function FactStrip({ sectionKey, locale }: { sectionKey: LongevitySectionKey; locale: LongevityLocale }) {
  if (sectionKey === "hub") {
    return null;
  }

  return (
    <MotionSection className="relative z-20 -mt-[50px] px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20 ring-1 ring-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {detailConfig[sectionKey].facts[locale].map((fact) => {
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

    if (node.type === "h3") {
      return <h3 key={index} className="pt-2 font-serif text-xl font-semibold text-primary">{node.text}</h3>;
    }

    if (node.type === "h1" || node.type === "h2") {
      return <h2 key={index} className="pt-2 font-serif text-2xl font-semibold text-primary">{node.text}</h2>;
    }

    return <div key={index} className="h-px bg-primary/10" />;
  });
}

function takeUntilHeading(nodes: MarkdownNode[], start: number) {
  const children: MarkdownNode[] = [];
  let cursor = start;

  while (cursor < nodes.length && nodes[cursor].type !== "h1" && nodes[cursor].type !== "h2" && nodes[cursor].type !== "h3") {
    if (nodes[cursor].type !== "rule") {
      children.push(nodes[cursor]);
    }
    cursor += 1;
  }

  return { children, cursor };
}

const sectionHeadingTitles: Partial<Record<LongevitySectionKey, Record<LongevityLocale, string[]>>> = {
  vitaminInfusion: {
    de: [
      "Hochdosis-Vitamin-C-Infusion",
      "B-Vitamin-Infusionen",
      "Zink-Infusionen & Mikronährstoffkombinationen",
      "Wie läuft die Infusionstherapie ab?",
      "Wann können Infusionen sinnvoller sein als Tabletten?",
      "Transparente Kostenstruktur",
    ],
    en: [
      "High-dose vitamin C infusion",
      "B vitamin infusions",
      "Zinc infusions & micronutrient combinations",
      "How does infusion therapy work?",
      "When can infusions be more useful than tablets?",
      "Transparent cost structure",
    ],
  },
};

function StructuredBody({ nodes, locale, sectionKey }: { nodes: MarkdownNode[]; locale: LongevityLocale; sectionKey: LongevitySectionKey }) {
  const sections: JSX.Element[] = [];
  const headingTitles = sectionHeadingTitles[sectionKey]?.[locale] ?? [];
  let index = 0;

  while (index < nodes.length) {
    const node = nodes[index];

    if (node.type === "rule") {
      index += 1;
      continue;
    }

    if ((node.type === "h1" || node.type === "h2") && node.text && /^(Häufige Fragen|Frequently Asked Questions|Frequently asked questions)/.test(node.text)) {
      const faqs: { question: string; answer: MarkdownNode[] }[] = [];
      index += 1;

      while (index < nodes.length) {
        const question = nodes[index];

        if (question.type === "h1" || question.type === "h2") {
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

    if (node.type === "h1" || node.type === "h2") {
      sections.push(
        <MotionSection key={`heading-${sections.length}`} className="mx-auto max-w-5xl px-4 pt-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
        </MotionSection>,
      );
      index += 1;
      continue;
    }

    if (node.type === "h3" && node.text && headingTitles.includes(node.text)) {
      const result = takeUntilHeading(nodes, index + 1);

      sections.push(
        <MotionSection key={`section-${sections.length}`} className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="break-words font-serif text-3xl font-semibold text-primary">{node.text}</h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-primaryLighter">{renderCompactNodes(result.children)}</div>
        </MotionSection>,
      );
      index = result.cursor;
      continue;
    }

    if (node.type === "h3" && node.text) {
      const result = takeUntilHeading(nodes, index + 1);
      sections.push(
        <MotionCard key={`card-${sections.length}`} className="min-w-0 rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
          <h2 className="break-words font-serif text-2xl font-semibold text-primary">{node.text}</h2>
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
          <div className="grid min-w-0 gap-6 lg:grid-cols-2">{pendingCards}</div>
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

function RelatedServices({ sectionKey, locale }: { sectionKey: LongevitySectionKey; locale: LongevityLocale }) {
  const services = hubSubpages[locale].filter((item) => {
    if (sectionKey === "hub") {
      return true;
    }

    return item.href && item.href !== detailConfig[sectionKey].de.canonical && item.href !== detailConfig[sectionKey].en.canonical;
  });
  const title =
    sectionKey === "hub"
      ? locale === "en"
        ? "Prevention & longevity services"
        : "Präventions- und Longevity-Leistungen"
      : locale === "en"
        ? "More prevention and longevity services"
        : "Weitere Präventions- und Longevity-Leistungen";

  return (
    <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {sectionKey === "hub" ? (
          <h2 className="font-serif text-3xl font-semibold text-primary">{title}</h2>
        ) : (
          <div className="flex max-w-3xl items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <SparklesIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-primary">{title}</h2>
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
            const card = (
              <MotionCard delay={Math.min(index * 0.04, 0.2)} className="h-full min-w-0 rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryLighter">{item.eyebrow}</p>
                <h3 className="mt-2 break-words font-serif text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-primaryLighter">{item.description}</p>
                {item.href && <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">{locale === "en" ? "Learn more" : "Mehr erfahren"}</span>}
              </MotionCard>
            );

            return item.href ? (
              <Link key={item.title} href={item.href} className="block h-full">
                {card}
              </Link>
            ) : (
              <div key={item.title} className="h-full">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

export function LongevityMarkdownPage({ sectionKey, locale }: { sectionKey: Exclude<LongevitySectionKey, "hub">; locale: LongevityLocale }) {
  const markdown = getLongevitySectionMarkdown(sectionKey, locale);
  const nodes = parseMarkdown(markdown);
  const title = getLongevitySectionTitle(sectionKey, locale);
  const config = detailConfig[sectionKey][locale];
  const contentNodes = nodes[0]?.type === "h1" ? nodes.slice(1) : nodes;
  const heroNodes = contentNodes.slice(0, 2);
  const bodyNodes = contentNodes.slice(2);
  const descriptionNode = textNodes(nodes).find((node) => node.type === "h3" || node.type === "p");
  const description = descriptionNode?.text ?? title;
  const faqNodes = nodes.flatMap((node) =>
    node.type === "h3" && typeof node.text === "string" && node.text.endsWith("?") ? [{ text: node.text }] : [],
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: title, item: `${Constants.baseUrl}${config.canonical}` },
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqNodes.map((item) => ({
      "@type": "Question",
      name: item.text,
      acceptedAnswer: { "@type": "Answer", text: description },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {faqNodes.length > 0 && <JsonLd data={faqSchema} />}
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:items-center lg:px-8 lg:py-24">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">{config.eyebrow}</p>
            <h1 className="mt-4 break-words font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{title}</h1>
            <div className="mt-6 space-y-5">{renderCompactNodes(heroNodes)}</div>
            <div className="mt-8 lg:hidden">
              <HeroImage sectionKey={sectionKey} locale={locale} />
            </div>
            <CtaButtons locale={locale} secondaryCta={config.secondaryCta} secondaryHref={config.secondaryHref} bookingUrls={bookingUrlsBySection[sectionKey]} />
          </div>
          <div className="hidden lg:block">
            <HeroImage sectionKey={sectionKey} locale={locale} />
          </div>
        </MotionSection>

        <FactStrip sectionKey={sectionKey} locale={locale} />
        <StructuredBody nodes={bodyNodes} locale={locale} sectionKey={sectionKey} />
        <RelatedServices sectionKey={sectionKey} locale={locale} />
      </div>
    </>
  );
}

export function LongevityMarkdownHub({ locale }: { locale: LongevityLocale }) {
  const markdown = getLongevitySectionMarkdown("hub", locale);
  const nodes = parseMarkdown(markdown);
  const subpageIndex = nodes.findIndex((node) => (node.type === "h1" || node.type === "h2") && /^(Subpages|Unterseiten)/.test(node.text ?? ""));
  const introNodes = subpageIndex >= 0 ? nodes.slice(0, subpageIndex) : nodes;
  const mobileLeadNodes = introNodes.slice(0, 2);
  const mobileBodyNodes = introNodes.slice(2);
  const title = getLongevitySectionTitle("hub", locale);
  const canonical = locale === "en" ? "/en/prevention-longevity" : "/praevention-longevity";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: title, item: `${Constants.baseUrl}${canonical}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:items-center lg:px-8 lg:py-24">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">
              {locale === "en" ? "Prevention, energy & healthy aging" : "Prävention, Energie & Healthy Aging"}
            </p>
            <div className="hidden space-y-5 lg:block">
              {renderCompactNodes(introNodes)}
            </div>
            <div className="space-y-5 lg:hidden">
              {renderCompactNodes(mobileLeadNodes)}
            </div>
            <div className="mt-8 lg:hidden">
              <HeroImage sectionKey="hub" locale={locale} />
            </div>
            <div className="mt-8 space-y-5 lg:hidden">
              {renderCompactNodes(mobileBodyNodes)}
            </div>
            <CtaButtons locale={locale} secondaryCta={locale === "en" ? "View prices" : "Preise ansehen"} secondaryHref={locale === "en" ? "/en/prevention-longevity/prices" : "/praevention-longevity/preise"} />
          </div>
          <div className="hidden lg:block">
            <HeroImage sectionKey="hub" locale={locale} />
          </div>
        </MotionSection>

        <RelatedServices sectionKey="hub" locale={locale} />
      </div>
    </>
  );
}
