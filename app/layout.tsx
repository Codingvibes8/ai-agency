import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Automation Agency | Web Design & AI Solutions",
  description:
    "Enterprise-grade web design and AI automation solutions for businesses. Specializing in hyperlocal websites, booking systems, e-commerce, and AI-powered solutions.",
  keywords: "web design, AI automation, hyperlocal websites, booking systems, e-commerce, AI chatbots, SEO",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

