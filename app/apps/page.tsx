import { Metadata } from "next";
import { appsDE } from 'app/data/appsDE';
import AppsPageBody from 'app/components/AppsPageComponents';

const title = "Unsere Apps"
const description = "Entdecken Sie unsere Auswahl an Gesundheits- und Wellness-Apps, die entwickelt wurden, um Sie auf Ihrem Weg zu besserer Gesundheit zu unterstützen."
const url = "/apps"

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
        alt: 'Praxis Jona Apps'
      }
    ],
  },
  alternates: {
    canonical: url,
    languages: {
      de: url,
      en: "/en/apps"
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
    <AppsPageBody title={title} description={description} apps={appsDE} />
  )
}