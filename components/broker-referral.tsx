"use client"

import { useEffect, useRef, useState } from "react"
import { Percent, FileSearch, Package, Users, ArrowRight, Handshake, Building2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  {
    icon: Percent,
    title: "Referral Incentives",
    description: "Competitive referral incentives for approved partners on closed projects.",
  },
  {
    icon: FileSearch,
    title: "Free Content Reviews",
    description: "Referred brands receive a complimentary Walmart.com content review to identify gaps.",
  },
  {
    icon: Package,
    title: "Fixed-Scope Packages",
    description: "Clear, productized packages make it easy to introduce Blue Shelf to your clients.",
  },
  {
    icon: Users,
    title: "Flexible Collaboration",
    description: "Work with us directly or through a white-label relationship—whatever fits your model.",
  },
]

export function BrokerReferral() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
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
      id="brokers"
      className="py-24 bg-gradient-to-b from-gray-100 to-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className={`text-[#0071ce] text-sm font-semibold tracking-widest uppercase mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Partner Program
            </p>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Partner With Blue Shelf
            </h2>
            <p className={`text-gray-600 text-lg mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Brokers and retail partners can refer their client brands to Blue Shelf for Walmart-ready content support. 
              We work directly with the brand or support through a white-label relationship. Referral incentives available for approved partners.
            </p>

            {/* Benefit cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-xl bg-white border border-gray-200 hover:border-[#0071ce]/30 hover:shadow-md transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0071ce]/10 flex items-center justify-center mb-3 group-hover:bg-[#0071ce]/20 transition-colors">
                    <benefit.icon className="w-4 h-4 text-[#0071ce]" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm mb-1 group-hover:text-[#0071ce] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                size="lg"
                className="bg-[#0071ce] hover:bg-[#005ba1] text-white px-8 press-effect"
                asChild
              >
                <Link href="/partners">
                  Become a Referral Partner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                asChild
              >
                <Link href="/refer">
                  Refer a Brand
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Partnership Visual - Simplified */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Connection lines SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {/* Broker to Brand line */}
                <path
                  d="M 100 100 Q 180 140 200 200"
                  fill="none"
                  stroke="#0071ce"
                  strokeWidth="2"
                  strokeDasharray={hoveredNode === 'broker' || hoveredNode === 'brand' ? '0' : '6 6'}
                  className="transition-all duration-500"
                  opacity={isVisible ? 0.4 : 0}
                />
                {/* Brand to Blue Shelf line */}
                <path
                  d="M 200 200 Q 220 260 300 300"
                  fill="none"
                  stroke="#0071ce"
                  strokeWidth="2"
                  strokeDasharray={hoveredNode === 'brand' || hoveredNode === 'blueshelf' ? '0' : '6 6'}
                  className="transition-all duration-500"
                  opacity={isVisible ? 0.4 : 0}
                />
              </svg>

              {/* Broker Node */}
              <div
                className={`absolute top-12 left-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                style={{ transitionDelay: '400ms' }}
                onMouseEnter={() => setHoveredNode('broker')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className={`relative group cursor-default ${hoveredNode === 'broker' ? 'scale-110' : ''} transition-transform duration-300`}>
                  <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:border-[#0071ce]/50 group-hover:shadow-md transition-all">
                    <Handshake className="w-8 h-8 text-gray-600 group-hover:text-[#0071ce] transition-colors" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-gray-700 text-sm font-semibold">Broker</span>
                  </div>
                </div>
              </div>

              {/* Brand Node (Center) */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                style={{ transitionDelay: '500ms' }}
                onMouseEnter={() => setHoveredNode('brand')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className={`relative group cursor-default ${hoveredNode === 'brand' ? 'scale-110' : ''} transition-transform duration-300`}>
                  <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center group-hover:border-[#0071ce]/50 group-hover:shadow-lg transition-all">
                    <Building2 className="w-10 h-10 text-gray-700 group-hover:text-[#0071ce] transition-colors" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-gray-700 text-sm font-semibold">Your Brand</span>
                  </div>
                </div>
              </div>

              {/* Blue Shelf Node */}
              <div
                className={`absolute bottom-12 right-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '600ms' }}
                onMouseEnter={() => setHoveredNode('blueshelf')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className={`relative group cursor-default ${hoveredNode === 'blueshelf' ? 'scale-110' : ''} transition-transform duration-300`}>
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0071ce] to-[#005ba1] flex items-center justify-center shadow-lg shadow-[#0071ce]/20">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[#0071ce] text-sm font-semibold">Blue Shelf</span>
                  </div>
                </div>
              </div>

              {/* Partner callout */}
              <div className={`absolute top-4 right-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0071ce]/10 border border-[#0071ce]/20">
                  <Handshake className="w-4 h-4 text-[#0071ce]" />
                  <span className="text-[#0071ce] text-sm font-semibold">Partner Program</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
