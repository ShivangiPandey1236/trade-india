import { useState, useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { categories } from '../data/productsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategoryProducts = () => {
  const { categoryId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", updateScrollButtons, { passive: true });
      updateScrollButtons();
      window.addEventListener("resize", updateScrollButtons, { passive: true });
    }
    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener("scroll", updateScrollButtons);
      }
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = clientWidth * 0.8;
      const targetScroll = direction === "left" ? scrollLeft - offset : scrollLeft + offset;

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const subCategoriesData = [
    {
      title: "Lid Press Machine",
      items: [
        { name: "Lid Press Machine", price: "Price:90000 INR / Number", image: "https://picsum.photos/100/100?random=11" },
        { name: "Automatic lid Pressing Machine", price: "Price:350000 INR / Set", image: "https://picsum.photos/100/100?random=12" },
        { name: "Fully Automatic Lid Placing and Pressing Machine", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=13" },
        { name: "Automatic square can bottom lid curling and lini...", price: "Price:50000.0 USD ($) / Set", image: "https://picsum.photos/100/100?random=14" }
      ]
    },
    {
      title: "Aluminium Foil Making...",
      items: [
        { name: "Foil Roll Rewinding Machine", price: "Price:115000 INR / Unit", image: "https://picsum.photos/100/100?random=21" },
        { name: "Aluminium Foil", price: "Price:350.00 INR / Pack", image: "https://picsum.photos/100/100?random=22" },
        { name: "11 Micron Little Chefs Aluminium Foil", price: "Price:200 INR / Piece", image: "https://picsum.photos/100/100?random=23" },
        { name: "Aluminium foil butter paper and cling film rewinding...", price: "Price:225000.0 INR / Unit", image: "https://picsum.photos/100/100?random=24" }
      ]
    },
    {
      title: "Distilled Water Machine",
      items: [
        { name: "Distilled Water 1 LTR", price: "Price:15 INR / Piece", image: "https://picsum.photos/100/100?random=31" },
        { name: "Vertical hot pressure distilled water machine", price: "Price:30000.0 USD ($) / Unit", image: "https://picsum.photos/100/100?random=32" },
        { name: "Multi Column Distillation Plant", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=33" },
        { name: "Water Distillation with Metal Heater RSLWS-M...", price: "Price:18500.0 INR / Piece", image: "https://picsum.photos/100/100?random=34" }
      ]
    },
    {
      title: "Doctoring Machine",
      items: [
        { name: "Web Doctoring Machine for Printing & Packaging", price: "Price:350000 INR / Unit", image: "https://picsum.photos/100/100?random=41" },
        { name: "Doctoring Rewinding Machine", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=42" },
        { name: "Doctoring Machine", price: "Price:250000 INR / Unit", image: "https://picsum.photos/100/100?random=43" },
        { name: "Doctoring Machine", price: "Price:280000 INR / Unit", image: "https://picsum.photos/100/100?random=44" }
      ]
    },
    {
      title: "Filling Machines",
      items: [
        { name: "Automatic Liquid Filling Machine", price: "Price:150000 INR / Unit", image: "https://picsum.photos/100/100?random=51" },
        { name: "Powder Filling Machine", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=52" },
        { name: "Paste Filling Machine", price: "Price:85000 INR / Unit", image: "https://picsum.photos/100/100?random=53" },
        { name: "Bottle Filling Plant", price: "Price:450000 INR / Set", image: "https://picsum.photos/100/100?random=54" }
      ]
    },
    {
      title: "Packaging Material",
      items: [
        { name: "Corrugated Boxes", price: "Price:15 INR / Piece", image: "https://picsum.photos/100/100?random=61" },
        { name: "BOPP Tapes", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=62" },
        { name: "Stretch Film Roll", price: "Price:120 INR / Kg", image: "https://picsum.photos/100/100?random=63" },
        { name: "Bubble Wrap Roll", price: "Price:850 INR / Roll", image: "https://picsum.photos/100/100?random=64" }
      ]
    }
  ];

  return (
    <div className="flex-1 p-8 w-full max-w-7xl mx-auto animate-fade-in-up">
      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center text-[14px] text-muted-foreground gap-1.5 font-sans">
        <Link to="/" className="hover:text-primary transition-colors">Tradeindia</Link>
        <span className="text-muted-foreground/60">&gt;</span>
        <span className="hover:text-primary transition-colors cursor-pointer">Seller</span>
        <span className="text-muted-foreground/60">&gt;</span>
        <span className="text-foreground font-medium">{category.name}</span>
      </div>

      {/* Category Info */}
      <div className="text-left mb-10 font-sans">
        <h1 className="text-[24px] md:text-[28px] font-bold mb-4 text-foreground">{category.name}</h1>
        <p className="text-foreground/80 text-[15px] leading-[1.8] text-justify">
          {category.description && category.description.length > 100 
            ? category.description 
            : "Machine manufacturers & suppliers listed on Tradeindia have an impeccable collection of machinery products that delivers high performance, durability, and accuracy. From manufacturing units to textile companies and even energy-generating facilities, listed reputed sellers from the machinery category provide a large variety of advanced machines for different applications. Modern machines feature a ton of advanced functions that help to automate the complete industrial process. These machines not only help achieve faster operations but also save money and time with high performance. Sellers provide automatic machines as the cost-effective solution for industrial applications and make the work environment highly safe and secure with zero chance of human error. Modern machineries are available with AI and IoT technology, which makes them advanced enough to detect errors, track performance on their own, and adapt to the production requirements of the business. With this development, a business not only increases its production ability but also saves additional expenses by using resources efficiently and reducing additional labour costs. Explore our Machinery category, which is composed of trending products, popular blog posts, stories, videos, government policies, schemes, and many more."}
        </p>
      </div>

      {/* Subcategories Section */}
      <div className="bg-white border border-border rounded-xl shadow-sm p-5 md:p-6 mb-10 font-sans overflow-hidden">
        <div className="flex flex-col xl:flex-row gap-6 md:gap-8">
          {/* Left section: Title & Main Image */}
          <div className="w-full xl:w-[220px] flex-shrink-0 flex flex-col items-center xl:items-start">
            <h2 className="text-[18px] md:text-[20px] font-bold text-foreground mb-4 w-full text-left">Machineries</h2>
            <div className="flex-1 flex items-center justify-center w-full max-w-[200px] xl:max-w-none">
              <img 
                src="https://picsum.photos/400/600?random=100" 
                alt="Machineries Main" 
                className="max-h-[250px] xl:max-h-[320px] w-auto object-contain hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
              />
            </div>
          </div>

          {/* Right section: Slider of Categories */}
          <div className="flex-1 relative min-w-0">
            {/* Navigation Controls */}
            <div className="flex xl:absolute xl:top-0 right-0 justify-end items-center space-x-2 z-10 mb-4 xl:mb-0">
              <button
                onClick={() => handleScroll("left")}
                disabled={!showLeftArrow}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-foreground hover:text-primary transition-all duration-300 shadow-sm border border-border disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!showRightArrow}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-foreground hover:text-primary transition-all duration-300 shadow-sm border border-border disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <style>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>

            <div 
              ref={scrollRef}
              className="flex gap-6 xl:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 xl:pt-10"
            >
            {subCategoriesData.map((cat, idx) => (
              <div key={idx} className="flex flex-col w-[85vw] sm:w-[260px] shrink-0 snap-start">
                <h3 className="text-[15px] md:text-[16px] font-bold text-foreground mb-4 truncate" title={cat.title}>
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-[60px] h-[60px] border border-border rounded p-1 flex-shrink-0 bg-white group-hover:border-primary/50 transition-colors">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex flex-col justify-center flex-1">
                        <h4 className="text-[13px] text-foreground/90 line-clamp-2 leading-snug mb-1 group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        {item.isLink ? (
                          <span className="text-[12px] font-medium text-[#2563eb] hover:underline">
                            {item.price}
                          </span>
                        ) : (
                          <div className="text-[12px] text-foreground">
                            <span className="font-bold">{item.price.split(' /')[0]}</span>
                            {item.price.includes(' /') && <span className="text-muted-foreground"> /{item.price.split(' /')[1]}</span>}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.products.map((product) => (
          <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border bg-card">
            <div className="relative h-64 overflow-hidden bg-white p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-primary">
                  {product.price}
                </span>
                <Link to={`/products/${category.id}/${product.id}`}>
                  <Button variant="default" className="shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
