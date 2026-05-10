"use client"

import { useEffect, useRef, useState } from "react"
import {
  Cpu,
  Lightbulb,
  Settings,
  Shield,
  Smartphone,
  Thermometer,
  Wifi,
  Zap,
} from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Iluminação Inteligente",
    description: "Controle completo via smartphone com cenas personalizadas e automações por rotina.",
    detail: "Cenas, sensores e acionamentos integrados.",
  },
  {
    icon: Thermometer,
    title: "Climatização",
    description: "Integração de ar-condicionado, cortinas e sensores para ambientes mais eficientes.",
    detail: "Conforto térmico com controle automatizado.",
  },
  {
    icon: Smartphone,
    title: "Controle Remoto",
    description: "Monitoramento e acionamento de sistemas de qualquer lugar, com resposta em tempo real.",
    detail: "Operação remota por interface simples.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Câmeras, alarmes e sensores integrados com alertas e registro de eventos.",
    detail: "Alertas e leitura de eventos críticos.",
  },
  {
    icon: Cpu,
    title: "Painéis Elétricos",
    description: "Projeto, montagem e comissionamento de painéis para ambientes industriais.",
    detail: "Montagem organizada e preparada para manutenção.",
  },
  {
    icon: Settings,
    title: "Manutenção",
    description: "Rotinas preventivas e corretivas para reduzir falhas e paradas de operação.",
    detail: "Rotina técnica para operação contínua.",
  },
  {
    icon: Wifi,
    title: "Integração IoT",
    description: "Conexão de sensores, controladores e supervisórios em uma plataforma inteligente.",
    detail: "Dados conectados para decisão rápida.",
  },
  {
    icon: Zap,
    title: "Eficiência",
    description: "Soluções para otimização de consumo, desempenho elétrico e confiabilidade.",
    detail: "Menos desperdício, mais desempenho.",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div
          className="mx-auto mb-14 max-w-3xl text-center"
          style={{
            animation: isVisible ? "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
            opacity: 0,
          }}
        >
          <h2 className="mb-5 text-3xl font-black leading-tight tracking-normal text-white md:text-4xl">
            Soluções em <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] bg-clip-text text-transparent">automação</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Estruturas elétricas e sistemas inteligentes para residências, indústrias e operações
            que precisam de confiabilidade no dia a dia.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative min-h-[214px] cursor-pointer overflow-hidden rounded-[22px] border border-white/10 bg-[#101010] p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:bg-[#141414]"
              style={{
                animation: isVisible
                  ? `fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.12 + index * 0.07}s forwards`
                  : "none",
                opacity: 0,
              }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              </div>

              <div className="relative mb-8 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/10">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-black tracking-[0.18em] text-white/20 transition-colors duration-500 group-hover:text-primary/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative">
                <h3 className="mb-3 text-base font-black text-white">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/55">{service.description}</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="text-xs font-semibold leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                    {service.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
