import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import MapSection from "@/components/contact/map-section"
import { contactPageData } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us | AI Automation Agency",
  description:
      "Get in touch with our team to discuss your web design and AI automation needs. We're here to help your business grow.",
  keywords: "contact, web design agency, AI automation agency, get in touch, consultation",
}

export default function ContactPage() {
  const { hero, contactForm, contactInfo, mapSection } = contactPageData

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

        {/* Contact Form and Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm title={contactForm.title} services={contactForm.services} />

              {/* Contact Info */}
              <ContactInfo
                  title={contactInfo.title}
                  description={contactInfo.description}
                  address={contactInfo.address}
                  phone={contactInfo.phone}
                  email={contactInfo.email}
                  businessHours={contactInfo.businessHours}
              />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <MapSection imageUrl={mapSection.imageUrl} imageAlt={mapSection.imageAlt} />
      </main>
  )
}

