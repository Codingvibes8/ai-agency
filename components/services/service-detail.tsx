import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceDetailProps {
    icon: ReactNode
    title: string
    description: string
    pricing: string
    clients: string
}

export default function ServiceDetail({ icon, title, description, pricing, clients }: ServiceDetailProps) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md">
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 mb-6">{description}</p>

            <div className="space-y-3 mb-6">
                <div className="flex items-center">
                    <span className="text-sm font-medium text-slate-700 w-24">Pricing:</span>
                    <span className="text-sm text-slate-900 font-semibold">{pricing}</span>
                </div>
                <div className="flex items-center">
                    <span className="text-sm font-medium text-slate-700 w-24">Ideal for:</span>
                    <span className="text-sm text-slate-600">{clients}</span>
                </div>
            </div>

            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    )
}

