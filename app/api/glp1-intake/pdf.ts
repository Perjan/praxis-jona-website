import { jsPDF } from "jspdf";

import { getImageFormatFromMime, parseDataUrl } from "@/app/api/anamnese/pdf";
import {
  Glp1Submission,
  calculateGlp1Age,
  calculateGlp1Bmi,
  deriveGlp1ReviewFlags,
  sanitizeGlp1FilenamePart,
} from "@/app/glp1/intake-definition";
import { getGlp1Copy, glp1AnswerFieldKeys } from "@/app/glp1/intake-copy";

export function createGlp1Filename(submission: Glp1Submission, now = new Date()) {
  const flow = submission.flow === "new" ? "Neuanfrage" : "Folgebeurteilung";
  return `GLP1_${flow}_${sanitizeGlp1FilenamePart(submission.patient.name)}_${now.toISOString().slice(0, 10)}.pdf`;
}

export function generateGlp1Pdf(submission: Glp1Submission, now = new Date()) {
  const copy = getGlp1Copy(submission.locale);
  const doc = new jsPDF();
  const margin = 18;
  const maxWidth = 174;
  const pageBottom = 278;
  let y = 18;

  const addText = (text: string, bold = false, indent = 0) => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, maxWidth - indent);
    for (const line of lines) {
      if (y > pageBottom) {
        doc.addPage();
        y = 18;
      }
      doc.text(line, margin + indent, y);
      y += 6;
    }
  };

  const section = (title: string) => {
    y += 5;
    addText(title, true);
    y += 2;
  };

  const format = (value: string | boolean) => {
    if (typeof value === "boolean") return value ? copy.options.yes : copy.options.no;
    if (!value) return copy.pdf.noInformation;
    return (copy.options as Record<string, string>)[value] ?? value;
  };

  const line = (label: string, value: string | boolean) => addText(`${label}: ${format(value)}`, false, 4);

  doc.setFontSize(17);
  addText(submission.flow === "new" ? copy.pdf.titleNew : copy.pdf.titleFollow, true);
  doc.setFontSize(9);
  y += 3;
  addText(`${copy.form.reference}: ${submission.submissionId}`);
  addText(`${copy.pdf.submittedAt}: ${now.toLocaleString(submission.locale === "de" ? "de-DE" : "en-GB")}`);

  section(copy.sections.personal);
  line(copy.fields.name, submission.patient.name);
  const age = calculateGlp1Age(submission.patient.birthdate, now);
  line(copy.fields.birthdate, `${submission.patient.birthdate}${age === null ? "" : ` (${age})`}`);
  line(copy.fields.email, submission.patient.email);
  line(copy.fields.phone, submission.patient.phone);

  section(submission.flow === "new" ? copy.sections.basics : copy.sections.currentTreatment);
  if (submission.flow === "new") {
    for (const [key, labelKey] of Object.entries(glp1AnswerFieldKeys.new)) {
      line(copy.fields[labelKey], submission.answers[key as keyof typeof submission.answers]);
    }
    line(copy.fields.bmi, String(calculateGlp1Bmi(submission.answers.heightCm, submission.answers.weightKg) ?? ""));
  } else {
    for (const [key, labelKey] of Object.entries(glp1AnswerFieldKeys["follow-up"])) {
      line(copy.fields[labelKey], submission.answers[key as keyof typeof submission.answers]);
    }
  }

  section(copy.pdf.reviewFlags);
  const flags = deriveGlp1ReviewFlags(submission);
  addText(flags.length ? flags.join(", ") : copy.pdf.noFlags, false, 4);

  section(copy.sections.consent);
  line(copy.pdf.consent, submission.consent.accepted);
  line("Version", submission.consent.textVersion);
  line(copy.pdf.submittedAt, submission.consent.acceptedAt);

  section(copy.fields.signature);
  try {
    const { mimeType } = parseDataUrl(submission.signature);
    const format = getImageFormatFromMime(mimeType);
    const properties = doc.getImageProperties(submission.signature);
    const width = 75;
    const height = Math.min(35, width * (properties.height / Math.max(properties.width, 1)));
    if (y + height > pageBottom) {
      doc.addPage();
      y = 18;
    }
    doc.addImage(submission.signature, format, margin, y, width, height);
  } catch {
    addText(copy.pdf.signatureFallback, false, 4);
  }

  return doc.output("datauristring").split(",")[1];
}
