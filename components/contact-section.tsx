"use client"

import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(81) 99155-1107",
    href: "tel:+5581991551107",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ikaro123dosantos@gmail.com",
    href: "mailto:ikaro123dosantos@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Jaboatão dos Guararapes, PE",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: "https://wa.me/5581991551107",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ikaro-karkachi",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/karkachi.tech",
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="section-band relative overflow-hidden py-28 md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Contato</span>
            </div>
            <h2 className="mb-5 text-3xl font-black leading-tight tracking-normal text-white md:text-4xl">
              Vamos tirar sua ideia do <span className="text-primary">painel</span>
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              Entre em contato para solicitar orçamento, falar sobre automação ou avaliar uma
              solução elétrica com foco em segurança e performance.
            </p>
          </div>

          <div className="mb-12 grid gap-4 md:grid-cols-3">
            {contactInfo.map((info) => (
              <Link
                key={info.label}
                href={info.href}
                className="group rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.075]"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/20">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-white/50">
                  {info.label}
                </h3>
                <p className="break-words text-sm font-semibold text-white">{info.value}</p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-white/50">Conecte-se nas redes sociais</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 text-sm text-white/70 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-primary/20 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                  <span>{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
