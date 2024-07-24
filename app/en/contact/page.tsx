import ContactSection from "app/ContactEN";
import { Metadata } from "next";

const title = 'Service & Contact'
const description = "Praxis Jona - Practice for general medicine, internal medicine with a focus on thyroid, hypertensiology, lipidology. Please feel free to contact us directly."
const url = "/en/contact"

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
      de: "/kontakt",
      en: url
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
            <h2 className="mt-2 text-lg leading-8 text-primaryLighter">Praxis Jona - Practice for General Medicine, Internal Medicine with a focus on Thyroid, Hypertension and Lipidology.</h2>
            <h2 className="mt-2 text-lg leading-8 text-primaryLighter">Please feel free to contact us directly.</h2>
          </div>
          <div className="mt-20">
            <ContactSection />
          </div>
          
        </div>
      </div>
      </>
    )
  }