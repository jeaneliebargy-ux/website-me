"use client"
import { useEffect, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

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
  badgeRingText: string
  lang: "fr" | "en"
  onLangChange: (lang: "fr" | "en") => void
  langAria: string
}

// Palette kaki du site : vert forêt, olive, sable
const FOREST = "#141a10"
const MESH_MAIN = [FOREST, "#5a6b2e", "#7f9440", "#2e3a22", "#b9c47c"]
const MESH_LIGHT = [FOREST, "#f3f2e6", "#7f9440", "#c9b26b"]
const RING = ["#b9c47c", "#7f9440", "#5a6b2e", "#c9b26b", "#f3f2e6"]

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
  badgeRingText,
  lang,
  onLangChange,
  langAria,
}: ShaderHeroProps) {
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)

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
          scrolled ? "bg-[#141a10]/90 py-3 shadow-lg shadow-black/30 backdrop-blur" : ""
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
              className={`rounded-full px-3 py-1.5 font-semibold uppercase transition-colors duration-200 ${
                lang === code ? "bg-[#c9b26b] text-[#141a10]" : "text-white/80 hover:text-white"
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        <div className="group relative flex items-center" style={{ filter: "url(#gooey-filter)" }}>
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
        </div>
      </header>

      <div className="relative z-20 mt-auto px-4 pb-12 pt-32 md:px-8 md:pb-16">
        <div className="max-w-2xl text-left">
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

      <div className="absolute bottom-8 right-8 z-30 hidden md:block" aria-hidden="true">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <PulsingBorder
            colors={RING}
            colorBack="#00000000"
            speed={reduceMotion ? 0 : 1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spots={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />

          <motion.svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="ring-text-path" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-white/80 text-[9px] font-medium">
              <textPath href="#ring-text-path" startOffset="0%">
                {badgeRingText}
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
