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

  it("renders the exact PDF-backed field labels", () => {
    render(<ImpfaufklaerungPage />);

    expect(screen.getByLabelText(/Name der Schutzimpfung/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Familienname, Vorname/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Geburtsdatum/)).toBeInTheDocument();
    expect(screen.getByLabelText("Adresse (Postleitzahl, Ort, Straße, Hausnummer)")).toBeInTheDocument();
    expect(screen.getByLabelText("Telefonnummer")).toBeInTheDocument();
    expect(screen.getByLabelText("E-Mail-Adresse")).toBeInTheDocument();
    expect(screen.getByLabelText("Ggf. Name der gesetzlichen Vertretung")).toBeInTheDocument();
    expect(screen.getByText(/1. Leidet oder litt die zu impfende Person/)).toBeInTheDocument();
    expect(screen.getByText(/11. Besteht eine Schwangerschaft/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ort, Datum/)).toBeInTheDocument();
  });

  it("blocks empty submission with field errors and invalid state", async () => {
    const user = userEvent.setup();
    render(<ImpfaufklaerungPage />);

    await user.click(screen.getByRole("button", { name: "Absenden" }));

    expect(await screen.findAllByText("Dieses Feld ist erforderlich")).not.toHaveLength(0);
    expect(screen.getByLabelText(/Name der Schutzimpfung/)).toHaveAttribute("aria-invalid", "true");
    expect(fetch).not.toHaveBeenCalled();
  });
});
