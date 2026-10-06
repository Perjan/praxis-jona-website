import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { describe, expect, it, vi } from "vitest";

const pricingSource = "app/components/pricing/pricingData.ts";
const germanSource = "app/content/aesthetik-source.md";
const englishSource = "app/components/AestheticMarkdownPage.tsx";
const pricingDate = "2026-10-05T07:54:36+02:00";
const oldDate = "2026-09-17T08:48:01+02:00";

// Evaluate the CommonJS config with isolated filesystem and Git dependencies.
// This tests its public transform without changing exports or running Git.
function loadConfig(dates: Record<string, string | null>) {
  const execSync = vi.fn((command: string) => {
    const file = command.match(/-- "([^"]+)"$/)?.[1];
    return Buffer.from((file && dates[file]) || "");
  });
  const module = { exports: {} as {
    transform: (config: object, url: string) => Promise<Record<string, unknown>>;
  } };
  const dependencies: Record<string, unknown> = {
    fs: {
      existsSync: (file: string) => path.relative(process.cwd(), file) in dates,
      readFileSync: () => { throw new Error("No generated posts in this fixture"); },
    },
    path,
    child_process: { execSync },
  };
  vm.runInNewContext(fs.readFileSync("next-sitemap.config.js", "utf8"), {
    module, process, Buffer,
    require: (name: string) => {
      if (!(name in dependencies)) throw new Error(`Unexpected module: ${name}`);
      return dependencies[name];
    },
  });
  return { transform: module.exports.transform, execSync };
}

const dates = { [pricingSource]: pricingDate, [germanSource]: oldDate, [englishSource]: oldDate };

describe("aesthetic pricing sitemap source dates", () => {
  it.each(["/aesthetik/preise", "/en/aesthetics/prices"])(
    "uses the shared pricing date for %s", async (url) => {
      const { transform } = loadConfig(dates);
      const result = await transform({ changefreq: "daily", priority: 0.7 }, url);
      expect(result).toEqual({ loc: url, changefreq: "daily", priority: 0.7, lastmod: pricingDate });
    },
  );

  it.each(["/aesthetik/prp-behandlung", "/en/aesthetics/prp-treatment", "/aesthetik/preise-extra"])(
    "keeps the existing aesthetic source for %s", async (url) => {
      const { transform } = loadConfig(dates);
      expect((await transform({}, url)).lastmod).toBe(oldDate);
    },
  );

  it("omits the date when the pricing file has no Git history", async () => {
    const { transform } = loadConfig({ ...dates, [pricingSource]: null });
    expect(await transform({}, "/aesthetik/preise")).not.toHaveProperty("lastmod");
  });

  it("omits the date when the pricing file is absent", async () => {
    const { transform } = loadConfig({ [germanSource]: oldDate });
    expect(await transform({}, "/aesthetik/preise")).not.toHaveProperty("lastmod");
  });

  it("caches the shared Git date across the two language routes", async () => {
    const { transform, execSync } = loadConfig(dates);
    await transform({}, "/aesthetik/preise");
    await transform({}, "/en/aesthetics/prices");
    expect(execSync).toHaveBeenCalledTimes(1);
  });
});
