import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import ImpfaufklaerungPage from "@/app/anamnese/impfaufklaerung/page";
import { TEST_SIGNATURE } from "../anamnese/fixtures";

vi.mock("@/app/anamnese/SignaturePad", () => ({
  default: forwardRef(({ value, onChange, clearLabel }: any, ref) => {
    const valueRef = useRef(value);
    valueRef.current = value;
    useImperativeHandle(ref, () => ({
      getSignature: () => valueRef.current,
      clear: () => {
        valueRef.current = "";
        onChange("");
      },
    }));
    return (
      <div>
        <button type="button" onClick={() => onChange(TEST_SIGNATURE)}>
          Mock signature
        </button>
        <button type="button" onClick={() => onChange("")}>
          {clearLabel}
        </button>
      </div>
    );
  }),
}));

describe("ImpfaufklaerungPage", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      })
    );
  });

  it("renders the exact PDF-backed field labels across wizard steps", async () => {
    const user = userEvent.setup();
    render(<ImpfaufklaerungPage />);

    expect(screen.getByLabelText(/Name der Schutzimpfung/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Familienname, Vorname/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Geburtsdatum/)).toBeInTheDocument();
    expect(screen.getByLabelText("Adresse (Postleitzahl, Ort, Straße, Hausnummer)")).toBeInTheDocument();
    expect(screen.getByLabelText("Telefonnummer")).toBeInTheDocument();
    expect(screen.getByLabelText("E-Mail-Adresse")).toBeInTheDocument();
    expect(screen.getByLabelText("Ggf. Name der gesetzlichen Vertretung")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Weiter/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Absenden" })).not.toBeInTheDocument();

    await user.type(screen.getByLabelText(/Name der Schutzimpfung/), "FSME");
    await user.type(screen.getByLabelText(/Familienname, Vorname/), "Max Mustermann");
    await user.type(screen.getByLabelText(/Geburtsdatum/), "01.01.1980");
    await user.click(screen.getByLabelText("männlich"));
    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(screen.getByText(/1. Leidet oder litt die zu impfende Person/)).toBeInTheDocument();

    for (const label of screen.getAllByLabelText("Nein")) {
      await user.click(label);
    }
    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(screen.getByText(/11. Besteht eine Schwangerschaft/)).toBeInTheDocument();

    for (const label of screen.getAllByLabelText("Nein")) {
      await user.click(label);
    }
    await user.click(screen.getByRole("button", { name: /Weiter/ }));
    await user.click(screen.getByLabelText(/Impfkomplikationen und Risikoaufklärung/));
    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(screen.getByLabelText(/Ort, Datum/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Absenden" })).toBeInTheDocument();
  });

  it("blocks empty step navigation with field errors and invalid state", async () => {
    const user = userEvent.setup();
    render(<ImpfaufklaerungPage />);

    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(await screen.findAllByText("Dieses Feld ist erforderlich")).not.toHaveLength(0);
    expect(screen.getByLabelText(/Name der Schutzimpfung/)).toHaveAttribute("aria-invalid", "true");
    expect(fetch).not.toHaveBeenCalled();
  });

  it("renders English localized copy", async () => {
    const user = userEvent.setup();
    render(<ImpfaufklaerungPage locale="en" />);

    expect(screen.getAllByRole("heading", { name: "Personal details of the person to be vaccinated" })).not.toHaveLength(0);
    expect(screen.getByLabelText(/Name of vaccination/)).toBeInTheDocument();
    expect(screen.getByLabelText("Female")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Next/ })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Next/ }));

    expect(await screen.findAllByText("This field is required")).not.toHaveLength(0);
    expect(fetch).not.toHaveBeenCalled();
  });
});
