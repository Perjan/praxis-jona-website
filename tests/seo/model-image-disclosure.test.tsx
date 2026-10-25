import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import registry from "../../data/image-disclosures.json";
import { getImageDisclosure } from "app/components/imageDisclosureRegistry";
import { BotulinumtoxinMainPage } from "app/components/BotulinumtoxinPage";
import TreatmentPricingBlock from "app/components/pricing/TreatmentPricingBlock";
import { ArticleImage } from "app/(de)/blog/[slug]/BlogMdxComponents";
import TVLegacyClient from "app/(de)/tv-legacy/TVPageClient";
import { ServiceTreatmentTemplate } from "app/(de)/tv/templates/ServiceTreatmentTemplate";

function disclosures(markup: string) {
  return Array.from(markup.matchAll(/data-image-disclosure="([^"]+)"/g)).map(match => match[1]);
}

describe("model image disclosure coverage", () => {
  it("resolves only reviewed images and keeps real staff photos unlabelled", () => {
    expect(getImageDisclosure("/images/team/jonaClinic.jpeg")).toBeUndefined();
    expect(getImageDisclosure("/images/clinic/clinic-newA.jpg")).toBeUndefined();
    expect(getImageDisclosure("/images/aesthetik/not-reviewed.jpg")).toBeUndefined();
    expect(getImageDisclosure("/images/blog-images/prp-haarausfall-models-ai.png?version=2", undefined, "en"))
      .toEqual({ kind: "ai-generated", label: "AI-generated" });
  });

  it("records evidence for each classification and references existing assets", () => {
    for (const [src, sourceId] of Object.entries(registry.images)) {
      expect(existsSync(`public${src}`), src).toBe(true);
      expect(registry.sources[sourceId]?.evidence, src).toBeTruthy();
      expect(registry.sources[sourceId]?.kind, src).toBe("ai-generated");
    }
  });

  it.each([
    "/aesthetik/prp-behandlung",
    "/aesthetik/microneedling",
    "/aesthetik/polynukleotide",
    "/leistungen/haarausfall-berlin-mitte",
  ])("labels every treatment card image on %s", (canonical) => {
    const markup = renderToStaticMarkup(<TreatmentPricingBlock canonical={canonical} locale="de" />);
    const imageCount = Array.from(markup.matchAll(/<img\b/g)).length;
    expect(imageCount).toBeGreaterThan(0);
    expect(disclosures(markup)).toEqual(Array(imageCount).fill("ai-generated"));
  });

  it.each(["de", "en"] as const)("labels the Botox hero and all model service cards in %s", (locale) => {
    const markup = renderToStaticMarkup(<BotulinumtoxinMainPage locale={locale} />);
    const imageCount = Array.from(markup.matchAll(/<img\b/g)).length;
    expect(disclosures(markup)).toEqual(Array(imageCount).fill("ai-generated"));
    expect(markup).toContain(locale === "en" ? "AI-generated" : "KI-generiert");
  });

  it("labels inline AI blog images without changing their captions", () => {
    const markup = renderToStaticMarkup(<ArticleImage src="/images/blog-images/iron-infusion-women/hero.png" alt="Consultation" caption="Original caption" locale="en" />);
    expect(disclosures(markup)).toEqual(["ai-generated"]);
    expect(markup).toContain("AI-generated");
    expect(markup).toContain("Original caption");
  });

  it("labels legacy model slides and leaves team composites unlabelled", () => {
    const markup = renderToStaticMarkup(<TVLegacyClient baseImages={["/tv-legacy/slide2.jpg", "/tv-legacy/slide6.jpg", "/images/team/jonaClinic.jpeg"]} locale="en" />);
    expect(disclosures(markup)).toEqual(["ai-generated", "ai-generated"]);
    expect(markup).toContain("AI-generated");
    expect(markup).toContain("top-2 left-2");
  });

  it("keeps the disclosure when model imagery is reused on the waiting-room display", () => {
    const markup = renderToStaticMarkup(<ServiceTreatmentTemplate locale="en" slide={{
      id: "botulinumtoxin-zornesfalte", kind: "service-treatment", title: "Frown lines",
      image: "/tv/backgrounds/bg-clinical.svg", visualImage: "/images/botulinumtoxin/zornesfalte-glabella.webp",
      qrUrl: "https://praxisjona.de/en/botox-treatment/zornesfalte", qrLabel: "Open treatment",
    }} />);
    expect(disclosures(markup)).toEqual(["ai-generated"]);
    expect(markup).toContain("AI-generated");
  });
});
