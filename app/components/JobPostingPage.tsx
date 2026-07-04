import Link from "next/link";
import { getJobApplicationMailTo } from "app/data/jobs";
import type { JobDetailContent } from "app/data/jobs";

type JobPostingPageProps = {
    job: JobDetailContent;
    structuredData: Record<string, unknown>;
    breadcrumbStructuredData: Record<string, unknown>;
};

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}

function Section({ icon, title, items, paragraphs }: JobDetailContent["sections"][number]) {
    return (
        <section>
            <h2 className="text-2xl font-serif font-semibold text-primary">
                {icon} {title}
            </h2>
            {items?.length ? (
                <ul className="mt-4 list-disc pl-6 space-y-2 text-primaryLighter leading-8">
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            ) : null}
            {paragraphs?.length ? (
                <div className="mt-4 space-y-4 text-primaryLighter leading-8">
                    {paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            ) : null}
        </section>
    );
}

export function JobPostingPage({ job, structuredData, breadcrumbStructuredData }: JobPostingPageProps) {
    const applicationMailTo = getJobApplicationMailTo(job);

    return (
        <div className="bg-white mt-2 sm:mt-10">
            <JsonLdScript data={structuredData} />
            <JsonLdScript data={breadcrumbStructuredData} />
            <div className="mx-auto max-w-5xl px-6 lg:px-8 pb-28 lg:pb-14">
                <Link href={job.jobsUrl} className="text-primary underline text-sm">
                    {job.backLabel}
                </Link>

                <article className="mt-6 rounded-2xl bg-lightBeige bg-opacity-40 p-8 sm:p-10">
                    <h1 className="text-3xl font-semibold font-serif text-primary sm:text-4xl">
                        🩺 {job.headline}
                    </h1>
                    <p className="mt-4 text-lg font-semibold leading-8 text-primary">
                        {job.subtitle}
                    </p>

                    <div className="mt-8 space-y-6 text-primaryLighter leading-8">
                        {job.intro.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    {job.sections.map((section) => (
                        <div key={section.title}>
                            <hr className="my-8 border-stone-300" />
                            <Section {...section} />
                        </div>
                    ))}

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">
                            💡 {job.whyHeading}
                        </h2>
                        <div className="mt-4 space-y-4 text-primaryLighter leading-8">
                            {job.whyParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <hr className="my-8 border-stone-300" />

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-primary">
                            📬 {job.applicationHeading}
                        </h2>
                        <p className="mt-4 text-primaryLighter leading-8">
                            {job.applicationIntro}
                        </p>
                        <p className="mt-3 text-primaryLighter leading-8">
                            Praxis Jona<br />
                            Torstraße 125<br />
                            10119 Berlin
                        </p>
                        <p className="mt-3 text-primaryLighter leading-8">
                            📧{" "}
                            <a href={`mailto:${job.applicationEmail}`} className="text-primary underline">
                                {job.applicationEmail}
                            </a>
                        </p>
                        <a
                            href={applicationMailTo}
                            className="mt-6 hidden lg:inline-flex rounded-xl bg-primary py-2.5 px-5 text-white font-serif hover:bg-primaryDarker"
                        >
                            {job.applyCta}
                        </a>
                    </section>
                </article>
            </div>
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50">
                <a
                    href={applicationMailTo}
                    className="block w-full bg-primaryLighter hover:bg-tealColorDark text-white text-center px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                    {job.applyCta}
                </a>
            </div>
        </div>
    );
}
