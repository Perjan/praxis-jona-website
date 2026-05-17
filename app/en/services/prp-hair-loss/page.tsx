import { Metadata } from "next";
import { LandingPage } from "app/components/BetaPages";
import { landingPages } from "app/components/betaContent";
import { buildMetadata } from "app/components/pageMetadata";

const content = landingPages.prpHairEn;

export const metadata: Metadata = buildMetadata({
  title: content.title,
  description: content.description,
  canonical: content.canonical,
  alternate: content.alternate,
  locale: content.locale,
});

export default function Page() {
  return <LandingPage content={content} />;
}
