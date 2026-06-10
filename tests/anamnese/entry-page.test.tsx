import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import FormsEntryPage from "@/app/anamnese/page";

describe("FormsEntryPage", () => {
  it("links to every available form", () => {
    render(<FormsEntryPage locale="de" />);

    expect(screen.getByRole("link", { name: /Anamnesebogen/ })).toHaveAttribute("href", "/anamnese/medical-history");
    expect(screen.getByRole("link", { name: /Impfaufklärung/ })).toHaveAttribute("href", "/anamnese/impfaufklaerung");
  });
});
