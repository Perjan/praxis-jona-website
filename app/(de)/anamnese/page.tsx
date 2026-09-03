import Link from "next/link";
import Image from "next/image";

import Logo from "/public/images/praxis-jona-web-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Locale = "de" | "en";

const formsCopy = {
  de: {
    title: "Formulare",
    intro: "Bitte wählen Sie das passende Praxisdokument aus.",
    forms: [
      {
        title: "Longevity-Anamnesebogen",
        description: "Medizinische Vorgeschichte, Lebensstil, Einwilligung und Unterschrift.",
        source: "Quelle: Longevity_Anamnesebogen",
        href: "/anamnese/medical-history",
      },
      {
        title: "Impfaufklärung",
        description: "Aufklärung und Screening-Fragen vor einer Schutzimpfung.",
        source: "Quelle: Impfaufklärung J. Gjolli",
        href: "/anamnese/impfaufklaerung",
      },
      {
        title: "Aufklärung Eiseninfusion",
        description: "Einverständniserklärung und Behandlungsaufklärung vor einer Eiseninfusion.",
        source: "Quelle: Aufklaerung_und_Behandlungsvertrag_Eisen",
        href: "/anamnese/eiseninfusion",
      },
      {
        title: "Schilddrüsen-Diagnostik & Datenschutz",
        description: "Fragebogen zur Schilddrüsenuntersuchung und Einwilligung in die Datenweitergabe.",
        source: "Quelle: AnamnesebogenSD_und_Datenschutz",
        href: "/anamnese/schilddruesen-diagnostik",
      },
    ],
    open: "Öffnen",
  },
  en: {
    title: "Forms",
    intro: "Please choose the matching practice document.",
    forms: [
      {
        title: "Longevity Medical History Form",
        description: "Medical history, lifestyle, consent, and signature.",
        source: "Source: Longevity_Anamnesebogen",
        href: "/en/anamnese/medical-history",
      },
      {
        title: "Vaccination Consent",
        description: "Consent and screening questions before vaccination.",
        source: "Source: Impfaufklärung J. Gjolli",
        href: "/en/anamnese/impfaufklaerung",
      },
      {
        title: "Iron Infusion Consent",
        description: "Consent and treatment information before an iron infusion.",
        source: "Source: Aufklaerung_und_Behandlungsvertrag_Eisen",
        href: "/en/anamnese/eiseninfusion",
      },
      {
        title: "Thyroid Diagnostics & Data Consent",
        description: "Thyroid examination questionnaire and consent to data transfer.",
        source: "Source: AnamnesebogenSD_und_Datenschutz",
        href: "/en/anamnese/thyroid-diagnostics",
      },
    ],
    open: "Open",
  },
} as const;

export default function FormsEntryPage({ locale = "de" }: { locale?: Locale } = {}) {
  const copy = formsCopy[locale];

  return (
    <main className="min-h-screen bg-muted px-4 py-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        <div className="flex justify-center">
          <Image src={Logo} alt="Praxis Jona Logo" className="h-16 w-auto object-contain" priority />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-foreground">{copy.title}</h1>
          <p className="mt-3 text-base text-muted-foreground">{copy.intro}</p>
        </div>
        <div className="grid gap-4">
          {copy.forms.map((form) => (
            <Card key={form.href}>
              <CardHeader>
                <CardTitle>{form.title}</CardTitle>
                <CardDescription>{form.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{form.source}</p>
                <Button asChild className="w-full">
                  <Link href={form.href} aria-label={`${form.title} ${copy.open}`}>
                    {copy.open}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
