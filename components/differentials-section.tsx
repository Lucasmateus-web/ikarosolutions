"use client"

import { CheckCircle2, Cog, Sparkles, Target, Zap } from "lucide-react"

const differentials = [
  {
    icon: CheckCircle2,
    title: "Confiabilidade",
    description: "Sistemas robustos testados para funcionamento contínuo em campo.",
  },
  {
    icon: Target,
    title: "Personalização",
    description: "Cada solução é desenhada para o processo, o ambiente e a demanda real.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia",
    description: "Integração de automação, sensores, CLP, IHM e IoT com visão prática.",
  },
  {
    icon: Cog,
    title: "Experiência",
    description: "Vivência em ambientes industriais, infraestrutura elétrica e manutenção.",
  },
  {
    icon: Zap,
    title: "Eficiência",
    description: "Projetos focados em reduzir falhas, consumo e tempo de resposta.",
  },
]

const steps = ["Diagnóstico", "Projeto", "Montagem", "Comissionamento"]

export function DifferentialsSection() {
  return (
    <section className="section-band relative overflow-hidden py-28 md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.86fr] lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Diferenciais
              </span>
            </div>

            <h2 className="mb-7 text-3xl font-black leading-tight tracking-normal text-white md:text-4xl">
              Técnica de campo com acabamento de{" "}
              <span className="text-primary">alta performance</span>
            </h2>

            <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              Conhecimento técnico avançado combinado com leitura prática da operação para entregar
              sistemas que funcionam bem fora do papel.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentials.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.075]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass relative rounded-lg p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                  Fluxo de entrega
                </p>
                <h3 className="text-xl font-black text-white">Do estudo à operação</h3>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.055] text-primary">
                <Zap className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-lg bg-white/[0.045] p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-background">
                    {index + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white/70">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-primary/20 bg-primary/10 p-5">
              <p className="text-sm leading-relaxed text-white/70">
                O resultado é uma solução com documentação, montagem organizada, testes de campo e
                operação preparada para manutenção futura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
