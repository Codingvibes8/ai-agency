interface MapSectionProps {
}

export default function MapSection({
                                       bgColor = "bg-slate-50",
                                   }: MapSectionProps) {
    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <div className="aspect-video w-full bg-slate-200 rounded">
                    </div>
                </div>
            </div>
        </section>
}