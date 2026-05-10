"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-3 transition-all duration-500">
      <div className="container mx-auto px-0">
        <nav
          className={`flex h-16 items-center justify-between rounded-full border px-3 pl-4 transition-all duration-500 ${
            isScrolled
              ? "glass border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              : "border-white/10 bg-black/[0.45] backdrop-blur-md"
          }`}
        >
          <Link href="#inicio" className="group flex items-center">
            <div className="relative h-10 w-[150px] sm:h-11 sm:w-[190px]">
              <Image
                src="/ikaro-logo-menu-cropped.png"
                alt="Karkachi Soluções em Engenharia Elétrica"
                width={966}
                height={357}
                priority
                className="h-full w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 scale-90 rounded-full bg-white/[0.04] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                <span className="absolute inset-x-3 bottom-1.5 h-[1.5px] scale-x-0 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="group h-11 rounded-full border-none bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] px-6 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              <Link href="#contato" className="inline-flex items-center gap-2">
                Contato
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white/70 hover:bg-white/[0.08] hover:text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {isMobileMenuOpen && (
          <div className="glass mt-3 rounded-2xl p-3 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="group mt-2 rounded-full border-none bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] py-6 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
              >
                <Link
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
