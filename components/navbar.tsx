"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { navigationData } from "@/lib/constants"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { mainNav } = navigationData

  return (
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold font-serif text-slate-900">
                Infini<span className="font-serif text-blue-600">Techx</span>
              </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {mainNav.map((item) => (
                  <Link key={item.name} href={item.href} className="text-slate-700 hover:text-blue-600 font-medium">
                    {item.name}
                  </Link>
              ))}
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
                {mainNav.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="block text-slate-700 hover:text-blue-600 font-medium py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                ))}
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Us</Button>
                </Link>
              </div>
            </div>
        )}
      </header>
  )
}

