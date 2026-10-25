import { describe, expect, it, vi } from "vitest";

const { article } = vi.hoisted(() => ({
  article: {
    title: "PRP bei Haarausfall: Was zeigen die Studien?",
    seoTitle: "PRP bei Haarausfall: Was Studien zum Haarwachstum zeigen | Praxis Jona",
    seoDescription: "Kann PRP bei erblich bedingtem Haarausfall helfen? Lesen Sie, was kontrollierte Studien zu Haardichte und Haarwachstum zeigen und wie PRP in der Praxis Jona abläuft.",
    summaryOrExcerpt: "Fallback summary",
    date: "2026-10-25T00:00:00.000Z",
    author: "jonida-gjolli",
    language: "de",
    slug: "prp-haarausfall-studien",
    coverImageUrl: "/images/blog-images/prp-haarausfall.jpg",
    _raw: { flattenedPath: "prp-haarausfall-studien" },
  },
}));

vi.mock("content-collections", () => ({ allPosts: [article] }));

import { generateMetadataForPost, seoDescriptionForPost } from "app/(de)/guides/[slug]/generateMetadata";

describe("doctor-supplied blog metadata", () => {
  it("preserves the supplied description without shortening it", () => {
    expect(seoDescriptionForPost(article as never)).toBe(article.seoDescription);
  });

  it("preserves the complete supplied title without repeating the site suffix", async () => {
    const metadata = await generateMetadataForPost(article.slug);
    expect(metadata?.title).toEqual({ absolute: article.seoTitle });
    expect(metadata?.openGraph?.title).toBe(article.seoTitle);
    expect(metadata?.twitter?.title).toBe(article.seoTitle);
    expect(metadata?.description).toBe(article.seoDescription);
  });
});
