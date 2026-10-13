export type AppointmentInsuranceSector = "private" | "public";

export type AppointmentBookingUrls = Record<AppointmentInsuranceSector, string>;

type AppointmentBookingTarget = {
    motiveCategoryId?: string;
    motiveId?: string;
    selfPay?: boolean;
};

const doctolibBookingBaseUrl = "https://www.doctolib.de/internist/berlin/gjolli-jonida/booking";
const doctolibProfileUrl =
    "https://www.doctolib.de/internist/berlin/gjolli-jonida?utm_campaign=website-button&utm_source=gjolli-jonida-website-button&utm_medium=referral&utm_content=option-8&utm_term=gjolli-jonida";

function normalizeAppointmentTarget(targetOrCategoryId?: AppointmentBookingTarget | string, selfPay = false): AppointmentBookingTarget {
    if (typeof targetOrCategoryId === "string") {
        return {
            motiveCategoryId: targetOrCategoryId,
            selfPay,
        };
    }

    return targetOrCategoryId ?? {};
}

function buildDoctolibBookingUrl(insuranceSector: AppointmentInsuranceSector, targetOrCategoryId?: AppointmentBookingTarget | string, selfPay = false) {
    const target = normalizeAppointmentTarget(targetOrCategoryId, selfPay);
    const isPublicSelfPay = insuranceSector === "public" && target.selfPay;
    const path = target.motiveId && !isPublicSelfPay ? "availabilities" : target.motiveCategoryId ? (isPublicSelfPay ? "error" : "motives") : "motive-categories";
    const params = new URLSearchParams({
        specialityId: "1302",
        telehealth: "false",
        placeId: "practice-612560",
        insuranceSectorEnabled: "true",
        insuranceSector,
        isNewPatient: "true",
        isNewPatientBlocked: "false",
        new_patient: "true",
        pid: "practice-612560",
        insurance_sector: insuranceSector,
        source: "profile",
    });

    params.append("speciality_ids[]", "1302");

    if (target.motiveCategoryId) {
        params.append("visit_motive_category_ids[]", target.motiveCategoryId);
    }

    if (target.motiveId) {
        params.append("motiveIds[]", target.motiveId);
    }

    return `${doctolibBookingBaseUrl}/${path}?${params.toString()}`;
}

function buildAppointmentUrls(targetOrCategoryId?: AppointmentBookingTarget | string, selfPay = false): AppointmentBookingUrls {
    return {
        private: buildDoctolibBookingUrl("private", targetOrCategoryId, selfPay),
        public: buildDoctolibBookingUrl("public", targetOrCategoryId, selfPay),
    };
}

const appointmentCategoryIds = {
    consultation: "364966",
    checkups: "364967",
    ironInfusion: "518414",
    weightLossInjection: "406205",
    nutrition: "406201",
    prp: "554440",
    hairTherapy: "554441",
    microneedling: "554442",
    botulinumtoxin: "384956",
    skinbooster: "554443",
    polynucleotides: "554449",
    micronutrients: "554454",
} as const;

const appointmentMotiveIds = {
    prpFace: "16017756",
    prpUnderEye: "16017762",
    prpFaceNeck: "16017763",
    prpFaceNeckDecollete: "16017764",
    vampireLifting: "16017755",
    hairMicroneedling: "16017765",
    hairPrp: "16017766",
    hairPolynucleotides: "16017776",
    microneedlingVampirelift: "16017774",
    microneedlingFace: "16017767",
    microneedlingFaceNeck: "16017768",
    microneedlingFaceNeckDecollete: "16017769",
    microneedlingFaceNctf: "16017773",
    microneedlingFaceExosomes: "16017771",
    botulinumtoxinConsultation: "",
    botulinumtoxinFrownLines: "",
    botulinumtoxinForehead: "",
    botulinumtoxinBrowLift: "",
    botulinumtoxinCrowsFeet: "",
    botulinumtoxinBunnyLines: "",
    botulinumtoxinGummySmile: "",
    botulinumtoxinLipFlip: "",
    botulinumtoxinMouthCorners: "",
    botulinumtoxinTwoZones: "",
    botulinumtoxinThreeZones: "",
    botulinumtoxinFourZones: "",
    botulinumtoxinChin: "",
    botulinumtoxinPlatysma: "",
    botulinumtoxinBruxism: "",
    botulinumtoxinTrapezius: "",
    botulinumtoxinHyperhidrosis: "",
    botulinumtoxinMigraine: "",
    skinboosterNctfFace: "16017777",
    skinboosterNctfFaceNeck: "16017778",
    skinboosterNctfFaceNeckDecollete: "16017779",
    skinboosterPhilartFace: "",
    skinboosterPhilartEye: "",
    skinboosterProfhilo: "16017780",
    ironInfusion: "15427609",
    checkup35: "12702791",
    checkup18To34: "12702801",
    weightLossInjection: "13607485",
    nutritionInitial15: "13607443",
    nutrition30: "14004730",
    micronutrientsConsultation: "16017787",
    polynucleotidesConsultation: "",
} as const;

export const Constants = {
    appName: "Praxis Jona",
    baseUrl: "https://praxisjona.de",
    downloadUrl: "/kontakt",
    keywords: ["praxis jona", "berlin praxis", "jona praxis"],
    umamiId: "cc9a5b16-c893-492f-af55-e6b79a844358",
    dataDomain: "praxisjona.de",
    address: "Torstraße 125\n10119, Berlin",
    appointmentUrl: doctolibProfileUrl,
    appointmentUrls: buildAppointmentUrls(),
    appointmentCategoryIds,
    appointmentMotiveIds,
    appointmentUrlsByService: {
        consultation: buildAppointmentUrls(appointmentCategoryIds.consultation),
        checkups: buildAppointmentUrls(appointmentCategoryIds.checkups),
        checkup35: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.checkups, motiveId: appointmentMotiveIds.checkup35 }),
        checkup18To34: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.checkups, motiveId: appointmentMotiveIds.checkup18To34 }),
        ironInfusion: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.ironInfusion, motiveId: appointmentMotiveIds.ironInfusion, selfPay: true }),
        weightLossInjection: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.weightLossInjection, motiveId: appointmentMotiveIds.weightLossInjection, selfPay: true }),
        nutrition: buildAppointmentUrls(appointmentCategoryIds.nutrition, true),
        nutritionInitial15: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.nutrition, motiveId: appointmentMotiveIds.nutritionInitial15, selfPay: true }),
        nutrition30: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.nutrition, motiveId: appointmentMotiveIds.nutrition30, selfPay: true }),
        prp: buildAppointmentUrls(appointmentCategoryIds.prp, true),
        prpFace: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.prp, motiveId: appointmentMotiveIds.prpFace, selfPay: true }),
        prpUnderEye: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.prp, motiveId: appointmentMotiveIds.prpUnderEye, selfPay: true }),
        prpFaceNeck: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.prp, motiveId: appointmentMotiveIds.prpFaceNeck, selfPay: true }),
        prpFaceNeckDecollete: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.prp, motiveId: appointmentMotiveIds.prpFaceNeckDecollete, selfPay: true }),
        vampireLifting: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.prp, motiveId: appointmentMotiveIds.vampireLifting, selfPay: true }),
        hairTherapy: buildAppointmentUrls(appointmentCategoryIds.hairTherapy, true),
        hairMicroneedling: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.hairTherapy, motiveId: appointmentMotiveIds.hairMicroneedling, selfPay: true }),
        hairPrp: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.hairTherapy, motiveId: appointmentMotiveIds.hairPrp, selfPay: true }),
        hairPolynucleotides: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.hairTherapy, motiveId: appointmentMotiveIds.hairPolynucleotides, selfPay: true }),
        microneedling: buildAppointmentUrls(appointmentCategoryIds.microneedling, true),
        microneedlingVampirelift: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.microneedling, motiveId: appointmentMotiveIds.microneedlingVampirelift, selfPay: true }),
        microneedlingFace: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.microneedling, motiveId: appointmentMotiveIds.microneedlingFace, selfPay: true }),
        microneedlingFaceNeck: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.microneedling, motiveId: appointmentMotiveIds.microneedlingFaceNeck, selfPay: true }),
        microneedlingFaceNeckDecollete: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.microneedling, motiveId: appointmentMotiveIds.microneedlingFaceNeckDecollete, selfPay: true }),
        microneedlingFaceNctf: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.microneedling, motiveId: appointmentMotiveIds.microneedlingFaceNctf, selfPay: true }),
        microneedlingFaceExosomes: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.microneedling, motiveId: appointmentMotiveIds.microneedlingFaceExosomes, selfPay: true }),
        botulinumtoxin: buildAppointmentUrls(appointmentCategoryIds.botulinumtoxin, true),
        botulinumtoxinConsultation: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinConsultation, selfPay: true }),
        botulinumtoxinFrownLines: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinFrownLines, selfPay: true }),
        botulinumtoxinForehead: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinForehead, selfPay: true }),
        botulinumtoxinBrowLift: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinBrowLift, selfPay: true }),
        botulinumtoxinCrowsFeet: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinCrowsFeet, selfPay: true }),
        botulinumtoxinBunnyLines: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinBunnyLines, selfPay: true }),
        botulinumtoxinGummySmile: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinGummySmile, selfPay: true }),
        botulinumtoxinLipFlip: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinLipFlip, selfPay: true }),
        botulinumtoxinMouthCorners: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinMouthCorners, selfPay: true }),
        botulinumtoxinTwoZones: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinTwoZones, selfPay: true }),
        botulinumtoxinThreeZones: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinThreeZones, selfPay: true }),
        botulinumtoxinFourZones: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinFourZones, selfPay: true }),
        botulinumtoxinChin: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinChin, selfPay: true }),
        botulinumtoxinPlatysma: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinPlatysma, selfPay: true }),
        botulinumtoxinBruxism: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinBruxism, selfPay: true }),
        botulinumtoxinTrapezius: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinTrapezius, selfPay: true }),
        botulinumtoxinHyperhidrosis: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinHyperhidrosis, selfPay: true }),
        botulinumtoxinMigraine: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.botulinumtoxin, motiveId: appointmentMotiveIds.botulinumtoxinMigraine, selfPay: true }),
        skinbooster: buildAppointmentUrls(appointmentCategoryIds.skinbooster, true),
        skinboosterNctfFace: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.skinbooster, motiveId: appointmentMotiveIds.skinboosterNctfFace, selfPay: true }),
        skinboosterNctfFaceNeck: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.skinbooster, motiveId: appointmentMotiveIds.skinboosterNctfFaceNeck, selfPay: true }),
        skinboosterNctfFaceNeckDecollete: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.skinbooster, motiveId: appointmentMotiveIds.skinboosterNctfFaceNeckDecollete, selfPay: true }),
        skinboosterPhilartFace: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.skinbooster, motiveId: appointmentMotiveIds.skinboosterPhilartFace, selfPay: true }),
        skinboosterPhilartEye: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.skinbooster, motiveId: appointmentMotiveIds.skinboosterPhilartEye, selfPay: true }),
        skinboosterProfhilo: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.skinbooster, motiveId: appointmentMotiveIds.skinboosterProfhilo, selfPay: true }),
        polynucleotides: buildAppointmentUrls(appointmentCategoryIds.polynucleotides, true),
        polynucleotidesConsultation: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.polynucleotides, motiveId: appointmentMotiveIds.polynucleotidesConsultation, selfPay: true }),
        micronutrients: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.micronutrients, motiveId: appointmentMotiveIds.micronutrientsConsultation, selfPay: true }),
    },
    contact: {
        phone: "+49 30 40054273",
        phoneUrl: "tel:+493040054273",
        fax: "030 / 40054275",
        email: "info@praxisjona.de",
        emailUrl: "mailto:info@praxisjona.de",
        googleMapsUrl: "https://maps.app.goo.gl/2gL1xkWUpRKRcajK8",
        appleMapsUrl: "https://maps.apple.com/?address=Torstra%C3%9Fe%20125,%20Mitte,%2010119%20Berlin,%20Germany&auid=5736151680530482814&ll=52.529748,13.400656&lsp=9902&q=Praxis%20Jona"
    },
    appointmentHoursNote: {
        de: "Termine nach Vereinbarung: Spezielle Leistungen wie Eiseninfusionen, ästhetische Behandlungen und individuelle Beratungstermine bieten wir nach vorheriger Terminvereinbarung auch außerhalb unserer regulären Öffnungszeiten an.",
        en: "Appointments by arrangement: Special services such as iron infusions, aesthetic treatments, and individual consultations are also available outside our regular opening hours by prior appointment.",
    },
    upcomingOpeningHours: [
        { day: "Montag", dayEn: "Monday", periods: [{ opens: "08:00", closes: "12:30" }, { opens: "15:00", closes: "18:00" }] },
        { day: "Dienstag", dayEn: "Tuesday", periods: [{ opens: "08:00", closes: "14:30" }] },
        { day: "Mittwoch", dayEn: "Wednesday", periods: [{ opens: "12:00", closes: "18:00" }] },
        { day: "Donnerstag", dayEn: "Thursday", periods: [{ opens: "08:00", closes: "12:30" }] },
        { day: "Freitag", dayEn: "Friday", periods: [{ opens: "08:00", closes: "12:30" }] },
    ],
    openingHours: [
        { day: 'Montag', dayEn: "Monday", hours: '08:30 - 12:30 <br> 15:00 - 18:00' },
        { day: 'Dienstag', dayEn: "Tuesday", hours: '08:30 - 14:30' },
        { day: 'Mittwoch', dayEn: "Wednesday", hours: '08:30 - 12:30' },
        { day: 'Donnerstag', dayEn: "Thursday", hours: '12:00 - 17:00' },
        { day: 'Freitag', dayEn: "Friday", hours: '08:30 - 12:30' },
        { day: 'Samstag', dayEn: "Saturday", hours: 'Geschlossen' },
        { day: 'Sonntag', dayEn: "Sunday", hours: 'Geschlossen' },
    ]
}

export function upcomingOpeningHoursText(locale: "de" | "en", separator = "\n") {
    return Constants.upcomingOpeningHours.map((item) =>
        `${locale === "de" ? item.day : item.dayEn}: ${item.periods.map((period) => `${period.opens}–${period.closes}`).join(locale === "de" ? " und " : " and ")}`
    ).join(separator);
}

export const NewsMessages = {
    de: [
        {
            title: "Aktuelles aus unserer Praxis",
            message: `Liebe Patientinnen und Patienten,
zum Jahreswechsel stehen einige Veränderungen in unserer Praxis an, über die wir Sie gerne informieren möchten.

<strong>Abschied und Neuzugang in unserem Ärzteteam</strong>
Zum 31. Dezember 2026 verabschieden wir unsere geschätzte Kollegin Frau Constanze Buhrmann in den wohlverdienten Ruhestand.
Wir bedanken uns herzlich für die gemeinsame Zeit, ihr Engagement und die liebevolle Betreuung unserer Patientinnen und Patienten. Für ihren neuen Lebensabschnitt wünschen wir ihr von Herzen alles Gute!

Gleichzeitig freuen wir uns, ab Januar 2027 Frau Dr. Daria Shabas, Fachärztin für Innere Medizin, als neue Kollegin in unserem Praxisteam begrüßen zu dürfen.
Wir heißen sie herzlich willkommen und freuen uns auf die gemeinsame Zusammenarbeit!

<strong>Geänderte Sprechzeiten ab Januar 2027</strong>
Ab dem 4. Januar 2027 passen wir unsere Sprechzeiten an.
${upcomingOpeningHoursText("de")}

${Constants.appointmentHoursNote.de}
Unsere Akutsprechstunde findet weiterhin in den ersten 90 Minuten nach Praxisöffnung statt. Hier können Sie sich bei akuten Beschwerden ohne vorherige Terminvereinbarung vorstellen.
Alle weiteren Abläufe bleiben unverändert.

<strong>Weihnachtsschließzeit</strong>
Unsere Praxis bleibt vom 21. Dezember 2026 bis einschließlich 3. Januar 2027 geschlossen.
Ab Montag, dem 4. Januar 2027, sind wir wieder wie gewohnt für Sie da.
Wir wünschen Ihnen und Ihren Familien eine schöne Weihnachtszeit, erholsame Feiertage und einen gesunden Start ins neue Jahr!
Ihr Praxisteam der Praxis Jona`,
        },
    ],
    en: [
        {
            title: "News from our practice",
            message: `Dear patients,
As the year draws to a close, we would like to inform you about some upcoming changes at our practice.

<strong>Farewell and a new addition to our medical team</strong>
On 31 December 2026, our valued colleague Ms Constanze Buhrmann will begin her well-deserved retirement.
We warmly thank her for our time together, her dedication, and the care she has given our patients. We wish her all the best for this new chapter!

We are also delighted to welcome Dr Daria Shabas, a specialist in internal medicine, to our practice team in January 2027.
We extend a warm welcome and look forward to working together!

<strong>New consultation hours from January 2027</strong>
Our consultation hours will change from 4 January 2027.
${upcomingOpeningHoursText("en")}

${Constants.appointmentHoursNote.en}
Our acute consultation continues to take place during the first 90 minutes after the practice opens. Patients with acute symptoms can attend without a prior appointment.
All other procedures remain unchanged.

<strong>Christmas closure</strong>
Our practice will be closed from 21 December 2026 through 3 January 2027 inclusive.
We will be back for you on Monday, 4 January 2027.
We wish you and your families a wonderful Christmas, restful holidays, and a healthy start to the new year!
Your Praxis Jona team`,
        },
    ]
}
