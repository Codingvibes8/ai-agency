import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                            Get in touch with our team to discuss your project
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Send Us a Message</CardTitle>
                            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Name
                                        </label>
                                        <Input id="name" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <Input id="email" type="email" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <Input id="subject" placeholder="Subject" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                                </div>
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>Reach out to us directly using the information below.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-gray-500">info@aiagency.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-gray-500">(123) 456-7890</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">Address</h3>
                                        <p className="text-gray-500">123 Tech Street, Innovation City, 12345</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Business Hours</CardTitle>
                                <CardDescription>When you can reach our team</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
