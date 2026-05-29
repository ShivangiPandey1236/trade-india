import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { categories } from '../data/productsData';
import { CheckCircle2, MapPin, User, Building, Flag, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetails = () => {
  const { categoryId, productId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  const product = category?.products.find(p => p.id === productId);

  if (!category || !product) {
    return <Navigate to="/products" replace />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedImage, setSelectedImage] = useState(product.image);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [quantity, setQuantity] = useState(product.minPackSize || 1);

  const demoRelatedProducts = [
    { id: 'rp-1', name: 'Ax 130 Backhoe Loaders - Color: Yellow', price: '2300000', currency: 'INR', minPackSize: '1', unit: 'Unit/Units', image: 'https://picsum.photos/400/300?random=201', seller: { companyName: 'Action Construction Equipment Ltd.', location: 'Faridabad, Haryana' } },
    { id: 'rp-2', name: 'Backhoe Loader Bucket - Automatic Grade: Manual', price: '120000.0', currency: 'INR', minPackSize: '1', unit: 'Unit/Units', image: 'https://picsum.photos/400/300?random=202', seller: { companyName: 'W G Enterprises Private Limited', location: 'Faridabad, Haryana' } },
    { id: 'rp-3', name: 'Excavator Backhoe Loader Bushs - Color: Silver', price: null, minPackSize: '100', unit: 'Piece/Pieces', image: 'https://picsum.photos/400/300?random=203', seller: { companyName: 'Das Fabricators', location: 'Faridabad, Haryana' } },
    { id: 'rp-4', name: 'Cat424B Backhoe Loaders Spare Parts - Black Finish,...', price: null, minPackSize: '10', unit: 'Unit/Units', image: 'https://picsum.photos/400/300?random=204', seller: { companyName: 'Rk Trading', location: 'Faridabad, Haryana' } },
    { id: 'rp-5', name: 'Mini Backhoe Loader - 1400 Kg Weight, Red & Yellow...', price: '550000', currency: 'INR', minPackSize: '5', unit: 'Unit/Units', image: 'https://picsum.photos/400/300?random=205', seller: { companyName: 'Sai Hydraulics And Earthmovers...', location: 'Faridabad, Haryana' } },
    { id: 'rp-6', name: 'Jcb Seat Cover - Color: Black', price: '490.0', currency: 'INR', minPackSize: '25', unit: 'Set/Sets', image: 'https://picsum.photos/400/300?random=206', seller: { companyName: 'R. V. Enterprises', location: 'Faridabad, Haryana' } },
    { id: 'rp-7', name: 'Engine Fuel Pipe Backhoe Loader 3CX/4CX/3DX...', price: '328.00', currency: 'INR', minPackSize: '50', unit: 'Piece/Pieces', image: 'https://picsum.photos/400/300?random=207', seller: { companyName: 'Durga Engineers', location: 'Faridabad, Haryana' } },
    { id: 'rp-8', name: 'High Dump Backhoe Loader Warranty: Standard', price: null, minPackSize: null, image: 'https://picsum.photos/400/300?random=208', seller: { companyName: 'Sec-rjmt Engineering Pvt. Ltd.', location: 'Faridabad, Haryana' } },
    { id: 'rp-9', name: 'Heavy Duty Tractor Attachment Backhoe Loaders', price: null, minPackSize: null, image: 'https://picsum.photos/400/300?random=209', seller: { companyName: 'Ab Excavators & Earthmovers P...', location: 'Faridabad, Haryana' } },
    { id: 'rp-10', name: 'JCB Backhoe Loader Bucket Bush - Polished Mild Steel,...', price: '80', currency: 'INR', minPackSize: '350', unit: 'Piece/Pieces', image: 'https://picsum.photos/400/300?random=210', seller: { companyName: 'R N Industries', location: 'Faridabad, Haryana' } }
  ];

  const exploreCategories = [
    { name: 'Tractor Loader Backhoe', image: 'https://picsum.photos/100/100?random=301' },
    { name: 'Backhoe Excavator', image: 'https://picsum.photos/100/100?random=302' },
    { name: 'Truck Loader', image: 'https://picsum.photos/100/100?random=303' },
    { name: 'Backhoe Attachments', image: 'https://picsum.photos/100/100?random=304' },
    { name: 'Shovel Loader', image: 'https://picsum.photos/100/100?random=305' },
    { name: 'Skip Loader', image: 'https://picsum.photos/100/100?random=306' },
    { name: 'Backhoe Bucket', image: 'https://picsum.photos/100/100?random=307' },
    { name: 'Mine Loader', image: 'https://picsum.photos/100/100?random=308' },
    { name: 'Mini Loader', image: 'https://picsum.photos/100/100?random=309' },
    { name: 'Wheel Loaders', image: 'https://picsum.photos/100/100?random=310' },
    { name: 'Mini Front End Loader', image: 'https://picsum.photos/100/100?random=311' },
    { name: 'Front End Loader', image: 'https://picsum.photos/100/100?random=312' }
  ];

  const moreProductsFromSeller = [
    { id: 'mps-1', name: 'Concrete Placing Boom...', image: 'https://picsum.photos/400/300?random=401' },
    { id: 'mps-2', name: 'Tm 300 Truck Mounted Cran...', image: 'https://picsum.photos/400/300?random=402' },
    { id: 'mps-3', name: 'Af40D-50D Forklifts - Col...', image: 'https://picsum.photos/400/300?random=403' },
    { id: 'mps-4', name: 'Af 40D Forklift - Color: Yellow...', image: 'https://picsum.photos/400/300?random=404' },
    { id: 'mps-5', name: 'Add 95 Vibratory Roll...', image: 'https://picsum.photos/400/300?random=405' },
    { id: 'mps-6', name: 'Tm 250 C Truck Mounted Cran...', image: 'https://picsum.photos/400/300?random=406' },
    { id: 'mps-7', name: 'ACX 750 Crawler Cran...', image: 'https://picsum.photos/400/300?random=407' },
    { id: 'mps-8', name: 'Add 34 Vibratory Roll...', image: 'https://picsum.photos/400/300?random=408' },
    { id: 'mps-9', name: 'Sb 123 Lorry Loader Crane...', image: 'https://picsum.photos/400/300?random=409' },
    { id: 'mps-10', name: 'Ab 813 Lorry Loader Crane...', image: 'https://picsum.photos/400/300?random=410' }
  ];

  const recommendedProducts = [
    { id: 'rec-1', name: 'Backhoe Loader - 0.7 cu.m Bucket Capacit...', image: 'https://picsum.photos/400/300?random=501', company: 'Sec-rjmt Engineering P...' },
    { id: 'rec-2', name: 'Backhoe Loader - 1.0 Cu.m. Loader...', image: 'https://picsum.photos/400/300?random=502', company: 'Action Construction...' },
    { id: 'rec-3', name: 'Low Fuel Consumption And...', image: 'https://picsum.photos/400/300?random=503', company: 'Jcb India Limited' },
    { id: 'rec-4', name: '4dx Backhoe Loader', image: 'https://picsum.photos/400/300?random=504', company: 'Jcb India Limited' },
    { id: 'rec-5', name: 'Backhoe Loaders - Compact Frame...', image: 'https://picsum.photos/400/300?random=505', company: 'Gmmco Ltd.' },
    { id: 'rec-6', name: 'Backhoe Loader - Premium Quality...', image: 'https://picsum.photos/400/300?random=506', company: 'Sec-rjmt Engineering P...' },
    { id: 'rec-7', name: 'Backhoe Loaders - 80 LPM Pump, Max...', image: 'https://picsum.photos/400/300?random=507', company: 'Sec-rjmt Engineering P...' },
    { id: 'rec-8', name: 'Ax 124 - 4 Wd Backhoe Loader -...', image: 'https://picsum.photos/400/300?random=508', company: 'Action Construction...' }
  ];

  const popularCategories = [
    "Human Hair", "Forklift Trucks", "Servo Voltage Stabilizer", "Basmati Rice", "Backhoe Loader", "Carry Bag Making Machine", "Drum Lifter", "Electric Stacker", "Scissor Lifts",
    "Industrial Vibrating Screen", "Rotameter", "Flowmeter", "Rotary Air Compressor", "Industrial Eto Sterilizer", "Rice Packaging Machines", "Shredding Machine", "Hammer Mill",
    "Automatic Labelling Machine", "Diesel Forklift", "Aerial Work Platform", "Storage Rack System", "Epoxy Resin", "Mild Steel Bar", "Stainless Steel Sheets", "Stainless Steel Strips",
    "Bag Filling Machines", "Asphalt Plants", "Slat Conveyor", "Ointment Plant", "Planetary Mixers", "Ladies Kurtis", "Led Lights", "Cctv Camera", "Ball Valve",
    "Anti Cancer Medicine", "Air Compressor", "Incense Sticks", "Solar Lights", "Goods Lifts", "Vitrified Tiles", "Stainless Steel Coils", "Pvc Pipes", "Pvc Pipe Fittings", "Upvc Pipes",
    "Upvc Ball Valve", "Pipe Elbows"
  ];

  return (
    <div className="flex-1 p-4 md:p-8 w-full max-w-[1400px] mx-auto animate-fade-in-up">
      {/* Breadcrumbs */}
      <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-primary transition-colors">TradeIndia</Link>
        <span>&gt;</span>
        <Link to={`/products/${category.id}`} className="hover:text-primary transition-colors">{category.name}</Link>
        <span>&gt;</span>
        <span className="text-foreground">{product.name.split(' ').slice(0, 3).join(' ')}...</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT AND MIDDLE AREA WRAPPER */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
            {/* LEFT COLUMN: Images */}
            <div className="col-span-12 lg:col-span-4 flex flex-col">
          <div className="border border-border p-4 bg-white flex items-center justify-center mb-4 min-h-[400px] relative group">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="max-w-full h-auto object-contain max-h-[500px]"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
          </div>
          
          {product.thumbnails && product.thumbnails.length > 0 && (
            <div className="flex items-center gap-2 relative">
              <button className="p-1 border border-border bg-white hover:bg-muted z-10">
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <div className="flex-1 flex gap-2 overflow-hidden px-1">
                {product.thumbnails.map((thumb, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(thumb)}
                    className={`flex-shrink-0 border-2 transition-all ${selectedImage === thumb ? 'border-primary' : 'border-transparent hover:border-border'}`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx}`} className="w-16 h-16 object-cover bg-white" />
                  </button>
                ))}
              </div>
              <button className="p-1 border border-border bg-white hover:bg-muted z-10">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          )}
        </div>

        {/* MIDDLE COLUMN: Details */}
        <div className="col-span-12 lg:col-span-5 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            {product.name}
          </h1>

          <div className="border-t border-b border-border py-5 mb-6">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <div className="text-xl">
                <span className="font-bold">Price: {product.price} {product.currency}</span>
                <span className="text-sm text-muted-foreground ml-1">/ {product.unit}</span>
              </div>
              <Button variant="outline" className="rounded-full text-primary border-primary hover:bg-primary/10 ml-auto h-8 px-4 text-sm font-medium">
                Get Latest Price
              </Button>
            </div>
            <div className="text-sm text-muted-foreground mb-1">
              ({product.price} {product.currency} + {product.gst} GST)
            </div>
            <div className="text-sm font-medium text-muted-foreground mb-3">
              Minimum Pack Size : {product.minPackSize}
            </div>
            {product.inStock && (
              <div className="text-green-600 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 fill-green-600 text-white" /> In Stock
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center border border-border rounded-md bg-white">
              <button 
                className="px-4 py-2 hover:bg-muted text-foreground transition-colors"
                onClick={() => setQuantity(q => Math.max(product.minPackSize || 1, q - 1))}
              >
                -
              </button>
              <div className="px-4 border-l border-r border-border py-2 min-w-[3rem] text-center font-medium">
                {quantity}
              </div>
              <button 
                className="px-4 py-2 hover:bg-muted text-foreground transition-colors"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 flex-1 h-11 font-semibold tracking-wide">
              BUY NOW
            </Button>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex-1 h-11 font-semibold tracking-wide shadow-md">
              Send Inquiry
            </Button>
          </div>

          {product.specifications && (
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-4 text-foreground">Product Specifications</h3>
              <div className="border border-border rounded-sm overflow-hidden">
                <table className="w-full text-left border-collapse text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr key={key} className={idx !== Object.entries(product.specifications).length - 1 ? "border-b border-border" : ""}>
                        <td className="p-3 bg-muted/30 font-medium w-1/3 border-r border-border text-foreground">{key}</td>
                        <td className="p-3 text-muted-foreground bg-white">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mb-4">
            <h2 className="text-[22px] font-bold text-primary mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {demoRelatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="border border-[#cbd5e1] rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col bg-white overflow-hidden">
                  <CardContent className="p-4 flex flex-col h-full gap-2">
                    <div className="h-[140px] flex items-center justify-center mb-2">
                      <img src={relatedProduct.image} alt={relatedProduct.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    
                    <h3 className="text-[#3b3db9] text-[15px] font-medium leading-[1.3] line-clamp-2 min-h-[39px]">
                      {relatedProduct.name}
                    </h3>
                    
                    {relatedProduct.price ? (
                      <div className="text-[14px]">
                        <span className="font-bold text-foreground">Price: {relatedProduct.price} {relatedProduct.currency}</span>
                      </div>
                    ) : (
                      <div className="h-[21px]"></div>
                    )}
                    
                    {relatedProduct.minPackSize && (
                      <div className="text-[13px] text-[#64748b]">
                        MOQ - {relatedProduct.minPackSize} {relatedProduct.unit}
                      </div>
                    )}
                    
                    {relatedProduct.seller && (
                      <div className="mt-auto pt-1 flex flex-col gap-1.5">
                        <div className="text-[13px] text-[#64748b] line-clamp-1">
                          {relatedProduct.seller.companyName}
                        </div>
                        <div className="flex items-start gap-1.5 text-[13px] text-[#64748b] mb-3">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="line-clamp-1">{relatedProduct.seller.location}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-auto">
                      <Button className="w-full rounded-lg bg-[#336b92] hover:bg-[#275a89] text-white h-10 text-[14px] font-medium shadow-sm">
                        Send Inquiry
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Explore Related Categories Section */}
          <div className="mb-4 mt-4">
            <h2 className="text-[22px] font-bold text-primary mb-6">Explore Related Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {exploreCategories.map((cat, index) => (
                <div key={index} className="flex items-center gap-4 p-3 border border-[#cbd5e1] rounded-xl bg-white hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-[60px] h-[60px] flex-shrink-0 rounded-lg flex items-center justify-center p-1 border border-[#e2e8f0]">
                    <img src={cat.image} alt={cat.name} className="max-w-full max-h-full object-contain rounded-md" />
                  </div>
                  <span className="text-[15px] font-medium text-[#334155] leading-tight">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* More Products From This Seller Section */}
          <div className="mb-8 mt-8">
            <h2 className="text-[22px] font-bold text-primary mb-6">More Products From This Seller</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {moreProductsFromSeller.map((product) => (
                <Card key={product.id} className="border border-[#cbd5e1] rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden flex flex-col h-full">
                  <CardContent className="p-3 flex flex-col h-full">
                    <div className="border border-[#e2e8f0] rounded mb-3 flex items-center justify-center p-2 h-[120px]">
                      <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <h3 className="text-[#3b3db9] text-[14px] font-medium leading-[1.3] line-clamp-2 min-h-[36px] mb-3">
                      {product.name}
                    </h3>
                    <div className="mt-auto">
                      <Button className="w-full rounded-lg bg-[#336b92] hover:bg-[#275a89] text-white h-9 text-[13px] font-medium shadow-sm">
                        Send Inquiry
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
        </div>

        {/* RIGHT COLUMN: Seller Details */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <Card className="bg-muted/10 border-border rounded-xl shadow-sm">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold mb-4 text-foreground border-b border-border pb-3">Seller Details</h3>
              
              {product.seller && (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center font-bold text-2xl text-primary flex-shrink-0">
                      {product.seller.companyName.charAt(0)}
                    </div>
                    <a href="#" className="text-primary underline font-semibold text-[15px] leading-tight">
                      {product.seller.companyName}
                    </a>
                  </div>

                  <div className="text-sm space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">GST - </span> 
                        <span className="text-muted-foreground">{product.seller.gstNumber}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold shadow-sm">
                        {product.seller.rating} ★
                      </span> 
                      <span className="text-muted-foreground">Rating</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{product.seller.location}</span>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <User className="w-4 h-4" /> <span className="font-medium text-xs uppercase tracking-wider">Managing Director</span>
                      </div>
                      <div className="font-medium ml-6 mb-4 text-foreground">{product.seller.managingDirector}</div>
                      
                      <div className="flex items-start gap-2 text-muted-foreground mb-1">
                        <Building className="w-4 h-4 mt-0.5" /> <span className="font-medium text-xs uppercase tracking-wider">Address</span>
                      </div>
                      <div className="text-muted-foreground ml-6 mb-5 leading-relaxed">{product.seller.address}</div>
                    </div>
                    
                    <div className="pt-2">
                      <a href="#" className="text-primary hover:underline text-sm block mb-5 font-medium">
                        {category.name} in {product.seller.location.split(',')[0]}
                      </a>
                      
                      <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary/10 mb-3 h-10 font-semibold shadow-sm">
                        VIEW NUMBER
                      </Button>
                      <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground mb-4 h-10 font-semibold shadow-md">
                        Contact Seller
                      </Button>
                      
                      <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1.5 mt-2">
                        <Flag className="w-3 h-3" /> Report incorrect details
                      </a>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Lead Form Card */}
          <Card className="border-border rounded-xl shadow-sm mb-6">
            <CardContent className="p-6">
              <h3 className="text-primary text-[26px] font-bold mb-4 tracking-tight">Get Best Price for</h3>
              <p className="text-foreground text-[17px] mb-6">
                {product.name}
              </p>

              <div className="border border-[#cbd5e1] rounded-xl p-4 mb-6 bg-white">
                <textarea 
                  className="w-full min-h-[80px] text-[16px] text-foreground focus:outline-none resize-none bg-transparent"
                  defaultValue={`Hi, I am interested in ${product.name}.`}
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-[15px] sm:text-[17px] text-foreground mb-4">Requirement Frequency</label>
                <div className="flex items-center gap-4 sm:gap-6">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-5 h-5 rounded-full border-2 border-[#f97316] flex items-center justify-center bg-white flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f97316]"></div>
                    </div>
                    <input type="radio" name="frequency" className="hidden" defaultChecked />
                    <span className="text-[15px] sm:text-[17px] text-foreground">One-Time</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-5 h-5 rounded-full border border-[#94a3b8] flex items-center justify-center bg-white group-hover:border-[#64748b] transition-colors flex-shrink-0">
                    </div>
                    <input type="radio" name="frequency" className="hidden" />
                    <span className="text-[15px] sm:text-[17px] text-foreground">Recurring</span>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-[15px] sm:text-[17px] text-foreground mb-3">Quantity<span className="text-red-500 ml-0.5">*</span></label>
                <div className="flex border border-[#cbd5e1] rounded-xl overflow-hidden h-[60px] bg-white">
                  <div className="w-[40%] sm:w-[45%] flex flex-col justify-center px-2 sm:px-4 border-r border-[#cbd5e1]">
                    <span className="text-[12px] sm:text-[13px] text-[#64748b] font-medium leading-none mb-1.5">Quantity</span>
                    <input type="text" defaultValue="50" className="w-full outline-none text-[15px] sm:text-[17px] text-foreground bg-transparent leading-none" />
                  </div>
                  <div className="w-[60%] sm:w-[55%] flex items-center relative">
                    <select className="w-full h-full pl-2 sm:pl-4 pr-8 sm:pr-10 outline-none text-[14px] sm:text-[17px] text-foreground bg-transparent cursor-pointer appearance-none">
                      <option>Piece/Pieces</option>
                      <option>Kilogram</option>
                      <option>Box</option>
                    </select>
                    <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2563eb]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full rounded-lg bg-[#336b92] hover:bg-[#275a89] text-white h-12 font-medium text-[16px] shadow-sm">
                Continue
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>

      {/* Recommended Products Section */}
      <div className="mt-12 mb-8">
        <h2 className="text-[24px] font-bold text-[#1e293b] mb-6">Recommended Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {recommendedProducts.map((product) => (
            <Card key={product.id} className="border border-[#cbd5e1] rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden flex flex-col h-full">
              <CardContent className="p-3 flex flex-col h-full">
                <div className="bg-[#f1f5f9] rounded mb-3 flex items-center justify-center h-[140px] p-2">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <h3 className="text-[#3b3db9] text-[14.5px] font-medium leading-[1.3] line-clamp-2 min-h-[38px] mb-1.5">
                  {product.name}
                </h3>
                <div className="text-[13px] text-[#64748b] mb-3 line-clamp-1">
                  {product.company}
                </div>
                <div className="mt-auto">
                  <Button className="w-full rounded-lg bg-[#336b92] hover:bg-[#275a89] text-white h-9 text-[13.5px] font-medium shadow-sm">
                    Send Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="bg-[#f4f6f8] rounded-2xl p-6 md:p-8 mt-12 mb-4">
        <h2 className="text-[20px] font-bold text-[#1e293b] mb-6">Popular Categories</h2>
        <div className="flex flex-wrap gap-2.5">
          {popularCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              to="#" 
              className="bg-white px-4 py-2 rounded-lg text-[13.5px] text-[#475569] shadow-sm hover:shadow-md hover:text-primary transition-all whitespace-nowrap"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
