import type { Metadata } from "next"
import PricingPlansSection from "@/components/sections/PricingPlansSection";


export const metadata: Metadata = {
    title: "Pricing Plans | Web Development Agency",
    description:
        "Discover our pricing plans tailored to businesses of all sizes. Affordable solutions for web design and development to help your business thrive.",
    keywords: "pricing, web development plans, affordable website design, business solutions, web development agency pricing",
};

export default function PricingPage() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">

          <PricingPlansSection />

        </section>
    )
}



