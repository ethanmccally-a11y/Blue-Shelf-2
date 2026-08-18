"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Camera, LayoutGrid, Users, Layers, ArrowRight } from "lucide-react"

const showcaseImages = [
  {
    id: "white-bg",
    label: "White Background",
    description: "Pure white, retailer-compliant hero and angle shots built for Walmart.com.",
    src: "/images/showcase-white-bg.jpg",
    icon: Camera,
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    description: "In-use images that build trust and clarify the product for shoppers.",
    src: "/images/service-lifestyle.jpg",
    icon: Users,
  },
  {
    id: "infographic",
    label: "Infographics & Callouts",
    description: "Graphics that explain size, benefits, ingredients, and usage at a glance.",
    src: "/images/service-infographic.jpg",
    icon: LayoutGrid,
  },
  {
    id: "styled",
    label: "Styled Studio",
    description: "Brand-aligned studio setups with props, lighting, and editorial feel.",
    src: "/images/service-styled-studio.jpg",
    icon: Layers,
  },
]

export function ProductShowcase() {
  const [activeImage, setActiveImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleImageChange = (index: number) => {
    setIsImageLoading(true)
    setActiveImage(index)
    setTimeout(() => setIsImageLoading(false), 300)
  }

  return (
    <section ref={sectionRef} id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium text-[#0071ce] tracking-wider uppercase mb-4">
            What We Deliver
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One product. Multiple content types.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Every SKU gets a complete image system designed to perform across the digital shelf.
          </p>
        </div>

        {/* Interactive showcase */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Image display - larger area */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              {showcaseImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeImage === index 
                      ? "opacity-100 scale-100 z-10" 
                      : "opacity-0 scale-[1.02] z-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
              
              {/* Loading state */}
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-[#0071ce] border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
            
            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {showcaseImages.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => handleImageChange(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeImage === i 
                      ? "bg-[#0071ce] w-8" 
                      : "bg-gray-200 w-2 hover:bg-gray-300"
                  }`}
                  aria-label={`View ${showcaseImages[i].label}`}
                />
              ))}
            </div>
          </div>

          {/* Content type selector - compact cards */}
          <div 
            className={`lg:col-span-2 space-y-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {showcaseImages.map((image, index) => {
              const Icon = image.icon
              const isActive = activeImage === index
              
              return (
                <button
                  key={image.id}
                  onClick={() => handleImageChange(index)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-[#0071ce] bg-[#0071ce]/5 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-[#0071ce] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isActive ? "text-[#0071ce]" : "text-gray-900"
                        }`}>
                          {image.label}
                        </h3>
                        <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                          isActive ? "text-[#0071ce] translate-x-0 opacity-100" : "text-gray-300 -translate-x-2 opacity-0"
                        }`} />
                      </div>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}

            {/* CTA */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <a
                href="#contact"
                className="inline-flex items-center text-[#0071ce] font-medium group text-sm"
              >
                <span className="border-b border-transparent group-hover:border-[#0071ce] transition-colors">
                  See how we can help your brand
                </span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
