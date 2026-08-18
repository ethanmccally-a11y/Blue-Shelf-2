"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

export function SocialProof() {
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Growing CPG Brands
          </h2>
        </div>
        
        {/* Testimonial */}
        <div 
          className={`bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Quote className="w-10 h-10 text-[#0071ce]/20 mb-6" />
          <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
            &ldquo;Blue Shelf completely elevated our product presentation and made our listings retail-ready.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <Image
              src="/images/kanak-logo.png"
              alt="Kanak Naturals"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
            <div className="h-8 w-px bg-gray-200" />
            <span className="text-gray-500 text-sm">Kanak Naturals</span>
          </div>
        </div>
      </div>
    </section>
  )
}
