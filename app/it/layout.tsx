import { Metadata } from 'next';

const title = "MoneyCoach - Gestore Soldi e Budget"
const description = "MoneyCoach e' un gestore di soldi e budget moderno per iPhone, iPad, Apple Watch e Mac"

export const metadata: Metadata = {
  metadataBase: new URL("https://moneycoach.ai"),
  title: {
    default: title,
    template: "%s - MoneyCoach Gestore Soldi e Budget"
  },
  description: description,
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
    url: '/it',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'MoneyCoach app screenshot'
      }
    ],
  }
}

export default function ItalianLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
