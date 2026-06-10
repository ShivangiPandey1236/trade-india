import React, { useState } from 'react';
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

  const [visibleCount, setVisibleCount] = useState(5);

  const mainProducts = Array(10).fill(null).map((_, i) => ({
    id: i,
    title: i % 2 === 0 ? "Lace Front Wig - Application: Profesional" : "Machine Weft Wavy Hair Application: Profesional",
    priceAmount: i % 2 === 0 ? "15000.00" : "300 USD ($)",
    priceUnit: i % 2 === 0 ? "INR/Piece" : "/Kilograms",
    image: `https://picsum.photos/400/300?random=${301 + i}`,
    superBonanza: i % 2 === 0,
    hasFlag: i % 2 === 0,
    sellerName: i % 2 === 0 ? "Vhs Luxury Ventures" : "Nandalala Enterprises",
    sellerLocation: i % 2 === 0 ? "Kanpur" : "Chennai",
    sellerType: "Business Type: Manufacturer | Distributor",
    established: i % 2 === 0 ? "1975" : "2006",
    years: i % 2 === 0 ? "7 Years" : "18 Years",
    specs: i % 2 === 0 ? [
      { label: "MOQ", value: "1 Piece/Pieces" },
      { label: "Color", value: "Natural Color" },
      { label: "Product Type", value: "Human Hair" },
      { label: "Used By", value: "Women, Girls" },
      { label: "Hair Grade", value: "Remy Hair" },
      { label: "Human Hair Type", value: "Indian" },
      { label: "Length", value: "10-30 Inch (in)" }
    ] : [
      { label: "MOQ", value: "1 Kilograms/Kilograms" },
      { label: "Product Type", value: "Wavy Hair" },
      { label: "Material", value: "Human Hair" },
      { label: "Hair Grade", value: "Remy Hair" }
    ]
  }));

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
          <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">
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

            {mainProducts.slice(0, visibleCount).map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-0 overflow-hidden flex flex-col lg:flex-row relative hover:shadow-md transition-shadow">
                
                {/* Product Image Section */}
                <div className="w-full lg:w-[220px] shrink-0 p-4 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-gray-200">
                  {product.superBonanza && (
                    <div className="absolute top-4 left-0 bg-[#8c8c8c] text-white text-[10px] font-bold pl-2 pr-3 py-1 rounded-r-full flex items-center gap-1.5 shadow-sm uppercase tracking-wide z-10">
                      <svg className="w-4 h-4 text-[#a3cfff]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l8 8-8 12L4 10l8-8zm0 3.5L7.5 10h9L12 5.5z"/></svg>
                      <div className="flex flex-col leading-tight -mt-0.5">
                        <span className="text-[7px] leading-none opacity-90">SUPER</span>
                        <span className="leading-none text-[11px]">BONANZA</span>
                      </div>
                    </div>
                  )}
                  {product.hasFlag && (
                    <div className="absolute top-4 right-4 z-10">
                      <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-[18px] h-[18px] object-cover border border-gray-200 rounded-full shadow-sm" />
                    </div>
                  )}
                  
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className={`w-full max-w-[180px] h-auto object-contain hover:scale-105 transition-transform duration-300 ${product.superBonanza ? 'mt-6' : ''}`}
                  />
                </div>

                {/* Product Info Section */}
                <div className="flex-1 p-4 lg:p-5 min-w-0 flex flex-col">
                  <Link to="#" className="text-[18px] font-medium text-[#1d4ed8] hover:underline leading-snug mb-4">
                    {product.title}
                  </Link>
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-gray-900 leading-tight">Price:</span>
                      <span className="text-[18px] font-extrabold text-gray-900 leading-tight">{product.priceAmount}</span>
                      <span className="text-[14px] font-bold text-gray-900 leading-tight">{product.priceUnit}</span>
                    </div>
                    <Button variant="outline" className="border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 rounded-full px-4 py-1.5 font-semibold text-[13px] h-auto shrink-0">
                      Get Best Quote
                    </Button>
                  </div>

                  {/* Specs Table */}
                  <div className="grid grid-cols-[100px_1fr] gap-y-2 text-[13px]">
                    {product.specs.map((spec, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <div className="text-gray-500">{spec.label}</div>
                        <div className="text-gray-900 break-words">{spec.value}</div>
                      </React.Fragment>
                    ))}
                  </div>

                  <Link to="#" className={`text-[#1d4ed8] text-[13px] hover:underline inline-block pt-4 ${!product.superBonanza ? 'mt-auto' : ''}`}>
                    More details...
                  </Link>
                </div>

                {/* Seller Info Section */}
                <div className="w-full lg:w-[240px] shrink-0 p-4 lg:p-5 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200 bg-[#fcfaf5]">
                  <Link to="#" className="text-[17px] font-medium text-gray-900 hover:text-[#1d4ed8] mb-1 line-clamp-1">
                    {product.sellerName}
                  </Link>
                  <div className="text-[13px] text-gray-500 mb-0.5">{product.sellerLocation}</div>
                  <div className="text-[12px] text-gray-500 mb-0.5 leading-snug break-words">{product.sellerType}</div>
                  <div className="text-[12px] text-gray-500 mb-4">Established In: {product.established}</div>
                  
                  <div className="flex items-start justify-between w-full mb-auto gap-2">
                    <div className="flex flex-col gap-2">
                      {product.superBonanza && (
                        <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                          <svg className="w-4 h-4 shrink-0 text-[#1d4ed8] drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l8 8-8 12L4 10l8-8zm0 3.5L7.5 10h9L12 5.5z"/></svg>
                          <span className="truncate">Super Bonanza</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                        <ShieldCheck className="w-4 h-4 shrink-0 text-green-600 drop-shadow-sm" />
                        <span className="truncate">Trusted Seller</span>
                      </div>
                    </div>
                    <div className="bg-gray-200/80 text-gray-700 text-[11px] font-medium px-2 py-1 rounded shrink-0">
                      {product.years}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 mt-6">
                    <Button variant="outline" className="w-full border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 rounded-lg flex items-center justify-center gap-2 h-[38px] font-semibold bg-white shadow-sm px-2">
                      <Phone className="w-[14px] h-[14px] shrink-0" />
                      <span className="text-[13px] truncate">View Mobile Number</span>
                    </Button>
                    
                    {product.superBonanza && (
                      <Button className="w-full bg-[#2d5c7a] hover:bg-[#234962] text-white rounded-lg flex items-center justify-between px-3 h-[44px] shadow-sm">
                        <div className="flex flex-col items-start leading-tight min-w-0">
                          <span className="font-semibold text-[13px] truncate w-full text-left">Contact Supplier</span>
                          <span className="text-[10px] font-normal text-white/90 truncate w-full text-left">Ask for a Quote</span>
                        </div>
                        <svg className="w-4 h-4 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Button>
                    )}
                  </div>
                </div>

              </div>
            ))}

            {/* Load More Button */}
            {visibleCount < mainProducts.length && (
              <div className="flex justify-center mt-2 mb-4">
                <Button 
                  onClick={() => setVisibleCount(prev => prev + 5)}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-2.5 rounded-full font-medium shadow-sm transition-colors flex items-center gap-2"
                >
                  Load More
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </Button>
              </div>
            )}

          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[300px] flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
            
            {/* Popular Products Widget */}
            <div>
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

            {/* Get Best Sellers Form */}
            <div className="bg-[#fcf0ed] rounded-xl border border-[#e5b3af] p-5 shadow-sm relative overflow-hidden">
              <div className="text-gray-600 text-[15px] font-medium leading-tight mb-1">Get Best Sellers for</div>
              <div className="text-gray-900 text-[18px] font-bold leading-tight mb-4">Human Hair & Accessories</div>
              
              <div className="flex items-center gap-4 mb-5">
                <label className="flex items-center gap-1.5 cursor-pointer text-[13px] text-gray-800 font-medium">
                  <input type="radio" name="intent" className="w-[15px] h-[15px] accent-[#366c8a]" defaultChecked />
                  I want to Buy
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-[13px] text-gray-800 font-medium">
                  <input type="radio" name="intent" className="w-[15px] h-[15px] accent-[#366c8a]" />
                  I want to Sell
                </label>
              </div>

              <div className="space-y-3.5">
                <div className="relative bg-white rounded-md border border-gray-300 px-3 py-1 shadow-sm">
                  <div className="text-[9px] text-gray-500 font-medium leading-none mt-1">Product Name</div>
                  <input type="text" defaultValue="Human Hair & Accessorie" className="w-full text-[13px] font-medium text-gray-900 outline-none pb-1" />
                </div>
                
                <div className="relative bg-white rounded-md border border-gray-300 px-3 py-2.5 shadow-sm">
                  <input type="text" placeholder="Enter Your Name" className="w-full text-[13px] text-gray-900 outline-none placeholder:text-gray-500" />
                </div>

                <div className="flex gap-2.5">
                  <div className="w-[85px] shrink-0 bg-white rounded-md border border-gray-300 px-2 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-4 h-[11px] object-cover" />
                    <span className="text-[12px] font-medium text-gray-700">+91</span>
                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="flex-1 bg-white rounded-md border border-gray-300 px-3 py-2.5 shadow-sm">
                    <input type="tel" placeholder="Enter Mobile Number" className="w-full text-[13px] text-gray-900 outline-none placeholder:text-gray-500" />
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <div className="flex-1 bg-white rounded-md border border-gray-300 px-3 py-2.5 shadow-sm">
                    <input type="text" placeholder="Quantity" className="w-full text-[13px] text-gray-900 outline-none placeholder:text-gray-500" />
                  </div>
                  <div className="w-[110px] shrink-0 bg-white rounded-md border border-gray-300 px-3 py-1 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col leading-tight">
                      <span className="text-[13px] text-gray-900 font-medium">Select</span>
                      <span className="text-[13px] text-gray-900 font-medium">Unit</span>
                    </div>
                    <svg className="w-4 h-4 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                <Button className="w-full mt-2 bg-[#2d5c7a] hover:bg-[#234962] text-white font-medium text-[13px] h-[42px] rounded-md shadow-sm tracking-wide flex items-center justify-center gap-1.5 transition-colors">
                  CONTINUE 
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Button>
              </div>
            </div>

            {/* To List Your Product Widget */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col leading-tight">
                <div className="text-[#ea3a3d] font-black text-[20px] tracking-wide uppercase">TO LIST YOUR</div>
                <div className="text-[#1a3d6d] font-black text-[20px] tracking-wide uppercase">PRODUCT</div>
              </div>
              <div className="flex w-full items-end justify-between">
                <Button className="bg-[#0b5191] hover:bg-[#084072] text-white font-medium text-[14px] h-[36px] px-6 rounded shadow-sm transition-colors">
                  Register Now
                </Button>
                <div className="w-[50px] h-[50px] bg-purple-50 rounded-lg border border-purple-100 flex items-center justify-center shrink-0 shadow-sm relative">
                   <svg className="w-6 h-6 text-purple-600 absolute bottom-2 right-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                   <svg className="w-3 h-3 text-green-500 absolute top-2 right-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
