import { Suspense } from 'react';
import TVNewPageClient from 'app/tv-new/TVNewPageClient';
import { TV_NEW_SLIDES_EN } from 'app/tv-new/content';

export default function TVNewPage() {
  return (
    <Suspense fallback={null}>
      <TVNewPageClient slides={TV_NEW_SLIDES_EN} locale="en" />
    </Suspense>
  );
}
