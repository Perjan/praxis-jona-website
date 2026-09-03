import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const deLayout = readFileSync("app/(de)/layout.tsx", "utf8");
const enLayout = readFileSync("app/(en)/layout.tsx", "utf8");

describe("html lang via root layouts", () => {
  it("hardcodes the correct lang attribute per locale root layout", () => {
    expect(deLayout).toContain('<html lang="de">');
    expect(enLayout).toContain('<html lang="en">');
  });

  it("does not read request headers to pick the lang, which would force dynamic rendering", () => {
    // Regression guard: app/layout.tsx used to call headers() to pick <html lang>,
    // which opted the entire route tree into SSR and silently emptied prerender-manifest.json
    // (and therefore the sitemap) down to just the force-static blog routes.
    expect(deLayout).not.toMatch(/next\/headers|headers\(\)/);
    expect(enLayout).not.toMatch(/next\/headers|headers\(\)/);
  });
});
