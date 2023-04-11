import ContactSection from "app/Contact";
import { Metadata } from "next";

const title = 'Support'
const description = 'We\'re here to help you get the most out of our budgeting and personal finance app. Whether you\'re having trouble setting up your account or you need some assistance with managing your budget, our team is here to lend a hand.',

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/support',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'MoneyCoach app screenshot'
      }
    ],
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
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support</h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">We're here to help you get the most out of our budgeting and personal finance app. Whether you're having trouble setting up your account or you need some assistance with managing your budget, our team of financial experts is here to lend a hand.</p>
            <p className="mt-2 text-lg leading-8 text-gray-600">We believe that managing your finances should be stress-free and easy, which is why we've designed our app to be as user-friendly as possible. But we understand that sometimes you might still have questions or issues, and that's where we come in!</p>

            <p className="mt-2 text-lg leading-8 text-gray-600">So, if you have any questions, feedback or suggestions, please don't hesitate to fill out the form below. We'll get back to you as soon as possible, and we promise to do everything we can to help you achieve your financial goals.</p>

            <p className="mt-2 text-lg leading-8 text-gray-600">Thank you for choosing MoneyCoach – we're excited to be a part of your financial journey!</p>
          </div>
          <div className="mt-20">
            <ContactSection />
          </div>
          
        </div>
      </div>
      </>
    )
  }