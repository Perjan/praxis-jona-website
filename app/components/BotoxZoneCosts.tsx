import Link from "next/link";
import { pricingSections } from "app/components/pricing/pricingData";
import { botulinumtoxinServices, botulinumtoxinServicesEn } from "app/content/botulinumtoxin";

/**
 * Per-zone cost sections for the botulinumtoxin pricing pages.
 *
 * Search demand for these treatments is overwhelmingly zone-specific and
 * cost-led — "botox stirn kosten", "botox zornesfalte kosten", "botox 3 zonen
 * preis" — while the page previously answered with a single undifferentiated
 * price table. Each zone therefore gets its own heading, anchor and opening
 * line stating the price, so the section can match and answer the query on its
 * own.
 *
 * Prices come from pricingData and copy from the treatment content, so nothing
 * here can drift out of sync with the table above it or the detail pages.
 */

type ZoneCopy = {
  /** slug in pricingSections.botox.rows */
  priceSlug: string;
  /** slug in botulinumtoxinServices, for the description and detail link */
  serviceSlug?: string;
  /** anchor + heading wording, chosen to match how the treatment is searched */
  anchor: string;
  headingDe: string;
  headingEn: string;
};

const ZONES: ZoneCopy[] = [
  { priceSlug: "stirnfalten", serviceSlug: "stirnfalten", anchor: "stirnfalten", headingDe: "Stirnfalten", headingEn: "Forehead lines" },
  { priceSlug: "zornesfalte", serviceSlug: "zornesfalte", anchor: "zornesfalte", headingDe: "Zornesfalte (Glabella)", headingEn: "Frown lines (glabella)" },
  { priceSlug: "kraehenfuesse", serviceSlug: "kraehenfuesse", anchor: "kraehenfuesse", headingDe: "Krähenfüße", headingEn: "Crow’s feet" },
  { priceSlug: "browlift", serviceSlug: "brow-lift-augenbrauenlifting", anchor: "browlift", headingDe: "Brow Lift", headingEn: "Brow lift" },
  { priceSlug: "bunny-lines", serviceSlug: "bunny-lines", anchor: "bunny-lines", headingDe: "Bunny Lines", headingEn: "Bunny lines" },
  { priceSlug: "lip-flip", serviceSlug: "lip-flip", anchor: "lip-flip", headingDe: "Lip Flip", headingEn: "Lip flip" },
  { priceSlug: "gummy-smile", serviceSlug: "gummy-smile", anchor: "gummy-smile", headingDe: "Gummy Smile", headingEn: "Gummy smile" },
  { priceSlug: "mundwinkel", serviceSlug: "mundwinkel-anheben", anchor: "mundwinkel", headingDe: "Mundwinkel anheben", headingEn: "Mouth corners" },
  { priceSlug: "trapezmuskel", serviceSlug: "trapezmuskel-barbie-botox", anchor: "trapezmuskel", headingDe: "Trapezmuskel („Barbie Botox“)", headingEn: "Trapezius (“Barbie Botox”)" },
  { priceSlug: "bruxismus", serviceSlug: "masseter-zaehneknirschen-bruxismus", anchor: "bruxismus", headingDe: "Masseter / Bruxismus", headingEn: "Masseter / bruxism" },
  { priceSlug: "hyperhidrose", serviceSlug: "hyperhidrose-starkes-schwitzen", anchor: "hyperhidrose", headingDe: "Hyperhidrose (starkes Schwitzen)", headingEn: "Hyperhidrosis (excessive sweating)" },
];

const COMBINATIONS = ["2-zonen", "3-zonen", "4-zonen"];

function priceFor(slug: string) {
  return pricingSections.botox.rows.find((row) => row.slug === slug)?.price?.amount;
}

function formatPrice(amount: number | undefined, locale: "de" | "en") {
  if (typeof amount !== "number") return null;
  return locale === "de"
    ? `${amount.toLocaleString("de-DE")} €`
    : `€${amount.toLocaleString("en-GB")}`;
}

function descriptionFor(serviceSlug: string | undefined, locale: "de" | "en") {
  if (!serviceSlug) return null;
  const list = locale === "de" ? botulinumtoxinServices : botulinumtoxinServicesEn;
  const index = botulinumtoxinServices.findIndex((s) => s.slug === serviceSlug);
  if (index < 0) return null;
  return list[index]?.paragraphs?.[0] ?? null;
}

function detailHref(serviceSlug: string | undefined, locale: "de" | "en") {
  if (!serviceSlug) return null;
  const index = botulinumtoxinServices.findIndex((s) => s.slug === serviceSlug);
  if (index < 0) return null;
  const slug = locale === "de" ? botulinumtoxinServices[index].slug : botulinumtoxinServicesEn[index]?.slug;
  if (!slug) return null;
  return locale === "de" ? `/botox-behandlung/${slug}` : `/en/botox-treatment/${slug}`;
}

export default function BotoxZoneCosts({ locale = "de" }: { locale?: "de" | "en" }) {
  const de = locale === "de";
  const consultation = formatPrice(priceFor("beratung"), locale);

  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 text-primaryLighter lg:px-0">
      <h2 className="font-serif text-2xl text-primary">
        {de ? "Botulinumtoxin Kosten nach Behandlungszone" : "Botulinum toxin cost by treatment area"}
      </h2>
      <p className="mt-3 leading-7">
        {de
          ? "Die Kosten richten sich nach der behandelten Zone und dem individuellen Befund. Nachfolgend finden Sie den Startpreis je Bereich; die endgültige Empfehlung wird vor der Behandlung ärztlich besprochen."
          : "Cost depends on the area treated and the individual findings. Below is the starting price per area; the final recommendation is discussed with a physician before treatment."}
      </p>

      <div className="mt-8 space-y-6">
        {ZONES.map((zone) => {
          const price = formatPrice(priceFor(zone.priceSlug), locale);
          const description = descriptionFor(zone.serviceSlug, locale);
          const href = detailHref(zone.serviceSlug, locale);
          const heading = de ? zone.headingDe : zone.headingEn;

          return (
            <div key={zone.anchor} id={`kosten-${zone.anchor}`} className="scroll-mt-24 rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-primary">
                {de ? `${heading}: Kosten` : `${heading}: cost`}
              </h3>
              {price && (
                <p className="mt-1 font-semibold text-primary">
                  {de ? `ab ${price}` : `from ${price}`}
                </p>
              )}
              {description && <p className="mt-2 leading-7">{description}</p>}
              {href && (
                <Link href={href} className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-4">
                  {de ? `Mehr zu ${heading}` : `More on ${heading.toLowerCase()}`}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <div id="kosten-kombinationen" className="mt-10 scroll-mt-24 rounded-lg border border-primary/10 bg-lightBeige/60 p-5">
        <h3 className="font-serif text-lg font-semibold text-primary">
          {de ? "Kombinationen: 2, 3 und 4 Zonen" : "Combinations: 2, 3 and 4 areas"}
        </h3>
        <p className="mt-2 leading-7">
          {de
            ? "Werden mehrere Bereiche gemeinsam behandelt, gilt ein Kombinationspreis statt der Summe der Einzelzonen."
            : "When several areas are treated together, a combination price applies instead of the sum of the individual areas."}
        </p>
        <ul className="mt-4 space-y-1">
          {COMBINATIONS.map((slug) => {
            const price = formatPrice(priceFor(slug), locale);
            const row = pricingSections.botox.rows.find((r) => r.slug === slug);
            if (!price || !row) return null;
            return (
              <li key={slug} className="flex justify-between gap-6 border-b border-primary/10 py-1.5 last:border-b-0">
                <span>{de ? row.label.de : row.label.en}</span>
                <span className="font-semibold text-primary">{de ? `ab ${price}` : `from ${price}`}</span>
              </li>
            );
          })}
        </ul>
        {consultation && (
          <p className="mt-4 text-sm leading-6">
            {de
              ? `Ein reines Beratungsgespräch ohne Behandlung kostet ${consultation}.`
              : `A consultation without treatment costs ${consultation}.`}
          </p>
        )}
      </div>
    </section>
  );
}
