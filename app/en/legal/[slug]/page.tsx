import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { generateMetadataForPost } from "app/guides/[slug]/generateMetadata"
import { LegalPostLayout } from "app/legal/[slug]/page"

const legalPosts = allPosts.filter((post) => post.categories?.includes("legal"))

export async function generateStaticParams() {
  return legalPosts
    .filter((post) => post._raw.flattenedPath === "imprint-privacy")
    .map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  return generateMetadataForPost(params.slug)
}

export default LegalPostLayout
