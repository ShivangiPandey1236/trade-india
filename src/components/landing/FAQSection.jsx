import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full my-12 font-sans animate-fade-in-up">
      <h2 className="text-[20px] md:text-[24px] font-bold text-foreground mb-6">{title}</h2>
      
      <div className="border-t border-border">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-border">
              <button
                className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-[15px] md:text-[16px] text-foreground group-hover:text-primary transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center group-hover:bg-secondary/50 transition-colors">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-foreground" />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100 mb-5" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[14px] md:text-[15px] text-foreground/75 leading-relaxed pr-4 md:pr-12 text-justify">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
