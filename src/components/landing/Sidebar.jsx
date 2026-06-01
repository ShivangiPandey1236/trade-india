import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Wrench, 
  ChevronRight
} from "lucide-react"
import CategoryHoverMenu from './CategoryHoverMenu';

const categories = [
  { id: "machinery", name: "Machinery", icon: Cpu },
  { id: "industrial-supplies", name: "Industrial Supplies", icon: Wrench },
]

export default function Sidebar() {
  return (
    <aside className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm h-full flex flex-col">
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-gray-100 pb-2">
          Top Categories
        </h3>
        <ul className="flex flex-col gap-3">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <li key={idx} className="relative group">
                <Link 
                  to={`/products/${cat.id}`}
                  className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-gray-700 hover:text-primary transition-all font-medium bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20"
                >
                  <div className="flex items-center space-x-3 truncate">
                    <div className="p-2 bg-white rounded-md shadow-sm border border-gray-100 group-hover:border-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                    <span className="truncate font-semibold">{cat.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all flex-shrink-0" />
                </Link>
                <CategoryHoverMenu categoryName={cat.name} />
              </li>
            )
          })}
        </ul>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link 
          to="/products" 
          className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors w-full flex justify-center items-center py-2.5 bg-amber-50 border border-amber-100 rounded-lg hover:bg-amber-100"
        >
          View all Categories
        </Link>
      </div>
    </aside>
  )
}
