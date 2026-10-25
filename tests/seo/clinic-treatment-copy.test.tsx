import { readFileSync } from "node:fs";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import data from "app/content/clinic-treatment-updates.json";
import {
  ClinicTreatmentPage,
  clinicTreatmentMetadata,
} from "app/components/ClinicTreatmentPage";

vi.mock("next/link", () => ({
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));
const original = readFileSync(
  "docs/content/2026-10-25-clinic-change-request.txt",
  "utf8",
);
const normalize = (text: string) => text.replace(/\s+/g, " ").trim();

for (const key of ["profhilo", "weightLoss", "nutrition"] as const) {
  describe(`${key} approved copy`, () => {
    it("preserves every supplied content line in order", () => {
      const title = data[key].blocks[0].text!;
      const start = original.indexOf(title);
      const end =
        key === "profhilo"
          ? original.indexOf("SEO-Titel:")
          : key === "weightLoss"
            ? original.indexOf("Ärztliche Ernährungsberatung in Berlin-Mitte")
            : original.indexOf("Todos in albanian");
      const expected = original
        .slice(start, end)
        .split(/\r?\n|\u2028/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) =>
          normalize(
            line
              .replace(/^Button: /, "")
              .replace(/^[•\t\s]+/, "")
              .replace(/^\d\. (?=Lassen|Fordern|Reichen)/, ""),
          ),
        );
      const blocks = data[key].blocks;
      const actual = blocks
        .flatMap((block) =>
          "headers" in block
            ? [
                block.headers!.join(" "),
                ...block.rows!.map((row) => row.join(" ")),
              ]
            : "items" in block
              ? block.items!
              : [block.text!],
        )
        .map(normalize);
      expect(actual).toEqual(expected);
    });

    it("renders one title, complete copy, working links, and tracked booking controls", () => {
      const html = renderToStaticMarkup(<ClinicTreatmentPage pageKey={key} />);
      const container = document.createElement("div");
      container.innerHTML = html;
      const renderedText = normalize(container.textContent ?? "");
      for (const block of data[key].blocks) {
        if ("text" in block)
          expect(renderedText).toContain(normalize(block.text!));
        if ("rows" in block)
          for (const row of block.rows!)
            for (const cell of row)
              expect(renderedText).toContain(normalize(cell));
        if ("items" in block)
          for (const item of block.items!)
            expect(renderedText).toContain(normalize(item));
      }
      expect(html.match(/<h1\b/g)).toHaveLength(1);
      if (key !== "nutrition")
        expect(html).toContain('data-booking-cta="insurance-dialog"');
      else expect(html).toContain('href="/kontakt"');
      expect(html).not.toContain("Button:");
      for (const block of data[key].blocks) {
        if (block.type === "link" && "href" in block)
          expect(html).toContain(`href="${block.href}"`);
      }
    });

    it("preserves supplied SEO metadata without truncation", () => {
      expect(clinicTreatmentMetadata(key).title).toEqual({
        absolute: data[key].title,
      });
      expect(clinicTreatmentMetadata(key).description).toBe(
        data[key].description,
      );
    });
  });
}
