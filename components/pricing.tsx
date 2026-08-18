"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const packages = [
  {
    name: "Starter Pack",
    price: "$850+",
    unit: "/ SKU",
    tagline: "1–2 SKUs · 10–12 business days",
    includes: [
      "Hero + 2 lifestyle + 1 infographic",
      "White-bg compliant, ≥1500px, ~80% fill",
    ],
    cta: "Start with 1 SKU",
    featured: false,
  },
  {
    name: "Full Shelf System",
    price: "$3,900+",
    unit: "/ 6 SKUs",
    tagline: "6 SKUs in one batch · 10–12 business days",
    includes: [
      "Hero + 3 lifestyle + 2 infographics per SKU",
      "Secondary angle shots included",
    ],
    cta: "Build my shelf",
    featured: true,
  },
  {
    name: "Catalog Refresh Support",
    price: "$1,100+",
    unit: "/ SKU / year",
    tagline: "Quarterly image refresh (4×/year)",
    includes: [
      "Aligned to Walmart's CQS model updates",
      "Re-shoots when Walmart changes spec or attributes",
    ],
    cta: "Keep my catalog current",
    featured: false,
  },
]

export function Pricing() {
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
    <section ref={sectionRef} id="pricing" className="bg-white py-28 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#0071ce] text-sm font-semibold tracking-[0.2em] uppercase">
            Packages
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Productized pricing.
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Fixed scopes, fixed prices, 95+ Walmart Content Quality Score on every project. Built for emerging CPG brands who need agency-level Walmart compliance without agency-level invoices.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`
                relative rounded-2xl p-8 transition-all duration-500 group
                ${pkg.featured 
                  ? "bg-[#0071ce] shadow-xl shadow-[#0071ce]/20" 
                  : "bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                }
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-white text-[#0071ce] text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className={`text-xl font-bold ${pkg.featured ? "text-white" : "text-gray-900"}`}>{pkg.name}</h3>
              
              {/* Price */}
              <div className="mt-4 mb-2">
                <span className={`text-4xl font-black ${pkg.featured ? "text-white" : "text-gray-900"}`}>
                  {pkg.price}
                </span>
                <span className={`text-sm ${pkg.featured ? "text-white/70" : "text-gray-500"}`}>
                  {pkg.unit}
                </span>
              </div>
              
              <p className={`text-sm ${pkg.featured ? "text-white/70" : "text-gray-500"}`}>{pkg.tagline}</p>
              
              <ul className="mt-6 space-y-3">
                {pkg.includes.map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm ${pkg.featured ? "text-white/90" : "text-gray-600"}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      pkg.featured ? "bg-white/20" : "bg-[#0071ce]/10"
                    }`}>
                      <Check className={`w-3 h-3 ${pkg.featured ? "text-white" : "text-[#0071ce]"}`} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full mt-8 rounded-full py-6 transition-all duration-300 ${
                  pkg.featured 
                    ? "bg-white hover:bg-gray-100 text-[#0071ce] shadow-lg" 
                    : "bg-[#0071ce] hover:bg-[#005ea6] text-white"
                }`}
                asChild
              >
                <a href="#contact" className="flex items-center justify-center gap-2">
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional info lines */}
        <div 
          className={`text-center space-y-2 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-600 text-sm font-medium">
            Brand Launch Catalog — from $7,200+ for 12 SKUs · for new-to-Walmart suppliers
          </p>
          <p className="text-gray-400 text-sm">
            Rush option: +30% drops turnaround to 3–5 business days · CQS-aligned guarantee
          </p>
        </div>
      </div>
    </section>
  )
}
