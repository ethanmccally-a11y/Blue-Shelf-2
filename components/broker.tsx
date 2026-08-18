import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, Package, Users } from "lucide-react"

const benefits = [
  {
    icon: Gift,
    title: "Free listing audits for referred brands",
  },
  {
    icon: Package,
    title: "Fixed-scope packages that are easy to sell through",
  },
  {
    icon: Users,
    title: "White-label or direct-to-brand collaboration",
  },
]

export function Broker() {
  return (
    <section id="brokers" className="bg-[#0f0f1a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="text-[#0071ce] text-sm font-semibold tracking-[0.2em] uppercase block mb-4">
              Partner Program
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              For Brokers &<br />Retail Partners
            </h2>
            <p className="text-white/60 text-lg mt-6 max-w-lg leading-relaxed">
              Blue Shelf can act as a plug-in content partner for broker portfolios. Brands get Walmart-ready images. Brokers get a reliable specialist they can bring into client relationships.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#0071ce] hover:bg-[#005ea6] text-white rounded-full px-8 py-6 text-base font-semibold mt-8"
              asChild
            >
              <a href="#contact">
                Partner With Blue Shelf
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right content - Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-5 border border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0071ce]/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#0071ce]" />
                </div>
                <span className="text-white font-medium text-lg">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
