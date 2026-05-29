import Authors from "app/blog/authors/AuthorsDataSource";
import { notFound } from 'next/navigation';
import Image from "next/image";
import { Metadata } from "next";

const title = "About the Author";
const description = "Author profile for Praxis Jona articles, including medical expertise, professional experience and background.";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const author = Authors.find((author) => author.id === params.slug);

  if (!author) {
    return;
  }

  return {
    title: `${author.name} - ${title}`,
    description,
    alternates: {
      canonical: `/en/blog/authors/${author.id}`,
      languages: {
        de: author.url,
        en: `/en/blog/authors/${author.id}`,
      },
    },
    authors: [
      {
        name: author.name,
        url: `/en/blog/authors/${author.id}`
      }
    ],
    openGraph: {
      title: `${author.name} - ${title}`,
      description,
      type: 'website',
      url: `/en/blog/authors/${author.id}`,
      images: [
        {
          url: author.image,
          width: 1200,
          height: 600,
          alt: author.name
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
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const author = Authors.find((author) => author.id === params.slug);

  if (author == null) {
    return notFound();
  }

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About {author.name}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This author page summarizes medical expertise, professional experience and background.
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          <li key={author.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
            <Image
              width={300}
              height={500}
              className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
              src={author.image}
              alt={author.name}
            />
            <div className="max-w-xl flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{author.name}</h3>
              <p className="text-base leading-7 text-gray-600">Specialist in Internal Medicine</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Dr. Jonida Gjolli is a specialist in internal medicine. She worked for several years in the medical clinic with a focus on nephrology and internal intensive care medicine at Charite Berlin, where she also completed her doctorate. Before that, she completed the first part of her specialist training at Waldkrankenhaus St. Marien in Erlangen.
              </p>
              {author.linkedInUrl && (
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={author.linkedInUrl} className="text-gray-600 hover:text-gray-700" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
