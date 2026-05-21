import { Constants } from "app/Constants";
import type { PricingLocale, PricingPageConfig, PricingRow, PricingSection } from "./pricingData";
import { absoluteUrl } from "./pricingData";

const clinic = {
  "@type": "MedicalClinic",
  "@id": `${Constants.baseUrl}/#organization`,
  name: Constants.appName,
  url: Constants.baseUrl,
  telephone: Constants.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Torstrasse 125",
    postalCode: "10119",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
};

function rowUrl(section: PricingSection, row: PricingRow, locale: PricingLocale): string {
  const href = row.detailHref?.[locale] ?? section.detailHref?.[locale] ?? "";
  return absoluteUrl(href ? `${href}#${row.slug}` : `#${section.slug}-${row.slug}`);
}

function buildOffers(section: PricingSection, row: PricingRow, locale: PricingLocale) {
  if (typeof row.price?.amount !== "number") {
    return undefined;
  }

  const offerName = section.slug === "botox" ? `${section.title[locale]}: ${row.label[locale]}` : row.label[locale];

  const baseOffer = {
    "@type": "Offer",
    name: offerName,
    price: row.price.amount,
    priceCurrency: row.price.currency,
    availability: "https://schema.org/InStock",
    url: rowUrl(section, row, locale),
    seller: clinic,
  };

  if (typeof row.packageOffer?.price.amount !== "number") {
    return baseOffer;
  }

  return [
    baseOffer,
    {
      "@type": "Offer",
      name: `${offerName}: ${row.packageOffer.label[locale]}`,
      price: row.packageOffer.price.amount,
      priceCurrency: row.packageOffer.price.currency,
      availability: "https://schema.org/InStock",
      url: rowUrl(section, row, locale),
      seller: clinic,
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        value: row.packageOffer.quantity,
      },
    },
  ];
}

function buildService(section: PricingSection, row: PricingRow, locale: PricingLocale) {
  const offer = buildOffers(section, row, locale);
  const serviceName = section.slug === "botox" ? `${section.title[locale]}: ${row.label[locale]}` : row.label[locale];

  return {
    "@type": "Service",
    "@id": `${absoluteUrl(section.detailHref?.[locale] ?? section.bookingHref?.[locale] ?? "")}#${section.slug}-${row.slug}`,
    name: serviceName,
    description: row.description?.[locale] ?? section.description[locale],
    url: rowUrl(section, row, locale),
    provider: clinic,
    ...(offer ? { offers: offer } : {}),
  };
}

export function buildPricingJsonLd(config: PricingPageConfig) {
  const pageUrl = absoluteUrl(config.canonical);
  const services = config.sections.flatMap((section) =>
    section.rows.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: buildService(section, row, config.locale),
    })),
  );

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: config.title,
      description: config.description,
      inLanguage: config.locale === "de" ? "de-DE" : "en-US",
      about: clinic,
      publisher: clinic,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: config.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.href),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#pricing-services`,
      name: config.title,
      itemListElement: services.map((service, index) => ({ ...service, position: index + 1 })),
    },
  ];

  if (config.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
}
