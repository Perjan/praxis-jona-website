import { Suspense } from "react";
import { notFound } from "next/navigation";
import TVNewPageClient from "app/(de)/tv/TVNewPageClient";
import { getTVSlideByIdEn, TV_NEW_SLIDES_EN } from "app/(de)/tv/content";

export function generateStaticParams() {
  return TV_NEW_SLIDES_EN.map((slide) => ({
    slideId: slide.id,
  }));
}

export default async function TVNewSingleSlidePage(
  props: {
    params: Promise<{ slideId: string }>;
  }
) {
  const params = await props.params;
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
