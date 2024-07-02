import ServicesSection from "./ServicesSection";
import { Metadata } from "next";

const title = 'Leistungen'
const description = "Anbei finden Sie eine Liste mit unseren Leistungen."
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
      de: url
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
            <ServicesSection />
        </>
    )
}