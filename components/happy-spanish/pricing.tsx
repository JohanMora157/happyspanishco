import Link from "next/link"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    title: "One-to-one lesson",
    price: "COP $70.000",
    period: "/ hour",
    description: "Perfect if you want to try a class or book individual sessions.",
    features: [
      "Online or in-person",
      "Personalized lesson",
      "Level-based activities",
      "Digital exercises and homework",
      "Flexible time",
    ],
    buttonText: "Book this lesson",
    featured: false,
    rotation: "-rotate-1",
  },
  {
    title: "5-hour package",
    price: "COP $58.000",
    period: "/ hour",
    description: "A flexible package for students who want to build consistency.",
    features: [
      "5 prepaid hours",
      "One year to use your classes",
      "Combine online and in-person lessons",
      "Personalized plan",
      "Digital exercises and homework",
    ],
    buttonText: "Ask for this package",
    featured: true,
    rotation: "rotate-0",
  },
  {
    title: "10-hour package",
    price: "COP $57.000",
    period: "/ hour",
    description: "Best for students who want steady progress and a planned learning path.",
    features: [
      "10 prepaid hours",
      "One year to use your classes",
      "Flexible schedule",
      "Level test included",
      "Personalized and planned lessons",
    ],
    buttonText: "Start with 10 hours",
    featured: false,
    rotation: "rotate-1",
  },
]

export function Pricing() {
  return (
    <section id="lessons" className="bg-cream py-16 md:py-24 paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-white px-4 py-2 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="font-bold">One-to-one Spanish lessons</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our lessons
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Online or in-person one-to-one Spanish lessons in Cali.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.featured ? "bg-primary" : "bg-white"
              } p-6 md:p-8 rounded-3xl border-3 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${plan.rotation} ${
                plan.featured ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {plan.featured && (
                <div className="inline-block bg-secondary text-white px-3 py-1 rounded-full border-2 border-foreground text-sm font-bold mb-4">
                  Most popular
                </div>
              )}
              
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-2">
                {plan.title}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground">
                  {plan.price}
                </span>
                <span className="text-foreground/70">{plan.period}</span>
              </div>
              
              <p className="text-foreground/70 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full ${plan.featured ? "bg-white" : "bg-primary"} border-2 border-foreground flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="https://wa.me/573192029915?text=Hi%20Happy%20Spanish!%20I%20want%20to%20book%20a%20Spanish%20lesson."
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-bold py-3 px-6 rounded-full border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all ${
                  plan.featured
                    ? "bg-foreground text-white"
                    : "bg-secondary text-white"
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional notes */}
        <div className="bg-white p-6 rounded-2xl border-2 border-foreground/20 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">💡</span>
            <p className="text-foreground/70">
              <strong className="text-foreground">Note:</strong> Card payments or international transfers in COP may have a 5% extra fee. For 20-hour or 50-hour prepaid packages, ask about special cash discounts.
            </p>
          </div>
          <p className="text-foreground/70 text-center">
            Classes can be <strong className="text-foreground">online</strong>, <strong className="text-foreground">in person</strong>, or <strong className="text-foreground">combined</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
