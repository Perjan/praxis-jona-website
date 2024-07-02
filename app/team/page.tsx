import Image from 'next/image';
import { Metadata } from 'next';
import DoctorSection from './DoctorSection';

const people = [
  {
    name: 'Frau Heike Schmeiche',
    role: 'Arzthelferin, seit 2011 in der Praxis tätig',
    imageUrl:
      '/images/team/heike.jpeg'
  },
  {
    name: 'Frau Kerstin Wawrzyniak',
    role: 'Arzthelferin, seit 2002  in der Praxis tätig',
    imageUrl:
      '/images/team/kerstin.jpeg'
  },
]


const title = 'Team'
const description = "Lerne unser Team kennen."
const url = '/team'

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
            de: url
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
    <div className="bg-white">
      <DoctorSection />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-20 text-2xl font-serif tracking-tight text-primary sm:text-3xl">MFAs</h2>
        <ul
          role="list"
          className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image className="w-32 rounded-2xl object-cover" src={person.imageUrl} width={200} height={200} alt="" />
              <h3 className="mt-6 text-xl font-serif leading-8 tracking-tight text-primary">{person.name}</h3>
              <p className="text-base leading-7 text-primaryLighter">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-32 mb-16 overflow-hidden sm:mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-serif tracking-tight text-primary sm:text-4xl">Praxis</h2>
              <p className="mt-6 text-xl font-medium leading-8 text-primaryLighter">
                Wir streben danach, dass unsere Patienten ein tiefes Gefühl des Wohlbefindens erleben. Hier, inmitten der sanften Umarmung der Ruhe, fördern wir eine Umgebung, in der Heilung gedeiht und Vitalität wiederhergestellt wird.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  src="/images/team/jonaEcho.jpeg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-full sm:w-64 flex-none justify-end self-end lg:w-auto">
                  <Image
                    src="/images/clinic/praxi2.jpeg"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    src="/images/clinic/praxi3.jpeg"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="hidden sm:block sm:w-full sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    src="/images/clinic/clinic-philosophie.jpeg"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
