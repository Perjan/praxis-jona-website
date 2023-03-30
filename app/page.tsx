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

// const inter = Inter({ subsets: ['latin'] })

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <LogoCloud />
      <MajorFeatureSection 
        title='Track all your accounts in one place'
        description= {'MoneyCoach grants you total control over all your accounts, cash included. Manually add and track all your offline bank accounts, savings accounts & credit cards. \n\nLog all incomes and expenses, and check your Net Worth in real time.'}
        imageUrl='/images/allAccounts.png'
      />
      <FeatureWithLargeScreenshotSection />
      <NewsletterSection />
    </main>
  );
}