import Header from './components/layout/Header'
import Sidebar from './components/landing/Sidebar'
import HeroBanner from './components/landing/HeroBanner'
import PromoCards from './components/landing/PromoCards'
import ValueAdds from './components/landing/ValueAdds'
import FloatingChat from './components/landing/FloatingChat'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      {/* Main Landing Area */}
      <main className="flex-1 container mx-auto px-4 py-6 max-w-7xl">
        {/* Top Section: Sidebar + Hero + Promos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Sidebar Left Column */}
          <div className="md:col-span-4 lg:col-span-3 h-full order-3 md:order-1 lg:order-1">
            <Sidebar />
          </div>

          {/* Hero Banner Center Column */}
          <div className="md:col-span-8 lg:col-span-6 h-full order-1 md:order-2 lg:order-2">
            <HeroBanner />
          </div>

          {/* Promo CTAs Right Column */}
          <div className="md:col-span-12 lg:col-span-3 h-full order-2 md:order-3 lg:order-3">
            <PromoCards />
          </div>
        </div>

        {/* Bottom Section: Value Adds */}
        <div className="mt-2">
          <ValueAdds />
        </div>
      </main>

      {/* Footer Element */}
      <Footer />

      {/* Support Chat Badge */}
      <FloatingChat />
    </div>
  )
}

export default App
