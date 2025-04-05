
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
    title: string
    description: string
    primaryButtonText?: string
    primaryButtonLink?: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
    image?: string
    imageAlt?: string
}

export default function HeroSection({
                                        title="Welcome to InfiniTechx",
                                        description="Web Development and AI Solutions",
                                        primaryButtonText = "Explore Services",
                                        primaryButtonLink = "/services",
                                        secondaryButtonText = "Contact Us",
                                        secondaryButtonLink = "/contact",
                                        image = "/ai-agency-home.jpg?height=400&width=600",
                                        imageAlt = "Hero image",
                                    }: HeroSectionProps) {
    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-8 sm:px-16 lg:px-24">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl font-bold text-white">{title}</h1>
                        <p
                            className="text-lg max-w-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text"
                        >
                            {description}
                        </p>

                        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 pt-4">
                            <Link href={primaryButtonLink}>
                                <Button size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 hover:text-2xl cursor-pointer">
                                    {primaryButtonText}
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </Link>
                            <Link href={secondaryButtonLink}>
                                <Button size="lg"
                                        className="cursor-pointer text-white border-white bg-gray-400 hover:transform:scale-110 duration-300 hover:text-2xl">
                                    {secondaryButtonText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
                            <div className="relative bg-slate-800 p-6 rounded-lg shadow-xl">
                                <Image src={image || "/banner4.svg"} alt={imageAlt} className="w-full h-auto rounded-md" width={600} height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

