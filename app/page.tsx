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

const heroConfig: HeroConfig = {
  downloadNowTitle: 'Download App',
}

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>
      
      <HeroSection config={heroConfig} />
      {/* <LogoCloud /> */}
      <FinancialOverview />
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

      <FaqSection />
  
      <NewsletterSection />
      
    </main>
  );
}