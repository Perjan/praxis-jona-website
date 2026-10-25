import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { legacyImages } from "app/(de)/tv-legacy/slides";
import { getPricingPageConfig } from "app/components/pricing/pricingData";
import { categoryContent } from "app/components/pageContent";
import { LongevityMarkdownHub } from "app/components/LongevityMarkdownPage";
import { TV_NEW_SLIDES, TV_NEW_SLIDES_EN } from "app/(de)/tv/content";

for (const locale of ["de", "en"] as const) {
  it(`removes the retired programme from ${locale} pricing and TV`, () => {
    for (const page of ["global", "healthLongevity"] as const) {
      expect(getPricingPageConfig(page, locale).sections.some(section => section.slug === "praevention")).toBe(false);
    }
    const slides = locale === "de" ? TV_NEW_SLIDES : TV_NEW_SLIDES_EN;
    expect(slides.some(slide => slide.id === "prevention")).toBe(false);
    expect(slides.some(slide => slide.id === "primary-care-prevention")).toBe(true);
  });

  it(`keeps the ${locale} longevity hub without HER or retired programme links`, () => {
    const html = renderToStaticMarkup(<LongevityMarkdownHub locale={locale} />);
    expect(html).not.toContain("HER –");
    expect(html).not.toMatch(/href="(?:\/praevention|\/en\/prevention)(?:\/(?:basic|medium|premium))?"/);
    const content = categoryContent[locale === "de" ? "longevityDe" : "longevityEn"];
    expect(JSON.stringify(content)).not.toMatch(/"href":"(?:\/praevention|\/en\/prevention)(?:\/(?:basic|medium|premium))?"/);
  });
}

it("removes programme composites from the legacy rotation and keeps all remaining assets available", () => {
  for (const retired of [10, 11, 12, 13]) {
    expect(legacyImages).not.toContain(`/tv-legacy/slide${retired}.jpg`);
  }
  for (const image of legacyImages) expect(existsSync(`public${image}`)).toBe(true);
});
