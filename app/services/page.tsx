import type React from "react"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Globe,
  MessageSquare,
  Search,
  Shield,
  ShoppingCart,
  Users,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Services | AI Automation Agency",
  description: "Explore our comprehensive range of web design and AI automation services for businesses of all sizes.",
  keywords:
    "web design services, AI automation services, hyperlocal websites, booking systems, e-commerce, AI chatbots, SEO",
}

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
  pricing: string
  clients: string
}

const services = [
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "AI Hyperlocal Websites",
    description: "Custom-built websites optimized for local search and engagement.",
    pricing: "£1,500–£7,500 (setup)",
    clients: "Restaurants, clinics",
  },
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: "Custom Booking Systems",
    description: "Streamlined booking solutions for appointment-based businesses.",
    pricing: "£3,000–£8,000 + £100/month",
    clients: "Salons, tutors",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-blue-600" />,
    title: "Local E-commerce",
    description: "Powerful online stores for local businesses with integrated payment solutions.",
    pricing: "£5,000–£15,000 + 5% revenue",
    clients: "Artisan shops, boutiques",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
    title: "AI Chatbots",
    description: "Intelligent conversational agents to enhance customer service.",
    pricing: "£500 setup + £100/month",
    clients: "Auto repair shops, hotels",
  },
  {
    icon: <Search className="h-10 w-10 text-blue-600" />,
    title: "AI Local SEO",
    description: "Data-driven SEO strategies to dominate local search results.",
    pricing: "£300–£1,500/month",
    clients: "Dentists, retail stores",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Security Audits",
    description: "Comprehensive security assessments to protect your digital assets.",
    pricing: "£500–£2,000",
    clients: "E-commerce, member sites",
  },
];


export function Service({ icon, title, description, pricing, clients }: ServiceProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md">
      <div className="mb-6 text-white">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white mb-6">{description}</p>

      <div className="space-y-3 mb-6">
        <div className="flex items-center">
          <span className="text-sm font-medium text-slate-700 w-24">Pricing:</span>
          <span className="text-sm text-slate-900 font-semibold">{pricing}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-slate-700 w-24">Ideal for:</span>
          <span className="text-sm text-slate-600">{clients}</span>
        </div>
      </div>

      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

export default function ServicesPage() {
  return (
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-slate-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Services</h1>
              <p className="text-lg text-slate-800 max-w-2xl mx-auto">
                Comprehensive web design and AI automation solutions tailored for businesses seeking growth and digital
                excellence
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="bg-slate-300 text-slate-800 p-8 rounded-lg shadow-sm border border-slate-200
      transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]
      transform-gpu animate-fade-in-up">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                  <div
                      key={index}
                      className="animate-fade-in-up bg-white
                       hover:bg-blue-200 p-6 rounded-lg height={400}
                      width={350}"
                      style={{animationDelay: `${index * 100}ms`}}
                  >
                    {service.icon}
                    <h3 className="text-lg font-semibold mt-2 text-slate-800">{service.title}</h3>
                    <p className="text-[0.8rem] mt-2 text-slate-800">{service.description}</p>
                    <p className="mt-2 text-slate-800">{service.pricing}</p>
                    <p className="text-gray-500 mt-2 ">Clients: {service.clients}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className=" rounded-2xl p-8 md:p-12 shadow-xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Ready to get started?</h2>
              <p className="text-[0.9rem] text-slate-700 max-w-2xl mx-auto mb-8">
                Schedule a free consultation to discuss how our services can help your business grow.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-y-105 text-white text-lg px-8">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5"/>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
  )
}

