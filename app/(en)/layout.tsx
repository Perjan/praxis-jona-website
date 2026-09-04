import '../globals.css'
import Header from '../Header'
import { Analytics } from '@vercel/analytics/react';
import Footer from '../Footer';
import { Metadata } from 'next';
import { ReactToastWrapper } from '../ToasterWrapper';
import { Constants } from '../Constants';
import Script from 'next/script';
import Authors from 'app/(de)/blog/authors/AuthorsDataSource';
import BookingAttribution from '../components/BookingAttribution';

export const metadata: Metadata = {
  metadataBase: new URL(Constants.baseUrl),
  title: {
    default: "Praxis Jona Berlin - General & Internal Medicine",
    template: "%s | Praxis Jona",
  },
  description: "English-speaking doctors in Berlin-Mitte. Praxis Jona offers general and internal medicine, prevention, diagnostics and personal medical care.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  authors: Authors.map((author) => ({
    name: author.name,
    url: author.url
  })),
  keywords: Constants.keywords,
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
    <html lang="en">
      <Script
            src="https://analytics.moneycoach.ai/script.js"
            data-website-id={Constants.umamiId}
            data-domains={Constants.dataDomain}
            strategy="afterInteractive"
          />
      <body>
        <BookingAttribution />
        <ReactToastWrapper>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <Analytics />
        </ReactToastWrapper>
      </body>
    </html>
  )
}
