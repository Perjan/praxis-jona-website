import ContactSection from "app/Contact";
import { Constants } from "app/Constants";
import { Metadata } from "next";

const title = 'Service & Kontakt'
const description = "Praxis Jona - Praxis für Allgemeinmedizin, Innere Medizin mit Schwerpunkt Schilddrüse, Hypertensiologie, Lipidologie. Nehmen Sie gerne direkt Kontakt zu uns auf."
const url = "/kontakt"

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
            en: "/en/contact",
            "x-default": url
        }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${Constants.baseUrl}/kontakt#webpage`,
  url: `${Constants.baseUrl}/kontakt`,
  name: title,
  inLanguage: "de",
  mainEntity: {
    "@type": "MedicalClinic",
    "@id": `${Constants.baseUrl}/#organization`,
    name: "Praxis Jona",
    telephone: "+49-30-40054273",
    email: Constants.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Torstraße 125",
      postalCode: "10119",
      addressLocality: "Berlin",
      addressCountry: "DE"
    }
  }
};

export default function Page() {

    return (
      <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="bg-white mt-2 sm:mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
            <h2 className="mt-2 text-lg leading-8 text-primaryLighter">Praxis Jona - Praxis für Allgemeinmedizin, Innere Medizin mit Schwerpunkt Schilddrüse, Hypertensiologie, Lipidologie.</h2>
            <h2 className="mt-2 text-lg leading-8 text-primaryLighter">Nehmen Sie gerne direkt Kontakt zu uns auf.</h2>
          </div>
          <div className="mt-20">
            <ContactSection />
          </div>
          
        </div>
      </div>
      </>
    )
  }
