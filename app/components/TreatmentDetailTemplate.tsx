import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { MotionCard, MotionSection } from "app/components/Motion";

export type TreatmentFact = {
  title: string;
  icon: typeof CreditCardIcon;
  body: ReactNode;
};
export type TreatmentImage = {
  src: string;
  alt: string;
  objectPositionClass?: string;
  contain?: boolean;
};

export function TreatmentHeroImage({
  image,
  className = "",
}: {
  image: TreatmentImage;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-lightBeige shadow-xl ring-1 ring-primary/10 ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={900}
        height={720}
        priority
        sizes="(min-width: 1024px) 36vw, 92vw"
        className={`h-72 w-full sm:h-96 lg:h-[30rem] ${image.contain ? "object-contain bg-white p-8" : "object-cover"} ${image.objectPositionClass ?? "object-center"}`}
      />
      {!image.contain && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/20" />
      )}
    </div>
  );
}

export function TreatmentFactStrip({
  facts,
  className = "",
  overlapHero = true,
  columns = 3,
}: {
  facts: TreatmentFact[];
  className?: string;
  overlapHero?: boolean;
  columns?: 2 | 3;
}) {
  return (
    <MotionSection
      className={`relative z-20 ${overlapHero ? "-mt-[50px]" : ""} px-4 pb-10 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20 ring-1 ring-white/10">
          <div className={`grid grid-cols-1 ${columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.title}
                  className={`flex min-h-[112px] items-start gap-4 border-white/15 p-5 sm:p-6 lg:min-h-[132px] lg:p-7 ${index > 0 ? "border-t" : ""} ${index < columns ? "lg:border-t-0" : ""} ${index % columns !== 0 ? "lg:border-l" : ""} ${columns === 2 && facts.length % 2 === 1 && index === facts.length - 1 ? "lg:col-span-2" : ""}`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-16 sm:w-16">
                    <Icon
                      className="h-8 w-8 stroke-[2.2] text-white sm:h-9 sm:w-9"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="break-words hyphens-auto font-sans text-xl font-semibold leading-tight text-white sm:text-2xl">
                      {fact.title}
                    </h2>
                    <p className="mt-2 break-words hyphens-auto text-base leading-7 text-white/70 sm:text-lg [&_strong]:font-semibold [&_strong]:text-white/70">
                      {fact.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export function TreatmentDetailHero({
  title,
  eyebrow,
  paragraphs,
  image,
  actions,
  facts,
  factColumns = 3,
}: {
  title: string;
  eyebrow: string;
  paragraphs: string[];
  image: TreatmentImage;
  actions: ReactNode;
  facts: TreatmentFact[];
  factColumns?: 2 | 3;
}) {
  const [lead, ...following] = paragraphs;
  return (
    <>
      <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-24">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">
            {eyebrow}
          </p>
          <h1 className="mt-4 break-words hyphens-auto font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          {paragraphs.length > 0 && (
            <div className="mt-6 hidden space-y-4 text-lg leading-8 text-primaryLighter lg:block">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          {lead && (
            <p className="mt-6 text-lg leading-8 text-primaryLighter lg:hidden">
              {lead}
            </p>
          )}
          <div className="mt-8 lg:hidden">
            <TreatmentHeroImage image={image} />
          </div>
          <div className="mt-6 lg:hidden">
            {following.length > 0 && (
              <div className="mb-6 space-y-4 text-lg leading-8 text-primaryLighter">
                {following.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            <TreatmentFactStrip
              facts={facts}
              columns={factColumns}
              className="mt-8 !px-0 pb-8 sm:!px-0 md:!px-0 lg:hidden"
              overlapHero={false}
            />
            {actions}
          </div>
          <div className="mt-6 hidden lg:block">{actions}</div>
        </div>
        <div className="hidden lg:block">
          <TreatmentHeroImage image={image} />
        </div>
      </MotionSection>
      <TreatmentFactStrip facts={facts} columns={factColumns} className="hidden lg:block" />
    </>
  );
}

export function TreatmentBodySection({ children }: { children: ReactNode }) {
  return (
    <MotionSection className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      {children}
    </MotionSection>
  );
}

export function TreatmentRelatedCards({
  title,
  items,
  locale,
}: {
  title: string;
  items: { title: string; href: string; description: string }[];
  locale: "de" | "en";
}) {
  return (
    <MotionSection
      data-treatment-related
      className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
    >
      <div className="rounded-lg bg-lightBeige p-8">
        <h2 className="font-serif text-3xl font-semibold text-primary">
          {title}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10 transition hover:shadow-md"
            >
              <MotionCard
                delay={Math.min(index * 0.04, 0.2)}
                className="h-full"
              >
                <h3 className="break-words hyphens-auto font-serif text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-primaryLighter">
                  {item.description}
                </p>
                <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">
                  {locale === "en" ? "Learn more" : "Mehr erfahren"}
                </span>
              </MotionCard>
            </Link>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
