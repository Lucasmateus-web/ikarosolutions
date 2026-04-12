"use client"

import { CheckCircle2, Cog, Sparkles, Target, Zap } from "lucide-react"

const differentials = [
  {
    icon: CheckCircle2,
    title: "Confiabilidade",
    description: "Sistemas robustos testados para funcionamento contínuo em todas as condições.",
  },
  {
    icon: Target,
    title: "Personalização",
    description: "Cada projeto desenvolvido sob medida para as necessidades específicas.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia",
    description: "As mais recentes tecnologias em automação e sistemas inteligentes.",
  },
  {
    icon: Cog,
    title: "Experiência",
    description: "Anos em ambientes industriais de alta complexidade.",
  },
  {
    icon: Zap,
    title: "Eficiência",
    description: "Soluções que reduzem consumo e otimizam o desempenho.",
  },
]

export function DifferentialsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8">
              <span className="text-xs text-white/60 uppercase tracking-widest">Diferenciais</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-[1.2]">
              Por que <span className="font-medium">escolher</span> nosso trabalho
            </h2>

            <p className="text-white/40 text-lg mb-12 leading-relaxed max-w-lg">
              Conhecimento técnico avançado combinado com atendimento personalizado 
              para entregar resultados excepcionais.
            </p>

            <div className="space-y-4">
              {differentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl glass-light hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-white/50" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Minimal */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-white/5" />
              
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border border-white/10" />
              
              {/* Inner Circle */}
              <div className="absolute inset-16 rounded-2xl bg-white/[0.03] flex items-center justify-center">
                <Zap className="w-10 h-10 text-white/30" />
              </div>

              {/* Decorative Dots */}
              {[0, 72, 144, 216, 288].map((angle, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
