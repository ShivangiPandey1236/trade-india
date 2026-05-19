import './App.css'
import Header from './components/layout/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Main Content Placeholder */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">hello Shivangi, welcome to Trade-India platform</h2>
          <p className="text-gray-600">The Header component above is built with shadcn/ui and matches your design.</p>
        </div>
      </main>
    </div>
  )
}

export default App
