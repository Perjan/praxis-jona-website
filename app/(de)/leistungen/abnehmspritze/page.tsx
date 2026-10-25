import { ClinicTreatmentPage, clinicTreatmentMetadata } from "app/components/ClinicTreatmentPage";

export const metadata = clinicTreatmentMetadata("weightLoss");

export default function Page() {
  return <ClinicTreatmentPage pageKey="weightLoss" />;
}
