import { Metadata } from "next";
import NutritionPackagePage, { getNutritionPackageMetadata } from "app/components/NutritionPackagePage";

export const metadata: Metadata = getNutritionPackageMetadata("en", "silver");

export default function Page() {
  return <NutritionPackagePage locale="en" packageKey="silver" />;
}
