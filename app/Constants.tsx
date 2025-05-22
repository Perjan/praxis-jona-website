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
            title: "🚨 Achtung: Keine reguläre Sprechstunde am Donnerstag den 22.05. und Freitag den 23.05.2025",
            message: `
            Am Donnerstag und Freitag findet keine reguläre Sprechstunde in unserer Praxis statt.
            Sie können jedoch wie gewohnt Rezepte und Krankschreibungen während unserer Öffnungszeiten abholen.
            
            Für akute medizinische Notfälle wenden Sie sich bitte an die:
            
            Praxis Dr. Karsten Schwarz
            
            Auguststr. 1/Ecke Oranienburger Straße
            10117 Berlin – Mitte
            Telefon: 030 280 44 999
            
            -- Donnerstag: Akutsprechstunde von 13:00 bis 14:00 Uhr --
            -- Freitag: Akutsprechstunde von 08:00 bis 09:00 Uhr --
            `
        }
    ],
    en: [
        {
            title: "🚨 Attention: No regular consultation hours on Thursday, May 22nd and Friday, May 23rd, 2025",
            message: `
            On Thursday and Friday, there will be no regular consultation hours at our practice.
            You can however pick up prescriptions and sick notes as usual during our opening hours.
            
            For urgent medical needs, please contact:
            
            Praxis Dr. Karsten Schwarz
            
            Auguststr. 1/Ecke Oranienburger Straße
            10117 Berlin – Mitte
            Phone: 030 280 44 999
            
            -- Thursday: Emergency consultation from 13:00 to 14:00 --
            -- Friday: Emergency consultation from 08:00 to 09:00 --
            `
        }
    ]
}