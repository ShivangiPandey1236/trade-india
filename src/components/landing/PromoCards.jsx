import { ArrowRight, ShoppingBag, Store } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PromoCards() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full h-full justify-between">
      {/* Buyer Card */}
      <div className="flex-1 rounded-xl bg-gradient-to-br from-amber-50 via-amber-100/70 to-amber-200/50 border border-amber-200/60 p-5 shadow-sm relative overflow-hidden group flex flex-col justify-between min-h-[160px]">
        {/* Content */}
        <div className="relative z-10">
          <span className="text-amber-800 text-sm font-semibold tracking-wide uppercase">Looking</span>
          <h4 className="text-xl font-bold text-slate-800 leading-tight">
            for a <span className="text-amber-700 font-extrabold">Product</span>
          </h4>
        </div>

        {/* Action Button */}
        <div className="mt-4 relative z-10">
          <Button 
            variant="outline" 
            className="w-full bg-white/95 hover:bg-white text-slate-800 border-amber-300 hover:border-amber-400 font-bold rounded-full py-5 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            Post Buy Requirement
          </Button>
        </div>

        {/* Decorative Vector Bag Icon */}
        <div className="absolute right-3 top-3 text-amber-200/60 group-hover:text-amber-300/60 transition-colors duration-300 pointer-events-none group-hover:scale-105 transform origin-top-right">
          <ShoppingBag className="w-24 h-24 stroke-[1.2]" />
        </div>
      </div>

      {/* Seller Card */}
      <div className="flex-1 rounded-xl bg-gradient-to-br from-red-500 via-rose-600 to-red-700 border border-red-600/20 p-5 shadow-sm relative overflow-hidden group flex flex-col justify-between min-h-[160px]">
        {/* Content */}
        <div className="relative z-10 text-white">
          <span className="text-red-100/90 text-sm font-medium tracking-wide">Want to grow your</span>
          <h4 className="text-xl font-extrabold leading-tight">
            business 10x faster
          </h4>
        </div>

        {/* Action Button */}
        <div className="mt-4 relative z-10">
          <Button 
            className="w-full bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white font-bold rounded-full py-5 transition-all duration-300 group/btn"
          >
            <span className="flex items-center justify-center space-x-1">
              <span>Sell on TradeIndia</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Decorative Storefront Icon */}
        <div className="absolute right-3 top-3 text-white/10 group-hover:text-white/20 transition-colors duration-300 pointer-events-none group-hover:scale-105 transform origin-top-right">
          <Store className="w-24 h-24 stroke-[1]" />
        </div>
      </div>
    </div>
  )
}
