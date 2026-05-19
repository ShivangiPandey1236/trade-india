export default function HeroBanner() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-800 relative group aspect-[16/9]">
      <img 
        src="/hero-banner.png" 
        alt="SME Excellence Awards Gujarati Edition - tradeindia" 
        className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
      />
      {/* Decorative overlays for high fidelity feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-xl" />
    </div>
  )
}
