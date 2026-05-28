"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "Can I take classes online?",
    answer: "Yes. Happy Spanish offers online lessons and in-person lessons in Cali. You can also combine both.",
  },
  {
    question: "Are the lessons one-to-one?",
    answer: "Yes. The main lesson format is personalized one-to-one Spanish classes.",
  },
  {
    question: "Do I need to know Spanish before starting?",
    answer: "No. Classes are adapted to your level, whether you are a complete beginner or already speaking Spanish.",
  },
  {
    question: "How do I know my level?",
    answer: "Happy Spanish can include a level test and create a personalized plan for your classes.",
  },
  {
    question: "How long do I have to use my package?",
    answer: "Packages can be used during one year, according to the information provided by Happy Spanish.",
  },
  {
    question: "Can I take classes in person in Cali?",
    answer: "Yes. In-person classes are available in comfortable and friendly classroom spaces in Cali.",
  },
  {
    question: "Do you offer cultural activities?",
    answer: "Yes. Happy Spanish offers workshops and cultural experiences such as Spanish with salsa, music, Colombian snacks, cacao, conversation, and more.",
  },
  {
    question: "How can I book?",
    answer: "The easiest way is to send a WhatsApp message to +57 319 202 9915.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-cream py-16 md:py-24 paper-texture">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Questions before starting?
          </h2>
          <p className="text-lg text-foreground/70">
            Here are answers to common questions about our Spanish lessons.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-3 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all ${
                openIndex === index ? "shadow-[6px_6px_0px_0px_#FF4FD8]" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-foreground pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-foreground/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
