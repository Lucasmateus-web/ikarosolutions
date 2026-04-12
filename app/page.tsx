import { Header } from "@/components/header"
import { IntroScreen } from "@/components/intro-screen"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <IntroScreen />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <DifferentialsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
