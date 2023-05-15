import Header from 'app/Header'
import { Analytics } from '@vercel/analytics/react';
import Footer from 'app/Footer';
import { Metadata } from 'next';
import { ReactToastWrapper } from 'app/ToasterWrapper';

const title = "MoneyCoach - Gestore Soldi e Budget"
const description = "MoneyCoach e' un moderno gestore di soldi e budget per iPhone, iPad, Apple Watch e Mac"

export const metadata: Metadata = {
  metadataBase: new URL("https://moneycoach.ai"),
  title: {
    default: title,
    template: "%s - MoneyCoach Gestore Soldi e Budget"
  },
  description: description,
  alternates: {
    canonical: '/'
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
    <html lang="it">
      <body>
        <ReactToastWrapper>
          <Header locale="it" />
          {children}
          <Footer />
          <Analytics />
        </ReactToastWrapper>
      </body>
    </html>
  )
}
