import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Connor Haynes",
    rating: 5,
    text: "Ivonne is a brilliant teacher and person. She teaches with a big smile and great energy. I booked a block of classes and felt my Spanish improve significantly.",
    rotation: "rotate-[-1deg]",
  },
  {
    name: "Victoria Charalambides",
    rating: 5,
    text: "Really nice environment to do classes in. Teachers are so friendly and adapt to your learning style and needs.",
    rotation: "rotate-[2deg]",
  },
  {
    name: "Happy Spanish student",
    rating: 5,
    text: "The lessons are engaging, fun, and adapted to your level. A great way to improve Spanish while feeling welcome in Cali.",
    rotation: "rotate-[-2deg]",
  },
  {
    name: "Happy Spanish student",
    rating: 5,
    text: "Personalized classes, clear explanations, and a relaxed atmosphere that helps you speak more confidently.",
    rotation: "rotate-[1deg]",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-cream py-16 md:py-24 paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What happy students say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real feedback from students who learned Spanish with us.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 rounded-2xl border-3 border-foreground shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative ${testimonial.rotation}`}
            >
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-primary/70 rounded-sm rotate-[-2deg] border border-foreground/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground/80 mb-4 text-lg leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              
              {/* Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary border-2 border-foreground flex items-center justify-center">
                  <span className="font-bold text-foreground">{testimonial.name.charAt(0)}</span>
                </div>
                <span className="font-bold text-foreground">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
