import './globals.css'
import Header from './Header'
import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer';
import { Metadata } from 'next';
import { ReactToastWrapper } from './ToasterWrapper';
import { Constants } from './Constants';
import Script from 'next/script';
import Authors from './blog/authors/AuthorsDataSource';


const title = "Praxis Jona"
const description = "Ganzheitliche Betreuung für ein gesundes Leben – Bei uns bist Du mehr als nur ein weiterer Patient"

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
  alternates: {
    canonical: '/',
    languages: {
      de: "/",
      en: "/en"
    }
  },
  twitter: {
    title: title,
    description: description,
    site: title,
    card: "summary_large_image",
    images: ['/images/og-image.png']
  },
  openGraph: {
    title: title,
    siteName: title,
    description: description,
    type: 'website',
    url: '/',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'Praxis Jona'
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
            data-domain={Constants.dataDomain}
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
