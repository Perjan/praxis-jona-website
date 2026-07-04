import Link from "next/link";
import { physicianJobNewsCardByLocale } from "app/data/jobs";
import type { JobLocale } from "app/data/jobs";

export function JobNewsCard({ locale }: { locale: JobLocale }) {
    const card = physicianJobNewsCardByLocale[locale];

    return (
        <article className="max-w-3xl mx-auto rounded-2xl bg-primary p-8 sm:p-10 shadow-lg shadow-stone-200/70">
            <p className="text-sm font-semibold uppercase text-lightBeige">
                {card.label}
            </p>
            <h2 className="mt-3 text-2xl font-semibold font-serif leading-8 text-white sm:text-3xl">
                {card.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
                {card.description}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/80">
                {card.meta}
            </p>
            <div className="mt-6">
                <Link
                    href={card.href}
                    className="inline-flex rounded-xl bg-white py-2.5 px-5 text-primary font-serif hover:bg-lightBeige"
                >
                    {card.cta}
                </Link>
            </div>
        </article>
    );
}
