"use client"

import { useEffect, useState } from "react"
import { Cpu, ShieldCheck, Zap } from "lucide-react"

const pillars = [
  { icon: Zap, label: "Elétrica" },
  { icon: Cpu, label: "Automação" },
  { icon: ShieldCheck, label: "Tecnologia" },
]

export function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 350)
    const timer2 = setTimeout(() => setAnimationPhase(2), 1050)
    const timer3 = setTimeout(() => setAnimationPhase(3), 1750)
    const timer4 = setTimeout(() => setIsVisible(false), 3200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#020817]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#020817_0%,#061a3d_48%,#0b63ce_100%)]" />
      <div className="blue-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,rgba(75,215,255,0.14),transparent)]" />

      <div className="relative z-10 px-4 text-center">
        <div
          className={`mb-10 transition-all duration-1000 ${
            animationPhase >= 1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-primary/25 bg-primary/10 shadow-[0_0_70px_rgba(75,215,255,0.22)] md:h-32 md:w-32">
            <span className="bg-gradient-to-br from-primary via-[#a7f0ff] to-[#147ce3] bg-clip-text text-7xl font-black tracking-tighter text-transparent md:text-8xl">
              K
            </span>
          </div>
        </div>

        <div
          className={`mb-5 overflow-hidden transition-opacity delay-300 duration-700 ${
            animationPhase >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl font-black tracking-normal text-white md:text-6xl lg:text-7xl">
            {"Ikaro Karkachi".split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="inline-block"
                style={{
                  color: letter === " " ? "transparent" : undefined,
                  animation:
                    animationPhase >= 2
                      ? `letterReveal 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.04}s forwards`
                      : "none",
                  opacity: 0,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>

        <p
          className={`text-sm font-bold uppercase tracking-[0.28em] text-primary/80 transition-all delay-500 duration-700 md:text-lg ${
            animationPhase >= 2 ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          Engenharia • Automação • Tecnologia
        </p>

        <div
          className={`mx-auto mt-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all delay-700 duration-1000 ${
            animationPhase >= 2 ? "w-40 opacity-100" : "w-0 opacity-0"
          }`}
        />

        <div
          className={`mt-10 flex justify-center gap-4 transition-all delay-1000 duration-700 md:gap-6 ${
            animationPhase >= 3 ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          {pillars.map((item) => (
            <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
              <item.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-primary via-[#147ce3] to-primary transition-all duration-[3200ms] ease-out"
          style={{ width: animationPhase >= 1 ? "100%" : "0%" }}
        />
      </div>
    </div>
  )
}
