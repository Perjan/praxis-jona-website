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
  image: "https://moneycoach.ai/images/moneycoach-all-devices.png",
  siteName: "MoneyCoach",
  twitter: {
    // handle: "@appmoneycoach"
    site: "@appmoneycoach",
    // cardType: "summary_large_image"
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
