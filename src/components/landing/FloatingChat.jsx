import { MessageSquareText } from "lucide-react"

export default function FloatingChat() {
  return (
    <button 
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[linear-gradient(135deg,#0A34C9_0%,#0E63F3_30%,#4F8EFF_45%,#FF9A2F_65%,#FF8500_85%,#FF7300_100%)] hover:opacity-90 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group z-50 animate-bounce-subtle"
      aria-label="Contact Support"
    >
      <MessageSquareText className="w-6 h-6 transform group-hover:rotate-6 transition-transform duration-300" />
      
      {/* Decorative tooltip */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm pointer-events-none whitespace-nowrap">
        Need Help? Chat Support
      </span>
    </button>
  )
}
