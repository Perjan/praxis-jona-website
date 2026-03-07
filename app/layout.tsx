import './globals.css'
import './styles/animations.css' // This line should now work
import Header from './Header'
import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer';
import { Metadata } from 'next';
import { ReactToastWrapper } from './ToasterWrapper';
import { Constants } from './Constants';
import Script from 'next/script';
import Authors from './blog/authors/AuthorsDataSource';
import HtmlLangSync from './HtmlLangSync';


export const metadata: Metadata = {
  metadataBase: new URL(Constants.baseUrl),
  title: {
    default: "Praxis Jona Berlin - Allgemeinmedizin & Innere Medizin",
    template: "%s | Praxis Jona",
  },
  description: "Praxis Jona in Berlin-Mitte: Allgemeinmedizin, Innere Medizin, Prävention, Diagnostik und persönliche medizinische Betreuung.",
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
    <html lang='de'>
      <Script
            src="https://analytics.moneycoach.ai/script.js"
            data-website-id={Constants.umamiId}
            data-domains={Constants.dataDomain}
            strategy="lazyOnload"
          />
      <body>
        <ReactToastWrapper>
          <HtmlLangSync />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <Analytics />
        </ReactToastWrapper>
      </body>
    </html>
  )
}
