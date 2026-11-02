import { useState, type ReactNode } from "react"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import {
  Bot,
  CalendarDays,
  ChefHat,
  Dumbbell,
  Ear,
  FileSpreadsheet,
  GraduationCap,
  Handshake,
  Heart,
  LayoutTemplate,
  Mail,
  Megaphone,
  MessagesSquare,
  Music,
  Palette,
  Plug,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import ShaderHero from "@/components/ui/hero"

// Apparition douce au défilement
function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

function Heading({ kicker, children, intro }: { kicker: string; children: ReactNode; intro?: string }) {
  return (
    <Reveal>
      <span className="kicker">{kicker}</span>
      <h2 className="title">{children}</h2>
      {intro && <p className="intro">{intro}</p>}
    </Reveal>
  )
}

const NAV = [
  { label: "Profil", href: "#profil" },
  { label: "Parcours", href: "#parcours" },
  { label: "Compétences", href: "#competences" },
  { label: "IA", href: "#apport" },
  { label: "Exemple", href: "#exemple" },
]

const KEYWORDS = ["Marketing", "Vente", "Événementiel", "Gestion de projet", "Coordination", "IA au service de l'humain"]

type Job = {
  company: string
  initials: string
  role: string
  contract: string
  period: string
  place: string
  points: string[]
}

const JOBS: Job[] = [
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
]

const DOMAINS = [
  {
    key: "Marketing",
    icon: <Megaphone size={26} />,
    lead: "Gagner du temps sur la préparation, garder la main sur le message.",
    uses: [
      "Briefs et plannings éditoriaux préparés plus vite",
      "Synthèses d'études et de retours clients",
      "Premières versions de contenus, relues et validées par l'humain",
    ],
  },
  {
    key: "Vente",
    icon: <Handshake size={26} />,
    lead: "Moins de saisie, plus de temps pour conseiller le client.",
    uses: [
      "Préparation des rendez-vous et des offres",
      "Suivi structuré des prospects et des contrats",
      "Moins de ressaisie entre les outils",
    ],
  },
  {
    key: "Événementiel",
    icon: <CalendarDays size={26} />,
    lead: "Un événement tient dans les détails : les suivre, sans s'y noyer.",
    uses: [
      "Rétroplannings, programmes et communications",
      "Relances et retours des participants",
      "Appuyé sur 5 à 6 événements majeurs déjà organisés",
    ],
  },
]

const CAPABILITIES = [
  { icon: <Search size={22} />, title: "Auditer un processus", text: "Cartographier les étapes, repérer les frictions, comparer les options avant de proposer de l'IA, et chiffrer une cible." },
  { icon: <Sparkles size={22} />, title: "Créer des skills", text: "Transformer une façon de travailler en instructions réutilisables que Claude applique à la demande." },
  { icon: <Bot size={22} />, title: "Créer des agents", text: "Concevoir un assistant spécialisé, comme un relecteur critique en lecture seule, et vérifier qu'il est utile." },
  { icon: <ShieldCheck size={22} />, title: "Relire et challenger", text: "Faire critiquer un livrable pour corriger les affirmations trop fortes et distinguer mesures et estimations." },
  { icon: <LayoutTemplate size={22} />, title: "Construire un site", text: "Passer d'une idée à un site présentable, avec un contexte clair et des règles de publication : celui-ci en est la preuve." },
  { icon: <Plug size={22} />, title: "Connecter ses outils", text: "Relier Claude à ses documents (Google, Notion) en lecture seule, pour garder le contrôle des données." },
]

const STEPS = [
  ["Observer", "Comprendre comment le travail se fait réellement."],
  ["Mesurer", "Chiffrer temps et erreurs, en distinguant mesures et estimations."],
  ["Proposer", "Présenter des options, leurs risques et une cible chiffrée."],
  ["Valider", "Tester sur un pilote avec les équipes. L'humain valide toujours."],
]

const LANGUAGES = [
  { name: "Français", level: "Natif", score: 5 },
  { name: "Anglais", level: "Courant", score: 4 },
  { name: "Italien", level: "Intermédiaire", score: 3 },
  { name: "Espagnol", level: "Notions", score: 2 },
]

const STUDIES = [
  { years: "2021 – 2023", title: "Master Management et développement commercial", school: "Montpellier Management", text: "Stratégie d'entreprise, développement de marchés, gestion opérationnelle." },
  { years: "2020 – 2021", title: "Licence Management stratégique", school: "Montpellier Management", text: "Analyse stratégique, traitement de données, gestion financière." },
  { years: "2018 – 2020", title: "Classe préparatoire CPGE", school: "Lycée Jean-Mermoz · ENS Paris-Saclay D2", text: "Économie, finance, mathématiques appliquées." },
]

const TOOLS = [
  { icon: <FileSpreadsheet size={18} />, group: "Bureautique", items: ["Excel", "PowerPoint", "Word"] },
  { icon: <Palette size={18} />, group: "Création", items: ["Photoshop", "InDesign", "Premiere Pro"] },
  { icon: <MessagesSquare size={18} />, group: "Collaboration", items: ["Trello", "Notion", "Slack"] },
]

function Journey() {
  const [active, setActive] = useState(0)
  const job = JOBS[active]
  return (
    <div className="tl">
      <div className="tl-tabs" role="tablist" aria-label="Expériences professionnelles">
        {JOBS.map((j, i) => (
          <button
            key={j.company}
            role="tab"
            aria-selected={i === active}
            className={`tl-tab${i === active ? " on" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="tl-dot">{j.initials}</span>
            <span className="tl-tab-text">
              <strong>{j.company}</strong>
              <small>{j.period}</small>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={job.company}
          className="tl-panel"
          role="tabpanel"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          <div className="tl-meta">
            <span>{job.period}</span>
            <span>{job.place}</span>
            <span className="tl-contract">{job.contract}</span>
          </div>
          <h3>{job.role}</h3>
          <p className="tl-company">{job.company}</p>
          <ul>
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}

function Domains() {
  const [active, setActive] = useState(0)
  const d = DOMAINS[active]
  return (
    <div className="dom">
      <div className="dom-tabs" role="tablist" aria-label="Domaines">
        {DOMAINS.map((x, i) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={i === active}
            className={`dom-tab${i === active ? " on" : ""}`}
            onClick={() => setActive(i)}
          >
            {x.key}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={d.key}
          className="dom-panel"
          role="tabpanel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.25 }}
        >
          <div className="dom-icon" aria-hidden="true">{d.icon}</div>
          <div>
            <p className="dom-lead">{d.lead}</p>
            <ul>
              {d.uses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ShaderHero
        brand="Jean-Elie"
        nav={NAV}
        contactHref="#contact"
        contactLabel="Contact"
        badge="Marketing · Vente · Événementiel"
        titleTop="Chef de projet"
        titleMain="avec l'IA"
        titleBottom="en renfort"
        description="Trois ans de coordination de projets clients et de marque sur des marchés internationaux, et une dimension IA pour que les équipes gagnent du temps pour l'humain."
        primary={{ label: "Voir mon parcours", href: "#parcours" }}
        secondary={{ label: "Ce que j'apporte", href: "#apport" }}
        badgeRingText="Marketing • Vente • Événementiel • IA • Marketing • Vente • "
      />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...KEYWORDS, ...KEYWORDS, ...KEYWORDS, ...KEYWORDS].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
      </div>

      <main>
        {/* PROFIL : deux colonnes, texte à gauche, chiffres à droite */}
        <section id="profil" className="band">
          <div className="inner">
            <Heading kicker="Profil">Qui <em>je suis</em></Heading>
            <div className="profile">
              <Reveal>
                <p className="profile-text">
                  Je coordonne des projets clients et de marque, de leur cadrage à leur exécution sur place, en
                  France, Belgique, Luxembourg et Suisse. Basé à Montpellier, je suis <strong>à la recherche d'un poste
                  salarié</strong> de chef de projet marketing, vente ou événementiel.
                </p>
                <ul className="traits">
                  <li><Ear size={20} /><span><strong>Écoute et confiance.</strong> Des relations transparentes et profondes, rapidement.</span></li>
                  <li><Users size={20} /><span><strong>Organiser et coordonner.</strong> Plusieurs projets et interlocuteurs en parallèle, en leader comme en équipier.</span></li>
                  <li><Heart size={20} /><span><strong>Créer de bons moments.</strong> Faire en sorte que chacun se sente vu et bien.</span></li>
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="figures">
                  <div><strong>3 ans</strong><span>de coordination de projets clients et de marque</span></div>
                  <div><strong>4 pays</strong><span>de territoire co-piloté</span></div>
                  <div><strong>100+</strong><span>clients B2B accompagnés</span></div>
                  <div><strong>5 à 6</strong><span>événements majeurs organisés</span></div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PARCOURS : CV interactif */}
        <section id="parcours" className="band alt">
          <div className="blob" style={{ top: -120, left: -100 }} />
          <div className="inner">
            <Heading kicker="Parcours" intro="Cliquez sur une entreprise pour voir ce que j'y ai fait.">
              Mon <em>parcours</em>
            </Heading>
            <Reveal delay={0.1}>
              <Journey />
            </Reveal>
          </div>
        </section>

        {/* COMPÉTENCES : bento */}
        <section id="competences" className="band">
          <div className="inner">
            <Heading kicker="Compétences">Formation, langues <em>et outils</em></Heading>
            <div className="bento">
              <Reveal className="bento-study">
                <div className="bento-card">
                  <h3><GraduationCap size={20} /> Formation</h3>
                  <ol className="studies">
                    {STUDIES.map((s) => (
                      <li key={s.title}>
                        <span className="years">{s.years}</span>
                        <strong>{s.title}</strong>
                        <em>{s.school}</em>
                        <p>{s.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal className="bento-lang" delay={0.08}>
                <div className="bento-card">
                  <h3>Langues</h3>
                  <ul className="langs">
                    {LANGUAGES.map((l) => (
                      <li key={l.name}>
                        <div className="lang-top"><strong>{l.name}</strong><span>{l.level}</span></div>
                        <div className="lang-bar" aria-hidden="true">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <i key={n} className={n <= l.score ? "on" : ""} />
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal className="bento-tools" delay={0.16}>
                <div className="bento-card">
                  <h3>Outils</h3>
                  {TOOLS.map((t) => (
                    <div className="tool-group" key={t.group}>
                      <span className="tool-title">{t.icon}{t.group}</span>
                      <div className="chips">
                        {t.items.map((i) => <span className="chip" key={i}>{i}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="bento-life" delay={0.24}>
                <div className="bento-card life">
                  <span><Dumbbell size={18} /> Course, basket, escalade, cyclisme, rugby</span>
                  <span><Music size={18} /> Jazz, rap, rock, gospel</span>
                  <span><ChefHat size={18} /> Cuisine</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* IA : onglets par domaine */}
        <section id="apport" className="band dark">
          <div className="blob" style={{ top: -120, right: -100, background: "var(--olive-bright)" }} />
          <div className="inner">
            <Heading
              kicker="L'IA, mon plus"
              intro="Je ne remplace pas le chef de projet : j'ajoute un appui IA sur le répétitif, pour se concentrer sur la relation, les arbitrages et les décisions."
            >
              Ce que j'apporte à <em>une équipe projet</em>
            </Heading>
            <Reveal delay={0.1}>
              <Domains />
            </Reveal>
          </div>
        </section>

        {/* CLAUDE : liste numérotée sobre */}
        <section id="claude" className="band">
          <div className="inner">
            <Heading kicker="Avec Claude" intro="Des capacités déjà mises en pratique, pas des promesses.">
              Ce que je sais <em>déjà faire</em>
            </Heading>
            <div className="caps">
              {CAPABILITIES.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 0.08}>
                  <article className="cap">
                    <span className="caps-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{c.icon}{c.title}</h3>
                      <p>{c.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal><p className="note">À venir : automatiser une tâche récurrente avec une routine planifiée.</p></Reveal>
          </div>
        </section>

        {/* POURQUOI : citation */}
        <section id="pourquoi" className="band alt">
          <div className="blob" style={{ bottom: -140, left: "30%" }} />
          <div className="inner">
            <Heading kicker="Pourquoi l'IA">Pourquoi je m'y suis <em>mis</em></Heading>
            <div className="why">
              <Reveal>
                <blockquote>Redonner du temps à l'humain.</blockquote>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Dans la vente, mes qualités relationnelles se sont retrouvées transformées en objectifs chiffrés sous
                  pression. J'y ai perdu l'envie de m'intéresser aux gens, alors que c'est ce que je fais de mieux.
                </p>
                <p>
                  J'ai aussi vu où passe le temps d'une équipe : noter, retrouver une référence, ressaisir la même
                  information. L'IA est pour moi un moyen de reprendre ce temps, pour se concentrer sur l'empathie et les
                  tâches qui ont du sens. Je ne viens pas de la technique : j'apprends en construisant, avec Claude.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MÉTHODE : étapes reliées */}
        <section id="demarche" className="band">
          <div className="inner">
            <Heading kicker="Méthode" intro="Ce n'est pas la seule, mais c'est celle que j'aime appliquer.">
              Une méthode <em>que j'apprécie</em>
            </Heading>
            <ol className="flow">
              {STEPS.map(([title, text], i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                >
                  <span className="flow-dot">{i + 1}</span>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* EXEMPLE : feuille de document */}
        <section id="exemple" className="band alt">
          <div className="blob" style={{ top: -120, right: -80 }} />
          <div className="inner">
            <Heading kicker="Exemple">Un exemple <em>de livrable</em></Heading>
            <Reveal delay={0.1}>
              <div className="sheet">
                <div className="sheet-head">
                  <span className="sheet-badge">Exemple</span>
                  <h3>Audit de la prise de commande par téléphone</h3>
                  <p>
                    Un exercice réalisé avec Claude pour illustrer ma façon de travailler : processus actuel, hypothèse,
                    alternatives comparées, risques (dont la protection des données) et pilote proposé.
                  </p>
                </div>
                <div className="sheet-metrics">
                  <div><strong>~60</strong><span>appels par jour (estimation)</span></div>
                  <div><strong>30 → 10 min</strong><span>cible de saisie par commande (à valider)</span></div>
                  <div><strong>4</strong><span>options comparées avant de choisir l'IA</span></div>
                </div>
                <p className="note">
                  Chiffres issus de souvenirs : ce sont des estimations, à remplacer par des mesures réelles. Version
                  complète à venir.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT : candidat salarié */}
        <section id="contact" className="band dark contact">
          <div className="blob" style={{ bottom: -160, right: "30%", background: "var(--sand)" }} />
          <div className="inner">
            <Reveal>
              <span className="kicker">Contact</span>
              <h2 className="title">Envie d'<em>échanger</em> ?</h2>
              <p className="intro">
                Je cherche à rejoindre une équipe comme chef de projet en marketing, vente ou événementiel, avec l'IA
                comme atout.
              </p>
              <a className="mail-btn" href="mailto:jean.elie.bargy@gmail.com">
                <Mail size={20} /> jean.elie.bargy@gmail.com
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>Jean-Elie · Portfolio en construction · 2026</footer>
    </MotionConfig>
  )
}
