"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"

const allProjects = [
  {
    id: "automacao-portuaria",
    title: "Automação e Monitoramento Portuário",
    serviceType: "SISTEMAS INTEGRADOS",
    tag: "DESTAQUE",
    description:
      "Implementação de uma infraestrutura robusta para ambiente portuário, englobando desde a montagem de painéis elétricos industriais até a programação de CLPs e integração com sistemas de telemetria.",
    features: [
      "Automação de Iluminação Industrial",
      "Telemetria em Defensas Marítimas",
      "Monitoramento de Grupos Geradores em Tempo Real",
      "Sistema de Velocidade de Atracação Seguro",
      "Montagem de Painéis Elétricos Industriais",
      "Rede de Iluminação Inteligente com ESP32",
    ],
    gallery: [
      "/projects/ppv2b-ihm-controle-setor.jpg",
      "/projects/ppv2b-ihm-instalada.jpg",
      "/projects/ppv2b-ihm-programacao.jpg",
      "/projects/ppv2b-painel-alta-tensao.jpg",
      "/projects/ppv2b-painel-clp.jpg",
      "/projects/ppv2b-painel-completo.jpg",
    ],
  },
  {
    id: "analise-inspecao-laudo",
    title: "Análise, Inspeção e Laudo",
    serviceType: "DIAGNÓSTICO ELÉTRICO",
    tag: "INSPEÇÃO",
    description:
      "Serviços especializados de análise técnica, medição de aterramento e emissão de laudos para garantir a conformidade e a segurança operacional das instalações.",
    features: [
      "Inspeção e laudo de SPDA (NBR 5419)",
      "Medição de Resistência de Aterramento (Miliohmímetro)",
      "Laudo Técnico de Instalações Elétricas (NR-10)",
      "Verificação de Integridade de Barramentos",
      "Sinalização de Emergência e Balizamento",
    ],
    gallery: [
      "/projects/inspecao-1.png",
      "/projects/inspecao-2.jpg",
      "/projects/inspecao-3.jpg",
    ],
  },
]

type Project = (typeof allProjects)[number]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length)
  }

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
  }

  // Auto-slide for the modal
  useEffect(() => {
    if (!selectedProject) return
    const timer = setInterval(() => {
      nextImage()
    }, 4000)
    return () => clearInterval(timer)
  }, [selectedProject])

  return (
    <section id="projetos" className="relative overflow-hidden bg-[#050505] py-24 md:py-28">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-black tracking-normal text-white md:text-4xl">
            Projetos em <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-white/50">
            Conheça a complexidade e a qualidade das nossas entregas de engenharia e automação aplicadas em campo.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {allProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => openProject(project)}
              className="group relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] text-left transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Main Image */}
              <div className="relative h-[360px] w-full md:h-[420px]">
                <Image
                  src={project.gallery[0]}
                  alt={project.title}
                  fill
                  className="object-cover opacity-75 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
                <div className="max-w-xl">
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-background shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-background animate-pulse" />
                    {project.tag}
                  </span>

                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                    {project.serviceType}
                  </p>
                  
                  <h3 className="mb-3 text-2xl font-black leading-tight text-white md:text-[1.75rem]">
                    {project.title}
                  </h3>
                  
                  <p className="mb-8 line-clamp-2 text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm font-bold text-white transition-colors group-hover:text-primary">
                    <span>Ver detalhes do projeto</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-md">
          <div className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.8)] lg:grid lg:rounded-[32px] lg:grid-cols-[1.3fr_1fr]">
            <button
              type="button"
              onClick={closeProject}
              aria-label="Fechar detalhes do projeto"
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-md transition-colors hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Slider Section */}
            <div className="relative h-[260px] w-full shrink-0 sm:h-[350px] lg:h-auto lg:min-h-[650px] group/slider">
              {selectedProject.gallery.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`Foto ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-700 ${
                    index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              ))}
              
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Slider Controls */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:text-background group-hover/slider:opacity-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:text-background group-hover/slider:opacity-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Slider Indicators */}
              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {selectedProject.gallery.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentImageIndex ? "w-6 bg-primary" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8 lg:p-12">
              <span className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                {selectedProject.serviceType}
              </span>

              <h3 className="mb-6 text-2xl font-black leading-tight text-white md:text-3xl">
                {selectedProject.title}
              </h3>
              
              <p className="mb-8 text-[15px] leading-relaxed text-white/60">
                {selectedProject.description}
              </p>

              <div className="mb-10 flex-1 space-y-4">
                {selectedProject.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-[14px] leading-relaxed text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button matching the portfolio style */}
              <div className="mt-auto pt-6">
                <Link
                  href="#contato"
                  onClick={closeProject}
                  className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] px-6 text-[15px] font-bold text-white shadow-[0_0_15px_rgba(14,165,233,0.2)] transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
