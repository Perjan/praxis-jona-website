import { Metadata } from "next";
import { appsDE } from 'app/data/appsDE';
import { AppCard } from 'app/components/AppComponents';

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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {appsDE.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}