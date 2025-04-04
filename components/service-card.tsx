import type { ReactNode } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  pricing: string
  clients: string
}

export default function ServiceCard({ icon, title, description, pricing, clients }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <span className="text-sm font-medium text-slate-700 w-20">Pricing:</span>
            <span className="text-sm text-slate-900 font-semibold">{pricing}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium text-slate-700 w-20">Clients:</span>
            <span className="text-sm text-slate-600">{clients}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
          Learn More
        </Badge>
      </CardFooter>
    </Card>
  )
}

