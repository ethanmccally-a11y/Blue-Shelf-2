"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What's included in a listing audit?",
    answer: "We review your current Walmart listing images against retailer requirements and conversion best practices. This includes image quality assessment, compliance checks, competitor comparison, and specific recommendations for improvement. Audits are complimentary for all prospective clients.",
  },
  {
    question: "How long does production take?",
    answer: "Standard turnaround is 10-12 business days from product arrival at our studio. Expedited projects can be completed in 3-5 business days with rush pricing. Timeline depends on scope and current capacity.",
  },
  {
    question: "How do you determine what images a brand needs?",
    answer: "We start with a listing audit and competitive analysis to identify content gaps. From there, we recommend a specific image system based on your product category, price point, and competition. Most SKUs need 5-8 images covering hero shots, secondary views, lifestyle, and infographics.",
  },
  {
    question: "How do you preserve our brand style?",
    answer: "Every project starts with a brand intake where we review your existing guidelines, color palette, typography preferences, and visual direction. We match your aesthetic while optimizing for Walmart's requirements and shopper behavior.",
  },
  {
    question: "Can content be adapted for Amazon, Target, or Sam's Club?",
    answer: "Yes. While we build Walmart-first, our image systems are designed to work across major retailers. We deliver formatted files for Amazon, Target, Sam's Club, and other platforms as part of your project at no extra cost.",
  },
  {
    question: "Do you work with brokers and retail partners?",
    answer: "Absolutely. We partner with brokers across Northwest Arkansas. We offer complimentary listing audits for referred brands, fixed-scope packages that are easy to introduce, and flexible collaboration models including white-label arrangements.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#0071ce] text-sm font-semibold tracking-[0.2em] uppercase block mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Common Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 hover:border-gray-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === i ? "max-h-[500px]" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
