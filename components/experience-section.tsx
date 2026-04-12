"use client"

import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "TPF Engenharia",
    role: "Engenheiro Eletricista",
    period: "2024 – Atual",
    location: "Porto de Suape, PE",
    description: "Gestão da manutenção elétrica portuária, supervisão de instalações e equipamentos industriais.",
    current: true,
  },
  {
    company: "Genus Engenharia",
    role: "Técnico em Projetos",
    period: "2023 – 2024",
    location: "Pernambuco",
    description: "Montagem de painéis elétricos, estudos de proteção e comissionamento.",
    current: false,
  },
  {
    company: "Petroquímica Suape",
    role: "Eletricista",
    period: "2022 – 2023",
    location: "Suape, PE",
    description: "Manutenção preventiva e corretiva em painéis, inversores e CLPs.",
    current: false,
  },
]

const certifications = [
  "NR-10 – Engehall",
  "Planejamento da Manutenção",
  "Comandos Elétricos",
  "Inversores WEG / Mitsubishi",
  "CLPs Mitsubishi",
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8">
            <span className="text-xs text-white/60 uppercase tracking-widest">Trajetória</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-[1.2]">
            Experiência <span className="font-medium">profissional</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-2xl">
            Trajetória sólida em engenharia elétrica e automação industrial 
            em grandes empresas do setor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l border-white/10"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-white/30 -translate-x-[5px]">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-white/50 animate-pulse" />
                    )}
                  </div>

                  <div className="glass-light rounded-2xl p-6 -mt-2">
                    {exp.current && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/70 text-[10px] uppercase tracking-wider mb-4">
                        <span className="w-1 h-1 rounded-full bg-white/70 animate-pulse" />
                        Atual
                      </div>
                    )}

                    <h3 className="text-lg font-medium text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">{exp.role}</p>

                    <div className="flex flex-wrap gap-4 text-xs text-white/40 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-sm text-white/50 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div>
            <div className="sticky top-24 glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white/60" />
                </div>
                <h3 className="text-sm font-medium text-white">Certificações</h3>
              </div>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-white/40"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-white/5">
                <h4 className="text-xs text-white/40 uppercase tracking-widest mb-4">Habilidades</h4>
                <div className="flex flex-wrap gap-2">
                  {["Liderança", "Análise", "Estratégia", "Eficiência"].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white/5 text-white/50 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
