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
            {/* Project1: The Gentleman's Barber */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                    src="/barbers.png"
                    height={500}
                    width={600}
                    alt="The Gentleman's Barber - Premium Grooming Services"
                    className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">The Gentleman's Barber</h3>
                  <div className="flex space-x-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Barber Services
        </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">SERVICES PROVIDED</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Users className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Haircuts</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Appointment Booking</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Grooming Products Shop</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  The Gentlemans Barber prides itself on delivering premium grooming experiences tailored to the modern man. From
                  haircuts to beard trims, we have refined every detail to provide exceptional service.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Customer satisfaction rate of 95%</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Online bookings increased by 40%</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Expanded customer base through e-commerce integration</span>
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            {/* Project2: SmileBright Dental */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                    src="/dental-hero.jpg"
                    height={500}
                    width={600}
                    alt="SmileBright Dental Clinic Services"
                    className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">SmileBright Dental</h3>
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
                      <Calendar className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Appointment Scheduling</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Star className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Dental Treatment Plans</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Globe className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Patient Portal</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  SmileBright Dental Clinic aimed to modernize its patient experience by providing seamless appointment booking and personalized treatment plans. We developed a user-friendly patient portal with appointment scheduling and dental record management.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Online booking rate increased by 48%</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Customer satisfaction rating improved by 32%</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Efficiency in patient record management increased by 20 hours per week</span>
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Project3: PowerConnect Electric */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                    src="/electric.png"
                    height={500}
                    width={600}
                    alt="PowerConnect Electric - Reliable Electrical Services"
                    className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">PowerConnect Electric</h3>
                  <div className="flex space-x-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          Electrical Services
        </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">SERVICES PROVIDED</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Tool className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Residential Wiring</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <BatteryCharging className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>EV Charger Installation</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Zap className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Emergency Repairs</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  PowerConnect Electric specializes in dependable electrical services for both residential and commercial customers. Whether it’s upgrading your home wiring, installing electric vehicle chargers, or handling emergency repairs, we’ve got you covered.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Achieved 99% positive customer feedback</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Completed over 500 EV charger installations in the past year</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Reduced average emergency response time to under 30 minutes</span>
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Project4: SpeedyFix Auto Repair */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
              <div className="relative h-64 w-full">
                <Image
                    src="/autoShop.png"
                    height={500}
                    width={600}
                    alt="SpeedyFix Auto Repair Digital Transformation"
                    className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">SpeedyFix Auto Repair</h3>
                  <div className="flex space-x-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          Automotive
        </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">SERVICES PROVIDED</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Tool className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Online Booking System</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Search className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Local SEO Strategy</span>
                    </div>
                    <div className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                      <Star className="h-3.5 w-3.5 text-slate-700 mr-1.5" />
                      <span>Customer Review Management</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  SpeedyFix Auto Repair needed to enhance their digital presence and streamline customer interactions. We delivered
                  a robust online booking platform, optimized their local search visibility, and automated their review management.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">15+ online bookings per week (up from 4)</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Google rating improved from 4.0 to 4.9 stars</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Increased website traffic by 120% in 6 months</span>
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
        </div>
      </section>
    </main>
  )
}

