import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ServiceIcon {
  icon: React.ReactNode
  name: string
}

interface ProjectCardProps {
  title: string
  industry: string
  description: string
  services: ServiceIcon[]
  results: string[]
  image: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  industry,
  description,
  services,
  results,
  image,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden border ${featured ? "border-blue-200 ring-1 ring-blue-200" : "border-slate-200"}`}
    >
      <div className="relative h-64 w-full">
        <Image src={image || "/banner3.svg"} alt={`${title} Project`} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
          <div className="flex space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {industry}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-slate-500 mb-2">SERVICES PROVIDED</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <div key={index} className="flex items-center text-sm bg-slate-100 px-3 py-1 rounded-full">
                {service.icon}
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-slate-600 mb-4">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-slate-500 mb-2">RESULTS</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/projects">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

