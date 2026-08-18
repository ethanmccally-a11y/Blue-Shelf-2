import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { BeforeAfter } from "@/components/before-after"
import { WhyContentWins } from "@/components/why-content-wins"
import { CaseStudy } from "@/components/case-study"
import { Pricing } from "@/components/pricing"
import { BrokerReferral } from "@/components/broker-referral"
import { FAQ } from "@/components/faq"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <BeforeAfter />
      <WhyContentWins />
      <CaseStudy />
      <Pricing />
      <BrokerReferral />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  )
}
