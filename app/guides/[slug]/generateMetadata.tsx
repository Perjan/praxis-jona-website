import { Post, allPosts } from 'contentlayer/generated';
import { Metadata } from "next";

const baseUrl = 'https://moneycoach.ai';

function slugForLanguage(post: Post, language: string) {
  switch (language) {
    case 'it':
      return post.slugIt ?? post.slug;
    case 'de':
      return post.slugDe ?? post.slug;
    default:
      return post.slugEn ?? post.slug;
  }
}

export async function generateMetadataForPost(postSlug): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === postSlug);

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
      canonical: postUrl(post, 'en'),
      languages: {
        en: postUrl(post, 'en'),
        it: postUrl(post, 'it'),
        de: postUrl(post, 'de')
      },
    },
    openGraph: {
      title,
      description,
      siteName: 'MoneyCoach',
      type: 'article',
      publishedTime,
      url: postUrl(post, 'en'),
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


function postUrl(post: Post, language: string) {
  if (post.categories?.includes("legal")) {
    return baseUrl + "/" + slugForLanguage(post, language);
  } else if (post.categories?.includes("guide")) {
    return baseUrl + "/guides/" + slugForLanguage(post, language);
  }
  return baseUrl + "/blog/" + slugForLanguage(post, language);
}