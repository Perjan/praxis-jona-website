import ServicesSection from "app/components/ServicesSection";
import { Metadata } from "next";

const title = 'Medical Services at Praxis Jona Berlin'
const description = "Explore our full range of services at Praxis Jona, including internal medicine, diagnostics, prevention, and personalized care plans."
const url = "/en/services"

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
            de: '/leistungen',
            en: url,
            "x-default": '/leistungen'
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
            <h1 className="sr-only">Medical Services at Praxis Jona</h1>
            <ServicesSection language="en" />
        </>
    )
}
