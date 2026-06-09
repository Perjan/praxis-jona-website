import { jsPDF } from "jspdf";

import {
  AnamnesePayload,
  Locale,
  anamneseCopy,
  calculateAgeFromBirthdate,
  sanitizeFilenamePart,
} from "@/app/anamnese/form-definition";

export const parseDataUrl = (dataUrl: string) => {
  const matches = dataUrl.match(/^data:(.+);base64,(.+)$/);
  if (!matches) {
    throw new Error("Invalid data URL");
  }
  const [, mimeType, base64Data] = matches;
  return { mimeType, base64Data };
};

export const getImageFormatFromMime = (mimeType: string) => {
  if (mimeType === "image/png") return "PNG";
  if (mimeType === "image/jpeg" || mimeType === "image/jpg") return "JPEG";
  return "PNG";
};

export const getFileExtensionFromMime = (mimeType: string) => {
  if (mimeType === "image/png") return "png";
  if (mimeType === "image/jpeg" || mimeType === "image/jpg") return "jpg";
  return "png";
};

export const dataUrlToBlob = (dataUrl: string) => {
  const { mimeType, base64Data } = parseDataUrl(dataUrl);
  const buffer = Buffer.from(base64Data, "base64");
  return { blob: new Blob([buffer], { type: mimeType }), mimeType };
};

const formatValue = (locale: Locale, value?: string) => {
  if (!value) return anamneseCopy[locale].pdf.noInformation;
  const options = anamneseCopy[locale].options as Record<string, string>;
  return options[value] ?? value;
};

export function createAnamneseFilename(data: AnamnesePayload, now = new Date()) {
  return `Anamnesebogen_${sanitizeFilenamePart(data.patient.name)}_${now.toISOString().split("T")[0]}.pdf`;
}

export function generateAnamnesePDF(data: AnamnesePayload, now = new Date()): string {
  const locale = data.locale;
  const copy = anamneseCopy[locale];
  const doc = new jsPDF();
  let yPosition = 20;
  const lineHeight = 7;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;

  const addText = (text: string, isBold = false, indent = 0) => {
    if (yPosition > pageHeight - margin) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFont("helvetica", isBold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, 170 - indent);
    lines.forEach((line: string) => {
      doc.text(line, margin + indent, yPosition);
      yPosition += lineHeight;
    });
  };

  const addSection = (title: string) => {
    yPosition += 5;
    addText(title, true);
    yPosition += 2;
  };

  const addLine = (label: string, value?: string, indent = 5) => {
    addText(`${label}: ${formatValue(locale, value)}`, false, indent);
  };

  doc.setFontSize(18);
  addText(copy.title, true);
  yPosition += 5;

  doc.setFontSize(10);
  addText(`${copy.pdf.submittedAt}: ${now.toLocaleDateString(locale === "de" ? "de-DE" : "en-US")}`);
  yPosition += 10;

  addSection(copy.sections.personal);
  const age = calculateAgeFromBirthdate(data.patient.birthdate);
  addLine(copy.fields.name, data.patient.name, 0);
  addLine(
    copy.fields.birthdate,
    `${data.patient.birthdate}${age ? ` (${age} ${copy.fields.years})` : ""}`,
    0
  );
  addLine(copy.fields.height, data.patient.height, 0);
  addLine(copy.fields.weight, data.patient.weight, 0);
  addLine(copy.fields.occupation, data.patient.occupation, 0);
  addLine(copy.fields.email, data.patient.email, 0);

  addSection(copy.sections.complaints);
  addLine(copy.fields.currentComplaints, data.medicalHistory.currentComplaints);
  addLine(copy.fields.programGoals, data.medicalHistory.programGoals);

  addSection(copy.sections.history);
  addLine(copy.fields.previousDiseases, data.medicalHistory.previousDiseases);
  addLine(copy.fields.operations, data.medicalHistory.operations);

  addSection(copy.sections.family);
  addLine(copy.fields.familyHeartStroke, data.medicalHistory.familyHeartStroke);
  addLine(copy.fields.familyCancer, data.medicalHistory.familyCancer);
  addLine(copy.fields.familyDementia, data.medicalHistory.familyDementia);
  addLine(copy.fields.familyDiabetes, data.medicalHistory.familyDiabetes);

  addSection(copy.sections.medication);
  addLine(copy.fields.medications, data.medicalHistory.medications);
  addLine(copy.fields.supplements, data.medicalHistory.supplements);

  addSection(copy.sections.lifestyle);
  addLine(copy.fields.exerciseFrequency, data.lifestyle.exerciseFrequency);
  addLine(copy.fields.sleepQuality, data.lifestyle.sleepQuality);
  addLine(copy.fields.diet, data.lifestyle.diet);
  const smoking = data.lifestyle.smoking === "ja" && data.lifestyle.smokingAmount
    ? `${formatValue(locale, data.lifestyle.smoking)} (${data.lifestyle.smokingAmount})`
    : data.lifestyle.smoking;
  addLine(copy.fields.smoking, smoking);
  addLine(copy.fields.alcohol, data.lifestyle.alcohol);
  addLine(copy.fields.stressLevel, data.lifestyle.stressLevel);

  addSection(copy.sections.sexSpecific);
  addLine(copy.fields.gender, data.sexSpecific.gender);
  if (data.sexSpecific.gender === "female") {
    addLine(copy.fields.cycleRegular, data.sexSpecific.cycleRegular);
    addLine(copy.fields.femaleLibidoEnergy, data.sexSpecific.femaleLibidoEnergy);
    addLine(copy.fields.pregnancies, data.sexSpecific.pregnancies);
    addLine(copy.fields.children, data.sexSpecific.children);
    addLine(copy.fields.hormonalContraception, data.sexSpecific.hormonalContraception);
    addLine(copy.fields.hormonalContraceptionDetails, data.sexSpecific.hormonalContraceptionDetails);
  }
  if (data.sexSpecific.gender === "male") {
    addLine(copy.fields.maleLibidoEnergy, data.sexSpecific.maleLibidoEnergy);
    addLine(copy.fields.testosteroneMeasured, data.sexSpecific.testosteroneMeasured);
    addLine(copy.fields.testosteroneSubstitution, data.sexSpecific.testosteroneSubstitution);
  }

  addSection(copy.sections.consent);
  addLine(copy.pdf.consentAccepted, data.consent.accepted ? copy.options.ja : copy.options.nein);
  addLine("Version", data.consent.textVersion);
  addLine(copy.pdf.submittedAt, data.consent.acceptedAt);

  if (data.signature) {
    addSection(copy.fields.signature);
    try {
      const { mimeType } = parseDataUrl(data.signature);
      const imageFormat = getImageFormatFromMime(mimeType);
      const imageProps = doc.getImageProperties(data.signature);
      const targetWidth = 80;
      const aspectRatio = imageProps.width ? imageProps.height / imageProps.width : 0.4;
      const targetHeight = targetWidth * aspectRatio;

      if (yPosition > pageHeight - margin - targetHeight) {
        doc.addPage();
        yPosition = 20;
      }

      doc.addImage(data.signature, imageFormat, margin, yPosition, targetWidth, targetHeight);
      yPosition += targetHeight + 5;
    } catch {
      addText(copy.pdf.signatureFallback, false, 5);
    }
  }

  return doc.output("datauristring").split(",")[1];
}
