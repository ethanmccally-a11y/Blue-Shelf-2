"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Award, ShoppingCart, Eye } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    stat: "20–30%",
    label: "Higher conversion rates with quality images",
  },
  {
    icon: Award,
    stat: "Better",
    label: "Search placement with optimized content",
  },
  {
    icon: ShoppingCart,
    stat: "Win",
    label: "The Buy Box with compliant listings",
  },
  {
    icon: Eye,
    stat: "Trust",
    label: "Clear imagery reduces shopper friction",
  },
]

export function ContentScore() {
  const [score, setScore] = useState(62)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (score < 95) {
        setScore(95)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [score])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Why It Matters
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Content Score Drives Visibility & Conversion
          </h2>
          <p className="text-lg text-gray-600">
            Retailers like Walmart and Amazon now rank listings based on content quality. 
            Higher content scores lead to better placement, stronger conversion rates, and more revenue.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">Content Score</span>
            <span className="text-2xl font-bold text-gray-900">{score}%</span>
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${score}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-sm text-gray-400">Before: 62%</span>
            <span className="text-sm font-medium text-blue-600">After: 95%+</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.stat}</div>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <p className="text-center text-gray-500 mt-12 max-w-2xl mx-auto">
          Walmart specifically evaluates listings based on completeness, image quality, and optimized content — 
          and brands that meet these standards consistently outperform those that don&apos;t.
        </p>
      </div>
    </section>
  )
}
