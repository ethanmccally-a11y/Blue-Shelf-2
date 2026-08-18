"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, ArrowRight, Calendar, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/mjglbkvy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormStatus('success')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Upgrade Your<br />Walmart Images?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Get a content review and see exactly how your current images can be improved.
          </p>
        </div>

        {/* Three column layout */}
        <div 
          className={`grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Send a Brief - Primary Card */}
          <div className="lg:col-span-1 bg-[#0071ce]/5 border-2 border-[#0071ce]/20 rounded-2xl p-8">
            <div className="w-14 h-14 rounded-full bg-[#0071ce]/10 flex items-center justify-center mb-6">
              <Send className="w-6 h-6 text-[#0071ce]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send a Brief</h3>
            <p className="text-gray-500 text-sm mb-6">
              Tell us about your catalog. We&apos;ll reply within one business day.
            </p>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <p className="text-green-800 font-medium">Brief received!</p>
                <p className="text-green-600 text-sm mt-1">We&apos;ll be in touch within one business day.</p>
              </div>
            ) : formStatus === 'error' ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                <p className="text-red-800 font-medium">Something went wrong</p>
                <p className="text-red-600 text-sm mt-1">Please try again or email us directly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-3 text-sm text-[#0071ce] hover:underline"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <select
                    name="skus"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all text-sm text-gray-600"
                  >
                    <option value="">Number of SKUs *</option>
                    <option value="1-5">1–5</option>
                    <option value="6-20">6–20</option>
                    <option value="21-50">21–50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="notes"
                    placeholder="Notes (optional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-[#0071ce] hover:bg-[#005ea6] text-white rounded-full py-6 font-semibold transition-all duration-300"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Brief'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>

          {/* Right column - Two cards stacked */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* Get an Image Review */}
            <a 
              href="https://calendar.app.google/wkmc3WN7n98oVEfh8"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#0071ce]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[#0071ce]/10 flex items-center justify-center mb-6 group-hover:bg-[#0071ce]/20 transition-all duration-300">
                <Calendar className="w-6 h-6 text-[#0071ce]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get an Image Review</h3>
              <p className="text-gray-500 text-sm mb-4 flex-1">
                Book a 15-minute call to review your Walmart images.
              </p>
              <span className="inline-flex items-center text-[#0071ce] font-medium text-sm">
                Schedule Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Email Us */}
            <a 
              href="mailto:sales@blue-shelf.com"
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#0071ce]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[#0071ce]/10 flex items-center justify-center mb-6 group-hover:bg-[#0071ce]/20 transition-all duration-300">
                <Mail className="w-6 h-6 text-[#0071ce]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4 flex-1">
                Send us your project details. Response within 24 hours.
              </p>
              <span className="inline-flex items-center text-[#0071ce] font-medium text-sm">
                sales@blue-shelf.com
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
