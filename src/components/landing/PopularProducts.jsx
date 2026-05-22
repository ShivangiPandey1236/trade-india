import { popularProductsData } from "../../data/popularProducts"

export default function PopularProducts() {
  return (
    <section className="w-full mt-2 relative bg-[#f4f6f8] rounded-xl shadow-sm border border-brand-border p-6 sm:p-8">
      <h3 className="text-xl sm:text-[22px] font-bold text-primary mb-6">
        Popular Products
      </h3>

      <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
        {popularProductsData.map((product, index) => (
          <a
            key={index}
            href="#"
            className="text-[13px] sm:text-[14px] font-medium text-slate-500 hover:text-primary transition-colors duration-200"
          >
            {product}
          </a>
        ))}
      </div>
    </section>
  )
}
