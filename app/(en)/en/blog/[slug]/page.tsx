import { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { generateMetadataForPost } from 'app/(de)/guides/[slug]/generateMetadata';
import { BlogPostLayout } from 'app/(de)/blog/[slug]/BlogPostLayout';

const englishBlogPosts =
  allPosts
    .filter((post) => !post.categories?.includes('legal') ?? false)
    .filter((post) => post.language === "en") ?? [];

export async function generateStaticParams() {
  return englishBlogPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace(/^en\//, ''),
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
  const params = await props.params;
  return generateMetadataForPost(`en/${params.slug}`);
}

export default async function PostLayout(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return BlogPostLayout({ flattenedPath: `en/${params.slug}`, locale: "en" });
}
