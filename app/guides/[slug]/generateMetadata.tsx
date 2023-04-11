import { allPosts } from 'contentlayer/generated';
import { Metadata } from "next";

const baseUrl = 'https://www.moneycoach.ai';

export async function generateMetadataForPost(postSlug): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === postSlug);
  console.log('postSlug', postSlug);

  if (!post) {
    return;
  }

  const {
    title, 
    date: publishedTime, 
    summary: description, 
    coverImageUrl: image
  } = post;
  const ogImage = image ?? baseUrl + '/images/og-image.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'MoneyCoach',
      type: 'article',
      publishedTime,
      url: baseUrl + post.url,
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
