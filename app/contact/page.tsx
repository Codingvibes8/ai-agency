import type { Metadata } from "next"

import ContactSection from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact Us | AI Automation Agency",
  description:
      "Get in touch with our team to discuss your web design and AI automation needs. We're here to help your business grow.",
  keywords: "contact, web design agency, AI automation agency, get in touch, consultation",
}

export default function ContactPage() {


  return (
      <main className="flex min-h-screen flex-col">
     <ContactSection/>
      </main>
  )
}

