
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
    id: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        id: "service-1",
        title: "Service One",
        description: "This is the description for service one.",
    },
    {
        id: "service-2",
        title: "Service Two",
        description: "Description for service two here.",
    },
    {
        id: "service-3",
        title: "Service Three",
        description: "The third service's description.",
    },
];

const getService = (id: string): Service | undefined => {
    return services.find((service) => service.id === id);
};

interface ServicePageProps {
    params: {
        slug: string;
    };
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
    const service = getService(params.slug);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};

export default ServicePage;