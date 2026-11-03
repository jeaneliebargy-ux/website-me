import { Fragment, useEffect, useState, type ReactNode } from "react"
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
import { content, type Content, type Job, type Lang } from "@/content"

const EMAIL = "jean.elie.bargy@gmail.com"

// Icônes, dans le même ordre que les listes de content.ts
const TRAIT_ICONS = [<Ear size={20} />, <Users size={20} />, <Heart size={20} />]
const DOMAIN_ICONS = [<CalendarDays size={26} />, <Megaphone size={26} />, <Handshake size={26} />]
const CAP_ICONS = [
  <Search size={22} />,
  <Sparkles size={22} />,
  <Bot size={22} />,
  <ShieldCheck size={22} />,
  <LayoutTemplate size={22} />,
  <Plug size={22} />,
]
const GLANCE_ICONS = [<CalendarDays size={22} />, <Megaphone size={22} />, <Handshake size={22} />, <Sparkles size={22} />]
const TOOL_ICONS = [<FileSpreadsheet size={18} />, <Palette size={18} />, <MessagesSquare size={18} />]
const LIFE_ICONS = [<Dumbbell size={18} />, <Music size={18} />, <ChefHat size={18} />]

// "Qui *je suis*" -> "Qui " + <em>je suis</em>
function em(text: string): ReactNode {
  return text.split("*").map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>))
}

// "texte **gras** texte" -> <strong>gras</strong>
function bold(text: string): ReactNode {
  return text.split("**").map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>))
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang")
    if (saved === "fr" || saved === "en") return saved
  } catch {
    // stockage indisponible : on ignore
  }
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en"
}

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

function Heading({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <Reveal>
      <span className="kicker">{kicker}</span>
      <h2 className="title">{em(title)}</h2>
      {intro && <p className="intro">{intro}</p>}
    </Reveal>
  )
}

function Journey({ jobs, tablist }: { jobs: Job[]; tablist: string }) {
  const [active, setActive] = useState(0)
  const job = jobs[active] ?? jobs[0]
  return (
    <div className="tl">
      <div className="tl-tabs" role="tablist" aria-label={tablist}>
        {jobs.map((j, i) => (
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
          key={job.company + job.role}
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

function Domains({ domains, tablist }: { domains: Content["ai"]["domains"]; tablist: string }) {
  const [active, setActive] = useState(0)
  const d = domains[active] ?? domains[0]
  return (
    <div className="dom">
      <div className="dom-tabs" role="tablist" aria-label={tablist}>
        {domains.map((x, i) => (
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
          <div className="dom-icon" aria-hidden="true">{DOMAIN_ICONS[active]}</div>
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
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = content[lang]

  // Langue de la page, titre de l'onglet et description suivent le choix
  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.docTitle
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.docDescription)
    try {
      localStorage.setItem("lang", lang)
    } catch {
      // stockage indisponible : on ignore
    }
  }, [lang, t])

  return (
    <MotionConfig reducedMotion="user">
      <ShaderHero
        brand="Jean-Elie"
        nav={t.nav}
        contactHref="#contact"
        contactLabel={t.contactLabel}
        badge={t.hero.badge}
        titleTop={t.hero.titleTop}
        titleMain={t.hero.titleMain}
        titleBottom={t.hero.titleBottom}
        description={t.hero.description}
        primary={{ label: t.hero.primary, href: "#parcours" }}
        secondary={{ label: t.hero.secondary, href: "#apport" }}
        lang={lang}
        onLangChange={setLang}
        langAria={t.langAria}
        menuAria={t.menuAria}
      />

      <div className="glance">
        {t.glance.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="glance-card">
              <span className="glance-icon" aria-hidden="true">{GLANCE_ICONS[i]}</span>
              <div>
                <strong>{g.title}</strong>
                <span>{g.text}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <main>
        {/* PROFIL */}
        <section id="profil" className="band">
          <div className="inner">
            <Heading kicker={t.profile.kicker} title={t.profile.title} />
            <div className="profile">
              <Reveal>
                <p className="profile-text">{bold(t.profile.text)}</p>
                <ul className="traits">
                  {t.profile.traits.map((tr, i) => (
                    <li key={tr.title}>
                      {TRAIT_ICONS[i]}
                      <span><strong>{tr.title}</strong> {tr.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="figures">
                  {t.profile.figures.map((f) => (
                    <div key={f.value}><strong>{f.value}</strong><span>{f.label}</span></div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PARCOURS */}
        <section id="parcours" className="band alt">
          <div className="blob" style={{ top: -120, left: -100 }} />
          <div className="inner">
            <Heading kicker={t.journey.kicker} title={t.journey.title} intro={t.journey.intro} />
            <Reveal delay={0.1}>
              <Journey jobs={t.journey.jobs} tablist={t.journey.tablist} />
            </Reveal>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section id="competences" className="band">
          <div className="inner">
            <Heading kicker={t.skills.kicker} title={t.skills.title} />
            <div className="bento">
              <Reveal className="bento-study">
                <div className="bento-card">
                  <h3><GraduationCap size={20} /> {t.skills.studiesTitle}</h3>
                  <ol className="studies">
                    {t.skills.studies.map((s) => (
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
                  <h3>{t.skills.languagesTitle}</h3>
                  <ul className="langs">
                    {t.skills.languages.map((l) => (
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
                  <h3>{t.skills.toolsTitle}</h3>
                  {t.skills.tools.map((tool, i) => (
                    <div className="tool-group" key={tool.group}>
                      <span className="tool-title">{TOOL_ICONS[i]}{tool.group}</span>
                      <div className="chips">
                        {tool.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="bento-life" delay={0.24}>
                <div className="bento-card life">
                  {t.skills.life.map((text, i) => (
                    <span key={text}>{LIFE_ICONS[i]} {text}</span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* IA : onglets par domaine */}
        <section id="apport" className="band dark">
          <div className="blob" style={{ top: -120, right: -100, background: "var(--olive-bright)" }} />
          <div className="inner">
            <Heading kicker={t.ai.kicker} title={t.ai.title} intro={t.ai.intro} />
            <Reveal delay={0.1}>
              <Domains domains={t.ai.domains} tablist={t.ai.tablist} />
            </Reveal>
          </div>
        </section>

        {/* CLAUDE */}
        <section id="claude" className="band">
          <div className="inner">
            <Heading kicker={t.claude.kicker} title={t.claude.title} intro={t.claude.intro} />
            <div className="caps">
              {t.claude.caps.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 0.08}>
                  <article className="cap">
                    <span className="caps-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{CAP_ICONS[i]}{c.title}</h3>
                      <p>{c.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal><p className="note">{t.claude.soon}</p></Reveal>
          </div>
        </section>

        {/* POURQUOI */}
        <section id="pourquoi" className="band alt">
          <div className="blob" style={{ bottom: -140, left: "30%" }} />
          <div className="inner">
            <Heading kicker={t.why.kicker} title={t.why.title} />
            <div className="why">
              <Reveal>
                <blockquote>{t.why.quote}</blockquote>
              </Reveal>
              <Reveal delay={0.1}>
                <p>{t.why.p1}</p>
                <p>{t.why.p2}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MÉTHODE */}
        <section id="demarche" className="band">
          <div className="inner">
            <Heading kicker={t.method.kicker} title={t.method.title} intro={t.method.intro} />
            <ol className="flow">
              {t.method.steps.map(([title, text], i) => (
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

        {/* EXEMPLE */}
        <section id="exemple" className="band alt">
          <div className="blob" style={{ top: -120, right: -80 }} />
          <div className="inner">
            <Heading kicker={t.example.kicker} title={t.example.title} />
            <Reveal delay={0.1}>
              <div className="sheet">
                <div className="sheet-head">
                  <span className="sheet-badge">{t.example.badge}</span>
                  <h3>{t.example.headline}</h3>
                  <p>{t.example.text}</p>
                </div>
                <div className="sheet-metrics">
                  {t.example.metrics.map((m) => (
                    <div key={m.value}><strong>{m.value}</strong><span>{m.label}</span></div>
                  ))}
                </div>
                <p className="note">{t.example.note}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="band dark contact">
          <div className="blob" style={{ bottom: -160, right: "30%", background: "var(--sand)" }} />
          <div className="inner">
            <Reveal>
              <span className="kicker">{t.contact.kicker}</span>
              <h2 className="title">{em(t.contact.title)}</h2>
              <p className="intro">{t.contact.text}</p>
              <a className="mail-btn" href={`mailto:${EMAIL}`}>
                <Mail size={20} /> {EMAIL}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>{t.footer}</footer>
    </MotionConfig>
  )
}
