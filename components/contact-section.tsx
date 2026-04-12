"use client"

import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"

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
    icon: MessageCircle,
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
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8">
              <span className="text-xs text-white/60 uppercase tracking-widest">Contato</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-[1.2]">
              Vamos <span className="font-medium">conversar</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl leading-relaxed">
              Entre em contato para solicitar um orçamento ou tirar suas dúvidas.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {contactInfo.map((info, index) => (
              <Link
                key={index}
                href={info.href}
                className="group glass-light rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <info.icon className="w-4 h-4 text-white/50" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
                <h3 className="text-xs text-white/40 uppercase tracking-widest mb-2">{info.label}</h3>
                <p className="text-sm font-medium text-white">{info.value}</p>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/5">
            <p className="text-sm text-white/40">Conecte-se nas redes sociais</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-light hover:bg-white/[0.06] transition-all duration-300 text-white/60 hover:text-white text-sm"
                >
                  <social.icon className="w-4 h-4" />
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
