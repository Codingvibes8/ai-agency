import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
    title: string
    industry: string
    description: string
    image: string
}

interface ProjectsSectionProps {
    title: string
    description: string
    projects: Project[]
    showViewAllButton?: boolean
    viewAllButtonText?: string
    viewAllButtonLink?: string
    bgColor?: string
}

export default function ProjectsSection({
                                            title,
                                            description,
                                            projects,
                                            showViewAllButton = true,
                                            viewAllButtonText = "View All Projects",
                                            viewAllButtonLink = "/projects",
                                            bgColor = "bg-slate-50",
                                        }: ProjectsSectionProps) {
    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
                            <div className="relative h-64 w-full">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={`${project.title} Project`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {project.industry}
                  </span>
                                </div>

                                <p className="text-slate-600 mb-4">{project.description}</p>

                                <Link href={viewAllButtonLink}>
                                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                        View Project
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {showViewAllButton && (
                    <div className="text-center">
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

