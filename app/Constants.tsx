export const Constants = {
    appName: "Praxis Jona",
    baseUrl: "https://praxisjona.de",
    downloadUrl: "/kontakt",
    keywords: ["praxis jona", "berlin praxis", "jona praxis"],
    umamiId: "cc9a5b16-c893-492f-af55-e6b79a844358",
    dataDomain: "praxisjona.de",
    address: "Torstraße 125\n10119, Berlin",
    appointmentUrl: "/termin-buchen",
    contact: {
        phone: "030 / 40054273",
        phoneUrl: "tel://+493040054273",
        fax: "030 / 40054275",
        email: "info@praxisjona.de",
        emailUrl: "mailto:info@praxisjona.de",
        googleMapsUrl: "https://maps.app.goo.gl/2gL1xkWUpRKRcajK8",
        appleMapsUrl: "https://maps.apple.com/?address=Torstra%C3%9Fe%20125,%20Mitte,%2010119%20Berlin,%20Germany&auid=5736151680530482814&ll=52.529748,13.400656&lsp=9902&q=Praxis%20Jona"

    },
    openingHours: [
        { day: 'Montag', dayEn: "Monday", hours: '08:00 - 12:00 <br> 15:00 - 18:00' },
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
        {
            title: "Wichtige Praxisinformation – Weihnachtsschließzeiten",
            message: "Liebe Patientinnen und Patienten,\n\nunsere Praxis bleibt vom 16. Dezember 2025 bis einschließlich 4. Januar 2026 geschlossen.\n\nDie Vertretungspraxis wird in Kürze bekannt gegeben.\n\nVielen Dank für Ihr Verständnis.\nIhr Praxisteam"
        }
    ],
    en: [
        {
            title: "Important Practice Information – Christmas Closing Times",
            message: "Dear patients,\n\nOur practice will be closed from December 16, 2025 to January 4, 2026, inclusive.\n\nThe substitute practice will be announced shortly.\n\nThank you for your understanding.\nYour practice team"
        }
    ]
}
