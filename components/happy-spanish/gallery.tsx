import Link from "next/link"

const galleryItems = [
  { type: "student", emoji: "👩‍🎓", label: "Student", rotation: "rotate-[-3deg]" },
  { type: "workshop", emoji: "💃", label: "Workshop", rotation: "rotate-[2deg]" },
  { type: "classroom", emoji: "📝", label: "Classroom", rotation: "rotate-[-1deg]" },
  { type: "terrace", emoji: "🌅", label: "Terrace", rotation: "rotate-[3deg]" },
  { type: "student", emoji: "👨‍🎓", label: "Student", rotation: "rotate-[1deg]" },
  { type: "activity", emoji: "🎨", label: "Activity", rotation: "rotate-[-2deg]" },
  { type: "group", emoji: "👥", label: "Group", rotation: "rotate-[2deg]" },
  { type: "cali", emoji: "🌴", label: "Cali", rotation: "rotate-[-1deg]" },
]

const nationalities = ["🇦🇺", "🇬🇧", "🇫🇷", "🇩🇪", "🇨🇭", "🇨🇦", "🇬🇷", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🇨🇿"]

export function Gallery() {
  return (
    <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
      {/* Scattered nationality flags */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {nationalities.map((flag, index) => (
          <span
            key={index}
            className="absolute text-2xl opacity-30"
            style={{
              top: `${10 + (index * 10) % 80}%`,
              left: `${5 + (index * 12) % 90}%`,
              transform: `rotate(${-15 + index * 5}deg)`,
            }}
          >
            {flag}
          </span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Happy students from around the world
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We have worked with students from more than 20 nationalities, creating a friendly community around language, culture, and real-life Spanish practice.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-3 rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${item.rotation}`}
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl mb-2">{item.emoji}</div>
                  <p className="text-xs md:text-sm text-foreground/50 font-medium">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nationality tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["Australia", "UK", "France", "Germany", "Switzerland", "Canada", "Greece", "Scotland", "Czech Republic"].map(
            (country, index) => (
              <span
                key={index}
                className="bg-white/80 text-foreground px-3 py-1 rounded-full border border-foreground/30 text-sm font-medium"
              >
                {nationalities[index]} {country}
              </span>
            )
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://www.instagram.com/happyspanishco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-white font-bold px-8 py-4 rounded-full border-2 border-foreground shadow-[4px_4px_0px_0px_#FF4FD8] hover:shadow-[6px_6px_0px_0px_#FF4FD8] hover:-translate-y-1 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            See more on Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}
