"use client"

import { Package, Camera, Eye, Download, Clock, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Send Product",
    description: "Ship your product to the studio. We handle intake, prep, and scheduling.",
  },
  {
    number: "02",
    icon: Camera,
    title: "We Build Your System",
    description: "Shot list, photography, and content production — optimized for Walmart.com.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Review Proofs",
    description: "You review every image before we finalize. Revisions included.",
  },
  {
    number: "04",
    icon: Download,
    title: "Upload-Ready Delivery",
    description: "Files formatted to Walmart specs. Ready to upload and go live.",
  },
]

export function Process() {
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
    <section ref={sectionRef} id="process" className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div 
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#0071ce] text-sm font-semibold tracking-[0.2em] uppercase block mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
            Ship it. We&apos;ll build your<br />Walmart-ready system.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-20">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 left-6 px-3 py-1 bg-[#0071ce] text-white text-xs font-bold rounded-full">
                Step {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#0071ce]/10 flex items-center justify-center mb-5 mt-2">
                <step.icon className="w-7 h-7 text-[#0071ce]" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Turnaround Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Standard */}
          <div 
            className={`bg-white rounded-2xl p-6 flex items-center gap-5 border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-gray-500" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-gray-400 text-xs font-semibold tracking-[0.15em] uppercase block mb-1">
                Standard Turnaround
              </span>
              <span className="text-xl font-black text-gray-900">
                10-12 Business Days
              </span>
            </div>
          </div>
          
          {/* Expedited */}
          <div 
            className={`bg-amber-50 rounded-2xl p-6 flex items-center gap-5 border border-amber-100 shadow-sm transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-amber-600 text-xs font-semibold tracking-[0.15em] uppercase block mb-1">
                Expedited Turnaround
              </span>
              <span className="text-xl font-black text-gray-900">
                3-5 Business Days
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
