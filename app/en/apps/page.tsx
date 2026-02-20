import { Metadata } from "next";
import Image from 'next/image';
import { appsEN } from 'app/data/appsEN';
import AppsPageBody from 'app/components/AppsPageComponents';
const title = "Our Apps"
const description = "Discover our range of health and wellness apps designed to support your journey to better health."
const url = "/en/apps"

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: url,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'Praxis Jona Apps'
      }
    ],
  },
  alternates: {
    canonical: url,
    languages: {
            de: "/apps",
            en: url,
            "x-default": "/apps"
        }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

export default function Page() {
  return (
    <AppsPageBody title={title} description={description} apps={appsEN} />
  )
}