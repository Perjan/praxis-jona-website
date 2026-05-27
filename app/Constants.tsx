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
    ironInfusion: "518414",
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
    skinboosterNctfFace: "",
    skinboosterNctfFaceNeck: "",
    skinboosterNctfFaceNeckDecollete: "",
    skinboosterPhilartFace: "",
    skinboosterPhilartEye: "",
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
        ironInfusion: buildAppointmentUrls(appointmentCategoryIds.ironInfusion, true),
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
        polynucleotides: buildAppointmentUrls(appointmentCategoryIds.polynucleotides, true),
        polynucleotidesConsultation: buildAppointmentUrls({ motiveCategoryId: appointmentCategoryIds.polynucleotides, motiveId: appointmentMotiveIds.polynucleotidesConsultation, selfPay: true }),
        micronutrients: buildAppointmentUrls(appointmentCategoryIds.micronutrients, true),
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

export const NewsMessages = {
    de: [
        
    ],
    en: [
        
    ]
}
