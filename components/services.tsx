import Image from "next/image"
import { Search } from "lucide-react"

const services = [
  {
    number: "01",
    title: "White Background Images",
    description: "Pure white, retailer-compliant hero and angle shots built for Walmart.com.",
    image: "/images/service-white-bg.jpg",
  },
  {
    number: "02",
    title: "Lifestyle Images",
    description: "In-use images that build trust and clarify the product for shoppers.",
    image: "/images/service-lifestyle.jpg",
  },
  {
    number: "03",
    title: "Infographics & Callouts",
    description: "Graphics that explain size, benefits, ingredients, and usage at a glance.",
    image: "/images/service-infographic.jpg",
  },
  {
    number: "04",
    title: "Listing Image Systems",
    description: "Complete 5-8 image sets designed for conversion and compliance.",
    image: "/images/service-styled-studio.jpg",
  },
  {
    number: "05",
    title: "Compliance Review",
    description: "Audit current listing images for quality gaps and retailer issues.",
    image: null,
    icon: Search,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#0071ce] text-sm font-semibold tracking-[0.2em] uppercase">
            Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4 max-w-lg">
            What your Walmart listing needs.
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Image or Icon */}
              {service.image ? (
                <div className="relative aspect-square bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
              ) : (
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  {service.icon && <service.icon className="w-20 h-20 text-[#0071ce]/30" strokeWidth={1} />}
                </div>
              )}
              
              {/* Content */}
              <div className="p-6">
                <span className="text-gray-400 text-sm font-medium">{service.number}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{service.title}</h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
