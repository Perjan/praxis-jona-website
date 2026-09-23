import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type HomeHighlightsLocale = "de" | "en";

type TrustItem = { title: string; text: string };
type SpecialtyCard = { title: string; text: string; href: string };

const homeHighlightsContent = {
  de: {
    trustLabel: "Warum Praxis Jona",
    trust: [
      { title: "Fachärztin für Innere Medizin", text: "Facharztausbildung und Promotion an der Charité Berlin" },
      { title: "Lipidologin & Hypertensiologin", text: "Zertifiziert für Blutfette und Bluthochdruck" },
      { title: "Gesetzlich & privat versichert", text: "Termine online über Doctolib buchbar" },
      { title: "Am Rosenthaler Platz", text: "Torstraße 125, Berlin-Mitte · U8 Rosenthaler Platz" },
    ],
    eyebrow: "Schwerpunkte & Leistungen",
    heading: "Wobei wir Sie begleiten",
    intro: "Moderne Diagnostik, klare Einordnung und eine Behandlung, die zu Ihrem Alltag passt.",
    linkLabel: "Mehr erfahren",
    allServicesLabel: "Alle Leistungen ansehen",
    allServicesHref: "/leistungen",
    cards: [
      { title: "Schilddrüse", text: "Abklärung und Behandlung von Über- und Unterfunktion, Knoten und Hashimoto.", href: "/schwerpunkte/schilddruese" },
      { title: "Bluthochdruck", text: "Ursachen finden, Langzeitmessung und eine Therapie, die zu Ihrem Alltag passt.", href: "/schwerpunkte/bluthochdruck" },
      { title: "Fettstoffwechsel", text: "Cholesterin und Blutfette gezielt einstellen – durch eine zertifizierte Lipidologin.", href: "/schwerpunkte/fettstoffwechselstoerungen" },
      { title: "Check-up & Vorsorge", text: "Regelmäßige Gesundheitsuntersuchung zur Früherkennung.", href: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up" },
      { title: "Ernährungsmedizin", text: "Ärztliche Ernährungsberatung, auch bei Gewichtsreduktion.", href: "/leistungen/ernaehrungsmedizin" },
      { title: "Ästhetik", text: "Dezente Behandlungen, die Ihre natürliche Ausstrahlung unterstützen.", href: "/aesthetik" },
    ],
  },
  en: {
    trustLabel: "Why Praxis Jona",
    trust: [
      { title: "Specialist in Internal Medicine", text: "Specialist training and doctorate at Charité Berlin" },
      { title: "Lipidologist & hypertensiologist", text: "Certified in blood lipids and high blood pressure" },
      { title: "Public & private insurance", text: "Book appointments online via Doctolib" },
      { title: "At Rosenthaler Platz", text: "Torstraße 125, Berlin-Mitte · U8 Rosenthaler Platz" },
    ],
    eyebrow: "Focus areas & services",
    heading: "How we can help",
    intro: "Modern diagnostics, a clear assessment and treatment that fits your everyday life.",
    linkLabel: "Learn more",
    allServicesLabel: "View all services",
    allServicesHref: "/en/services",
    cards: [
      { title: "Thyroid", text: "Diagnosis and treatment of over- and underactive thyroid, nodules and Hashimoto's.", href: "/en/focus-areas/thyroid-gland" },
      { title: "High blood pressure", text: "Finding the cause, 24-hour monitoring and treatment that fits your life.", href: "/en/focus-areas/high-blood-pressure" },
      { title: "Lipid disorders", text: "Targeted cholesterol and lipid management by a certified lipidologist.", href: "/en/focus-areas/lipometabolic-disorders" },
      { title: "Check-up & prevention", text: "Regular health check-ups for early detection.", href: "/en/general-medicine/preventive-check-up" },
      { title: "Nutritional medicine", text: "Physician-led nutrition counselling, including weight loss.", href: "/en/services/nutritional-medicine" },
      { title: "Aesthetics", text: "Subtle treatments that support your natural look.", href: "/en/aesthetics" },
    ],
  },
} satisfies Record<HomeHighlightsLocale, {
  trustLabel: string;
  trust: TrustItem[];
  eyebrow: string;
  heading: string;
  intro: string;
  linkLabel: string;
  allServicesLabel: string;
  allServicesHref: string;
  cards: SpecialtyCard[];
}>;

export default function HomeHighlights({ locale = "de" }: { locale?: HomeHighlightsLocale }) {
  const content = homeHighlightsContent[locale];

  return (
    <>
      <section aria-label={content.trustLabel} className="border-b border-primary/10 bg-white">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {content.trust.map((item) => (
            <li key={item.title} className="border-l-2 border-darkBeige pl-4">
              <p className="font-serif text-lg font-semibold text-primary">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-primaryLighter">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="home-specialties-title" className="bg-lightBeige/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primaryLighter">{content.eyebrow}</p>
            <h2 id="home-specialties-title" className="mt-2 font-serif text-3xl tracking-tight text-primary sm:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-primaryLighter">{content.intro}</p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.cards.map((card) => (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary/10 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-8"
                >
                  <h3 className="font-serif text-xl font-semibold text-primary">{card.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-primaryLighter">{card.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {content.linkLabel}
                    <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href={content.allServicesHref}
              className="inline-flex items-center gap-2 py-3 text-base font-semibold text-primary underline-offset-4 hover:underline"
            >
              {content.allServicesLabel}
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
