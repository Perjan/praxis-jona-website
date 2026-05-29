import { Suspense } from 'react';
import TVNewPageClient from '../TVNewPageClient';
import { TV_TEMPLATE_SAMPLE_SLIDES } from '../templates/sampleSlides';

export default function TVTemplatePreviewPage() {
  return (
    <Suspense fallback={null}>
      <TVNewPageClient slides={TV_TEMPLATE_SAMPLE_SLIDES} />
    </Suspense>
  );
}
