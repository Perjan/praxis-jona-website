import './globals.css'
import Header from './Header'
import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer';
import { Metadata } from 'next';
import { ReactToastWrapper } from './ToasterWrapper';

export const metadata: Metadata = {
  title: {
    default: "MoneyCoach - Budgeting App",
    template: "%s | MoneyCoach - Budgeting App"
  },
  description: "MoneyCoach is a personal finance app that helps you manage your money, budget, and track your spending.",
  twitter: {
    // handle: "@appmoneycoach"
    site: "@appmoneycoach",
    // cardType: "summary_large_image"
  },
  openGraph: {
    title: 'MoneyCoach - Budgeting App',
    url: 'https://moneycoach.ai',
    images: [
      {
        url: 'https://moneycoach.ai/images/og-image.png',
        width: 800,
        height: 600,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appLinks: {

    ios: {
      app_name: 'MoneyCoach',
      app_store_id: '989642198',
      url: 'https://apps.apple.com/us/app/moneycoach-budget-spendings/id989642198',
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReactToastWrapper>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ReactToastWrapper>
      </body>
    </html>
  )
}
