import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

function source(file: string) {
  return readFileSync(path.join(root, file), "utf8");
}

describe("mobile pricing tables", () => {
  it("keeps shared price columns inside the initial mobile viewport", () => {
    const table = source("app/components/pricing/PricingTableSection.tsx");

    expect(table).not.toContain('min-w-[520px]');
    expect(table).not.toContain('min-w-[680px]');
    expect(table).toContain("table-fixed");
    expect(table).toContain("<colgroup>");
  });

  it("gives the legacy Botox table an explicit visible price column", () => {
    const table = source("app/components/BotoxPriceTable.tsx");

    expect(table).toContain('className="w-full table-fixed"');
    expect(table).toContain("<colgroup>");
  });
});
