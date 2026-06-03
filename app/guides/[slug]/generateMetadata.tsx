import { Constants } from 'app/Constants';
import Authors from 'app/blog/authors/AuthorsDataSource';
import { Post, allPosts } from 'contentlayer/generated';
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

export async function generateMetadataForPost(postSlug): Promise<Metadata | undefined> {
  
  const post = allPosts.find((post) => post._raw.flattenedPath === postSlug);
  const author = Authors.find((author) => author.id === (post.author ?? "jonida-gjolli"));

  if (!post) {
    return;
  }

  const {
    title, 
    date: publishedTime, 
    summaryOrExcerpt: description, 
    coverImageUrl: image
  } = post;
  const rawDescription = (description ?? "").replace(/\s+/g, " ").trim();
  const withMinLength = rawDescription.length < 110
    ? `${rawDescription} ${post.categories?.includes("legal")
      ? "Weitere rechtliche Informationen der Praxis Jona in Berlin."
      : "Mehr medizinische Informationen und praktische Hinweise der Praxis Jona in Berlin."}`.trim()
    : rawDescription;
  const seoDescription = withMinLength.length > 160
    ? `${withMinLength.slice(0, 157).trimEnd()}...`
    : withMinLength;
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
        url: author.url
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
