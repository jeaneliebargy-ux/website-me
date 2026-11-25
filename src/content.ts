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
  menuAria: string
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
  }
  glance: { title: string; text: string }[]
  profile: {
    kicker: string
    title: string
    text: string
    traits: { title: string; text: string }[]
    figures: { value: string; label: string }[]
  }
  journey: { kicker: string; title: string; intro: string; tablist: string; jobs: Job[] }
  keyFigures: { kicker: string; title: string }
  thesis: {
    kicker: string
    title: string
    badge: string
    headline: string
    text: string
    note: string
  }
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
  docTitle: "Jean-Elie · Sales Operations & Enablement",
  docDescription:
    "CV interactif de Jean-Elie : Sales Operations & Enablement. Outils d'aide à la vente, analyse du terrain, formation et argumentaires. Trois ans d'expérience, stages inclus, et un mémoire de Master 2 sur le sujet.",
  langAria: "Langue",
  menuAria: "Menu",
  nav: [
    { label: "Parcours", href: "#parcours" },
    { label: "Chiffres", href: "#chiffres" },
    { label: "Mémoire", href: "#memoire" },
    { label: "Profil", href: "#profil" },
    { label: "Compétences", href: "#competences" },
    { label: "IA", href: "#apport" },
    { label: "Contact", href: "#contact" },
  ],
  contactLabel: "Contact",
  hero: {
    badge: "Poste salarié · Lyon ou Suisse romande",
    titleTop: "Jean-Elie Bargy",
    titleMain: "Sales Operations & Enablement",
    titleBottom: "",
    description:
      "J'ai construit des outils d'aide à la vente et j'ai vendu moi-même. Je cherche un poste de Sales Operations ou Sales Enablement à Lyon ou en Suisse romande.",
    primary: "Voir mon parcours",
    secondary: "Me contacter",
  },
  glance: [
    { title: "Outils d'aide à la vente", text: "Conçus pour le terrain" },
    { title: "Enablement", text: "Formation et argumentaires" },
    { title: "CRM", text: "Salesforce, suivi, analyse" },
    { title: "IA en renfort", text: "Automatiser le répétitif" },
  ],
  profile: {
    kicker: "Profil",
    title: "Qui *je suis*",
    text: "J'aide les équipes commerciales à vendre plus facilement : les bons outils, les bonnes informations, les bons arguments, au bon moment. J'ai travaillé côté siège (innocent), côté terrain et partenaires (Zirkonzahn) et côté vente (LegalPlace), ce qui m'aide à comprendre les contraintes de ceux qui utilisent ces outils. Basé à Montpellier, je cherche un **poste salarié** de Sales Operations ou Sales Enablement, à Lyon ou en Suisse romande.",
    traits: [
      { title: "Écouter le terrain.", text: "Comprendre comment les commerciaux travaillent avant de leur proposer quoi que ce soit." },
      { title: "Simplifier.", text: "Un outil utile est un outil que l'on ouvre sans y penser." },
      { title: "Livrer du concret.", text: "Des fichiers, des argumentaires, des process, pas seulement des recommandations." },
    ],
    figures: [
      { value: "1er sur 13", label: "de mes ventes d'un nouveau produit de formation, deux mois consécutifs (LegalPlace)" },
      { value: "Master 2", label: "mémoire sur les outils d'aide à la vente" },
      { value: "4 pays", label: "de territoire couvert (France, Belgique, Luxembourg, Suisse)" },
      { value: "100+", label: "clients B2B suivis" },
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
        role: "Consultant en création de société",
        contract: "CDI",
        period: "Sept. 2025 – août 2026",
        place: "Montpellier",
        points: [
          "Vente et conseil auprès des entrepreneurs, avec Salesforce et suivi du panier moyen.",
          "Mes ventes personnelles : 1er sur 13 conseillers de l'équipe, deux mois de suite, sur un nouveau produit de formation pour entrepreneurs (éligible au CPF).",
          "Masterclass d'argumentaire pour lancer ce produit.",
          "Usage des données de l'équipe pour comparer les pratiques.",
        ],
      },
      {
        company: "Zirkonzahn Worldwide",
        initials: "ZW",
        role: "Territory Account Sales Specialist",
        contract: "CDI",
        period: "Nov. 2023 – août 2025",
        place: "Tyrol du Sud, Italie",
        points: [
          "Études de marché et analyse du travail de l'équipe avec les partenaires, présentées au PDG.",
          "Transfert de connaissances produit aux partenaires.",
          "Fichiers de référencement et utilisation de l'ERP Radix.",
          "Co-pilotage d'un territoire de 4 pays (France, Belgique, Luxembourg, Suisse) avec 2 partenaires locaux, et relation avec plus de 100 clients B2B.",
          "5 à 6 événements (salons, formations clients) organisés comme leviers commerciaux.",
        ],
      },
      {
        company: "innocent",
        initials: "IN",
        role: "Animation des ventes",
        contract: "Stage",
        period: "Janv. – juin 2023",
        place: "Paris",
        points: [
          "Relais entre le siège et la force de vente.",
          "Book de vente et dossier numérique pour la force de vente.",
          "Journées terrain avec des commerciaux.",
          "Mémoire de Master 2 sur les outils d'aide à la vente.",
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
          "Outils marketing pour soutenir la force de vente.",
          "Étude des techniques d'orthodontie pour expliquer les aligneurs aux patients et aux omnipraticiens.",
        ],
      },
    ],
  },
  thesis: {
    kicker: "Mémoire",
    title: "Mon *mémoire*",
    badge: "Master 2 · Montpellier Management · 2022-2023",
    headline: "Un mémoire de Master 2 sur les outils d'aide à la vente, né du terrain",
    text: "Réalisé pendant mon stage d'animation des ventes. L'équipe m'a indiqué que mes conclusions rejoignaient celles d'un audit externe réalisé un an plus tôt.",
    note: "Résumé général : les détails se partagent en entretien.",
  },
  skills: {
    kicker: "Compétences",
    title: "Formation, langues *et outils*",
    studiesTitle: "Formation",
    studies: [
      { years: "2021 – 2023", title: "Master 2 Management et Business Development", school: "Montpellier Management", text: "Stratégie d'entreprise, développement de marchés, gestion opérationnelle." },
      { years: "2020 – 2021", title: "Licence Management Stratégie", school: "Montpellier Management", text: "Analyse stratégique, traitement de données, gestion financière." },
      { years: "2018 – 2020", title: "Classe préparatoire CPGE", school: "Lycée Jean-Mermoz · ENS Paris-Saclay D2", text: "Économie, finance, mathématiques appliquées." },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Français", level: "Langue maternelle", score: 5 },
      { name: "Anglais", level: "C1", score: 4 },
      { name: "Italien", level: "B1", score: 3 },
      { name: "Espagnol", level: "A2", score: 2 },
    ],
    toolsTitle: "Outils",
    tools: [
      { group: "Bureautique", items: ["Excel", "PowerPoint", "Word"] },
      { group: "Ventes et gestion", items: ["Salesforce", "ERP Radix", "SAP (notions)"] },
      { group: "Collaboration", items: ["Claude", "Notion", "Trello", "Slack"] },
      { group: "Création", items: ["Photoshop", "InDesign", "Premiere Pro"] },
    ],
    life: ["Course, basket, escalade, cyclisme, rugby", "Jazz, rap, rock, gospel", "Cuisine"],
  },
  ai: {
    kicker: "L'IA, mon plus",
    title: "L'IA au service des *équipes commerciales*",
    intro: "J'automatise le répétitif pour que les commerciaux gardent leur temps pour leurs clients. Depuis septembre 2026, je me forme à l'IA avec un parcours en ligne (vidéos) et je m'exerce avec Claude.",
    tablist: "Domaines",
    domains: [
      {
        key: "Enablement",
        lead: "Mettre les bonnes informations entre les mains des commerciaux.",
        uses: ["Relecture critique d'un livrable avant diffusion, avec un agent relecteur"],
      },
      {
        key: "Reporting",
        lead: "Moins de saisie, plus de temps pour comprendre le terrain.",
        uses: ["Comptes rendus et relances automatisés"],
      },
      {
        key: "Process",
        lead: "Repérer ce qui fait perdre du temps, puis le simplifier.",
        uses: ["Audit d'un processus et rétroplannings préparés plus vite"],
      },
    ],
  },
  claude: {
    kicker: "Avec Claude",
    title: "Ce que je sais *déjà faire*",
    intro: "Des capacités déjà mises en pratique, pas des promesses.",
    caps: [
      { title: "Auditer un processus", text: "Repérer où une équipe perd du temps et chiffrer ce qu'on peut gagner." },
      { title: "Créer des skills", text: "Transformer une tâche répétitive en procédure que l'IA rejoue à la demande." },
      { title: "Créer un agent", text: "Concevoir un assistant spécialisé, comme un relecteur critique, et vérifier qu'il est utile." },
      { title: "Relire et challenger", text: "Faire critiquer un livrable pour corriger ce qui est trop affirmé." },
      { title: "Construire un site", text: "Passer d'une idée à un site en ligne, comme celui-ci." },
      { title: "Connecter ses outils", text: "Relier l'IA à ses documents en lecture seule, pour garder le contrôle des données." },
    ],
    soon: "À venir : automatiser une tâche récurrente avec une routine planifiée.",
  },
  why: {
    kicker: "Pourquoi l'IA",
    title: "Pourquoi je m'y suis *mis*",
    quote: "Redonner du temps à l'humain.",
    p1: "Ce qui me motive, c'est de rendre le travail des autres plus simple. Je suis à l'aise avec les chiffres quand ils servent à décider et à aider, et l'IA me permet d'automatiser le répétitif pour consacrer plus de temps à l'écoute du terrain.",
    p2: "Depuis août 2026, je me forme à l'IA avec un parcours en ligne (vidéos) et je m'exerce avec Claude.",
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
    note: "Ordres de grandeur d'un cas d'étude, à confirmer par des mesures. Version complète à venir.",
  },
  contact: {
    kicker: "Contact",
    title: "Envie d'*échanger* ?",
    text: "Je cherche à rejoindre une équipe commerciale comme Sales Operations ou Sales Enablement, à Lyon ou en Suisse romande, avec le terrain, les outils et l'IA comme leviers.",
  },
  keyFigures: { kicker: "Chiffres clés", title: "En *chiffres*" },
  footer: "Jean-Elie · Portfolio en construction · 2026",
}

const en: Content = {
  htmlLang: "en",
  docTitle: "Jean-Elie · Sales Operations & Enablement",
  docDescription:
    "Interactive CV of Jean-Elie: Sales Operations & Enablement. Sales enablement tools, field analysis, training and sales pitches. Three years of experience, internships included, and a Master's thesis on the subject.",
  langAria: "Language",
  menuAria: "Menu",
  nav: [
    { label: "Experience", href: "#parcours" },
    { label: "Figures", href: "#chiffres" },
    { label: "Thesis", href: "#memoire" },
    { label: "Profile", href: "#profil" },
    { label: "Skills", href: "#competences" },
    { label: "AI", href: "#apport" },
    { label: "Contact", href: "#contact" },
  ],
  contactLabel: "Contact",
  hero: {
    badge: "Permanent position · Lyon or French-speaking Switzerland",
    titleTop: "Jean-Elie Bargy",
    titleMain: "Sales Operations & Enablement",
    titleBottom: "",
    description:
      "I built sales enablement tools, and I have also done the selling myself. I am looking for a Sales Operations or Sales Enablement position in Lyon or French-speaking Switzerland.",
    primary: "See my experience",
    secondary: "Contact me",
  },
  glance: [
    { title: "Sales enablement tools", text: "Built for the field" },
    { title: "Enablement", text: "Training and sales pitches" },
    { title: "CRM", text: "Salesforce, tracking, analysis" },
    { title: "AI in support", text: "Automating the repetitive" },
  ],
  profile: {
    kicker: "Profile",
    title: "Who *I am*",
    text: "I help sales teams sell more easily: the right tools, the right information, the right arguments, at the right time. I have worked at head office (innocent), in the field with partners (Zirkonzahn) and in sales (LegalPlace), which helps me understand the constraints of the people who use these tools. Based in Montpellier, I am **looking for a permanent position** in Sales Operations or Sales Enablement, in Lyon or French-speaking Switzerland.",
    traits: [
      { title: "Listening to the field.", text: "Understanding how salespeople work before suggesting anything." },
      { title: "Simplifying.", text: "A useful tool is one you open without thinking about it." },
      { title: "Delivering something concrete.", text: "Files, sales pitches, processes, not just recommendations." },
    ],
    figures: [
      { value: "1st of 13", label: "in sales of a new training product, two months in a row (LegalPlace)" },
      { value: "Master 2", label: "thesis on sales enablement tools" },
      { value: "4 countries", label: "of territory covered (France, Belgium, Luxembourg, Switzerland)" },
      { value: "100+", label: "B2B clients followed" },
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
          "Sales and advice for entrepreneurs, using Salesforce and tracking the average basket.",
          "My personal sales: 1st out of 13 advisers in the team, two months in a row, on a new training product for entrepreneurs (CPF-eligible).",
          "Ran a pitch masterclass to launch this product.",
          "Used team data to compare practices.",
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
          "Market studies and analysis of the team's work with partners, presented to the CEO.",
          "Transferred product knowledge to partners.",
          "Product listing files and use of the Radix ERP.",
          "Co-managed a 4-country territory (France, Belgium, Luxembourg, Switzerland) with 2 local partners, with over 100 B2B clients.",
          "5 to 6 events (trade shows, client training) organised as sales levers.",
        ],
      },
      {
        company: "innocent",
        initials: "IN",
        role: "Sales Activation",
        contract: "Internship",
        period: "Jan. – June 2023",
        place: "Paris, France",
        points: [
          "Link between head office and the sales force.",
          "Sales book and digital file for the sales force.",
          "Field days with salespeople.",
          "Master's thesis on sales enablement tools.",
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
          "Marketing tools to support the sales force.",
          "Studied orthodontic techniques to explain aligners to patients and general dentists.",
        ],
      },
    ],
  },
  thesis: {
    kicker: "Thesis",
    title: "My *thesis*",
    badge: "Master 2 · Montpellier Management · 2022-2023",
    headline: "A Master's thesis on sales enablement tools, grounded in the field",
    text: "Carried out during my sales activation internship. The team told me my findings matched those of an external audit carried out a year earlier.",
    note: "General summary: details can be shared in an interview.",
  },
  skills: {
    kicker: "Skills",
    title: "Education, languages *and tools*",
    studiesTitle: "Education",
    studies: [
      { years: "2021 – 2023", title: "Master 2 in Management and Business Development", school: "Montpellier Management", text: "Business strategy, market development, operational management." },
      { years: "2020 – 2021", title: "Bachelor's Degree in Management Stratégie", school: "Montpellier Management", text: "Strategic analysis, data processing, financial management." },
      { years: "2018 – 2020", title: "Preparatory Classes (CPGE)", school: "Lycée Jean-Mermoz · ENS Paris-Saclay D2", text: "Economics, finance, applied mathematics." },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "French", level: "Native", score: 5 },
      { name: "English", level: "C1", score: 4 },
      { name: "Italian", level: "B1", score: 3 },
      { name: "Spanish", level: "A2", score: 2 },
    ],
    toolsTitle: "Tools",
    tools: [
      { group: "Office", items: ["Excel", "PowerPoint", "Word"] },
      { group: "Sales and management", items: ["Salesforce", "Radix ERP", "SAP (basics)"] },
      { group: "Collaboration", items: ["Claude", "Notion", "Trello", "Slack"] },
      { group: "Creative", items: ["Photoshop", "InDesign", "Premiere Pro"] },
    ],
    life: ["Running, basketball, climbing, cycling, rugby", "Jazz, rap, rock, gospel", "Cooking"],
  },
  ai: {
    kicker: "AI, my plus",
    title: "AI to support *sales teams*",
    intro: "I automate the repetitive so salespeople keep their time for their customers. Since September 2026, I have been training in AI with an online video course and practising with Claude.",
    tablist: "Fields",
    domains: [
      {
        key: "Enablement",
        lead: "Put the right information in salespeople's hands.",
        uses: ["Critical review of a deliverable before it goes out, with a reviewer agent"],
      },
      {
        key: "Reporting",
        lead: "Less data entry, more time to understand the field.",
        uses: ["Automated meeting reports and follow-ups"],
      },
      {
        key: "Process",
        lead: "Spot what wastes time, then simplify it.",
        uses: ["Auditing a process and backward planning prepared faster"],
      },
    ],
  },
  claude: {
    kicker: "With Claude",
    title: "What I can *already do*",
    intro: "Skills put into practice, not promises.",
    caps: [
      { title: "Audit a process", text: "Spot where a team loses time and quantify what can be gained." },
      { title: "Create skills", text: "Turn a repetitive task into a procedure that AI replays on demand." },
      { title: "Create an agent", text: "Design a specialised assistant, such as a critical reviewer, and check that it is useful." },
      { title: "Review and challenge", text: "Have a deliverable critiqued to correct what is overstated." },
      { title: "Build a website", text: "Go from an idea to a live site, like this one." },
      { title: "Connect tools", text: "Link AI to your documents in read-only mode, to keep control of the data." },
    ],
    soon: "Coming next: automating a recurring task with a scheduled routine.",
  },
  why: {
    kicker: "Why AI",
    title: "Why I *got into it*",
    quote: "Giving time back to people.",
    p1: "What motivates me is making other people's work simpler. I am comfortable with numbers when they help to decide and to support, and AI lets me automate the repetitive so I can spend more time listening to the field.",
    p2: "Since August 2026, I have been training in AI with an online video course and practising with Claude.",
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
    note: "Orders of magnitude from a case study, to be confirmed by measurements. Full version coming soon.",
  },
  contact: {
    kicker: "Contact",
    title: "Want to *talk*?",
    text: "I am looking to join a sales team in Sales Operations or Sales Enablement, in Lyon or French-speaking Switzerland, with the field, tools and AI as levers.",
  },
  keyFigures: { kicker: "Key figures", title: "In *figures*" },
  footer: "Jean-Elie · Portfolio under construction · 2026",
}

export const content: Record<Lang, Content> = { fr, en }
