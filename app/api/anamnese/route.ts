import { NextRequest, NextResponse } from "next/server";

import { anamneseCopy, createAnamneseSchema } from "@/app/anamnese/form-definition";
import {
  createAnamneseFilename,
  dataUrlToBlob,
  generateAnamnesePDF,
  getFileExtensionFromMime,
} from "./pdf";

const shouldMockDelivery = () =>
  process.env.NODE_ENV !== "production" && process.env.ANAMNESE_DELIVERY_MODE !== "live";

export async function POST(request: NextRequest) {
  let errorMessage: string = anamneseCopy.de.error;

  try {
    const rawFormData = await request.json();
    const locale = rawFormData?.locale === "en" ? "en" : "de";
    const copy = anamneseCopy[locale];
    errorMessage = copy.error;
    const formData = createAnamneseSchema(locale).parse(rawFormData);

    const pdfBase64 = generateAnamnesePDF(formData);
    const pdfBuffer = Buffer.from(pdfBase64, "base64");
    const filename = createAnamneseFilename(formData);

    if (shouldMockDelivery()) {
      console.info("Anamnese submission validated; skipping n8n delivery in local mock mode.", {
        filename,
        patientName: formData.patient.name,
        locale: formData.locale,
      });
      return NextResponse.json({ success: true, message: copy.api.mockMessage });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      throw new Error("N8N_WEBHOOK_URL environment variable is not configured");
    }

    const n8nFormData = new FormData();
    const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });
    n8nFormData.append("file", pdfBlob, filename);
    n8nFormData.append("patientName", formData.patient.name);
    n8nFormData.append("patientEmail", formData.patient.email);
    n8nFormData.append("submittedAt", new Date().toISOString());
    n8nFormData.append(
      "metadata",
      JSON.stringify({
        locale: formData.locale,
        patient: formData.patient,
        medicalHistory: formData.medicalHistory,
        lifestyle: formData.lifestyle,
        sexSpecific: formData.sexSpecific,
        consent: formData.consent,
      })
    );

    try {
      const { blob, mimeType } = dataUrlToBlob(formData.signature);
      const extension = getFileExtensionFromMime(mimeType);
      n8nFormData.append("signatureImage", blob, `signature.${extension}`);
    } catch (error) {
      console.warn("Unable to convert signature to blob, sending as data URL fallback.", error);
      n8nFormData.append("signatureImageDataUrl", formData.signature);
    }

    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      body: n8nFormData,
    });

    if (!response.ok) {
      throw new Error(`N8N webhook failed with status: ${response.status}`);
    }

    return NextResponse.json({ success: true, message: copy.api.successMessage });
  } catch (error) {
    console.error("Error processing anamnese form:", error);
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}
