import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | AI Automation Agency",
  description: "Learn about our mission, values, and the team behind our web design and AI automation agency.",
  keywords: "about us, web design agency, AI automation agency, our team, our mission, our values",
}

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
}

function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center text-center">
      <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
        <Image src={image || "/man-user.svg"} alt={name} width={128} height={128} className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-1">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{role}</p>
      <p className="text-slate-600">{bio}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                We Build Digital <span className="text-blue-400">Success</span> Stories
              </h1>
              <p className="text-lg text-slate-300 max-w-xl">
                Our mission is to empower local businesses with enterprise-grade web solutions and AI automation that
                drive real results.
              </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
                <div className="relative bg-slate-800 p-6 rounded-lg shadow-xl">
                  <Image
                    src="/banner2.jpg"
                    height={400}
                    width={600}
                    alt="Our team at work"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">How we started and where we are going</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/banner2.jpg"
                height={400}
                width={600}
                alt="Company history"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-6">
              <p className="text-slate-700">
                Founded in 2020, our agency was born from a simple observation: local businesses were being left behind
                in the digital revolution. While enterprise companies had access to cutting-edge technology and
                expertise, small and medium businesses were often stuck with outdated, ineffective digital solutions.
              </p>

              <p className="text-slate-700">
                We set out to change that by bringing enterprise-grade web design and AI automation to local businesses
                at accessible price points. Our team combines deep technical expertise with a genuine understanding of
                the challenges faced by local businesses.
              </p>

              <p className="text-slate-700">
                Today, we've helped hundreds of businesses across the UK transform their digital presence and
                operations. From restaurants and clinics to boutique shops and professional services, we have delivered
                solutions that drive real business results.
              </p>

              <p className="text-slate-700">
                Our vision is to continue bridging the digital divide, ensuring that businesses of all sizes can harness
                the power of technology to thrive in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Excellence</h3>
              </div>
              <p className="text-slate-600">
                We believe every business deserves the highest quality digital solutions, regardless of size. We never
                compromise on quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Innovation</h3>
              </div>
              <p className="text-slate-600">
                We continuously explore new technologies and approaches to deliver cutting-edge solutions that keep our
                clients ahead of the curve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Transparency</h3>
              </div>
              <p className="text-slate-600">
                We believe in clear communication, honest pricing, and setting realistic expectations. No surprises,
                just results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Partnership</h3>
              </div>
              <p className="text-slate-600">
                We see ourselves as partners in our clients' success, not just service providers. Your growth is our
                growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Results-Driven</h3>
              </div>
              <p className="text-slate-600">
                We focus on delivering measurable business outcomes, not just technical deliverables. If it doesn't
                drive results, we don't do it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-slate-900">Accessibility</h3>
              </div>
              <p className="text-slate-600">
                We believe in making enterprise-grade technology accessible to businesses of all sizes through fair
                pricing and scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">The talented people behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Alex Thompson"
              role="Founder & CEO"
              bio="With over 15 years in tech and digital marketing, Alex founded the agency to bring enterprise solutions to local businesses."
              image="/man-user.svg?height=128&width=128"
            />

            <TeamMember
              name="Sarah Chen"
              role="CTO"
              bio="A former Google engineer, Sarah leads our technical team and ensures we stay at the cutting edge of web development and AI."
              image="/woman-user.svg?height=128&width=128"
            />

            <TeamMember
              name="James Wilson"
              role="Creative Director"
              bio="Award-winning designer with a passion for creating beautiful, functional interfaces that drive conversions."
              image="/man-user2.svg?height=128&width=128"
            />

            <TeamMember
              name="Priya Sharma"
              role="AI Solutions Lead"
              bio="AI specialist with expertise in machine learning and natural language processing for business applications."
              image="/woman-user2?height=128&width=128"
            />

            <TeamMember
              name="Michael Rodriguez"
              role="Client Success Manager"
              bio="Dedicated to ensuring our clients achieve their business goals through our digital solutions."
              image="/man-user.svg?height=128&width=128"
            />

            <TeamMember
              name="Emma Lewis"
              role="SEO & Content Strategist"
              bio="Data-driven marketer specializing in local SEO and content strategies that drive traffic and conversions."
              image="/woman-user.svg?height=128&width=128"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to work with us?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Let us discuss how we can help your business thrive in the digital landscape.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

