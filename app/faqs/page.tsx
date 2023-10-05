import { faqs } from "FAQs"
import { Metadata } from "next"


const title = "FAQs"
const description = "Frequently Asked Questions"

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/faqs',
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
        <h1 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently Asked Questions</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Have a different question and can’t find the answer you’re looking for? Reach out to our support team by <a href="mailto:info@appscreentime.com" className="font-semibold text-primary hover:text-primaryDarker">sending us an email</a> and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900"><h2>{faq.question}</h2></dt>
                <dd className="mt-2 text-base leading-7 text-gray-600"><h3>{faq.answer}</h3></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}