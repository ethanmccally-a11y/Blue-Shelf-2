"use client"

import Image from "next/image"
import { X, Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const unoptimizedIssues = [
  "Inconsistent lighting and shadows",
  "Non-compliant background",
  "Poor image resolution",
  "Missing secondary views",
  "No lifestyle or context images",
]

const optimizedFeatures = [
  "Professional studio lighting",
  "True white, retailer-compliant background",
  "High-resolution detail shots",
  "Complete angle coverage",
  "Lifestyle and infographic support",
]

export function BeforeAfter() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="before-after" className="bg-gradient-to-b from-gray-50 to-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#0071ce] text-sm font-semibold tracking-[0.2em] uppercase block mb-4">
            The Difference
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 max-w-3xl mx-auto text-balance leading-tight">
            Shoppers scan. Better visuals build trust.
          </h2>
          <p className="text-gray-500 text-lg mt-6 max-w-xl mx-auto">
            Small inconsistencies in your listing can significantly impact shopper confidence and conversion.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Unoptimized */}
          <div 
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
              {/* Label */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-2 bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded-full">
                  <X className="w-3.5 h-3.5" />
                  Typical Listing
                </span>
              </div>
              
              {/* Image container */}
              <div className="relative aspect-square">
                <Image
                  src="/images/comparison-unoptimized.jpg"
                  alt="Unoptimized product listing with issues"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
            
            {/* Issue list */}
            <ul className="mt-6 space-y-3">
              {unoptimizedIssues.map((issue, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-3 text-gray-600 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 60}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-sm">{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optimized */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              {/* Label */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-2 bg-[#0071ce] text-white text-xs font-semibold px-4 py-2 rounded-full">
                  <Check className="w-3.5 h-3.5" />
                  Blue Shelf Optimized
                </span>
              </div>
              
              {/* Image container */}
              <div className="relative aspect-square">
                <Image
                  src="/images/comparison-optimized.jpg"
                  alt="Blue Shelf optimized product listing"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
            
            {/* Feature list */}
            <ul className="mt-6 space-y-3">
              {optimizedFeatures.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-3 text-gray-600 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${500 + index * 60}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0071ce]" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
