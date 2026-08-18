"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    skuCount: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState("success")
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <p className="text-[#0071ce] text-sm font-semibold tracking-widest uppercase mb-4">
                Get In Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let&apos;s talk about your Walmart content
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you&apos;re launching new SKUs or upgrading existing listings, we&apos;ll help you build content that performs on Walmart.com.
              </p>

              <div className="space-y-6 mb-12">
                <a 
                  href="mailto:hello@blueshelf.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0071ce]/10 flex items-center justify-center group-hover:bg-[#0071ce]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#0071ce]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us</p>
                    <p className="text-gray-900 font-medium">hello@blueshelf.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+12605551234"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0071ce]/10 flex items-center justify-center group-hover:bg-[#0071ce]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#0071ce]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us</p>
                    <p className="text-gray-900 font-medium">(260) 555-1234</p>
                  </div>
                </a>

                <a 
                  href="https://calendly.com/blueshelf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0071ce]/10 flex items-center justify-center group-hover:bg-[#0071ce]/20 transition-colors">
                    <Calendar className="w-5 h-5 text-[#0071ce]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Schedule a call</p>
                    <p className="text-gray-900 font-medium">Book a 15-min intro</p>
                  </div>
                </a>
              </div>

              <div className="p-6 rounded-xl bg-[#0071ce]/5 border border-[#0071ce]/10">
                <h3 className="text-gray-900 font-semibold mb-2">Free Listing Audit</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get a complimentary review of your current Walmart listings. We&apos;ll identify content gaps and opportunities.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center text-[#0071ce] font-medium text-sm group"
                >
                  Request an audit
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              {formState === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message sent!</h3>
                  <p className="text-gray-600 mb-8">
                    We&apos;ll get back to you within 1 business day.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFormState("idle")
                      setFormData({ name: "", email: "", company: "", skuCount: "", message: "" })
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                  <p className="text-gray-500 mb-8">We&apos;ll respond within 1 business day.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                          placeholder="Brand or agency"
                        />
                      </div>
                      <div>
                        <label htmlFor="skuCount" className="block text-sm font-medium text-gray-700 mb-2">
                          SKU Count
                        </label>
                        <select
                          id="skuCount"
                          value={formData.skuCount}
                          onChange={(e) => setFormData({ ...formData, skuCount: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select range</option>
                          <option value="1-5">1-5 SKUs</option>
                          <option value="6-20">6-20 SKUs</option>
                          <option value="21-50">21-50 SKUs</option>
                          <option value="50+">50+ SKUs</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#0071ce] hover:bg-[#005ba1] text-white"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
