import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import EiseninfusionPage from "@/app/anamnese/eiseninfusion/page";
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

describe("EiseninfusionPage", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      })
    );
  });

  it("renders the exact Pages-backed field labels across wizard steps", async () => {
    const user = userEvent.setup();
    render(<EiseninfusionPage />);

    expect(screen.getByLabelText(/Patientenname/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Weiter/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Absenden" })).not.toBeInTheDocument();

    await user.type(screen.getByLabelText(/Patientenname/), "Max Mustermann");
    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(screen.getByText("Nebenwirkungen und wichtige Hinweise")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(screen.getByLabelText(/Patienteneigene Verantwortung/)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(screen.getByLabelText(/Einverständniserklärung/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Kürzel Arzt/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Datum/)).toBeInTheDocument();
    expect(screen.getByText("Unterschrift Patient")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Absenden" })).toBeInTheDocument();
  });

  it("blocks empty step navigation with field errors and invalid state", async () => {
    const user = userEvent.setup();
    render(<EiseninfusionPage />);

    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(await screen.findAllByText("Dieses Feld ist erforderlich")).not.toHaveLength(0);
    expect(screen.getByLabelText(/Patientenname/)).toHaveAttribute("aria-invalid", "true");
    expect(fetch).not.toHaveBeenCalled();
  });

  it("renders English localized copy", async () => {
    const user = userEvent.setup();
    render(<EiseninfusionPage locale="en" />);

    expect(screen.getByRole("heading", { name: "Iron Infusion" })).toBeInTheDocument();
    expect(screen.getByLabelText(/Patient name/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Next/ })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Next/ }));

    expect(await screen.findAllByText("This field is required")).not.toHaveLength(0);
    expect(fetch).not.toHaveBeenCalled();
  });
});
