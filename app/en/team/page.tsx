import Image from 'next/image';
import { Metadata } from 'next';
import DoctorSection from './DoctorSectionEN';
import { Constants } from 'app/Constants';

const people = [
  {
    name: 'Mrs. Constanze C. Buhrman',
    role: 'Specialist for Internal Medicine, Sports Medicine, Naturopathy, Chirotherapy, Acupuncture/TCM',
    imageUrl: '/images/team/avatar.jpeg'
  },
  {
    name: 'Mrs. Anja Garlin',
    role: 'Practice Manager',
    imageUrl: '/images/team/avatar.jpeg'
  },
  {
    name: 'Mrs. Heike Schmeiche',
    role: 'Medical assistant, working in the practice since 2011',
    imageUrl:
      '/images/team/heike-avatar.jpeg'
  },
  {
    name: 'Mrs. Kerstin Wawrzyniak',
    role: 'Medical assistant, working in the practice since 2002, certified autogenic trainer.',
    imageUrl:
      '/images/team/kerstin-avatar.jpeg'
  },
  {
    name: 'Mrs. Elhame Neziri',
    role: 'Medical Assistant (MFA)',
    imageUrl: '/images/team/avatar.jpeg'
  },
]


const title = 'Team'
const description = "Get to know our team."
const url = '/en/team'

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
            de: "/team",
            en: url,
            "x-default": "/team"
        }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

const teamPageSchemaEn = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${Constants.baseUrl}/en/team#webpage`,
  url: `${Constants.baseUrl}/en/team`,
  name: title,
  inLanguage: "en",
  mainEntity: {
    "@type": "Physician",
    "@id": `${Constants.baseUrl}/#physician`,
    name: "Dr. med. Jonida Gjolli",
    medicalSpecialty: [
      "Internal Medicine",
      "General Practice"
    ],
    worksFor: {
      "@id": `${Constants.baseUrl}/#organization`
    }
  }
};

export default function Page() {

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamPageSchemaEn) }}
      />
      <DoctorSection />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-20 text-2xl font-serif tracking-tight text-primary sm:text-3xl">Our Team</h2>
        <ul
          role="list"
          className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image className="w-full rounded-2xl object-cover" src={person.imageUrl} width={640} height={360} alt="" />
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
                We strive for our patients to experience a deep sense of well-being. Here, amidst the gentle embrace of tranquility, we foster an environment where healing thrives and vitality is restored.
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
                    src="/images/clinic/praxi-2-2025.jpg"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="hidden sm:block sm:w-full sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    src="/images/clinic/clinic-philo-2025.jpg"
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
