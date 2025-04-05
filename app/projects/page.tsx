import type { Metadata } from "next"
import ProjectsSection from "@/components/projects-section"
import type {Project} from "@/components/projects-section"

export const metadata: Metadata = {
    title: "Our Projects | Enterprise Web & AI Solutions",
    description:
        "Explore our portfolio of successful web development and AI automation projects across various industries.",
}

export default function ProjectsPage() {

    const projects: Project[] = [
        {
            image: "/banner4.jpg?width=300&height=300&auto=format&fit=crop",
            title: "E-commerce Platform",
            description: "Modern online shopping experience with AI-powered recommendations",
            tags: ["Web Development", "AI", "UX Design"],
            industry: "Retail",
            iconName: "shopping-cart",
            results: "Increased sales by 40% in the first quarter"
        },
        {
            image: "/banner2.jpg?width=300&height=300&auto=format&fit=crop",
            title: "Healthcare Management System",
            description: "Streamlined patient care with integrated AI diagnostics",
            tags: ["Healthcare", "AI", "Data Security"],
            industry: "Healthcare",
            iconName: "heart-pulse",
            results: "Reduced diagnosis time by 30%"
        },
        {
            image: "/banner1.jpg?width=300&height=300&auto=format&fit=crop",
            title: "Financial Analytics Dashboard",
            description: "Real-time financial insights with predictive analytics",

            tags: ["FinTech", "Data Visualization", "AI"],
            industry: "Finance",
            iconName: "chart-line-up",
            results: "Improved investment returns by 15%"
        }
    ];

    return (
        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Success Stories</h1>
                <p className="text-xl text-muted-foreground">
                    Transforming businesses through innovative web development and AI automation solutions.
                </p>
            </div>

            <ProjectsSection projects={projects} />
        </main>
    )
}
