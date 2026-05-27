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

        {/* RIGHT COLUMN: Seller Details */}
        <div className="col-span-12 lg:col-span-3">
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
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
