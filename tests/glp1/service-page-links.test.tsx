import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ClinicTreatmentPage } from "app/components/ClinicTreatmentPage";

vi.mock("app/components/Motion", () => ({
  MotionSection: ({ children, ...props }: any) => (
    <section {...props}>{children}</section>
  ),
  MotionCard: ({ children, delay, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
}));

for (const locale of ["de", "en"] as const) {
  describe(`GLP-1 service page links in ${locale}`, () => {
    it("shows both forms in a dedicated section before the treatment details", () => {
      render(<ClinicTreatmentPage pageKey="weightLoss" locale={locale} />);
      const title = locale === "de" ? "GLP-1-Fragebögen" : "GLP-1 questionnaires";
      const section = screen.getByRole("region", { name: title });
      const prefix = locale === "en" ? "/en" : "";
      expect(within(section).getByRole("link", {
        name: locale === "de" ? "Fragebogen starten" : "Start questionnaire",
      })).toHaveAttribute("href", `${prefix}/glp-1-check/new`);
      expect(within(section).getByRole("link", {
        name: locale === "de" ? "Folge-Fragebogen starten" : "Start follow-up questionnaire",
      })).toHaveAttribute("href", `${prefix}/glp-1-check/follow-up`);
      expect(screen.queryByRole("link", { name: title })).not.toBeInTheDocument();
      const bodyLink = screen.getByRole("link", {
        name: locale === "de" ? "medizinischen Fragebogen" : "medical questionnaire",
      });
      expect(section.compareDocumentPosition(bodyLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });
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
      const bookingButtons = screen.getAllByRole("button", {
        name:
          locale === "de"
            ? "Termin bei Praxis Jona anfragen"
            : "Request an appointment at Praxis Jona",
      });
      bookingButtons.forEach((button) =>
        expect(button).toHaveAttribute("data-booking-cta", "insurance-dialog"),
      );
    });
  });
}
