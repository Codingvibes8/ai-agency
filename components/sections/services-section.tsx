import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ServiceCard from "@/components/service-card"

interface Service {
    icon: ReactNode
    title: string
    description: string
    pricing: string
    clients: string
}

interface ServicesSectionProps {
    title: string
    description: string
    services: Service[]
    showViewAllButton?: boolean
    viewAllButtonText?: string
    viewAllButtonLink?: string
    bgColor?: string
}

export default function ServicesSection({
                                            title,
                                            description,
                                            services,
                                            showViewAllButton = true,
                                            viewAllButtonText = "View All Services",
                                            viewAllButtonLink = "/services",
                                            bgColor = "bg-white",
                                        }: ServicesSectionProps) {
    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            pricing={service.pricing}
                            clients={service.clients}
                        />
                    ))}
                </div>

                {showViewAllButton && (
                    <div className="text-center mt-12">
                        <Link href={viewAllButtonLink}>
                            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                {viewAllButtonText}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

