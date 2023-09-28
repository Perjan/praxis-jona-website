import { Metadata } from 'next'
import FeaturesSection from './FeaturesSection'
import NewsletterSection, { defaultNewsletterSectionProps } from './NewsletterSection'
import MajorFeatureSection from './MajorFeatureSection'
import HeroSection, { HeroConfig, defaultHeroConfig, italianHeroConfig } from './HeroSection'
import FeatureWithLargeScreenshotSection from './FeatureWithLargeScreenshotSection'
import FeatureSectionWithProductScreenshotOnDark from './FeatureSectionWithProductScreenshotOnDark'
import AppleWatchSection from './AppleWatchSection'
import FeatureSectionWithProductScreenshotPanel from './FeatureSectionWithProductScreenshotPanel'
import AppleLovesMoneyCoachSection from './AppleLovesMoneyCoachSection'
import FaqSection from './FaqSection'
import FinancialOverview from './FinancialOverview'
import PressLogoCloud from './PressLogoCloud'

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
  UserGroupIcon,
  LinkIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'
import MajorFeatureSectionWithButton from './MajorFeatureSectionWithButton'
import { Constants } from './Constants'

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
    description: 'Food, Drinks, Entertainment, Tech, Video Games, whatever. Create an "envelope" budget tracking one or more specific categories, stick to this budget and save more money.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Budgets for every occasion.',
    description: 'Vacation? Business trip? Holiday? Christmas is coming? Just create a budget, select what categories your would like to track, stick to this budget and save more money each time',
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
    description: "Check how much money you have spent and left to spend today.",
    image: "/images/watch1-new.png",
  },
  {
    title: "Glanceable Budgets",
    description: "Check how much money you have left to spend on specific budgets",
    image: "/images/watch2-new.png",
  },
  {
    title: "One Tap Shortcuts",
    description: "Add transactions directly from the watch with only one tap",
    image: "/images/watch3-new.png",
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

const familySyncFeatures = [
  {
    name: 'Shared Experience.',
    description:
      'Share your data with your wife, husband or partner and have one unified experience where you can see your shared accounts, budgets, goals etc.',
    icon: LinkIcon,
  },
  {
    name: 'Personal Overview.',
    description: 'Although everything is shared, each user can personalize their own Overview by selecting which accounts to show or hide.',
    icon: RectangleGroupIcon,
  }
]

const featuresSectionItems = [
  {
    name: 'Family Sync',
    description:
      'Share your data with your wife, husband. partner or any other user using different Apple IDs.',
    icon: UserGroupIcon,
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
    name: 'Multi-currency Support',
    description:
      'MoneyCoach is perfect for those who have accounts in multiple currencies. See much is your Net Worth, converted in real time.',
    icon: CloudArrowUpIcon,
  }
]

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MoneyCoach - Budget Planner & Personal Finance",
  "operatingSystem": "iOS, macOS, iPadOS, watchOS",
  "applicationCategory": "FinanceApplication",
  "downloadUrl": Constants.downloadUrl,
  "featureList": Constants.baseUrl + "/features",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "11000"
  }
}

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>

      <script type="application/ld+json" dangerouslySetInnerHTML={
        { __html: JSON.stringify(jsonLdSchema) }
      }>
      </script>

      <HeroSection config={defaultHeroConfig} />

      <PressLogoCloud
        title='Some of the recent media coverage'
      />

      <FeatureSectionWithProductScreenshotPanel
        title="Share your data with your partner"
        subtitle='Family Sync'
        description='Available on MoneyCoach 8.6 or later.'
        image="/images/familySyncHeroNew.png"
        features={familySyncFeatures}
      />

      <MajorFeatureSectionWithButton
        title="Import Apple Pay / Wallet Transactions (Beta)"
        description={"Automatically import transactions from Apple Pay / Wallet via a Shortcut Automation. Then once you make a payment with any of your cards, that transaction will be automatically added to MoneyCoach.\n\nSetting up the Shortcut Automation only takes a minute and you only need to do it once."}
        url='/guides/how-to-import-apple-pay-wallet-transactions-to-moneycoach'
        imageUrl='/images/apple-pay-wallet-import.png'
      />

      <FinancialOverview
        subtitle="Complete Overview"
        title="Track all your accounts in one place"
        description="MoneyCoach grants you total control over all your accounts, cash included."
        features={features}
      />

      <FeatureWithLargeScreenshotSection
        subtitle="Smart Budgets"
        title="Save more money with personalized smart budgets"
        description="Set up 'envelope' budgets that work for you. Limit your spending so that can save you up to 2.000 Euros every year."
        features={budgetSectionFeatures}
      />

      <MajorFeatureSection
        title='Add your cash expenses in seconds'
        description={'MoneyCoach is all about speed, personalization, and efficiency. You can add transactions in 3 seconds via the normal way. In 2 seconds via Quick Entry or in an instant via the Shortcuts.\n\nOr you can have Siri do all the heavy work with just one-tap.'}
        imageUrl='/images/addTransactions2.png'
      />

      <FeatureSectionWithProductScreenshotOnDark
        subtitle="Smart Goals"
        title="Save up & achieve your dreams with smart goals"
        description="MoneyCoach makes achieving your dreams easier. Quickly check how much money you need to save each day in order to achieve your goals within your deadline."
        features={goalsSectionFeatures}
      />

      <AppleWatchSection
        title='MoneyCoach on Apple Watch'
        description='A money management app that puts your finances on your wrist. Check your budgets, accounts, net worth and more on the go.'
        features={watchSectionFeatures}
      />

      <FeatureSectionWithProductScreenshotPanel
        title="MoneyCoach for macOS"
        subtitle='A delightful experience on your Mac'
        image="/images/moneyCoachOnMacNew.png"
        description='Available on all Macs running macOS 12 Monterey or later.'
        features={macSectionFeatures}
      />

      <AppleLovesMoneyCoachSection
        description={"MoneyCoach has been featured multiple times worldwide on the App Stores for a number of years now. We have also been featured on Apple's website a couple of times. We made an appearance during both WWDC20 and WWDC21 keynotes. We also got a dedicated Developer Story on the App Store.\n\nCrazy, right?"}
      />


      <FeaturesSection
        features={featuresSectionItems}
        title='MoneyCoach has a ton of helpful and powerful features.'
        sectionTitle='Packed with features'
        buttonTitle='View all features'
        href='/features'
      />

      <FaqSection
        locale='en'
        title='Frequently asked questions'
        buttonTitle='View all FAQs'
        href='/faqs'
      />

      <NewsletterSection props={defaultNewsletterSectionProps} />

    </main>
  );
}