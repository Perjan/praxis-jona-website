import { Constants } from "app/Constants";

export const CLINIC_ID = `${Constants.baseUrl}/#organization`;
export const PHYSICIAN_ID = `${Constants.baseUrl}/#physician`;

// Taken from the ll= parameter of Constants.contact.appleMapsUrl.
const GEO_LATITUDE = 52.529748;
const GEO_LONGITUDE = 13.400656;

// Single source of truth for the postal address. Previously each schema block
// spelled this out again, and they had drifted apart ("Torstraße" vs
// "Torstrasse"), which weakens NAP consistency for local search.
export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Torstraße 125",
  postalCode: "10119",
  addressLocality: "Berlin",
  addressRegion: "Berlin",
  addressCountry: "DE",
} as const;

// Constants.openingHours carries display markup ("08:30 - 12:30 <br> 15:00 - 18:00"),
// so the machine-readable pairs are declared separately here. Monday has two
// blocks; Saturday and Sunday are closed and are therefore simply absent.
export const openingHoursSpecification = [
  { dayOfWeek: "Monday", opens: "08:30", closes: "12:30" },
  { dayOfWeek: "Monday", opens: "15:00", closes: "18:00" },
  { dayOfWeek: "Tuesday", opens: "08:30", closes: "14:30" },
  { dayOfWeek: "Wednesday", opens: "08:30", closes: "12:30" },
  { dayOfWeek: "Thursday", opens: "12:00", closes: "17:00" },
  { dayOfWeek: "Friday", opens: "08:30", closes: "12:30" },
].map((slot) => ({ "@type": "OpeningHoursSpecification", ...slot }));

export const physicianSchema = {
  "@type": "Physician",
  "@id": PHYSICIAN_ID,
  name: "Dr. med. Jonida Gjolli",
  jobTitle: "Fachärztin für Innere Medizin",
  url: `${Constants.baseUrl}/team`,
  image: `${Constants.baseUrl}/images/team/jonaClinic.jpeg`,
  medicalSpecialty: ["InternalMedicine", "PrimaryCare"],
  address: postalAddress,
  worksFor: { "@id": CLINIC_ID },
};

/**
 * Reference the clinic by node id instead of inlining the whole entity.
 * Embedding the full object in every Offer previously repeated MedicalClinic
 * and PostalAddress 200+ times on a single page.
 */
export const clinicReference = { "@id": CLINIC_ID };

/**
 * The canonical MedicalClinic node. Declare this once per page; everything else
 * should point at it via `clinicReference`.
 */
export function buildClinicSchema(extra: Record<string, unknown> = {}) {
  return {
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: Constants.appName,
    url: Constants.baseUrl,
    image: `${Constants.baseUrl}/images/og-image.png`,
    telephone: Constants.contact.phone,
    email: Constants.contact.email,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_LATITUDE,
      longitude: GEO_LONGITUDE,
    },
    hasMap: Constants.contact.googleMapsUrl,
    openingHoursSpecification,
    medicalSpecialty: ["InternalMedicine", "PrimaryCare"],
    employee: { "@id": PHYSICIAN_ID },
    sameAs: [
      "https://www.instagram.com/doc.jona/",
      "https://www.youtube.com/@doc.jonida",
      "https://www.tiktok.com/@doc.jonida",
    ],
    ...extra,
  };
}
