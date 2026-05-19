import { MessageSquareText } from "lucide-react"

export default function FloatingChat() {
  return (
    <button 
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group z-50 animate-bounce-subtle"
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
