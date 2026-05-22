import { useRef, useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { sellersByCitiesData } from "../../data/sellersByCities"

export default function SellersByCities() {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 15)
    }
  }

  useEffect(() => {
    const scrollEl = scrollRef.current
    if (scrollEl) {
      scrollEl.addEventListener("scroll", updateScrollButtons, { passive: true })
      // Check initially
      updateScrollButtons()
      // Re-check on resize
      window.addEventListener("resize", updateScrollButtons, { passive: true })
    }
    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener("scroll", updateScrollButtons)
      }
      window.removeEventListener("resize", updateScrollButtons)
    }
  }, [])

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const offset = clientWidth * 0.8
      const targetScroll = direction === "left" ? scrollLeft - offset : scrollLeft + offset

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full mt-2 relative bg-brand-card rounded-xl shadow-sm border border-brand-border p-4 sm:p-6 select-none">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-[22px] font-bold text-primary">
          Sellers by Cities
        </h3>
        <a href="#" className="text-sm font-medium text-secondary hover:text-secondary-hover transition-colors">
          View All
        </a>
      </div>

      <div className="relative group">
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all hidden md:flex cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>
        )}

        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        >
          {sellersByCitiesData.map((city) => (
            <div 
              key={city.id} 
              className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] shrink-0 rounded-2xl overflow-hidden relative snap-start group/card cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">
                <h4 className="text-white text-base sm:text-lg font-medium tracking-wide">
                  {city.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all hidden md:flex cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        )}
      </div>
    </section>
  )
}
