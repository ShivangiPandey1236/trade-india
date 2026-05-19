import { useState, useEffect } from "react"

const images = [
  { src: "/hero-banner.png", alt: "SME Excellence Awards - tradeindia" },
  { src: "/hero-banner-2.png", alt: "Global Trade & Cargo Logistics - tradeindia" },
  { src: "/hero-banner-3.png", alt: "Smart Manufacturing & Automation - tradeindia" },
  { src: "/hero-banner-4.png", alt: "International Trade Expo - tradeindia" },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[400px] bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-800 relative group">
      {/* Slide Images Container */}
      <div className="relative w-full h-full">
        {images.map((image, idx) => (
          <img 
            key={idx}
            src={image.src} 
            alt={image.alt} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              idx === current ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95"
            }`}
          />
        ))}
      </div>

      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none z-20" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-xl z-20" />

      {/* Navigation Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
