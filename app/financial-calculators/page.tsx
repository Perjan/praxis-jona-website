import { Metadata } from 'next'
import Link from "next/link"
import { calculators } from "Calculators"


const title = 'Financial Calculators'
const description = 'Financial calculators are a great way to help you make informed decisions about your money. They can help you plan for the future, make the most of your money and make better financial decisions.'

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: '/financial-calculators',
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
      canonical: '/financial-calculators'
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
        <div className="bg-white sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Financial Calculators</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Financial calculators are a great way to help you make informed decisions about your money. They can help you plan for the future, make the most of your money and make better financial decisions.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {calculators.map((calculator) => (
                        <article
                            key={calculator.id}
                            className="relative duration-300 ease-in-out hover:scale-105 isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <img src={calculator.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/5" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <Link
                                    href={calculator.href}
                                    target="_blank" >
                                        <span className="absolute inset-0" />
                                    {calculator.title}
                                </Link>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h1 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Even More Calculators</h1>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">From mortgages to retirement plans, there are a lot of calculators that allow you to estimate the value of a loan or deposit from just about every financial product you might need.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="https://www.bankrate.com/calculators/" target="_blank" rel="noopener noreferrer" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore More</a>
                    </div>
                    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stop-color="#7775D6" />
                                <stop offset="1" stop-color="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
