"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function Footer() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const { nome, email, telefone, assunto, mensagem } = formData
    const body = `Nome: ${nome}%0D%0AEmail: ${email}%0D%0ATelefone: ${telefone || "Não informado"}%0D%0A%0D%0AMensagem:%0D%0A${mensagem}`
    
    window.location.href = `mailto:ikaro123dosantos@gmail.com?subject=${encodeURIComponent(assunto)}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <footer id="contato-form" className="border-t border-white/5">
      <div className="container mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8">
            <span className="text-xs text-white/60 uppercase tracking-widest">Mensagem</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Envie uma <span className="font-medium">mensagem</span>
          </h2>
          <p className="text-white/40">
            Preencha o formulário e entrarei em contato o mais breve possível.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Left Column */}
            <div className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-xs text-white/40 uppercase tracking-widest mb-3">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 focus:border-white/20 focus:outline-none transition-all text-white placeholder:text-white/20"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-white/40 uppercase tracking-widest mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 focus:border-white/20 focus:outline-none transition-all text-white placeholder:text-white/20"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-xs text-white/40 uppercase tracking-widest mb-3">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 focus:border-white/20 focus:outline-none transition-all text-white placeholder:text-white/20"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-xs text-white/40 uppercase tracking-widest mb-3">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 focus:border-white/20 focus:outline-none transition-all text-white placeholder:text-white/20"
                  placeholder="Assunto"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              <label htmlFor="mensagem" className="block text-xs text-white/40 uppercase tracking-widest mb-3">
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                value={formData.mensagem}
                onChange={handleChange}
                className="flex-1 w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/5 focus:border-white/20 focus:outline-none transition-all text-white placeholder:text-white/20 resize-none min-h-[200px]"
                placeholder="Descreva seu projeto..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-6 text-sm font-medium btn-lift"
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar Mensagem
            </Button>
          </div>
        </form>

        {/* Copyright */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Karkachi. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Engenharia Elétrica & Automação
          </p>
        </div>
        
        {/* Developer Credit */}
        <div className="mt-6 text-center">
          <p className="text-[10px] text-white/20">
            Desenvolvido por{" "}
            <a 
              href="https://mateus.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition-colors duration-300"
            >
              mateus.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
