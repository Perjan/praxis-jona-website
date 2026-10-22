import { allPosts } from "content-collections"
import { Metadata } from "next"
import { generateMetadataForPost } from "app/(de)/guides/[slug]/generateMetadata"
import LegalPostLayout from "app/(de)/legal/[slug]/page"

const legalPosts = allPosts.filter((post) => post.categories?.includes("legal"))

export async function generateStaticParams() {
  return legalPosts
    .filter((post) => post._raw.flattenedPath === "imprint-privacy")
    .map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
  const params = await props.params;
  return generateMetadataForPost(params.slug)
}

export default LegalPostLayout
