import { X } from "lucide-react"
import pbrBanner from "../../assets/pbr-utpaad.png"
import RequirementForm from "./RequirementForm"

export default function PostBuyReqModal({ isOpen, onClose }) {
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
              <span className="bg-gradient-to-r from-[#004de6] from-[40%] to-[#ff8000] to-[55%] text-transparent bg-clip-text">Utpaad</span>
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

          <RequirementForm buttonText="Continue" onSubmitSuccess={onClose} />
        </div>
      </div>
    </div>
  )
}
