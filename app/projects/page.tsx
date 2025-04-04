import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Globe, MessageSquare, Search, ShoppingCart, Star, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Projects | AI Automation Agency",
  description: "Explore our portfolio of successful web design and AI automation projects for various businesses.",
  keywords: "portfolio, case studies, web design projects, AI automation projects, client success stories",
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Explore our portfolio of successful web design and AI automation projects that have transformed businesses
              across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Project 1: Bistro Deluxe */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Bistro Deluxe Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">Bistro Deluxe</h3>
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Restaurant
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">SERVICES PROVIDED</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Hyperlocal Website</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Booking System</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <MessageSquare className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>AI Chatbot</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  Bistro Deluxe needed a complete digital transformation to compete in the busy London restaurant scene.
                  We created a hyperlocal website with an integrated booking system and AI chatbot to streamline
                  operations.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">45% increase in online reservations</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">68% reduction in phone call volume</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">
                        Top 3 Google ranking for "best Italian restaurant in Chelsea"
                      </span>
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Project 2: Artisan Boutique */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg"
                  height={400}
                  width={600}
                  alt="Artisan Boutique E-commerce Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">Artisan Boutique</h3>
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Retail
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">SERVICES PROVIDED</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <ShoppingCart className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Local E-commerce</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Search className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>AI Local SEO</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  Artisan Boutique, a handcrafted jewelry store, wanted to expand beyond their physical location. We
                  built a local e-commerce platform that maintained their brand identity while enabling online sales.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">£12,500 in online sales within first month</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">32% of sales now coming from outside local area</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">156% increase in Instagram followers</span>
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Project 3: FitLife Gym */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg"
                  height={400}
                  width={600}
                  alt="FitLife Gym Membership Portal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">FitLife Gym</h3>
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Fitness
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">SERVICES PROVIDED</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Users className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Membership Portal</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Booking System</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Hyperlocal Website</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  FitLife Gym needed a digital solution to manage their growing membership base and class schedule. We
                  developed a comprehensive membership portal with integrated class booking and payment processing.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">85% of members actively using the portal</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Class attendance increased by 34%</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Staff admin time reduced by 15 hours per week</span>
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Project 4: Smile Dental Clinic */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                  src="/banner1.svg"
                  height={400}
                  width={600}
                  alt="Smile Dental Clinic Digital Marketing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">Smile Dental Clinic</h3>
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Healthcare
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">SERVICES PROVIDED</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Hyperlocal Website</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Search className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>AI Local SEO</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Star className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Review Management</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  Smile Dental Clinic was struggling to attract new patients in a competitive market. We implemented a
                  comprehensive digital strategy including a new website, local SEO, and automated review management.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">23 new patient inquiries per month (up from 8)</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Google rating improved from 3.8 to 4.7 stars</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">First page Google ranking for 15 key local search terms</span>
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to be our next success story?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Let us discuss how we can help your business achieve similar results with our web design and AI automation
              solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

