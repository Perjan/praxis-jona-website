import { Metadata } from "next";
import NutritionMedicinePage, { getNutritionMedicinePageCopy } from "app/components/NutritionMedicinePage";

const pageCopy = getNutritionMedicinePageCopy("en");
const url = "/en/services/nutritional-medicine";

export const metadata: Metadata = {
  title: pageCopy.title,
  description: pageCopy.description,
  openGraph: {
    title: pageCopy.title,
    description: pageCopy.description,
    type: "website",
    url,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 600,
        alt: "Praxis Jona",
      },
    ],
  },
  alternates: {
    canonical: url,
    languages: {
      de: "/leistungen/ernaehrungsmedizin",
      en: url,
      "x-default": "/leistungen/ernaehrungsmedizin",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: pageCopy.title,
    description: pageCopy.description,
    images: ["/images/og-image.png"],
  },
};

export default function Page() {
  return <NutritionMedicinePage locale="en" />;
}
