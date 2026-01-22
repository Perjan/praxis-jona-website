export interface TeamMember {
    id: string;
    name: string;
    role: string;
    quote: string;
    description: string;
    extendedDescription: string;
    image: string;
}

export const TeamMembersDE: TeamMember[] = [
    {
        id: 'jonida',
        name: 'Dr. med. Jonida Gjolli',
        role: 'Ärztliche Leitung und moderne Präventionsmedizin',
        quote: 'Prävention liegt mir am Herzen, weil Gesundheit mehr ist als das Behandeln von Symptomen. Ich möchte frühzeitig, individuell und ganzheitlich begleiten – damit Krankheit idealerweise gar nicht erst entsteht.',
        description: 'Jonida arbeitete mehrere Jahre an der Charité Berlin in der nephrologischen Abteilung, wo sie auch Fachärztin für Innere Medizin wurde und ihre Promotion erfolgreich abschloss.',
        extendedDescription: 'Zudem ist sie zertifizierte Lipidologin, Hypertensiologin und bald auch Ernährungsmedizinerin. Zu ihren Schwerpunkten zählen Schilddrüsenerkrankungen, Hypertonie, Fettstoffwechselstörungen und Ernährungsmedizin. Vor ihrer Tätigkeit an der Charité arbeitete Jonida in der Medizinischen Klinik III des Waldkrankenhauses St. Marien in Erlangen. Sie ist Mitglied der Deutschen Gesellschaft für Innere Medizin (DGIM) und der DGFF (Lipid-Liga) e. V. Das Studium absolvierte sie in Tirana, Albanien.',
        image: '/images/team/jona-clinic.jpg'
    },
    {
        id: 'junia',
        name: 'Junia Keutel',
        role: 'Funktionelles Training und Bewegungsdiagnostik',
        quote: 'Gesundheit entsteht durch nachhaltige Routinen, die nicht nur effektiv, sondern auch alltagstauglich sind.',
        description: 'Junia Keutel ist Personaltrainerin und Ernährungsberaterin aus Berlin mit einem ganzheitlichen Ansatz für Gesundheit, Leistungsfähigkeit und langfristiges Wohlbefinden.',
        extendedDescription: 'Ihre Arbeit verbindet fundiertes Trainingswissen mit moderner Ernährungsberatung und einem tiefen Verständnis für individuelle Lebensrealitäten. Im Mittelpunkt ihrer Betreuung stehen nachhaltige Ergebnisse: mehr Energie im Alltag, ein belastbarer Körper und ein gesunder Umgang mit Ernährung – frei von Dogmen und kurzfristigen Lösungen. Junia begleitet ihre Klient:innen dabei, Routinen zu entwickeln, die nicht nur effektiv, sondern auch alltagstauglich sind.\n\nAls Personaltrainerin legt sie großen Wert auf saubere Bewegung, funktionelle Kraft und körperliche Resilienz. In der Ernährungsberatung verfolgt sie einen evidenzbasierten, genussorientierten Ansatz, der Gesundheit fördert, ohne Verzicht in den Vordergrund zu stellen.\n\nJunia Keutel steht für Klarheit, Qualität und eine ruhige, professionelle Begleitung auf dem Weg zu mehr körperlicher und mentaler Stärke – individuell, nachhaltig und auf Augenhöhe.\n\nQualifikationen:\n• Zertifizierte Personal Trainerin\n• Fitnesstrainerin B-Lizenz\n• Ernährungsberaterin B-Lizenz\n• Gesundheitstrainerin\n• Kursleiterin Fit durch die Schwangerschaft\n• Kursleiterin Senioren\n• Trainerin für präventives Rückentraining\n• Medizinische Fitnesstrainerin\n• Pilatestrainerin',
        image: '/images/team/junia-gym.jpeg'
    },
    {
        id: 'kathrin',
        name: 'Kathrin Schmidt',
        role: 'Psychologischer Schwerpunkt',
        quote: 'Veränderung beginnt dort, wo Menschen ihre eigenen Verhaltensmuster erkennen, verstehen und aus eigener Stärke heraus neue Wege entwickeln.',
        description: 'Kathrin Schmidt ist Psychologin (M.Sc.) mit dem Schwerpunkt Klinische Psychologie und arbeitet im Richtlinienverfahren der Systemischen Therapie. Ihr fachlicher Fokus liegt auf präventiver psychologischer Arbeit und der nachhaltigen Förderung mentaler Gesundheit auf Grundlage des bio-psycho-sozialen Modells.',
        extendedDescription: 'Nach ihrer Ausbildung zur Physiotherapeutin vertiefte sie ihr Interesse an ganzheitlichen Zusammenhängen durch das Studium der Medizin an der Charité sowie der Psychologie mit dem Schwerpunkt Klinische Psychologie. Ergänzend verfügt sie über fundierte Qualifikationen in wissenschaftlich anerkannten Stresspräventionsverfahren, darunter Progressive Muskelrelaxation nach Jacobson und multimodales Stressmanagement (Technische Universität München), sowie in systemischer Beratung (DGSF) und klinischer Hypnotherapie (M.E.G.).\n\nNeben ihrer klinisch-psychologischen Tätigkeit engagiert sich Kathrin Schmidt seit 2015 ehrenamtlich als Gründerin und Vorstandsvorsitzende des gemeinnützigen Vereins Hummelkind-Visite e.V., der Familien und Kinder in belastenden medizinischen Situationen unterstützt. Darüber hinaus ist sie Co-Autorin mehrerer Kinderbücher, die psychische und medizinische Diagnosen altersgerecht, verständlich und entlastend vermitteln.\n\nMitglied in Berufs- und Fachverbänden: BDP, DGSF, Hartmannbund, M.E.G., VFP, DPtV.\n\nIm Projekt „Gesund lang leben" bringt Kathrin Schmidt ihre klinisch-psychologische und präventive Expertise in die Entwicklung nachhaltiger Präventions- und Gesundheitskonzepte ein. Kathrin Schmidt begleitet diesen Prozess mit ihrer psychologischen Expertise - achtsam, ressourcenorientiert und unterstützend.',
        image: '/images/team/kathrin-office.jpeg'
    }
];

export const TeamMembersEN: TeamMember[] = [
    {
        id: 'jonida',
        name: 'Dr. med. Jonida Gjolli',
        role: 'Medical Director and Modern Preventive Medicine',
        quote: 'Prevention is close to my heart because health is more than treating symptoms. I want to provide early, individual and holistic support – so that illness ideally never develops in the first place.',
        description: 'Jonida worked for several years at Charité Berlin in the nephrology department, where she also became a specialist in internal medicine and successfully completed her doctorate.',
        extendedDescription: 'She is also a certified lipidologist, hypertensiologist and soon also a nutritional medicine specialist. Her areas of expertise include thyroid diseases, hypertension, lipid metabolism disorders and nutritional medicine. Before working at Charité, Jonida worked at the Medical Clinic III of Waldkrankenhaus St. Marien in Erlangen. She is a member of the German Society for Internal Medicine (DGIM) and the DGFF (Lipid League) e. V. She completed her studies in Tirana, Albania.',
        image: '/images/team/jona-clinic.jpg'
    },
    {
        id: 'junia',
        name: 'Junia Keutel',
        role: 'Functional Training and Movement Diagnostics',
        quote: 'Health is created through sustainable routines that are not only effective but also practical for everyday life.',
        description: 'Junia Keutel is a personal trainer and nutritional consultant from Berlin with a holistic approach to health, performance and long-term well-being.',
        extendedDescription: 'Her work combines well-founded training knowledge with modern nutritional counseling and a deep understanding of individual life realities. At the center of her care are sustainable results: more energy in everyday life, a resilient body and a healthy approach to nutrition - free from dogmas and short-term solutions. Junia accompanies her clients in developing routines that are not only effective but also practical for everyday life.\n\nAs a personal trainer, she places great emphasis on clean movement, functional strength and physical resilience. In nutritional counseling, she pursues an evidence-based, pleasure-oriented approach that promotes health without putting renunciation in the foreground.\n\nJunia Keutel stands for clarity, quality and calm, professional support on the path to greater physical and mental strength - individual, sustainable and at eye level.\n\nQualifications:\n• Certified Personal Trainer\n• Fitness Trainer B-License\n• Nutritional Consultant B-License\n• Health Trainer\n• Course Leader Fit Through Pregnancy\n• Course Leader Seniors\n• Trainer for Preventive Back Training\n• Medical Fitness Trainer\n• Pilates Trainer',
        image: '/images/team/junia-gym.jpeg'
    },
    {
        id: 'kathrin',
        name: 'Kathrin Schmidt',
        role: 'Psychological Focus',
        quote: 'Change begins where people recognize and understand their own behavioral patterns and develop new paths from their own strength.',
        description: 'Kathrin Schmidt is a psychologist (M.Sc.) specializing in clinical psychology and works in the systemic therapy guideline procedure. Her professional focus is on preventive psychological work and the sustainable promotion of mental health based on the bio-psycho-social model.',
        extendedDescription: 'After training as a physiotherapist, she deepened her interest in holistic connections by studying medicine at Charité and psychology with a focus on clinical psychology. In addition, she has well-founded qualifications in scientifically recognized stress prevention methods, including progressive muscle relaxation according to Jacobson and multimodal stress management (Technical University of Munich), as well as in systemic counseling (DGSF) and clinical hypnotherapy (M.E.G.).\n\nIn addition to her clinical psychological work, Kathrin Schmidt has been involved since 2015 as founder and chairwoman of the non-profit association Hummelkind-Visite e.V., which supports families and children in stressful medical situations. She is also co-author of several children\'s books that convey psychological and medical diagnoses in an age-appropriate, understandable and relieving way.\n\nMember of professional associations: BDP, DGSF, Hartmannbund, M.E.G., VFP, DPtV.\n\nIn the "Healthy Long Life" project, Kathrin Schmidt contributes her clinical psychological and preventive expertise to the development of sustainable prevention and health concepts. Kathrin Schmidt accompanies this process with her psychological expertise - mindful, resource-oriented and supportive.',
        image: '/images/team/kathrin-office.jpeg'
    }
];
