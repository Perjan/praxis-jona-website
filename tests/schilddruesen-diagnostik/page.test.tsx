import { render, screen } from "@testing-library/react";
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
  it("renders the German source-backed thyroid form", () => {
    render(<ThyroidDiagnosticsPage />);

    expect(screen.getAllByRole("heading", { name: "Fragebogen zur Schilddrüsen-Diagnostik" })).toHaveLength(2);
    expect(screen.getByLabelText(/Grund der Schilddrüsenuntersuchung/)).toBeVisible();
    expect(screen.getByText("Haben Sie Beschwerden im Halsbereich?")).toBeVisible();
    expect(screen.getByText(/Einwilligungserklärung in die Datenweitergabe/)).toBeVisible();
    expect(screen.getByRole("button", { name: "Absenden" })).toBeVisible();
  });

  it("renders English localized copy", () => {
    render(<ThyroidDiagnosticsPage locale="en" />);

    expect(screen.getAllByRole("heading", { name: "Thyroid Diagnostics Questionnaire" })).toHaveLength(2);
    expect(screen.getByLabelText(/Reason for thyroid examination/)).toBeVisible();
    expect(screen.getByText("Do you have symptoms in the throat/neck area?")).toBeVisible();
    expect(screen.getByRole("button", { name: "Submit" })).toBeVisible();
  });
});
