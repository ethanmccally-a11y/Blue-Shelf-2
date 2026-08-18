"use client"

import { useState } from "react"
import Image from "next/image"

const filters = ["ALL", "White Background", "Lifestyle", "Infographic"]

const portfolioItems = [
  { src: "/images/hero-product.jpg", alt: "Sustainables Fiber Plates", category: "White Background" },
  { src: "/images/lifestyle-bbq.jpg", alt: "BBQ Lifestyle", category: "Lifestyle" },
  { src: "/images/infographic.jpg", alt: "Product Infographic", category: "Infographic" },
  { src: "/images/product-package.jpg", alt: "Package Display", category: "White Background" },
  { src: "/images/lifestyle-burger.jpg", alt: "Burger Styled Studio", category: "White Background" },
  { src: "/images/lifestyle-combined.jpg", alt: "Combined Lifestyle", category: "Lifestyle" },
  { src: "/images/product-front.jpg", alt: "Product Front View", category: "White Background" },
  { src: "/images/lifestyle-sandwich.jpg", alt: "Sandwich Lifestyle", category: "Lifestyle" },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const filteredItems = activeFilter === "ALL" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <span className="text-[#4d7cfe] text-sm font-semibold tracking-[0.2em] uppercase">
              Portfolio
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-2">
              Our Work.
            </h2>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden aspect-square border border-gray-100"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
