"use client"

import Image from "next/image"
import { X, Check } from "lucide-react"
import { useState, useEffect } from "react"

export function Consistency() {
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchUnoptimizedImages() {
      try {
        const response = await fetch('/api/generate-unoptimized')
        const data = await response.json()
        if (data.images && data.images.length > 0) {
          setGeneratedImages(data.images.map((img: { url: string }) => img.url).filter(Boolean))
        }
      } catch (error) {
        console.error('Failed to fetch unoptimized images:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUnoptimizedImages()
  }, [])

  // More extreme random sizing for truly messy look
  const messySizes = [
    { width: "160%", height: "85%", top: "8%", left: "-30%" },
    { width: "70%", height: "140%", top: "-25%", left: "18%" },
    { width: "130%", height: "70%", top: "18%", left: "-12%" },
    { width: "80%", height: "150%", top: "-30%", left: "12%" },
    { width: "145%", height: "88%", top: "5%", left: "-22%" },
    { width: "90%", height: "135%", top: "-18%", left: "6%" },
  ]

  // More varied rotations
  const messyRotations = [4.5, -3.2, 2.8, -4.0, 1.5, -2.8]
  
  // Varied aspect ratios to look inconsistent
  const messyAspects = ["1/1", "4/5", "3/4", "5/4", "1/1", "4/3"]

  const cleanImages = [
    "/images/hero-product.jpg",
    "/images/product-front.jpg",
    "/images/product-package.jpg",
    "/images/infographic.jpg",
    "/images/lifestyle-burger.jpg",
    "/images/lifestyle-combined.jpg",
  ]

  // Fallback images if fal generation fails
  const fallbackMessyImages = [
    "/images/hero-product.jpg",
    "/images/lifestyle-bbq.jpg",
    "/images/product-front.jpg",
    "/images/lifestyle-burger.jpg",
    "/images/product-package.jpg",
    "/images/lifestyle-sandwich.jpg",
  ]

  const displayImages = generatedImages.length > 0 ? generatedImages : fallbackMessyImages

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Consistency Wins the Click
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shoppers don&apos;t read listings — they scan. Inconsistent, low-quality images kill trust and conversion.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Messy Listing */}
          <div className="relative">
            <div className="absolute -top-3 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 bg-red-500 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <X className="w-4 h-4" />
                Unoptimized Listing
              </span>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 pt-8">
              <p className="text-sm font-medium text-gray-500 mb-4">Typical Listing</p>
              <div className="grid grid-cols-3 gap-2">
                {isLoading ? (
                  // Loading skeleton with varied sizes
                  Array.from({ length: 6 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="relative overflow-hidden rounded-lg bg-gray-200 animate-pulse"
                      style={{ aspectRatio: messyAspects[i] }}
                    />
                  ))
                ) : (
                  displayImages.slice(0, 6).map((src, i) => (
                    <div 
                      key={i} 
                      className="relative overflow-hidden rounded-lg"
                      style={{
                        aspectRatio: messyAspects[i],
                        // Varied color casts per image
                        filter: i % 3 === 0 
                          ? "saturate(0.6) contrast(0.8) brightness(0.85) sepia(0.15)" // warm/yellow
                          : i % 3 === 1 
                          ? "saturate(0.5) contrast(0.75) brightness(1.1) hue-rotate(10deg)" // cool/blue overexposed
                          : "saturate(0.7) contrast(0.9) brightness(0.7)", // dark/underexposed
                        backgroundColor: i % 2 === 0 ? "#e8e8e8" : "#d4d4d4", // gray backgrounds
                      }}
                    >
                      <div 
                        className="absolute"
                        style={{
                          transform: `rotate(${messyRotations[i]}deg) scale(${0.85 + (i % 4) * 0.12})`,
                          width: messySizes[i].width,
                          height: messySizes[i].height,
                          top: messySizes[i].top,
                          left: messySizes[i].left,
                        }}
                      >
                        <Image
                          src={src}
                          alt="Unoptimized product"
                          fill
                          className="object-cover"
                          style={{
                            // Add blur to some images
                            filter: i % 2 === 0 ? "blur(0.5px)" : "blur(0.3px)",
                          }}
                          unoptimized={src.startsWith('http')}
                        />
                      </div>
                      {/* Noise overlay for low quality feel */}
                      <div 
                        className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                      />
                      {/* Uneven vignette effect */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: i % 2 === 0 
                            ? "radial-gradient(ellipse at 30% 20%, transparent 40%, rgba(0,0,0,0.15) 100%)"
                            : "radial-gradient(ellipse at 70% 80%, transparent 50%, rgba(0,0,0,0.12) 100%)",
                        }}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right - Clean Listing */}
          <div className="relative">
            <div className="absolute -top-3 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Check className="w-4 h-4" />
                Blue Shelf Optimized
              </span>
            </div>
            <div className="bg-white rounded-2xl border-2 border-blue-100 p-6 pt-8 shadow-lg shadow-blue-500/5">
              <p className="text-sm font-medium text-gray-500 mb-4">Blue Shelf Optimized</p>
              <div className="grid grid-cols-3 gap-3">
                {cleanImages.map((src, i) => (
                  <div 
                    key={i} 
                    className="relative aspect-square overflow-hidden rounded-lg bg-white"
                  >
                    <Image
                      src={src}
                      alt="Optimized product"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <p className="text-center text-lg text-gray-600 mt-12">
          Consistent content doesn&apos;t just look better — <span className="font-semibold text-gray-900">it converts better.</span>
        </p>
      </div>
    </section>
  )
}
