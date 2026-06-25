import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";

import { ThyroidPayload, createThyroidSchema, thyroidCopy } from "@/app/anamnese/schilddruesen-diagnostik/form-definition";

const shouldMockDelivery = () =>
  process.env.NODE_ENV !== "production" && process.env.ANAMNESE_DELIVERY_MODE !== "live";

const valueOrDash = (value: string | undefined, fallback: string) => value || fallback;

function generateThyroidPDF(data: ThyroidPayload) {
  const copy = thyroidCopy[data.locale];
  const doc = new jsPDF();
  let y = 20;
  const margin = 20;
  const lineHeight = 7;
  const pageHeight = doc.internal.pageSize.height;

  const addText = (text: string, bold = false) => {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = 20;
    }
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.splitTextToSize(text, 170).forEach((line: string) => {
      doc.text(line, margin, y);
      y += lineHeight;
    });
  };

  const yesNo = (value: string | undefined) => (value === "ja" ? copy.yes : value === "nein" ? copy.no : copy.noInformation);

  doc.setFontSize(16);
  addText(copy.title, true);
  doc.setFontSize(10);
  y += 4;
  addText(`${copy.fields.reason}: ${valueOrDash(data.reason, copy.noInformation)}`);
  addText(`${copy.fields.age}: ${valueOrDash(data.age, copy.noInformation)}`);
  addText(`${copy.fields.height}: ${valueOrDash(data.height, copy.noInformation)}`);
  addText(`${copy.fields.weight}: ${valueOrDash(data.weight, copy.noInformation)}`);

  y += 4;
  addText(copy.sections.thyroid, true);
  copy.thyroidQuestions.forEach((question) => {
    const value = data.thyroid[question.id as keyof ThyroidPayload["thyroid"]] as string | undefined;
    addText(`${question.label}: ${yesNo(value)}`);
    if (question.detailLabel) {
      const detail = data.thyroid[`${question.id}Details` as keyof ThyroidPayload["thyroid"]] as string | undefined;
      addText(`${question.detailLabel}: ${valueOrDash(detail, copy.noInformation)}`);
    }
  });
  addText(`${copy.extraFields.otherDiseasesOperations}: ${valueOrDash(data.thyroid.otherDiseasesOperations, copy.noInformation)}`);
  addText(`${copy.fields.dose}: ${valueOrDash(data.thyroid.currentMedications, copy.noInformation)}`);
  addText(`${copy.extraFields.cigarettesPerDay}: ${valueOrDash(data.thyroid.cigarettesPerDay, copy.noInformation)}`);
  addText(`${copy.extraFields.lowerAbdominalOperations}: ${valueOrDash(data.thyroid.lowerAbdominalOperations, copy.noInformation)}`);
  addText(`${copy.extraFields.lastPeriodDate}: ${valueOrDash(data.thyroid.lastPeriodDate, copy.noInformation)}`);
  addText(`${copy.unknown}: ${data.thyroid.pregnancyUnknown ? copy.yes : copy.no}`);

  y += 4;
  addText(copy.sections.general, true);
  copy.symptomQuestions.forEach((question) => {
    const value = data.symptoms[question.id as keyof ThyroidPayload["symptoms"]] as string | undefined;
    addText(`${question.label}: ${yesNo(value)}`);
    if (question.detailLabel) {
      const detail = data.symptoms[`${question.id}Details` as keyof ThyroidPayload["symptoms"]] as string | undefined;
      addText(`${question.detailLabel}: ${valueOrDash(detail, copy.noInformation)}`);
    }
  });
  addText(`${copy.extraFields.otherSymptoms}: ${valueOrDash(data.symptoms.otherSymptoms, copy.noInformation)}`);

  y += 4;
  addText(copy.sections.privacy, true);
  copy.privacyText.forEach((paragraph) => addText(paragraph));
  addText(`${copy.fields.patientName}: ${data.privacy.patientName}`);
  addText(`${copy.fields.birthdate}: ${data.privacy.birthdate}`);
  addText(`${copy.fields.address}: ${data.privacy.address}`);
  addText(`${copy.privacyConsent}: ${data.privacy.consentAccepted ? copy.yes : copy.no}`);
  addText(`${copy.fields.placeDate}: ${data.privacy.placeDate}`);
  addText(`${copy.fields.signature}: ${data.signature ? "present" : copy.noInformation}`);

  return doc.output("datauristring").split(",")[1];
}

export async function POST(request: NextRequest) {
  let errorMessage: string = thyroidCopy.de.error;

  try {
    const rawData = await request.json();
    const locale = rawData?.locale === "en" ? "en" : "de";
    const copy = thyroidCopy[locale];
    errorMessage = copy.error;
    const formData = createThyroidSchema(locale).parse(rawData);
    const pdfBase64 = generateThyroidPDF(formData);

    if (shouldMockDelivery()) {
      console.info("Schilddrüsen-Diagnostik validated; skipping n8n delivery in local mock mode.", {
        patientName: formData.privacy.patientName,
        locale: formData.locale,
      });
      return NextResponse.json({ success: true, message: copy.mockMessage });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
      throw new Error("N8N_WEBHOOK_URL environment variable is not configured");
    }

    const n8nFormData = new FormData();
    n8nFormData.append(
      "file",
      new Blob([Buffer.from(pdfBase64, "base64")], { type: "application/pdf" }),
      `${copy.filenamePrefix}_${formData.privacy.patientName.replace(/\s+/g, "_")}.pdf`
    );
    n8nFormData.append("patientName", formData.privacy.patientName);
    n8nFormData.append("submittedAt", new Date().toISOString());
    n8nFormData.append("metadata", JSON.stringify(formData));

    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      body: n8nFormData,
    });

    if (!response.ok) {
      throw new Error(`N8N webhook failed with status: ${response.status}`);
    }

    return NextResponse.json({ success: true, message: copy.successMessage });
  } catch (error) {
    console.error("Error processing schilddruesen-diagnostik form:", error);
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}
