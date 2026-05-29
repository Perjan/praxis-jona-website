import { allPosts } from 'contentlayer/generated';
import PaginatedPostsSection from 'app/PaginatedPostsSection';
import { Metadata } from 'next';

export const dynamic = "force-static";

const title = 'Blog - Praxis Jona';
const description = "English articles from Praxis Jona on internal medicine, prevention, nutrition and practice updates in Berlin-Mitte.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/blog",
    languages: {
      de: "/blog",
      en: "/en/blog",
    },
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/en/blog',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'Praxis Jona'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/og-image.png']
  }
};

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const filteredBlogPosts = allPosts
  .filter((post) => !post.categories?.includes("legal") ?? false)
  .filter((post) => post.language === "en")
  .filter((post) => post.date <= tomorrow.toISOString().split('T')[0] && !post.isHidden);

export default async function Page() {
  return (
    <div className="bg-white mt-2 sm:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <PaginatedPostsSection posts={filteredBlogPosts} locale="en" />
      </div>
    </div>
  );
}
