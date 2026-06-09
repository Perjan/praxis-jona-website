import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import AnamnesePage from "@/app/anamnese/page";
import { TEST_SIGNATURE } from "./fixtures";

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

async function completeRequiredWizardFields(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/Name/), "Max Mustermann");
  await user.type(screen.getByLabelText(/Geburtsdatum/), "1985-04-12");
  await user.type(screen.getByLabelText(/Gewicht/), "82");
  await user.type(screen.getByLabelText(/Größe/), "180");
  await user.type(screen.getByLabelText(/Beruf/), "Ingenieur");
  await user.type(screen.getByLabelText(/Kontakt \/ E-Mail/), "max@example.com");

  for (let i = 0; i < 6; i += 1) {
    await user.click(screen.getByRole("button", { name: "Weiter" }));
  }

  await user.click(screen.getByLabelText("Männlich"));
  await user.click(screen.getByRole("button", { name: "Weiter" }));
  await user.click(screen.getByRole("checkbox", { name: /Einwilligung/ }));
  await user.click(screen.getByRole("button", { name: "Mock signature" }));
}

describe("AnamnesePage", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      })
    );
  });

  it("blocks navigation with shadcn field errors for required fields", async () => {
    const user = userEvent.setup();
    render(<AnamnesePage locale="de" />);

    await user.click(screen.getByRole("button", { name: "Weiter" }));

    expect(await screen.findByText("Name muss mindestens 2 Zeichen lang sein")).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/)).toHaveAttribute("aria-invalid", "true");
  });

  it("preserves values across wizard navigation", async () => {
    const user = userEvent.setup();
    render(<AnamnesePage locale="de" />);

    await user.type(screen.getByLabelText(/Name/), "Max Mustermann");
    await user.type(screen.getByLabelText(/Geburtsdatum/), "1985-04-12");
    await user.type(screen.getByLabelText(/Gewicht/), "82");
    await user.type(screen.getByLabelText(/Größe/), "180");
    await user.type(screen.getByLabelText(/Beruf/), "Ingenieur");
    await user.type(screen.getByLabelText(/Kontakt \/ E-Mail/), "max@example.com");
    await user.click(screen.getByRole("button", { name: "Weiter" }));
    await user.click(screen.getByRole("button", { name: "Zurück" }));

    expect(screen.getByLabelText(/Name/)).toHaveValue("Max Mustermann");
    expect(screen.getByLabelText(/Kontakt \/ E-Mail/)).toHaveValue("max@example.com");
  });

  it("shows conditional fields for female and male selections", async () => {
    const user = userEvent.setup();
    render(<AnamnesePage locale="de" />);

    await completeRequiredWizardFields(user);

    expect(screen.queryByText("Zyklus regelmäßig?")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Zurück" }));
    await user.click(screen.getByLabelText("Weiblich"));
    expect(screen.getByText("Zyklus regelmäßig?")).toBeInTheDocument();
    expect(screen.queryByText("Testosteronwerte jemals gemessen?")).not.toBeInTheDocument();
  });

  it("submits a valid payload and resets after kiosk success", async () => {
    const user = userEvent.setup();
    render(<AnamnesePage locale="de" />);

    await completeRequiredWizardFields(user);
    await user.click(screen.getByRole("button", { name: "Weiter" }));
    expect(screen.getByRole("heading", { name: "Prüfen & unterschreiben" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Absenden" }));

    expect(await screen.findByText("Vielen Dank!")).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith(
      "/api/anamnese",
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining("Max Mustermann"),
      })
    );

    await user.click(screen.getByRole("button", { name: "Neuer Patient" }));
    await waitFor(() => expect(screen.getByLabelText(/Name/)).toHaveValue(""));
  });

  it("renders English copy", () => {
    render(<AnamnesePage locale="en" />);

    expect(screen.getByRole("heading", { name: "Medical History Form" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });
});
