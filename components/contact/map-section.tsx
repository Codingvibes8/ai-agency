import Image from "next/image";
interface MapSectionProps {
    address?: string;
    accessToken?: string;
    zoom?: number;
    width?: number;
    height?: number;
    bgColor?: string;
}

export default function MapSection({

                                       accessToken = process.env.MAPBOX_ACCESS_TOKEN,
                                       zoom = 15,
                                       width = 1200,
                                       height = 600,
                                       bgColor = "bg-slate-50",
                                   }: MapSectionProps) {

    const longitude = -0.1276; // London coordinates as example
    const latitude = 51.5072;

    const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+f00(${longitude},${latitude})/${longitude},${latitude},${zoom},0/${width}x${height}?accessToken=${accessToken}`;

    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <div className="aspect-video w-full bg-slate-200 rounded">
                        <Image src={mapUrl || "/placeholder.svg"} alt="Office location map" className="w-full h-full object-cover rounded" />
                    </div>
                </div>
            </div>
        </section>
    );
}