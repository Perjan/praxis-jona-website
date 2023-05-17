import { Metadata } from 'next';

const title = "MoneyCoach - Moderne Cash Tracker und Budgetierungs-App"
const description = "MoneyCoach ist eine persönliche Finanz-App, die dir hilft, dein Geld zu verwalten, zu budgetieren und deine Ausgaben zu verfolgen."

export const metadata: Metadata = {
  metadataBase: new URL("https://moneycoach.ai"),
  title: {
    default: title,
    template: "%s - MoneyCoach Moderne Cash Tracker und Budgetierungs-App"
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
    url: '/de',
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

export default function GermanLayout({
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
