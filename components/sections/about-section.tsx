import React from 'react';
import { aboutConstants } from "@/lib/constants";

export default function AboutSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {aboutConstants.aboutTitle}
                        </h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                            {aboutConstants.aboutSubTitle}
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {aboutConstants.aboutValue.map((value, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50 ${index === aboutConstants.aboutValue.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="p-2 bg-primary/10 rounded-full">
                                <img
                                    src={value.icon}
                                    alt={`${value.title} Icon`}
                                    className="h-6 w-6 text-primary"
                                />
                            </div>
                            <h3 className="text-xl font-bold">{value.title}</h3>
                            <p className="text-gray-500 text-center">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
