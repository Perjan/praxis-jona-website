import type { ReactNode } from "react";
import SectionWithColor from "app/SectionWithColor";
import NutritionPricing from "app/components/NutritionPricing";

type NutritionMedicineLocale = "de" | "en";

const copy = {
  de: {
    title: "Ernährungsmedizinische Beratung",
    description:
      "Ernährung hat einen entscheidenden Einfluss auf unsere Gesundheit, unseren Stoffwechsel und unser Wohlbefinden. Gleichzeitig gibt es nicht die eine Ernährung, die für jeden Menschen gleichermaßen geeignet ist.",
    intro:
      "In unserer ernährungsmedizinischen Sprechstunde entwickeln wir deshalb gemeinsam mit Ihnen eine individuelle Ernährungsstrategie, die zu Ihrer gesundheitlichen Situation, Ihren persönlichen Zielen und Ihrem Alltag passt.",
    initialTitle: "60-minütiges Erstgespräch",
    initialIntro:
      "Im ausführlichen Erstgespräch analysieren wir Ihre aktuelle Ernährung und entwickeln gemeinsam einen individuellen Ernährungsplan.",
    initialIncludes: "Die Beratung beinhaltet:",
    initialItems: [
      "ausführliche Ernährungs- und Lebensstilanamnese",
      "Analyse Ihres Ernährungstagebuchs",
      "Ermittlung Ihres individuellen Kalorienbedarfs",
      "Ermittlung Ihres individuellen Proteinbedarfs",
      "Analyse Ihrer bisherigen Essgewohnheiten",
      "individuelle Ernährungsempfehlungen",
      "Festlegung realistischer und erreichbarer Ziele",
      "Erstellung eines persönlichen Ernährungsplans",
      "Empfehlungen zu Bewegung und Lebensstil",
    ],
    initialNote:
      "Vorhandene Laborwerte und bestehende Erkrankungen können bei der Erstellung Ihrer individuellen Empfehlungen berücksichtigt werden.",
    initialPrice: "Dauer: 60 Minuten | Kosten: 240,26 € nach GOÄ",
    followTitle: "30-minütiges Folgegespräch",
    followIntro:
      "Im Folgegespräch überprüfen wir gemeinsam Ihre Fortschritte und passen Ihre Ernährungsstrategie an.",
    followIncludes: "Wir besprechen:",
    followItems: [
      "Welche persönlichen Ziele konnten Sie erreichen?",
      "Was ließ sich gut in Ihren Alltag integrieren?",
      "Wo bestehen noch Schwierigkeiten?",
      "Analyse Ihres aktuellen Ernährungsprotokolls",
      "Anpassung Ihrer Ernährungsempfehlungen",
      "gegebenenfalls Anpassung des Kalorien- und Proteinbedarfs",
      "Festlegung der nächsten konkreten Ziele",
    ],
    followNote:
      "Für eine nachhaltige Ernährungsumstellung sind je nach Ausgangssituation in der Regel 3-5 Beratungen sinnvoll.",
    followPrice: "Dauer: 30 Minuten | Kosten: 120,65 € nach GOÄ",
    indicationsTitle: "Bei welchen Beschwerden und Erkrankungen ist eine Ernährungsberatung sinnvoll?",
    indicationsIntro: "Eine individuelle ernährungsmedizinische Beratung kann unter anderem sinnvoll sein bei:",
    indications: [
      "Übergewicht und Adipositas",
      "Schwierigkeiten bei der Gewichtsabnahme",
      "Insulinresistenz und Prädiabetes",
      "Diabetes mellitus Typ 2",
      "erhöhten Cholesterin- und Blutfettwerten",
      "Bluthochdruck",
      "Fettleber",
      "Schilddrüsenerkrankungen",
      "Reizdarm und anderen Magen-Darm-Beschwerden",
      "Untergewicht oder ungewolltem Gewichtsverlust",
      "Nahrungsmittelunverträglichkeiten",
      "dem Wunsch nach einer langfristig gesünderen Ernährung",
    ],
    indicationsNote:
      "Auch ohne bestehende Erkrankung kann eine ernährungsmedizinische Beratung sinnvoll sein, wenn Sie Ihre Ernährung gezielt optimieren möchten.",
    prepTitle: "So bereiten Sie sich auf Ihren Termin vor",
    prepIntro:
      "Damit wir Ihre aktuelle Ernährung möglichst genau beurteilen können, empfehlen wir Ihnen, vor dem Ersttermin für mehrere Tage ein Ernährungstagebuch zu führen.",
    prepIncludes: "Notieren Sie darin möglichst vollständig:",
    prepItems: ["Mahlzeiten und Snacks", "Getränke", "ungefähre Mengen", "Uhrzeiten"],
    prepNote: "Bringen Sie außerdem vorhandene aktuelle Laborbefunde und relevante medizinische Unterlagen zum Termin mit.",
    costsTitle: "Kosten und Erstattung",
    costsIntro: "Die ernährungsmedizinische Beratung wird nach der Gebührenordnung für Ärzte (GOÄ) berechnet.",
    costs: ["Erstgespräch, 60 Minuten: 240,26 €", "Folgegespräch, 30 Minuten: 120,65 €"],
    costsNote:
      "Eine vollständige oder teilweise Erstattung durch gesetzliche oder private Krankenversicherungen ist abhängig von der jeweiligen Krankenkasse beziehungsweise Ihrem individuellen Versicherungstarif und kann nicht garantiert werden.",
  },
  en: {
    title: "Nutritional Medicine Consultation",
    description:
      "Nutrition has a decisive influence on our health, metabolism and well-being. At the same time, there is no single diet that is equally suitable for every person.",
    intro:
      "In our nutritional medicine consultation, we therefore develop an individual nutrition strategy together with you that fits your health situation, personal goals and everyday life.",
    initialTitle: "60-minute initial consultation",
    initialIntro:
      "In the detailed initial consultation, we analyze your current nutrition and develop an individual nutrition plan together.",
    initialIncludes: "The consultation includes:",
    initialItems: [
      "detailed nutrition and lifestyle history",
      "analysis of your nutrition diary",
      "calculation of your individual calorie needs",
      "calculation of your individual protein needs",
      "analysis of your previous eating habits",
      "individual nutrition recommendations",
      "definition of realistic and achievable goals",
      "creation of a personal nutrition plan",
      "recommendations for movement and lifestyle",
    ],
    initialNote:
      "Existing laboratory values and current medical conditions can be taken into account when creating your individual recommendations.",
    initialPrice: "Duration: 60 minutes | Cost: €240.26 according to GOÄ",
    followTitle: "30-minute follow-up consultation",
    followIntro:
      "In the follow-up consultation, we review your progress together and adjust your nutrition strategy.",
    followIncludes: "We discuss:",
    followItems: [
      "Which personal goals were you able to achieve?",
      "What integrated well into your everyday life?",
      "Where are there still difficulties?",
      "Analysis of your current nutrition log",
      "Adjustment of your nutrition recommendations",
      "If needed, adjustment of calorie and protein needs",
      "Definition of the next concrete goals",
    ],
    followNote:
      "For sustainable nutrition change, 3-5 consultations are usually useful depending on the starting situation.",
    followPrice: "Duration: 30 minutes | Cost: €120.65 according to GOÄ",
    indicationsTitle: "For which symptoms and conditions can nutrition counseling be useful?",
    indicationsIntro: "Individual nutritional medicine consultation can be useful, among other things, for:",
    indications: [
      "overweight and obesity",
      "difficulty losing weight",
      "insulin resistance and prediabetes",
      "type 2 diabetes mellitus",
      "elevated cholesterol and blood lipid levels",
      "high blood pressure",
      "fatty liver",
      "thyroid disorders",
      "irritable bowel syndrome and other gastrointestinal symptoms",
      "underweight or unwanted weight loss",
      "food intolerances",
      "the desire for a healthier long-term diet",
    ],
    indicationsNote:
      "Even without an existing illness, nutritional medicine consultation can be useful if you want to optimize your nutrition in a targeted way.",
    prepTitle: "How to prepare for your appointment",
    prepIntro:
      "So that we can assess your current nutrition as accurately as possible, we recommend keeping a nutrition diary for several days before the initial appointment.",
    prepIncludes: "Please record as completely as possible:",
    prepItems: ["meals and snacks", "drinks", "approximate quantities", "times"],
    prepNote: "Please also bring any current laboratory findings and relevant medical documents to your appointment.",
    costsTitle: "Costs and reimbursement",
    costsIntro: "Nutritional medicine consultation is billed according to the German Medical Fee Schedule (GOÄ).",
    costs: ["Initial consultation, 60 minutes: €240.26", "Follow-up consultation, 30 minutes: €120.65"],
    costsNote:
      "Full or partial reimbursement by statutory or private health insurance depends on the respective health insurer or your individual insurance tariff and cannot be guaranteed.",
  },
} satisfies Record<NutritionMedicineLocale, Record<string, string | string[]>>;

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
      {items.map((item) => (
        <li key={item} className="mt-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter">{title}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}

export function getNutritionMedicinePageCopy(locale: NutritionMedicineLocale) {
  return copy[locale];
}

export default function NutritionMedicinePage({ locale }: { locale: NutritionMedicineLocale }) {
  const pageCopy = copy[locale];
  const buttonText = locale === "de" ? "Termin buchen" : "Book appointment";

  return (
    <div className="overflow-hidden bg-white relative isolate">
      <SectionWithColor backgroundClassName="bg-white">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{pageCopy.title}</h1>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">{pageCopy.description}</p>
          <p className="mt-4 text-lg leading-8 text-primaryLighter">{pageCopy.intro}</p>
        </div>
      </SectionWithColor>

      <NutritionPricing buttonText={buttonText} language={locale} />

      <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
        <SectionWithColor backgroundClassName="bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden">
          <ContentSection title={pageCopy.initialTitle}>
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.initialIntro}</p>
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.initialIncludes}</p>
            <BulletList items={pageCopy.initialItems} />
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.initialNote}</p>
            <p className="text-lg font-semibold leading-8 text-primaryLighter">{pageCopy.initialPrice}</p>
          </ContentSection>

          <ContentSection title={pageCopy.followTitle}>
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.followIntro}</p>
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.followIncludes}</p>
            <BulletList items={pageCopy.followItems} />
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.followNote}</p>
            <p className="text-lg font-semibold leading-8 text-primaryLighter">{pageCopy.followPrice}</p>
          </ContentSection>

          <ContentSection title={pageCopy.indicationsTitle}>
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.indicationsIntro}</p>
            <BulletList items={pageCopy.indications} />
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.indicationsNote}</p>
          </ContentSection>

          <ContentSection title={pageCopy.prepTitle}>
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.prepIntro}</p>
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.prepIncludes}</p>
            <BulletList items={pageCopy.prepItems} />
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.prepNote}</p>
          </ContentSection>

          <ContentSection title={pageCopy.costsTitle}>
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.costsIntro}</p>
            <BulletList items={pageCopy.costs} />
            <p className="text-lg leading-8 text-primaryLighter">{pageCopy.costsNote}</p>
          </ContentSection>
        </SectionWithColor>
      </div>
    </div>
  );
}
