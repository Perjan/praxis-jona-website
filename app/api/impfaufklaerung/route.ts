import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";

import { createImpfaufklaerungSchema, impfaufklaerungCopy } from "@/app/anamnese/impfaufklaerung/form-definition";

const shouldMockDelivery = () =>
  process.env.NODE_ENV !== "production" && process.env.ANAMNESE_DELIVERY_MODE !== "live";

const valueOrDash = (value: string | undefined, fallback: string) => value || fallback;

function generateImpfaufklaerungPDF(data: any) {
  const copy = impfaufklaerungCopy[data.locale === "en" ? "en" : "de"];
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

  doc.setFontSize(16);
  addText(copy.pdf.title, true);
  doc.setFontSize(10);
  y += 4;

  copy.fields.forEach((field) => addText(`${field.label}: ${valueOrDash(data[field.name], copy.pdf.noInformation)}`));
  addText(`${copy.pdf.gender}: ${valueOrDash(data.gender, copy.pdf.noInformation)}`);
  y += 4;

  copy.questions.forEach((question) => {
    addText(`${question.question} ${data[question.id] === "ja" ? copy.yes : copy.no}`, true);
    addText(`${question.detailLabel}: ${valueOrDash(data[question.detailName], copy.pdf.noInformation)}`);
  });

  y += 4;
  addText(copy.consentDescription, true);
  copy.riskInformation.paragraphs.forEach((paragraph) => addText(paragraph));
  copy.riskInformation.bullets.forEach((bullet) => addText(`- ${bullet}`));
  addText(`${copy.pdf.riskInformationRead}: ${data.riskInformationRead ? copy.yes : copy.no}`);
  addText(`${copy.pdf.consentAccepted}: ${data.consentAccepted ? copy.yes : copy.no}`);
  addText(`${copy.pdf.placeDate}: ${valueOrDash(data.placeDate, copy.pdf.noInformation)}`);
  addText(`${copy.pdf.signature}: ${data.signature ? copy.pdf.signaturePresent : copy.pdf.noInformation}`);

  return doc.output("datauristring").split(",")[1];
}

export async function POST(request: NextRequest) {
  let errorMessage: string = impfaufklaerungCopy.de.error;

  try {
    const rawData = await request.json();
    const locale = rawData?.locale === "en" ? "en" : "de";
    const copy = impfaufklaerungCopy[locale];
    errorMessage = copy.error;
    const formData = createImpfaufklaerungSchema(locale).parse(rawData);
    const pdfBase64 = generateImpfaufklaerungPDF(formData);

    if (shouldMockDelivery()) {
      console.info("Impfaufklärung validated; skipping n8n delivery in local mock mode.", {
        patientName: formData.patientName,
        locale: formData.locale,
      });
      return NextResponse.json({ success: true, message: copy.pdf.mockMessage });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
      throw new Error("N8N_WEBHOOK_URL environment variable is not configured");
    }

    const n8nFormData = new FormData();
    n8nFormData.append(
      "file",
      new Blob([Buffer.from(pdfBase64, "base64")], { type: "application/pdf" }),
      `${copy.pdf.filenamePrefix}_${formData.patientName.replace(/\s+/g, "_")}.pdf`
    );
    n8nFormData.append("patientName", formData.patientName);
    n8nFormData.append("submittedAt", new Date().toISOString());
    n8nFormData.append("metadata", JSON.stringify(formData));

    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      body: n8nFormData,
    });

    if (!response.ok) {
      throw new Error(`N8N webhook failed with status: ${response.status}`);
    }

    return NextResponse.json({ success: true, message: copy.pdf.successMessage });
  } catch (error) {
    console.error("Error processing impfaufklaerung form:", error);
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}
