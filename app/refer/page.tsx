"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Send, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ReferPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mjglbkvy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormState("success")
        form.reset()
      } else {
        const data = await response.json()
        setErrorMessage(data.error || "Something went wrong. Please try again.")
        setFormState("error")
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.")
      setFormState("error")
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0071ce]/10 text-[#0071ce] text-sm font-medium mb-6">
            <Send className="w-4 h-4" />
            Refer a Brand
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Submit a Referral
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Know a CPG brand that needs Walmart-ready content? Submit their info and earn 10% when they close.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-6">
          {formState === "success" ? (
            <div className="text-center py-12 px-6 rounded-2xl bg-gray-50">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Referral Submitted!</h2>
              <p className="text-gray-600 mb-8">
                We&apos;ll reach out to the brand within 2 business days and keep you updated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  onClick={() => setFormState("idle")}
                >
                  Submit Another Referral
                </Button>
                <Button asChild>
                  <Link href="/">Return Home</Link>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Message */}
              {formState === "error" && (
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">Submission Failed</p>
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Your Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0071ce] text-white text-sm flex items-center justify-center">1</span>
                  Your Information
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0071ce] text-white text-sm flex items-center justify-center">2</span>
                  Brand Information
                </h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-2">
                        Brand Name *
                      </label>
                      <input
                        type="text"
                        id="brandName"
                        name="brand_name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Website or Product Link
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        placeholder="https://..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="brandContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Brand Contact Name
                      </label>
                      <input
                        type="text"
                        id="brandContact"
                        name="brand_contact_name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label htmlFor="brandEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Brand Contact Email
                      </label>
                      <input
                        type="email"
                        id="brandEmail"
                        name="brand_contact_email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Referral Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0071ce] text-white text-sm flex items-center justify-center">3</span>
                  Referral Details
                </h3>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                    Notes about the brand or project
                  </label>
                  <textarea
                    id="details"
                    name="referral_details"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all resize-none"
                    placeholder="Any context about their needs, timeline, estimated SKU count, or current situation..."
                  />
                </div>
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
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Referral
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Not a partner yet?{" "}
                <Link href="/partners" className="text-[#0071ce] hover:underline">
                  Apply to join our referral program
                </Link>
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
