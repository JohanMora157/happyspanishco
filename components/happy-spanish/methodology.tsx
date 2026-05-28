import { User, MessageCircle, Clock, Music } from "lucide-react"

const methodologyCards = [
  {
    icon: User,
    title: "Personalized lessons",
    description: "Every class is planned around your level, goals, pace, and learning style.",
    color: "bg-primary",
  },
  {
    icon: MessageCircle,
    title: "Real-life Spanish",
    description: "Learn useful grammar, vocabulary, and conversation skills you can use immediately in Colombia.",
    color: "bg-secondary",
  },
  {
    icon: Clock,
    title: "Flexible schedules",
    description: "Choose online or in-person lessons, with flexible times and packages you can use throughout the year.",
    color: "bg-white",
  },
  {
    icon: Music,
    title: "Culture included",
    description: "Practice Spanish through music, food, salsa, workshops, Colombian expressions, and local experiences.",
    color: "bg-primary",
  },
]

const labels = ["conversation", "grammar", "Cali", "culture", "salsa", "coffee"]

export function Methodology() {
  return (
    <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 text-6xl opacity-10 rotate-12">📖</div>
        <div className="absolute bottom-20 left-10 text-5xl opacity-10 -rotate-12">🎸</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Spanish that fits your rhythm
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our methodology combines personalized attention with real-world practice for lasting results.
          </p>
        </div>

        {/* Methodology cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {methodologyCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} p-6 rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
                index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
              }`}
            >
              <div className={`w-12 h-12 rounded-full ${card.color === "bg-white" ? "bg-primary" : "bg-white"} border-2 border-foreground flex items-center justify-center mb-4`}>
                <card.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">
                {card.title}
              </h3>
              <p className={`${card.color === "bg-secondary" ? "text-white/90" : "text-foreground/70"}`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative labels */}
        <div className="flex flex-wrap justify-center gap-3">
          {labels.map((label, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full border-2 border-foreground font-semibold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sticker-hover ${
                index % 3 === 0
                  ? "bg-white text-foreground"
                  : index % 3 === 1
                  ? "bg-secondary text-white"
                  : "bg-foreground text-white"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
