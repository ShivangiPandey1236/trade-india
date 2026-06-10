import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const categoryData = {
  "Machinery": [
    { title: "Agricultural Machinery", items: ["Tractors", "Harvesters", "Cultivators", "Seeding Equipment"] },
    { title: "Construction Machinery", items: ["Excavators", "Bulldozers", "Cranes", "Concrete Mixers"] },
    { title: "Food Processing", items: ["Packaging Machines", "Mixers", "Commercial Ovens", "Grinders"] },
    { title: "Textile Machinery", items: ["Spinning Machines", "Weaving Machines", "Dyeing Equipment", "Knitting Machines"] }
  ],
  "Industrial Supplies": [
    { title: "Abrasives", items: ["Grinding Wheels", "Sandpaper", "Polishing Pads", "Abrasive Belts"] },
    { title: "Fasteners", items: ["Nails, Screws & Bolts", "Nuts & Washers", "Rivets", "Anchors"] },
    { title: "Pipes & Fittings", items: ["Steel Pipes", "PVC Pipes", "Industrial Valves", "Pipe Flanges"] },
    { title: "Safety Equipment", items: ["Safety Helmets", "Industrial Gloves", "Safety Shoes", "Goggles"] }
  ]
};

export default function CategoryHoverMenu({ categoryName }) {
  const data = categoryData[categoryName];
  if (!data) return null;

  return (
    <div className="absolute left-full top-1/2 -translate-y-1/2 mt-20 ml-1 hidden group-hover:block z-50 w-[550px]">
      {/* Invisible padding area to prevent hover from dropping when moving mouse from sidebar to menu */}
      <div className="pl-3 h-full">
        <Card className="w-full shadow-2xl border-border/60 bg-white/95 backdrop-blur-sm animate-in fade-in zoom-in-95 slide-in-from-left-2 duration-200">
          <CardHeader className="border-b border-border/40 pb-3">
            <CardTitle className="text-xl text-primary font-bold">{categoryName} Categories</CardTitle>
          </CardHeader>
          <CardContent className="pt-5 pb-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {data.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <Link to={`/subcategory/${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="font-semibold text-slate-800 text-sm border-b border-border/40 pb-1.5 flex items-center hover:text-primary transition-colors w-full">
                    {section.title}
                  </Link>
                  <ul className="space-y-2.5">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link to="/products" className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center group/item font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 group-hover/item:bg-primary transition-colors group-hover/item:scale-125"></span>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
