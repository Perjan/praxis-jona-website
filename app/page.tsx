import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import FeaturesSection from './FeaturesSection'
import LogoCloud from './LogoCloud'
import NewsletterSection from './NewsletterSection'
import MajorFeatureSection from './MajorFeatureSection'
import HeroSection from './HeroSection'

// const inter = Inter({ subsets: ['latin'] })

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-bold underline'>Home Page</h1>
      <HeroSection />
      <FeaturesSection />
      <LogoCloud />
      <MajorFeatureSection />
      <MajorFeatureSection />
      <MajorFeatureSection />
      <NewsletterSection />
    </main>
  );
}