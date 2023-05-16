import { faqs_it } from "FAQs"
import { Metadata } from "next"


const title = "FAQs"
const description = "Domande Frequenti"

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/it/domande-frequenti',
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
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Le domande più frequenti</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
        Hai una domanda diversa e non riesci a trovare la risposta che cerchi? Contatta il nostro team di assistenza{' '}
          <a href="#" className="font-semibold text-primary hover:text-primaryDarker">
          inviandoci un'e-mail
          </a>{' '}
          e ti risponderemo il prima possibile.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs_it.map((faq) => (
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