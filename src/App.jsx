import Header from './components/layout/Header'
import Sidebar from './components/landing/Sidebar'
import HeroBanner from './components/landing/HeroBanner'
import PromoCards from './components/landing/PromoCards'
import ValueAdds from './components/landing/ValueAdds'
import BestSellers from './components/landing/BestSellers'
import TrendingCategories from './components/landing/TrendingCategories'
import ApparelFashion from './components/landing/ApparelFashion'
import PostBuyRequirement from './components/landing/PostBuyRequirement'
import SellersByCities from './components/landing/SellersByCities'
import RecentBlogs from './components/landing/RecentBlogs'
import Testimonials from './components/landing/Testimonials'
import FloatingChat from './components/landing/FloatingChat'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      {/* Main Landing Area */}
      <main className="flex-1 p-4 w-full">
        <div className="flex flex-col lg:flex-row gap-4 w-full items-stretch">
          {/* Sidebar Left Column */}
          <div className="w-full lg:w-[250px] shrink-0 order-3 lg:order-1">
            <Sidebar />
          </div>

          {/* Right Main Content Area (To the right of the sidebar) */}
          <div className="flex-1 min-w-0 flex flex-col gap-4 order-1 lg:order-2">
            {/* Top Row: Hero Banner + Promo Cards side-by-side */}
            <div className="flex flex-col sm:flex-row gap-4 w-full items-stretch">
              {/* Hero Banner Column */}
              <div className="flex-1 min-w-0">
                <HeroBanner />
              </div>

              {/* Promo Cards Column */}
              <div className="w-full sm:w-[270px] shrink-0">
                <PromoCards />
              </div>
            </div>

            {/* Bottom Row: Value Adds (Placed to the right of sidebar, directly below Hero + Promos) */}
            <div className="w-full">
              <ValueAdds />
            </div>
          </div>
        </div>
      </main>

      {/* Best Sellers Section */}
      <div className="w-full p-4 ">
        <BestSellers />
      </div>
      {/* Trending Categories */}
      <div className="w-full p-4 ">
        <TrendingCategories />
      </div>
      
      {/* Apparel & Fashion Section */}
      <div className="w-full p-4 pt-0">
        <ApparelFashion />
      </div>

      {/* Post Buy Requirement Section */}
      <div className="w-full p-4 pt-0">
        <PostBuyRequirement />
      </div>

      {/* Sellers by Cities Section */}
      <div className="w-full p-4 pt-0">
        <SellersByCities />
      </div>

      {/* Recent Blogs Section */}
      <div className="w-full p-4 pt-0">
        <RecentBlogs />
      </div>

      {/* Testimonials Section */}
      <div className="w-full p-4 pt-0">
        <Testimonials />
      </div>

      {/* Footer Element */}
      <Footer />

      {/* Support Chat Badge */}
      <FloatingChat />
    </div>
  )
}

export default App
