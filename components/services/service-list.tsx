import type { ReactNode } from "react"
import ServiceDetail from "@/components/services/service-detail"

interface Service {
    icon: ReactNode
    title: string
    description: string
    pricing: string
    clients: string
}

interface ServicesListProps {
    services: Service[]
}

export default function ServicesList({ services }: ServicesListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceDetail
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    pricing={service.pricing}
                    clients={service.clients}
                />
            ))}
        </div>
    )
}

