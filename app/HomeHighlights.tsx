import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type HomeHighlightsLocale = "de" | "en";

type TrustItem = { title: string; text: string };
type ServiceLink = { title: string; text: string; href: string };

const homeHighlightsContent = {
  de: {
    trustLabel: "Warum Praxis Jona",
    trust: [
      { title: "Fachärztin für Innere Medizin", text: "Facharztausbildung und Promotion an der Charité Berlin" },
      { title: "Lipidologin & Hypertensiologin", text: "Zertifiziert für Blutfette und Bluthochdruck" },
      { title: "Gesetzlich & privat versichert", text: "Termine online über Doctolib buchbar" },
      { title: "Am Rosenthaler Platz", text: "Torstraße 125, Berlin-Mitte, direkt an der U8" },
    ],
    heading: "Wobei wir Sie begleiten",
    intro: "Moderne Diagnostik, klare Einordnung und eine Behandlung, die zu Ihrem Alltag passt.",
    focusTitle: "Am häufigsten gebucht",
    focus: [
      { title: "Eiseninfusion", text: "Bei Eisenmangel: Diagnostik, ärztliche Prüfung und Infusion in der Praxis.", href: "/leistungen/eiseninfusion-kosten" },
      { title: "Abnehmspritze", text: "Ärztlich begleitete GLP-1-Therapie zur Gewichtsreduktion.", href: "/leistungen/abnehmspritze" },
      { title: "PRP-Behandlung", text: "Eigenbluttherapie für Haut und Haare.", href: "/aesthetik/prp-behandlung" },
      { title: "Botulinumtoxin", text: "Behandlung mimischer Falten, dezent und natürlich.", href: "/botox-behandlung" },
    ],
    more: [
      { title: "Private Check-up", text: "Erweiterte Vorsorge mit EKG und Ultraschall.", href: "/leistungen/private-check-up" },
      { title: "Mikronährstoffanalyse", text: "Vitamine und Mineralstoffe gezielt bestimmen.", href: "/leistungen/mikronahrstoffanalyse" },
      { title: "Innere Medizin", text: "Schilddrüse, Bluthochdruck und Fettstoffwechsel.", href: "/schwerpunkte" },
    ],
    imageAlt: "Behandlungsraum der Praxis Jona mit Tageslicht und Pflanzen",
    allServicesLabel: "Alle Leistungen ansehen",
    allServicesHref: "/leistungen",
  },
  en: {
    trustLabel: "Why Praxis Jona",
    trust: [
      { title: "Specialist in Internal Medicine", text: "Specialist training and doctorate at Charité Berlin" },
      { title: "Lipidologist & hypertensiologist", text: "Certified in blood lipids and high blood pressure" },
      { title: "Public & private insurance", text: "Book appointments online via Doctolib" },
      { title: "At Rosenthaler Platz", text: "Torstraße 125, Berlin-Mitte, right at the U8" },
    ],
    heading: "How we can help",
    intro: "Modern diagnostics, a clear assessment and treatment that fits your everyday life.",
    focusTitle: "Most requested",
    focus: [
      { title: "Iron infusion", text: "For iron deficiency: diagnostics, physician review and infusion at the practice.", href: "/en/services/iron-infusion-costs" },
      { title: "Weight-loss injection", text: "Physician-supervised GLP-1 therapy for weight loss.", href: "/en/services/weight-loss-injection" },
      { title: "PRP treatment", text: "Platelet-rich plasma for skin and hair.", href: "/en/aesthetics/prp-treatment" },
      { title: "Botulinum toxin", text: "Treatment of expression lines, subtle and natural.", href: "/en/botox-treatment" },
    ],
    more: [
      { title: "Private check-up", text: "Extended prevention with ECG and ultrasound.", href: "/en/services/private-insurance-check-up" },
      { title: "Micronutrient analysis", text: "Targeted testing of vitamins and minerals.", href: "/en/services/micronutrient-analysis" },
      { title: "Internal medicine", text: "Thyroid, blood pressure and lipid disorders.", href: "/en/focus-areas" },
    ],
    imageAlt: "Treatment room at Praxis Jona with daylight and plants",
    allServicesLabel: "View all services",
    allServicesHref: "/en/services",
  },
} satisfies Record<HomeHighlightsLocale, {
  trustLabel: string;
  trust: TrustItem[];
  heading: string;
  intro: string;
  focusTitle: string;
  focus: ServiceLink[];
  more: ServiceLink[];
  imageAlt: string;
  allServicesLabel: string;
  allServicesHref: string;
}>;

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function HomeHighlights({ locale = "de" }: { locale?: HomeHighlightsLocale }) {
  const content = homeHighlightsContent[locale];

  return (
    <>
      <section aria-label={content.trustLabel} className="border-b border-primary/10 bg-white">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {content.trust.map((item) => (
            <li key={item.title} className="border-l-2 border-darkBeige pl-4">
              <p className="font-serif text-lg font-medium leading-snug text-primary">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-primaryLighter">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="home-specialties-title" className="bg-lightBeige/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="home-specialties-title" className="font-serif text-4xl tracking-tight text-primary sm:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-4 max-w-[60ch] text-lg leading-8 text-primaryLighter">{content.intro}</p>

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="rounded-2xl bg-primary p-8 text-white sm:p-10 lg:col-span-5 lg:row-span-2">
              <h3 className="text-sm font-medium text-white/70">{content.focusTitle}</h3>
              <ul className="mt-6 divide-y divide-white/15">
                {content.focus.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group flex items-start justify-between gap-6 py-6 ${focusRing} focus-visible:outline-white`}
                    >
                      <span>
                        <span className="block font-serif text-3xl leading-tight">{item.title}</span>
                        <span className="mt-2 block text-base leading-7 text-white/75">{item.text}</span>
                      </span>
                      <ArrowRightIcon
                        aria-hidden="true"
                        className="mt-2 h-5 w-5 flex-none text-white/70 transition-transform group-hover:text-white motion-safe:group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[16rem] overflow-hidden rounded-2xl sm:min-h-[20rem] lg:col-span-7">
              <Image
                src="/images/clinic/clinic-hero-2025.jpg"
                alt={content.imageAlt}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7">
              {content.more.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-primary/10 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(13,50,43,0.45)] ${focusRing}`}
                  >
                    <span className="font-serif text-xl leading-snug text-primary">{item.title}</span>
                    <span className="mt-2 flex-1 text-sm leading-6 text-primaryLighter">{item.text}</span>
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="mt-5 h-4 w-4 text-primary transition-transform motion-safe:group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={content.allServicesHref}
            className={`mt-10 inline-flex items-center gap-2 py-3 text-base font-medium text-primary underline-offset-4 hover:underline ${focusRing}`}
          >
            {content.allServicesLabel}
            <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
