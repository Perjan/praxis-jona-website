
import { Metadata } from 'next';
import Image from 'next/image';

const imageWidth = 408;
const imageHeight = 513;

const title = 'Affiliate Marketing | MoneyCoach'
const description = "Sharing MoneyCoach with your audience."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/affiliate',
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
    canonical: '/affiliate',
    languages: {
      en: '/affiliate',
      it: '/it/marketing-di-affiliazione',
      de: '/de/partnermarketing',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

export default function PressKit() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Affiliate Marketing</h1>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              <p>If you’d like to share MoneyCoach, or any of our <a href="/company"><b>other apps</b></a>, with a larger audience (Blog Post / Podcast / YouTube Video / TikTok / Instagram / etc.), please <a target="_blank" rel='noopener noreferrer nofollow' href="mailto:info@moneycoach.ai"><b>get in touch</b></a> and I’ll equip you with a special affiliate link.</p>
              <br />
              <p>You’ll get 15% of all revenue generated through your affiliate link (for subscriptions, only for the first period).</p>
              <br />
              <p>If you need special marketing material, please take a look at our <a href="/company/press-kit"><b>Press Kit</b></a>.
                <br />Furthermore, we're always happy to assist if you need any MoneyCoach related resources.</p>
            </div>
            <div className="py-12 items-center sm:justify-center">
              <a
                href="mailto:info@moneycoach.ai"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Image className="mx-auto object-center lg:max-h-96 lg:max-w-sm"
              width={483}
              height={853}
              src="/images/moco-press-love.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}