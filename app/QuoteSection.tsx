import Image from "next/image"
import PrimaryButton from "./components/PrimaryButton"

interface QuoteSectionParams {
  quote: string;
  buttonLink?: string;
  buttonText?: string;
  role?: string;
}

export default function QuoteSection(params: QuoteSectionParams) {
  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-8">
      <figure className="mx-auto max-w-4xl text-center">
        <blockquote className="font-serif text-3xl leading-snug tracking-tight text-primary [text-wrap:balance] sm:text-4xl">
          <p>{params.quote}</p>
        </blockquote>
        <figcaption className="mt-10 flex items-center justify-center gap-4 text-left">
          <Image
            className="h-14 w-14 rounded-full object-cover"
            src="/images/team/jonida-image.jpeg"
            alt=""
            width={112}
            height={112}
          />
          <div>
            <div className="font-serif text-lg font-medium text-primary">Dr. med. Jonida Gjolli</div>
            <div className="text-sm text-primaryLighter">{params.role ?? "Fachärztin für Innere Medizin"}</div>
          </div>
        </figcaption>
      </figure>
      {params.buttonLink && (
        <div className="mt-10 flex justify-center">
          <PrimaryButton href={params.buttonLink}>
            {params.buttonText}
          </PrimaryButton>
        </div>
      )}
    </section>
  )
}
