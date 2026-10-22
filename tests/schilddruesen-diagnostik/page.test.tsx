import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { forwardRef, useImperativeHandle } from "react";
import { describe, expect, it, vi } from "vitest";

import ThyroidDiagnosticsPage from "@/app/(de)/anamnese/schilddruesen-diagnostik/page";
import { TEST_SIGNATURE } from "../anamnese/fixtures";

vi.mock("@/app/(de)/anamnese/SignaturePad", () => ({
  default: forwardRef(function MockSignaturePad(
    { value, onChange, clearLabel }: { value: string; onChange: (value: string) => void; clearLabel: string },
    ref
  ) {
    useImperativeHandle(ref, () => ({ clear: vi.fn(), getSignature: () => value }));
    return (
      <div>
        <canvas aria-label="signature-pad" />
        <button type="button" onClick={() => onChange(TEST_SIGNATURE)}>
          Mock signature
        </button>
        <button type="button">{clearLabel}</button>
      </div>
    );
  }),
}));

describe("ThyroidDiagnosticsPage", () => {
  it("renders the German source-backed thyroid form across wizard steps", async () => {
    const user = userEvent.setup();
    render(<ThyroidDiagnosticsPage />);

    expect(screen.getByRole("heading", { name: "Fragebogen zur Schilddrüsen-Diagnostik" })).toBeVisible();
    expect(screen.getByLabelText(/Grund der Schilddrüsenuntersuchung/)).toBeVisible();
    expect(screen.getByRole("button", { name: /Weiter/ })).toBeVisible();
    expect(screen.queryByRole("button", { name: "Absenden" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Weiter/ }));
    expect(screen.getByText("Haben Sie Beschwerden im Halsbereich?")).toBeVisible();

    await user.click(screen.getByRole("button", { name: /Weiter/ }));
    expect(screen.getByText("Sind Sie sehr nervös?")).toBeVisible();

    await user.click(screen.getByRole("button", { name: /Weiter/ }));
    expect(screen.getByText(/Haben Sie Herzjagen/)).toBeVisible();

    await user.click(screen.getByRole("button", { name: /Weiter/ }));
    expect(screen.getAllByText(/Einwilligungserklärung in die Datenweitergabe/)).not.toHaveLength(0);

    await user.type(screen.getByLabelText(/Name/), "Max Mustermann");
    await user.type(screen.getByLabelText(/Geboren am/), "01.01.1980");
    await user.type(screen.getByLabelText(/Adresse/), "Torstr. 125");
    await user.click(screen.getByRole("button", { name: /Weiter/ }));

    expect(screen.getByRole("button", { name: "Absenden" })).toBeVisible();
  });

  it("renders English localized copy", () => {
    render(<ThyroidDiagnosticsPage locale="en" />);

    expect(screen.getByRole("heading", { name: "Thyroid Diagnostics Questionnaire" })).toBeVisible();
    expect(screen.getByLabelText(/Reason for thyroid examination/)).toBeVisible();
    expect(screen.getByRole("button", { name: /Next/ })).toBeVisible();
    expect(screen.queryByRole("button", { name: "Submit" })).not.toBeInTheDocument();
  });

  it("submits the completed form with the signature to the API", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<ThyroidDiagnosticsPage />);

    for (let step = 0; step < 4; step += 1) {
      await user.click(screen.getByRole("button", { name: /Weiter/ }));
    }
    await user.type(screen.getByLabelText(/Name/), "Max Mustermann");
    await user.type(screen.getByLabelText(/Geboren am/), "01.01.1980");
    await user.type(screen.getByLabelText(/Adresse/), "Torstr. 125");
    await user.click(screen.getByRole("button", { name: /Weiter/ }));
    await user.click(screen.getByLabelText(/Hiermit willige ich ein/));
    await user.type(screen.getByLabelText(/Ort und Datum/), "Berlin, 22.10.2026");
    await user.click(screen.getByRole("button", { name: "Mock signature" }));
    await user.click(screen.getByRole("button", { name: "Absenden" }));

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/schilddruesen-diagnostik");
    expect(JSON.parse(String(init?.body))).toMatchObject({
      privacy: {
        patientName: "Max Mustermann",
        birthdate: "01.01.1980",
        address: "Torstr. 125",
        consentAccepted: true,
        placeDate: "Berlin, 22.10.2026",
      },
      signature: TEST_SIGNATURE,
    });
  });
});
