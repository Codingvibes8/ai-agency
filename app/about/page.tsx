import type { Metadata } from "next";

import { CheckCircle } from "lucide-react";

import Image from "next/image";

export const metadata: Metadata = {
  title: "About Our Enterprise AI & Web Solutions Agency | NextGen Innovators",
  description: "Discover how we empower enterprises with cutting-edge AI automation and web solutions. Meet our expert team and learn about our mission to drive digital transformation.",
  keywords: "enterprise web solutions, AI automation agency, digital transformation, enterprise tech partners, corporate web development",
};




export default function AboutPage() {
  return (
      <div className="flex min-h-screen flex-col">
        {/* About Us Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row w-full gap-2">
              {/* Content Section */}
              <div className="space-y-4 mb-4 md:w-1/2">
                <h1 className="text-3xl text-center font-bold text-slate-900">About Us</h1>

                <p className="text-[0.8rem] text-slate-600 leading-relaxed">
                  Founded in 2012, we have evolved from a digital startup to a global enterprise solutions provider.
                  Our journey began with a vision to bridge the gap between cutting-edge technology and real-world
                  business challenges.
                </p>
                {/* Feature Points */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Global Impact</h3>
                      <p className="text-[0.8rem] text-slate-600">
                        Serving SMB owners across 15 industries with scalable, secure solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
                      <p className="text-[0.8rem] text-slate-600">
                        Focused on keeping up with tech trends that deliver revenue growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Section */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl md:w-1/2">
                <Image
                    src="/banner4.jpg"
                    alt="Enterprise team collaboration"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
