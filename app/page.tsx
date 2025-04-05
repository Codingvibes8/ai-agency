import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import FeaturesSection from "@/components/sections/features-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ProjectsSection from "@/components/sections/projects-section"
import CTASection from "@/components/sections/cta-section"
import { homePageData } from "@/lib/constants"

export const metadata: Metadata = {
  title: "AI Automation Agency | Web Design & AI Solutions",
  description:
      "Enterprise-grade web design and AI automation solutions for businesses. Specializing in HyperLocal websites, booking systems, e-commerce, and AI-powered solutions.",
  keywords: "web design, AI automation, HyperLocal websites, booking systems, e-commerce, AI chatbots, SEO",
}

export default function Home() {
  const { hero, featuredServices, features, testimonials, featuredProjects, cta } = homePageData

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
            image={hero.image}
            imageAlt={hero.imageAlt}
        />

        {/* Services Section */}
        <ServicesSection
            title={featuredServices.title}
            description={featuredServices.description}
            services={featuredServices.services}
        />

        {/* Features Section */}
        <FeaturesSection title={features.title} description={features.description} features={features.items} />

        {/* Testimonials Section */}
        <TestimonialsSection
            title={testimonials.title}
            description={testimonials.description}
            testimonials={testimonials.items}
        />

        {/* Projects Section */}
        <ProjectsSection
            title={featuredProjects.title}
            description={featuredProjects.description}
            projects={featuredProjects.projects}
        />

        {/* CTA Section */}
        <CTASection
            title={cta.title}
            description={cta.description}
            buttonText={cta.buttonText}
            buttonLink={cta.buttonLink}
        />
      </main>
  )
}

