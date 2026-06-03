import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PopularPosts = ({ title, posts }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  if (!posts || posts.length === 0) return null;

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 15);
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
  }, [posts]);

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

  return (
    <div className="w-full my-12 font-sans animate-fade-in-up relative select-none">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] md:text-[24px] font-bold text-primary">{title}</h2>
        
        {/* Navigation Controls */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => handleScroll("left")}
            disabled={!showLeftArrow}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-primary/20 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!showRightArrow}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-primary/20 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
      >
        {posts.map((post, index) => (
          <div key={index} className="flex-none w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex flex-col group cursor-pointer snap-start">
            {/* Image Container */}
            <div className="relative rounded-xl overflow-hidden h-64 mb-4">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Placeholder for top-left Logo */}
              <div className="absolute top-3 left-3 bg-white rounded flex items-center justify-center px-1.5 py-0.5 shadow-sm">
                <span className="text-[10px] font-bold text-primary leading-tight uppercase tracking-wider">utpaad</span>
              </div>
              
              {/* Text Overlay on Image */}
              <div className="absolute bottom-0 right-0 max-w-[85%] bg-slate-800/90 backdrop-blur-sm text-white p-3 rounded-tl-xl">
                <p className="text-sm md:text-sm font-semibold leading-snug text-center">
                  {post.overlayTitle || post.title}
                </p>
              </div>
            </div>
            
            {/* Below Image Content */}
            <h3 className="font-bold text-[16px] mb-2 text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-[14px] text-foreground/70 line-clamp-2 leading-relaxed">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
