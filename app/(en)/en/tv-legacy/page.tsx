import { Suspense } from "react"
import TVPageClient from "app/(de)/tv-legacy/TVPageClient"

import { legacyImages } from "app/(de)/tv-legacy/slides"

export default function TVPage() {
  return (
    <Suspense fallback={null}>
      <TVPageClient baseImages={legacyImages} locale="en" />
    </Suspense>
  )
}
