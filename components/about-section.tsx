"use client"

import Image from "next/image"
import { Award, Briefcase, GraduationCap, Zap } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Engenharia Elétrica",
    description: "Faculdade dos Guararapes (2023)",
    color: "#d4af37",
  },
  {
    icon: Award,
    title: "Pós-Graduação",
    description: "Automação e Controle - Estácio",
    color: "#0d7377",
  },
  {
    icon: Briefcase,
    title: "Experiência",
    description: "Gestão no Porto de Suape",
    color: "#b87333",
  },
  {
    icon: Zap,
    title: "Especialidades",
    description: "CLPs, Inversores e Painéis",
    color: "#d4af37",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-30"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(212,175,55,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div 
            className="relative"
            style={{
              animation: "slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              opacity: 0,
            }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative Elements */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-50"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(13,115,119,0.2) 50%, rgba(184,115,51,0.2) 100%)",
                  filter: "blur(20px)",
                }}
              />
              
              {/* Frame */}
              <div 
                className="absolute -inset-2 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, #d4af37 0%, #0d7377 50%, #b87333 100%)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-3xl bg-[#0a0a0b]" />
              </div>
              
              {/* Main Image */}
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/ikaro-profile.jpg"
                  alt="Ikaro Karkachi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div 
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 animate-float"
                style={{
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.1)" }}
                  >
                    <Zap className="w-5 h-5" style={{ color: "#d4af37" }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Engenheiro</div>
                    <div className="text-sm font-medium text-white">Eletricista</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            style={{
              animation: "slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
              opacity: 0,
            }}
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
              style={{ border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <span className="text-xs uppercase tracking-widest" style={{ color: "#d4af37" }}>Sobre</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-[1.2]">
              Engenharia de <span className="font-medium gradient-text">alta performance</span> com foco em resultados
            </h2>

            <div className="space-y-6 text-white/50 leading-relaxed mb-10">
              <p>
                Ikaro Karkachi é Engenheiro Eletricista com experiência sólida em automação industrial 
                e sistemas elétricos. Atualmente lidera a gestão da manutenção elétrica portuária no 
                Porto de Suape.
              </p>
              <p>
                Com foco em eficiência e confiabilidade, desenvolve soluções completas em automação 
                residencial, industrial e projetos elétricos personalizados.
              </p>
            </div>

            {/* Three Areas Highlight */}
            <div className="flex gap-4 mb-10">
              {[
                { label: "Elétrica", color: "#d4af37" },
                { label: "Automação", color: "#0d7377" },
                { label: "Tecnologia", color: "#b87333" },
              ].map((area, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 rounded-full text-xs uppercase tracking-widest"
                  style={{ 
                    background: `${area.color}15`,
                    color: area.color,
                    border: `1px solid ${area.color}30`,
                  }}
                >
                  {area.label}
                </div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl glass-light hover:bg-white/[0.06] transition-all duration-300 group"
                  style={{
                    animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-white/40">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
