import { 
    UserIcon, 
    AdjustmentsVerticalIcon,
} from '@heroicons/react/20/solid'

import Image from 'next/image'

const sectionTitle = "Smart Goals"
const title = "Save up & achieve your dreams with smart goals"
const description = "MoneyCoach makes achieving your dreams easier. Quickly check how much money you need to save each day in order to achieve your goals within your deadline."

export default function FeatureSectionWithProductScreenshotOnDark(params: { features: any[] }) {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">{sectionTitle}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {params.features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/smartGoals.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
