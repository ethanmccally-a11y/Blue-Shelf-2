"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Users, Brain, Search, MousePointer, FileText, Upload, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!startCounting) return
    
    let startTime: number | null = null
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, startCounting])
  
  return count
}

const performanceCards = [
  {
    value: 60,
    suffix: "%",
    label: "of CQ Score",
    description: "Driven by core content elements",
  },
  {
    value: 5,
    prefix: "Up to +",
    suffix: "%",
    label: "ATC Lift",
    description: "From a 1% increase in content quality",
  },
  {
    value: 3,
    prefix: "Up to +",
    suffix: "%",
    label: "GMV per visitor",
    description: "Associated with stronger conversion — rich media is not weighted in Walmart's content score",
  },
]

const localBenefits = [
  { icon: MapPin, text: "Direct supplier exposure" },
  { icon: Users, text: "Broker-driven relationships" },
  { icon: Brain, text: "Deep Walmart content understanding" },
]

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Audit your listing",
    description: "We analyze your current content against Walmart standards.",
  },
  {
    number: "02",
    icon: MousePointer,
    title: "Find what's limiting visibility & conversion",
    description: "Identify specific gaps holding back performance.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Build Walmart-ready, conversion-focused content",
    description: "Create optimized imagery and content that performs.",
  },
  {
    number: "04",
    icon: Upload,
    title: "Deliver ready-to-upload assets",
    description: "Files formatted to spec, ready to go live.",
  },
]

export function WhyContentWins() {
  const [isVisible, setIsVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setCardsVisible(true), 300)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const count1 = useCountUp(performanceCards[0].value, 2000, cardsVisible)
  const count2 = useCountUp(performanceCards[1].value, 2000, cardsVisible)
  const count3 = useCountUp(performanceCards[2].value, 2000, cardsVisible)
  const counts = [count1, count2, count3]

  return (
    <section ref={sectionRef} id="why-content-wins" className="bg-white py-28 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - BIG and Important */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Why Content Wins on{" "}
            <span className="text-[#0071ce]">Walmart.com</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Built from real marketplace performance insights
          </p>
        </div>

        {/* ROW 1: Performance Cards */}
        <div className="mb-24">
          <p className={`text-center text-gray-900 text-xl md:text-2xl font-semibold mb-12 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Most of your listing performance is driven by just a few key content elements.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {performanceCards.map((card, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-black text-[#0071ce] mb-2">
                  {card.prefix || ""}{counts[index]}{card.suffix}
                </div>
                <div className="text-gray-900 font-semibold text-lg mb-2">
                  {card.label}
                </div>
                <p className="text-gray-500 text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Legal Disclaimer */}
          <p className={`text-center text-gray-400 text-xs mt-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Performance metrics are directional estimates based on marketplace observations. Results may vary.
          </p>
        </div>

        {/* ROW 2: Local Advantage */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built in Northwest Arkansas
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We operate inside Walmart&apos;s ecosystem—working directly with suppliers, brokers, and brands selling on Walmart.com.
              </p>
              <p className="text-gray-900 font-semibold text-lg">
                We don&apos;t guess how Walmart works. We build content for it.
              </p>
            </div>

            {/* Right: Benefits Card */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-[#0071ce]/5 border border-[#0071ce]/20 rounded-2xl p-8">
                <div className="space-y-5">
                  {localBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0071ce]/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-[#0071ce]" />
                      </div>
                      <span className="text-gray-900 font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#0071ce]/20">
                  <p className="text-[#0071ce] font-semibold text-sm">
                    This is our unfair advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Walmart Disclaimer */}
          <p className={`text-center text-gray-400 text-xs mt-10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Blue Shelf is an independent content studio. Not affiliated with or endorsed by Walmart.
          </p>
        </div>

        {/* ROW 3: Process */}
        <div>
          <p className={`text-center text-gray-900 font-semibold text-lg mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We don&apos;t just create content—we fix what&apos;s costing you sales.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#0071ce] text-white text-xs font-bold rounded-full">
                  Step {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0071ce]/10 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-6 h-6 text-[#0071ce]" />
                </div>

                {/* Title */}
                <h4 className="text-gray-900 font-bold mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
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

          {/* CTA Button */}
          <div className={`text-center mt-14 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              className="bg-[#0071ce] hover:bg-[#005ea6] text-white rounded-full px-8 py-7 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0071ce]/20"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Get a Walmart Content Review
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
