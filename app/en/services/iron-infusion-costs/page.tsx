import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import Link from "next/link";
import React from "react";

const title = "Iron Infusion Costs in Berlin & Berlin Mitte: Pricing, Process & FAQs";
const description = "How much does an iron infusion cost in Berlin and Berlin Mitte? Clear guidance on typical pricing, medical process, and common questions about private billing (GOÄ).";
const url = "/en/services/iron-infusion-costs";

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
      de: "/leistungen/eiseninfusion-kosten"
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does an iron infusion cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At our practice, treatment for medically confirmed iron deficiency is offered at a fixed price of €150.95."
        }
      },
      {
        "@type": "Question",
        name: "Is iron infusion covered by insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Billing is generally private under the German medical fee schedule (GOÄ). Reimbursement depends on your private insurance plan."
        }
      },
      {
        "@type": "Question",
        name: "What is the treatment process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Before treatment, we perform a physician-led assessment including relevant lab markers. The therapy plan and expected costs are discussed transparently in advance."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="overflow-hidden bg-white relative isolate">
        <SectionWithColor backgroundClassName="bg-white">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
            <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
          </div>
        </SectionWithColor>

        <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
          <SectionWithColor backgroundClassName="bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden">
            <h2 className="text-2xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Iron infusion price overview</h2>
            <p className="mt-2 text-lg leading-8 text-primaryLighter">
              For medically confirmed iron deficiency, treatment in our practice is offered at a fixed price of €150.95.
            </p>

            <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">What affects the final price?</h2>
            <ul className="mt-2 text-lg leading-8 text-primaryLighter list-disc pl-6">
              <li>Baseline findings (e.g., ferritin, transferrin saturation)</li>
              <li>Required dose and number of sessions</li>
              <li>Any additional services needed during treatment</li>
            </ul>

            <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Transparent private billing</h2>
            <p className="mt-2 text-lg leading-8 text-primaryLighter">
              Billing is handled as a private medical service under GOÄ. We discuss expected costs transparently before treatment starts.
            </p>

            <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Related page</h2>
            <p className="mt-2 text-lg leading-8 text-primaryLighter">
              For medical background and indications, see our
              <Link className="underline ml-1" href="/en/services/infusion-therapy">infusion therapy page</Link>.
            </p>
          </SectionWithColor>
        </div>
      </div>
    </>
  );
}
