import Link from "next/link";
import { Metadata } from "next";
import { Constants } from "app/Constants";

const title = "Medical Assistant (MFA) (f/m/d), part-time or full-time";
const description = "Job posting for a medical assistant at Praxis Jona in Berlin-Mitte";
const url = "/en/jobs/medical-assistant-berlin-mitte";
const applicationMailTo = `mailto:jonida.gjolli@praxisjona.de?subject=${encodeURIComponent(`Application: ${title}`)}`;

const jobPostingStructuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Medical Assistant (MFA) (f/m/d), part-time or full-time",
    description:
        "We are looking for a friendly, dedicated and team-oriented Medical Assistant (MFA) for our internal medicine general practice in Berlin-Mitte. Responsibilities include appointment management, patient care, physician support, and diagnostic assistance.",
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
    inLanguage: "en-US",
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
            name: "Home",
            item: `${Constants.baseUrl}/en`
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Jobs",
            item: `${Constants.baseUrl}/en/jobs`
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Medical Assistant (MFA) (f/m/d), part-time or full-time",
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
            de: "/jobs/mfa-mwd-berlin-mitte",
            en: url
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
                <Link href="/en/jobs" className="text-primary underline text-sm">← Back to jobs</Link>

                <article className="mt-6 rounded-2xl bg-lightBeige bg-opacity-40 p-8 sm:p-10">
                    <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">
                        🩺 Medical Assistant (MFA) (f/m/d) wanted, part-time or full-time – at Praxis Jona in Berlin-Mitte!
                    </h1>

                    <div className="mt-8 space-y-6 text-primaryLighter leading-8">
                        <p>
                            We are looking for YOU – a friendly, dedicated and team-oriented Medical Assistant (MFA)
                            for our internal medicine general practice, Praxis Jona, at Torstraße 125, 10119 Berlin.
                        </p>
                        <p>
                            We are a small, family-like team of 2 physicians and 3 MFAs in the heart of Berlin.
                            Our patients are as diverse as our district – from young to old, German and international.
                        </p>
                        <p>
                            Our practice is modern, digitalized and well equipped with ECG, lung function testing,
                            24-hour blood pressure monitoring and more. In addition to classic general practice care,
                            we also offer thyroid diagnostics, nutritional medicine, infusion therapies and aesthetic treatments (e.g. Botox).
                        </p>
                    </div>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">✨ Your responsibilities</h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-primaryLighter leading-8">
                            <li>You manage appointments and handle telephone service</li>
                            <li>You welcome and support our patients in a friendly and professional way</li>
                            <li>You assist our physicians during consultations</li>
                            <li>You perform blood draws, vaccinations and rapid tests</li>
                            <li>You issue prescriptions, set up 24-hour blood pressure devices, and assist with lung function and stress ECG tests</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">✅ What you bring</h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-primaryLighter leading-8">
                            <li>Completed training as a Medical Assistant (MFA) or equivalent healthcare assistant qualification</li>
                            <li>Experience in a medical setting</li>
                            <li>Empathy in patient communication</li>
                            <li>Very good German and basic English skills</li>
                            <li>Team spirit, independent working style, and motivation for a modern, lively practice</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">💬 What matters to us</h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-primaryLighter leading-8">
                            <li>Structured and thorough onboarding</li>
                            <li>Digital and organized workflows – less paperwork, more time for people</li>
                            <li>A practice environment where you can feel comfortable, contribute and grow</li>
                        </ul>
                    </section>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">📬 Interested?</h2>
                        <p className="mt-4 text-primaryLighter leading-8">
                            We look forward to receiving your application by email.
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
                            Apply via email
                        </a>
                    </section>
                </article>
            </div>
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50">
                <a
                    href={applicationMailTo}
                    className="block w-full bg-primaryLighter hover:bg-tealColorDark text-white text-center px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                    Apply via email
                </a>
            </div>
        </div>
    );
}
