import { Metadata } from "next"
import { LegalIndexPage } from "app/legal/page"

export const metadata: Metadata = {
  title: "Imprint, Privacy & Legal",
  description: "Legal information for Praxis Jona in Berlin-Mitte, including imprint, privacy information, and legally binding notices.",
  alternates: {
    canonical: "/en/legal",
    languages: {
      de: "/legal",
      en: "/en/legal",
    },
  },
}

export default function Page() {
  return <LegalIndexPage locale="en" />
}
