"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

// Dinner plate images (10")
const dinnerPlateImages = [
  { 
    src: "/images/case-label-hero.jpg", 
    alt: "Dinner plate hero - Stack of 125 plates with label",
    label: "Hero Image",
  },
  { 
    src: "/images/case-front.jpg", 
    alt: "Dinner plate front - Clean top-down view",
    label: "White Background",
  },
  { 
    src: "/images/case-bbq-lifestyle.jpg", 
    alt: "Dinner plate lifestyle - Ribs with mac and cheese",
    label: "Lifestyle",
  },
  { 
    src: "/images/case-burger-lifestyle.jpg", 
    alt: "Dinner plate lifestyle - Cheeseburger and coleslaw",
    label: "Lifestyle",
  },
  { 
    src: "/images/case-label-back.jpg", 
    alt: "Dinner plate back label - Certifications and info",
    label: "Back Label",
  },
  { 
    src: "/images/case-dimension-callout.jpg", 
    alt: "Dimension callout - 10 inch dinner and 8.75 inch lunch plates",
    label: "Dimension Callout",
  },
  { 
    src: "/images/case-combined-lifestyle.jpg", 
    alt: "Combined lifestyle - Lunch and dinner plates with BBQ and sandwich on gingham",
    label: "Lifestyle",
  },
]

// Lunch plate images (8.75")
const lunchPlateImages = [
  { 
    src: "/images/case-lunch-hero.jpg", 
    alt: "Lunch plate hero - Stack of 125 plates with label",
    label: "Hero Image",
  },
  { 
    src: "/images/case-lunch-front.jpg", 
    alt: "Lunch plate front - Clean top-down view",
    label: "White Background",
  },
  { 
    src: "/images/case-lunch-sandwich.jpg", 
    alt: "Lunch plate lifestyle - Sandwich with chips on wood",
    label: "Lifestyle",
  },
  { 
    src: "/images/case-lunch-salad.jpg", 
    alt: "Lunch plate lifestyle - Chicken caesar salad",
    label: "Lifestyle",
  },
  { 
    src: "/images/case-lunch-back.jpg", 
    alt: "Lunch plate back label - Certifications and info",
    label: "Back Label",
  },
  { 
    src: "/images/case-dimension-callout.jpg", 
    alt: "Dimension callout - 10 inch dinner and 8.75 inch lunch plates",
    label: "Dimension Callout",
  },
  { 
    src: "/images/case-combined-lifestyle.jpg", 
    alt: "Combined lifestyle - Lunch and dinner plates with BBQ and sandwich on gingham",
    label: "Lifestyle",
  },
]

const deliverables = [
  "Hero imagery for both plate sizes",
  "White-background product views",
  "Lifestyle images showing real use scenarios",
  "Dimension callouts to communicate size clearly",
]

export function CaseStudy() {
  const [activeSku, setActiveSku] = useState<"dinner" | "lunch">("dinner")
  const [selectedImage, setSelectedImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const currentImages = activeSku === "dinner" ? dinnerPlateImages : lunchPlateImages

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Reset selected image when SKU changes
  useEffect(() => {
    setSelectedImage(0)
  }, [activeSku])

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % currentImages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [currentImages.length])

  return (
    <section ref={sectionRef} id="case-study" className="bg-white py-28 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Kanak Logo */}
        <div 
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#0071ce] text-sm font-semibold tracking-[0.2em] uppercase block mb-6">
            Case Study
          </span>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/kanak-logo.png"
              alt="Kanak Naturals"
              width={320}
              height={120}
              className="h-24 w-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Launching Sustainables for Kanak Naturals
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Product content for two new SKUs: one lunch plate and one dinner plate.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image gallery side */}
          <div 
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 shadow-lg">
              {currentImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-all duration-500 ${
                    selectedImage === index 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
              <div className="absolute bottom-5 left-5 flex items-center gap-2">
                <span className="bg-white/95 backdrop-blur-sm text-xs font-medium px-4 py-2 rounded-full text-gray-700 shadow-sm">
                  {currentImages[selectedImage].label}
                </span>
                <span className="bg-[#0071ce] text-xs font-medium px-4 py-2 rounded-full text-white shadow-sm">
                  {activeSku === "dinner" ? "10\" Dinner" : "8.75\" Lunch"}
                </span>
              </div>
              {/* Progress indicator */}
              <div className="absolute bottom-5 right-5 flex items-center gap-1.5">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      selectedImage === index 
                        ? "w-6 bg-[#0071ce]" 
                        : "w-1.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail row - scrollable on mobile */}
            <div className="flex gap-3 overflow-x-auto pb-2 pt-2">
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 transition-all duration-300 ${
                    selectedImage === index 
                      ? "ring-2 ring-[#0071ce] ring-offset-2 shadow-lg scale-105" 
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content side */}
          <div 
            className={`lg:sticky lg:top-24 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Brand badge with logos */}
            <div className="inline-flex items-center gap-3 mb-8 bg-gray-50 rounded-full px-5 py-2.5">
              <Image
                src="/images/kanak-logo.png"
                alt="Kanak Naturals"
                width={120}
                height={40}
                className="h-6 w-auto"
              />
              <span className="text-gray-300">|</span>
              <Image
                src="/images/sustainables-logo.png"
                alt="Sustainables"
                width={120}
                height={40}
                className="h-5 w-auto"
              />
            </div>

            {/* Project overview */}
            <div className="mb-10">
              <p className="text-gray-600 leading-relaxed text-lg">
                Kanak Naturals brought Blue Shelf in to support the launch of its new Sustainables line with retail-ready content for two SKUs: a lunch plate and a dinner plate. We created a structured image system that included hero shots, white-background product views, lifestyle imagery, and dimension-focused callouts to help present the new line clearly across ecommerce listings.
              </p>
            </div>

            {/* What we delivered */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5">
                What Blue Shelf Delivered
              </h3>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="w-2 h-2 rounded-full bg-[#0071ce] mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive SKU selector */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5">
                View by SKU
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveSku("dinner")}
                  className={`rounded-2xl p-5 text-left transition-all duration-300 hover-lift ${
                    activeSku === "dinner"
                      ? "bg-[#0071ce] text-white shadow-xl shadow-[#0071ce]/20"
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <div className="text-3xl font-black mb-1">10"</div>
                  <div className={`text-sm font-medium ${activeSku === "dinner" ? "text-white/80" : "text-gray-500"}`}>
                    Dinner Plate
                  </div>
                  <div className={`text-xs mt-2 ${activeSku === "dinner" ? "text-white/60" : "text-gray-400"}`}>
                    {dinnerPlateImages.length} images
                  </div>
                </button>
                <button
                  onClick={() => setActiveSku("lunch")}
                  className={`rounded-2xl p-5 text-left transition-all duration-300 hover-lift ${
                    activeSku === "lunch"
                      ? "bg-[#0071ce] text-white shadow-xl shadow-[#0071ce]/20"
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <div className="text-3xl font-black mb-1">8.75"</div>
                  <div className={`text-sm font-medium ${activeSku === "lunch" ? "text-white/80" : "text-gray-500"}`}>
                    Lunch Plate
                  </div>
                  <div className={`text-xs mt-2 ${activeSku === "lunch" ? "text-white/60" : "text-gray-400"}`}>
                    {lunchPlateImages.length} images
                  </div>
                </button>
              </div>
            </div>

            {/* Outcome */}
            <div className="bg-gradient-to-br from-[#0071ce]/5 to-[#0071ce]/10 rounded-2xl p-6 border border-[#0071ce]/10">
              <h3 className="text-sm font-bold text-[#0071ce] uppercase tracking-wider mb-3">
                Outcome
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Kanak received a complete Walmart-ready content system across both SKUs, giving shoppers clearer product context, stronger visual consistency, and ready-to-upload assets for retail listings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
