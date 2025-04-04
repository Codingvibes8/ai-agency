"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">
                AI<span className="text-blue-600">Agency</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/projects" className="text-slate-700 hover:text-blue-600 font-medium">
              Projects
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-slate-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-slate-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="block text-slate-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/pricing"
              className="block text-slate-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block text-slate-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}


