import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { forwardRef, useImperativeHandle } from "react";
import { describe, expect, it, vi } from "vitest";

import ThyroidDiagnosticsPage from "@/app/anamnese/schilddruesen-diagnostik/page";

vi.mock("next/image", () => ({
  default: (props: any) => <img alt={props.alt} src={props.src?.src ?? props.src} />,
}));

vi.mock("@/app/anamnese/SignaturePad", () => ({
  default: forwardRef(({ clearLabel }: { clearLabel: string }, ref) => {
    useImperativeHandle(ref, () => ({ clear: vi.fn(), getSignature: vi.fn() }));
    return (
      <div>
        <canvas aria-label="signature-pad" />
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
});
