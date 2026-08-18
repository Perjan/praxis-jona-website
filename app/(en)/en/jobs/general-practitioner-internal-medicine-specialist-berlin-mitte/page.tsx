import { Metadata } from "next";
import { JobPostingPage } from "app/components/JobPostingPage";
import {
    buildJobBreadcrumbStructuredData,
    buildJobPostingStructuredData,
    physicianJobByLocale,
} from "app/data/jobs";

const job = physicianJobByLocale.en;
const title = job.metaTitle;
const description = job.metaDescription;
const url = job.url;

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
                alt: "Praxis Jona",
            },
        ],
    },
    alternates: {
        canonical: url,
        languages: {
            de: job.alternateUrl,
            en: url,
            "x-default": job.alternateUrl,
        },
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/og-image.png"],
    },
};

export default function Page() {
    return (
        <JobPostingPage
            job={job}
            structuredData={buildJobPostingStructuredData(job)}
            breadcrumbStructuredData={buildJobBreadcrumbStructuredData(job)}
        />
    );
}
