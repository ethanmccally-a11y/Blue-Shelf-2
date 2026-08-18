"use client"

import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const credibilityPoints = [
  "Built for Walmart.com requirements",
  "Designed for conversion, not just aesthetics",
  "Fast turnaround and upload-ready delivery",
  "Trusted by emerging CPG brands",
]

export function PlatformStrip() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-50 border-t border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Walmart primary */}
          <div 
            className={`flex items-center gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-[#0071ce] rounded-full px-8 py-3.5 shadow-lg shadow-[#0071ce]/20 hover:shadow-xl hover:shadow-[#0071ce]/30 transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <span className="font-bold text-white text-lg tracking-wide">Walmart</span>
            </div>
            <span className="text-gray-500 text-sm font-medium">Primary Focus</span>
          </div>

          {/* Credibility bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {credibilityPoints.map((point, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <div className="w-5 h-5 rounded-full bg-[#0071ce]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#0071ce]" />
                </div>
                <span className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
