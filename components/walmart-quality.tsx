"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Image as ImageIcon, Layers, Users, Ruler, Award } from "lucide-react"
import Image from "next/image"

const contentTypes = [
  {
    id: "hero",
    icon: ImageIcon,
    title: "Hero Image",
    description: "Clean, compliant white-background shots that meet Walmart standards and build instant trust.",
    image: "/images/showcase-white-bg.jpg",
  },
  {
    id: "secondary",
    icon: Layers,
    title: "Secondary Views",
    description: "Additional angles, back panels, and detail shots that tell the complete product story.",
    image: "/images/service-white-bg.jpg",
  },
  {
    id: "lifestyle",
    icon: Users,
    title: "Lifestyle Images",
    description: "In-context photography that shows the product in use and connects with shoppers emotionally.",
    image: "/images/service-lifestyle.jpg",
  },
  {
    id: "infographic",
    icon: Award,
    title: "Infographics",
    description: "Benefit callouts, ingredient highlights, and comparison graphics that inform at a glance.",
    image: "/images/service-infographic.jpg",
  },
  {
    id: "dimensions",
    icon: Ruler,
    title: "Dimensions & Attributes",
    description: "Size callouts and measurement overlays that reduce returns and answer key questions.",
    image: "/images/case-dimension-callout.jpg",
  },
]

export function WalmartQuality() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

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
      className="relative py-28 md:py-36 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0071ce]/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0071ce]/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#0071ce] text-sm font-medium tracking-widest uppercase mb-4">
            Content That Performs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Where Blue Shelf Helps
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            We create retail-ready image sets designed for Walmart&apos;s requirements. Each content type serves a purpose in building listing quality and shopper confidence.
          </p>
        </div>

        {/* Interactive split layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Clickable cards */}
          <div className="space-y-4">
            {contentTypes.map((type, index) => {
              const Icon = type.icon
              const isActive = activeCard === index
              
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveCard(index)}
                  className={`
                    w-full text-left p-5 rounded-2xl transition-all duration-400 border
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
                    ${isActive 
                      ? "bg-white/10 border-[#0071ce]/50 shadow-lg shadow-[#0071ce]/10" 
                      : "bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10"
                    }
                  `}
                  style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                      ${isActive ? "bg-[#0071ce] scale-105" : "bg-white/5"}
                    `}>
                      <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-white" : "text-white/50"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-white/80"}`}>
                          {type.title}
                        </h3>
                        <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? "text-[#0071ce] translate-x-0 opacity-100" : "text-white/20 -translate-x-2 opacity-0"}`} />
                      </div>
                      <p className={`text-sm mt-1 transition-colors duration-300 ${isActive ? "text-white/70" : "text-white/40"}`}>
                        {type.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Visual display */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              {/* Image with transitions */}
              {contentTypes.map((type, index) => (
                <div
                  key={type.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeCard === index 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              ))}

              {/* Content type label overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Viewing</p>
                      <p className="text-white font-semibold">{contentTypes[activeCard].title}</p>
                    </div>
                    <div className="flex gap-1.5">
                      {contentTypes.map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeCard === i ? "bg-[#0071ce] w-6" : "bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-[#0071ce]/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/5 rounded-2xl -z-10" />
          </div>
        </div>

        {/* CTA block */}
        <div 
          className={`
            mt-20 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0071ce]/10 to-transparent 
            border border-[#0071ce]/20 backdrop-blur-sm transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to upgrade your Walmart listings?
              </h3>
              <p className="text-white/60">
                Get a free listing audit and see exactly where your content can improve.
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-[#0071ce] hover:bg-[#005ea6] text-white rounded-full px-8 shadow-lg shadow-[#0071ce]/20 hover:shadow-xl hover:shadow-[#0071ce]/30 transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
              asChild
            >
              <a href="#contact">
                Get a Listing Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
