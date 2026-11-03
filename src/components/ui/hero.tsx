"use client"
import { useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"

type NavItem = { label: string; href: string }

type ShaderHeroProps = {
  brand: string
  nav: NavItem[]
  contactHref: string
  contactLabel: string
  badge: string
  titleTop: string
  titleMain: string
  titleBottom: string
  description: string
  primary: NavItem
  secondary: NavItem
  lang: "fr" | "en"
  onLangChange: (lang: "fr" | "en") => void
  langAria: string
  menuAria: string
}

// Palette kaki du site : vert forêt, olive, sable
const FOREST = "#141a10"
const MESH_MAIN = [FOREST, "#5a6b2e", "#7f9440", "#2e3a22", "#b9c47c"]
const MESH_LIGHT = [FOREST, "#f3f2e6", "#7f9440", "#c9b26b"]

export default function ShaderHero({
  brand,
  nav,
  contactHref,
  contactLabel,
  badge,
  titleTop,
  titleMain,
  titleBottom,
  description,
  primary,
  secondary,
  lang,
  onLangChange,
  langAria,
  menuAria,
}: ShaderHeroProps) {
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div id="accueil" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#141a10]">
      <svg className="absolute inset-0 h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={MESH_MAIN}
        speed={reduceMotion ? 0 : 0.3}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-40"
        colors={MESH_LIGHT}
        speed={reduceMotion ? 0 : 0.2}
      />
      {/* Voile pour garder le texte lisible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141a10]/90 via-[#141a10]/30 to-transparent" />

      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-4 py-4 transition-all duration-300 md:px-8 ${
          scrolled || menuOpen ? "bg-[#141a10]/90 py-3 shadow-lg shadow-black/30 backdrop-blur" : ""
        }`}
      >
        <a href="#accueil" className="text-lg font-bold tracking-tight text-white">
          {brand}
        </a>

        <nav className="hidden items-center space-x-1 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-light text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
        <div
          role="group"
          aria-label={langAria}
          className="flex items-center rounded-full border border-white/25 bg-white/5 p-0.5 text-xs backdrop-blur-sm"
        >
          {(["fr", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => onLangChange(code)}
              aria-pressed={lang === code}
              className={`cursor-pointer rounded-full px-3.5 py-2 font-semibold uppercase transition-colors duration-200 ${
                lang === code ? "bg-[#c9b26b] text-[#141a10]" : "text-white hover:bg-white/15"
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        <div className="group relative hidden items-center sm:flex" style={{ filter: "url(#gooey-filter)" }}>
          <a
            href={contactHref}
            aria-hidden="true"
            tabIndex={-1}
            className="absolute right-0 z-0 flex h-8 -translate-x-10 items-center justify-center rounded-full bg-[#c9b26b] px-2.5 py-2 text-[#141a10] transition-all duration-300 group-hover:-translate-x-[4.5rem]"
          >
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href={contactHref}
            className="z-10 flex h-8 items-center rounded-full bg-[#c9b26b] px-6 py-2 text-xs font-medium text-[#141a10] transition-all duration-300 hover:bg-[#d6c58a]"
          >
            {contactLabel}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuAria}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15 lg:hidden"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
        </div>

        {menuOpen && (
          <nav
            id="menu-mobile"
            aria-label="Navigation principale"
            className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-white/10 bg-[#141a10]/95 px-4 py-3 backdrop-blur lg:hidden"
          >
            {[...nav, { label: contactLabel, href: contactHref }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-white/90 transition-colors hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <div className="relative z-20 mt-auto px-4 pb-12 pt-32 md:px-8 md:pb-16">
        <div className="max-w-3xl text-left">
          <motion.div
            className="relative mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
            style={{ filter: "url(#glass-effect)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute left-1 right-1 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-[#c9b26b]/50 to-transparent" />
            <span className="relative z-10 text-sm font-medium tracking-wide text-white/90">{badge}</span>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold leading-none tracking-tight text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="mb-2 block text-3xl font-light tracking-wider md:text-5xl lg:text-6xl"
              style={{
                background: "linear-gradient(135deg, #f3f2e6 0%, #b9c47c 30%, #c9b26b 70%, #f3f2e6 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
              animate={reduceMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {titleTop}
            </motion.span>
            <span className="block font-black text-white drop-shadow-2xl">{titleMain}</span>
            <span className="block font-light italic text-white/80">{titleBottom}</span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-lg font-light leading-relaxed text-white/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href={secondary.href}
              className="rounded-full border-2 border-white/30 bg-transparent px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#c9b26b]/60 hover:bg-white/10 hover:text-[#f3f2e6]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {secondary.label}
            </motion.a>
            <motion.a
              href={primary.href}
              className="rounded-full bg-gradient-to-r from-[#7f9440] to-[#c9b26b] px-8 py-3.5 text-sm font-semibold text-[#141a10] shadow-lg transition-all duration-300 hover:from-[#93aa4c] hover:to-[#d6c58a] hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {primary.label}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
