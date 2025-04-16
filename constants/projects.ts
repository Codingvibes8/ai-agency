import { Globe, Calendar, MessageSquare, ShoppingCart, Search, Users, Star } from "lucide-react"

const projects = [
    {
        title: "Maxim Barbers",
        industry: "Barber",
        description:
            "Maxim Barbers needed a complete digital transformation to compete in the busy London restaurant scene. We created a hyperlocal website with an integrated booking system and AI chatbot to streamline operations.",
        image: "/barbers.png?height=400&width=600",
        services: [
            { iconName: Globe, name: "HyperLocal Website" },
            { iconName: Calendar, name: "Booking System" },
            { iconName: MessageSquare, name: "AI Chatbot" },
        ],
        results: [
            "45% increase in online reservations",
            "68% reduction in phone call volume",
            'Top 3 Google ranking for "best Italian restaurant in Chelsea"',
        ],
    },
    {
        title: "AutoRepair Shop",
        industry: "Retail",
        description:
            "AutoRepair Shop, wanted to expand beyond their physical location. We built a local e-commerce platform that maintained their brand identity while enabling online sales.",
        image: "/brakes1.jpg?height=400&width=600",
        services: [
            { iconName: ShoppingCart, name: "Local E-commerce" },
            { iconName: Search, name: "AI Local SEO" },
        ],
        results: [
            "£12,500 in  sales within first month",
            "32% of sales now coming from outside local area",
            "156% increase in Instagram followers",
        ],
    },
    {
        title: "Electrician",
        industry: "Construction",
        description:
            "Electrician website needed a digital solution to manage their growing base and schedule. We developed a comprehensive integrated booking and payment processing.",
        image: "/dentist-hero.jpg?height=400&width=600",
        services: [
            { iconName: Users, name: "Electrician website" },
            { iconName: Calendar, name: "Booking System" },
            { iconName: Globe, name: "HyperLocal Website" },
        ],
        results: [
            "85% of members actively using the portal",
            "Class attendance increased by 34%",
            "Staff admin time reduced by 15 hours per week",
        ],
    },
    {
        title: "Smile Dental Clinic",
        industry: "Healthcare",
        description:
            "Smile Dental Clinic was struggling to attract new patients in a competitive market. We implemented a comprehensive digital strategy including a new website, local SEO, and automated review management.",
        image: "/dentist-hero.jpg?height=400&width=600",
        services: [
            { iconName: Globe, name: "HyperLocal Website" },
            { iconName: Search, name: "AI Local SEO" },
            { iconName: Star, name: "Review Management" },
        ],
        results: [
            "23 new patient inquiries per month (up from 8)",
            "Google rating improved from 3.8 to 4.7 stars",
            "First page Google ranking for 15 key local search terms",
        ],
    },
]

export default projects
