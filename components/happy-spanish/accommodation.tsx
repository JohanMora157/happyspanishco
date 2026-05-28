import Link from "next/link"
import { Home, Wifi, MapPin, Calendar, MessageCircle } from "lucide-react"

const features = [
  { icon: Home, text: "Stay in Cali while learning Spanish" },
  { icon: Wifi, text: "Comfortable and enjoyable spaces" },
  { icon: MapPin, text: "Local recommendations" },
  { icon: Calendar, text: "Perfect for travelers and long-term students" },
  { icon: MessageCircle, text: "Ask availability through WhatsApp" },
]

export function Accommodation() {
  return (
    <section className="bg-cream py-16 md:py-24 paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-block bg-secondary text-white px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-bold">For visitors to Cali</span>
            </div>
            
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground">
              Accommodation in Cali
            </h2>
            
            <p className="text-lg text-foreground/80">
              Coming to Cali to study Spanish? Happy Spanish can also guide students with accommodation options in friendly, comfortable spaces in the city.
            </p>

            {/* Features */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary border-2 border-foreground flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </span>
                  <span className="text-foreground/80 font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/573192029915?text=Hi%20Happy%20Spanish!%20I%20want%20to%20ask%20about%20accommodation%20in%20Cali."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-white font-bold px-6 py-4 rounded-full border-2 border-foreground shadow-[4px_4px_0px_0px_#FF4FD8] hover:shadow-[6px_6px_0px_0px_#FF4FD8] hover:-translate-y-1 transition-all"
            >
              Ask about accommodation
            </Link>
          </div>

          {/* Right - Photo grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-3 rotate-[-2deg]">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🏠</div>
                  <p className="text-xs text-foreground/50 font-medium">Apartment</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-3 rotate-[3deg] mt-8">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🌴</div>
                  <p className="text-xs text-foreground/50 font-medium">Balcony</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-3 rotate-[2deg]">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-cream-dark to-cream flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🛋️</div>
                  <p className="text-xs text-foreground/50 font-medium">Hammock</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-3 rotate-[-3deg] mt-[-20px]">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📚</div>
                  <p className="text-xs text-foreground/50 font-medium">Classroom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
