import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const styles = readFileSync("app/globals.css", "utf8")
const footer = readFileSync("app/Footer.tsx", "utf8")

describe("homepage hero layering", () => {
  it("keeps the fixed hero background on non-negative layers", () => {
    expect(styles).toMatch(/\.home-hero__media\s*{[^}]*z-index:\s*0;/s)
    expect(styles).toMatch(/\.home-hero__shade\s*{[^}]*z-index:\s*1;/s)
    expect(styles).not.toMatch(/\.home-hero__(?:media|shade)\s*{[^}]*z-index:\s*-/s)
  })

  it("places scrolling homepage content and the footer above the hero", () => {
    expect(styles).toMatch(/\.home-content-over-hero\s*{[^}]*z-index:\s*3;/s)
    expect(footer).toContain('className="relative z-10 bg-stone-100"')
  })
})
