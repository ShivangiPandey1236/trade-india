import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingChat from './components/landing/FloatingChat'

import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />

        <div className="flex-1 w-full max-w-[1920px] mx-auto flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>

        {/* Footer Element */}
        <Footer />

        {/* Support Chat Badge */}
        <FloatingChat />
      </div>
    </Router>
  )
}

export default App
