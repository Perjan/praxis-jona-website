import { Suspense } from "react";
import { notFound } from "next/navigation";
import TVNewPageClient from "app/tv/TVNewPageClient";
import { getTVSlideByIdEn, TV_NEW_SLIDES_EN } from "app/tv/content";

export function generateStaticParams() {
  return TV_NEW_SLIDES_EN.map((slide) => ({
    slideId: slide.id,
  }));
}

export default function TVNewSingleSlidePage({
  params,
}: {
  params: { slideId: string };
}) {
  const slide = getTVSlideByIdEn(params.slideId);

  if (!slide) {
    notFound();
  }

  return (
    <Suspense fallback={null}>
      <TVNewPageClient forcedSlideId={slide.id} slides={TV_NEW_SLIDES_EN} locale="en" />
    </Suspense>
  );
}
