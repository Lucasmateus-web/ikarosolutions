"use client"

import { useState, useEffect } from "react"

export function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 500)
    const timer2 = setTimeout(() => setAnimationPhase(2), 1500)
    const timer3 = setTimeout(() => setAnimationPhase(3), 2500)
    const timer4 = setTimeout(() => setIsVisible(false), 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0b] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full transition-all duration-1000 ${
            animationPhase >= 1 ? "opacity-20" : "opacity-0"
          }`}
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: animationPhase >= 1 ? "scale(1)" : "scale(0.5)",
          }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full transition-all duration-1000 delay-300 ${
            animationPhase >= 1 ? "opacity-20" : "opacity-0"
          }`}
          style={{
            background: "radial-gradient(circle, rgba(13,115,119,0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: animationPhase >= 1 ? "scale(1)" : "scale(0.5)",
          }}
        />
        <div 
          className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full transition-all duration-1000 delay-500 ${
            animationPhase >= 1 ? "opacity-15" : "opacity-0"
          }`}
          style={{
            background: "radial-gradient(circle, rgba(184,115,51,0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: animationPhase >= 1 ? "scale(1)" : "scale(0.5)",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          animationPhase >= 1 ? "opacity-[0.03]" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo Mark */}
        <div 
          className={`mb-12 transition-all duration-1000 ${
            animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block">
            <span 
              className="text-8xl md:text-9xl font-bold tracking-tighter"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #e5c76b 30%, #b87333 60%, #d4af37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 80px rgba(212,175,55,0.5)",
              }}
            >
              K
            </span>
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 blur-3xl -z-10"
              style={{
                background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>

        {/* Name with Letter Animation */}
        <div 
          className={`overflow-hidden mb-6 transition-all duration-700 delay-500 ${
            animationPhase >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
            {"Ikaro Karkachi".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  color: letter === " " ? "transparent" : "#fafafa",
                  animation: animationPhase >= 2 
                    ? `letterReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s forwards`
                    : "none",
                  opacity: 0,
                  transform: animationPhase >= 2 ? undefined : "translateY(50px)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <div 
          className={`transition-all duration-700 delay-1000 ${
            animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-lg md:text-xl text-white/50 font-light tracking-[0.3em] uppercase">
            Engenharia · Automação · Tecnologia
          </p>
        </div>

        {/* Decorative Line */}
        <div 
          className={`mt-12 mx-auto h-px transition-all duration-1000 delay-700 ${
            animationPhase >= 2 ? "w-32 opacity-100" : "w-0 opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />

        {/* Three Pillars */}
        <div 
          className={`mt-12 flex justify-center gap-8 md:gap-16 transition-all duration-700 delay-1200 ${
            animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {[
            { icon: "⚡", label: "Elétrica", color: "#d4af37" },
            { icon: "⚙️", label: "Automação", color: "#0d7377" },
            { icon: "💡", label: "Tecnologia", color: "#b87333" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="text-center"
              style={{
                animation: animationPhase >= 3 
                  ? `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${1500 + index * 150}ms forwards`
                  : "none",
                opacity: 0,
              }}
            >
              <div 
                className="text-2xl mb-2"
                style={{ 
                  filter: `drop-shadow(0 0 10px ${item.color}40)`,
                }}
              >
                {item.icon}
              </div>
              <span 
                className="text-xs uppercase tracking-widest"
                style={{ color: item.color }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div 
        className={`absolute top-8 left-8 w-16 h-16 border-l border-t transition-all duration-1000 ${
          animationPhase >= 1 ? "opacity-30 border-[#d4af37]" : "opacity-0 border-white/10"
        }`}
      />
      <div 
        className={`absolute top-8 right-8 w-16 h-16 border-r border-t transition-all duration-1000 ${
          animationPhase >= 1 ? "opacity-30 border-[#d4af37]" : "opacity-0 border-white/10"
        }`}
      />
      <div 
        className={`absolute bottom-8 left-8 w-16 h-16 border-l border-b transition-all duration-1000 ${
          animationPhase >= 1 ? "opacity-30 border-[#d4af37]" : "opacity-0 border-white/10"
        }`}
      />
      <div 
        className={`absolute bottom-8 right-8 w-16 h-16 border-r border-b transition-all duration-1000 ${
          animationPhase >= 1 ? "opacity-30 border-[#d4af37]" : "opacity-0 border-white/10"
        }`}
      />

      {/* Loading Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
        <div 
          className="h-full transition-all duration-[4000ms] ease-out"
          style={{
            background: "linear-gradient(90deg, #d4af37, #b87333, #0d7377)",
            width: animationPhase >= 1 ? "100%" : "0%",
          }}
        />
      </div>
    </div>
  )
}
