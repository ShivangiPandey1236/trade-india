import { useRef, useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { trendingCategories } from "../../data/trendingCategories"

export default function TrendingCategories() {
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
    <section className="w-full mt-2 relative bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 select-none">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <h3 className="text-xl sm:text-[22px] font-bold text-[#12a2f0] mb-4 sm:mb-6">
        Trending Categories
      </h3>

      <div className="relative group">
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-[#0A335C]/30 text-[#0A335C] hover:bg-[#0A335C] hover:text-white transition-all hidden md:flex cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>
        )}

        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        >
          {trendingCategories.map((item) => (
            <div 
              key={item.id} 
              className="w-[200px] sm:w-[220px] shrink-0 bg-white rounded-lg border border-gray-200 flex flex-col snap-start hover:shadow-md transition-shadow duration-300 cursor-pointer group/card"
            >
              <div className="h-[180px] w-full flex items-center justify-center p-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain group-hover/card:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-gray-100 p-3 sm:p-4">
                <h4 className="text-[13px] sm:text-[14px] text-gray-700 font-medium truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-[#0A335C]/30 text-[#0A335C] hover:bg-[#0A335C] hover:text-white transition-all hidden md:flex cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        )}
      </div>
    </section>
  )
}
