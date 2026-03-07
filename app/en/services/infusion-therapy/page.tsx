import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import Link from "next/link";
import React from "react";

const title = "Individualized Infusion Therapy for Micronutrient Deficiency";
const description = "In our Berlin practice, we offer targeted infusion therapy for medically confirmed deficiencies such as iron, vitamin B12, or folate — tailored to your lab results and clinical needs.";
const url = "/en/services/infusion-therapy";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 600,
        alt: "Praxis Jona"
      }
    ]
  },
  alternates: {
    canonical: url,
    languages: {
      en: url,
      de: "/leistungen/infusionstherapie"
    }
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"]
  }
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-white relative isolate">
      <SectionWithColor backgroundClassName="bg-white">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
        </div>
      </SectionWithColor>

      <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
        <SectionWithColor backgroundClassName="bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden">
          <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Iron infusions for iron deficiency</h2>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">
            Iron deficiency can lead to fatigue, reduced concentration, hair loss, or recurrent infections — even when hemoglobin is still within range.
          </p>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">
            If relevant deficiency is confirmed (e.g., ferritin, transferrin saturation), iron infusion can be medically useful,
            especially when oral supplementation is not tolerated or not sufficient.
          </p>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">
            Billing is based on the German Medical Fee Schedule (GOÄ); the treatment is offered at a fixed price of €135.
          </p>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">
            Looking for pricing details? See our
            <Link className="underline ml-1" href="/en/services/iron-infusion-costs">iron infusion costs page</Link>.
          </p>

          <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Vitamin B12 and folate infusions</h2>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">
            Deficiencies in vitamin B12 or folate may occur gradually and can affect energy levels, neurological function, and blood parameters.
            After diagnostics, we offer individualized infusion protocols to replenish stores effectively.
          </p>

          <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Costs and billing</h2>
          <p className="mt-2 text-lg leading-8 text-primaryLighter">
            These treatments are private medical services billed under GOÄ.
            Final costs depend on indication and treatment scope, and are discussed transparently before treatment.
          </p>
        </SectionWithColor>
      </div>
    </div>
  );
}
