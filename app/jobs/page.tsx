import { Metadata } from "next";
import Link from "next/link";
import { buildJobsListingStructuredData, getVisibleJobListings, jobsPageCopyByLocale } from "app/data/jobs";

const page = jobsPageCopyByLocale.de;
const title = page.title;
const description = page.description;
const url = page.url;
const jobsListingStructuredData = buildJobsListingStructuredData("de");
const visibleJobListings = getVisibleJobListings("de");

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
                            {page.heading}
                        </h2>
                        <p className="mt-3 text-primaryLighter leading-8">
                            {page.intro}
                        </p>

                        <div className="mt-8 space-y-6">
                            {visibleJobListings.map((job) => (
                                <article key={job.href} className="rounded-xl bg-white p-6 border border-stone-200">
                                    <h3 className="text-xl font-serif font-semibold text-primary">
                                        {job.title}
                                    </h3>
                                    <p className="mt-2 text-primaryLighter leading-7">
                                        {job.location}
                                    </p>
                                    <p className="mt-2 text-primaryLighter leading-7">
                                        {job.summary}
                                    </p>
                                    <div className="mt-5">
                                        <Link
                                            href={job.href}
                                            className="inline-flex rounded-xl bg-primary py-2.5 px-5 text-white font-serif hover:bg-primaryDarker"
                                        >
                                            {job.cta}
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
