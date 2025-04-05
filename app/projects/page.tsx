import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import ProjectCard from "@/components/project-card"
import CTASection from "@/components/sections/cta-section"
import { projectsPageData } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Our Projects | AI Automation Agency",
  description: "Explore our portfolio of successful web design and AI automation projects for various businesses.",
  keywords: "portfolio, case studies, web design projects, AI automation projects, client success stories",
}

export default function ProjectsPage() {
  const { hero, projects, cta } = projectsPageData

  return (
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <HeroSection
            title={hero.title}
            description={hero.description}
            primaryButtonText={hero.primaryButtonText}
            primaryButtonLink={hero.primaryButtonLink}
            secondaryButtonText={hero.secondaryButtonText}
            secondaryButtonLink={hero.secondaryButtonLink}
        />

        {/* Projects Grid */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {projects.map((project, index) => (
                  <ProjectCard
                      key={index}
                      title={project.title}
                      industry={project.industry}
                      description={project.description}
                      services={project.services}
                      results={project.results}
                      image={project.image}
                      featured={index === 0} // Make the first project featured
                  />
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{cta.title}</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">{cta.description}</p>
              <CTASection
                  title={cta.title}
                  description={cta.description}
                  buttonText={cta.buttonText}
                  buttonLink={cta.buttonLink}
                  bgColor="bg-transparent"
                  containerBgColor="bg-transparent"
              />
            </div>
          </div>
        </section>
      </main>
  )
}

