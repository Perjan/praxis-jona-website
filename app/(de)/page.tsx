import { Metadata } from "next";

import HeroSection from '../HeroSection'
import QuoteSection from "../QuoteSection";
import HomeVisitSection from '../HomeVisitSection'
import HomeHighlights from '../HomeHighlights'
import Warning from "app/components/Warning";
import { Constants } from "../Constants";
import { getPricingPageConfig } from "app/components/pricing/pricingData";
import { buildClinicOfferCatalogJsonLd } from "app/components/pricing/pricingSchema";
import { buildClinicSchema, physicianSchema, websiteSchema } from "app/components/clinicSchema";

const title = "Praxis Jona Berlin - Allgemeinmedizin & Innere Medizin"
const description = "Ganzheitliche medizinische Betreuung in Berlin-Mitte: Allgemeinmedizin, Innere Medizin, Prävention und individuelle Diagnostik bei Praxis Jona."

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
    "@graph": [
        buildClinicSchema({
            hasOfferCatalog: buildClinicOfferCatalogJsonLd(getPricingPageConfig("global", "de")),
        }),
        physicianSchema,
        websiteSchema,
    ],
};

export default function Features() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <div className="home-page-stack">
                <HeroSection eyebrow="Innere Medizin & Allgemeinmedizin in Berlin-Mitte" title="Praxis Jona" description="Ganzheitliche Betreuung für ein gesundes Leben. Bei uns sind Sie mehr als nur ein weiterer Patient." />

                <div className="home-content-over-hero">
                    <HomeHighlights />

                    <QuoteSection
                        quote='„Mein Ziel ist es, nicht nur Symptome zu lindern, sondern auch die zugrundeliegenden Ursachen von Gesundheitsproblemen gezielt anzugehen.“'
                        buttonLink="/team"
                        buttonText="Team ansehen"
                    />

                    {/* <Warning message="Bitte haben Sie dafür Verständnis, dass wir aktuell keine gesetzl. versicherten Neupatienten mehr aufnehmen." /> */}

                    <HomeVisitSection />
                </div>
            </div>
        </>
    );
}
