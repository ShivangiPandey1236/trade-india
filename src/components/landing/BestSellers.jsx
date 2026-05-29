import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Crown, CheckCircle2, Award, Send, Star } from "lucide-react"
import { bestSellers } from "../../data/bestSellers"

export default function BestSellers() {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [scrollPercent, setScrollPercent] = useState(0)

  // Function to handle scroll updates (detect start/end of carousel)
  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 10)
      // Check if we are close to the end (within 15px to account for rounding/zoom)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 15)

      const maxScroll = scrollWidth - clientWidth
      if (maxScroll > 0) {
        setScrollPercent((scrollLeft / maxScroll) * 100)
      }
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

  // Smooth scroll logic
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
    <section className="w-full mt-4 relative select-none">
      {/* Self-contained CSS to hide scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Main Banner Container */}
      <div className="relative w-full rounded-[24px] bg-gradient-to-br from-[#f15a24] via-[#e65c00] to-[#d44817] p-6 sm:p-8 shadow-xl overflow-hidden border border-orange-500/20">

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none transform translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full blur-3xl pointer-events-none transform -translate-x-20 translate-y-20" />

        {/* Header Row */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-yellow-300 animate-bounce-subtle" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Featured Products
              </h3>
            </div>
            <p className="text-orange-100 text-xs sm:text-sm mt-1 font-medium">
              Top trending products and certified B2B suppliers this week
            </p>
          </div>

          {/* Navigation Controls (Desktop only) */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => handleScroll("left")}
              disabled={!showLeftArrow}
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/15 text-white hover:bg-white hover:text-orange-600 transition-all duration-300 shadow border border-white/20 disabled:opacity-30 disabled:pointer-events-none cursor-pointer`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!showRightArrow}
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/15 text-white hover:bg-white hover:text-orange-600 transition-all duration-300 shadow border border-white/20 disabled:opacity-30 disabled:pointer-events-none cursor-pointer`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel List */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory relative z-10 pb-2"
        >
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="w-[240px] sm:w-[270px] shrink-0 bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-orange-100/50 flex flex-col justify-between snap-start group relative"
            >
              <div>
                {/* Premium Supplier Badges */}
                {item.sellerType === "Platinum Seller" && (
                  <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-purple-700 via-indigo-700 to-indigo-800 text-white text-[10px] font-black px-2.5 py-1 rounded-lg flex items-center shadow-lg border border-indigo-400/20 uppercase tracking-wider scale-95 group-hover:scale-100 transition-transform">
                    <Crown className="w-3.5 h-3.5 mr-1 text-yellow-300 fill-yellow-300" />
                    <span>Platinum Seller</span>
                  </div>
                )}
                {item.sellerType === "Verified Seller" && (
                  <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-black px-2.5 py-1 rounded-lg flex items-center shadow-lg border border-emerald-400/20 uppercase tracking-wider scale-95 group-hover:scale-100 transition-transform">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-white fill-white/20" />
                    <span>Verified</span>
                  </div>
                )}
                {item.sellerType === "Gold Seller" && (
                  <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg flex items-center shadow-lg border border-amber-400/20 uppercase tracking-wider scale-95 group-hover:scale-100 transition-transform">
                    <Star className="w-3.5 h-3.5 mr-1 text-white fill-white" />
                    <span>Gold Seller</span>
                  </div>
                )}

                {/* Rating Badge (Top Right) */}
                <div className="absolute top-3 right-3 z-20 bg-slate-900/80 backdrop-blur-md text-yellow-400 text-xs font-extrabold px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-sm">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-[10px]">{item.rating.toFixed(1)}</span>
                </div>

                {/* Product Image Wrapper */}
                <div className="relative w-full aspect-square bg-slate-50 flex items-center justify-center p-3 rounded-xl border border-gray-100 overflow-hidden mb-4 group-hover:bg-slate-100/50 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain w-full h-full transform group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <h4 className="text-sm font-extrabold text-slate-800 line-clamp-2 h-10 leading-tight group-hover:text-[#e65c00] transition-colors duration-200">
                  {item.title}
                </h4>

                {/* Price Label */}
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-base font-black text-[#e65c00] tracking-tight">
                    {item.price}
                  </span>
                </div>

                {/* Seller Detail */}
                <div className="mt-2 border-t border-slate-100 pt-2">
                  <p className="text-[11px] font-medium text-slate-400 tracking-wider">SUPPLIER</p>
                  <p className="text-xs font-extrabold text-slate-600 line-clamp-1 mt-0.5 group-hover:text-slate-800 transition-colors">
                    By: {item.seller}
                  </p>
                </div>
              </div>

              {/* Inquiry Action Call */}
              <div className="mt-4 pt-1 flex items-center gap-2">
                <button className="flex-1 bg-[linear-gradient(135deg,#0A34C9_0%,#0E63F3_30%,#4F8EFF_45%,#FF9A2F_65%,#FF8500_85%,#FF7300_100%)] hover:opacity-90 text-white border-0 text-xs font-extrabold py-2.5 rounded-full transition-all duration-300 flex items-center justify-center space-x-1.5 hover:shadow-md cursor-pointer group/btn">
                  <Send className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator Dots (visible on mobile/tablet) */}
        <div className="flex md:hidden justify-center space-x-1.5 mt-4 relative z-10">
          <div className="h-1 bg-white/20 w-24 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-75"
              style={{
                width: `${Math.max(15, Math.min(100, scrollPercent))}%`
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
