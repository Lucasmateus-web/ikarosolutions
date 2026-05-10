"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

function TypewriterText({ phrases }: { phrases: string[] }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[currentPhraseIndex]

        if (!isDeleting) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))

          if (currentText.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1800)
          }
        } else {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1))

          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 35 : 70,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex, phrases])

  return (
    <p className="mx-auto flex min-h-10 max-w-3xl items-center justify-center text-base font-medium tracking-wide text-white/80 md:text-xl">
      {currentText}
      <span className="ml-1 h-[1.15em] w-[3px] bg-primary" />
    </p>
  )
}

const socialLinks = [
  {
    href: "https://wa.me/5581991551107",
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    href: "https://instagram.com/karkachi.tech",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://linkedin.com/in/ikaro-karkachi",
    label: "LinkedIn",
    icon: Linkedin,
  },
]

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[94svh] items-center justify-center overflow-hidden bg-background"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.jpg"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
      >
        <source src="/WhatsApp Video 2026-04-12 at 13.19.29.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/[0.84]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.55)_0%,rgba(5,5,5,0.2)_42%,#050505_100%)]" />

      <div className="container relative z-10 mx-auto px-4 pb-16 pt-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/70 backdrop-blur-md animate-fade-in-up">
            Engenharia & Automação
          </div>

          <h1 className="glow-text mb-5 text-[clamp(2.35rem,7.2vw,5.8rem)] font-black leading-[0.95] tracking-normal text-white animate-fade-in-up stagger-1">
            IKARO<span className="bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] bg-clip-text text-transparent">.KARKACHI</span>
          </h1>

          <div className="mb-10 w-full animate-fade-in-up stagger-2">
            <TypewriterText
              phrases={[
                "Engenharia elétrica, automação industrial e IoT",
                "Infraestrutura segura com controle inteligente",
              ]}
            />
          </div>

          <div className="mb-10 flex items-center justify-center gap-3 animate-fade-in-up stagger-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-white/80 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.09] hover:text-primary"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up stagger-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full border-none bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] px-7 text-sm font-bold text-white shadow-none btn-lift hover:opacity-90"
            >
              <Link href="#contato" className="inline-flex items-center gap-2">
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/10 bg-white/[0.055] px-7 text-sm font-semibold text-white backdrop-blur-md btn-lift hover:bg-white/[0.1] hover:text-white"
            >
              <Link href="#projetos">Ver projetos</Link>
            </Button>
          </div>
        </div>
      </div>

      <Link
        href="#sobre"
        aria-label="Ir para a próxima seção"
        className="absolute bottom-5 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-md transition-colors hover:text-primary"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </Link>
    </section>
  )
}
