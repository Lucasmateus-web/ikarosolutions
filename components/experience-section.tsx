"use client"

import { Award, Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "TPF Engenharia",
    role: "Engenheiro Eletricista",
    period: "2024 - Atual",
    location: "Porto de Suape, PE",
    description:
      "Gestão da manutenção elétrica portuária, supervisão de instalações e equipamentos industriais.",
    current: true,
  },
  {
    company: "Genus Engenharia",
    role: "Técnico em Projetos",
    period: "2023 - 2024",
    location: "Pernambuco",
    description: "Montagem de painéis elétricos, estudos de proteção e comissionamento.",
    current: false,
  },
  {
    company: "Petroquímica Suape",
    role: "Eletricista",
    period: "2022 - 2023",
    location: "Suape, PE",
    description: "Manutenção preventiva e corretiva em painéis, inversores e CLPs.",
    current: false,
  },
]

const certifications = [
  "NR-10 - Engehall",
  "Planejamento da Manutenção",
  "Comandos Elétricos",
  "Inversores WEG / Mitsubishi",
  "CLPs Mitsubishi",
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-14 max-w-3xl">
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Experiência <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] bg-clip-text text-transparent">profissional</span>
          </h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-white/50">
            Atuação em engenharia elétrica e automação industrial dentro de operações que exigem
            segurança, disponibilidade e precisão técnica.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="group relative pl-10">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute bottom-[-1.5rem] left-[11px] top-[2.5rem] w-[1px] bg-white/[0.06]" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-[3px] top-6 flex h-[17px] w-[17px] items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] transition-colors duration-300 group-hover:border-white/30">
                  <div className={`h-1.5 w-1.5 rounded-full transition-colors ${exp.current ? 'bg-primary' : 'bg-white/20 group-hover:bg-white/40'}`} />
                </div>

                <div className="relative cursor-pointer rounded-[20px] border border-white/[0.04] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-white/[0.08] hover:bg-white/[0.03]">
                  {exp.current && (
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      Atual
                    </div>
                  )}

                  <h3 className="mb-1 text-lg font-bold text-white/90">{exp.company}</h3>
                  <p className="mb-4 text-[13px] font-medium text-primary/80">{exp.role}</p>

                  <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-medium text-white/40">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-[14px] leading-relaxed text-white/50">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-[20px] border border-white/[0.04] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-white/[0.08] hover:bg-white/[0.03]">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-white/90">Certificações</h3>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Base técnica</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-[13px] font-medium text-white/50 transition-colors hover:text-white/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                    <span className="leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] border border-white/[0.04] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-white/[0.08] hover:bg-white/[0.03]">
              <div className="mb-5 flex items-center gap-3">
                <Building2 className="h-4 w-4 text-white/40" />
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/60">
                  Habilidades
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Liderança", "Análise", "Estratégia", "Eficiência", "Proatividade"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[12px] font-medium text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
