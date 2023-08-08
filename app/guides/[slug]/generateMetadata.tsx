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

function generateAlternatesIfNeeded(post: Post) {
  var alternates;

  // check if the post has a slug in the other languages
  if (post.slugEn != undefined || post.slugIt != undefined || post.slugDe != undefined) {
    alternates = {
      canonical: postUrl(post, 'en'),
      languages: {}
    }
  }

  if (post.slugIt) {
    alternates.languages.it = postUrl(post, 'it');
  }

  if (post.slugDe) {
    alternates.languages.de = postUrl(post, 'de');
  }

  if (post.slugEn) {
    alternates.languages.en = postUrl(post, 'en');
  }

  return alternates;
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
    alternates: generateAlternatesIfNeeded(post),
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