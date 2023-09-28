import './globals.css'
import Header from './Header'
import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer';
import { Metadata } from 'next';
import { ReactToastWrapper } from './ToasterWrapper';
import { Constants } from './Constants';
import Script from 'next/script';
import { Auth } from 'firebase-admin/lib/auth/auth';
import Authors from './blog/authors/AuthorsDataSource';

const title = "MoneyCoach - Modern Money Manager And Budgeting App"
const description = "MoneyCoach is a personal finance app that helps you manage your money, budget, and track your spending. Available for iPhone, iPad, Mac and Apple Watch."

export const metadata: Metadata = {
  metadataBase: new URL(Constants.baseUrl),
  title: {
    default: title,
    template: "%s"
  },
  description: description,
  authors: [
    {
      name: Authors[0].name,
      url: Authors[0].url
    },
    {
      name: Authors[1].name,
      url: Authors[1].url
    },
  ],
  keywords: ["budgeting app", "money management app", "pfm app", "cash tracking app", "family budgeting app", "financial management app"],
  alternates: {
    canonical: '/',
    languages: {
      en: "/",
      it: "/it",
      de: "/de"
    }
  },
  twitter: {
    title: title,
    description: description,
    site: "MoneyCoach",
    creator: "@appmoneycoach",
    card: "summary_large_image",
    images: ['/images/og-image.png']
  },
  openGraph: {
    title: title,
    siteName: 'MoneyCoach',
    description: description,
    type: 'website',
    url: '/',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'MoneyCoach app screenshot'
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
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  itunes: {
    appId: '989642198',
    appArgument: 'moneycoach2://'
  },
  appLinks: {
    ios: {
      app_name: 'MoneyCoach',
      app_store_id: '989642198',
      url: Constants.downloadUrl
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Script
            src="https://analytics.moneycoach.ai/script.js"
            data-website-id="f410c533-9a4a-48eb-90f3-c9cea78368a9"
            strategy="lazyOnload"
          />
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
