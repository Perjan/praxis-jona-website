import './globals.css'
import Header from './Header'
import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer';
import { Metadata } from 'next';
import { ReactToastWrapper } from './ToasterWrapper';
import { Constants } from './Constants';
import Script from 'next/script';
import Authors from './blog/authors/AuthorsDataSource';


const title = Constants.appName + " App Usage Tracker For iPhone & iPad"
const description = Constants.appName + " is an app for users who want to take control of their app usage and develop healthier digital habits."

export const metadata: Metadata = {
  metadataBase: new URL(Constants.baseUrl),
  title: {
    default: title,
    template: "%s"
  },
  description: description,
  authors: Authors.map((author) => ({
    name: author.name,
    url: author.url
  })),
  keywords: Constants.keywords,
  twitter: {
    title: title,
    description: description,
    site: Constants.appName,
    creator: "@perjanduro",
    card: "summary_large_image",
    images: ['/images/og-image.png']
  },
  openGraph: {
    title: title,
    siteName: Constants.appName,
    description: description,
    type: 'website',
    url: '/',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: Constants.appName + ' app screenshot'
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
    appId: Constants.appId,
    appArgument: 'rtst://'
  },
  appLinks: {
    ios: {
      app_name: Constants.appName,
      app_store_id: Constants.appId,
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
            data-website-id={Constants.umamiId}
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
