import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CTASectionProps {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    bgColor?: string
    containerBgColor?: string
}

export default function CTASection({
                                       title,
                                       description,
                                       buttonText,
                                       buttonLink,
                                       bgColor = "bg-gradient-to-r from-slate-900 to-slate-800",
                                       containerBgColor = "bg-white",
                                   }: CTASectionProps) {
    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
            <div className="container mx-auto max-w-6xl">
                <div className={`${containerBgColor} rounded-2xl p-8 md:p-12 shadow-xl`}>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                            <p className="text-lg text-slate-600">{description}</p>
                        </div>
                        <div className="lg:w-1/3 flex justify-center lg:justify-end">
                            <Link href={buttonLink}>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                                    {buttonText}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

