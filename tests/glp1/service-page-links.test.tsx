import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LongevityMarkdownPage } from "@/app/components/LongevityMarkdownPage";

class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver = IntersectionObserverStub as unknown as typeof IntersectionObserver;

describe("GLP-1 service page links", () => {
  it("links both German questionnaire CTAs to the German intake landing page", () => {
    render(<LongevityMarkdownPage sectionKey="weightLoss" locale="de" />);

    const questionnaireLinks = screen.getAllByRole("link", { name: "Online-Fragebogen starten" });
    expect(questionnaireLinks).toHaveLength(2);
    questionnaireLinks.forEach((link) => expect(link).toHaveAttribute("href", "/glp-1-check"));
    expect(screen.getByRole("link", { name: "Termin buchen" })).toHaveAttribute("target", "_blank");
  });

  it("links both English questionnaire CTAs to the English intake landing page", () => {
    render(<LongevityMarkdownPage sectionKey="weightLoss" locale="en" />);

    const questionnaireLinks = screen.getAllByRole("link", { name: "Start online questionnaire" });
    expect(questionnaireLinks).toHaveLength(2);
    questionnaireLinks.forEach((link) => expect(link).toHaveAttribute("href", "/en/glp-1-check"));
    expect(screen.getByRole("link", { name: "Book appointment" })).toHaveAttribute("target", "_blank");
  });
});
