import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TechnologiesMarquee } from "@/components/technologies-marquee"
import { ProjectsSection } from "@/components/projects-section"
import { PartnersMarquee } from "@/components/partners-marquee"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"

export default function Home() {
  return (
    <main className="min-h-screen portfolio-shell">
      <SplashScreen />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesMarquee />
      <ProjectsSection />
      <ExperienceSection />
      <PartnersMarquee />
      <Footer />
    </main>
  )
}
