import RequirementForm from "../shared/RequirementForm"
import pbrBanner from "../../assets/pbr-utpaad.png"

export default function PostBuyRequirement() {
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
            <span className="bg-gradient-to-r from-[#004de6] from-[40%] to-[#ff8000] to-[55%] text-transparent bg-clip-text">Utpaad</span>
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

        <RequirementForm buttonText="Continue" />
      </div>
    </section>
  )
}
