import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import FormsEntryPage from "@/app/anamnese/page";

describe("FormsEntryPage", () => {
  it("links to every available form", () => {
    render(<FormsEntryPage locale="de" />);

    expect(screen.getByRole("link", { name: /Anamnesebogen/ })).toHaveAttribute("href", "/anamnese/medical-history");
    expect(screen.getByRole("link", { name: /Impfaufklärung/ })).toHaveAttribute("href", "/anamnese/impfaufklaerung");
    expect(screen.getByRole("link", { name: /Eiseninfusion/ })).toHaveAttribute("href", "/anamnese/eiseninfusion");
    expect(screen.getByRole("link", { name: /Schilddrüsen-Diagnostik/ })).toHaveAttribute(
      "href",
      "/anamnese/schilddruesen-diagnostik",
    );
    expect(screen.getByText("Quelle: Longevity_Anamnesebogen")).toBeInTheDocument();
    expect(screen.getByText("Quelle: Impfaufklärung J. Gjolli")).toBeInTheDocument();
    expect(screen.getByText("Quelle: Aufklaerung_und_Behandlungsvertrag_Eisen")).toBeInTheDocument();
    expect(screen.getByText("Quelle: AnamnesebogenSD_und_Datenschutz")).toBeInTheDocument();
  });

  it("links to every English form from the English entry page", () => {
    render(<FormsEntryPage locale="en" />);

    expect(screen.getByRole("link", { name: /Medical History Form/ })).toHaveAttribute(
      "href",
      "/en/anamnese/medical-history",
    );
    expect(screen.getByRole("link", { name: /Vaccination Consent/ })).toHaveAttribute(
      "href",
      "/en/anamnese/impfaufklaerung",
    );
    expect(screen.getByRole("link", { name: /Iron Infusion Consent/ })).toHaveAttribute(
      "href",
      "/en/anamnese/eiseninfusion",
    );
    expect(screen.getByRole("link", { name: /Thyroid Diagnostics/ })).toHaveAttribute(
      "href",
      "/en/anamnese/thyroid-diagnostics",
    );
    expect(screen.getByText("Source: Longevity_Anamnesebogen")).toBeInTheDocument();
    expect(screen.getByText("Source: Impfaufklärung J. Gjolli")).toBeInTheDocument();
    expect(screen.getByText("Source: Aufklaerung_und_Behandlungsvertrag_Eisen")).toBeInTheDocument();
    expect(screen.getByText("Source: AnamnesebogenSD_und_Datenschutz")).toBeInTheDocument();
  });
});
