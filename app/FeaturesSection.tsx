import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const sectionTitle = "Packed with features"
const title = "MoneyCoach has a ton of helpful and powerful features."
const description = ""

const features = [
  {
    name: 'Multi-currency Support',
    description:
      'MoneyCoach is perfect for those who have accounts in multiple currencies. See much is your Net Worth, converted in real time.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Smart Budgets & Goals',
    description:
      'Create smart budgets to stay on budget and smart goals to motivate yourself to save more money!',
    icon: LockClosedIcon,
  },
  {
    name: 'Deep iOS integration',
    description:
      'Enter transactions via Siri. Check your finances on your Lock/Home Screen via Widgets and Live Activies and so much more.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Extremely personalizable',
    description:
      'You can customize MoneyCoach to your liking. Show or hide the Overview cards, sort them how you like, change the app icon, app tint and more.',
    icon: FingerPrintIcon,
  },
]

export default function FeaturesSection() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">{sectionTitle}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900 capitalize">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-0 flex items-center justify-center gap-x-6">
        <a href="/features" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white capitalize">View all features</a>
      </div>
    </>
  )
}