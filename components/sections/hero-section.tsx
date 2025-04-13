import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
    title: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    image?: string;
    imageAlt?: string;
}

export default function HeroSection({
                                        title,
                                        description,
                                        primaryButtonText = "Explore Services",
                                        primaryButtonLink = "/services",
                                        secondaryButtonText = "Contact Us",
                                        secondaryButtonLink = "/contact",
                                        image = "/banner4.jpg",
                                        imageAlt = "Banner Image",
                                    }: HeroSectionProps) {
    return (
        <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6">

                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-lg text-gray-600">{description}</p>
                    <div className="flex space-x-4">
                        <Link href={primaryButtonLink}>
                            <a className="inline-flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                                {primaryButtonText}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Link>
                        <Link href={secondaryButtonLink}>
                            <a className="inline-flex items-center px-4 py-2 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-md">
                                {secondaryButtonText}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
                        <div className="relative bg-slate-800 p-6 rounded-lg shadow-xl">
                            <Image
                                src={image}
                                alt={imageAlt}
                                className="w-full h-auto rounded-md"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
