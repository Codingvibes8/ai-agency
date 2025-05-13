import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface Service {
    icon: React.ElementType
    name: string
}

interface Project {
    title: string
    industry: string
    description: string
    image: string
    services: Service[]
    results: string[]
}

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { title, industry, description, image, services, results } = project

    return (
        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
            <div className="relative h-64 w-full">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                        {industry}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6">{description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div key={index} className="flex items-center gap-1.5">
                                <Icon className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium">{service.name}</span>
                            </div>
                        )
                    })}
                </div>
            </CardContent>

            <CardFooter className="bg-muted/50 flex flex-col items-start pt-4">
                <h4 className="font-semibold text-sm uppercase tracking-wide mb-2">Results</h4>
                <ul className="space-y-2 w-full">
                    {results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-sm">{result}</span>
                        </li>
                    ))}
                </ul>
            </CardFooter>
        </Card>
    )
}
