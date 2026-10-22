import { Constants } from 'app/Constants';
import Authors from 'app/(de)/blog/authors/AuthorsDataSource';
import { Post, allPosts } from 'content-collections';
import { Metadata } from "next";

const baseUrl = Constants.baseUrl;

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

function metadataLanguageForPost(post: Post) {
  return post.language === "en" || post.language === "it" ? post.language : "de";
}

function generateAlternatesIfNeeded(post: Post) {
  const language = metadataLanguageForPost(post);
  var alternates = {
    canonical: postUrl(post, language),
    languages: {}
  }

  // check if the post has a slug in the other languages
  if (post.slugEn != undefined || post.slugIt != undefined || post.slugDe != undefined) {

  }

  if (post.slugIt) {
    alternates.languages["it"] = postUrl(post, 'it');
  }

  if (post.slugDe) {
    alternates.languages["de"] = postUrl(post, 'de');
  }

  if (post.slugEn) {
    alternates.languages["en"] = postUrl(post, 'en');
  }

  return alternates;
}

const DESCRIPTION_SUFFIXES = {
  de: {
    legal: "Weitere rechtliche Informationen der Praxis Jona in Berlin.",
    default: "Mehr medizinische Informationen und praktische Hinweise der Praxis Jona in Berlin.",
  },
  en: {
    legal: "More legal information from Praxis Jona in Berlin.",
    default: "More medical information and practical advice from Praxis Jona in Berlin.",
  },
};

export function seoDescriptionForPost(post: Post) {
  const rawDescription = (post.summaryOrExcerpt ?? "").replace(/\s+/g, " ").trim();
  const suffixes = DESCRIPTION_SUFFIXES[metadataLanguageForPost(post) === "en" ? "en" : "de"];
  const withMinLength = rawDescription.length < 110
    ? `${rawDescription} ${post.categories?.includes("legal") ? suffixes.legal : suffixes.default}`.trim()
    : rawDescription;
  return withMinLength.length > 160
    ? `${withMinLength.slice(0, 157).trimEnd()}...`
    : withMinLength;
}

export function englishAuthorUrl(url: string) {
  return url.startsWith("/blog/") ? url.replace("/blog/", "/en/blog/") : url;
}

export function canonicalUrlForPost(post: Post) {
  return postUrl(post, metadataLanguageForPost(post));
}

export async function generateMetadataForPost(postSlug): Promise<Metadata | undefined> {
  
  const post = allPosts.find((post) => post._raw.flattenedPath === postSlug);

  if (!post) {
    return;
  }

  const author = Authors.find((author) => author.id === (post.author ?? "jonida-gjolli"));

  const {
    title, 
    date: publishedTime, 
    coverImageUrl: image
  } = post;
  const seoDescription = seoDescriptionForPost(post);
  const seoTitle = title.length > 62
    ? `${title.slice(0, 59).trimEnd()}...`
    : title;
  const ogImage = image ?? baseUrl + '/images/og-image.png';
  const metadataLanguage = metadataLanguageForPost(post);

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: generateAlternatesIfNeeded(post),
    authors: [
      {
        name: author.name,
        url: metadataLanguage === "en" ? englishAuthorUrl(author.url) : author.url
      }
    ],
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      siteName: Constants.appName,
      type: 'article',
      publishedTime,
      url: postUrl(post, metadataLanguage),
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [ogImage],
    },
  };
}


function postUrl(post: Post, language: string) {
  if (post.categories?.includes("legal")) {
    return language === "en"
      ? baseUrl + "/en/legal/" + slugForLanguage(post, language).replace(/^en\//, '')
      : baseUrl + "/legal/" + slugForLanguage(post, language);
  } else if (post.categories?.includes("guide")) {
    return baseUrl + "/guides/" + slugForLanguage(post, language);
  }
  return language === "en"
    ? baseUrl + "/en/blog/" + slugForLanguage(post, language).replace(/^en\//, '')
    : baseUrl + "/blog/" + slugForLanguage(post, language);
}
