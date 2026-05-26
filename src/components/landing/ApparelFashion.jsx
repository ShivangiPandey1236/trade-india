import { apparelFashionData } from "../../data/apparelFashion"

export default function ApparelFashion() {
  return (
    <section className="w-full mt-2 relative p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl sm:text-[22px] font-bold text-[#12a2f0] mb-4 sm:mb-6">
        Apparel & Fashion
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {apparelFashionData.map((category) => (
          <div 
            key={category.id} 
            className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="h-[180px] w-full p-4 flex items-center justify-center bg-white shrink-0 group">
              <img 
                src={category.image} 
                alt={category.title} 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            {/* Title */}
            <div className="px-4 py-3">
              <h4 className="font-bold text-[14px] text-gray-900 line-clamp-2 h-10">
                {category.title}
              </h4>
            </div>

            {/* Sub-items List */}
            <div className="flex flex-col px-4 pb-3 flex-1">
              {category.items.map((item, index) => (
                <div 
                  key={index}
                  className="py-2.5 border-t border-gray-100 text-[13px] text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
