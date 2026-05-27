import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shirt, 
  FlaskConical, 
  Cpu, 
  Building2, 
  Tv, 
  Stethoscope, 
  Gift, 
  Package, 
  Sprout, 
  Home, 
  Gem, 
  Wrench, 
  Grid,
  ChevronRight
} from "lucide-react"

const categories = [
  { name: "Health & Beauty", icon: Heart },
  { name: "Apparel & Fashion", icon: Shirt },
  { name: "Chemicals", icon: FlaskConical },
  { name: "Machinery", icon: Cpu },
  { name: "Construction & Real Estate", icon: Building2, shortName: "Construction & Real..." },
  { name: "Electronics & Electrical", icon: Tv, shortName: "Electronics & Electri..." },
  { name: "Hospital & Medical Supplies", icon: Stethoscope, shortName: "Hospital & Medical ..." },
  { name: "Gifts & Crafts", icon: Gift },
  { name: "Packaging & Paper", icon: Package },
  { name: "Agriculture", icon: Sprout },
  { name: "Home Supplies", icon: Home },
  { name: "Mineral & Metals", icon: Gem },
  { name: "Industrial Supplies", icon: Wrench },
  { name: "Pipes, Tubes & Fittings", icon: Grid, shortName: "Pipes, Tubes & Fitti..." },
]

export default function Sidebar() {
  return (
    <aside className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-3 border-b border-gray-100 pb-2">
          Top Categories
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-1 md:gap-0.5 md:space-y-0.5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <li key={idx}>
                <a 
                  href="#" 
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-all group font-medium"
                >
                  <div className="flex items-center space-x-3 truncate">
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="truncate">{cat.shortName || cat.name}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all flex-shrink-0" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <Link 
          to="/products" 
          className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors inline-flex items-center"
        >
          View all Categories
        </Link>
      </div>
    </aside>
  )
}
