"use client"


import { CardHeader, CardTitle, CardDescription, CardContent,Card  } from "@/components/ui/card"
import Image from "next/image";

interface Project {
    title: string
    industry: string
    description: string
    image: string
    iconName: string,
    results: string[]
}

export interface ProjectsSectionProps {
    projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <Card key={index} className="h-full">
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2">

                            {project.iconName}
                            <CardTitle>{project.title}</CardTitle>
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image src={project.image} width={300} height={300} alt={'project-card-image'} className={'object-cover'}/>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}


