import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { testimonialsData } from "../../data/testimonials"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsData.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const activeTestimonial = testimonialsData[activeIndex]

  // Get previous and next indices for side images
  const prevIndex = (activeIndex - 1 + testimonialsData.length) % testimonialsData.length
  const nextIndex = (activeIndex + 1) % testimonialsData.length

  return (
    <section className="w-full mt-2 relative bg-[#fdfdfd] overflow-hidden rounded-xl shadow-sm border border-brand-border py-12 sm:py-16 select-none">
      {/* Scattered background dots */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-[#2b7fff]"></div>
      <div className="absolute top-[40%] left-[25%] w-3 h-3 rounded-full bg-orange-500"></div>
      <div className="absolute bottom-[30%] left-[20%] w-2 h-2 rounded-full bg-yellow-400"></div>
      <div className="absolute bottom-[10%] left-[35%] w-1.5 h-1.5 rounded-full bg-orange-500"></div>

      <div className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-yellow-400"></div>
      <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-orange-500"></div>
      <div className="absolute bottom-[5%] right-[40%] w-4 h-4 rounded-full bg-[#2b7fff]"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
          What Our Customers Say About Us
        </h2>
        <p className="text-brand-muted text-sm sm:text-base mb-12">
          Don't just take our word for it. Our customers say it the best.
        </p>

        {/* Faces Row */}
        <div className="flex items-center justify-center gap-4 sm:gap-16 md:gap-24 mb-8 w-full max-w-3xl">
          {/* Previous Customer (Dimmed, Smaller) */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden opacity-40 scale-75 cursor-pointer transition-all duration-500 hidden sm:block"
            onClick={() => setActiveIndex(prevIndex)}
          >
            <img src={testimonialsData[prevIndex].image} alt="Previous Customer" className="w-full h-full object-cover" />
          </div>

          {/* Active Customer */}
          <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl transform scale-110 transition-all duration-500 z-10">
            <img src={activeTestimonial.image} alt={activeTestimonial.name} className="w-full h-full object-cover" />
          </div>

          {/* Next Customer (Dimmed, Smaller) */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden opacity-40 scale-75 cursor-pointer transition-all duration-500 hidden sm:block"
            onClick={() => setActiveIndex(nextIndex)}
          >
            <img src={testimonialsData[nextIndex].image} alt="Next Customer" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center animate-in fade-in zoom-in duration-500 relative">

          {/* Quote Marks Background */}
          <div className="absolute top-10 left-0 sm:-left-8 text-8xl text-brand-border/40 opacity-50 select-none hidden sm:block">
            “
          </div>
          <div className="absolute bottom-[-10px] right-0 sm:-right-8 text-8xl text-brand-border/40 opacity-50 select-none hidden sm:block">
            ”
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-brand-text">
            {activeTestimonial.name}
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted mt-1 uppercase tracking-wide px-4">
            {activeTestimonial.company}
          </p>

          <div className="flex items-center justify-center gap-1 my-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${i < activeTestimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>

          <p className="text-sm sm:text-base text-brand-text font-medium leading-relaxed px-6 relative z-10">
            {activeTestimonial.text}
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-12 relative z-10 w-full">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx
                ? "w-8 sm:w-10 bg-secondary"
                : "w-8 sm:w-10 bg-gray-200 hover:bg-gray-300"
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
