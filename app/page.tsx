import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

import TestimonialCard from "@/components/testimonial-card"
import type { Metadata } from "next"
import Image from "next/image"
import ServicesPage from "@/app/services/page";
import AboutPage from "@/app/about/page";
export const metadata: Metadata = {
  title: "AI Automation Agency | Web Design & AI Solutions",
  description:
    "Enterprise-grade web design and AI automation solutions for businesses. Specializing in hyperlocal websites, booking systems, e-commerce, and AI-powered solutions.",
  keywords: "web design, AI automation, hyperlocal websites, booking systems, e-commerce, AI chatbots, SEO",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className={'text-4xl font-bold font-serif'}><span className={'text-yellow-400'}>Infini</span>
                <span className={'text-blue-700'}>Tecx</span>
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-blue-400">Web Development</span> &{" "}
                <span className="text-blue-400">AI Automation</span>
              </h1>
              <p className="text-[0.8rem] text-slate-300 max-w-xl">
                Offering cutting-edge Web solutions and AI-powered automation. Tailored for local
                businesses seeking growth and digital excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" className="text-white border-white bg-indigo-800">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
                <div className="relative bg-slate-800 p-6 rounded-lg shadow-xl">
                  <Image
                    src="/ai-agency-home.jpg?"
                    height={400}
                    width={600}
                    alt="AI-powered web solutions"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About*/}
        <AboutPage/>
      {/* Featured Services */}
      <ServicesPage/>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Enterprise-Grade Quality</h3>
              </div>
              <p className="text-slate-600">
                We build solutions with the same rigor and quality standards used for enterprise clients, regardless of
                project size.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">AI-Powered Efficiency</h3>
              </div>
              <p className="text-slate-600">
                Our AI automation tools reduce manual work, increase accuracy, and help your business operate more
                efficiently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Local Business Focus</h3>
              </div>
              <p className="text-slate-600">
                We understand the unique challenges of local businesses and create solutions specifically designed for
                local success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Transparent Pricing</h3>
              </div>
              <p className="text-slate-600">
                Clear, upfront pricing with no hidden fees. We believe in building long-term relationships based on
                trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Ongoing Support</h3>
              </div>
              <p className="text-slate-600">
                We do not just build and leave. Our team provides continuous support to ensure your digital assets keep
                performing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Results-Driven Approach</h3>
              </div>
              <p className="text-slate-600">
                We measure success by the business outcomes we help you achieve, not just by technical deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how our solutions have transformed businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The hyperlocal website they built for our restaurant increased our online orders by 45% in just two months."
              author="Sarah Johnson"
              role="Owner, Bistro Deluxe"
              image="/woman-user2.svg?height=100&width=100"
            />

            <TestimonialCard
              quote="Their booking system revolutionized how we manage appointments. Our no-show rate dropped from 15% to just 3%."
              author="Michael Chen"
              role="Director, Wellness Clinic"
              image="/man-user.svg?height=100&width=100"
            />

            <TestimonialCard
              quote="The AI chatbot handles 70% of our customer inquiries automatically, freeing up our staff for more complex issues."
              author="Emma Rodriguez"
              role="Manager, Grand Hotel"
              image="/woman-user.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we have helped businesses transform their digital presence and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                  src="/dentist-hero.jpg"
                  height={400}
                  width={600}
                  alt="Dental Website"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">Dental Clinic </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Medicine
                  </span>
                </div>

                <p className="text-slate-600 mb-4">
                  Complete digital transformation with a hyperlocal website, booking system, and AI chatbot, resulting
                  in 45% more online reservations.
                </p>

                <Link href="/projects">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                  src="/electric1.png"
                  height={400}
                  width={600}
                  alt="Electrician website hero image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">ElectricJay</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Construction
                  </span>
                </div>

                <p className="text-slate-600 mb-4">
                  Comprehensive  class booking system that increased attendance by 34% and reduced
                  admin time by 15 hours weekly.
                </p>

                <Link href="/projects">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-500">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Ready to transform your business?
                </h2>
                <p className="text-lg text-slate-600">
                  Schedule a free consultation to discuss how our web design and AI automation solutions can help your
                  business grow.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

