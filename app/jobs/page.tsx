import { Metadata } from "next";
import Link from "next/link";
import { Constants } from "app/Constants";

const title = 'Karriere'
const description = "Offene Stellen bei Praxis Jona in Berlin-Mitte"
const url = "/jobs"
const jobUrl = "/jobs/mfa-mwd-berlin-mitte"

const jobsListingStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${Constants.baseUrl}${url}`,
    inLanguage: "de-DE",
    mainEntity: {
        "@type": "ItemList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                url: `${Constants.baseUrl}${jobUrl}`,
                name: "MFA (m/w/d) in Teil- oder Vollzeit"
            }
        ]
    }
}

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
                alt: 'Praxis Jona'
            }
        ],
    },
    alternates: {
        canonical: url,
        languages: {
            de: url,
            en: "/en/jobs",
            "x-default": url
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
        <div className="bg-white mt-2 sm:mt-10 min-h-[60vh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jobsListingStructuredData),
                }}
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                    <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                </div>

                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-8 sm:p-10">
                        <h2 className="text-2xl font-serif font-semibold text-primary">
                            Offene Stellen
                        </h2>
                        <p className="mt-3 text-primaryLighter leading-8">
                            Hier finden Sie alle aktuellen Jobangebote der Praxis Jona.
                        </p>

                        <article className="mt-8 rounded-xl bg-white p-6 border border-stone-200">
                            <h3 className="text-xl font-serif font-semibold text-primary">
                                MFA (m/w/d) in Teil- oder Vollzeit
                            </h3>
                            <p className="mt-2 text-primaryLighter leading-7">
                                Praxis Jona, Torstraße 125, 10119 Berlin-Mitte.
                            </p>
                            <p className="mt-2 text-primaryLighter leading-7">
                                Freundliche, engagierte und teamfähige medizinische Fachangestellte gesucht.
                            </p>
                            <div className="mt-5">
                                <Link
                                    href={jobUrl}
                                    className="inline-flex rounded-xl bg-primary py-2.5 px-5 text-white font-serif hover:bg-primaryDarker"
                                >
                                    Zur Stellenanzeige
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}
