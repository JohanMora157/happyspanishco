"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#lessons", label: "Lessons" },
  { href: "#workshops", label: "Workshops" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b-2 border-foreground"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <Image
              src="/logo_happyspanish.png"
              alt="Happy Spanish Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105 active:scale-95"
              priority
            />
            <span className="font-[family-name:var(--font-display)] text-lg md:text-xl text-foreground">
              HAPPY SPANISH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/573192029915?text=Hi%20Happy%20Spanish!%20I%20want%20to%20book%20a%20Spanish%20lesson."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-foreground font-bold px-5 py-2.5 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
            >
              Book now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border-2 border-foreground bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-foreground shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-4 text-foreground font-semibold hover:bg-primary/20 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/573192029915?text=Hi%20Happy%20Spanish!%20I%20want%20to%20book%20a%20Spanish%20lesson."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center bg-primary text-foreground font-bold px-5 py-3 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            Book now
          </Link>
        </div>
      </div>
    </nav>
  )
}
