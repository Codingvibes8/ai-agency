'use client';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { SERVICES_CONSTANTS } from '@/constants/services';

interface Service {
    id: string;
    title: string;
    description: string;
}

const mockServices: Service[] = SERVICES_CONSTANTS;

function ServicesSection() {
    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {mockServices.map(service => (
                    <Card key={service.id}>
                        <CardHeader>
                            <CardTitle>
                                <Link href={`/services/${service.id}`} className="hover:underline">
                                    {service.title}
                                </Link>
                            </CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;
