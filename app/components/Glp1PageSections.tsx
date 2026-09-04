import Link from "next/link";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CurrencyEuroIcon,
  HeartIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Constants } from "app/Constants";
import BookingCtaLink from "app/components/BookingCtaLink";
import type { LongevityLocale } from "app/content/longevitySource";

const content = {
  de: {
    heroAsideTitle: "Ihre medizinische Begleitung",
    heroAsideItems: [
      { title: "Umfassender Ersttermin", text: "Anamnese, Untersuchung, Ultraschall und Therapieentscheidung" },
      { title: "Labor sinnvoll einordnen", text: "Metabolische Ausgangsdiagnostik nach individueller Situation" },
      { title: "Digital möglich", text: "Videosprechstunde und Velto-Begleitung für passende Fälle" },
      { title: "Rezept nur bei Indikation", text: "Verordnung ausschließlich nach ärztlicher Prüfung" },
    ],
    careEyebrow: "Medizinische Begleitung",
    careTitle: "Ihr Behandlungsweg in der Praxis Jona.",
    careIntro:
      "Wir trennen bewusst zwischen medizinischer Eignung, Therapieentscheidung, Verlaufskontrolle und digitaler Begleitung. So bleibt die Behandlung nachvollziehbar und sicher.",
    steps: [
      {
        title: "Eignung klären",
        text: "Wir prüfen Gewicht, Vorerkrankungen, bisherige Abnehmversuche, Laborwerte und mögliche Kontraindikationen.",
        bullets: ["ausführliche Anamnese", "körperliche Untersuchung", "Ultraschall bei Bedarf"],
      },
      {
        title: "Therapie auswählen",
        text: "Wenn eine medikamentöse Gewichtsreduktion medizinisch geeignet ist, besprechen wir Präparat, Anwendung, Nebenwirkungen und Ziele.",
        bullets: ["Wegovy® oder Mounjaro® nach Situation", "Aufklärung und Zieldefinition", "Rezept bei Indikation"],
      },
      {
        title: "Verlauf begleiten",
        text: "In Folgegesprächen geht es um Gewichtsverlauf, Verträglichkeit, Nebenwirkungen und sinnvolle Dosisanpassungen.",
        bullets: ["20-minütige Folgegespräche", "kurze Therapie-Checks", "Anpassung bei Beschwerden"],
      },
      {
        title: "Ernährung stabilisieren",
        text: "Auf Wunsch ergänzen wir die Therapie durch Ernährungsmedizin, damit Proteinbedarf, Kalorienbedarf und Alltag zusammenpassen.",
        bullets: ["Ernährungstagebuch", "persönlicher Plan", "realistische nächste Ziele"],
      },
    ],
    digitalEyebrow: "Velto DIGITAL",
    digitalTitle: "Digitale Begleitung, wenn keine umfassende Betreuung vor Ort nötig ist.",
    digitalText:
      "Der wichtigste Vorteil: Nach ärztlicher Prüfung erhalten Sie Ihr Rezept bequem und diskret nach Hause. Bei Bedarf kann es als EU-/EWR-Auslandsrezept ausgestellt werden, sofern die medizinischen und formalen Voraussetzungen erfüllt sind. Velto Premium verbindet diesen Rezeptservice mit einer modernen GLP-1-App zur digitalen Therapiebegleitung.",
    digitalItems: ["Rezept diskret nach Hause", "EU-/EWR-Auslandsrezept möglich", "moderne GLP-1-App Velto", "monatlich kündbar"],
    digitalQuestionnaireCta: "Online-Fragebogen starten",
    suitabilityEyebrow: "Für wen geeignet",
    suitabilityTitle: "Für wen wir eine GLP-1-Therapie prüfen.",
    suitabilityText:
      "Eine GLP-1-Therapie ist kein Lifestyle-Produkt. Ob sie für Sie geeignet ist, entscheiden wir individuell im ärztlichen Gespräch.",
    suitableTitle: "Grundsätzlich prüfenswert, wenn ...",
    suitableItems: [
      "BMI mindestens 30 oder BMI mindestens 27 mit gewichtsbedingten Begleiterkrankungen",
      "bisherige Abnehmversuche nicht ausreichend erfolgreich waren",
      "keine medizinischen Gründe gegen eine GLP-1-Therapie sprechen",
      "Sie bereit sind, Ernährung, Bewegung und Kontrollen mitzudenken",
    ],
    cautionTitle: "Besonders sorgfältig prüfen wir ...",
    cautionItems: [
      "Schwangerschaft, Stillzeit oder geplante Schwangerschaft",
      "relevante Vorerkrankungen oder Medikamentenkombinationen",
      "Nebenwirkungen, Unverträglichkeiten und Verlauf unter Therapie",
    ],
    pricingEyebrow: "Selbstzahlerleistung nach GOÄ",
    pricingTitle: "Transparente Startpunkte für Ihre Behandlung.",
    prices: [
      { label: "Umfassender Ersttermin", value: "ca. 289 €", location: "Vor Ort" },
      { label: "Digitaler Ersttermin", value: "ca. 89 €", app: "Smartphone" },
      { label: "Velto Premium", value: "20 € monatlich", description: "Rezept diskret nach Hause, EU-/EWR-Auslandsrezept möglich plus moderne GLP-1-App Velto", app: "iOS App" },
      { label: "Videosprechstunde bei Bedarf", value: "69 €", video: "Video" },
    ],
    pricingNote: "Die Kosten der Medikamente sind nicht enthalten und werden separat über die Apotheke abgerechnet.",
    cta: "Ersttermin buchen",
    detailsCta: "Details und Kosten lesen",
  },
  en: {
    heroAsideTitle: "Your medical support",
    heroAsideItems: [
      { title: "Comprehensive initial appointment", text: "History, examination, ultrasound and therapy decision" },
      { title: "Context for lab values", text: "Baseline metabolic diagnostics depending on your situation" },
      { title: "Digital option", text: "Video consultation and Velto support for suitable cases" },
      { title: "Prescription only when indicated", text: "Issued only after physician review" },
    ],
    careEyebrow: "Medical Support",
    careTitle: "Your treatment pathway at Praxis Jona.",
    careIntro:
      "We deliberately separate medical suitability, therapy decision, follow-up and digital support. This keeps treatment transparent and safe.",
    steps: [
      {
        title: "Clarify suitability",
        text: "We review weight, existing conditions, previous weight-loss attempts, lab values and possible contraindications.",
        bullets: ["detailed medical history", "physical examination", "ultrasound when needed"],
      },
      {
        title: "Select therapy",
        text: "If medication-assisted weight loss is medically suitable, we discuss medication, use, side effects and goals.",
        bullets: ["Wegovy® or Mounjaro® depending on situation", "information and goal definition", "prescription when indicated"],
      },
      {
        title: "Support progress",
        text: "Follow-up consultations focus on weight progress, tolerability, side effects and useful dose adjustments.",
        bullets: ["20-minute follow-ups", "short therapy checks", "adjustments when symptoms occur"],
      },
      {
        title: "Stabilize nutrition",
        text: "If desired, we add nutritional medicine so protein needs, calorie needs and everyday life fit together.",
        bullets: ["nutrition diary", "personal plan", "realistic next goals"],
      },
    ],
    digitalEyebrow: "Velto DIGITAL",
    digitalTitle: "Digital support when comprehensive on-site care is not needed.",
    digitalText:
      "The key benefit: after physician review, your prescription is sent discreetly and conveniently to your home. When needed, it can be issued as an EU/EEA cross-border prescription if the medical and formal requirements are met. Velto Premium combines this prescription service with a modern GLP-1 app for digital therapy support.",
    digitalItems: ["prescription delivered discreetly", "EU/EEA cross-border prescription possible", "modern Velto GLP-1 app", "cancellable monthly"],
    digitalQuestionnaireCta: "Start online questionnaire",
    suitabilityEyebrow: "Who It May Suit",
    suitabilityTitle: "Who we assess for GLP-1 therapy.",
    suitabilityText:
      "GLP-1 therapy is not a lifestyle product. Whether it is suitable for you is decided individually in a physician consultation.",
    suitableTitle: "Generally worth assessing if ...",
    suitableItems: [
      "BMI at least 30, or BMI at least 27 with weight-related accompanying conditions",
      "previous weight-loss attempts were not sufficiently successful",
      "there are no medical reasons against GLP-1 therapy",
      "you are willing to include nutrition, movement and check-ups",
    ],
    cautionTitle: "We assess especially carefully ...",
    cautionItems: [
      "pregnancy, breastfeeding or planned pregnancy",
      "relevant existing conditions or medication combinations",
      "side effects, tolerability and progress during therapy",
    ],
    pricingEyebrow: "Self-pay service according to GOÄ",
    pricingTitle: "Transparent starting points for your treatment.",
    prices: [
      { label: "Comprehensive initial appointment", value: "approx. €289", location: "On-site" },
      { label: "Digital initial appointment", value: "approx. €89", app: "Smartphone" },
      { label: "Velto Premium", value: "€20 monthly", description: "prescription delivered discreetly, EU/EEA cross-border option possible plus the modern Velto GLP-1 app", app: "iOS app" },
      { label: "Video consultation when needed", value: "€69", video: "Video" },
    ],
    pricingNote: "Medication costs are not included and are billed separately through the pharmacy.",
    cta: "Book initial appointment",
    detailsCta: "Read details and costs",
  },
} as const;

const stepIcons = [ClipboardDocumentCheckIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, HeartIcon];

export function Glp1HeroAside({ locale }: { locale: LongevityLocale }) {
  const localized = content[locale];

  return (
    <div className="rounded-2xl bg-primary p-6 text-white shadow-2xl shadow-primary/20 sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
        <ClipboardDocumentCheckIcon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="mt-6 font-serif text-2xl font-semibold">{localized.heroAsideTitle}</h2>
      <div className="mt-5 space-y-4">
        {localized.heroAsideItems.map((item) => (
          <div key={item.title} className="flex gap-3">
            <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-lightBeige" aria-hidden="true" />
            <div>
              <h3 className="font-semibold leading-6">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-white/75">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Glp1CarePath({ locale }: { locale: LongevityLocale }) {
  const localized = content[locale];

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">{localized.careEyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">{localized.careTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-primaryLighter">{localized.careIntro}</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {localized.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? ShieldCheckIcon;

            return (
              <article key={step.title} className="flex min-h-full flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-serif text-3xl font-semibold text-primary/25">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-primaryLighter">{step.text}</p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-primaryLighter/80">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Glp1DigitalAndSuitability({ locale }: { locale: LongevityLocale }) {
  const localized = content[locale];

  return (
    <section className="bg-lightBeige/55 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-xl bg-primary p-6 text-white shadow-lg sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <VideoCameraIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-lightBeige">{localized.digitalEyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">{localized.digitalTitle}</h2>
          <p className="mt-5 text-base leading-7 text-white/78">{localized.digitalText}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {localized.digitalItems.map((item) => (
              <div key={item} className="rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/20">
                {item}
              </div>
            ))}
          </div>
          <Link
            href={locale === "de" ? "/glp-1-check" : "/en/glp-1-check"}
            className="mt-7 inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-lightBeige"
          >
            {localized.digitalQuestionnaireCta}
          </Link>
        </article>

        <article className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">{localized.suitabilityEyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">{localized.suitabilityTitle}</h2>
          <p className="mt-4 text-base leading-7 text-primaryLighter">{localized.suitabilityText}</p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary">{localized.suitableTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-primaryLighter">
                {localized.suitableItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary">{localized.cautionTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-primaryLighter">
                {localized.cautionItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Glp1PricingCta({ locale }: { locale: LongevityLocale }) {
  const localized = content[locale];

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-primary/10 bg-white p-6 shadow-xl shadow-stone-200/70 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CurrencyEuroIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">{localized.pricingEyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">{localized.pricingTitle}</h2>
            <p className="mt-4 text-base leading-7 text-primaryLighter">{localized.pricingNote}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BookingCtaLink
                href={Constants.appointmentUrlsByService.weightLossInjection.private}
                placement="glp1-pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primaryDarker"
              >
                {localized.cta}
              </BookingCtaLink>
              <a
                href="#details"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-stone-50"
              >
                {localized.detailsCta}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {localized.prices.map((price) => (
              <div key={price.label} className="rounded-xl bg-lightBeige/70 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm leading-6 text-primaryLighter">{price.label}</p>
                  {"location" in price && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {price.location}
                    </span>
                  )}
                  {"app" in price && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      <DevicePhoneMobileIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {price.app}
                    </span>
                  )}
                  {"video" in price && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      <VideoCameraIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {price.video}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-serif text-2xl font-semibold text-primary">{price.value}</p>
                {"description" in price && <p className="mt-2 text-sm leading-6 text-primaryLighter">{price.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
