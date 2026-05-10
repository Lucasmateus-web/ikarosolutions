import React from "react"
import {
  Activity,
  Cable,
  Cpu,
  FileCheck2,
  Gauge,
  MonitorCog,
  Network,
  PanelTop,
  ShieldCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react"

export function TechnologiesMarquee() {
  const technologies: Array<{ label: string; icon: LucideIcon }> = [
    { label: "CLP Siemens", icon: Cpu },
    { label: "Rockwell Automation", icon: Network },
    { label: "Microcontroladores ESP32", icon: Cable },
    { label: "Internet das Coisas (IoT)", icon: Wifi },
    { label: "Norma NR-10", icon: ShieldCheck },
    { label: "NBR 5410 & 5419", icon: FileCheck2 },
    { label: "Painéis Elétricos", icon: PanelTop },
    { label: "Inversores de Frequência", icon: Gauge },
    { label: "Supervisórios (IHM)", icon: MonitorCog },
    { label: "Automação Industrial", icon: Activity },
  ]

  const marqueeItems = [...technologies, ...technologies, ...technologies, ...technologies]

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-12">
      <div className="container mx-auto mb-6 px-4">
        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-primary/80">
          Especialidades e tecnologias
        </h3>
      </div>

      <div className="relative flex w-full max-w-[100vw] overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div
          className="animate-marquee flex w-fit items-center gap-12 whitespace-nowrap pl-12 hover:[animation-play-state:paused]"
          style={{ animationDuration: "70s" }}
        >
          {marqueeItems.map((tech, index) => (
            <div key={`${tech.label}-${index}`} className="group flex cursor-pointer items-center gap-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-primary/70 transition-colors duration-500 group-hover:border-primary/30 group-hover:text-primary">
                <tech.icon className="h-4 w-4" />
              </span>
              <span className="text-xl font-black text-white/[0.14] transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#147ce3] group-hover:bg-clip-text group-hover:text-transparent md:text-2xl">
                {tech.label}
              </span>
              <span className="text-2xl text-primary/40">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
