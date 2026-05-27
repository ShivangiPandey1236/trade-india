import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function RequirementForm({ buttonText = "Submit", onSubmitSuccess }) {
  const [loanInterest, setLoanInterest] = useState(null)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Submitted:", data);
    alert(JSON.stringify(data, null, 2));
    if (onSubmitSuccess) onSubmitSuccess(data);
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleFormSubmit}>
      {/* Product Input */}
      <div>
        <input 
          type="text" 
          name="product"
          placeholder="Enter the product you are looking for..." 
          className="w-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all shadow-sm"
          required
        />
      </div>

      {/* Email Input */}
      <div>
        <input 
          type="email" 
          name="email"
          placeholder="Enter your Email ID" 
          className="w-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all shadow-sm"
          required
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
            name="mobile"
            placeholder="Enter Mobile Number" 
            className="w-full h-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all shadow-sm"
            required
          />
        </div>
      </div>

      {/* Quantity and Unit Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input 
            type="text" 
            name="quantity"
            placeholder="Quantity" 
            className="w-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder:text-gray-400 transition-all shadow-sm"
            required
          />
        </div>
        <div className="flex-1 relative">
          <select 
            name="unit"
            className="w-full h-full p-3 sm:p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-700 transition-all shadow-sm appearance-none"
            defaultValue=""
            required
          >
            <option value="" disabled>Select Unit</option>
            <option value="Piece">Piece</option>
            <option value="Kg">Kilogram</option>
            <option value="Ton">Ton</option>
            <option value="Meter">Meter</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
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
              value="yes"
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
              value="no"
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
          type="submit"
          className="bg-[linear-gradient(135deg,#0A34C9_0%,#0E63F3_30%,#4F8EFF_45%,#FF9A2F_65%,#FF8500_85%,#FF7300_100%)] hover:opacity-90 border-0 text-white text-sm sm:text-base font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </form>
  )
}
