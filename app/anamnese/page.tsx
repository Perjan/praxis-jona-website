import Link from "next/link";
import Image from "next/image";

import Logo from "/public/images/praxis-jona-web-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Locale = "de" | "en";

const formsCopy = {
  de: {
    title: "Formulare",
    intro: "Bitte wählen Sie das Formular aus, das Sie ausfüllen möchten.",
    forms: [
      {
        title: "Anamnesebogen",
        description: "Medizinische Vorgeschichte, Lebensstil, Einwilligung und Unterschrift.",
        href: "/anamnese/medical-history",
      },
      {
        title: "Impfaufklärung",
        description: "Aufklärung und Screening-Fragen vor einer Schutzimpfung.",
        href: "/anamnese/impfaufklaerung",
      },
    ],
    open: "Öffnen",
  },
  en: {
    title: "Forms",
    intro: "Please choose the form you would like to complete.",
    forms: [
      {
        title: "Medical History Form",
        description: "Medical history, lifestyle, consent, and signature.",
        href: "/en/anamnese/medical-history",
      },
      {
        title: "Vaccination Consent",
        description: "Consent and screening questions before vaccination.",
        href: "/en/anamnese/impfaufklaerung",
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
