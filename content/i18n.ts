export type Lang = 'en' | 'de';
export const LANGS: Lang[] = ['en', 'de'];
const I18N = {
    en: {
      nav: { home: 'Home', work: 'Work', about: 'About', skills: 'Skills', experience: 'Experience', contact: 'Contact' },
      about: { label: 'About', title: 'Designer, builder, newcomer.',
        story: [
          'I’m Hamidreza — a product and UX/UI designer with an industrial-design degree and eight years in startups: fintech, ride-sharing, digital wallets and secure messaging. I usually was the only designer in the room, so I learned to run the whole loop — research, flows, UI, design system, hand-off.',
          'In 2022 my wife and I moved from Tehran to Germany. I reached B2 German, kept designing on the side, and started building what I design: a live booking website that I run today, and a Persian–German vocabulary app because no other app supported our language.',
          'I care about calm interfaces, honest copy and systems that make teams faster. Now I’m looking for a product design role in Germany where I can do that full-time again.'
        ],
        facts: [ { k: 'Based in', v: 'Schwetzingen, near Heidelberg' }, { k: 'Experience', v: '8+ years · 6 products' }, { k: 'Languages', v: 'Persian · English · German B2' }, { k: 'Education', v: 'B.Sc. Industrial Design' } ],
        beyondLabel: 'Beyond work', beyondTitle: 'What fills the rest of the day.', beyondSub: 'Building things with AI, learning German one card at a time, and a long-standing love for form — from 3D visualisation to bread.',
        beyond: [
          { bg: '#E9E7E2', img: 'photo: Leitner app on the kitchen table', h: 'Learning German, systematically', p: 'Our own Leitner box — AI writes the card backs, we do the repetitions. Phase 2 is on the roadmap.' },
          { bg: '#E4E9F1', img: '3D visualisation', h: 'Form and 3D', p: 'Industrial-design roots: Rhino, 3ds Max and V-Ray still come out for product visualisation and the occasional side project.', src: '/work/3d-desktop.jpg' },
          { bg: '#F3E6DE', img: 'photo: bakery counter', h: 'People, in person', p: 'Working the counter at a bakery taught me more about real-world service design than any workshop.' }
        ] },
      hero: {
        status: 'Open to Product / UX-UI roles in Germany',
        tagline: 'Designing everyday experiences with empathy.',
        intro: 'Product & UX/UI designer with 8+ years across fintech, mobility and messaging startups — plus a branding background. I lead from research to design system, and I build with code and AI when it gets the product shipped.',
        ctaWork: 'Selected work', ctaCv: 'Get in touch',
        marquee: 'UX Research · UI Design · Design Systems · Branding · Prototyping · Next.js & AI-assisted build · Figma · ProtoPie · Schwetzingen, DE ·'
      },
      workIndex: { label: 'Work', title: 'All projects, one page.', sub: 'Nine projects across fintech, mobility, messaging, travel and brand — apps, platforms and identities, 2013 to today.' },
      work: { label: 'Selected work', hint: 'Scroll', all: 'All work', title: 'Nine projects — from 1M-user fintech to a live site I run today.', sub: 'Apps, platforms and brands designed end-to-end — often as the only designer in the room.', view: 'View case' },
      skills: { label: 'Skills', title: 'Strategy to pixels — and a bit of code.', sub: 'A multidisciplinary toolkit: research and UX, interface and systems, brand, 3D visualisation and enough front-end to prototype the real thing.',
        groups: [
          { name: 'UX & Research', items: 'User research · User flows · Wireframing · Prototyping · Usability testing · Information architecture' },
          { name: 'UI & Systems', items: 'Design systems · App design (iOS/Android) · Responsive web · Interaction & motion · Accessibility basics' },
          { name: 'Brand & Visual', items: 'Corporate design · Logo · Social media · Marketing · 3D (Rhino, 3ds Max, V-Ray, SketchUp)' },
          { name: 'Tools & Code', items: 'Figma · Sketch · ProtoPie · Adobe CC · HTML/CSS/JS · React & Next.js · AI-assisted workflows · Jira · Miro' }
        ] },
      exp: { label: 'Experience', title: 'Eight years, six products, two countries.', sub: 'From Tehran startups to Germany: I moved here in 2022, reached B2 German, and kept designing and building on the side while working in retail.',
        edu: [ { y: '2005–10', t: 'B.Sc. Industrial Design — IAU University of Art & Architecture, Tehran (1.75)' }, { y: '2020–24', t: 'Google UX Design Professional · React (HKU) · HTML/CSS/JS (Johns Hopkins) · ProtoPie 101' }, { y: '2024', t: 'Telc Deutsch B2 Beruf' } ],
        jobs: [
          { when: '2025 – now', role: 'Salesperson (interim)', org: 'Bäckerei Denss BioMarkt, Germany', desc: 'Customer-facing role while job-searching in design. Built and maintain marefatpilgrimage.com and the Leitner app on the side.' },
          { when: '2022 – 2024', role: 'Further education & self-study', org: 'Germany', desc: 'German A2 → B2, AI fundamentals for design, expanded tooling. Part-time at Illa Solution.' },
          { when: '2022', role: 'UX/UI Designer & Design Lead', org: 'Palphone, Australia (remote)', desc: 'Led the design team for a secure conversational app on iOS & Android — new features, optimised navigation, strategic planning.' },
          { when: '2020 – 2022', role: 'Freelance UX/UI & Brand Consultant', org: 'Semedco · TGA Tour & Travel · Aria Travel Point', desc: 'UX for a stock-analysis platform; branding and corporate design for travel companies.' },
          { when: '2018 – 2020', role: 'UX/UI & Graphic Designer', org: 'Phonepay, Iran', desc: 'Digital wallet app — product design and visual brand strategy. Increased engagement and visual consistency.' },
          { when: '2016 – 2018', role: 'UX/UI Designer', org: 'Carpino, Iran', desc: 'Ride-sharing driver and passenger apps with real-time tracking.' },
          { when: '2015 – 2016', role: 'UX/UI Designer', org: 'FanavaCard ePayment, Iran', desc: 'Mobile payment app with 1M+ users — iOS & Android. Faster onboarding, lower drop-off.' }
        ] },
      contact: { label: 'Contact', title: 'Let’s connect.', sub: 'Looking for a product designer who also ships? I’m open to roles in Germany — on-site or remote.', cta: 'Get in touch', resume: 'Resume', credit: 'Designed & built by me' },
      detail: { back: 'All work', next: 'Next project', role: 'Role', year: 'Year', platform: 'Platform', scope: 'Scope' }
    },
    de: {
      nav: { home: 'Start', work: 'Arbeiten', about: 'Über mich', skills: 'Skills', experience: 'Erfahrung', contact: 'Kontakt' },
      about: { label: 'Über mich', title: 'Designer, Builder, Neuankömmling.',
        story: [
          'Ich bin Hamidreza – Product- und UX/UI-Designer mit Industriedesign-Abschluss und acht Jahren in Startups: Fintech, Ride-Sharing, digitale Wallets und sichere Messenger. Meist war ich der einzige Designer im Raum und habe gelernt, den ganzen Loop zu fahren – Research, Flows, UI, Designsystem, Übergabe.',
          '2022 sind meine Frau und ich von Teheran nach Deutschland gezogen. Ich habe B2 erreicht, nebenbei weiter gestaltet und angefangen, zu bauen, was ich entwerfe: eine Live-Buchungswebsite, die ich heute betreibe, und eine Persisch–Deutsch Vokabel-App, weil keine andere unsere Sprache unterstützt.',
          'Mir liegen ruhige Interfaces, ehrliche Texte und Systeme am Herzen, die Teams schneller machen. Jetzt suche ich eine Product-Design-Rolle in Deutschland, um genau das wieder in Vollzeit zu tun.'
        ],
        facts: [ { k: 'Wohnort', v: 'Schwetzingen, bei Heidelberg' }, { k: 'Erfahrung', v: '8+ Jahre · 6 Produkte' }, { k: 'Sprachen', v: 'Persisch · Englisch · Deutsch B2' }, { k: 'Ausbildung', v: 'B.Sc. Industriedesign' } ],
        beyondLabel: 'Neben der Arbeit', beyondTitle: 'Was den Rest des Tages füllt.', beyondSub: 'Dinge mit KI bauen, Deutsch Karte für Karte lernen – und eine alte Liebe zur Form, von 3D-Visualisierung bis Brot.',
        beyond: [
          { bg: '#E9E7E2', img: 'Foto: Leitner-App auf dem Küchentisch', h: 'Deutsch lernen, systematisch', p: 'Unser eigener Leitner-Kasten – die KI schreibt die Rückseiten, wir machen die Wiederholungen. Phase 2 steht auf der Roadmap.' },
          { bg: '#E4E9F1', img: '3D-Visualisierung', h: 'Form und 3D', p: 'Industriedesign-Wurzeln: Rhino, 3ds Max und V-Ray kommen für Produktvisualisierung und Nebenprojekte noch regelmäßig zum Einsatz.', src: '/work/3d-desktop.jpg' },
          { bg: '#F3E6DE', img: 'Foto: Bäckereitheke', h: 'Menschen, persönlich', p: 'Die Arbeit an der Bäckereitheke hat mir mehr über echtes Service-Design beigebracht als jeder Workshop.' }
        ] },
      hero: {
        status: 'Offen für Product / UX-UI Rollen in Deutschland',
        tagline: 'Alltagserlebnisse mit Empathie gestalten.',
        intro: 'Product & UX/UI Designer mit 8+ Jahren Erfahrung in Fintech-, Mobilitäts- und Messaging-Startups — plus Branding-Hintergrund. Ich führe von der Research bis zum Designsystem und baue mit Code und KI, wenn es das Produkt schneller live bringt.',
        ctaWork: 'Ausgewählte Arbeiten', ctaCv: 'Kontakt aufnehmen',
        marquee: 'UX Research · UI Design · Designsysteme · Branding · Prototyping · Next.js & KI-gestützter Build · Figma · ProtoPie · Schwetzingen, DE ·'
      },
      workIndex: { label: 'Arbeiten', title: 'Alle Projekte, eine Seite.', sub: 'Neun Projekte aus Fintech, Mobilität, Messaging, Reise und Marke – Apps, Plattformen und Identitäten, 2013 bis heute.' },
      work: { label: 'Ausgewählte Arbeiten', hint: 'Scrollen', all: 'Alle Arbeiten', title: 'Neun Projekte – von Fintech mit 1 Mio. Nutzern bis zu einer Website, die ich heute betreibe.', sub: 'Apps, Plattformen und Marken – End-to-End gestaltet, oft als einziger Designer im Team.', view: 'Case ansehen' },
      skills: { label: 'Skills', title: 'Von Strategie bis Pixel – und etwas Code.', sub: 'Ein multidisziplinäres Toolkit: Research und UX, Interface und Systeme, Brand, 3D-Visualisierung und genug Frontend, um das Echte zu prototypen.',
        groups: [
          { name: 'UX & Research', items: 'User Research · User Flows · Wireframing · Prototyping · Usability-Tests · Informationsarchitektur' },
          { name: 'UI & Systeme', items: 'Designsysteme · App-Design (iOS/Android) · Responsives Web · Interaktion & Motion · Accessibility-Basics' },
          { name: 'Brand & Visual', items: 'Corporate Design · Logo · Social Media · Marketing · 3D (Rhino, 3ds Max, V-Ray, SketchUp)' },
          { name: 'Tools & Code', items: 'Figma · Sketch · ProtoPie · Adobe CC · HTML/CSS/JS · React & Next.js · KI-gestützte Workflows · Jira · Miro' }
        ] },
      exp: { label: 'Erfahrung', title: 'Acht Jahre, sechs Produkte, zwei Länder.', sub: 'Von Teheraner Startups nach Deutschland: 2022 hierher gezogen, B2 erreicht und neben dem Job im Einzelhandel weiter gestaltet und gebaut.',
        edu: [ { y: '2005–10', t: 'B.Sc. Industrial Design — IAU University of Art & Architecture, Teheran (1,75)' }, { y: '2020–24', t: 'Google UX Design Professional · React (HKU) · HTML/CSS/JS (Johns Hopkins) · ProtoPie 101' }, { y: '2024', t: 'Telc Deutsch B2 Beruf' } ],
        jobs: [
          { when: '2025 – heute', role: 'Verkäufer (Übergang)', org: 'Bäckerei Denss BioMarkt', desc: 'Kundenkontakt während der Jobsuche im Design. Nebenbei marefatpilgrimage.com und die Leitner-App gebaut und betreut.' },
          { when: '2022 – 2024', role: 'Weiterbildung & Selbststudium', org: 'Deutschland', desc: 'Deutsch A2 → B2, KI-Grundlagen für Design, erweiterte Tools. Teilzeit bei Illa Solution.' },
          { when: '2022', role: 'UX/UI Designer & Design Lead', org: 'Palphone, Australien (remote)', desc: 'Leitung des Designteams für eine sichere Messaging-App auf iOS & Android – neue Features, optimierte Navigation, strategische Planung.' },
          { when: '2020 – 2022', role: 'Freelance UX/UI & Brand Consultant', org: 'Semedco · TGA Tour & Travel · Aria Travel Point', desc: 'UX für eine Aktienanalyse-Plattform; Branding und Corporate Design für Reiseunternehmen.' },
          { when: '2018 – 2020', role: 'UX/UI & Grafikdesigner', org: 'Phonepay, Iran', desc: 'Digitale Wallet-App – Produktdesign und visuelle Markenstrategie. Mehr Engagement, konsistenteres Erscheinungsbild.' },
          { when: '2016 – 2018', role: 'UX/UI Designer', org: 'Carpino, Iran', desc: 'Ride-Sharing-Apps für Fahrer und Fahrgäste mit Echtzeit-Tracking.' },
          { when: '2015 – 2016', role: 'UX/UI Designer', org: 'FanavaCard ePayment, Iran', desc: 'Mobile-Payment-App mit 1 Mio.+ Nutzern – iOS & Android. Schnelleres Onboarding, weniger Abbrüche.' }
        ] },
      contact: { label: 'Kontakt', title: 'Lassen Sie uns sprechen.', sub: 'Sie suchen einen Product Designer, der auch liefert? Ich bin offen für Rollen in Deutschland – vor Ort oder remote.', cta: 'Kontakt aufnehmen', resume: 'Lebenslauf', credit: 'Gestaltet & gebaut von mir' },
      detail: { back: 'Alle Arbeiten', next: 'Nächstes Projekt', role: 'Rolle', year: 'Jahr', platform: 'Plattform', scope: 'Umfang' }
    }
} as const;
export type Dict = typeof I18N['en'];
export function t(lang: Lang): Dict { return I18N[lang] as unknown as Dict; }
export const STATEMENT: Record<Lang, [string, 0 | 1][]> = {
    en: [["I'm Hamidreza",1],[" — a ",0],["product & UX/UI designer",1],[" from Tehran, now in Germany, with ",0],["8+ years",1],[" in fintech, mobility and messaging startups. I go from ",0],["research to design system",1],[" — and build with ",0],["code and AI",1],[" to get products shipped.",0]],
    de: [["Ich bin Hamidreza",1],[" — ",0],["Product & UX/UI Designer",1],[" aus Teheran, heute in Deutschland, mit ",0],["8+ Jahren",1],[" in Fintech-, Mobilitäts- und Messaging-Startups. Von der ",0],["Research bis zum Designsystem",1],[" — und ich baue mit ",0],["Code und KI",1],[", damit Produkte live gehen.",0]]
};
export const INTRO_NAME = 'hamidreza haji';
