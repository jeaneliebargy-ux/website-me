// Tous les textes du site, en français et en anglais.
// Marqueurs : *mot* = mot mis en couleur dans un titre ; **mot** = mot en gras dans un paragraphe.

export type Lang = "fr" | "en"

export type Job = {
  company: string
  initials: string
  role: string
  contract: string
  period: string
  place: string
  points: string[]
}

export type Content = {
  htmlLang: string
  docTitle: string
  docDescription: string
  langAria: string
  nav: { label: string; href: string }[]
  contactLabel: string
  hero: {
    badge: string
    titleTop: string
    titleMain: string
    titleBottom: string
    description: string
    primary: string
    secondary: string
    ring: string
  }
  keywords: string[]
  profile: {
    kicker: string
    title: string
    text: string
    traits: { title: string; text: string }[]
    figures: { value: string; label: string }[]
  }
  journey: { kicker: string; title: string; intro: string; tablist: string; jobs: Job[] }
  skills: {
    kicker: string
    title: string
    studiesTitle: string
    studies: { years: string; title: string; school: string; text: string }[]
    languagesTitle: string
    languages: { name: string; level: string; score: number }[]
    toolsTitle: string
    tools: { group: string; items: string[] }[]
    life: string[]
  }
  ai: {
    kicker: string
    title: string
    intro: string
    tablist: string
    domains: { key: string; lead: string; uses: string[] }[]
  }
  claude: { kicker: string; title: string; intro: string; caps: { title: string; text: string }[]; soon: string }
  why: { kicker: string; title: string; quote: string; p1: string; p2: string }
  method: { kicker: string; title: string; intro: string; steps: [string, string][] }
  example: {
    kicker: string
    title: string
    badge: string
    headline: string
    text: string
    metrics: { value: string; label: string }[]
    note: string
  }
  contact: { kicker: string; title: string; text: string }
  footer: string
}

const fr: Content = {
  htmlLang: "fr",
  docTitle: "Jean-Elie · Chef de projet, marketing, vente et événementiel",
  docDescription:
    "CV interactif de Jean-Elie : chef de projet en marketing, vente et événementiel, avec l'IA en renfort. Trois ans de coordination de projets clients et de marque à l'international.",
  langAria: "Langue",
  nav: [
    { label: "Profil", href: "#profil" },
    { label: "Parcours", href: "#parcours" },
    { label: "Compétences", href: "#competences" },
    { label: "IA", href: "#apport" },
    { label: "Exemple", href: "#exemple" },
  ],
  contactLabel: "Contact",
  hero: {
    badge: "Marketing · Vente · Événementiel",
    titleTop: "Chef de projet",
    titleMain: "avec l'IA",
    titleBottom: "en renfort",
    description:
      "Trois ans de coordination de projets clients et de marque sur des marchés internationaux, et une dimension IA pour que les équipes gagnent du temps pour l'humain.",
    primary: "Voir mon parcours",
    secondary: "Ce que j'apporte",
    ring: "Marketing • Vente • Événementiel • IA • Marketing • Vente • ",
  },
  keywords: ["Marketing", "Vente", "Événementiel", "Gestion de projet", "Coordination", "IA au service de l'humain"],
  profile: {
    kicker: "Profil",
    title: "Qui *je suis*",
    text: "Je coordonne des projets clients et de marque, de leur cadrage à leur exécution sur place, en France, Belgique, Luxembourg et Suisse. Basé à Montpellier, je suis **à la recherche d'un poste salarié** de chef de projet marketing, vente ou événementiel.",
    traits: [
      { title: "Écoute et confiance.", text: "Des relations transparentes et profondes, rapidement." },
      { title: "Organiser et coordonner.", text: "Plusieurs projets et interlocuteurs en parallèle, en leader comme en équipier." },
      { title: "Créer de bons moments.", text: "Faire en sorte que chacun se sente vu et bien." },
    ],
    figures: [
      { value: "3 ans", label: "de coordination de projets clients et de marque" },
      { value: "4 pays", label: "de territoire co-piloté" },
      { value: "100+", label: "clients B2B accompagnés" },
      { value: "5 à 6", label: "événements majeurs organisés" },
    ],
  },
  journey: {
    kicker: "Parcours",
    title: "Mon *parcours*",
    intro: "Cliquez sur une entreprise pour voir ce que j'y ai fait.",
    tablist: "Expériences professionnelles",
    jobs: [
      {
        company: "LegalPlace",
        initials: "LP",
        role: "Conseiller en création d'entreprise",
        contract: "CDI",
        period: "Sept. 2025 – août 2026",
        place: "Montpellier",
        points: [
          "Gestion de dossiers clients de bout en bout, de l'accueil à la finalisation, avec un suivi et une documentation structurés.",
          "Coordination avec les clients et les équipes internes pour tenir chaque projet dans les délais.",
          "Accueil et conseil des nouveaux clients, pour une expérience fluide et homogène.",
          "Contribution à l'amélioration du discours commercial et de la clarté du message.",
        ],
      },
      {
        company: "Zirkonzahn Worldwide",
        initials: "ZW",
        role: "Spécialiste ventes, gestion de territoire",
        contract: "CDI",
        period: "Nov. 2023 – août 2025",
        place: "Tyrol du Sud, Italie",
        points: [
          "Co-pilotage d'un territoire de 4 pays (France, Belgique, Luxembourg, Suisse) avec 2 partenaires locaux et une équipe terrain, pour une exécution de marque et une expérience client cohérentes.",
          "Organisation d'événements clients et de formations, représentation de la marque sur des salons internationaux : planning, logistique, exécution sur place.",
          "Point de contact entre ventes, marketing et support pour coordonner le déploiement de solutions techniques.",
          "Négociation et suivi de contrats : engagements et échéances.",
          "Relation avec plus de 100 clients B2B ; croissance visible du chiffre d'affaires grâce à une meilleure priorisation et coordination entre équipes.",
          "Contribution à la stratégie du territoire avec la direction, et propositions d'amélioration de processus.",
        ],
      },
      {
        company: "Innocent Drinks",
        initials: "ID",
        role: "Animation des ventes",
        contract: "Stage",
        period: "Janv. – juin 2023",
        place: "Paris",
        points: [
          "Coordination de la communication interne et de la documentation de la force de vente.",
          "Suivi des nouveaux référencements et des ressources commerciales associées.",
          "Analyse des écarts de fonctionnement et recommandations présentées à la direction.",
        ],
      },
      {
        company: "ClearCorrect · Straumann Group",
        initials: "CC",
        role: "Chef de projet junior, orthodontie",
        contract: "Stage",
        period: "Mars – août 2022",
        place: "Paris",
        points: [
          "Pilotage de plusieurs projets transverses en parallèle, du cadrage à la mise en œuvre : visibilité de marque et appui aux ventes.",
          "Conception d'outils et de supports de communication marketing.",
          "Organisation de formations internes et gestion des réseaux sociaux de la marque.",
          "Amélioration de la documentation et des outils des équipes terrain.",
        ],
      },
    ],
  },
  skills: {
    kicker: "Compétences",
    title: "Formation, langues *et outils*",
    studiesTitle: "Formation",
    studies: [
      { years: "2021 – 2023", title: "Master Management et développement commercial", school: "Montpellier Management", text: "Stratégie d'entreprise, développement de marchés, gestion opérationnelle." },
      { years: "2020 – 2021", title: "Licence Management stratégique", school: "Montpellier Management", text: "Analyse stratégique, traitement de données, gestion financière." },
      { years: "2018 – 2020", title: "Classe préparatoire CPGE", school: "Lycée Jean-Mermoz · ENS Paris-Saclay D2", text: "Économie, finance, mathématiques appliquées." },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Français", level: "Natif", score: 5 },
      { name: "Anglais", level: "Courant", score: 4 },
      { name: "Italien", level: "Intermédiaire", score: 3 },
      { name: "Espagnol", level: "Notions", score: 2 },
    ],
    toolsTitle: "Outils",
    tools: [
      { group: "Bureautique", items: ["Excel", "PowerPoint", "Word"] },
      { group: "Création", items: ["Photoshop", "InDesign", "Premiere Pro"] },
      { group: "Collaboration", items: ["Trello", "Notion", "Slack"] },
    ],
    life: ["Course, basket, escalade, cyclisme, rugby", "Jazz, rap, rock, gospel", "Cuisine"],
  },
  ai: {
    kicker: "L'IA, mon plus",
    title: "Ce que j'apporte à *une équipe projet*",
    intro:
      "Je ne remplace pas le chef de projet : j'ajoute un appui IA sur le répétitif, pour se concentrer sur la relation, les arbitrages et les décisions.",
    tablist: "Domaines",
    domains: [
      {
        key: "Marketing",
        lead: "Gagner du temps sur la préparation, garder la main sur le message.",
        uses: [
          "Briefs et plannings éditoriaux préparés plus vite",
          "Synthèses d'études et de retours clients",
          "Premières versions de contenus, relues et validées par l'humain",
        ],
      },
      {
        key: "Vente",
        lead: "Moins de saisie, plus de temps pour conseiller le client.",
        uses: [
          "Préparation des rendez-vous et des offres",
          "Suivi structuré des prospects et des contrats",
          "Moins de ressaisie entre les outils",
        ],
      },
      {
        key: "Événementiel",
        lead: "Un événement tient dans les détails : les suivre, sans s'y noyer.",
        uses: [
          "Rétroplannings, programmes et communications",
          "Relances et retours des participants",
          "Appuyé sur 5 à 6 événements majeurs déjà organisés",
        ],
      },
    ],
  },
  claude: {
    kicker: "Avec Claude",
    title: "Ce que je sais *déjà faire*",
    intro: "Des capacités déjà mises en pratique, pas des promesses.",
    caps: [
      { title: "Auditer un processus", text: "Cartographier les étapes, repérer les frictions, comparer les options avant de proposer de l'IA, et chiffrer une cible." },
      { title: "Créer des skills", text: "Transformer une façon de travailler en instructions réutilisables que Claude applique à la demande." },
      { title: "Créer des agents", text: "Concevoir un assistant spécialisé, comme un relecteur critique en lecture seule, et vérifier qu'il est utile." },
      { title: "Relire et challenger", text: "Faire critiquer un livrable pour corriger les affirmations trop fortes et distinguer mesures et estimations." },
      { title: "Construire un site", text: "Passer d'une idée à un site présentable, avec un contexte clair et des règles de publication : celui-ci en est la preuve." },
      { title: "Connecter ses outils", text: "Relier Claude à ses documents (Google, Notion) en lecture seule, pour garder le contrôle des données." },
    ],
    soon: "À venir : automatiser une tâche récurrente avec une routine planifiée.",
  },
  why: {
    kicker: "Pourquoi l'IA",
    title: "Pourquoi je m'y suis *mis*",
    quote: "Redonner du temps à l'humain.",
    p1: "Dans la vente, mes qualités relationnelles se sont retrouvées transformées en objectifs chiffrés sous pression. J'y ai perdu l'envie de m'intéresser aux gens, alors que c'est ce que je fais de mieux.",
    p2: "J'ai aussi vu où passe le temps d'une équipe : noter, retrouver une référence, ressaisir la même information. L'IA est pour moi un moyen de reprendre ce temps, pour se concentrer sur l'empathie et les tâches qui ont du sens. Je ne viens pas de la technique : j'apprends en construisant, avec Claude.",
  },
  method: {
    kicker: "Méthode",
    title: "Une méthode *que j'apprécie*",
    intro: "Ce n'est pas la seule, mais c'est celle que j'aime appliquer.",
    steps: [
      ["Observer", "Comprendre comment le travail se fait réellement."],
      ["Mesurer", "Chiffrer temps et erreurs, en distinguant mesures et estimations."],
      ["Proposer", "Présenter des options, leurs risques et une cible chiffrée."],
      ["Valider", "Tester sur un pilote avec les équipes. L'humain valide toujours."],
    ],
  },
  example: {
    kicker: "Exemple",
    title: "Un exemple *de livrable*",
    badge: "Exemple",
    headline: "Audit de la prise de commande par téléphone",
    text: "Un exercice réalisé avec Claude pour illustrer ma façon de travailler : processus actuel, hypothèse, alternatives comparées, risques (dont la protection des données) et pilote proposé.",
    metrics: [
      { value: "~60", label: "appels par jour (estimation)" },
      { value: "30 → 10 min", label: "cible de saisie par commande (à valider)" },
      { value: "4", label: "options comparées avant de choisir l'IA" },
    ],
    note: "Chiffres issus de souvenirs : ce sont des estimations, à remplacer par des mesures réelles. Version complète à venir.",
  },
  contact: {
    kicker: "Contact",
    title: "Envie d'*échanger* ?",
    text: "Je cherche à rejoindre une équipe comme chef de projet en marketing, vente ou événementiel, avec l'IA comme atout.",
  },
  footer: "Jean-Elie · Portfolio en construction · 2026",
}

const en: Content = {
  htmlLang: "en",
  docTitle: "Jean-Elie · Project manager, marketing, sales and events",
  docDescription:
    "Interactive CV of Jean-Elie: project manager in marketing, sales and events, with AI as a plus. Three years coordinating client and brand projects internationally.",
  langAria: "Language",
  nav: [
    { label: "Profile", href: "#profil" },
    { label: "Experience", href: "#parcours" },
    { label: "Skills", href: "#competences" },
    { label: "AI", href: "#apport" },
    { label: "Example", href: "#exemple" },
  ],
  contactLabel: "Contact",
  hero: {
    badge: "Marketing · Sales · Events",
    titleTop: "Project manager",
    titleMain: "with AI",
    titleBottom: "in support",
    description:
      "Three years coordinating client and brand projects across international markets, plus an AI dimension so teams save time for what is human.",
    primary: "See my experience",
    secondary: "What I bring",
    ring: "Marketing • Sales • Events • AI • Marketing • Sales • ",
  },
  keywords: ["Marketing", "Sales", "Events", "Project management", "Coordination", "AI serving people"],
  profile: {
    kicker: "Profile",
    title: "Who *I am*",
    text: "I coordinate client and brand projects, from scoping to on-site execution, across France, Belgium, Luxembourg and Switzerland. Based in Montpellier, I am **looking for a permanent position** as a project manager in marketing, sales or events.",
    traits: [
      { title: "Listening and trust.", text: "Open, deep relationships, built quickly." },
      { title: "Organising and coordinating.", text: "Several projects and stakeholders in parallel, as a leader or as a team player." },
      { title: "Creating good moments.", text: "Making sure everyone feels seen and at ease." },
    ],
    figures: [
      { value: "3 yrs", label: "coordinating client and brand projects" },
      { value: "4 countries", label: "of territory co-managed" },
      { value: "100+", label: "B2B clients supported" },
      { value: "5 to 6", label: "major events organised" },
    ],
  },
  journey: {
    kicker: "Experience",
    title: "My *experience*",
    intro: "Click on a company to see what I did there.",
    tablist: "Work experience",
    jobs: [
      {
        company: "LegalPlace",
        initials: "LP",
        role: "Business Creation Consultant",
        contract: "Permanent",
        period: "Sept. 2025 – Aug. 2026",
        place: "Montpellier, France",
        points: [
          "Managed client case files end to end, from onboarding to completion, with structured tracking and documentation.",
          "Coordinated with clients and internal teams to keep each project on schedule.",
          "Advised and onboarded new clients, ensuring a smooth and consistent experience.",
          "Contributed to improving the sales pitch and the clarity of the message.",
        ],
      },
      {
        company: "Zirkonzahn Worldwide",
        initials: "ZW",
        role: "Territory Account Sales Specialist",
        contract: "Permanent",
        period: "Nov. 2023 – Aug. 2025",
        place: "South Tyrol, Italy",
        points: [
          "Co-managed a 4-country territory (France, Belgium, Luxembourg, Switzerland) with 2 local partners and a field sales team, ensuring consistent brand execution and client experience across markets.",
          "Organised client training events and represented the brand at international trade shows, overseeing planning, logistics and on-site execution.",
          "Acted as the primary point of contact between sales, marketing and support teams to coordinate the rollout of technical solutions.",
          "Negotiated and tracked contracts, overseeing commitments and deadlines.",
          "Built relationships with over 100 B2B clients; contributed to visible revenue growth through better prioritisation and cross-team coordination.",
          "Contributed to defining the territory strategy with senior management and proposed process improvements.",
        ],
      },
      {
        company: "Innocent Drinks",
        initials: "ID",
        role: "Sales Activation",
        contract: "Internship",
        period: "Jan. – June 2023",
        place: "Paris, France",
        points: [
          "Coordinated internal communication and documentation within the sales force.",
          "Tracked new product listings and the commercial resources needed to support them.",
          "Analysed workflow gaps and presented recommendations to senior management.",
        ],
      },
      {
        company: "ClearCorrect · Straumann Group",
        initials: "CC",
        role: "Junior Project Manager, Orthodontics",
        contract: "Internship",
        period: "March – Aug. 2022",
        place: "Paris, France",
        points: [
          "Led several cross-functional projects in parallel, from scoping to implementation, supporting brand visibility and sales enablement.",
          "Designed marketing communication tools and materials to strengthen brand visibility.",
          "Organised internal training events and managed the brand's social media.",
          "Improved the sales documentation and tools used by field teams.",
        ],
      },
    ],
  },
  skills: {
    kicker: "Skills",
    title: "Education, languages *and tools*",
    studiesTitle: "Education",
    studies: [
      { years: "2021 – 2023", title: "Master's Degree in Management and Business Development", school: "Montpellier Management", text: "Business strategy, market development, operational management." },
      { years: "2020 – 2021", title: "Bachelor's Degree in Strategic Management", school: "Montpellier Management", text: "Strategic analysis, data processing, financial management." },
      { years: "2018 – 2020", title: "Preparatory Classes (CPGE)", school: "Lycée Jean-Mermoz · ENS Paris-Saclay D2", text: "Economics, finance, applied mathematics." },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "French", level: "Native", score: 5 },
      { name: "English", level: "Fluent", score: 4 },
      { name: "Italian", level: "Intermediate", score: 3 },
      { name: "Spanish", level: "Basic", score: 2 },
    ],
    toolsTitle: "Tools",
    tools: [
      { group: "Office", items: ["Excel", "PowerPoint", "Word"] },
      { group: "Creative", items: ["Photoshop", "InDesign", "Premiere Pro"] },
      { group: "Collaboration", items: ["Trello", "Notion", "Slack"] },
    ],
    life: ["Running, basketball, climbing, cycling, rugby", "Jazz, rap, rock, gospel", "Cooking"],
  },
  ai: {
    kicker: "AI, my plus",
    title: "What I bring to *a project team*",
    intro:
      "I don't replace the project manager: I add AI support on repetitive work, so they can focus on relationships, trade-offs and decisions.",
    tablist: "Fields",
    domains: [
      {
        key: "Marketing",
        lead: "Save time on preparation, keep control of the message.",
        uses: [
          "Briefs and editorial calendars prepared faster",
          "Summaries of studies and customer feedback",
          "First drafts of content, reviewed and validated by a human",
        ],
      },
      {
        key: "Sales",
        lead: "Less data entry, more time to advise the customer.",
        uses: [
          "Preparing meetings and offers",
          "Structured follow-up of prospects and contracts",
          "Less re-entry between tools",
        ],
      },
      {
        key: "Events",
        lead: "An event lives in the details: follow them without drowning in them.",
        uses: [
          "Backward planning, programmes and communications",
          "Follow-ups and participant feedback",
          "Backed by 5 to 6 major events already organised",
        ],
      },
    ],
  },
  claude: {
    kicker: "With Claude",
    title: "What I can *already do*",
    intro: "Skills put into practice, not promises.",
    caps: [
      { title: "Audit a process", text: "Map the steps, spot the friction, compare options before proposing AI, and set a measurable target." },
      { title: "Create skills", text: "Turn a way of working into reusable instructions that Claude applies on demand." },
      { title: "Create agents", text: "Design a specialised assistant, such as a read-only critical reviewer, and check that it is useful." },
      { title: "Review and challenge", text: "Have a deliverable critiqued to correct overstated claims and separate measurements from estimates." },
      { title: "Build a website", text: "Go from an idea to a presentable site, with a clear context and publishing rules: this one is the proof." },
      { title: "Connect tools", text: "Link Claude to documents (Google, Notion) in read-only mode, to keep control of the data." },
    ],
    soon: "Coming next: automating a recurring task with a scheduled routine.",
  },
  why: {
    kicker: "Why AI",
    title: "Why I *got into it*",
    quote: "Giving time back to people.",
    p1: "In sales, my natural relational qualities ended up turned into numerical targets under pressure. I lost the desire to take an interest in people, even though that is what I do best.",
    p2: "I also saw where a team's time goes: taking notes, finding a reference, re-entering the same information. For me, AI is a way to take that time back, to focus on empathy and meaningful work. I don't come from a technical background: I learn by building, with Claude.",
  },
  method: {
    kicker: "Method",
    title: "A method *I like*",
    intro: "It isn't the only one, but it is the one I enjoy applying.",
    steps: [
      ["Observe", "Understand how the work is really done."],
      ["Measure", "Quantify time and errors, separating measurements from estimates."],
      ["Propose", "Present options, their risks and a measurable target."],
      ["Validate", "Test on a pilot with the teams. A human always validates."],
    ],
  },
  example: {
    kicker: "Example",
    title: "An example *deliverable*",
    badge: "Example",
    headline: "Audit of phone order taking",
    text: "An exercise done with Claude to illustrate how I work: current process, hypothesis, compared alternatives, risks (including data protection) and a proposed pilot.",
    metrics: [
      { value: "~60", label: "calls per day (estimate)" },
      { value: "30 → 10 min", label: "target data-entry time per order (to be validated)" },
      { value: "4", label: "options compared before choosing AI" },
    ],
    note: "Figures come from memory: they are estimates, to be replaced by real measurements. Full version coming soon.",
  },
  contact: {
    kicker: "Contact",
    title: "Want to *talk*?",
    text: "I am looking to join a team as a project manager in marketing, sales or events, with AI as an asset.",
  },
  footer: "Jean-Elie · Portfolio under construction · 2026",
}

export const content: Record<Lang, Content> = { fr, en }
