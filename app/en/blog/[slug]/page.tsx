import { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { generateMetadataForPost } from 'app/guides/[slug]/generateMetadata';
import { BlogPostLayout } from 'app/blog/[slug]/BlogPostLayout';

export const dynamic = 'force-static';

const englishBlogPosts =
  allPosts
    .filter((post) => !post.categories?.includes('legal') ?? false)
    .filter((post) => post.language === "en") ?? [];

export async function generateStaticParams() {
  return englishBlogPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace(/^en\//, ''),
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  return generateMetadataForPost(`en/${params.slug}`);
}

export default async function PostLayout({ params }: { params: { slug: string } }) {
  return BlogPostLayout({ flattenedPath: `en/${params.slug}`, locale: "en" });
}
