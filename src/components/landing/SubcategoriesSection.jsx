import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SubcategoriesSection = ({ 
  categoryId, 
  sectionTitle, 
  mainImage, 
  subCategoriesData 
}) => {
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

  if (!subCategoriesData || subCategoriesData.length === 0) return null;

  return (
    <div className="bg-white border border-border rounded-xl shadow-sm p-5 md:p-6 mb-10 font-sans overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-6 md:gap-8">
        {/* Left section: Title & Main Image */}
        <div className="w-full xl:w-[220px] flex-shrink-0 flex flex-col items-center xl:items-start">
          <h2 className="text-[18px] md:text-[20px] font-bold text-primary mb-4 w-full text-left">{sectionTitle}</h2>
          <div className="flex-1 flex items-center justify-center w-full max-w-[200px] xl:max-w-none">
            <img 
              src={mainImage} 
              alt={`${sectionTitle} Main`} 
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
                {cat.items.map((item, itemIdx) => {
                  const itemSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                  <Link to={`/products/${categoryId}/${itemSlug}`} key={itemIdx} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-[60px] h-[60px] border border-border rounded p-1 flex-shrink-0 bg-white group-hover:border-primary/50 transition-colors">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <h4 className="text-[13px] text-foreground/90 line-clamp-2 leading-snug mb-1 group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      {item.isLink ? (
                        <span className="text-[12px] font-medium text-[#2563eb] group-hover:underline">
                          {item.price}
                        </span>
                      ) : (
                        <div className="text-[12px] text-foreground">
                          <span className="font-bold">{item.price.split(' /')[0]}</span>
                          {item.price.includes(' /') && <span className="text-muted-foreground"> /{item.price.split(' /')[1]}</span>}
                        </div>
                      )}
                    </div>
                  </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubcategoriesSection;
