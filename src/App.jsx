import Header from './components/layout/Header'
import Sidebar from './components/landing/Sidebar'
import HeroBanner from './components/landing/HeroBanner'
import PromoCards from './components/landing/PromoCards'
import ValueAdds from './components/landing/ValueAdds'
import FloatingChat from './components/landing/FloatingChat'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      {/* Main Landing Area */}
      <main className="flex-1 container mx-auto px-4 py-6 max-w-7xl">
        {/* Top Section: Sidebar + Hero + Promos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Sidebar Left Column */}
          <div className="md:col-span-4 lg:col-span-3 h-full">
            <Sidebar />
          </div>

          {/* Hero Banner Center Column */}
          <div className="md:col-span-8 lg:col-span-6 h-full">
            <HeroBanner />
          </div>

          {/* Promo CTAs Right Column */}
          <div className="md:col-span-12 lg:col-span-3 h-full">
            <PromoCards />
          </div>
        </div>

        {/* Bottom Section: Value Adds */}
        <div className="mt-2">
          <ValueAdds />
        </div>
      </main>

      {/* Support Chat Badge */}
      <FloatingChat />
    </div>
  )
}

export default App
