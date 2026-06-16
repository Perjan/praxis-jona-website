import { Metadata } from "next"
import TVLayout from "app/tv-legacy/layout"

export const metadata: Metadata = {
  title: "Praxis Jona Waiting Room TV",
  description: "English waiting-room TV slides for Praxis Jona in Berlin-Mitte.",
  alternates: {
    canonical: "/en/tv-legacy",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default TVLayout
