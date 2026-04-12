"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Sistema de Iluminação PPV 2B",
    description: "Automação completa com CLP Schneider, IHM Magelis e controle de 5 setores independentes.",
    tag: "Industrial",
    image: "/projects/ppv2b-painel-clp.jpg",
  },
  {
    title: "Interface IHM PPV 2B",
    description: "Desenvolvimento de telas intuitivas para controle de setores e programação horária.",
    tag: "Automação",
    image: "/projects/ppv2b-ihm-programacao.jpg",
  },
  {
    title: "IHM Magelis",
    description: "Instalação e configuração da interface Schneider para gerenciamento em tempo real.",
    tag: "Industrial",
    image: "/projects/ppv2b-ihm-instalada.jpg",
  },
  {
    title: "Painel 380V",
    description: "Montagem de painel com proteção para alta tensão, disjuntores e CLP Schneider.",
    tag: "Industrial",
    image: "/projects/ppv2b-painel-alta-tensao.jpg",
  },
  {
    title: "Painel Completo",
    description: "Distribuição de energia, módulos de E/S e cabeamento organizado.",
    tag: "Industrial",
    image: "/projects/ppv2b-painel-completo.jpg",
  },
  {
    title: "Controle de Setor",
    description: "Tela de controle com modo automático/manual e ajuste de intensidade.",
    tag: "Automação",
    image: "/projects/ppv2b-ihm-controle-setor.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8">
            <span className="text-xs text-white/60 uppercase tracking-widest">Portfólio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-[1.2]">
            Projetos <span className="font-medium">realizados</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-2xl">
            Soluções desenvolvidas com excelência técnica e atenção aos detalhes. 
            Cada projeto reflete compromisso com qualidade.
          </p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/10 text-white/70 backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
