import { Suspense } from "react"
import TVPageClient from "app/tv-legacy/TVPageClient"

const legacyImages = Array.from({ length: 13 }, (_, index) => `/tv-legacy/slide${index + 1}.jpg`)

export default function TVPage() {
  return (
    <Suspense fallback={null}>
      <TVPageClient baseImages={legacyImages} />
    </Suspense>
  )
}
