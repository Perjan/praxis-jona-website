import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";

import {
  createEisenaufklaerungSchema,
  eisenaufklaerungCopy,
} from "@/app/anamnese/eiseninfusion/form-definition";

const shouldMockDelivery = () =>
  process.env.NODE_ENV !== "production" && process.env.ANAMNESE_DELIVERY_MODE !== "live";

const valueOrDash = (value: string | undefined, fallback: string) => value || fallback;

function generateEisenaufklaerungPDF(data: any) {
  const copy = eisenaufklaerungCopy[data.locale === "en" ? "en" : "de"];
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
  addText(copy.heading, true);
  doc.setFontSize(10);
  y += 4;

  addText(`${copy.fields[0].label}: ${valueOrDash(data.patientName, copy.noInformation)}`);
  y += 4;

  copy.informationSections.forEach((section) => {
    addText(section.title, true);
    if ("paragraphs" in section) {
      section.paragraphs.forEach((paragraph) => addText(paragraph));
    }
    if ("bullets" in section) {
      section.bullets.forEach((bullet) => addText(`- ${bullet}`));
    }
    y += 2;
  });

  addText(copy.fields[1].label, true);
  addText(`${copy.fields[1].label}: ${data.monitoringWaiverAccepted ? copy.yes : copy.no}`);
  addText(copy.monitoringWaiverText);
  y += 2;

  addText(copy.consentHeading, true);
  addText(copy.consentText);
  addText(`${copy.fields[2].label}: ${data.consentAccepted ? copy.yes : copy.no}`);
  addText(`${copy.fields[3].label}: ${valueOrDash(data.doctorInitials, copy.noInformation)}`);
  addText(`${copy.fields[4].label}: ${valueOrDash(data.date, copy.noInformation)}`);
  addText(`${copy.fields[5].label}: ${data.signature ? copy.signaturePresent : copy.noInformation}`);

  return doc.output("datauristring").split(",")[1];
}

export async function POST(request: NextRequest) {
  let errorMessage: string = eisenaufklaerungCopy.de.error;

  try {
    const rawData = await request.json();
    const locale = rawData?.locale === "en" ? "en" : "de";
    const copy = eisenaufklaerungCopy[locale];
    errorMessage = copy.error;
    const formData = createEisenaufklaerungSchema(locale).parse(rawData);
    const pdfBase64 = generateEisenaufklaerungPDF(formData);

    if (shouldMockDelivery()) {
      console.info("Eisenaufklärung validated; skipping n8n delivery in local mock mode.", {
        patientName: formData.patientName,
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
      `${copy.filenamePrefix}_${formData.patientName.replace(/\s+/g, "_")}.pdf`
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

    return NextResponse.json({ success: true, message: copy.successMessage });
  } catch (error) {
    console.error("Error processing eisenaufklaerung form:", error);
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}
