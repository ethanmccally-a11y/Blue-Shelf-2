"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Partners", href: "#brokers" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/logo.png"
              alt="Blue Shelf"
              width={36}
              height={36}
              className="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-bold text-gray-900 transition-colors duration-300">
              Blue Shelf
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:rounded-full after:bg-[#0071ce] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <Button
              className="rounded-full px-6 bg-[#0071ce] hover:bg-[#005ea6] text-white shadow-md shadow-[#0071ce]/20 hover:shadow-lg hover:shadow-[#0071ce]/30 transition-all duration-300"
              asChild
            >
              <Link href="#contact" className="flex items-center gap-2">
                Get a Content Review
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 text-gray-900" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="pt-6 pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 text-gray-700 hover:text-gray-900 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-[#0071ce] hover:bg-[#005ea6] text-white rounded-full w-full mt-4 py-6 shadow-lg shadow-[#0071ce]/20"
                asChild
              >
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                  Get a Content Review
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
