import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { WhatsAppIcon } from "@/components/whatsapp-icon"

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
]

const socialLinks = [
  { href: "https://wa.me/5581991551107", label: "WhatsApp", Icon: WhatsAppIcon },
  { href: "https://instagram.com/karkachi.tech", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com/in/ikaro-karkachi", label: "LinkedIn", Icon: Linkedin },
]

const contactItems = [
  { href: "tel:+5581991551107", label: "Telefone", value: "(81) 99155-1107", Icon: Phone },
  { href: "mailto:ikaro123dosantos@gmail.com", label: "Email", value: "ikaro123dosantos@gmail.com", Icon: Mail },
  { href: "https://maps.google.com/?q=Jaboatao%20dos%20Guararapes%20PE", label: "Localização", value: "Jaboatão dos Guararapes, PE", Icon: MapPin },
]

export function Footer() {
  return (
    <footer id="contato-form" className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr_0.7fr_1fr]">
          <div>
            <Link href="#inicio" aria-label="Voltar para o início" className="mb-9 block w-[252px] max-w-full">
              <Image
                src="/ikaro-logo-menu-cropped.png"
                alt="Karkachi Soluções em Engenharia Elétrica"
                width={966}
                height={357}
                className="h-auto w-full object-contain object-left"
              />
            </Link>

            <h3 className="max-w-md text-[1.42rem] font-black leading-tight text-white md:text-[1.62rem]">
              Engenharia que <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] bg-clip-text text-transparent">conecta soluções</span>
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/48">
              Soluções em engenharia elétrica, automação industrial e IoT para empresas que precisam
              de eficiência, segurança e operação confiável.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white/52 transition-all duration-300 hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé" className="lg:pt-8">
            <h3 className="mb-7 text-xs font-black uppercase tracking-[0.18em] text-white/34">
              Navegação
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/56 transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:pt-8">
            <h3 className="mb-7 text-xs font-black uppercase tracking-[0.18em] text-white/34">
              Contato
            </h3>
            <ul className="space-y-5">
              {contactItems.map(({ href, label, value, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("https://maps") ? "_blank" : undefined}
                    rel={href.startsWith("https://maps") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 text-sm text-white/56 transition-colors duration-300 hover:text-white"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white/38 transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Karkachi Tecnologia & Automação. Todos os direitos reservados.</p>
          <p>Engenharia Elétrica · Automação Industrial · IoT</p>
        </div>

        <p className="mt-7 text-center text-[10px] text-white/20">
          Desenvolvido por{" "}
          <a
            href="https://mateus.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary"
          >
            mateus.dev
          </a>
        </p>
      </div>
    </footer>
  )
}
