import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, it, vi } from "vitest";
import PricingTableSection from "app/components/pricing/PricingTableSection";
import { pricingSections } from "app/components/pricing/pricingData";
vi.mock("app/components/AppointmentBookingButton", () => ({
  default: () => null,
}));
it("labels both two-session and three-session skinbooster packages correctly", () => {
  const html = renderToStaticMarkup(
    <PricingTableSection section={pricingSections.skinbooster} locale="de" />,
  );
  const root = document.createElement("div");
  root.innerHTML = html;
  const row = Array.from(root.querySelectorAll("tr")).find((row) =>
    row.textContent?.includes("Profhilo Gesicht"),
  );
  expect(row?.textContent).toContain("2 Sitzungen");
  expect(row?.textContent).toContain("679");
  expect(root.querySelector("thead")?.textContent).not.toContain("3er Paket");
});
