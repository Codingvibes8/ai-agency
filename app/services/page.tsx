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
  Calendar,
  UserPlus,
  Database,
  Star,
  Megaphone,
  BarChart,
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

function Service({ icon, title, description, pricing, clients }: ServiceProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>

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
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive web design and AI automation solutions tailored for businesses seeking growth and digital
              excellence
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Service
              icon={<Globe className="h-12 w-12 text-blue-600" />}
              title="AI Hyperlocal Websites"
              description="Custom-built websites optimized for local search and engagement, designed to convert visitors into customers."
              pricing="£1,500–£7,500 (setup)"
              clients="Restaurants, clinics"
            />

            <Service
              icon={<Calendar className="h-12 w-12 text-blue-600" />}
              title="Custom Booking Systems"
              description="Streamlined booking solutions for appointment-based businesses with automated reminders and payment integration."
              pricing="£3,000–£8,000 + £100/month"
              clients="Salons, tutors"
            />

            <Service
              icon={<ShoppingCart className="h-12 w-12 text-blue-600" />}
              title="Local E-commerce"
              description="Powerful online stores for local businesses with integrated payment solutions, inventory management, and local delivery options."
              pricing="£5,000–£15,000 + 5% revenue"
              clients="Artisan shops, boutiques"
            />

            <Service
              icon={<UserPlus className="h-12 w-12 text-blue-600" />}
              title="Membership Portals"
              description="Secure member-only areas with subscription management, content access control, and community features."
              pricing="£2,500–£6,000 + £200/month"
              clients="Gyms, professional groups"
            />

            <Service
              icon={<MessageSquare className="h-12 w-12 text-blue-600" />}
              title="AI Chatbots"
              description="Intelligent conversational agents to enhance customer service, answer FAQs, and qualify leads 24/7."
              pricing="£500 setup + £100/month"
              clients="Auto repair shops, hotels"
            />

            <Service
              icon={<Search className="h-12 w-12 text-blue-600" />}
              title="AI Local SEO"
              description="Data-driven SEO strategies to dominate local search results with AI-powered content optimization and local citation building."
              pricing="£300–£1,500/month"
              clients="Dentists, retail stores"
            />

            <Service
              icon={<BarChart className="h-12 w-12 text-blue-600" />}
              title="AI Social Media"
              description="AI-powered content creation, scheduling, and engagement for social media platforms to build your local brand presence."
              pricing="£200–£800/month"
              clients="Cafés, event planners"
            />

            <Service
              icon={<Star className="h-12 w-12 text-blue-600" />}
              title="Review Management"
              description="Automated review collection, monitoring, and response system to build and protect your online reputation."
              pricing="£50–£200/month (per location)"
              clients="Hotels, service providers"
            />

            <Service
              icon={<Megaphone className="h-12 w-12 text-blue-600" />}
              title="Event Promotion"
              description="Comprehensive digital marketing for events, including landing pages, ticket sales, and targeted promotion."
              pricing="£1,000–£5,000/event + 3% fee"
              clients="Festivals, music venues"
            />

            <Service
              icon={<BarChart className="h-12 w-12 text-blue-600" />}
              title="AI Ads"
              description="AI-optimized advertising campaigns across Google, Facebook, and Instagram with automated performance optimization."
              pricing="15–20% of ad spend"
              clients="Gyms, real estate businesses"
            />

            <Service
              icon={<Database className="h-12 w-12 text-blue-600" />}
              title="Database Integration"
              description="Seamless integration of your existing systems with new digital solutions for unified data management."
              pricing="£1,000–£3,000 (setup)"
              clients="Scaling SMBs"
            />

            <Service
              icon={<Shield className="h-12 w-12 text-blue-600" />}
              title="Security Audits"
              description="Comprehensive security assessments to identify vulnerabilities and protect your digital assets from threats."
              pricing="£500–£2,000"
              clients="E-commerce, member sites"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Schedule a free consultation to discuss how our services can help your business grow.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

