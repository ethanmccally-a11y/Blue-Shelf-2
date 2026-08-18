"use client"

import { useEffect, useRef, useState } from "react"
import { Store, ShoppingCart, Target, Package } from "lucide-react"

const platforms = [
  { name: "Walmart", icon: Store },
  { name: "Amazon", icon: ShoppingCart },
  { name: "Target", icon: Target },
  { name: "Sam's Club", icon: Package },
]

export function DigitalShelf() {
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
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built for the Digital Shelf
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Our content is designed specifically for how products are discovered, evaluated, and purchased on modern retail platforms like Walmart, Amazon, Target, and Sam&apos;s Club.
          </p>
          
          {/* Platform icons */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className={`flex items-center gap-2 text-gray-400 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <platform.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
