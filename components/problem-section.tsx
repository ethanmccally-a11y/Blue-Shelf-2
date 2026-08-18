"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

const problems = [
  "Poor lighting and clarity reduce trust",
  "Non-compliant images hurt visibility on Walmart",
  "Generic content fails to communicate value",
  "Customers don't understand the product at a glance",
]

export function ProblemSection() {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Product Images Don&apos;t Convert
          </h2>
          <p className="text-lg text-gray-500">
            Common issues that hurt your listing performance
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 text-red-500" />
              </div>
              <span className="text-gray-700 text-sm font-medium">{problem}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
