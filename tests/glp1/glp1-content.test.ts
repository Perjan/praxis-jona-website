import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";

import { getLongevitySectionMarkdown, getLongevitySectionTitle } from "@/app/content/longevitySource";
import { formatPrice, pricingSections } from "@/app/components/pricing/pricingData";

const oldGlp1Copy = [
  "abnehmspritze-paket",
  "rundum-sorglos",
  "1499",
  "Rundum-Sorglos",
];

function normalizedPrice(slug: string, locale: "de" | "en") {
  const row = pricingSections.glp1.rows.find((pricingRow) => pricingRow.slug === slug);
  return formatPrice(row?.price, locale).replace(/\u00a0/g, " ");
}

describe("GLP-1 weight-loss content", () => {
  it("uses the approved German and English page headings", () => {
    expect(getLongevitySectionTitle("weightLoss", "de")).toBe("Medizinische Gewichtsreduktion & GLP-1-Therapie");
    expect(getLongevitySectionTitle("weightLoss", "en")).toBe("Medical Weight Loss & GLP-1 Therapy");
  });

  it("renders the new German source details and digital therapy path", () => {
    const source = getLongevitySectionMarkdown("weightLoss", "de");

    expect(source).toContain("Eine erfolgreiche Gewichtsreduktion ist mehr als die Verordnung einer Abnehmspritze.");
    expect(source).toContain("Voraussichtliche Kosten: ca. 289 €");
    expect(source).toContain("Velto Premium | 20 € monatlich");
    expect(source).toContain("Zugang zur modernen GLP-1-App Velto");
    expect(source).toContain("diskret und komfortabel zu Ihnen nach Hause geschickt");
    expect(source).toContain("diskrete und komfortable Zusendung des Rezepts nach Hause");
    expect(source).toContain("EU-/EWR-Auslandsrezept bei erfüllten Voraussetzungen möglich");
    expect(source).toContain("Eine Verordnung erfolgt ausschließlich nach ärztlicher Prüfung");

    for (const oldCopy of oldGlp1Copy) {
      expect(source).not.toContain(oldCopy);
    }
  });

  it("exposes the current GLP-1 prices through shared pricing data", () => {
    const rowBySlug = new Set(pricingSections.glp1.rows.map((row) => row.slug));

    expect(normalizedPrice("umfassender-ersttermin", "de")).toBe("ca. 289 €");
    expect(normalizedPrice("digitaler-ersttermin", "de")).toBe("ca. 89 €");
    expect(normalizedPrice("velto-premium", "de")).toBe("20 €");
    expect(normalizedPrice("video-bedarf", "de")).toBe("69 €");

    for (const oldSlug of ["beratung-start", "erhaltungsphase", "abnehmspritze-paket", "rundum-sorglos"]) {
      expect(rowBySlug.has(oldSlug)).toBe(false);
    }
  });
});

describe("GLP-1 eligibility check", () => {
  it("adds the step-by-step suitability check to the weight-loss page", () => {
    const component = readFileSync(path.join(process.cwd(), "app/components/Glp1EligibilityCheck.tsx"), "utf8");
    const page = readFileSync(path.join(process.cwd(), "app/components/LongevityMarkdownPage.tsx"), "utf8");
    const customSections = readFileSync(path.join(process.cwd(), "app/components/Glp1PageSections.tsx"), "utf8");

    expect(page).toContain('sectionKey === "weightLoss" && <Glp1EligibilityCheck locale={locale} />');
    expect(page).toContain('sectionKey === "weightLoss" && <Glp1CarePath locale={locale} />');
    expect(page).toContain('sectionKey === "weightLoss" && <Glp1DigitalAndSuitability locale={locale} />');
    expect(page).toContain('sectionKey === "weightLoss" && <Glp1PricingCta locale={locale} />');
    expect(component).toContain("Eignungs-Check");
    expect(component).toContain("Beantworten Sie sechs kurze Fragen ohne Dateneingabe");
    expect(component).toContain("Sind Sie mindestens 18 Jahre alt?");
    expect(component).toContain("BMI bei mindestens 30");
    expect(component).toContain("Eine Verordnung erfolgt nur nach ärztlicher Prüfung");
    expect(customSections).toContain("Ihr Behandlungsweg in der Praxis Jona.");
    expect(customSections).toContain("Für wen wir eine GLP-1-Therapie prüfen.");
    expect(customSections).toContain("Transparente Startpunkte für Ihre Behandlung.");
    expect(customSections).toContain("EU-/EWR-Auslandsrezept möglich");
    expect(customSections).toContain("EU/EEA cross-border prescription possible");
  });

  it("keeps the detailed GLP-1 information in compact accordions", () => {
    const page = readFileSync(path.join(process.cwd(), "app/components/LongevityMarkdownPage.tsx"), "utf8");

    expect(page).toContain('sectionKey === "weightLoss"');
    expect(page).toContain("Details zur Behandlung und Abrechnung");
    expect(page).toContain("<details");
    expect(page).toContain("Treatment and Billing Details");
  });
});
