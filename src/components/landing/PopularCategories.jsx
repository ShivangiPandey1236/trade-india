import React from 'react';
import { Link } from 'react-router-dom';

const PopularCategories = () => {
  const categories = [
    "Human Hair", "Forklift Trucks", "Servo Voltage Stabilizer", "Basmati Rice", "Backhoe Loader", "Carry Bag Making Machine", "Drum Lifter", "Electric Stacker", "Scissor Lifts",
    "Industrial Vibrating Screen", "Rotameter", "Flowmeter", "Rotary Air Compressor", "Industrial Eto Sterilizer", "Rice Packaging Machines", "Shredding Machine", "Hammer Mill",
    "Automatic Labelling Machine", "Diesel Forklift", "Aerial Work Platform", "Storage Rack System", "Epoxy Resin", "Mild Steel Bar", "Stainless Steel Sheets", "Stainless Steel Strips",
    "Bag Filling Machines", "Asphalt Plants", "Slat Conveyor", "Ointment Plant", "Planetary Mixers", "Ladies Kurtis", "Led Lights", "Cctv Camera", "Ball Valve",
    "Anti Cancer Medicine", "Air Compressor", "Incense Sticks", "Solar Lights", "Goods Lifts", "Vitrified Tiles", "Stainless Steel Coils", "Pvc Pipes", "Pvc Pipe Fittings", "Upvc Pipes",
    "Upvc Ball Valve", "Pipe Elbows"
  ];

  return (
    <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-[#f0f3f7] py-12 mt-16 mb-0 border-t border-border/50">
      <div className="w-full max-w-7xl mx-auto px-8">
        <h2 className="text-[18px] md:text-[20px] font-bold text-[#143B59] mb-6">Popular Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to="#"
              className="bg-white px-3 py-1.5 text-[12px] text-foreground/80 rounded transition-colors hover:text-primary hover:border-primary border border-transparent shadow-sm whitespace-nowrap"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
