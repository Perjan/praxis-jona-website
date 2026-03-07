import Link from "next/link";
import { Metadata } from "next";
import { Constants } from "app/Constants";

const title = "MFA (m/w/d) in Teil- oder Vollzeit gesucht";
const description = "Stellenanzeige: Medizinische Fachangestellte bei Praxis Jona in Berlin-Mitte";
const url = "/jobs/mfa-mwd-berlin-mitte";
const applicationMailTo = `mailto:jonida.gjolli@praxisjona.de?subject=${encodeURIComponent(`Bewerbung: ${title}`)}`;

const jobPostingStructuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "MFA (m/w/d) in Teil- oder Vollzeit",
    description:
        "Freundliche, engagierte und teamfähige Medizinische Fachangestellte (MFA) gesucht für die internistische Hausarztpraxis Praxis Jona in Berlin-Mitte. Aufgaben umfassen Terminmanagement, Patientenbetreuung, Unterstützung der Ärztinnen sowie Blutabnahmen, Impfungen und Diagnostikunterstützung.",
    datePosted: "2026-02-17",
    employmentType: ["FULL_TIME", "PART_TIME"],
    hiringOrganization: {
        "@type": "Organization",
        name: "Praxis Jona",
        sameAs: Constants.baseUrl,
        logo: `${Constants.baseUrl}/images/og-image.png`
    },
    jobLocation: {
        "@type": "Place",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Torstraße 125",
            addressLocality: "Berlin",
            postalCode: "10119",
            addressCountry: "DE"
        }
    },
    inLanguage: "de-DE",
    url: `${Constants.baseUrl}${url}`,
    applicantLocationRequirements: {
        "@type": "Country",
        name: "DE"
    }
};

const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: Constants.baseUrl
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Karriere",
            item: `${Constants.baseUrl}/jobs`
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "MFA (m/w/d) in Teil- oder Vollzeit",
            item: `${Constants.baseUrl}${url}`
        }
    ]
};

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        type: "article",
        url,
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 600,
                alt: "Praxis Jona"
            }
        ]
    },
    alternates: {
        canonical: url,
        languages: {
            de: url,
            en: "/en/jobs/medical-assistant-berlin-mitte",
            "x-default": url
        }
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/og-image.png"]
    }
};

export default function Page() {
    return (
        <div className="bg-white mt-2 sm:mt-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jobPostingStructuredData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbStructuredData),
                }}
            />
            <div className="mx-auto max-w-5xl px-6 lg:px-8 pb-28 lg:pb-14">
                <Link href="/jobs" className="text-primary underline text-sm">← Zurück zu Karriere</Link>

                <article className="mt-6 rounded-2xl bg-lightBeige bg-opacity-40 p-8 sm:p-10">
                    <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">
                        🩺 MFA (m/w/d) in Teil- oder Vollzeit gesucht – bei Praxis Jona in Berlin-Mitte!
                    </h1>

                    <div className="mt-8 space-y-6 text-primaryLighter leading-8">
                        <p>
                            Wir suchen DICH – eine freundliche, engagierte und teamfähige Medizinische Fachangestellte (MFA)
                            für unsere internistische Hausarztpraxis Praxis Jona in der Torstraße 125, 10119 Berlin.
                        </p>
                        <p>
                            Wir sind ein kleines, familiäres Team aus 2 Ärztinnen und 3 MFAs, mitten im Herzen Berlins.
                            Unsere Patient:innen sind so bunt und vielfältig wie unser Bezirk – von jung bis alt, deutsch und international.
                        </p>
                        <p>
                            Unsere Praxis ist modern, digitalisiert und bestens ausgestattet mit EKG, LuFu, 24h-RR, u.v.m.
                            Neben der klassischen hausärztlichen Versorgung bieten wir auch Schilddrüsendiagnostik,
                            Ernährungsmedizin, Infusionstherapien und ästhetische Behandlungen (z. B. Botox) an.
                        </p>
                    </div>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">✨ Deine Aufgaben</h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-primaryLighter leading-8">
                            <li>Du managst Termine und kümmerst dich um den Telefonservice</li>
                            <li>Du begrüßt und betreust unsere Patient:innen freundlich und kompetent</li>
                            <li>Du unterstützt die Ärztinnen bei der Sprechstundenbetreuung</li>
                            <li>Du führst Blutabnahmen, Impfungen, Schnelltests durch</li>
                            <li>Du stellst Rezepte aus, legst das 24h-RR-Gerät an, hilfst bei LuFu und Belastungs-EKG</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">✅ Das bringst du mit</h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-primaryLighter leading-8">
                            <li>Abgeschlossene Ausbildung zur MFA oder Arzthelfer:in</li>
                            <li>Erfahrung im medizinischen Bereich</li>
                            <li>Einfühlungsvermögen im Umgang mit Patient:innen</li>
                            <li>Sehr gute Deutschkenntnisse und Grundkenntnisse in Englisch</li>
                            <li>Teamgeist, Selbstständigkeit und Lust auf eine moderne, lebendige Praxis</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">💬 Was uns wichtig ist</h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-primaryLighter leading-8">
                            <li>Eine strukturierte und gründliche Einarbeitung</li>
                            <li>Ein digitales, aufgeräumtes Arbeiten – weniger Papierkram, mehr Zeit für Menschen</li>
                            <li>Ein Praxisumfeld, in dem du dich wohlfühlen, mitgestalten und weiterentwickeln kannst</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">📬 Neugierig geworden?</h2>
                        <p className="mt-4 text-primaryLighter leading-8">
                            Dann freuen wir uns auf deine Bewerbung – per E-Mail.
                        </p>
                        <p className="mt-3 text-primaryLighter leading-8">
                            📧 <a href="mailto:jonida.gjolli@praxisjona.de" className="text-primary underline">jonida.gjolli@praxisjona.de</a><br />
                            🌐 <a href="https://praxisjona.de" className="text-primary underline">praxisjona.de</a><br />
                            📍 Praxis Jona – Torstraße 125, 10119 Berlin
                        </p>
                        <a
                            href={applicationMailTo}
                            className="mt-6 hidden lg:inline-flex rounded-xl bg-primary py-2.5 px-5 text-white font-serif hover:bg-primaryDarker"
                        >
                            Jetzt per E-Mail bewerben
                        </a>
                    </section>
                </article>
            </div>
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50">
                <a
                    href={applicationMailTo}
                    className="block w-full bg-primaryLighter hover:bg-tealColorDark text-white text-center px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                    Jetzt per E-Mail bewerben
                </a>
            </div>
        </div>
    );
}
