import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <QuoteIcon className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
        <p className="text-slate-700 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image src={image || "/banner2.svg"} alt={author} width={48} height={48} className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">{author}</h4>
            <p className="text-sm text-slate-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

