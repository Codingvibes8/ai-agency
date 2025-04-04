import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing | AI Automation Agency",
  description:
    "Transparent pricing for our web design and AI automation services. Find the right solution for your business needs and budget.",
  keywords: "pricing, web design pricing, AI automation pricing, service costs, affordable web design",
}

interface PricingCardProps {
  title: string
  description: string
  price: string
  recurring?: string
  features: string[]
  popular?: boolean
}

function PricingCard({ title, description, price, recurring, features, popular }: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border ${popular ? "border-blue-400 ring-2 ring-blue-400 ring-opacity-20" : "border-slate-200"} p-8 relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6 h-12">{description}</p>

      <div className="mb-6">
        <span className="text-3xl font-bold text-slate-900">{price}</span>
        {recurring && <span className="text-slate-600 ml-1">{recurring}</span>}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className={popular ? "bg-blue-600 hover:bg-blue-700 w-full" : "bg-slate-800 hover:bg-slate-900 w-full"}>
        Get Started
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Transparent Pricing</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Clear, upfront pricing with no hidden fees. Choose the right solution for your business needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Website Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Website Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Custom-built websites and web applications tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Hyperlocal Website"
              description="Perfect for small local businesses looking to establish an online presence."
              price="£1,500"
              features={[
                "Mobile-responsive design",
                "SEO optimization",
                "Contact form",
                "Google Maps integration",
                "Social media links",
                "Basic analytics",
              ]}
            />

            <PricingCard
              title="Business Website"
              description="Comprehensive solution for established businesses with more complex needs."
              price="£3,500"
              recurring=""
              features={[
                "All Hyperlocal Website features",
                "Blog/news section",
                "Email newsletter integration",
                "Advanced SEO optimization",
                "Content management system",
                "Performance optimization",
              ]}
              popular={true}
            />

            <PricingCard
              title="E-commerce Website"
              description="Complete online store solution for selling products or services online."
              price="£5,000"
              recurring="+ 5% revenue"
              features={[
                "All Business Website features",
                "Product catalog",
                "Secure payment processing",
                "Inventory management",
                "Order tracking",
                "Customer accounts",
                "Abandoned cart recovery",
              ]}
            />
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI Automation Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Intelligent automation tools to streamline operations and enhance customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="AI Chatbot"
              description="24/7 customer service automation for your website or social media."
              price="£500"
              recurring="+ £100/month"
              features={[
                "Custom AI training",
                "FAQ automation",
                "Lead qualification",
                "Appointment scheduling",
                "Seamless handoff to humans",
                "Monthly performance reports",
              ]}
            />

            <PricingCard
              title="AI Local SEO"
              description="Data-driven SEO strategies to dominate local search results."
              price="£300"
              recurring="/month"
              features={[
                "Local keyword research",
                "Google Business Profile optimization",
                "Local citation building",
                "Review management",
                "Competitor analysis",
                "Monthly performance reports",
              ]}
              popular={true}
            />

            <PricingCard
              title="AI Social Media"
              description="AI-powered content creation and management for social platforms."
              price="£200"
              recurring="/month"
              features={[
                "Content calendar",
                "AI-generated posts",
                "Scheduled publishing",
                "Engagement monitoring",
                "Performance analytics",
                "Monthly strategy adjustments",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a custom solution?</h2>
                <p className="text-lg text-slate-300">
                  We offer tailored packages combining our services to meet your specific business requirements and
                  budget.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Common questions about our pricing and services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Do you offer payment plans?</h3>
              <p className="text-slate-600">
                Yes, we offer flexible payment plans for projects over £2,000. Typically, this involves a 50% deposit to
                begin work, with the remainder paid in monthly installments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What is included in the setup fee?</h3>
              <p className="text-slate-600">
                The setup fee covers initial development, design, configuration, testing, and deployment of your
                solution. It also includes basic training on how to use your new system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Are there any hidden costs?</h3>
              <p className="text-slate-600">
                No, we believe in transparent pricing. All costs are discussed upfront before any work begins. The only
                additional costs would be for requested changes outside the original project scope.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Do you offer discounts for multiple services?
              </h3>
              <p className="text-slate-600">
                Yes, we offer package discounts when you combine multiple services. Contact us for a custom quote based
                on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

