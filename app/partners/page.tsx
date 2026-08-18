"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Percent, FileSearch, Package, Users, CheckCircle, Handshake, AlertCircle } from "lucide-react"

const benefits = [
  {
    icon: Percent,
    title: "Referral Incentives",
    description: "Earn 10% of the project invoice on the first project with any brand you introduce, paid after we collect.",
  },
  {
    icon: FileSearch,
    title: "Free Content Reviews",
    description: "Referred brands receive a complimentary Walmart.com content review to identify gaps and opportunities.",
  },
  {
    icon: Package,
    title: "Fixed-Scope Packages",
    description: "Clear, productized packages make it easy to introduce Blue Shelf and set accurate expectations.",
  },
  {
    icon: Users,
    title: "White-Label Options",
    description: "Work with us directly or white-label. Partner rates for white-label work are quoted per partnership based on volume.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Submit a Referral",
    description: "Fill out the referral form with your client&apos;s info and project needs.",
  },
  {
    step: "02",
    title: "We Reach Out",
    description: "Blue Shelf contacts the brand directly (or you make the intro) to discuss the project.",
  },
  {
    step: "03",
    title: "Project Kicks Off",
    description: "Once the brand signs, we begin content production. You&apos;re copied on key updates.",
  },
  {
    step: "04",
    title: "Receive Your Incentive",
    description: "Earn 10% of the project invoice on the first project with any brand you introduce, paid after we collect.",
  },
]

export default function PartnersPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mbdwrldl", {
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0071ce]/10 text-[#0071ce] text-sm font-medium mb-6">
            <Handshake className="w-4 h-4" />
            Partner Program
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Partner With Blue Shelf
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join our partner program and help CPG brands get Walmart-ready content. Earn 10% of the project invoice on the first project with any brand you introduce, paid after we collect.
          </p>
          <Button
            size="lg"
            className="bg-[#0071ce] hover:bg-[#005ba1] text-white px-8"
            onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply to Partner
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Partner With Blue Shelf
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg hover:border-gray-200 border border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0071ce]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#0071ce]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-[#0071ce]/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-[2px] bg-gradient-to-r from-[#0071ce]/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section id="partner-form" className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          {formState === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Received!</h2>
              <p className="text-gray-600 mb-8">
                We&apos;ll review your application and get back to you within 2 business days.
              </p>
              <Button variant="outline" onClick={() => setFormState("idle")}>
                Submit Another Application
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                Apply to Become a Partner
              </h2>
              <p className="text-gray-600 text-center mb-10">
                Tell us about your business and we&apos;ll be in touch within 2 business days.
              </p>

              {formState === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Submission Failed</p>
                    <p className="text-red-600 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form 
                onSubmit={handleSubmit} 
                method="POST"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
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
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select role</option>
                      <option value="Retail Broker">Retail Broker</option>
                      <option value="Agency">Agency</option>
                      <option value="Consultant">Consultant</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="clients_per_year" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated CPG clients per year
                  </label>
                  <select
                    id="clients_per_year"
                    name="clients_per_year"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select range</option>
                    <option value="1-5 clients">1-5 clients</option>
                    <option value="6-15 clients">6-15 clients</option>
                    <option value="16-30 clients">16-30 clients</option>
                    <option value="30+ clients">30+ clients</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0071ce] focus:ring-2 focus:ring-[#0071ce]/20 outline-none transition-all resize-none"
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
