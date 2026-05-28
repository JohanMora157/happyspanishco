import { Check } from "lucide-react"

const features = [
  "Qualified, native, and experienced teachers",
  "Dynamic and special methodology",
  "Classes created around the student's needs and rhythm",
  "Friendly and intercultural environment",
  "Comfortable classroom spaces in Cali",
]

export function About() {
  return (
    <section id="about" className="bg-cream py-16 md:py-24 paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Photo placeholder */}
          <div className="relative">
            <div className="bg-white rounded-3xl border-3 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 rotate-[-2deg]">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">👥</div>
                  <p className="text-foreground/50 font-medium">Happy Spanish classroom</p>
                </div>
              </div>
            </div>
            
            {/* Decorative stickers */}
            <div className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[12deg] font-bold text-sm">
              San Antonio 📍
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-foreground px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-8deg] font-bold text-sm">
              Cali, Colombia 🇨🇴
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-bold text-foreground">A different Spanish school</span>
            </div>
            
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground">
              We are Happy Spanish
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Happy Spanish is a different Spanish school based in San Antonio, Cali. We create dynamic, personalized Spanish lessons designed around each student&apos;s needs, level, goals, and rhythm.
              </p>
              <p>
                Our classes are friendly, practical, and intercultural. Whether you are starting from zero, improving your conversation, preparing for travel, or looking for confidence in everyday Spanish, we help you learn in a way that feels natural and enjoyable.
              </p>
            </div>

            {/* Feature card */}
            <div className="bg-white p-6 rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_#FF4FD8]">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-4">
                What makes us different
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary border-2 border-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
