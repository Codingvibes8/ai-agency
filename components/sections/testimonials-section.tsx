import TestimonialCard from "@/components/testimonial-card"

interface Testimonial {
    quote: string
    author: string
    role: string
    image: string
}

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Testimonial[]
    bgColor?: string
}

export default function TestimonialsSection({
                                                title,
                                                description,
                                                testimonials,
                                                bgColor = "bg-white",
                                            }: TestimonialsSectionProps) {
    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            image={testimonial.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

