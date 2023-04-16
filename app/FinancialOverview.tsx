import { 
    PlusCircleIcon, 
    BanknotesIcon,
} from '@heroicons/react/20/solid'

import Image from 'next/image'

const sectionTitle = "Complete Overview"
const title = "Track all your accounts in one place"
const description = "MoneyCoach grants you total control over all your accounts, cash included."
import HeroImage from "/public/images/moneyCoachAccounts.png"

const features = [
  {
    name: 'Bank, Cash, Credit Cards.',
    description: 'Manually add and track all your offline bank accounts, savings accounts & credit cards.',
    icon: BanknotesIcon,
  },
  {
    name: 'Track Your Spendings.',
    description: 'Log all incomes and expenses, and check your Net Worth in real time.',
    icon: PlusCircleIcon,
  }
]

export default function FinancialOverview() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-12">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">{sectionTitle}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
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
            src={HeroImage}
            alt="MoneyCoach Product screenshot"
            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
            priority
          />
        </div>
      </div>
    </div>
  )
}