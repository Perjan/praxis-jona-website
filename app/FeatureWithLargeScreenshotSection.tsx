import {
  BanknotesIcon,
  UserIcon,
  CalendarDaysIcon,
} from '@heroicons/react/20/solid'

import Image from 'next/image'

const sectionTitle = "Smart Budgets"
const title = "Save more money with personalized smart budgets"
const description = "Set up “envelope” budgets that work for you. Limit your spending so that can save you up to 2.000 Euros every year."

const features = [
  {
    name: 'Personalized budgets.',
    description: 'Budgets made tailored for you. Tell MoneyCoach what you spend on average each month and it will set you up with personalized budgets that will save you a lot of money each month',
    icon: UserIcon,
  },
  {
    name: 'Budgets for every day.',
    description: 'Food, Drinks, Entertainment, Tech, Video Games, whatever. Create an “envelope” budget tracking one or more specific categories, stick to this budget and save more money.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Budgets for every occasion.',
    description: ' Vacation? Business trip? Holiday? Christmas is coming? Just create a budget, select what categories your would like to track, stick to this budget and save more money each time',
    icon: BanknotesIcon,
  }
]

export default function FeatureWithLargeScreenshotSection() {
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
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/images/smartBudgets.png"
            alt="MoneyCoach Budgeting App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
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