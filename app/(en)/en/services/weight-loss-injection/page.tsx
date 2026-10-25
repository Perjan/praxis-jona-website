import { ClinicTreatmentPage, clinicTreatmentMetadata } from "app/components/ClinicTreatmentPage";

export const metadata = clinicTreatmentMetadata("weightLoss", "en");

export default function Page() {
  return <ClinicTreatmentPage pageKey="weightLoss" locale="en" />;
}
