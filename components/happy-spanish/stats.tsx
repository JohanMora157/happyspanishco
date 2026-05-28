const stats = [
  { value: "7", label: "years of DELE experience", icon: "📚" },
  { value: "+200", label: "happy clients", icon: "😊" },
  { value: "+20", label: "nationalities", icon: "🌍" },
  { value: "★", label: "special methodology", icon: "⭐" },
]

export function Stats() {
  return (
    <section className="bg-cream py-16 md:py-24 paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground mb-4">
            Our experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Happy Spanish has helped students from around the world learn Spanish through personalized lessons, cultural exchange, and real-life practice in Cali.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
                index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
              }`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base font-medium text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
