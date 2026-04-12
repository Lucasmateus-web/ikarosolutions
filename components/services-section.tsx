"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Lightbulb, 
  Thermometer, 
  Smartphone, 
  Shield, 
  Cpu, 
  Settings,
  Wifi,
  Zap
} from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Iluminação Inteligente",
    description: "Controle completo via smartphone com cenas personalizadas.",
    color: "#d4af37",
  },
  {
    icon: Thermometer,
    title: "Climatização",
    description: "Integração de ar-condicionado e cortinas automatizadas.",
    color: "#0d7377",
  },
  {
    icon: Smartphone,
    title: "Controle Remoto",
    description: "Monitore e controle de qualquer lugar do mundo.",
    color: "#b87333",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Câmeras, alarmes e sensores com notificações.",
    color: "#d4af37",
  },
  {
    icon: Cpu,
    title: "Painéis Elétricos",
    description: "Projeto e montagem de painéis de alta tensão.",
    color: "#0d7377",
  },
  {
    icon: Settings,
    title: "Manutenção",
    description: "Manutenção preventiva e corretiva industrial.",
    color: "#b87333",
  },
  {
    icon: Wifi,
    title: "Integração IoT",
    description: "Conecte todos os dispositivos em uma plataforma.",
    color: "#d4af37",
  },
  {
    icon: Zap,
    title: "Eficiência",
    description: "Soluções para redução do consumo de energia.",
    color: "#0d7377",
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute top-1/2 left-0 w-1/3 h-1/2 -translate-y-1/2 opacity-20"
        style={{
          background: "radial-gradient(ellipse, rgba(13,115,119,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className="max-w-3xl mb-20"
          style={{
            animation: isVisible ? "slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
            opacity: 0,
          }}
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
            style={{ border: "1px solid rgba(13,115,119,0.3)" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#0d7377" }}>Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-[1.2]">
            Soluções em <span className="font-medium gradient-text">automação</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-2xl">
            Transformamos ambientes em espaços inteligentes e eficientes 
            com tecnologia de ponta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl glass-light hover:bg-white/[0.06] transition-all duration-500"
              style={{
                animation: isVisible 
                  ? `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.08}s forwards`
                  : "none",
                opacity: 0,
                border: `1px solid ${service.color}10`,
              }}
            >
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}15 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15` }}
              >
                <service.icon className="w-5 h-5 transition-colors duration-300" style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="text-sm font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Corner */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${service.color}10 50%)`,
                  borderRadius: "0 1rem 0 0",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
