import ContactSection from "app/Contact";
import { Metadata } from "next";

const title = 'Contact'
const description = "We're here to help you get the most out of our digital detox app. Whether you're having trouble setting up an app or you need some assistance with managing your screentime, our team is here to lend a hand."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/contact',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'Realtime Screen Time app screenshot'
      }
    ],
  },
  alternates: {
    canonical: '/contact',
    languages: {
      en: '/contact'
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
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h1>
            <h2 className="mt-2 text-lg leading-8 text-gray-600">We're here to help you get the most out of our digital detox app. Whether you're having trouble setting up an app or you need some assistance with managing your screentime, our team is here to lend a hand.</h2>

            <h2 className="mt-2 text-lg leading-8 text-gray-600">So, if you have any questions, feedback or suggestions, please don't hesitate to fill out the form below. We'll get back to you as soon as possible, and we promise to do everything we can to help you stop wasting your time.</h2>

            <h2 className="mt-2 text-lg leading-8 text-gray-600">Thank you for choosing Realtime Screen Time – we're excited to be a part of your wellbeing journey!</h2>
          </div>
          <div className="mt-20">
            <ContactSection />
          </div>
          
        </div>
      </div>
      </>
    )
  }