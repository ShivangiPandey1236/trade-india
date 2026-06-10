import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  SlidersHorizontal, 
  Search, 
  MapPin, 
  ShieldCheck, 
  Award,
  Phone
} from 'lucide-react';

export default function SubcategoryProducts() {
  const { subcategoryName } = useParams();

  // Create a readable title from the URL slug
  const title = subcategoryName
    ? subcategoryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Packaging Machine';

  const cities = ['All India', 'Mumbai', 'Hyderabad', 'Delhi', 'Pune', 'Chennai', 'Kolkata', 'Bengaluru', 'Jaipur', 'Ahmedabad', 'Faridabad'];
  
  const relatedCategories = [
    'Soap Packaging Machines',
    'Horizontal Packaging Machine',
    'Seed Packaging Machine',
    'Bottle Packaging Machines',
    'Shampoo Packaging Machine',
    'Food Packaging Machines',
    'Skin Packaging Machine'
  ];

  const popularProducts = [
    {
      title: "Litchi Juice Packing Machine",
      price: "60000 INR",
      seller: "Panda Machines Pvt Ltd",
      image: "https://picsum.photos/100/100?random=101"
    },
    {
      title: "Pneumatic Blister Packaging Machine - Application: Scrubber Packing",
      price: "48500.0 INR",
      seller: "Purusharth Packaging",
      image: "https://picsum.photos/100/100?random=102"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-12 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 pt-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-[13px] text-gray-500 gap-1.5 mb-2">
          <Link to="/" className="hover:text-primary">Tradeindia</Link>
          <span>&gt;</span>
          <span className="hover:text-primary cursor-pointer">Seller</span>
          <span>&gt;</span>
          <span className="hover:text-primary cursor-pointer">Machinery</span>
          <span>&gt;</span>
          <span className="text-gray-900 font-medium">{title}</span>
        </div>

        {/* Page Heading */}
        <div className="flex items-baseline gap-3 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <span className="text-sm text-gray-500">(10486 products)</span>
        </div>

        {/* Search and Cities Bar */}
        <div className="bg-white rounded-lg p-2 flex items-center shadow-sm mb-6 overflow-x-auto border border-gray-100">
          <div className="flex items-center">
            <button className="px-4 py-2 hover:bg-gray-50 rounded-md border border-gray-200 mr-2 shrink-0">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            <div className="relative flex-1 min-w-[250px] mr-4 shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Please Enter Your City Name"
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary/50"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 px-4 shrink-0 whitespace-nowrap overflow-x-auto no-scrollbar text-sm">
            {cities.map((city, idx) => (
              <span 
                key={idx} 
                className={`cursor-pointer transition-colors ${idx === 0 ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-primary'}`}
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Main 3-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Left Sidebar (Filters) */}
          <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-4">
            {/* Related Categories */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Related Categories</h3>
              </div>
              <ul className="flex flex-col text-[13px] text-gray-600">
                {relatedCategories.map((cat, idx) => (
                  <li key={idx} className="border-b border-gray-50 last:border-0">
                    <Link to="#" className="block px-5 py-3 hover:text-primary hover:bg-gray-50 transition-colors">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-5 py-4 flex items-center gap-2 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Filters</h3>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap text-[12px] text-gray-500 gap-1 leading-relaxed">
                  <Link to="/" className="hover:text-primary">Tradeindia</Link> &gt; 
                  <span className="hover:text-primary cursor-pointer">Seller</span> &gt; 
                  <span className="hover:text-primary cursor-pointer">Machinery</span> &gt; 
                  <span className="text-gray-900">{title}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Content (Products) */}
          <div className="flex-1 w-full min-w-0 flex flex-col gap-4">
            {/* Small Top Card */}
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center gap-4 w-fit pr-12 cursor-pointer hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/60/60?random=200" alt="Viscous Filling Machine" className="w-[60px] h-[60px] object-cover rounded-md border border-gray-100" />
              <span className="text-sm font-medium text-gray-800">Automatic Viscous Filling Machine</span>
            </div>

            {/* Main Product Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-0 overflow-hidden flex flex-col md:flex-row relative hover:shadow-md transition-shadow">
              
              {/* Product Image Section */}
              <div className="w-full md:w-[320px] shrink-0 p-6 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-gray-100">
                {/* Industry Leader Badge */}
                <div className="absolute top-4 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-r-md shadow-sm z-10 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  Industry Leader
                </div>
                {/* Flag Icon */}
                <div className="absolute top-4 right-4">
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-6 h-4 object-cover border border-gray-200 rounded-sm" />
                </div>
                
                <img 
                  src="https://picsum.photos/400/300?random=300" 
                  alt="Packing Machine" 
                  className="w-full max-w-[250px] h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info Section */}
              <div className="flex-1 p-6 flex flex-col">
                <Link to="#" className="text-lg font-medium text-primary hover:underline leading-tight mb-4">
                  Packing Machine - Metal, 750-1000 Packs/Min, Silver | Automatic Operation, PLC...
                </Link>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xl font-bold text-gray-900">500000 INR/</span>
                    <span className="text-lg font-bold text-gray-900">Unit</span>
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full px-6 font-semibold h-9">
                    Get Best Quote
                  </Button>
                </div>

                {/* Specs Table */}
                <div className="grid grid-cols-[120px_1fr] gap-y-2.5 text-[13px]">
                  <div className="text-gray-500">MOQ</div>
                  <div className="text-gray-900 font-medium">1 Unit/Units</div>
                  
                  <div className="text-gray-500">Color</div>
                  <div className="text-gray-900 font-medium">Silver</div>
                  
                  <div className="text-gray-500">Usage</div>
                  <div className="text-gray-900 font-medium">Industrial</div>
                  
                  <div className="text-gray-500">Type</div>
                  <div className="text-gray-900 font-medium">Packaging Line</div>
                  
                  <div className="text-gray-500">Material</div>
                  <div className="text-gray-900 font-medium">Metal</div>
                  
                  <div className="text-gray-500">Feature</div>
                  <div className="text-gray-900 font-medium">Highly Efficient</div>
                </div>
              </div>

              {/* Seller Info Section */}
              <div className="w-full md:w-[260px] shrink-0 bg-orange-50/30 p-6 flex flex-col border-t md:border-t-0 md:border-l border-gray-100">
                <Link to="#" className="text-[15px] font-semibold text-gray-900 hover:text-primary mb-1">
                  3teck Engineering
                </Link>
                <div className="text-[13px] text-gray-500 mb-4">Thane</div>
                
                <div className="space-y-2 mb-auto">
                  <div className="flex items-center gap-2 text-[13px] text-gray-700">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    Trusted Seller
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-gray-700">
                    <Award className="w-4 h-4 text-blue-500" />
                    Super Seller
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 border-primary text-primary hover:bg-primary/5 rounded-md flex items-center justify-center gap-2 h-10 font-semibold bg-white">
                  <Phone className="w-4 h-4" />
                  View Mobile Number
                </Button>
              </div>

            </div>
          </div>

          {/* Right Sidebar (Popular Products) */}
          <div className="w-full lg:w-[300px] flex-shrink-0 flex flex-col">
            <h3 className="text-[17px] font-bold text-gray-800 mb-4">Popular {title}</h3>
            
            <div className="flex flex-col gap-4">
              {popularProducts.map((product, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex gap-4 hover:shadow-md transition-shadow group">
                  <div className="w-[80px] h-[80px] shrink-0 bg-gray-50 rounded-md p-1 border border-gray-100 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <Link to="#" className="text-[13px] text-primary hover:underline font-medium line-clamp-2 leading-snug mb-1">
                      {product.title}
                    </Link>
                    <div className="text-[14px] font-bold text-gray-900 mb-1">{product.price}</div>
                    <div className="text-[11px] text-gray-500 mb-2 truncate">{product.seller}</div>
                    <Button className="w-full h-8 mt-auto rounded-md bg-[#3a6889] hover:bg-[#2c5370] text-white text-[13px] font-medium">
                      Buy Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
