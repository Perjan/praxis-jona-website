import { Suspense } from 'react';
import TVNewPageClient from './TVNewPageClient';

export default function TVNewPage() {
  return (
    <Suspense fallback={null}>
      <TVNewPageClient />
    </Suspense>
  );
}
