import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Glp1LandingPage from "@/app/glp1/Glp1LandingPage";
import Glp1Questionnaire from "@/app/glp1/Glp1Questionnaire";

vi.mock("@/app/(de)/anamnese/SignaturePad", () => ({
  default: ({ onChange }: { onChange: (value: string) => void }) => (
    <button
      type="button"
      onClick={() => onChange("data:image/png;base64,dGVzdA==")}
    >
      Test signature
    </button>
  ),
}));

describe("GLP-1 public pages", () => {
  it("renders the German landing page with both intake paths and verified safety language", () => {
    render(<Glp1LandingPage locale="de" />);

    expect(screen.getByRole("heading", { name: "GLP-1-Behandlung medizinisch prüfen lassen." })).toBeVisible();
    expect(screen.getAllByRole("link", { name: /Fragebogen starten/ })[0]).toHaveAttribute("href", "/glp-1-check/new");
    expect(screen.getAllByRole("link", { name: /bereits in Behandlung/ })[0]).toHaveAttribute(
      "href",
      "/glp-1-check/follow-up",
    );
    expect(document.body).toHaveTextContent(/ohne automatische Therapieentscheidung/i);
    expect(screen.getByText(/112/)).toBeVisible();
  });

  it("renders localized English entry links", () => {
    render(<Glp1LandingPage locale="en" />);

    expect(screen.getByRole("heading", { name: "Have your GLP-1 treatment medically reviewed." })).toBeVisible();
    expect(screen.getAllByRole("link", { name: /Start questionnaire/ })[0]).toHaveAttribute(
      "href",
      "/en/glp-1-check/new",
    );
  });

  it("stops a minor on the first questionnaire step", async () => {
    render(<Glp1Questionnaire locale="de" flow="new" />);

    fireEvent.change(screen.getByLabelText("Vollständiger Name"), { target: { value: "Minor Patient" } });
    fireEvent.change(screen.getByLabelText("Geburtsdatum"), { target: { value: "2012-01-01" } });
    fireEvent.change(screen.getByLabelText("E-Mail-Adresse"), { target: { value: "minor@example.com" } });
    fireEvent.change(screen.getByLabelText("Telefonnummer"), { target: { value: "+49 30 123456" } });
    fireEvent.click(screen.getByRole("button", { name: "Weiter" }));

    expect(await screen.findByRole("heading", { name: /für Erwachsene vorgesehen/ })).toBeVisible();
    expect(screen.getByText(/nur für Personen ab 18 Jahren/)).toBeVisible();
    expect(screen.queryByRole("heading", { name: "Grunddaten" })).not.toBeInTheDocument();
  });

  it("keeps a dose request as free text in the follow-up flow", async () => {
    render(<Glp1Questionnaire locale="en" flow="follow-up" />);

    fireEvent.change(screen.getByLabelText("Full name"), { target: { value: "Jane Patient" } });
    fireEvent.change(screen.getByLabelText("Date of birth"), { target: { value: "1988-03-20" } });
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "jane@example.com" } });
    fireEvent.change(screen.getByLabelText("Phone number"), { target: { value: "+49 30 7654321" } });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(await screen.findByRole("heading", { name: "Current treatment" })).toBeVisible();
    expect(screen.getByLabelText("Current GLP-1 medication")).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("Current dose")).toHaveAttribute("type", "text");
    expect(screen.queryByLabelText("Frequency of use")).not.toBeInTheDocument();
  });
});
