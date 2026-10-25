import { ClinicTreatmentPage, clinicTreatmentMetadata } from "app/components/ClinicTreatmentPage";

export const metadata = clinicTreatmentMetadata("nutrition", "en");

export default function Page() {
  return <ClinicTreatmentPage pageKey="nutrition" locale="en" />;
}
