"use client"

import Image from "next/image"
import { CheckCircle2, Zap } from "lucide-react"

const certifications = [
  "Engenheiro Eletricista (Graduação)",
  "Pós-Graduação em Automação e Controle",
  "Especialista em CLP (Controlador Lógico Programável) e IHM",
  "Expert em Comandos Elétricos e Acionamentos",
  "Certificação NR-10 (Segurança em Instalações e Serviços em Eletricidade)",
  "Consultor em NBR 5410 (Instalações Elétricas de Baixa Tensão)",
  "Projetista e Inspetor em NBR 5419 (Proteção contra Descargas Atmosféricas - SPDA)",
  "Desenvolvimento de Sistemas IoT e Integração de Sensores",
]

export function AboutSection() {
  return (
    <section id="sobre" className="section-band relative overflow-hidden py-24 md:py-28">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[420px_1fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[26px] border border-white/10 bg-[#111] shadow-[0_26px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/ikaro-profile.jpg"
                alt="Ikaro Karkachi - engenheiro eletricista"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-[18px] border border-white/10 bg-black/70 p-4 backdrop-blur-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white">Ikaro Karkachi</h4>
                  <p className="text-xs text-white/60">Engenheiro Eletricista • Automação</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[560px] lg:mx-0">
            <h2 className="mb-7 text-3xl font-black leading-tight tracking-normal text-white md:text-[2.35rem]">
              Sobre <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] bg-clip-text text-transparent">Minha Carreira</span>
            </h2>

            <div className="mb-9 space-y-5 text-sm leading-7 text-white/70 md:text-[15px]">
              <p>
                Com uma sólida trajetória acadêmica e técnica na Engenharia Elétrica, dedico minha
                atuação ao desenvolvimento de soluções inteligentes em automação, controle
                industrial e infraestrutura elétrica.
              </p>
              <p>
                Meu foco é integrar tecnologia, confiabilidade operacional e conformidade com normas
                de segurança para transformar desafios técnicos em sistemas eficientes e preparados
                para a rotina real de campo.
              </p>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#141414] p-6 md:p-7">
              <h3 className="mb-6 text-[13px] font-black uppercase tracking-[0.16em] bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] bg-clip-text text-transparent w-fit">
                Certificações e especializações
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-snug text-white/80">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
