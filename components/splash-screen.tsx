"use client"

import { useEffect, useState } from "react"

export function SplashScreen() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit" | "done">("loading")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Lock scrolling while splash screen is active
    document.body.style.overflow = "hidden"

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Increment by a random amount for a more realistic loading feel
        return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100)
      })
    }, 80) // update every 80ms

    // Phase Transitions
    const revealTimer = setTimeout(() => setPhase("reveal"), 1500)
    const exitTimer = setTimeout(() => setPhase("exit"), 4000)
    const doneTimer = setTimeout(() => {
      setPhase("done")
      document.body.style.overflow = ""
    }, 5200)

    return () => {
      clearInterval(interval)
      clearTimeout(revealTimer)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = ""
    }
  }, [])

  if (phase === "done") return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] transition-transform duration-[1200ms] ${
        phase === "exit" ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)" }}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {/* ======================= */}
        {/* PHASE 1: LOADING SCREEN */}
        {/* ======================= */}
        <div
          className={`absolute flex flex-col items-center transition-all duration-700 ease-out ${
            phase === "loading"
              ? "opacity-100 scale-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <div className="mb-4 text-5xl font-light tracking-widest text-white/80 md:text-6xl" style={{ fontVariantNumeric: "tabular-nums" }}>
            {progress.toString().padStart(3, "0")}
            <span className="text-2xl text-primary/50">%</span>
          </div>
          
          <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10 md:w-64">
            <div
              className="h-full bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 animate-pulse">
            Iniciando sistemas...
          </p>
        </div>

        {/* ======================= */}
        {/* PHASE 2: LOGO REVEAL    */}
        {/* ======================= */}
        <div
          className={`absolute flex flex-col items-center text-center transition-all duration-[1200ms] ease-out ${
            phase === "reveal" || phase === "exit"
              ? "opacity-100 scale-100"
              : "pointer-events-none scale-105 opacity-0"
          }`}
        >
          {/* Background Subtle Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />

          {/* High-Quality SVG "K" Logo */}
          <div className="relative mb-8 h-32 w-32 md:h-40 md:w-40">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full drop-shadow-[0_0_30px_rgba(14,165,233,0.35)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="splash-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#splash-grad)"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontSize="90"
                fontWeight="bold"
              >
                K
              </text>
            </svg>
          </div>

          <h1 className="text-3xl font-medium tracking-widest text-white md:text-5xl">
            Ikaro Karkachi
          </h1>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50 md:mt-6 md:text-[11px]">
            Engenharia <span className="mx-3 text-primary/40">•</span> Automação
          </p>
          
          <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:w-32" />
        </div>
      </div>
    </div>
  )
}
