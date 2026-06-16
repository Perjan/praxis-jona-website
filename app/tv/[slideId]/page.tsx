import { Suspense } from "react";
import { notFound } from "next/navigation";
import TVNewPageClient from "../TVNewPageClient";
import { getTVSlideById, TV_NEW_SLIDES } from "../content";

export function generateStaticParams() {
  return TV_NEW_SLIDES.map((slide) => ({
    slideId: slide.id,
  }));
}

export default function TVNewSingleSlidePage({
  params,
}: {
  params: { slideId: string };
}) {
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
