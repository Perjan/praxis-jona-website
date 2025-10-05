import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { jsPDF } from 'jspdf';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface FormData {
  // Persönliche Angaben
  name: string;
  birthdate: string;
  age: string;
  height: string;
  weight: string;
  occupation: string;
  email: string;

  // Beschwerden & Ziele
  currentComplaints: string;
  programGoals: string;

  // Vorerkrankungen & Operationen
  previousDiseases: string;
  operations: string;

  // Familienanamnese
  familyHeartStroke: string;
  familyCancer: string;
  familyDementia: string;
  familyDiabetes: string;

  // Medikamente & Nahrungsergänzung
  medications: string;
  supplements: string;

  // Lebensstil
  exerciseFrequency: string;
  sleepQuality: string;
  diet: string;
  smoking: string;
  smokingAmount: string;
  alcohol: string;
  stressLevel: string;

  // Geschlechtsspezifisch
  gender: string;

  // Für Frauen
  cycleRegular: string;
  femaleLibidoEnergy: string;
  pregnancies: string;
  children: string;
  hormonalContraception: string;
  hormonalContraceptionDetails: string;

  // Für Männer
  maleLibidoEnergy: string;
  testosteroneMeasured: string;
  testosteroneSubstitution: string;
}

function generatePDF(data: FormData): string {
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

    if (isBold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }

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

  // Header
  doc.setFontSize(18);
  addText('Anamnesebogen - Longevity-Programm', true);
  yPosition += 5;

  doc.setFontSize(10);
  addText(`Ausgefüllt am: ${new Date().toLocaleDateString('de-DE')}`);
  yPosition += 10;

  // Persönliche Angaben
  addSection('Persönliche Angaben');
  addText(`Name: ${data.name}`);
  addText(`Geburtsdatum: ${data.birthdate}${data.age ? ` (${data.age} Jahre)` : ''}`);
  addText(`Größe: ${data.height} cm, Gewicht: ${data.weight} kg`);
  addText(`Beruf: ${data.occupation}`);
  addText(`E-Mail: ${data.email}`);

  // Beschwerden & Ziele
  addSection('Beschwerden & Ziele');
  addText('Aktuelle gesundheitliche Beschwerden:', true);
  addText(data.currentComplaints || 'Keine Angaben', false, 5);
  yPosition += 3;
  addText('Ziele mit diesem Programm:', true);
  addText(data.programGoals || 'Keine Angaben', false, 5);

  // Vorerkrankungen & Operationen
  addSection('Vorerkrankungen & Operationen');
  addText('Diagnostizierte Erkrankungen:', true);
  addText(data.previousDiseases || 'Keine Angaben', false, 5);
  yPosition += 3;
  addText('Operationen:', true);
  addText(data.operations || 'Keine Angaben', false, 5);

  // Familienanamnese
  addSection('Familienanamnese');
  if (data.familyHeartStroke) addText(`Herzinfarkt/Schlaganfall: ${data.familyHeartStroke}`, false, 5);
  if (data.familyCancer) addText(`Krebs: ${data.familyCancer}`, false, 5);
  if (data.familyDementia) addText(`Demenz/Alzheimer: ${data.familyDementia}`, false, 5);
  if (data.familyDiabetes) addText(`Diabetes/Stoffwechselstörungen: ${data.familyDiabetes}`, false, 5);

  // Medikamente & Nahrungsergänzung
  addSection('Medikamente & Nahrungsergänzung');
  addText('Medikamente:', true);
  addText(data.medications || 'Keine Angaben', false, 5);
  yPosition += 3;
  addText('Nahrungsergänzungsmittel:', true);
  addText(data.supplements || 'Keine Angaben', false, 5);

  // Lebensstil
  addSection('Lebensstil');
  if (data.exerciseFrequency) addText(`Bewegung: ${data.exerciseFrequency}`, false, 5);
  if (data.sleepQuality) addText(`Schlafqualität: ${data.sleepQuality}`, false, 5);
  if (data.diet) addText(`Ernährung: ${data.diet}`, false, 5);
  if (data.smoking) {
    const smokingText = data.smoking === 'ja' && data.smokingAmount
      ? `Rauchen: ja (${data.smokingAmount})`
      : `Rauchen: ${data.smoking}`;
    addText(smokingText, false, 5);
  }
  if (data.alcohol) addText(`Alkohol: ${data.alcohol}`, false, 5);
  if (data.stressLevel) addText(`Stressbelastung: ${data.stressLevel}`, false, 5);

  // Geschlechtsspezifische Angaben
  if (data.gender === 'female') {
    addSection('Geschlechtsspezifische Angaben (Weiblich)');
    if (data.cycleRegular) addText(`Zyklus regelmäßig: ${data.cycleRegular}`, false, 5);
    if (data.femaleLibidoEnergy) addText(`Libido/Energie: ${data.femaleLibidoEnergy}`, false, 5);
    if (data.pregnancies) addText(`Schwangerschaften: ${data.pregnancies}`, false, 5);
    if (data.children) addText(`Kinder: ${data.children}`, false, 5);
    if (data.hormonalContraception) {
      const hormonalText = data.hormonalContraception === 'ja' && data.hormonalContraceptionDetails
        ? `Hormonelle Verhütung/Therapie: ja (${data.hormonalContraceptionDetails})`
        : `Hormonelle Verhütung/Therapie: ${data.hormonalContraception}`;
      addText(hormonalText, false, 5);
    }
  } else if (data.gender === 'male') {
    addSection('Geschlechtsspezifische Angaben (Männlich)');
    if (data.maleLibidoEnergy) addText(`Libido/Energie: ${data.maleLibidoEnergy}`, false, 5);
    if (data.testosteroneMeasured) {
      addText(`Testosteronwerte gemessen: ${data.testosteroneMeasured}`, false, 5);
      if (data.testosteroneMeasured === 'ja' && data.testosteroneSubstitution) {
        addText(`Substitution erfolgt: ${data.testosteroneSubstitution}`, false, 5);
      }
    }
  }

  // Return PDF as base64 string
  return doc.output('datauristring').split(',')[1];
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Generate PDF
    const pdfBase64 = generatePDF(formData);

    // Prepare email with PDF attachment
    const msg = {
      to: process.env.ANAMNESE_RECIPIENT_EMAIL || 'praxis@example.com', // Configure this in environment variables
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@praxisjona.de', // Configure this in environment variables
      subject: `Anamnesebogen - ${formData.name}`,
      text: `Ein neuer Anamnesebogen wurde ausgefüllt von: ${formData.name} (${formData.email})`,
      html: `
        <h2>Neuer Anamnesebogen eingegangen</h2>
        <p><strong>Patient:</strong> ${formData.name}</p>
        <p><strong>E-Mail:</strong> ${formData.email}</p>
        <p><strong>Eingegangen am:</strong> ${new Date().toLocaleString('de-DE')}</p>
        <p>Der vollständige Anamnesebogen ist als PDF angehängt.</p>
      `,
      attachments: [
        {
          content: pdfBase64,
          filename: `Anamnesebogen_${formData.name.replace(/\s/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`,
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ],
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json({ success: true, message: 'Anamnesebogen erfolgreich gesendet' });
  } catch (error) {
    console.error('Error processing anamnese form:', error);
    return NextResponse.json(
      { success: false, message: 'Fehler beim Verarbeiten des Formulars' },
      { status: 500 }
    );
  }
}
