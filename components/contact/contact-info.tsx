import { Mail, MapPin, Phone } from "lucide-react"

interface ContactInfoProps {
    title?: string
    description?: string
    address?: {
        street: string
        city: string
        postcode: string
        country: string
    }
    phone?: string
    email?: string
    businessHours?: Array<{
        days: string
        hours: string
    }>
}

export default function ContactInfo({
                                        title = "Contact Information",
                                        description = "Our team is here to help. Reach out to us through any of the following channels or fill out the contact form.",
                                        address = {
                                            street: "123 Tech Hub Street",
                                            city: "London",
                                            postcode: "EC1V 9BD",
                                            country: "United Kingdom",
                                        },
                                        phone = "+44 (0) 20 1234 5678",
                                        email = "info@aiagency.com",
                                        businessHours = [
                                            { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                                            { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
                                            { days: "Sunday", hours: "Closed" },
                                        ],
                                    }: ContactInfoProps) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">{title}</h2>
                <p className="text-slate-600 mb-8">{description}</p>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                        <div>
                            <h3 className="font-medium text-slate-900">Office Address</h3>
                            <p className="text-slate-600">
                                {address.street}
                                <br />
                                {address.city}, {address.postcode}
                                <br />
                                {address.country}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                        <div>
                            <h3 className="font-medium text-slate-900">Phone</h3>
                            <p className="text-slate-600">{phone}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                        <div>
                            <h3 className="font-medium text-slate-900">Email</h3>
                            <p className="text-slate-600">{email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                    {businessHours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                            <span className="text-slate-700">{item.days}:</span>
                            <span className="text-slate-900 font-medium">{item.hours}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

