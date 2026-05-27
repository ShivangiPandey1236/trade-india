import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingChat from './components/landing/FloatingChat'
import { ExitFormProvider } from './context/ExitFormContext'

import Home from './pages/Home'
import Products from './pages/Products'
import CategoryProducts from './pages/CategoryProducts'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <ExitFormProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <Header />

        <div className="flex-1 w-full max-w-[1920px] mx-auto flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categoryId" element={<CategoryProducts />} />
            <Route path="/products/:categoryId/:productId" element={<ProductDetails />} />
          </Routes>
        </div>

        {/* Footer Element */}
        <Footer />

        {/* Support Chat Badge */}
        <FloatingChat />
      </div>
      </Router>
    </ExitFormProvider>
  )
}

export default App
