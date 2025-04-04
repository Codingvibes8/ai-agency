import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | AI Automation Agency",
  description:
    "Get in touch with our team to discuss your web design and AI automation needs. We're here to help your business grow.",
  keywords: "contact, web design agency, AI automation agency, get in touch, consultation",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Have a question or ready to start your project? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+44 123 456 7890" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-700">
                    Service of Interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="booking">Booking System</SelectItem>
                      <SelectItem value="chatbot">AI Chatbot</SelectItem>
                      <SelectItem value="seo">Local SEO</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Your Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-8">
                  Our team is here to help. Reach out to us through any of the following channels or fill out the
                  contact form.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Office Address</h3>
                      <p className="text-slate-600">
                        123 Tech Hub Street
                        <br />
                        London, EC1V 9BD
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Phone</h3>
                      <p className="text-slate-600">+44 (0) 20 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Email</h3>
                      <p className="text-slate-600">info@aiagency.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Monday - Friday:</span>
                    <span className="text-slate-900 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Saturday:</span>
                    <span className="text-slate-900 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Sunday:</span>
                    <span className="text-slate-900 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <div className="aspect-video w-full bg-slate-200 rounded">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Office location map"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

