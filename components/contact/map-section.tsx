interface MapSectionProps {
    imageUrl?: string
    imageAlt?: string
    bgColor?: string
}

export default function MapSection({
                                       imageUrl = "/placeholder.svg?height=600&width=1200",
                                       imageAlt = "Office location map",
                                       bgColor = "bg-slate-50",
                                   }: MapSectionProps) {
    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <div className="aspect-video w-full bg-slate-200 rounded">
                        <img src={imageUrl || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover rounded" />
                    </div>
                </div>
            </div>
        </section>
    )
}

