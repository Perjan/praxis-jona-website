import './globals.css'
import NavLink from './NavLink'
import Header from './Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "MoneyCoach.ai"
//TODO: add here everything

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
