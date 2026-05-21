import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import ConsultationPromise from "app/components/ConsultationPromise";
import { Constants } from "app/Constants";

type Locale = "de" | "en";
type PackageKey = "bronze" | "silver" | "gold";

type NutritionPackageContent = {
  title: string;
  description: string;
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  backgroundClassName: string;
  sections: Array<{
    title: string;
    items?: Array<string | { title: string; text: string }>;
    body?: string;
  }>;
  footer?: string;
};

const paths: Record<PackageKey, { de: string; en: string }> = {
  bronze: {
    de: "/leistungen/ernaehrungsmedizin/pakete/bronze",
    en: "/en/services/nutritional-medicine/packages/bronze",
  },
  silver: {
    de: "/leistungen/ernaehrungsmedizin/pakete/silber",
    en: "/en/services/nutritional-medicine/packages/silver",
  },
  gold: {
    de: "/leistungen/ernaehrungsmedizin/pakete/gold",
    en: "/en/services/nutritional-medicine/packages/gold",
  },
};

const content: Record<Locale, Record<PackageKey, NutritionPackageContent>> = {
  de: {
    bronze: {
      title: "Bronze Ernährungspaket - Einmalige Beratung",
      description:
        "Einmaliges Beratungsgespräch für 149 € - Perfekt für alle, die eine individuelle Beratung möchten, aber keine längerfristige Betreuung benötigen.",
      name: "Bronze",
      subtitle: "Einmalig 60 Minuten",
      price: "149 €",
      priceNote: "Einmalig",
      backgroundClassName: "bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0]",
      sections: [
        {
          title: "Für wen ist diese Beratung geeignet?",
          body: "Diese Beratung richtet sich an Personen, die bereits eine überwiegend gesunde Ernährungsweise verfolgen und nach einer Feinjustierung suchen. Wenn du also schon viel Wert auf gesunde Ernährung legst, aber noch das gewisse Etwas verbessern möchtest - sei es für deinen Sport, dein Wohlbefinden oder deine Gesundheit - bist du hier genau richtig.",
        },
        {
          title: "Was erwartet dich?",
          items: [
            {
              title: "Persönliche Beratung (ca. 60 Minuten):",
              text: "Wir nehmen uns die Zeit, deine aktuellen Gewohnheiten detailliert zu analysieren und darauf basierend einen individuellen Aktionsplan zu entwickeln, der perfekt auf dich zugeschnitten ist.",
            },
            {
              title: "Makronährstoffverteilung & Periodisierung:",
              text: "Gemeinsam erarbeiten wir die optimale Verteilung deiner Makronährstoffe (Kohlenhydrate, Fette, Proteine) und stimmen diese auf deinen Alltag, deine Ziele und deinen Aktivitätslevel ab.",
            },
            {
              title: "Analyse deines Ernährungstagebuchs:",
              text: "Wir werfen einen genauen Blick auf dein Ernährungstagebuch, um Feinheiten zu erkennen und gezielte Verbesserungen vorzunehmen.",
            },
          ],
        },
      ],
    },
    silver: {
      title: "Silber Ernährungspaket - Monatliche Betreuung",
      description:
        "Ab 155 € pro Monat - Der Silber-Plan ist perfekt für alle, die eine strukturierte, aber flexible Beratung wünschen, ohne auf regelmäßige Check-ins verzichten zu müssen.",
      name: "Silber",
      subtitle: "Monatliche Betreuung",
      price: "Ab 155 €",
      priceNote: "pro Monat (Mindestlaufzeit: 3 Monate)",
      backgroundClassName: "bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb]",
      sections: [
        {
          title: "So funktioniert's",
          items: [
            "Anamnesegespräch: 60 Minuten via Zoom oder in der Praxis - wir analysieren deinen aktuellen Status und setzen klare Ziele.",
            "Individueller Plan: Innerhalb von 2-3 Tagen erhältst du deinen auf dich abgestimmten Aktionsplan.",
          ],
        },
        {
          title: "Leistungen im Überblick",
          items: [
            "Check-ins alle 4 Wochen via Zoom oder in der Praxis",
            "Detaillierte Analyse deines Ernährungstagebuchs",
            "Aktionsplan inkl. 1 Beispieltag und 12-Wochen-Periodisierung",
            "Unterstützung bei der Einkaufsliste und Mahlzeitenplanung",
            "Berechnung deiner individuellen Kalorien- und Makronährstoffe",
          ],
        },
        {
          title: "Geeignet für",
          items: [
            "Fettabbau: Gesund und nachhaltig",
            "Muskelaufbau: Effektive und zielgerichtete Unterstützung",
            "Lebensstil-Optimierung: Bei Erkrankungen wie Fettstoffwechselstörungen, Diabetes, Bluthochdruck oder Reizdarmsyndrom",
          ],
        },
      ],
      footer: "Ideal für alle, die mit einem strukturierten Aktionsplan über 8-12 Wochen arbeiten möchten.",
    },
    gold: {
      title: "Gold Ernährungspaket - Intensive Betreuung",
      description:
        "Ab 280 € pro Monat - Der Gold-Plan ist ideal für alle, die eine intensive und engmaschige Betreuung für maximale Ergebnisse suchen.",
      name: "Gold",
      subtitle: "Intensive Betreuung",
      price: "Ab 280 €",
      priceNote: "pro Monat (Mindestlaufzeit: 2 Monate)",
      backgroundClassName: "bg-gradient-to-br from-[#fff9e6] to-[#fff3cc]",
      sections: [
        {
          title: "So funktioniert's",
          items: [
            "Anamnesegespräch: 60 Minuten via Zoom oder in der Praxis - wir definieren deine Ziele und erstellen deinen individuellen Aktionsplan.",
            "Individueller Plan: Innerhalb von 2-3 Tagen erhältst du deinen maßgeschneiderten Aktionsplan.",
          ],
        },
        {
          title: "Leistungen im Überblick",
          items: [
            "Zweiwöchentliche Check-ins via Zoom oder in der Praxis",
            "Analyse deines Ernährungstagebuchs und kontinuierliche Optimierung",
            "Aktionsplan mit 2 individuellen Beispieltagen und 8-Wochen-Periodisierung",
            "Langfristige Planung und Anpassung zur Zielerreichung",
            "Unterstützung bei der Einkaufsliste und Mahlzeitenplanung",
            "Berechnung deiner individuellen Kalorien- und Makronährstoffe",
            "Aktionsanpassungen: Alle zwei Wochen optimiert für deinen Alltag und Ziele",
            "Supplement Guide: Empfehlungen für unterstützende Nahrungsergänzungsmittel",
          ],
        },
        {
          title: "Geeignet für",
          items: [
            "Fettabbau: Mit engmaschiger Betreuung",
            "Muskelaufbau: Maßgeschneidert für deine Bedürfnisse",
            "Lebensstil-Optimierung: Für Erkrankungen wie Fettstoffwechselstörungen, Diabetes, Bluthochdruck oder Reizdarmsyndrom",
          ],
        },
      ],
    },
  },
  en: {
    bronze: {
      title: "Bronze Nutrition Package - One-Time Consultation",
      description:
        "One-time 60-minute nutrition consultation for 149 € - ideal if you want individual guidance without longer-term coaching.",
      name: "Bronze",
      subtitle: "One-time 60 minutes",
      price: "149 €",
      priceNote: "One-time",
      backgroundClassName: "bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0]",
      sections: [
        {
          title: "Who is this consultation for?",
          body: "This consultation is designed for people who already follow a mostly healthy diet and want targeted fine-tuning. If nutrition already matters to you, but you want to improve the details for sport, well-being, or health, this package is a good fit.",
        },
        {
          title: "What to expect",
          items: [
            {
              title: "Personal consultation (approx. 60 minutes):",
              text: "We analyze your current habits in detail and develop an individual action plan tailored to your situation.",
            },
            {
              title: "Macronutrient distribution & periodization:",
              text: "Together we define the right balance of carbohydrates, fats, and protein for your daily routine, goals, and activity level.",
            },
            {
              title: "Nutrition diary analysis:",
              text: "We review your nutrition diary to identify details and make targeted improvements.",
            },
          ],
        },
      ],
    },
    silver: {
      title: "Silver Nutrition Package - Monthly Support",
      description:
        "From 155 € per month - the Silver plan is ideal if you want structured, flexible nutrition support with regular check-ins.",
      name: "Silver",
      subtitle: "Monthly support",
      price: "From 155 €",
      priceNote: "per month (minimum term: 3 months)",
      backgroundClassName: "bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb]",
      sections: [
        {
          title: "How it works",
          items: [
            "Initial assessment: 60 minutes via Zoom or in the practice - we analyze your current status and set clear goals.",
            "Individual plan: Within 2-3 days you receive an action plan tailored to you.",
          ],
        },
        {
          title: "Services included",
          items: [
            "Check-ins every 4 weeks via Zoom or in the practice",
            "Detailed analysis of your nutrition diary",
            "Action plan including 1 sample day and 12-week periodization",
            "Support with shopping lists and meal planning",
            "Calculation of your individual calories and macronutrients",
          ],
        },
        {
          title: "Suitable for",
          items: [
            "Fat loss: healthy and sustainable",
            "Muscle building: effective, goal-oriented support",
            "Lifestyle optimization: for conditions such as lipid metabolism disorders, diabetes, high blood pressure, or irritable bowel syndrome",
          ],
        },
      ],
      footer: "Ideal if you want to work with a structured action plan over 8-12 weeks.",
    },
    gold: {
      title: "Gold Nutrition Package - Intensive Support",
      description:
        "From 280 € per month - the Gold plan is ideal if you want intensive, close support for maximum results.",
      name: "Gold",
      subtitle: "Intensive support",
      price: "From 280 €",
      priceNote: "per month (minimum term: 2 months)",
      backgroundClassName: "bg-gradient-to-br from-[#fff9e6] to-[#fff3cc]",
      sections: [
        {
          title: "How it works",
          items: [
            "Initial assessment: 60 minutes via Zoom or in the practice - we define your goals and create your individual action plan.",
            "Individual plan: Within 2-3 days you receive your tailored action plan.",
          ],
        },
        {
          title: "Services included",
          items: [
            "Check-ins every two weeks via Zoom or in the practice",
            "Nutrition diary analysis and continuous optimization",
            "Action plan with 2 individual sample days and 8-week periodization",
            "Long-term planning and adjustments to reach your goals",
            "Support with shopping lists and meal planning",
            "Calculation of your individual calories and macronutrients",
            "Action adjustments every two weeks, optimized for your routine and goals",
            "Supplement guide with recommendations for supportive supplements",
          ],
        },
        {
          title: "Suitable for",
          items: [
            "Fat loss: with close support",
            "Muscle building: tailored to your needs",
            "Lifestyle optimization: for conditions such as lipid metabolism disorders, diabetes, high blood pressure, or irritable bowel syndrome",
          ],
        },
      ],
    },
  },
};

export function getNutritionPackageMetadata(locale: Locale, packageKey: PackageKey): Metadata {
  const packageContent = content[locale][packageKey];
  const canonical = paths[packageKey][locale];

  return {
    title: packageContent.title,
    description: packageContent.description,
    openGraph: {
      title: packageContent.title,
      description: packageContent.description,
      type: "website",
      url: canonical,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 600,
          alt: "Praxis Jona",
        },
      ],
    },
    alternates: {
      canonical,
      languages: {
        de: paths[packageKey].de,
        en: paths[packageKey].en,
        "x-default": paths[packageKey].de,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: packageContent.title,
      description: packageContent.description,
      images: ["/images/og-image.png"],
    },
  };
}

export default function NutritionPackagePage({
  locale,
  packageKey,
}: {
  locale: Locale;
  packageKey: PackageKey;
}) {
  const packageContent = content[locale][packageKey];
  const ctaLabel = locale === "de" ? "Termin buchen" : "Book appointment";

  return (
    <div className="overflow-hidden bg-white relative isolate">
      <SectionWithColor backgroundClassName="bg-white">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">
            {packageContent.title}
          </h1>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">{packageContent.description}</p>
        </div>
      </SectionWithColor>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`max-w-4xl mx-auto lg:mx-0 flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 ${packageContent.backgroundClassName} backdrop-blur-sm bg-opacity-50`}
        >
          <div>
            <h2 className="text-center text-2xl font-serif font-medium text-primary">{packageContent.name}</h2>
            <p className="mt-4 text-center text-sm text-primaryLighter">{packageContent.subtitle}</p>
            <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">{packageContent.price}</p>
            <p className="mt-4 text-center text-sm text-primary font-medium">{packageContent.priceNote}</p>

            <div className="mt-8 space-y-8">
              {packageContent.sections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-xl font-serif font-medium text-primary mb-4">{section.title}</h3>
                  {section.body ? <p className="text-primaryLighter">{section.body}</p> : null}
                  {section.items ? (
                    <ul className="space-y-4 text-primaryLighter">
                      {section.items.map((item) => (
                        <li className="flex items-start" key={typeof item === "string" ? item : item.title}>
                          <span className="mr-2">-</span>
                          {typeof item === "string" ? (
                            <span>{item}</span>
                          ) : (
                            <div>
                              <h4 className="font-bold">{item.title}</h4>
                              <p>{item.text}</p>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <a
              href={Constants.appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>

      {packageContent.footer ? (
        <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
          <SectionWithColor backgroundClassName="bg-lightBeige">
            <p className="mt-2 text-lg leading-8 text-primaryLighter">{packageContent.footer}</p>
          </SectionWithColor>
        </div>
      ) : null}

      <ConsultationPromise />
    </div>
  );
}
