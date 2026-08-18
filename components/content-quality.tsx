"use client"

import { useEffect, useRef, useState } from "react"
import { Image, Layers, TrendingUp, ArrowRight, Zap, Shield, Eye } from "lucide-react"

const insights = [
  {
    icon: Image,
    title: "Better images build trust",
    description: "High-quality hero shots and secondary views help shoppers understand exactly what they're buying.",
  },
  {
    icon: Layers,
    title: "Complete content supports listing quality",
    description: "Walmart rewards listings with comprehensive imagery, accurate attributes, and rich product information.",
  },
  {
    icon: Eye,
    title: "Strong content helps shoppers decide faster",
    description: "Clear visuals and benefit callouts reduce hesitation and support confident purchase decisions.",
  },
  {
    icon: TrendingUp,
    title: "Better listings create stronger shelf performance",
    description: "Optimized content improves visibility, click-through, and conversion across the digital shelf.",
  },
]

const contentElements = [
  { label: "Hero Image", position: "top-[15%] left-[10%]" },
  { label: "Secondary Views", position: "top-[35%] left-[5%]" },
  { label: "Lifestyle Context", position: "top-[55%] left-[8%]" },
  { label: "Dimension Callouts", position: "top-[75%] left-[12%]" },
  { label: "Benefit Graphics", position: "top-[25%] right-[8%]" },
  { label: "Feature Highlights", position: "top-[50%] right-[5%]" },
  { label: "Trust Signals", position: "top-[70%] right-[10%]" },
]

export function ContentQuality() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeElement, setActiveElement] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section
      ref={sectionRef}
      id="why-it-matters"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#0071ce] text-sm font-semibold tracking-widest uppercase mb-4">
            Why It Matters
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Strong Listing Quality Starts With Better Content
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Walmart evaluates listing quality across multiple dimensions. Better product content directly supports stronger scores and better shelf performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Insight Cards */}
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div
                key={index}
                className={`group p-5 rounded-xl bg-white border border-gray-200 hover:border-[#0071ce]/30 hover:shadow-md transition-all duration-500 cursor-default ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0071ce]/10 flex items-center justify-center group-hover:bg-[#0071ce]/20 transition-colors">
                    <insight.icon className="w-5 h-5 text-[#0071ce]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1 group-hover:text-[#0071ce] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual Framework */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Central hub */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-8 rounded-full border border-dashed border-[#0071ce]/20" />
              
              {/* Middle ring */}
              <div className="absolute inset-16 rounded-full border border-[#0071ce]/30" />
              
              {/* Connector lines radiating out */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos((angle * Math.PI) / 180) * 160}
                    y2={200 + Math.sin((angle * Math.PI) / 180) * 160}
                    stroke="url(#lineGradientLight)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${i * 100 + 500}ms` }}
                  />
                ))}
                <defs>
                  <linearGradient id="lineGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0071ce" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0071ce" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 -m-8 rounded-full bg-[#0071ce]/10 animate-pulse" />
                  <div className="absolute inset-0 -m-4 rounded-full bg-[#0071ce]/20" />
                  
                  {/* Core circle */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0071ce] to-[#005ba1] flex items-center justify-center shadow-lg shadow-[#0071ce]/30">
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-white mx-auto mb-1" />
                      <span className="text-white text-xs font-semibold">Listing<br/>Quality</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating content element nodes */}
              {contentElements.map((element, index) => (
                <div
                  key={index}
                  className={`absolute ${element.position} transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ transitionDelay: `${index * 80 + 600}ms` }}
                  onMouseEnter={() => setActiveElement(index)}
                  onMouseLeave={() => setActiveElement(null)}
                >
                  <div className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-default whitespace-nowrap ${
                    activeElement === index
                      ? 'bg-[#0071ce] text-white shadow-lg shadow-[#0071ce]/40 scale-110'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}>
                    {element.label}
                  </div>
                </div>
              ))}

              {/* Corner accent nodes */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#0071ce]/50 animate-pulse" />
              <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-[#0071ce]/30 animate-pulse" style={{ animationDelay: '500ms' }} />
              <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-[#0071ce]/40 animate-pulse" style={{ animationDelay: '1000ms' }} />
            </div>

            {/* Bottom label */}
            <div className="text-center mt-6">
              <p className="text-gray-500 text-sm">
                Content inputs that support stronger listing quality
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0071ce]/5 border border-[#0071ce]/10">
            <Zap className="w-4 h-4 text-[#0071ce]" />
            <span className="text-gray-600 text-sm">
              Blue Shelf helps improve the content inputs that support listing quality
            </span>
            <ArrowRight className="w-4 h-4 text-[#0071ce]" />
          </div>
        </div>
      </div>
    </section>
  )
}
