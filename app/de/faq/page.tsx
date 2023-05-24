import { Metadata } from "next"
import { faqs_de } from "FAQs"


const title = "FAQs"
const description = "Häufig gestellte Fragen"

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/de/faq',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'MoneyCoach app screenshot'
      }
    ],
  },
  alternates: {
    canonical: '/faqs',
    languages: {
      en: "/faqs",
      it: "/it/domande-frequenti",
      de: "/de/faq"
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

export default function FaqsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Häufig gestellte Fragen</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
        Du hast eine andere Frage und kannst die Antwort nicht finden, die du suchst? Wende dich an unser Support-Team, indem du{' '}
          <a href="#" className="font-semibold text-primary hover:text-primaryDarker">
          uns eine E-Mail schicken
          </a>{' '}
          und wir melden uns bei dir, sobald wir können.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs_de.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}