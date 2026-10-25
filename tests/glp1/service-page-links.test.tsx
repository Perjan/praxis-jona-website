import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClinicTreatmentPage } from "app/components/ClinicTreatmentPage";

for (const locale of ["de", "en"] as const) {
  describe(`GLP-1 service page links in ${locale}`, () => {
    it("keeps the intake and follow-up forms reachable through the supplied text", () => {
      render(<ClinicTreatmentPage pageKey="weightLoss" locale={locale} />);
      const prefix = locale === "en" ? "/en" : "";
      expect(
        screen.getByRole("link", {
          name:
            locale === "de"
              ? "medizinischen Fragebogen"
              : "medical questionnaire",
        }),
      ).toHaveAttribute("href", `${prefix}/glp-1-check`);
      expect(
        screen.getByRole("link", {
          name:
            locale === "de" ? "Online-Folgeformular" : "online follow-up form",
        }),
      ).toHaveAttribute("href", `${prefix}/glp-1-check/follow-up`);
      expect(
        screen.getByRole("link", {
          name:
            locale === "de"
              ? "Termin bei Praxis Jona anfragen"
              : "Request an appointment at Praxis Jona",
        }),
      ).toHaveAttribute("data-booking-cta", "doctolib");
    });
  });
}
