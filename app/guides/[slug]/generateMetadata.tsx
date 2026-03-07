import { Constants } from "app/Constants";
import Authors from "app/blog/authors/AuthorsDataSource";
import { Post, allPosts } from "contentlayer/generated";
import { Metadata } from "next";

const baseUrl = Constants.baseUrl;

type PostRouteType = "blog" | "legal" | "guides";
type SupportedLanguage = "de" | "en" | "it";

function postPath(routeType: PostRouteType, slug: string) {
  return `/${routeType}/${slug}`;
}

function postUrl(routeType: PostRouteType, slug: string) {
  return `${baseUrl}${postPath(routeType, slug)}`;
}

function postSlugForLanguage(post: Post, language: SupportedLanguage) {
  switch (language) {
    case "de":
      return post.slugDe;
    case "it":
      return post.slugIt;
    default:
      return post.slugEn;
  }
}

function alternatesForPost(post: Post, routeType: PostRouteType, canonicalSlug: string) {
  const languages: Record<string, string> = {};

  const slugDe = postSlugForLanguage(post, "de");
  const slugEn = postSlugForLanguage(post, "en");
  const slugIt = postSlugForLanguage(post, "it");

  if (slugDe) {
    languages.de = postUrl(routeType, slugDe);
    languages["x-default"] = postUrl(routeType, slugDe);
  }
  if (slugEn) {
    languages.en = postUrl(routeType, slugEn);
  }
  if (slugIt) {
    languages.it = postUrl(routeType, slugIt);
  }

  const canonical = postUrl(routeType, canonicalSlug);
  if (Object.keys(languages).length === 0) {
    return { canonical };
  }

  return {
    canonical,
    languages,
  };
}

export async function generateMetadataForPost(
  postSlug: string,
  routeType: PostRouteType = "blog",
): Promise<Metadata | undefined> {
  const post = allPosts.find((item) => item._raw.flattenedPath === postSlug);

  if (!post) {
    return;
  }

  const author = Authors.find((item) => item.id === (post.author ?? "jonida-gjolli"));
  const title = post.title;
  const publishedTime = post.date;
  const description = post.summaryOrExcerpt;
  const ogImage = post.coverImageUrl ?? `${baseUrl}/images/og-image.png`;
  const canonicalUrl = postUrl(routeType, postSlug);
  const isLegalPost = post.categories?.includes("legal") ?? false;

  return {
    title,
    description,
    alternates: alternatesForPost(post, routeType, postSlug),
    authors: author
      ? [
          {
            name: author.name,
            url: author.url,
          },
        ]
      : undefined,
    robots: isLegalPost
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : undefined,
    openGraph: {
      title,
      description,
      siteName: Constants.appName,
      type: "article",
      publishedTime,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
