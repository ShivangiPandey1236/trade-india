import { useState } from "react"
import { ChevronDown, ArrowRight, X } from "lucide-react"
import pbrBanner from "../../assets/pbr-utpaad.png"

export default function PostBuyReqModal({ isOpen, onClose }) {
  const [loanInterest, setLoanInterest] = useState(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 font-sans">
      <div className="bg-[#fcf9f5] w-full max-w-5xl rounded-2xl shadow-2xl relative flex flex-col md:flex-row items-stretch overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-white/80 hover:bg-white rounded-full text-gray-500 hover:text-gray-800 shadow-sm transition-all cursor-pointer"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Left Image Section */}
        <div className="w-full md:w-5/12 bg-white flex items-center justify-center p-6 relative min-h-[200px] md:min-h-[400px]">
          <img 
            src={pbrBanner} 
            alt="Post Buy Requirement" 
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-7/12 flex flex-col p-6 sm:p-8 lg:p-10 relative bg-[#fcf9f5]">
          <div className="absolute top-0 right-10 hidden sm:flex flex-col items-end pt-8 pr-4">
            <div className="text-2xl font-black tracking-tighter flex items-center">
              <span className="text-[#FF8500]">Utpaad</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-2 mt-4 sm:mt-0">
            Post Buy Requirement
          </h2>
          
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Tell us what you need, and we'll help you get quotes
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div className="bg-secondary h-1.5 rounded-full w-1/4"></div>
          </div>

          <p className="text-gray-800 text-sm font-medium mb-4">
            Provide the below details to get quick quotes from sellers<span className="text-red-500">*</span>
          </p>

          <form className="flex flex-col gap-4">
            {/* Product Input */}
            <div>
              <input 
                type="text" 
                placeholder="Enter the product you are looking for..." 
                className="w-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all shadow-sm"
              />
            </div>

            {/* Email Input (Added) */}
            <div>
              <input 
                type="email" 
                placeholder="Enter your Email ID" 
                className="w-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all shadow-sm"
              />
            </div>

            {/* Mobile Input Row */}
            <div className="flex gap-3">
              {/* Country Code */}
              <div className="relative w-[100px] sm:w-[120px] shrink-0">
                <div className="w-full h-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer shadow-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-5 h-3.5 sm:w-6 sm:h-4 bg-orange-200 relative overflow-hidden rounded-[1px]">
                      <div className="w-full h-1/3 bg-[#FF9933]"></div>
                      <div className="w-full h-1/3 bg-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-[#000080]"></div>
                      </div>
                      <div className="w-full h-1/3 bg-[#138808]"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">+91</span>
                  </div>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>
              </div>
              
              {/* Mobile Number */}
              <div className="flex-1">
                <input 
                  type="tel" 
                  placeholder="Enter Mobile Number" 
                  className="w-full h-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Quantity and Unit Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Quantity" 
                  className="w-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all shadow-sm"
                />
              </div>
              <div className="flex-1 relative">
                <div className="w-full h-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg flex items-center justify-between cursor-pointer shadow-sm">
                  <span className="text-sm text-gray-700">Select Unit</span>
                  <ChevronDown className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Finance Question */}
            <div className="mt-3">
              <p className="text-sm text-gray-800 mb-2">
                Would you like a loan to finance this order?
              </p>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${loanInterest === 'yes' ? 'border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                    {loanInterest === 'yes' && <div className="w-2 h-2 rounded-full bg-primary" />}
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
                    {loanInterest === 'no' && <div className="w-2 h-2 rounded-full bg-primary" />}
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
            <div className="mt-5 flex justify-end">
              <button 
                type="button"
                className="bg-[#316c90] hover:bg-[#255472] text-white text-sm sm:text-base font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Continue
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
