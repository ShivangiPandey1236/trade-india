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
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-0 overflow-hidden flex flex-col lg:flex-row relative hover:shadow-md transition-shadow">
              
              {/* Product Image Section */}
              <div className="w-full lg:w-[220px] shrink-0 p-4 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-gray-200">
                {/* Super Bonanza Badge */}
                <div className="absolute top-4 left-0 bg-[#8c8c8c] text-white text-[10px] font-bold pl-2 pr-3 py-1 rounded-r-full flex items-center gap-1.5 shadow-sm uppercase tracking-wide z-10">
                  <svg className="w-4 h-4 text-[#a3cfff]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l8 8-8 12L4 10l8-8zm0 3.5L7.5 10h9L12 5.5z"/></svg>
                  <div className="flex flex-col leading-tight -mt-0.5">
                    <span className="text-[7px] leading-none opacity-90">SUPER</span>
                    <span className="leading-none text-[11px]">BONANZA</span>
                  </div>
                </div>
                {/* Flag Icon */}
                <div className="absolute top-4 right-4 z-10">
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-[18px] h-[18px] object-cover border border-gray-200 rounded-full shadow-sm" />
                </div>
                
                <img 
                  src="https://picsum.photos/400/300?random=301" 
                  alt="Lace Front Wig" 
                  className="w-full max-w-[180px] h-auto object-contain hover:scale-105 transition-transform duration-300 mt-6"
                />
              </div>

              {/* Product Info Section */}
              <div className="flex-1 p-4 lg:p-5 min-w-0 flex flex-col">
                <Link to="#" className="text-[18px] font-medium text-[#1d4ed8] hover:underline leading-snug mb-4">
                  Lace Front Wig - Application: Profesional
                </Link>
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-gray-900 leading-tight">Price:</span>
                    <span className="text-[18px] font-extrabold text-gray-900 leading-tight">15000.00</span>
                    <span className="text-[14px] font-bold text-gray-900 leading-tight">INR/Piece</span>
                  </div>
                  <Button variant="outline" className="border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 rounded-full px-4 py-1.5 font-semibold text-[13px] h-auto shrink-0">
                    Get Best Quote
                  </Button>
                </div>

                {/* Specs Table */}
                <div className="grid grid-cols-[100px_1fr] gap-y-2 text-[13px]">
                  <div className="text-gray-500">MOQ</div>
                  <div className="text-gray-900 break-words">1 Piece/Pieces</div>
                  
                  <div className="text-gray-500">Color</div>
                  <div className="text-gray-900 break-words">Natural Color</div>
                  
                  <div className="text-gray-500">Product Type</div>
                  <div className="text-gray-900 break-words">Human Hair</div>
                  
                  <div className="text-gray-500">Used By</div>
                  <div className="text-gray-900 break-words">Women, Girls</div>
                  
                  <div className="text-gray-500">Hair Grade</div>
                  <div className="text-gray-900 break-words">Remy Hair</div>
                  
                  <div className="text-gray-500">Human Hair Type</div>
                  <div className="text-gray-900 break-words">Indian</div>

                  <div className="text-gray-500">Length</div>
                  <div className="text-gray-900 break-words">10-30 Inch (in)</div>
                </div>

                <Link to="#" className="text-[#1d4ed8] text-[13px] hover:underline mt-4 inline-block">
                  More details...
                </Link>
              </div>

              {/* Seller Info Section */}
              <div className="w-full lg:w-[240px] shrink-0 p-4 lg:p-5 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200 bg-[#fcfaf5]">
                <Link to="#" className="text-[17px] font-medium text-gray-900 hover:text-[#1d4ed8] mb-1 line-clamp-1">
                  Vhs Luxury Ventures
                </Link>
                <div className="text-[13px] text-gray-500 mb-0.5">Kanpur</div>
                <div className="text-[12px] text-gray-500 mb-0.5 leading-snug break-words">Business Type: Manufacturer | Distributor</div>
                <div className="text-[12px] text-gray-500 mb-4">Established In: 1975</div>
                
                <div className="flex items-start justify-between w-full mb-auto gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                      <svg className="w-4 h-4 shrink-0 text-[#1d4ed8] drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l8 8-8 12L4 10l8-8zm0 3.5L7.5 10h9L12 5.5z"/></svg>
                      <span className="truncate">Super Bonanza</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-green-600 drop-shadow-sm" />
                      <span className="truncate">Trusted Seller</span>
                    </div>
                  </div>
                  <div className="bg-gray-200/80 text-gray-700 text-[11px] font-medium px-2 py-1 rounded shrink-0">
                    7 Years
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 mt-6">
                  <Button variant="outline" className="w-full border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 rounded-lg flex items-center justify-center gap-2 h-[38px] font-semibold bg-white shadow-sm px-2">
                    <Phone className="w-[14px] h-[14px] shrink-0" />
                    <span className="text-[13px] truncate">View Mobile Number</span>
                  </Button>
                  
                  <Button className="w-full bg-[#2d5c7a] hover:bg-[#234962] text-white rounded-lg flex items-center justify-between px-3 h-[44px] shadow-sm">
                    <div className="flex flex-col items-start leading-tight min-w-0">
                      <span className="font-semibold text-[13px] truncate w-full text-left">Contact Supplier</span>
                      <span className="text-[10px] font-normal text-white/90 truncate w-full text-left">Ask for a Quote</span>
                    </div>
                    <svg className="w-4 h-4 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Button>
                </div>
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
