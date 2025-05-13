import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
    {
        name: "Basic",
        description: "For small businesses",
        price: "$19.99",
        features: ["Basic features", "Limited support", "Limited customization"],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Standard",
        description: "For growing businesses",
        price: "$49.99",
        features: ["All basic features", "Priority support", "More customization options"],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Premium",
        description: "For large enterprises",
        price: "$99.99",
        features: ["All standard features", "24/7 support", "Full customization"],
        cta: "Get Started",
        popular: false,
    },]

export default function PricingPlansSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                            Choose the perfect plan for your business needs
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {pricingPlans.map((plan, index) => (
                        <Card key={index} className={`flex flex-col h-full ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                            {plan.popular && (
                                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle>{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <Check className="h-5 w-5 text-primary mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}>{plan.cta}</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
