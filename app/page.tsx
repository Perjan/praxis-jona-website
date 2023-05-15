import Image from 'next/image'
import { Metadata } from 'next'
import FeaturesSection from './FeaturesSection'
import LogoCloud from './LogoCloud'
import NewsletterSection from './NewsletterSection'
import MajorFeatureSection from './MajorFeatureSection'
import HeroSection, { HeroConfig } from './HeroSection'
import FeatureWithLargeScreenshotSection from './FeatureWithLargeScreenshotSection'
import FeatureSectionWithProductScreenshotOnDark from './FeatureSectionWithProductScreenshotOnDark'
import AppleWatchSection from './AppleWatchSection'
import FeatureSectionWithProductScreenshotPanel from './FeatureSectionWithProductScreenshotPanel'
import AppleLovesMoneyCoachSection from './AppleLovesMoneyCoachSection'
import FaqSection from './FaqSection'
import FinancialOverview from './FinancialOverview'

import { 
  PlusCircleIcon, 
  BanknotesIcon,
  UserIcon,
  CalendarDaysIcon,
  AdjustmentsVerticalIcon,
} from '@heroicons/react/20/solid'

const heroConfig: HeroConfig = {
  downloadNowTitle: 'Download App',
  watchVideo: "Watch Video",
}

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

const budgetSectionFeatures = [
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


const goalsSectionFeatures = [
  {
    name: 'Custom Goals.',
    description:
      'Set up a custom goal and start your journey towards achieving it. Set up a goal for that new console, phone, laptop, vacation, car, house, whatever and motivate yourself to save money and achieve your dreams.',
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: 'Digital Money Coaching.',
    description: 'Or you can go through the Personalized Goals flow. Your digital money coach will ask you what your short & long-term goals are plus if you have or not any ongoing debts and will take care of the rest.',
    icon: UserIcon,
  }
]

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>
      
      <HeroSection config={heroConfig} />

      <FinancialOverview features={features} />
      <FeatureWithLargeScreenshotSection features={budgetSectionFeatures} />

      <MajorFeatureSection 
        title='Add your cash expenses in seconds'
        description= {'MoneyCoach is all about speed, personalization, and efficiency. You can add transactions in 3 seconds via the normal way. In 2 seconds via Quick Entry or in an instant via the Shortcuts.\n\nOr you can have Siri do all the heavy work with just one-tap.'}
        imageUrl='/images/addTransactions2.png'
      />

      <FeatureSectionWithProductScreenshotOnDark features={goalsSectionFeatures} />

      <AppleWatchSection />

      <FeatureSectionWithProductScreenshotPanel />

      <AppleLovesMoneyCoachSection />

      <FeaturesSection />

      <FaqSection />
  
      <NewsletterSection />
      
    </main>
  );
}