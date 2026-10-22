import { Suspense } from "react";
import { notFound } from "next/navigation";
import TVNewPageClient from "../TVNewPageClient";
import { getTVSlideById, TV_NEW_SLIDES } from "../content";

export function generateStaticParams() {
  return TV_NEW_SLIDES.map((slide) => ({
    slideId: slide.id,
  }));
}

export default async function TVNewSingleSlidePage(
  props: {
    params: Promise<{ slideId: string }>;
  }
) {
  const params = await props.params;
  const slide = getTVSlideById(params.slideId);

  if (!slide) {
    notFound();
  }

  return (
    <Suspense fallback={null}>
      <TVNewPageClient forcedSlideId={slide.id} />
    </Suspense>
  );
}
