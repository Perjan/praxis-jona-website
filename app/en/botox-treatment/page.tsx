import { Metadata } from "next";
import { BotulinumtoxinMainPage } from "app/components/BotulinumtoxinPage";
import { buildMetadata } from "app/components/pageMetadata";
import { botulinumtoxinContentEn } from "app/content/botulinumtoxin";

export const metadata: Metadata = buildMetadata({
  title: botulinumtoxinContentEn.intro.title,
  description: `${botulinumtoxinContentEn.intro.subtitle}. ${botulinumtoxinContentEn.intro.description}`,
  canonical: botulinumtoxinContentEn.intro.canonical,
  alternate: botulinumtoxinContentEn.intro.alternate,
  locale: "en",
});

export default function Page() {
  return <BotulinumtoxinMainPage locale="en" />;
}
