import { 
  ArrowRight, 
  Calendar, 
  Handshake, 
  Globe, 
  Layers, 
  Users 
} from "lucide-react"

const valueAdds = [
  {
    category: "TradeIndia",
    title: "Tradeshows and Exhibitions",
    icon: Calendar,
  },
  {
    category: "TradeIndia",
    title: "Buy Trade Leads",
    icon: Handshake,
  },
  {
    category: "TradeIndia",
    title: "Book Domain",
    icon: Globe,
  },
  {
    category: "TradeIndia",
    title: "Membership Plans",
    icon: Layers,
  },
  {
    category: "Find Distributors",
    title: "For Your Business",
    icon: Users,
  },
]

export default function ValueAdds() {
  return (
    <section className="w-full mt-8">
      <h3 className="text-xl font-extrabold text-slate-800 mb-5 tracking-tight">
        More Value Adds
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {valueAdds.map((item, idx) => {
          const IconComponent = item.icon
          return (
            <div 
              key={idx}
              className="bg-white border border-gray-150 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[140px] cursor-pointer hover:border-primary/20"
            >
              {/* Text Info */}
              <div className="relative z-10">
                <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-extrabold text-slate-800 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h4>
              </div>

              {/* Bottom CTA Link */}
              <div className="mt-6 relative z-10 flex items-center text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors">
                <span>Learn more</span>
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-3 h-3 stroke-[3]" />
                </span>
              </div>

              {/* Decorative Faint Icon in Background */}
              <div className="absolute right-3 bottom-3 text-slate-100/60 group-hover:text-primary/5 transition-all duration-500 pointer-events-none transform translate-y-2 group-hover:translate-y-0 group-hover:scale-110">
                <IconComponent className="w-16 h-16 stroke-[1.2]" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
