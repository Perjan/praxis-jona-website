import { Metadata } from "next";

import HomeVisitSection from "app/HomeVisitSection";
import HomeHighlights from "app/HomeHighlights";
import HeroSection from "app/HeroSection";
import QuoteSection from "app/QuoteSection";
import { Constants } from "app/Constants";
import { getPricingPageConfig } from "app/components/pricing/pricingData";
import { buildClinicOfferCatalogJsonLd } from "app/components/pricing/pricingSchema";
import { buildClinicSchema, physicianSchema, websiteSchema } from "app/components/clinicSchema";

const title = "Praxis Jona Berlin - Internal Medicine"
const description = "Holistic medical care in Berlin-Mitte: internal medicine, preventive diagnostics, and personalized treatment at Praxis Jona."

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
        url: '/en',
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
        canonical: '/en',
        languages: {
            de: "/",
            en: "/en",
            "x-default": "/"
        }
    }
}

const organizationSchemaEn = {
    "@context": "https://schema.org",
    "@graph": [
        buildClinicSchema({
            url: `${Constants.baseUrl}/en`,
            hasOfferCatalog: buildClinicOfferCatalogJsonLd(getPricingPageConfig("global", "en")),
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaEn) }}
            />
            <div className="home-page-stack">
                <HeroSection eyebrow="Internal & general medicine in Berlin-Mitte" title="Praxis Jona" description="Holistic care for a healthy life. With us, you are more than just another patient." locale="en" />

                <div className="home-content-over-hero">
                    <HomeHighlights locale="en" />

                    <QuoteSection
                        quote='“My aim is not only to alleviate symptoms, but also to specifically address the underlying causes of health problems.”'
                        buttonLink="/en/team"
                        buttonText="Meet the team"
                        role="Specialist for Internal Medicine"
                    />

                    <HomeVisitSection locale="en" />
                </div>
            </div>
        </>
        
    );
}
