import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"

import CTASection from "@/components/sections/cta-section"
import { servicesPageData } from "@/lib/constants"

export const metadata: Metadata = {
    title: "Our Services | Web Development & AI Automation Agency",
    description: "Explore our comprehensive range of web design and AI automation services for businesses of all sizes.",
    keywords:
        "web design services, AI automation services, hyperlocal websites, booking systems, e-commerce, AI chatbots, SEO",
}

export default function ServicesPage() {
    const { hero, services, cta } = servicesPageData

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

            {/* Services List */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    {services.map((service, index) => (
                        <div key={index}> {/* Added a key prop here */}
                            <span>{service.icon}</span>
                            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title={cta.title}
                description={cta.description}
                buttonText={cta.buttonText}
                buttonLink={cta.buttonLink}
                bgColor="bg-white"
                containerBgColor="bg-gradient-to-r from-slate-900 to-slate-800"
            />
        </main>
    )
}

