import Image from "next/image";

import { Constants } from "./Constants";
import BookingCtaLink from "./components/BookingCtaLink";

type HomeVisitLocale = "de" | "en";

const homeVisitContent = {
  de: {
    heading: "Besuchen Sie uns am Rosenthaler Platz",
    text: "Unsere allgemeinmedizinisch-internistische Praxis verbindet moderne Diagnostik mit langjähriger Erfahrung aus der universitären Medizin. Wir freuen uns, Sie in Berlin-Mitte persönlich zu begrüßen.",
    addressLabel: "Adresse",
    addressNote: "U8 Rosenthaler Platz",
    mapsLabel: "In Google Maps öffnen",
    phoneLabel: "Telefon",
    bookingLabel: "Termin buchen",
    callLabel: "Anrufen",
    imageAlt: "Helles Sprechzimmer der Praxis Jona in Berlin-Mitte",
  },
  en: {
    heading: "Visit us at Rosenthaler Platz",
    text: "Our general and internal medicine practice combines modern diagnostics with many years of experience at Charité Berlin. We look forward to welcoming you in Berlin-Mitte.",
    addressLabel: "Address",
    addressNote: "U8 Rosenthaler Platz",
    mapsLabel: "Open in Google Maps",
    phoneLabel: "Phone",
    bookingLabel: "Book appointment",
    callLabel: "Call us",
    imageAlt: "Bright consultation room at Praxis Jona in Berlin-Mitte",
  },
} satisfies Record<HomeVisitLocale, Record<string, string>>;

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function HomeVisitSection({ locale = "de" }: { locale?: HomeVisitLocale }) {
  const content = homeVisitContent[locale];
  const [street, city] = Constants.address.split("\n");

  return (
    <section aria-labelledby="home-visit-title" className="bg-tealColor py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(13,50,43,0.55)] lg:col-span-7">
          <Image
            src="/images/clinic/clinic-newB.jpeg"
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-5">
          <h2 id="home-visit-title" className="font-serif text-4xl tracking-tight text-primary sm:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-6 max-w-[60ch] text-lg leading-8 text-primaryLighter">{content.text}</p>

          <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-primary/15 pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-primaryLighter">{content.addressLabel}</dt>
              <dd className="mt-1 text-base font-medium text-primary">
                {street}, {city.replace(",", "")}
                <span className="mt-1 block font-normal text-primaryLighter">{content.addressNote}</span>
                <a
                  href={Constants.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block py-1 text-sm font-medium text-primary underline underline-offset-4 ${focusRing}`}
                >
                  {content.mapsLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-primaryLighter">{content.phoneLabel}</dt>
              <dd className="mt-1">
                <a href={Constants.contact.phoneUrl} className={`text-base font-medium text-primary ${focusRing}`}>
                  {Constants.contact.phone}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <BookingCtaLink
              href={Constants.appointmentUrl}
              placement="home-visit"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-[3rem] items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primaryLighter motion-safe:active:scale-[0.98] ${focusRing}`}
            >
              {content.bookingLabel}
            </BookingCtaLink>
            <a
              href={Constants.contact.phoneUrl}
              className={`inline-flex min-h-[3rem] items-center justify-center rounded-lg px-6 text-base font-medium text-primary ring-1 ring-inset ring-primary/30 transition-colors hover:bg-white/60 ${focusRing}`}
            >
              {content.callLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
