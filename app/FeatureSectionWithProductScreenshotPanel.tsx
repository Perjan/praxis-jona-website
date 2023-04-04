import { CpuChipIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const sectionTitle = "MoneyCoach for macOS"
const title = "A delightful experience on your Mac"
const description = "Available on all Macs running macOS 12 Monterey or later."

const features = [
  {
    name: 'Mac first.',
    description:
      'MoneyCoach on Mac was designed as a true Mac app. Supporting all of the great Mac features like sidebars, keyboard shortcuts, touch bar shortcuts etc. MoneyCoach is extremely powerful on a Mac.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Apple ecosystem.',
    description: 'This is for the Apple enthusiasts. Now you can use MoneyCoach on your Apple Watch, iPhone, iPad, HomePod and Mac seamlessly via Data Sync.',
    icon: CpuChipIcon,
  }
]

export default function FeatureSectionWithProductScreenshotPanel() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{sectionTitle}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden p-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/images/moneyCoachOnMac.png"
            alt="MoneyCoach Mac Screenshot"
            className="mb-[-12%] rounded-xl"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
