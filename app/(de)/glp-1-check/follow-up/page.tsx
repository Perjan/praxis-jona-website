import type { Metadata } from "next";

import Glp1Questionnaire from "@/app/glp1/Glp1Questionnaire";

export const metadata: Metadata = {
  title: "GLP-1 Folgebeurteilung",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Glp1Questionnaire locale="de" flow="follow-up" />;
}
