import type { ReactNode } from "react"
import { CheckCircle } from "lucide-react"

interface Feature {
    title: string
    description: string
    icon?: ReactNode
}

interface FeaturesSectionProps {
    title: string
    description: string
    features: Feature[]
    bgColor?: string
}

export default function FeaturesSection({
                                            title,
                                            description,
                                            features,
                                            bgColor = "bg-slate-50",
                                        }: FeaturesSectionProps) {
    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                            <div className="flex items-start mb-4">
                                {feature.icon || <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />}
                                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                            </div>
                            <p className="text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

