import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import GermanPage from "app/(de)/aesthetik/polynukleotide/[slug]/page";
import EnglishPage from "app/(en)/en/aesthetics/polynucleotides/[slug]/page";
import german from "app/content/clinic-treatment-updates.json";
import english from "app/content/clinic-treatment-updates-en.json";

vi.mock("app/components/Motion", () => ({
  MotionSection: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  MotionCard: ({ children, delay, ...props }: any) => <div {...props}>{children}</div>,
}));
const normalize = (text: string) => text.replace(/\s+/g, " ").trim();
for (const locale of ["de", "en"] as const) {
  describe(`Profhilo aesthetics template in ${locale}`, () => {
    const source = (locale === "de" ? german : english).profhilo;
    const render = async () => {
      const root = document.createElement("div");
      const page = await (locale === "de" ? GermanPage : EnglishPage)({ params: Promise.resolve({ slug: "profhilo" }) });
      root.innerHTML = renderToStaticMarkup(page);
      return root;
    };
    it("uses the shared split hero, facts strip, FAQ accordions, and related cards", async () => {
      const root = await render();
      expect(root.querySelector('section[class*="lg:grid-cols-[1fr_0.72fr]"]')).not.toBeNull();
      expect(root.querySelector('[class*="rounded-[2rem]"][class*="bg-primary"]')).not.toBeNull();
      expect(root.querySelectorAll("details summary")).toHaveLength(7);
      expect(root.textContent).toContain(locale === "de" ? "Weitere Skinbooster" : "More skin boosters");
      expect(root.querySelectorAll("h1")).toHaveLength(1);
      expect(root.querySelector("h1")?.textContent).toBe(source.blocks[0].text);
    });
    it("preserves all supplied paragraphs, questions, CTA labels, and three price rows", async () => {
      const root = await render();
      root.querySelectorAll("script").forEach(script => script.remove());
      const text = normalize(root.textContent ?? "");
      for (const block of source.blocks) {
        if ("text" in block) expect(text).toContain(normalize(block.text!));
      }
      const table = source.blocks.find(block => block.type === "table")!;
      const rows = Array.from(root.querySelectorAll("table tr")).map(row => Array.from(row.children).map(cell => cell.textContent));
      expect(rows).toEqual([table.headers, ...table.rows!]);
      expect(text).not.toContain("3–4 Behandlungen");
      expect(text).not.toContain("3-4 treatments");
    });
  });
}
