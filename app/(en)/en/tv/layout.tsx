import { Metadata } from "next"
import TVNewLayout from "app/(de)/tv/layout"

export const metadata: Metadata = {
  title: "Praxis Jona Waiting Room TV",
  description: "English waiting-room TV slides for Praxis Jona in Berlin-Mitte.",
  alternates: {
    canonical: "/en/tv",
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

export default TVNewLayout
