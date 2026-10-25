import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { Post } from "content-collections";
import PaginatedPostsSection from "app/PaginatedPostsSection";
import { PostCard } from "app/(de)/blog/[slug]/BlogArticleFooter";

vi.mock("next/navigation", () => ({ useSearchParams: () => new URLSearchParams() }));
vi.mock("next/image", () => ({ default: ({ unoptimized, priority, ...props }) => <img {...props} /> }));

const post = {
  _id: "prp-haarausfall-studien.mdx",
  slug: "prp-haarausfall-studien",
  url: "/blog/prp-haarausfall-studien",
  title: "PRP bei Haarausfall: Was zeigen die Studien?",
  summaryOrExcerpt: "Studien zu PRP bei Haarausfall.",
  date: "2026-10-25T00:00:00.000Z",
  language: "de",
  author: "jonida-gjolli",
  coverImageUrl: "/images/blog-images/prp-haarausfall-models-ai.png",
  coverImageAlt: "KI-generiertes Symbolbild mit zwei fiktiven Personen.",
  coverImageIsAiGenerated: true,
} as Post;

afterEach(cleanup);

describe("AI blog cover disclosure", () => {
  it("labels the cover before a reader opens the article from the blog index", () => {
    render(<PaginatedPostsSection posts={[post]} />);
    expect(screen.getByText("KI-generiert")).toBeVisible();
    expect(screen.getByAltText(post.coverImageAlt!)).toBeVisible();
  });

  it("keeps the disclosure when the cover appears in a related article card", () => {
    render(<PostCard post={post} />);
    expect(screen.getByText("KI-generiert")).toBeVisible();
  });

  it("does not label images whose origin has not been identified as AI-generated", () => {
    render(<PostCard post={{ ...post, coverImageUrl: "/images/team/jonaClinic.jpeg", coverImageIsAiGenerated: undefined }} />);
    expect(screen.queryByText("KI-generiert")).toBeNull();
  });
});
