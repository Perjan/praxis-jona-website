import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { ClinicTreatmentPage } from "app/components/ClinicTreatmentPage";
import de from "app/content/clinic-treatment-updates.json";
import en from "app/content/clinic-treatment-updates-en.json";
vi.mock("app/components/Motion", () => ({
  MotionSection: ({ children, ...props }: any) => (
    <section {...props}>{children}</section>
  ),
  MotionCard: ({ children, delay, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
}));
for (const locale of ["de", "en"] as const)
  for (const pageKey of ["weightLoss", "nutrition"] as const) {
    describe(`${pageKey} design in ${locale}`, () => {
      it("uses the same hero, summary strip, and related-card layout as aesthetics", () => {
        const root = document.createElement("div");
        root.innerHTML = renderToStaticMarkup(
          <ClinicTreatmentPage pageKey={pageKey} locale={locale} />,
        );
        expect(
          root.querySelector('section[class*="lg:grid-cols-[1fr_0.72fr]"]'),
        ).not.toBeNull();
        expect(
          root.querySelector('[class*="rounded-[2rem]"][class*="bg-primary"]'),
        ).not.toBeNull();
        expect(root.querySelectorAll("h1")).toHaveLength(1);
        expect(root.querySelectorAll("details summary")).toHaveLength(
          pageKey === "weightLoss" ? 4 : 0,
        );
        expect(
          root.querySelector("section[data-treatment-related]"),
        ).not.toBeNull();
      });
      it("keeps all supplied words, list items, tables, and links", () => {
        const source = (locale === "de" ? de : en)[pageKey];
        const root = document.createElement("div");
        root.innerHTML = renderToStaticMarkup(
          <ClinicTreatmentPage pageKey={pageKey} locale={locale} />,
        );
        root.querySelectorAll("script").forEach((script) => script.remove());
        const text = (root.textContent ?? "").replace(/\s+/g, " ");
        for (const block of source.blocks) {
          if ("text" in block)
            expect(text).toContain(block.text!.replace(/\s+/g, " "));
          if ("items" in block)
            for (const item of block.items!)
              expect(text).toContain(item.replace(/\s+/g, " "));
          if ("rows" in block)
            for (const row of block.rows!)
              for (const cell of row)
                expect(text).toContain(cell.replace(/\s+/g, " "));
          if ("href" in block)
            expect(
              root.querySelector(`a[href="${block.href}"]`),
            ).not.toBeNull();
        }
      });
    });
  }
