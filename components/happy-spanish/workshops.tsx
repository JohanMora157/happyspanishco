import Link from "next/link"

const workshops = [
  { title: "Spanish & Salsa", emoji: "💃", color: "bg-secondary" },
  { title: "Colombian Snacks", emoji: "🍽️", color: "bg-primary" },
  { title: "Music & Spanish", emoji: "🎵", color: "bg-white" },
  { title: "Viche & Spanish", emoji: "🥃", color: "bg-primary" },
  { title: "Collage & Spanish", emoji: "🎨", color: "bg-secondary" },
  { title: "History & Spanish", emoji: "📜", color: "bg-white" },
  { title: "Spanish & Cacao", emoji: "🍫", color: "bg-primary" },
  { title: "Food Vocabulary", emoji: "🥘", color: "bg-white" },
  { title: "Kitchen Utensils", emoji: "🍳", color: "bg-secondary" },
  { title: "Hobbies Vocabulary", emoji: "⚽", color: "bg-primary" },
  { title: "Conversation Meetings", emoji: "💬", color: "bg-white" },
]

export function Workshops() {
  return (
    <section id="workshops" className="bg-foreground py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 text-8xl">🎭</div>
        <div className="absolute bottom-10 right-20 text-7xl">☕</div>
        <div className="absolute top-1/2 right-10 text-6xl">🎶</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-foreground px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_#FF4FD8] mb-4">
            <span className="font-bold">Learn + Experience</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Happy workshops
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Practice Spanish while experiencing Colombian culture. Learning Spanish is not only about grammar!
          </p>
        </div>

        {/* Workshops description */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-3xl mx-auto mb-10">
          <p className="text-white/90 text-center">
            At Happy Spanish, workshops help students practice vocabulary, conversation, listening, and culture in a relaxed environment.
          </p>
        </div>

        {/* Workshop cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className={`${workshop.color} p-4 md:p-5 rounded-xl border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transform hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-300 ${
                index % 3 === 0 ? "rotate-[-2deg]" : index % 3 === 1 ? "rotate-[1deg]" : "rotate-[-1deg]"
              }`}
            >
              <div className="text-3xl md:text-4xl mb-2">{workshop.emoji}</div>
              <h3 className={`font-bold text-sm md:text-base ${workshop.color === "bg-secondary" ? "text-white" : "text-foreground"}`}>
                {workshop.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-white/60 text-sm mb-8 italic">
          * Examples of past and possible workshops
        </p>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://wa.me/573192029915?text=Hi%20Happy%20Spanish!%20I%20want%20to%20know%20about%20upcoming%20workshops."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-foreground font-bold px-8 py-4 rounded-full border-2 border-foreground shadow-[4px_4px_0px_0px_#FF4FD8] hover:shadow-[6px_6px_0px_0px_#FF4FD8] hover:-translate-y-1 transition-all"
          >
            Ask for upcoming workshops
          </Link>
        </div>
      </div>
    </section>
  )
}
