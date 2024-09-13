import Image from "next/image"
import Link from "next/link"

export default function QuoteSection(params: { quote: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 pb-16 pt-16 sm:pt-24 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-2">
          <blockquote className="text-center text-xl font-medium leading-8 text-primary sm:text-2xl sm:leading-9">
            <p>
              {params.quote}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-28 w-28 rounded-full"
              src="/images/team/jonida-image.jpeg"
              alt=""
              width={100}
              height={100}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-xl font-serif text-primary">Jonida Gjolli</div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-base">
              <div className="font-regular text-primaryLighter">Fachärztin für Innere Medizin</div>
            </div>
          </figcaption>
        </figure>
        <div className="mt-4 flex justify-center">
          <Link
            href="/team"
            className="rounded-lg bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Mehr über unser Team erfahren
          </Link>
        </div>
      </div>
    </section>
  )
}
