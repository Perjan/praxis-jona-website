import type { Metadata } from "next";

import Glp1Questionnaire from "@/app/glp1/Glp1Questionnaire";

export const metadata: Metadata = {
  title: "GLP-1 Short Medical History",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Glp1Questionnaire locale="en" flow="new" />;
}
