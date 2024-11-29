import Authors from "../AuthorsDataSource"
import { notFound } from 'next/navigation'
import Image from "next/image";
import { Metadata } from "next";
import { Constants } from "app/Constants";


const title = "Über den Autor"
const description = "Dies ist die Seite des Autors. Sie zeigt das Fachwissen des Autors, seine Berufserfahrung und seine Persönlichkeit."

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {

  const author = Authors.find((author) => author.id === params.slug)

  return {
    title: author.name + " - " + title,
    description: description,
    alternates: {
      canonical: author.url,
    },
    authors: [
      {
        name: author.name,
        url: author.url
      }
    ],
    openGraph: {
      title: author.name + " - " + title,
      description: description,
      type: 'website',
      url: author.url,
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
      title: title,
      description: description,
      images: ['/images/og-image.png']
    }
  }
}

export default function AuthorPage({ params }: { params: { slug: string } }) {

  const author = Authors.find((author) => author.id === params.slug)

  if (author == null) {
    return notFound()
  }

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Über {author.name}</h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-600">
          Dies ist die Seite des Autors. Sie zeigt das Fachwissen des Autors, seine Berufserfahrung und seine Persönlichkeit.
          </h2>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          <li key={author.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
            <Image
              width={300}
              height={500}
              className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={author.image} alt=""
            />
            <div className="max-w-xl flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{author.name}</h3>
              <p className="text-base leading-7 text-gray-600">{author.role}</p>
              <p className="mt-6 text-base leading-7 text-gray-600">{author.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={author.linkedInUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
