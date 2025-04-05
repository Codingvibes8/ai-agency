import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactFormProps {
    title?: string
    services?: Array<{ value: string; label: string }>
}

export default function ContactForm({
                                        title = "Send Us a Message",
                                        services = [
                                            { value: "website", label: "Website Development" },
                                            { value: "ecommerce", label: "E-commerce" },
                                            { value: "booking", label: "Booking System" },
                                            { value: "chatbot", label: "AI Chatbot" },
                                            { value: "seo", label: "Local SEO" },
                                            { value: "social", label: "Social Media" },
                                            { value: "other", label: "Other" },
                                        ],
                                    }: ContactFormProps) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">{title}</h2>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                            First Name
                        </label>
                        <Input id="firstName" placeholder="John" required />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                            Last Name
                        </label>
                        <Input id="lastName" placeholder="Doe" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+44 123 456 7890" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-slate-700">
                        Service of Interest
                    </label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                    {service.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Your Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                </Button>
            </form>
        </div>
    )
}

