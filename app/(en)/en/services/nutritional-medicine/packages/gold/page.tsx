import { Metadata } from "next";
import NutritionPackagePage, { getNutritionPackageMetadata } from "app/components/NutritionPackagePage";

export const metadata: Metadata = getNutritionPackageMetadata("en", "gold");

export default function Page() {
  return <NutritionPackagePage locale="en" packageKey="gold" />;
}
