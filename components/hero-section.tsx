"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Linkedin, Instagram, Zap, Cpu, Lightbulb } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/WhatsApp Video 2026-04-12 at 13.19.29.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay - Efeito fosco escuro profissional */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, rgba(13,115,119,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
            animationDelay: "1.5s",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Three Areas Badge */}
          <div className="flex justify-center gap-4 mb-10 animate-fade-in-up">
            {[
              { icon: Zap, label: "Elétrica", color: "#d4af37" },
              { icon: Cpu, label: "Automação", color: "#0d7377" },
              { icon: Lightbulb, label: "Tecnologia", color: "#b87333" },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-light"
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
                <span className="text-xs uppercase tracking-widest" style={{ color: item.color }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Main Heading - Nome with Typewriter Animation */}
          <div className="overflow-hidden mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight">
              {/* Ikaro - animação letra por letra */}
              {"Ikaro ".split("").map((letter, index) => (
                <span
                  key={`first-${index}`}
                  className="inline-block"
                  style={{
                    animation: `letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.08}s forwards`,
                    opacity: 0,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
              {/* Karkachi - animação de máquina de escrever continuando */}
              {"Karkachi".split("").map((letter, index) => (
                <span
                  key={`last-${index}`}
                  className="inline-block font-medium gradient-text"
                  style={{
                    animation: `letterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.8 + index * 0.08}s forwards`,
                    opacity: 0,
                  }}
                >
                  {letter}
                </span>
              ))}
              {/* Cursor piscando após o nome */}
              <span 
                className="inline-block w-[3px] h-[0.8em] bg-[#d4af37] ml-1"
                style={{
                  animation: "cursorBlink 0.8s ease-in-out infinite",
                  animationDelay: "1.5s",
                  opacity: 0,
                }}
              />
            </h1>
          </div>

          {/* Subtitle with Animation */}
          <div className="overflow-hidden mb-12">
            <p 
              className="text-lg md:text-xl text-white/60 font-light tracking-wide"
              style={{
                animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards",
                opacity: 0,
              }}
            >
              Transformando ideias em soluções inteligentes
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            style={{
              animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards",
              opacity: 0,
            }}
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base font-medium rounded-full btn-lift animate-glow-pulse"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #b87333 100%)",
                border: "none",
              }}
            >
              <Link href="#contato" className="text-black">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-full bg-transparent btn-lift"
            >
              <Link href="#projetos">
                <Play className="mr-2 h-4 w-4" />
                Ver Projetos
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-6 mb-16"
            style={{
              animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s forwards",
              opacity: 0,
            }}
          >
            {/* WhatsApp */}
            <Link
              href="https://wa.me/5581991551107"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-light flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                animation: `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards`,
                opacity: 0,
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </Link>
            
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/ikaro-karkachi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-light flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                animation: `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards`,
                opacity: 0,
              }}
            >
              <Linkedin className="w-4 h-4" style={{ color: "#0077b5" }} />
            </Link>
            
            {/* Instagram */}
            <Link
              href="https://instagram.com/karkachi.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-light flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                animation: `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.7s forwards`,
                opacity: 0,
              }}
            >
              <Instagram className="w-4 h-4" style={{ color: "#e4405f" }} />
            </Link>
          </div>

          {/* Stats - Elegant Design */}
          <div 
            className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10"
            style={{
              animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards",
              opacity: 0,
            }}
          >
            {[
              { value: "3+", label: "Anos", sublabel: "Experiência" },
              { value: "50+", label: "Projetos", sublabel: "Entregues" },
              { value: "100%", label: "Clientes", sublabel: "Satisfeitos" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="text-4xl md:text-5xl font-light mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #d4af37 0%, #e5c76b 50%, #b87333 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-widest">{stat.label}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
