import Link from "next/link";
import { getGlp1Copy } from "./intake-copy";
import type { Glp1Locale } from "./intake-definition";

export default function Glp1TreatmentForms({ locale }: { locale: Glp1Locale }) {
  const copy = getGlp1Copy(locale).landing;
  const base = locale === "de" ? "/glp-1-check" : "/en/glp-1-check";
  const forms = [
    { title: copy.newTitle, text: copy.newText, href: `${base}/new`, cta: copy.start },
    { title: copy.followTitle, text: copy.followText, href: `${base}/follow-up`, cta: copy.followCta },
  ];

  return (
    <section
      id="glp-1-forms"
      aria-labelledby="glp-1-forms-title"
      className="scroll-mt-28 bg-lightBeige px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="glp-1-forms-title" className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
          {copy.formsTitle}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {forms.map((form) => (
            <div key={form.href} className="flex flex-col rounded-2xl border border-primary/15 bg-white p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary">{form.title}</h3>
              <p className="mt-4 max-w-prose text-lg leading-8 text-primaryLighter">{form.text}</p>
              <div className="mt-auto pt-6">
                <Link
                  href={form.href}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-center font-semibold text-white transition hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto"
                >
                  {form.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
