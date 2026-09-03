import { existsSync, readFileSync } from "node:fs";
import { sync as globSync } from "glob";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

function publicAssetExists(url: string) {
  return existsSync(path.join(root, "public", url.replace(/^\//, "")));
}

describe("content images", () => {
  it("keeps local blog image references backed by public assets", () => {
    const missing: string[] = [];

    for (const postPath of globSync("posts/**/*.mdx", { cwd: root })) {
      const source = readFileSync(path.join(root, postPath), "utf8");
      const coverImage = source.match(/^coverImage:\s*["']([^"']+)["']/m)?.[1];

      if (coverImage) {
        const url = `/images/blog-images/${coverImage}`;
        if (!publicAssetExists(url)) missing.push(`${postPath}: ${url}`);
      }

      for (const match of Array.from(source.matchAll(/!\[[^\]]*\]\((\/images\/[^)\s]+)(?:\s+[^)]*)?\)/g))) {
        if (!publicAssetExists(match[1])) missing.push(`${postPath}: ${match[1]}`);
      }
    }

    expect(missing).toEqual([]);
  });

  it("does not route fragile external content images through Next Image", () => {
    const sources = [
      ...globSync("posts/**/*.mdx", { cwd: root }),
      "app/data/apps.ts",
    ].map((file) => readFileSync(path.join(root, file), "utf8")).join("\n");

    expect(sources).not.toContain("s625661756.online.de/recipe-images");
    expect(sources).not.toContain("appscreentime.com/_next/image");
  });
});
