import { Suspense } from 'react';
import TVNewPageClient from 'app/(de)/tv/TVNewPageClient';
import { TV_NEW_SLIDES_EN } from 'app/(de)/tv/content';

export default function TVNewPage() {
  return (
    <Suspense fallback={null}>
      <TVNewPageClient slides={TV_NEW_SLIDES_EN} locale="en" />
    </Suspense>
  );
}
