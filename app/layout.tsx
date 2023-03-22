import './globals.css'
import NavLink from './NavLink'
import Header from './Header'

export const metadata = {
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
