import { Metadata } from "next";
import NutritionPackagePage, { getNutritionPackageMetadata } from "app/components/NutritionPackagePage";

export const metadata: Metadata = getNutritionPackageMetadata("de", "bronze");

export default function Page() {
  return <NutritionPackagePage locale="de" packageKey="bronze" />;
}
