import ContactSection from "app/Contact";
import { Metadata } from "next";

const title = 'Service & Kontakt'
const description = "Praxis Jona - Gemeinschaftspraxis für Allgemeinmedizin, innere Medizin und Naturheilkunde. Nutzen Sie unsere Online Services bequem von zuhause aus oder nehmen Sie gerne direkt Kontakt zu uns auf."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/kontakt',
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
    canonical: '/kontakt',
    languages: {
      en: '/kontakt'
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
      <div className="bg-white mt-2 sm:mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
            <h2 className="mt-2 text-lg leading-8 text-primaryLighter">"Praxis Jona - Gemeinschaftspraxis für Allgemeinmedizin, innere Medizin und Naturheilkunde.</h2>

            <h2 className="mt-2 text-lg leading-8 text-primaryLighter">Nutzen Sie unsere Online Services bequem von zuhause aus oder nehmen Sie gerne direkt Kontakt zu uns auf.</h2>
          </div>
          <div className="mt-20">
            <ContactSection />
          </div>
          
        </div>
      </div>
      </>
    )
  }