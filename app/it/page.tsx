import { Metadata } from 'next'
import FeaturesSection from 'app/FeaturesSection'
import NewsletterSection from 'app/NewsletterSection'
import MajorFeatureSection from 'app/MajorFeatureSection'
import HeroSection from 'app/HeroSection'
import FeatureWithLargeScreenshotSection from 'app/FeatureWithLargeScreenshotSection'
import FeatureSectionWithProductScreenshotOnDark from 'app/FeatureSectionWithProductScreenshotOnDark'
import AppleWatchSection from 'app/AppleWatchSection'
import FeatureSectionWithProductScreenshotPanel from 'app/FeatureSectionWithProductScreenshotPanel'
import AppleLovesMoneyCoachSection from 'app/AppleLovesMoneyCoachSection'
import FaqSection from 'app/FaqSection'
import FinancialOverview from 'app/FinancialOverview'

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>
      <h1>Ciao Stronzo</h1>
      <HeroSection />
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