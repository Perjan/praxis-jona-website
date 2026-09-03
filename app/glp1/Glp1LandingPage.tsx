import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  ChevronRight,
  ClipboardPenLine,
  Mail,
  Menu,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

import Logo from "/public/images/praxis-jona-web-logo.png";
import { Constants } from "@/app/Constants";
import type { Glp1Locale } from "./intake-definition";
import { getGlp1Copy } from "./intake-copy";
import Glp1ChromeGuard from "./Glp1ChromeGuard";

const processIcons = [ClipboardPenLine, Stethoscope, Mail];

function MedicalLineMotif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 520"
      className="absolute -right-14 top-4 h-[110%] w-auto text-primary/15 sm:right-4"
      fill="none"
    >
      <path d="M330 0v84c0 36 29 65 65 65s65 29 65 65v82c0 36-29 65-65 65h-98c-36 0-65-29-65-65V188c0-36-29-65-65-65s-65 29-65 65v332" stroke="currentColor" strokeWidth="2" />
      <path d="M365 0v76c0 20 16 36 36 36 55 0 99 44 99 99v88c0 55-44 99-99 99H294c-55 0-99-44-99-99V188c0-16-13-29-29-29s-29 13-29 29v332" stroke="currentColor" strokeWidth="2" />
      <circle cx="214" cy="304" r="35" fill="#F9EDDF" stroke="currentColor" strokeWidth="2" />
      <path d="M214 288v32M198 304h32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function Glp1LandingPage({ locale }: { locale: Glp1Locale }) {
  const copy = getGlp1Copy(locale);
  const base = locale === "de" ? "/glp-1-check" : "/en/glp-1-check";
  const otherLocaleHref = locale === "de" ? "/en/glp-1-check" : "/glp-1-check";
  const privacyHref = locale === "de" ? "/legal/impressum-datenschutz" : "/en/legal/imprint-privacy";
  const currentYear = new Date().getFullYear();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.landing.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-primary">
      <Glp1ChromeGuard />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="border-b border-primary/10 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-24 sm:px-8">
          <Link href={locale === "de" ? "/" : "/en"} aria-label="Praxis Jona">
            <Image src={Logo} alt="Praxis Jona" className="h-10 w-auto sm:h-12" priority />
          </Link>
          <nav className="hidden items-center gap-10 text-sm font-semibold md:flex" aria-label={locale === "de" ? "Seitennavigation" : "Page navigation"}>
            <a href="#ablauf" className="transition hover:text-primaryLighter">{copy.landing.howItWorksLink}</a>
            <a href="#datenschutz" className="transition hover:text-primaryLighter">{copy.landing.privacyLink}</a>
          </nav>
          <div className="flex items-center gap-5">
            <Link href={otherLocaleHref} className="text-sm font-semibold tracking-wide" aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}>
              {locale === "de" ? "DE | EN" : "EN | DE"}
            </Link>
            <Link href={`${base}/new`} className="hidden rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primaryDarker md:inline-flex">
              {copy.landing.start}
            </Link>
            <Menu className="size-7 md:hidden" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-primary px-5 py-16 text-white sm:bg-lightBeige sm:px-8 sm:py-24 sm:text-primary lg:py-32">
          <MedicalLineMotif />
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                {copy.landing.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-primaryLighter sm:text-xl">
                {copy.landing.intro}
              </p>
              <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Link href={`${base}/new`} className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-lightBeige px-7 text-base font-semibold text-primary transition hover:bg-white sm:w-auto sm:bg-primary sm:text-white sm:hover:bg-primaryDarker">
                  {copy.landing.start}
                </Link>
                <Link href={`${base}/follow-up`} className="border-b border-current pb-1 text-base font-semibold">
                  {copy.landing.followUp}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">{copy.landing.chooseTitle}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                { icon: UserRound, title: copy.landing.newTitle, text: copy.landing.newText, href: `${base}/new`, cta: copy.landing.start },
                { icon: CalendarCheck, title: copy.landing.followTitle, text: copy.landing.followText, href: `${base}/follow-up`, cta: copy.landing.followCta },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group flex items-center gap-5 rounded-lg border border-primary/20 p-6 transition hover:border-primary hover:bg-lightBeige/30 sm:p-8">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-tealColor/55">
                    <item.icon className="size-8" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-xl font-semibold sm:text-2xl">{item.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-primaryLighter sm:text-base">{item.text}</span>
                    <span className="mt-5 hidden text-sm font-semibold underline-offset-4 group-hover:underline sm:block">{item.cta}</span>
                  </span>
                  <ChevronRight className="size-6 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="ablauf" className="bg-tealColor/35 px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">{copy.landing.processTitle}</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {copy.landing.process.map((step, index) => {
                const Icon = processIcons[index];
                return (
                  <article key={step.title} className="relative flex gap-5 md:block md:text-center">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm md:mx-auto md:size-20">
                      <Icon className="size-7 md:size-9" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="absolute left-10 top-0 flex size-7 -translate-y-2 items-center justify-center rounded-full bg-primary text-xs font-bold text-white md:left-[calc(50%-52px)]">{index + 1}</span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold md:mt-6">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-primaryLighter sm:text-base">{step.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="datenschutz" className="bg-primary px-5 py-11 text-white sm:px-8">
          <div className="mx-auto flex max-w-6xl items-start gap-5 sm:items-center">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-white/50">
              <ShieldCheck className="size-8" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-semibold sm:text-3xl">{copy.landing.privacyTitle}</h2>
              <p className="mt-2 max-w-3xl leading-7 text-white/78">{copy.landing.privacyText}</p>
              <Link href={privacyHref} className="mt-3 inline-block text-sm font-semibold underline">{copy.landing.privacyLink}</Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-3xl font-semibold sm:text-4xl">{copy.landing.faqTitle}</h2>
            <div className="mt-9 divide-y divide-primary/15 border-y border-primary/15">
              {copy.landing.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold marker:hidden">
                    {faq.question}
                    <ChevronRight className="size-5 shrink-0 transition group-open:rotate-90" aria-hidden="true" />
                  </summary>
                  <p className="max-w-3xl pt-3 text-sm leading-6 text-primaryLighter sm:text-base">{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 rounded-md border border-amber-700/20 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950">{copy.landing.emergency}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/10 bg-lightBeige/45 px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
          <div>
            <Image src={Logo} alt="Praxis Jona" className="h-11 w-auto" />
            <p className="mt-5 text-xs text-primaryLighter">© {currentYear} Praxis Jona.</p>
          </div>
          <div className="text-sm leading-6 text-primaryLighter">
            <p className="font-semibold text-primary">Praxis</p>
            <p className="mt-2 whitespace-pre-line">{Constants.address}</p>
          </div>
          <div className="text-sm leading-6 text-primaryLighter">
            <p className="font-semibold text-primary">{locale === "de" ? "Kontakt" : "Contact"}</p>
            <a className="mt-2 block hover:underline" href={Constants.contact.phoneUrl}>{Constants.contact.phone}</a>
            <a className="block hover:underline" href={Constants.contact.emailUrl}>{Constants.contact.email}</a>
            <Link className="mt-2 block hover:underline" href={privacyHref}>{copy.landing.privacyLink}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
