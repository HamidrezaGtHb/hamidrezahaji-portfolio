import type { Lang } from './i18n';
export type ProjectSection = { n: string; h: string; p: string; img?: string };
export type ProjectLocale = { title: string; tag: string; placeholder: string; hero: string; meta: [string, string][]; sections: ProjectSection[] };
export type ProjectImages = { hero?: string; card?: string; s?: string[] };
export type Project = { slug: string; bg: string; fg: string; bgSoft: string; year: string; img: ProjectImages; en: ProjectLocale; de: ProjectLocale };
/** Images live in /public/work/. */
export const IMG = '/work/';
export const PROJECTS: Project[] = [
 {
  slug: "palphone",
  bg: "#B8233F",
  fg: "#FBE9ED",
  bgSoft: "#F6E4E8",
  year: "2022",
  img: { hero: "palphone-collage.png", card: "palphone-collage.png", s: ["palphone-screen-waiting.jpg", "palphone-sketch.jpg", "palphone-sprint.png", "palphone-intro.png"] },
  en: {
   title: "Palphone",
   tag: "Anonymous voice-first conversations with real people — led design from strategy to shipped features.",
   placeholder: "app screens · iOS + Android",
   hero: "Palphone screens",
   meta: [
    [
     "Role",
     "UX/UI Designer · Lead"
    ],
    [
     "Timeline",
     "May – Oct 2022"
    ],
    [
     "Platform",
     "iOS · Android"
    ],
    [
     "Tools",
     "Figma · Sketch · Photoshop · Illustrator"
    ]
   ],
   sections: [
    {
     n: "01 · Context",
     h: "A platform that lets people talk anonymously with real humans — safely and privately.",
     p: "Palphone connects strangers for voice conversations without accounts or personal data. I joined as design lead, owning the UX/UI team, planning, and the brand identity.",
     img: "Waiting-for-partner screen"
    },
    {
     n: "02 · Challenge",
     h: "No sign-up, no personal data, voice before chat — and still feel effortless.",
     p: "The brief: a minimal, friendly app with no registration and no data capture, focused on speech rather than text. A research team already existed, so the design had to be built directly on their findings — plus a brand identity from scratch.",
     img: "Early sketches"
    },
    {
     n: "03 · Approach",
     h: "Find the shortest path from opening the app to being in a conversation.",
     p: "I produced several directions and ran brainstorming sessions with a small technical team. We chose the flow that asks the least of the user before connecting them; chat stayed, video and image sharing were deliberately excluded; a feedback loop flags and removes fake users. The work was planned in three sprints covering phase 1, logo and character design.",
     img: "Three-sprint plan"
    },
    {
     n: "04 · Outcome",
     h: "Positive feedback on intuitive usability — and a team that shipped faster.",
     p: "Leading brainstorming, working closely with a UX designer on the next version and with the front-end team on hand-off made the product calmer and the release smoother.",
     img: "Splash & onboarding"
    }
   ]
  },
  de: {
   title: "Palphone",
   tag: "Anonyme, sprachbasierte Gespräche mit echten Menschen – Design von der Strategie bis zum Release geleitet.",
   placeholder: "App-Screens · iOS + Android",
   hero: "Palphone-Screens",
   meta: [
    [
     "Rolle",
     "UX/UI Designer · Lead"
    ],
    [
     "Zeitraum",
     "Mai – Okt. 2022"
    ],
    [
     "Plattform",
     "iOS · Android"
    ],
    [
     "Tools",
     "Figma · Sketch · Photoshop · Illustrator"
    ]
   ],
   sections: [
    {
     n: "01 · Kontext",
     h: "Eine Plattform, die es ermöglicht, anonym mit echten Menschen zu sprechen – sicher und privat.",
     p: "Palphone verbindet Fremde zu Sprachgesprächen, ohne Konto und ohne persönliche Daten. Ich kam als Design Lead: Verantwortung für UX/UI-Team, Planung und Brand Identity.",
     img: "Warten-auf-Partner-Screen"
    },
    {
     n: "02 · Herausforderung",
     h: "Ohne Anmeldung, ohne Datenerfassung, Sprache vor Chat – und trotzdem mühelos.",
     p: "Die Aufgabe: eine minimalistische, benutzerfreundliche App ohne Registrierung, fokussiert auf sprachbasierte Kommunikation statt Chat. Ein Research-Team war vorhanden, das Design baute direkt auf dessen Ergebnissen auf – plus Entwicklung des Brand Identity Designs.",
     img: "Frühe Skizzen"
    },
    {
     n: "03 · Ansatz",
     h: "Den kürzesten Weg vom App-Start bis ins Gespräch finden.",
     p: "Ich erstellte mehrere Designs und führte Brainstorming-Sitzungen mit einem technischen Team. Entscheidung: der Flow, der vom Nutzer am wenigsten verlangt; Chat bleibt, Videoanrufe und Bildübertragung bewusst ausgeschlossen; Nutzer-Feedback identifiziert und entfernt unechte Profile. Geplant in drei Sprints: Phase 1, Logo, Charakterdesign.",
     img: "Drei-Sprint-Plan"
    },
    {
     n: "04 · Ergebnis",
     h: "Positives Feedback zu intuitiver Bedienung – und ein Team, das schneller liefert.",
     p: "Leitung der Brainstormings, enge Zusammenarbeit mit einem UX-Designer an der nächsten Version und mit dem Frontend-Team bei der Umsetzung machten das Produkt ruhiger und den Release reibungsloser.",
     img: "Splash & Onboarding"
    }
   ]
  }
 },
 {
  slug: "marefat",
  bg: "#4F6B3A",
  fg: "#EEF3E8",
  bgSoft: "#E9EEE3",
  year: "2025",
  img: {},
  en: {
   title: "Marefat Pilgrimage",
   tag: "Live booking website designed and built solo with AI — payments, services and 4 months of ongoing support.",
   placeholder: "website · desktop + mobile",
   hero: "hero: homepage on laptop + phone",
   meta: [
    [
     "Role",
     "Designer & Builder"
    ],
    [
     "Year",
     "2025"
    ],
    [
     "Platform",
     "Web · marefatpilgrimage.com"
    ],
    [
     "Scope",
     "UX · UI · Build · Payments · Support"
    ]
   ],
   sections: [
    {
     n: "01 · Context",
     h: "A pilgrimage travel service needed a site that actually takes bookings — not a brochure.",
     p: "I designed the brand, the site and the flows, then built it with AI-assisted development and integrated payment and service providers.",
     img: "sitemap + booking flow"
    },
    {
     n: "02 · Build",
     h: "Design system first, then components, then integrations.",
     p: "Tokens and components kept the AI-generated code consistent. Payment, forms and notifications are wired to third-party services; I run and maintain it since launch.",
     img: "design system + component set"
    },
    {
     n: "03 · Outcome",
     h: "Live and in use, supported for four months and counting.",
     p: "Real bookings flow through the site. The project proves I can take a product from concept to running production — and keep it running.",
     img: "live pages: home, packages, checkout"
    }
   ]
  },
  de: {
   title: "Marefat Pilgrimage",
   tag: "Live-Buchungswebsite – allein mit KI gestaltet und gebaut; Zahlungen, Services und 4 Monate laufender Support.",
   placeholder: "Website · Desktop + Mobil",
   hero: "Hero: Startseite auf Laptop + Phone",
   meta: [
    [
     "Rolle",
     "Designer & Builder"
    ],
    [
     "Jahr",
     "2025"
    ],
    [
     "Plattform",
     "Web · marefatpilgrimage.com"
    ],
    [
     "Umfang",
     "UX · UI · Build · Zahlungen · Support"
    ]
   ],
   sections: [
    {
     n: "01 · Kontext",
     h: "Ein Pilgerreise-Service brauchte eine Website, die wirklich Buchungen annimmt – keine Broschüre.",
     p: "Ich habe Marke, Website und Flows gestaltet und anschließend mit KI-gestützter Entwicklung gebaut, inklusive Zahlungs- und Service-Integrationen.",
     img: "Sitemap + Buchungsflow"
    },
    {
     n: "02 · Build",
     h: "Erst Designsystem, dann Komponenten, dann Integrationen.",
     p: "Tokens und Komponenten hielten den KI-generierten Code konsistent. Zahlung, Formulare und Benachrichtigungen laufen über Drittanbieter; ich betreibe und pflege die Seite seit dem Launch.",
     img: "Designsystem + Komponenten"
    },
    {
     n: "03 · Ergebnis",
     h: "Live und im Einsatz, seit vier Monaten betreut.",
     p: "Echte Buchungen laufen über die Seite. Das Projekt zeigt: Ich bringe ein Produkt vom Konzept in die Produktion – und halte es am Laufen.",
     img: "Live-Seiten: Home, Pakete, Checkout"
    }
   ]
  }
 },
 {
  slug: "leitner",
  bg: "#8C877E",
  fg: "#FBEFE8",
  bgSoft: "#F3E6DE",
  year: "2025",
  img: {},
  en: {
   title: "Leitner",
   tag: "Persian–German vocabulary app with AI-generated cards — built because no other app supports Persian.",
   placeholder: "app · phase 1 · flashcards",
   hero: "hero: card front/back on two phones",
   meta: [
    [
     "Role",
     "Concept · Design · Build"
    ],
    [
     "Year",
     "2025 · Phase 1"
    ],
    [
     "Platform",
     "Mobile web app"
    ],
    [
     "Scope",
     "Personal product"
    ]
   ],
   sections: [
    {
     n: "01 · Why",
     h: "My wife and I needed to learn German; every spaced-repetition app ignored Persian.",
     p: "So I built our own Leitner box. Type a German word, and AI writes the back of the card: translation, article, plural, example sentences — and suggests new words to learn.",
     img: "flow: add word → generated card"
    },
    {
     n: "02 · Design",
     h: "Zero-friction input, calm review sessions, bilingual typography that respects RTL.",
     p: "Phase 1 focuses on the daily review loop and card generation. Mixed Persian/German type and right-to-left layout were the main UI challenges.",
     img: "UI: review session, RTL/LTR type"
    },
    {
     n: "03 · Next",
     h: "Phase 2: audio, shared decks, and a proper design system.",
     p: "Currently in personal use. The next phase adds pronunciation, deck sharing and refinement of the visual system.",
     img: "roadmap sketch"
    }
   ]
  },
  de: {
   title: "Leitner",
   tag: "Persisch–Deutsch Vokabel-App mit KI-generierten Karten – gebaut, weil keine andere App Persisch unterstützt.",
   placeholder: "App · Phase 1 · Karteikarten",
   hero: "Hero: Karte vorne/hinten auf zwei Phones",
   meta: [
    [
     "Rolle",
     "Konzept · Design · Build"
    ],
    [
     "Jahr",
     "2025 · Phase 1"
    ],
    [
     "Plattform",
     "Mobile Web-App"
    ],
    [
     "Umfang",
     "Persönliches Produkt"
    ]
   ],
   sections: [
    {
     n: "01 · Warum",
     h: "Meine Frau und ich mussten Deutsch lernen; jede Spaced-Repetition-App ignorierte Persisch.",
     p: "Also baute ich unseren eigenen Leitner-Kasten. Ein deutsches Wort eingeben – die KI schreibt die Rückseite: Übersetzung, Artikel, Plural, Beispielsätze – und schlägt neue Wörter vor.",
     img: "Flow: Wort hinzufügen → generierte Karte"
    },
    {
     n: "02 · Design",
     h: "Reibungslose Eingabe, ruhige Lernsessions, zweisprachige Typografie mit RTL.",
     p: "Phase 1 konzentriert sich auf die tägliche Wiederholungsschleife und Kartengenerierung. Gemischte persisch/deutsche Schrift und Rechts-nach-links-Layout waren die UI-Herausforderungen.",
     img: "UI: Lernsession, RTL/LTR Schrift"
    },
    {
     n: "03 · Nächste Schritte",
     h: "Phase 2: Audio, geteilte Decks und ein richtiges Designsystem.",
     p: "Aktuell im privaten Einsatz. Die nächste Phase bringt Aussprache, Deck-Sharing und die Verfeinerung des visuellen Systems.",
     img: "Roadmap-Skizze"
    }
   ]
  }
 },
 {
  slug: "payman",
  bg: "#1E2F4A",
  fg: "#E6ECF5",
  bgSoft: "#E3E8F0",
  year: "2022",
  img: { hero: "payman-collage.png", card: "payman-collage.png", s: ["payman-home.jpg", "payman-services.jpg", "payman-chat.jpg", "payman-learning.jpg"] },
  en: {
   title: "Payman",
   tag: "A super-app for taxi and truck drivers — services, shop, customer club, news, learning and chat in one place.",
   placeholder: "app · driver super-app",
   hero: "Payman screens",
   meta: [
    [
     "Role",
     "Product Designer · Logo"
    ],
    [
     "Timeline",
     "Feb – May 2022"
    ],
    [
     "Platform",
     "iOS · Android"
    ],
    [
     "Tools",
     "Sketch · Adobe XD · Illustrator · Photoshop · Zeplin"
    ]
   ],
   sections: [
    {
     n: "01 · Context",
     h: "One app where drivers order services, buy parts for their car, learn about their job and earn certificates.",
     p: "Payman serves three very different groups — public taxi drivers, private drivers and truck drivers — with dozens of services. I owned product design and the new logo.",
     img: "Home"
    },
    {
     n: "02 · Challenge",
     h: "Improve a large service catalogue without redesigning everything.",
     p: "The brief was explicit: read and analyse the existing services, improve their UX components rather than rebuild them, and design the new areas — customer club, news, learning, chat.",
     img: "Services"
    },
    {
     n: "03 · Approach",
     h: "Fully design the new surfaces; systematically upgrade the existing ones.",
     p: "Home, customer club, chat and learning were designed end-to-end. For the service flows we refined shared components and added services that did not exist yet, planned for step-by-step production in later phases.",
     img: "Chat"
    },
    {
     n: "04 · Learnings",
     h: "Meeting the drivers was the best part.",
     p: "Getting to know the taxi-driver community gave me a much better understanding of their daily challenges in Iran — and it was my first project in Adobe XD.",
     img: "Learning"
    }
   ]
  },
  de: {
   title: "Payman",
   tag: "Eine Super-App für Taxi- und LKW-Fahrer – Dienstleistungen, Shop, Kundenclub, News, Lernen und Chat an einem Ort.",
   placeholder: "App · Fahrer-Super-App",
   hero: "Payman-Screens",
   meta: [
    [
     "Rolle",
     "Produktdesigner · Logodesign"
    ],
    [
     "Zeitraum",
     "Feb. – Mai 2022"
    ],
    [
     "Plattform",
     "iOS · Android"
    ],
    [
     "Tools",
     "Sketch · Adobe XD · Illustrator · Photoshop · Zeplin"
    ]
   ],
   sections: [
    {
     n: "01 · Kontext",
     h: "Eine App, in der Fahrer Dienstleistungen bestellen, Produkte fürs Auto kaufen, etwas über ihren Job lernen und Zertifikate bekommen.",
     p: "Payman bedient drei sehr unterschiedliche Gruppen – öffentliche und private Taxifahrer sowie LKW-Fahrer – mit vielen Services. Ich verantwortete Produktdesign und das neue Logo.",
     img: "Home"
    },
    {
     n: "02 · Herausforderung",
     h: "Einen großen Servicekatalog verbessern, ohne alles neu zu gestalten.",
     p: "Die Vorgabe war klar: die bestehenden Dienstleistungen lesen und analysieren, ihre UX-Komponenten verbessern statt komplett neu designen – und die neuen Bereiche gestalten: Kundenclub, News, Lernen, Chat.",
     img: "Dienstleistungen"
    },
    {
     n: "03 · Ansatz",
     h: "Neue Bereiche vollständig designen, bestehende systematisch aufwerten.",
     p: "Homepage, Kundenclub, Chat und Learning wurden voll gestaltet. Bei den Service-Flows haben wir gemeinsame Komponenten verbessert und fehlende Dienstleistungen neu designt – Schritt für Schritt für die Produktion in den nächsten Phasen.",
     img: "Chat"
    },
    {
     n: "04 · Learnings",
     h: "Die Begegnung mit den Fahrern war das Beste.",
     p: "Die Bekanntschaft mit der Taxifahrer-Gruppe hat mir große Freude bereitet; ich habe ihre Herausforderungen im Iran viel besser verstanden – und erstmals mit Adobe XD gearbeitet.",
     img: "Lernen"
    }
   ]
  }
 },
 {
  slug: "tabassom",
  bg: "#3B2E6B",
  fg: "#EEEAF6",
  bgSoft: "#ECE8F3",
  year: "2021",
  img: { hero: "tabassom-collage.png", card: "tabassom-collage.png", s: ["tabassom-home-light.jpg", "tabassom-home-dark.jpg", "tabassom-mobile-light.jpg", "tabassom-mobile-dark.jpg"] },
  en: {
   title: "Tabassom",
   tag: "Video-based trading education with certificates, for the PR & information arm of the Iranian stock exchange.",
   placeholder: "web platform · light + dark",
   hero: "Tabassom screens",
   meta: [
    [
     "Role",
     "UX/UI Designer (freelance)"
    ],
    [
     "Timeline",
     "Jun – Dec 2021"
    ],
    [
     "Platform",
     "Responsive web"
    ],
    [
     "Tools",
     "Sketch · Zeplin · Adobe CC"
    ]
   ],
   sections: [
    {
     n: "01 · Context",
     h: "A platform where people find trading videos, learn, and earn certificates.",
     p: "Commissioned by the public-relations and information company of the Iranian securities authority, the platform simplifies video-based fundamental analysis so users understand complex company data.",
     img: "Home · light mode"
    },
    {
     n: "02 · Challenge",
     h: "Guide beginners toward indirect investment — and make instructors look like one team.",
     p: "Priorities were user education, stock recommendations and steering people to indirect investment. Photos shot by many instructors had to be harmonised, the best lecturers convinced to join, and an external tech team needed fast, unambiguous answers.",
     img: "Home · dark mode"
    },
    {
     n: "03 · Approach",
     h: "Search, the indirect-investment path and the certificate — all on the home page.",
     p: "I designed a dominant hero and sent it with photo do’s and don’ts to partners, built a regularly updated experts section, and documented every screen, the design system and the flowchart in Zeplin with in-place comments and answers.",
     img: "Mobile · light"
    },
    {
     n: "04 · Learnings",
     h: "A crash course in exchanges, bureaucracy and remote collaboration.",
     p: "Working inside the exchange’s PR team taught me trading concepts and its approval processes; Zeplin skills deepened. Implementation was postponed a year for organisational reasons — the design was complete.",
     img: "Mobile · dark"
    }
   ]
  },
  de: {
   title: "Tabassom",
   tag: "Video-basierte Trading-Schulung mit Zertifikaten – für die PR- und Informationsgesellschaft der iranischen Börse.",
   placeholder: "Web-Plattform · Light + Dark",
   hero: "Tabassom-Screens",
   meta: [
    [
     "Rolle",
     "UX/UI Designer (freelance)"
    ],
    [
     "Zeitraum",
     "Juni – Dez. 2021"
    ],
    [
     "Plattform",
     "Responsives Web"
    ],
    [
     "Tools",
     "Sketch · Zeplin · Adobe CC"
    ]
   ],
   sections: [
    {
     n: "01 · Kontext",
     h: "Eine Plattform, auf der man Trading-Videos findet, lernt und Zertifikate erhält.",
     p: "Im Auftrag der Public-Relations- und Informationsgesellschaft der iranischen Wertpapieraufsicht vereinfacht die Plattform video-basierte Fundamentalanalyse, damit Nutzer komplexe Unternehmensinformationen verstehen.",
     img: "Home · Lightmode"
    },
    {
     n: "02 · Herausforderung",
     h: "Einsteiger zur indirekten Investition führen – und Dozenten wie ein Team wirken lassen.",
     p: "Prioritäten: Benutzerschulung, Aktienempfehlungen und Nutzerführung zur indirekten Investition. Fotos vieler Dozenten mussten harmonisiert, die besten Dozenten überzeugt und ein externes Tech-Team schnell und eindeutig beantwortet werden.",
     img: "Home · Darkmode"
    },
    {
     n: "03 · Ansatz",
     h: "Suche, Weg zur indirekten Investition und Zertifikat – alles auf der Startseite.",
     p: "Ich entwarf ein dominierendes Bild und schickte es mit Do’s and Don’ts an Partner, baute einen regelmäßig aktualisierten Expertenbereich und dokumentierte alle Entwürfe, das Designsystem und den Flowchart in Zeplin – mit Kommentaren direkt auf den Screens.",
     img: "Mobile · Light"
    },
    {
     n: "04 · Learnings",
     h: "Ein Crashkurs in Börse, Bürokratie und Remote-Zusammenarbeit.",
     p: "Die Arbeit im PR-Team der Börse vermittelte Handelskonzepte und Freigabeprozesse; die Zeplin-Kenntnisse wurden vertieft. Die Umsetzung wurde aus organisatorischen Gründen um ein Jahr verschoben – das Design war fertig.",
     img: "Mobile · Dark"
    }
   ]
  }
 },
 {
  slug: "identity",
  bg: "#2A2826",
  fg: "#F7F5F1",
  bgSoft: "#E9E7E2",
  year: "2013–",
  img: { hero: "identity-4.jpg", card: "identity-3.jpg", s: ["identity-1.png", "identity-2.png"] },
  en: {
   title: "Brand Identity",
   tag: "Logos and corporate identity for Golrang, digital companies and many start-ups — alongside product work since 2013.",
   placeholder: "branding · logos",
   hero: "Identity work",
   meta: [
    [
     "Role",
     "Brand & Logo Designer"
    ],
    [
     "Timeline",
     "2013 – today"
    ],
    [
     "Clients",
     "Golrang · TGA Tour & Travel · Aria Travel Point · start-ups"
    ],
    [
     "Tools",
     "Illustrator · Photoshop"
    ]
   ],
   sections: [
    {
     n: "01 · Practice",
     h: "Identity design ran in parallel with app and interface work from the start.",
     p: "From large groups like Golrang to digital companies and start-ups, I designed logos, corporate design systems and social-media languages — the same craft that later fed into product design systems.",
     img: "Logo systems"
    },
    {
     n: "02 · Selected",
     h: "TGA Tour & Travel corporate design, Aria Travel Point logo, Palphone and Payman marks.",
     p: "Each identity is built as a system: mark, mono-colour versions, alternative backgrounds and application rules, so teams can use it without a designer in the room.",
     img: "Applications"
    }
   ]
  },
  de: {
   title: "Identitätsdesign",
   tag: "Logos und Corporate Identity für Golrang, Digitalunternehmen und zahlreiche Start-ups – parallel zur Produktarbeit seit 2013.",
   placeholder: "Branding · Logos",
   hero: "Identitätsarbeiten",
   meta: [
    [
     "Rolle",
     "Brand & Logo Designer"
    ],
    [
     "Zeitraum",
     "2013 – heute"
    ],
    [
     "Kunden",
     "Golrang · TGA Tour & Travel · Aria Travel Point · Start-ups"
    ],
    [
     "Tools",
     "Illustrator · Photoshop"
    ]
   ],
   sections: [
    {
     n: "01 · Praxis",
     h: "Identitätsdesign lief von Anfang an parallel zu App- und Interface-Arbeit.",
     p: "Von großen Unternehmen wie Golrang bis zu Digitalfirmen und Start-ups: Logos, Corporate-Design-Systeme und Social-Media-Sprachen – dasselbe Handwerk, das später in Produkt-Designsysteme einfloss.",
     img: "Logosysteme"
    },
    {
     n: "02 · Auswahl",
     h: "Corporate Design TGA Tour & Travel, Logo Aria Travel Point, Marken für Palphone und Payman.",
     p: "Jede Identität ist als System gebaut: Zeichen, Mono-Versionen, alternative Hintergründe und Anwendungsregeln, damit Teams sie ohne Designer im Raum nutzen können.",
     img: "Anwendungen"
    }
   ]
  }
 },
 {
  slug: "phonepay",
  bg: "#6D5A8E",
  fg: "#F0ECF6",
  bgSoft: "#ECE8F1",
  year: "2018–20",
  img: {},
  en: {
   title: "Phonepay",
   tag: "Digital wallet for the Iranian market — product design and visual brand strategy.",
   placeholder: "app · wallet · brand",
   hero: "hero: wallet home + brand assets",
   meta: [
    [
     "Role",
     "UX/UI & Graphic Designer"
    ],
    [
     "Year",
     "2018 – 2020"
    ],
    [
     "Platform",
     "iOS · Android"
    ],
    [
     "Scope",
     "Product · Brand"
    ]
   ],
   sections: [
    {
     n: "01 · Context",
     h: "A wallet app competing on trust in a crowded payments market.",
     p: "Owned product design and the visual brand across app, web and marketing.",
     img: "brand system"
    },
    {
     n: "02 · Outcome",
     h: "Higher engagement and one consistent visual language across every touchpoint.",
     p: "Unified components and brand rules made every release feel like the same product.",
     img: "key screens"
    }
   ]
  },
  de: {
   title: "Phonepay",
   tag: "Digitale Wallet für den iranischen Markt – Produktdesign und visuelle Markenstrategie.",
   placeholder: "App · Wallet · Brand",
   hero: "Hero: Wallet-Home + Brand-Assets",
   meta: [
    [
     "Rolle",
     "UX/UI & Grafikdesigner"
    ],
    [
     "Jahr",
     "2018 – 2020"
    ],
    [
     "Plattform",
     "iOS · Android"
    ],
    [
     "Umfang",
     "Produkt · Marke"
    ]
   ],
   sections: [
    {
     n: "01 · Kontext",
     h: "Eine Wallet-App, die in einem vollen Payment-Markt um Vertrauen konkurriert.",
     p: "Verantwortlich für Produktdesign und die visuelle Marke über App, Web und Marketing.",
     img: "Markensystem"
    },
    {
     n: "02 · Ergebnis",
     h: "Mehr Engagement und eine konsistente Bildsprache über alle Touchpoints.",
     p: "Einheitliche Komponenten und Markenregeln ließen jedes Release wie dasselbe Produkt wirken.",
     img: "Key Screens"
    }
   ]
  }
 },
 {
  slug: "carpino",
  bg: "#2F6F6A",
  fg: "#E7F2F1",
  bgSoft: "#E3EEED",
  year: "2016–18",
  img: {},
  en: {
   title: "Carpino",
   tag: "Ride-sharing for Iran — driver and passenger apps with real-time tracking.",
   placeholder: "app · driver + passenger",
   hero: "hero: map view, two apps",
   meta: [
    [
     "Role",
     "UX/UI Designer"
    ],
    [
     "Year",
     "2016 – 2018"
    ],
    [
     "Platform",
     "iOS · Android"
    ],
    [
     "Scope",
     "Two apps"
    ]
   ],
   sections: [
    {
     n: "01 · Context",
     h: "Two audiences, one live map: drivers and passengers need different things at the same moment.",
     p: "Designed both apps in parallel — request, match, live tracking, payment and rating.",
     img: "booking flow"
    },
    {
     n: "02 · Outcome",
     h: "Faster booking and higher rider satisfaction.",
     p: "Streamlined the request flow and clarified trip states on the map.",
     img: "trip states"
    }
   ]
  },
  de: {
   title: "Carpino",
   tag: "Ride-Sharing für den Iran – Fahrer- und Fahrgast-Apps mit Echtzeit-Tracking.",
   placeholder: "App · Fahrer + Fahrgast",
   hero: "Hero: Kartenansicht, zwei Apps",
   meta: [
    [
     "Rolle",
     "UX/UI Designer"
    ],
    [
     "Jahr",
     "2016 – 2018"
    ],
    [
     "Plattform",
     "iOS · Android"
    ],
    [
     "Umfang",
     "Zwei Apps"
    ]
   ],
   sections: [
    {
     n: "01 · Kontext",
     h: "Zwei Zielgruppen, eine Live-Karte: Fahrer und Fahrgäste brauchen im selben Moment Unterschiedliches.",
     p: "Beide Apps parallel gestaltet – Anfrage, Matching, Live-Tracking, Zahlung und Bewertung.",
     img: "Buchungsflow"
    },
    {
     n: "02 · Ergebnis",
     h: "Schnellere Buchung und höhere Zufriedenheit.",
     p: "Anfrageflow gestrafft und Fahrtstatus auf der Karte klarer gemacht.",
     img: "Fahrtstatus"
    }
   ]
  }
 },
 {
  slug: "fanavacard",
  bg: "#8A6A2E",
  fg: "#F7F0E2",
  bgSoft: "#F0EADC",
  year: "2015–16",
  img: {},
  en: {
   title: "FanavaCard",
   tag: "Mobile payment app with 1M+ users — money transfers and bill payments on iOS & Android.",
   placeholder: "app · payments · 1M+ users",
   hero: "hero: transfer flow",
   meta: [
    [
     "Role",
     "UX/UI Designer"
    ],
    [
     "Year",
     "2015 – 2016"
    ],
    [
     "Platform",
     "iOS · Android"
    ],
    [
     "Scope",
     "Payments"
    ]
   ],
   sections: [
    {
     n: "01 · Context",
     h: "Payments at scale: every extra tap costs real users.",
     p: "Redesigned transfers, top-ups and bill payments for a million-user base.",
     img: "transfer flow"
    },
    {
     n: "02 · Outcome",
     h: "Faster onboarding and reduced drop-off through clearer navigation.",
     p: "Simplified first-run and grouped services by intent instead of by backend.",
     img: "onboarding"
    }
   ]
  },
  de: {
   title: "FanavaCard",
   tag: "Mobile-Payment-App mit 1 Mio.+ Nutzern – Überweisungen und Rechnungen auf iOS & Android.",
   placeholder: "App · Payments · 1 Mio.+ Nutzer",
   hero: "Hero: Überweisungsflow",
   meta: [
    [
     "Rolle",
     "UX/UI Designer"
    ],
    [
     "Jahr",
     "2015 – 2016"
    ],
    [
     "Plattform",
     "iOS · Android"
    ],
    [
     "Umfang",
     "Payments"
    ]
   ],
   sections: [
    {
     n: "01 · Kontext",
     h: "Payments im großen Maßstab: jeder zusätzliche Tap kostet echte Nutzer.",
     p: "Überweisungen, Aufladungen und Rechnungszahlungen für eine Millionen-Nutzerbasis neu gestaltet.",
     img: "Überweisungsflow"
    },
    {
     n: "02 · Ergebnis",
     h: "Schnelleres Onboarding und weniger Abbrüche durch klarere Navigation.",
     p: "Erststart vereinfacht und Services nach Absicht statt nach Backend gruppiert.",
     img: "Onboarding"
    }
   ]
  }
 }
];
export const SKILL_ROWS = [
    { color: '#2A2826', items: ['User Research','User Flows','Wireframing','Prototyping','Usability Testing','Information Architecture'] },
    { color: '#8C877E', items: ['Design Systems','App Design','Responsive Web','Interaction','Motion','Accessibility'] },
    { color: '#2A2826', items: ['Branding','Corporate Design','Logo','Social Media','3D Visualisation','Marketing'] },
    { color: '#7A756D', items: ['Figma','Sketch','ProtoPie','Illustrator','Photoshop','Rhino 3D','V-Ray'] },
    { color: '#2A2826', items: ['HTML','CSS','JavaScript','React','Next.js','Supabase','AI Workflows'] }
];
export function localized(p: Project, lang: Lang) {
  const l = p[lang];
  return { ...p, ...l, cardSrc: p.img.card ? IMG + p.img.card : undefined, heroSrc: p.img.hero ? IMG + p.img.hero : undefined, sections: l.sections.map((s, i) => ({ ...s, src: p.img.s?.[i] ? IMG + p.img.s[i] : undefined })), meta: l.meta.map(([k, v]) => ({ k, v })), scopeLine: [l.meta[0][1], l.meta[2][1], l.meta[3][1]].join('  —  ') };
}
export type LocalizedProject = ReturnType<typeof localized>;
export function getProject(slug: string) { return PROJECTS.find(p => p.slug === slug); }
export function nextProject(slug: string) { const i = PROJECTS.findIndex(p => p.slug === slug); return PROJECTS[(i + 1) % PROJECTS.length]; }
