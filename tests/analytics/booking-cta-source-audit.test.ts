import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(fullPath);
    return entry.name.endsWith(".tsx") ? [fullPath] : [];
  });
}

describe("booking CTA source audit", () => {
  const appRoot = path.join(process.cwd(), "app");
  const files = sourceFiles(appRoot);

  it("requires a placement on every AppointmentBookingButton call site", () => {
    const missing: string[] = [];

    for (const file of files) {
      if (file.endsWith("AppointmentBookingButton.tsx")) continue;
      const source = readFileSync(file, "utf8");
      const openingTags = source.match(/<AppointmentBookingButton\b[\s\S]*?>/g) ?? [];
      openingTags.forEach((tag, index) => {
        if (!tag.includes("trackingPlacement=")) {
          missing.push(`${path.relative(process.cwd(), file)}#${index + 1}`);
        }
      });
    }

    expect(missing).toEqual([]);
  });

  it("mounts the global Doctolib safety net in both language layouts", () => {
    for (const relativePath of ["(de)/layout.tsx", "(en)/layout.tsx"]) {
      const source = readFileSync(path.join(appRoot, relativePath), "utf8");
      expect(source).toContain("<BookingAttribution />");
    }
  });

  it("retires fragmented legacy booking event attributes", () => {
    const legacyAttributes = files.flatMap((file) => {
      const source = readFileSync(file, "utf8");
      return /data-umami-event="button-in-(header|home-hero)"/.test(source)
        ? [path.relative(process.cwd(), file)]
        : [];
    });

    expect(legacyAttributes).toEqual([]);
  });
});
