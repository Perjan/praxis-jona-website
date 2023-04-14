import { Post, allPosts } from 'contentlayer/generated';
import { Metadata } from "next";

const baseUrl = 'https://moneycoach.ai';

export async function generateMetadataForPost(postSlug): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === postSlug);
  console.log('postSlug', postSlug);

  if (!post) {
    return;
  }

  const {
    title, 
    date: publishedTime, 
    summaryOrExcerpt: description, 
    coverImageUrl: image
  } = post;
  const ogImage = image ?? baseUrl + '/images/og-image.png';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl(post),
    },
    openGraph: {
      title,
      description,
      siteName: 'MoneyCoach',
      type: 'article',
      publishedTime,
      url: canonicalUrl(post),
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}


function canonicalUrl(post: Post) {
  if (post.categories?.includes("legal")) {
    return baseUrl + "/" + post.slug;
  } else if (post.categories?.includes("guide")) {
    return baseUrl + "/guides/" + post.slug;
  }
  return baseUrl + post.url;
}