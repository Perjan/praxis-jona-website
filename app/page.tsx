import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import FeaturesSection from './FeaturesSection'
import LogoCloud from './LogoCloud'
import NewsletterSection from './NewsletterSection'
import MajorFeatureSection from './MajorFeatureSection'
import HeroSection from './HeroSection'
import FeatureWithLargeScreenshotSection from './FeatureWithLargeScreenshotSection'
import FeatureSectionWithProductScreenshotOnDark from './FeatureSectionWithProductScreenshotOnDark'
import AppleWatchSection from './AppleWatchSection'
import FeatureSectionWithProductScreenshotPanel from './FeatureSectionWithProductScreenshotPanel'
import AppleLovesMoneyCoachSection from './AppleLovesMoneyCoachSection'

// const inter = Inter({ subsets: ['latin'] })

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoCloud />
      <MajorFeatureSection 
        title='Track all your accounts in one place'
        description= {'MoneyCoach grants you total control over all your accounts, cash included. Manually add and track all your offline bank accounts, savings accounts & credit cards. \n\nLog all incomes and expenses, and check your Net Worth in real time.'}
        imageUrl='/images/allAccounts.png'
      />
      <FeatureWithLargeScreenshotSection />

      <MajorFeatureSection 
        title='Add your cash expenses in seconds'
        description= {'MoneyCoach is all about speed, personalization, and efficiency. You can add transactions in 3 seconds via the normal way. In 2 seconds via Quick Entry or in an instant via the Shortcuts.\n\nOr you can have Siri do all the heavy work with just one-tap.'}
        imageUrl='/images/addTransactions2.png'
      />

      <FeatureSectionWithProductScreenshotOnDark />

      <AppleWatchSection />

      <FeatureSectionWithProductScreenshotPanel />

      <AppleLovesMoneyCoachSection />

      <FeaturesSection />
  
      <NewsletterSection />
    </main>
  );
}