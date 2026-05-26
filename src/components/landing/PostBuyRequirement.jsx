import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import pbrBanner from "../../assets/pbr-utpaad.png"

export default function PostBuyRequirement() {
  const [loanInterest, setLoanInterest] = useState(null)

  return (
    <section className="w-full mt-2 relative p-6 sm:p-10 bg-[#fcf9f5] rounded-xl shadow-sm border border-brand-border flex flex-col md:flex-row items-stretch gap-8 overflow-hidden">
      
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[300px]">
        <img 
          src={pbrBanner} 
          alt="Post Buy Requirement" 
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col pt-2 relative">
        {/* Logo Text - top right of form */}
        <div className="absolute top-0 right-0 hidden sm:flex flex-col items-end">
          <div className="text-2xl font-black tracking-tighter flex items-center">
            <span className="text-[#12a2f0]">Utpaad</span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
          Post Buy Requirement
        </h2>
        
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Tell us what you need, and we'll help you get quotes
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-secondary h-2 rounded-full w-1/4"></div>
        </div>

        <p className="text-gray-800 text-sm font-medium mb-3">
          Provide the below details to get quick quotes from sellers<span className="text-red-500">*</span>
        </p>

        <form className="flex flex-col gap-4">
          {/* Product Input */}
          <div>
            <input 
              type="text" 
              placeholder="Enter the product you are looking for..." 
              className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all"
            />
          </div>

          {/* Mobile Input Row */}
          <div className="flex gap-3">
            {/* Country Code */}
            <div className="relative w-[110px] shrink-0">
              <div className="w-full h-full p-3 bg-white border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-3.5 bg-orange-200 relative overflow-hidden rounded-[1px]">
                    {/* Simple India flag CSS representation */}
                    <div className="w-full h-1/3 bg-[#FF9933]"></div>
                    <div className="w-full h-1/3 bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full border border-[#000080]"></div>
                    </div>
                    <div className="w-full h-1/3 bg-[#138808]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">+91</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            {/* Mobile Number */}
            <div className="flex-1">
              <input 
                type="tel" 
                placeholder="Enter Mobile Number" 
                className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          {/* Quantity and Unit Row */}
          <div className="flex gap-3">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Quantity" 
                className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all"
              />
            </div>
            <div className="flex-1 relative">
              <div className="w-full h-full p-3 bg-white border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">Select Unit</span>
                <ChevronDown className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Finance Question */}
          <div className="mt-2">
            <p className="text-sm text-gray-800 mb-2">
              Would you like a loan to finance this order?
            </p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${loanInterest === 'yes' ? 'border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                  {loanInterest === 'yes' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <input 
                  type="radio" 
                  name="loan" 
                  className="hidden" 
                  onChange={() => setLoanInterest('yes')}
                  checked={loanInterest === 'yes'}
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${loanInterest === 'no' ? 'border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                  {loanInterest === 'no' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <input 
                  type="radio" 
                  name="loan" 
                  className="hidden" 
                  onChange={() => setLoanInterest('no')}
                  checked={loanInterest === 'no'}
                />
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-end">
            <button 
              type="button"
              className="bg-[#316c90] hover:bg-[#255472] text-white text-sm font-semibold py-2.5 px-6 rounded-md flex items-center gap-2 transition-colors cursor-pointer"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}
