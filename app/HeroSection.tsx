import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { Constants } from "./Constants";

type HeroLocale = "de" | "en";

const serviceLinks = {
  de: [
    { label: "Innere Medizin", href: "/hausaerztliche-leistungen" },
    { label: "Ästhetik", href: "/aesthetik" },
    { label: "Health & Longevity", href: "/praevention-longevity" },
  ],
  en: [
    { label: "Internal Medicine", href: "/en/general-medicine" },
    { label: "Aesthetics", href: "/en/aesthetics" },
    { label: "Health & Longevity", href: "/en/prevention-longevity" },
  ],
} satisfies Record<HeroLocale, Array<{ label: string; href: string }>>;

export default function HeroSection({
  title,
  description,
  locale = "de",
}: {
  title: string;
  description: string;
  locale?: HeroLocale;
}) {
  const bookingLabel = locale === "en" ? "Book appointment" : "Termin buchen";

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__media" aria-hidden="true">
        <Image
          src="/images/clinic/home-hero-final.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="home-hero__shade" aria-hidden="true" />

      <div className="home-hero__content">
        <div className="home-hero__copy">
          <h1 id="home-hero-title">{title}</h1>
          <p>{description}</p>
          <Link
            href={Constants.appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__booking"
            data-umami-event="button-in-home-hero"
          >
            {bookingLabel}
          </Link>
        </div>

        <nav className="home-hero__services" aria-label={locale === "en" ? "Featured services" : "Ausgewählte Leistungen"}>
          {serviceLinks[locale].map((service) => (
            <Link key={service.href} href={service.href}>
              <span>{service.label}</span>
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
