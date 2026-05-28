import Link from "next/link"
import { Check, Star } from "lucide-react"

const highlights = [
  "Native and certified teachers",
  "Online or in-person lessons in Cali",
  "Personalized classes for your level and rhythm",
  "Cultural workshops and friendly spaces",
]

const trustBadges = [
  { value: "+200", label: "happy students" },
  { value: "+20", label: "nationalities" },
  { value: "7", label: "years DELE exp." },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-primary pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 rotate-12 text-6xl opacity-20">⭐</div>
        <div className="absolute bottom-1/4 left-20 -rotate-12 text-4xl opacity-20">🎵</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8 relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-sm md:text-base font-semibold">Spanish lessons in Cali & online</span>
              <span className="text-lg">🇨🇴</span>
            </div>

            {/* Main headline */}
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Learn Spanish the{" "}
              <span className="relative inline-block">
                happy
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#FF4FD8" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              way in Cali, Colombia
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
              Personalized one-to-one lessons, native teachers, flexible schedules, and cultural experiences that help you speak Spanish with confidence.
            </p>

            {/* Bullet highlights */}
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white border-2 border-foreground flex items-center justify-center">
                    <Check size={14} className="text-foreground" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/573192029915?text=Hi%20Happy%20Spanish!%20I%20want%20to%20book%20a%20Spanish%20lesson."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-white font-bold px-6 py-4 rounded-full border-2 border-foreground shadow-[4px_4px_0px_0px_#FF4FD8] hover:shadow-[6px_6px_0px_0px_#FF4FD8] hover:-translate-y-1 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book a lesson on WhatsApp
              </Link>
              <Link
                href="#lessons"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-bold px-6 py-4 rounded-full border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                See lesson packages
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg border border-foreground/20"
                >
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span className="font-bold text-foreground">{badge.value}</span>
                  <span className="text-sm text-foreground/70">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Photo collage */}
          <div className="relative lg:h-[600px] hidden md:block">
            {/* Main photo */}
            <div className="absolute top-0 right-0 w-72 h-80 bg-white rounded-2xl border-3 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-6xl mb-2">👩‍🏫</div>
                  <p className="text-sm font-semibold text-foreground/60">Teacher & Student</p>
                </div>
              </div>
            </div>

            {/* Secondary photo */}
            <div className="absolute top-32 left-0 w-56 h-64 bg-white rounded-2xl border-3 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-secondary/10 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">🏠</div>
                  <p className="text-sm font-semibold text-foreground/60">San Antonio Space</p>
                </div>
              </div>
            </div>

            {/* Third photo */}
            <div className="absolute bottom-10 right-10 w-48 h-52 bg-white rounded-2xl border-3 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">💃</div>
                  <p className="text-sm font-semibold text-foreground/60">Cultural Workshop</p>
                </div>
              </div>
            </div>

            {/* Sticker labels */}
            <div className="absolute top-5 left-20 bg-secondary text-white px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-8deg] font-bold sticker-hover">
              ¡Hola!
            </div>
            <div className="absolute bottom-40 left-10 bg-white text-foreground px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[5deg] font-bold sticker-hover">
              Start now!
            </div>
            <div className="absolute top-60 right-5 bg-primary text-foreground px-3 py-1.5 rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[12deg] text-sm font-bold sticker-hover">
              One-to-one
            </div>
            <div className="absolute bottom-20 left-32 bg-white text-foreground px-3 py-1.5 rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg] text-sm font-bold sticker-hover">
              Cali 🌴
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFF7E6"
          />
        </svg>
      </div>
    </section>
  )
}
