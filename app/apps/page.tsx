import { Metadata } from "next";
import Image from 'next/image';
import { appsDE } from 'app/data/appsDE';

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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {appsDE.map((app) => (
              <div key={app.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  {app.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-primaryLighter">
                  <Image src={app.image} alt={app.name} width={300} height={300} className="mb-4 rounded-lg" />
                  <p className="flex-auto">{app.description}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {app.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 flex gap-4">
                    {typeof app.downloadLink === 'string' ? (
                      <a href={app.downloadLink} className="text-sm font-semibold leading-6 text-primary">
                        Jetzt Herunterladen <span aria-hidden="true">→</span>
                      </a>
                    ) : 'website' in app.downloadLink ? (
                      <>
                        <a href={app.downloadLink.website} className="text-sm font-semibold leading-6 text-primary">
                          Website <span aria-hidden="true">→</span>
                        </a>
                        <a href={app.downloadLink.ios} className="text-sm font-semibold leading-6 text-primary">
                          iOS <span aria-hidden="true">→</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <a href={app.downloadLink.android} className="text-sm font-semibold leading-6 text-primary">
                          Android <span aria-hidden="true">→</span>
                        </a>
                        <a href={app.downloadLink.ios} className="text-sm font-semibold leading-6 text-primary">
                          iOS <span aria-hidden="true">→</span>
                        </a>
                      </>
                    )}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}