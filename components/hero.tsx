"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Image, FileText, LayoutGrid, Ruler } from "lucide-react"

const features = [
  "Walmart.com optimized",
  "Retail-ready delivery",
  "Complete SKU coverage",
]

const qualityModules = [
  { label: "Image Completeness", icon: Image },
  { label: "Compliance", icon: FileText },
  { label: "Content Readiness", icon: LayoutGrid },
  { label: "Conversion Support", icon: Ruler },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [sliderValue, setSliderValue] = useState(35)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-animate slider on load
    const timer = setTimeout(() => {
      setIsAnimating(true)
      const animateSlider = () => {
        let current = 35
        const target = 95
        const step = () => {
          if (current < target) {
            current += 1
            setSliderValue(current)
            requestAnimationFrame(step)
          } else {
            setIsAnimating(false)
          }
        }
        step()
      }
      animateSlider()
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const getScoreColor = (value: number) => {
    if (value < 50) return "#ef4444"
    if (value < 75) return "#f59e0b"
    return "#22c55e"
  }

  const getScoreLabel = (value: number) => {
    if (value < 50) return "Needs Work"
    if (value < 75) return "Getting There"
    return "Walmart Ready"
  }

  return (
    <section id="hero" className="relative bg-white min-h-screen overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-[#0071ce]/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 bg-[#0071ce]/10 border border-[#0071ce]/20 rounded-full px-5 py-2.5 mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-2 h-2 bg-[#0071ce] rounded-full animate-pulse" />
              <span className="text-[#0071ce] text-sm font-medium tracking-wide">WALMART-FIRST CONTENT STUDIO</span>
            </div>
            
            {/* Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We help CPG brands<br />
              win on{" "}
              <span className="text-[#0071ce]">Walmart.com</span>
            </h1>
            
            {/* Supporting copy */}
            <p 
              className={`text-lg lg:text-xl text-gray-500 max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Retail-ready product image systems built to improve conversion, strengthen compliance, and upgrade your digital shelf.
            </p>

            {/* Feature list */}
            <div 
              className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-250 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#0071ce]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#0071ce]" />
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button 
                size="lg" 
                className="bg-[#0071ce] hover:bg-[#005ea6] text-white rounded-full px-8 py-7 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0071ce]/20"
                asChild
              >
                <a href="#contact">
                  Get a Walmart Content Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full px-6 py-7 text-base font-medium border border-gray-200 hover:border-gray-300 transition-all duration-300"
                asChild
              >
                <a href="#case-study">See Our Work</a>
              </Button>
            </div>
          </div>

          {/* Right: Interactive Content Score Slider */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl shadow-gray-200/50 p-8 max-w-md mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Content Score</span>
                
                {/* Score Circle */}
                <div className="relative w-32 h-32 mx-auto my-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke={getScoreColor(sliderValue)}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${sliderValue * 2.64} 264`}
                      className="transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span 
                      className="text-4xl font-black transition-colors duration-300"
                      style={{ color: getScoreColor(sliderValue) }}
                    >
                      {sliderValue}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">/ 100</span>
                  </div>
                </div>

                <span 
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300"
                  style={{ 
                    backgroundColor: `${getScoreColor(sliderValue)}15`,
                    color: getScoreColor(sliderValue)
                  }}
                >
                  {getScoreLabel(sliderValue)}
                </span>
              </div>

              {/* Quality Modules */}
              <div className="space-y-3 mb-8">
                {qualityModules.map((module, index) => {
                  // Scale module values proportionally: at 0 all are 0, at 100 all are 100
                  const offsets = [-5, -2, 3, 5] // Slight variation between modules
                  const baseValue = sliderValue
                  const moduleValue = sliderValue === 0 ? 0 : sliderValue === 100 ? 100 : Math.min(100, Math.max(0, baseValue + offsets[index]))
                  return (
                    <div key={module.label} className="flex items-center gap-3">
                      <module.icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600 flex-1">{module.label}</span>
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${moduleValue}%`,
                            backgroundColor: getScoreColor(moduleValue)
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Slider with color gradient */}
              <div className="space-y-3">
                <div className="relative h-2">
                  {/* Gradient track background */}
                  <div className="absolute inset-0 h-2 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500 opacity-40" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-2 bg-transparent rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-300 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:-mt-[6px]"
                  />
                </div>
                <p className="text-center text-xs text-gray-400">
                  Drag to see how content quality impacts your score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
