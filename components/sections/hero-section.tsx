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
                                        primaryButtonText = "Explore Services",
                                        primaryButtonLink = "/services",
                                        secondaryButtonText = "Contact Us",
                                        secondaryButtonLink = "/contact",
                                        image = "/ai-agency-home.jpg?height=400&width=600",
                                        imageAlt = "Hero image",
                                    }: HeroSectionProps) {
    return (
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-6">
                            <Link href={primaryButtonLink}>
                                    {primaryButtonText}
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </Link>
                            <Link href={secondaryButtonLink}>
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

