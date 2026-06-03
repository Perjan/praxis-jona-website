import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { generateMetadataForPost } from 'app/guides/[slug]/generateMetadata';
import { BlogPostLayout } from './BlogPostLayout';

export const dynamic = 'force-static';

const filteredBlogPosts =
  allPosts
    .filter((post) => !post.categories?.includes('legal') ?? false)
    .filter((post) => post.language !== "en")
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))) ?? [];

export async function generateStaticParams() {
  return filteredBlogPosts
    .filter((post) => !post.categories?.includes('guide') ?? false)
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  return generateMetadataForPost(params.slug);
}

export default async function PostLayout({ params }: { params: { slug: string } }) {
  return BlogPostLayout({ flattenedPath: params.slug, locale: "de" });
}
