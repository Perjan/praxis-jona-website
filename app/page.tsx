import { Metadata } from "next";

import HeroSection from './HeroSection'
import QuoteSection from "./QuoteSection";
import ClinicSection from './ClinicSection'
import Warning from "./components/Warning";
import { Constants } from "./Constants";

const title = "Praxis Jona"
const description = "Ganzheitliche Betreuung für ein gesundes Leben – Bei uns bist Du mehr als nur ein weiterer Patient"

export const metadata: Metadata = {
    title: {
        default: title,
        template: "%s"
    },
    description: description,
    twitter: {
        title: title,
        description: description,
        site: title,
        card: "summary_large_image",
        images: ['/images/og-image.png']
    },
    openGraph: {
        title: title,
        siteName: title,
        description: description,
        type: 'website',
        url: '/',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 600,
                alt: 'Praxis Jona'
            }
        ],
    },
    alternates: {
        canonical: '/',
        languages: {
            de: "/",
            en: "/en",
            "x-default": "/"
        }
      }
}

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${Constants.baseUrl}/#organization`,
    name: "Praxis Jona",
    url: Constants.baseUrl,
    image: `${Constants.baseUrl}/images/og-image.png`,
    telephone: "+49-30-40054273",
    email: Constants.contact.email,
    address: {
        "@type": "PostalAddress",
        streetAddress: "Torstraße 125",
        postalCode: "10119",
        addressLocality: "Berlin",
        addressCountry: "DE",
    },
    medicalSpecialty: [
        "Internal Medicine",
        "General Practice",
    ],
    sameAs: [
        "https://www.instagram.com/doc.jona/",
        "https://www.youtube.com/@doc.jonida",
        "https://www.tiktok.com/@doc.jonida",
    ],
};

export default function Features() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <HeroSection title="PRAXIS JONA" description="Ganzheitliche Betreuung für ein gesundes Leben - Bei uns bist Du mehr als nur ein weiterer Patient" />

            <QuoteSection
                quote='"Mein Ziel ist es, nicht nur Symptome zu lindern, sondern auch die zugrundeliegenden Ursachen von Gesundheitsproblemen gezielt anzugehen. Gemeinsam mit meinen Patienten möchte ich individuelle Wege entwickeln, die ihre Bedürfnisse und Ziele berücksichtigen. Dabei steht im Mittelpunkt, die Gesundheit und Lebensqualität nachhaltig zu verbessern."'
                buttonLink="/leistungen"
                buttonText="Unsere Leistungen"
            />

            {/* <Warning message="Bitte haben Sie dafür Verständnis, dass wir aktuell keine gesetzl. versicherten Neupatienten mehr aufnehmen." /> */}

            <ClinicSection
                title="Besuchen Sie uns in unserer Praxis"
                description1="Herzlich willkommen in unserer allgemeinmedizinisch-internistischen Praxis am Rosenthaler Platz. Wir behandeln auf der Basis moderner Diagnostik sowie dem Wissen und der langjährigen Erfahrung in universitärer Schulmedizin, um für jeden einzelnen Patienten den optimalen Weg zur Erhaltung und Wiederherstellung der Gesundheit zu finden."
                description2="Besondere Schwerpunkte unserer Praxis sind die Behandlung von Schilddrüsenerkrankungen, Bluthochdruck, Fettstoffwechselstörungen und Ernährungsmedizin."
                description3="Wir freuen uns, Sie persönlich in unserer Praxis in Berlin Mitte begrüßen zu dürfen und gemeinsam mit Ihnen an Ihrer Gesundheit zu arbeiten. " />
        </>
    );
}
