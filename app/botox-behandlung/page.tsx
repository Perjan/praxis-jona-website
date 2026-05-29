import { Metadata } from "next";
import { BotulinumtoxinMainPage } from "app/components/BotulinumtoxinPage";
import { buildMetadata } from "app/components/pageMetadata";
import { botulinumtoxinContentDe } from "app/content/botulinumtoxin";

export const metadata: Metadata = buildMetadata({
  title: botulinumtoxinContentDe.intro.title,
  description: `${botulinumtoxinContentDe.intro.subtitle}. ${botulinumtoxinContentDe.intro.description}`,
  canonical: botulinumtoxinContentDe.intro.canonical,
  alternate: botulinumtoxinContentDe.intro.alternate,
  locale: "de",
});

export default function Page() {
  return <BotulinumtoxinMainPage locale="de" />;
}
