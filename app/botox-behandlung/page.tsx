import { Metadata } from "next";
import { BotulinumtoxinMainPage } from "app/components/BotulinumtoxinPage";
import { buildMetadata } from "app/components/pageMetadata";
import { botulinumtoxinIntro } from "app/content/botulinumtoxin";

export const metadata: Metadata = buildMetadata({
  title: botulinumtoxinIntro.title,
  description: `${botulinumtoxinIntro.subtitle}. ${botulinumtoxinIntro.description}`,
  canonical: botulinumtoxinIntro.canonical,
  alternate: botulinumtoxinIntro.alternate,
  locale: "de",
});

export default function Page() {
  return <BotulinumtoxinMainPage />;
}
