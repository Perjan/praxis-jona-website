import { Metadata } from 'next'
import FeaturesSection from 'app/FeaturesSection'
import NewsletterSection, { defaultNewsletterSectionProps, italianNewsletterSectionProps } from 'app/NewsletterSection'
import MajorFeatureSection from 'app/MajorFeatureSection'
import HeroSection, { HeroConfig } from 'app/HeroSection'
import FeatureWithLargeScreenshotSection from 'app/FeatureWithLargeScreenshotSection'
import FeatureSectionWithProductScreenshotOnDark from 'app/FeatureSectionWithProductScreenshotOnDark'
import AppleWatchSection from 'app/AppleWatchSection'
import FeatureSectionWithProductScreenshotPanel from 'app/FeatureSectionWithProductScreenshotPanel'
import AppleLovesMoneyCoachSection from 'app/AppleLovesMoneyCoachSection'
import FaqSection from 'app/FaqSection'
import FinancialOverview from 'app/FinancialOverview'

import {
  PlusCircleIcon,
  BanknotesIcon,
  UserIcon,
  CalendarDaysIcon,
  AdjustmentsVerticalIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from '@heroicons/react/20/solid'

const heroConfig: HeroConfig = {
  downloadNowTitle: 'Scarica App',
  watchVideo: "Guarda il video",
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

const watchSectionFeatures = [
  {
    title: "Glanceable Insights",
    description: "Check how much money you have left to spend, how much you spent today and how much you spent this month.",
    image: "/images/watch2.png",
  },
  {
    title: "Glanceable Budgets",
    description: "Check how much money you have left to spend on specific budgets",
    image: "/images/watch1.png",
  },
  {
    title: "Glanceable Net Worth",
    description: "Check insights and get a read on all your accounts and net worth",
    image: "/images/watch3.png",
  },
]


const macSectionFeatures = [
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


const featuresSectionItems = [
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

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>
      <h1>Ciao Stronzo</h1>
      
      <HeroSection config={heroConfig} />

      <FinancialOverview features={features} />

      <FeatureWithLargeScreenshotSection
        subtitle="Smart Budgets"
        title="Save more money with personalized smart budgets"
        description="Set up “envelope” budgets that work for you. Limit your spending so that can save you up to 2.000 Euros every year."
        features={budgetSectionFeatures}
      />

      <MajorFeatureSection
        title='Add your cash expenses in seconds'
        description={'MoneyCoach is all about speed, personalization, and efficiency. You can add transactions in 3 seconds via the normal way. In 2 seconds via Quick Entry or in an instant via the Shortcuts.\n\nOr you can have Siri do all the heavy work with just one-tap.'}
        imageUrl='/images/addTransactions2.png'
      />

      <FeatureSectionWithProductScreenshotOnDark features={goalsSectionFeatures} />

      <AppleWatchSection
        title='MoneyCoach & Apple Watch'
        description='MoneyCoach e disponibile anche su Apple Watch. Con l’app per Apple Watch puoi tenere sotto controllo il tuo budget, le tue spese e il tuo patrimonio netto in un attimo.'
        features={watchSectionFeatures}
      />


      <FeatureSectionWithProductScreenshotPanel
        title="MoneyCoach for macOS"
        subtitle='A delightful experience on your Mac'
        description='Available on all Macs running macOS 12 Monterey or later.'
        features={macSectionFeatures}
      />

      <AppleLovesMoneyCoachSection
        description={"MoneyCoach has been featured multiple times worldwide on the App Stores for a number of years now. We have also been featured on Apple's website a couple of times. We made an appearance during both WWDC20 and WWDC21 keynotes. We also got a dedicated Developer Story on the App Store.\n\nCrazy, right?"}
      />

      <FeaturesSection
        features={featuresSectionItems}
        buttonTitle='View all features'
        href='/it/funzioni'
      />

      <FaqSection
        locale='it'
        title='Domande frequenti'
        buttonTitle='View all FAQs'
        href='/it/domande-frequenti'
      />

      <NewsletterSection props={italianNewsletterSectionProps} />

    </main>
  );
}