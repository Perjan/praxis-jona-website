import TVPageClient from './TVPageClient';
import { legacyImages } from './slides';

export default function TVPage() {
  return <TVPageClient baseImages={legacyImages} />;
}
