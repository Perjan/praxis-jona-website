import ServicesSection from "app/components/ServicesSection";
import { Metadata } from "next";

const title = 'Leistungen der Praxis Jona in Berlin-Mitte'
const description = "Entdecken Sie das gesamte Leistungsspektrum der Praxis Jona: Allgemeinmedizin, Innere Medizin, Prävention und individuelle Diagnostik."
const url = "/leistungen"

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: url,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'Praxis Jona'
      }
    ],
  },
  alternates: {
    canonical: url,
    languages: {
      de: url,
      en: "/en/services"
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

export default function Page() {
    return (
        <>
            <h1 className="sr-only">Leistungen der Praxis Jona</h1>
            <ServicesSection language="de" />
        </>
    )
}
