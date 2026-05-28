import { Navbar } from "@/components/happy-spanish/navbar"
import { Hero } from "@/components/happy-spanish/hero"
import { Stats } from "@/components/happy-spanish/stats"
import { About } from "@/components/happy-spanish/about"
import { Methodology } from "@/components/happy-spanish/methodology"
import { Pricing } from "@/components/happy-spanish/pricing"
import { Workshops } from "@/components/happy-spanish/workshops"
import { Accommodation } from "@/components/happy-spanish/accommodation"
import { Gallery } from "@/components/happy-spanish/gallery"
import { Testimonials } from "@/components/happy-spanish/testimonials"
import { Location } from "@/components/happy-spanish/location"
import { FAQ } from "@/components/happy-spanish/faq"
import { FinalCTA } from "@/components/happy-spanish/final-cta"
import { Footer } from "@/components/happy-spanish/footer"
import { WhatsAppButton } from "@/components/happy-spanish/whatsapp-button"

export default function HappySpanishLanding() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Methodology />
      <Pricing />
      <Workshops />
      <Accommodation />
      <Gallery />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
