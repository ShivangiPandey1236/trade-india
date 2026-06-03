import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { categories } from '../data/productsData';
import SubcategoriesSection from '../components/landing/SubcategoriesSection';
import PopularPosts from '../components/landing/PopularPosts';
import FAQSection from '../components/landing/FAQSection';
import PopularCategories from '../components/landing/PopularCategories';
const CategoryProducts = () => {
  const { categoryId } = useParams();

  const category = categories.find(c => c.id === categoryId);

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

  const industrialMachineryData = [
    {
      title: "Doctoring Machines",
      items: [
        { name: "Doctoring Machine", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=71" },
        { name: "Doctor Centrifuge Machine", price: "Price:4000 INR /Piece", image: "https://picsum.photos/100/100?random=72" },
        { name: "Doctoring Machine", price: "Price:300000 INR /Set", image: "https://picsum.photos/100/100?random=73" },
        { name: "300 mm Doctoring Machine", price: "Price:500000 INR /Unit", image: "https://picsum.photos/100/100?random=74" }
      ]
    },
    {
      title: "Numbering Machine",
      items: [
        { name: "Morgana Frn5 Numbering Machine", price: "Price:350000 INR /Piece", image: "https://picsum.photos/100/100?random=81" },
        { name: "Barcode Numbering Machine In Glossy Finish...", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=82" },
        { name: "Bill book numbering machine", price: "Price:390000.0 INR /Number", image: "https://picsum.photos/100/100?random=83" },
        { name: "Automatic Numbering Machine", price: "Price:1099 INR /Piece", image: "https://picsum.photos/100/100?random=84" }
      ]
    },
    {
      title: "Egg Tray Machine",
      items: [
        { name: "Paper Egg Tray", price: "Price:3 INR /Piece", image: "https://picsum.photos/100/100?random=91" },
        { name: "High quality waste paper recycling equipment pulp...", price: "Price:100000 USD ($) /Kit", image: "https://picsum.photos/100/100?random=92" },
        { name: "Egg Tray Machine (SH-3000)", price: "Price:USD100000-250000 USD ($) /Set", image: "https://picsum.photos/100/100?random=93" },
        { name: "Egg Tart Making Machine With 36 Pcs/Min", price: "Price:1000 USD ($) /Set", image: "https://picsum.photos/100/100?random=94" }
      ]
    },
    {
      title: "Chain Link Machine",
      items: [
        { name: "5H Chain Link Fence Machine", price: "Price:150000 INR /Unit", image: "https://picsum.photos/100/100?random=101" },
        { name: "Industrial Chain Link Machine", price: "Price:350000 INR /Unit", image: "https://picsum.photos/100/100?random=102" },
        { name: "Fully Automatic Chain Link Fence...", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=103" },
        { name: "CNC Chain Link Making Machine", price: "Price:500000 INR /Unit", image: "https://picsum.photos/100/100?random=104" }
      ]
    }
  ];

  const machineryAndPartsData = [
    {
      title: "Floating Suction Assembly",
      items: [
        { name: "Floating Suction Type Oil Skimmer", price: "Price:145000 INR /Piece", image: "https://picsum.photos/100/100?random=111" },
        { name: "Floating Suction Assembly", price: "Price:210000 INR /Unit", image: "https://picsum.photos/100/100?random=112" },
        { name: "SUCTION PUMP", price: "Price:19000 INR /Unit", image: "https://picsum.photos/100/100?random=113" },
        { name: "Floor Mounted Pipe", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=114" }
      ]
    },
    {
      title: "Paper Machinery Parts",
      items: [
        { name: "2 Layer Forming Wire Applied to Paper Machine", price: "Price:6 USD ($) /Square Meter", image: "https://picsum.photos/100/100?random=121" },
        { name: "Blade Coater of Paper Coating Machine", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=122" },
        { name: "HT Series Doctor Blade for Paper Machine", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=123" },
        { name: "Paper Bag Machine Cam", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=124" }
      ]
    },
    {
      title: "Idler Wheel",
      items: [
        { name: "MS Idler Roller", price: "Price:250 INR /Unit", image: "https://picsum.photos/100/100?random=131" },
        { name: "PROSKATE ASTER 76 INLINE WHEEL ISW 200", price: "Price:4799.0 INR /Pack", image: "https://picsum.photos/100/100?random=132" },
        { name: "Bulldozer Track Shoe Plates Track Roller Idler...", price: "Price:2150 INR /Piece", image: "https://picsum.photos/100/100?random=133" },
        { name: "PC60 Komatsu Excavator Idler Wheel", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=134" }
      ]
    },
    {
      title: "Blowout Preventer",
      items: [
        { name: "Manual Blowout Preventer", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=141" },
        { name: "Blowout Preventer", price: "Price:100000 INR /Piece", image: "https://picsum.photos/100/100?random=142" },
        { name: "Wireline Blowout Preventer", price: "Price:55000 INR /Unit", image: "https://picsum.photos/100/100?random=143" },
        { name: "Blowout Preventer", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=144" }
      ]
    }
  ];

  const cuttingMachineData = [
    {
      title: "Bar Cutting Machine",
      items: [
        { name: "JAYMAC BAR CUTTING MACHINE.", price: "Price:200000.00 INR /Piece", image: "https://picsum.photos/100/100?random=151" },
        { name: "Bar Cutting Machine", price: "Price:300000.0 INR /Number", image: "https://picsum.photos/100/100?random=152" },
        { name: "GQ40 Rebar Cutting Machine", price: "Price:60000.0 INR /Piece", image: "https://picsum.photos/100/100?random=153" },
        { name: "Industrial Heavy Bar Cutting Machine", price: "Price:65000.0 INR /Number", image: "https://picsum.photos/100/100?random=154" }
      ]
    },
    {
      title: "Bar Cutter",
      items: [
        { name: "Bar Cutting C-50-GQ50", price: "Price:93200 INR /Piece", image: "https://picsum.photos/100/100?random=161" },
        { name: "Jaymac TMT Bar Cutting Machine", price: "Price:200000.00 INR /Set", image: "https://picsum.photos/100/100?random=162" },
        { name: "Bar Cutting Machine", price: "Price:60000 INR /Piece", image: "https://picsum.photos/100/100?random=163" },
        { name: "Bar Cutting", price: "Price:95000.0 INR /Piece", image: "https://picsum.photos/100/100?random=164" }
      ]
    },
    {
      title: "Compound Miter Saw",
      items: [
        { name: "Compound Miter Saw", price: "Price:12700 INR /Piece", image: "https://picsum.photos/100/100?random=171" },
        { name: "Double Mitre V-Notch Saw Machine With Digital...", price: "Price:410000 INR /Unit", image: "https://picsum.photos/100/100?random=172" },
        { name: "C10FCE2 Compound Miter Saw", price: "Price:15900 INR /Unit", image: "https://picsum.photos/100/100?random=173" },
        { name: "Compound Miter Saw", price: "Price:28000.0 INR /Number", image: "https://picsum.photos/100/100?random=174" }
      ]
    },
    {
      title: "Surface Treatment",
      items: [
        { name: "Plasma Machine", price: "Price:1000 INR /Piece", image: "https://picsum.photos/100/100?random=181" },
        { name: "Plasma System", price: "Get Latest Price", isLink: true, image: "https://picsum.photos/100/100?random=182" },
        { name: "Surface", price: "Price:200 INR /Piece", image: "https://picsum.photos/100/100?random=183" },
        { name: "16 Plasma", price: "Price:5000 INR /Piece", image: "https://picsum.photos/100/100?random=184" }
      ]
    }
  ];

  const packagingMachineData = [
    {
      title: "Nitrogen Flushing Machine",
      items: [
        { name: "vacuum packing machine with nitrogen flushing", price: "Price:112496.0 INR /Number", image: "https://picsum.photos/100/100?random=211" },
        { name: "Vertical Packaging Machine With NITROGE...", price: "Price:38500 INR /Piece", image: "https://picsum.photos/100/100?random=212" },
        { name: "Nitrogen Gas Flushing Machine", price: "Price:45000.0 INR /Piece", image: "https://picsum.photos/100/100?random=213" },
        { name: "Band Sealer With Nitrogen Flushing and Vacuum...", price: "Price:75000 INR /Piece", image: "https://picsum.photos/100/100?random=214" }
      ]
    },
    {
      title: "Corrugated Packaging...",
      items: [
        { name: "Corrugated Food Packaging Box", price: "Price:25 INR /Piece", image: "https://picsum.photos/100/100?random=221" },
        { name: "Oblique Corrugation Machine", price: "Price:500000-700000 INR /Piece", image: "https://picsum.photos/100/100?random=222" },
        { name: "Industrial Corrugated Packaging Box", price: "Price:250 INR /Box", image: "https://picsum.photos/100/100?random=223" },
        { name: "Corrugated Box Packaging Machine", price: "Price:82500 INR /Piece", image: "https://picsum.photos/100/100?random=224" }
      ]
    },
    {
      title: "Vffs Machine",
      items: [
        { name: "Servo Auger Type VFFS Spices Powder Pouch...", price: "Price:1600000 INR /Unit", image: "https://picsum.photos/100/100?random=231" },
        { name: "VFFS Multihead Automatic Packaging Machine", price: "Price:1150000 INR /Unit", image: "https://picsum.photos/100/100?random=232" },
        { name: "Vffs Packaging Machine", price: "Price:1500000 INR /Piece", image: "https://picsum.photos/100/100?random=233" },
        { name: "Detergent Powder Packing Machine", price: "Price:250000.00 INR /Unit", image: "https://picsum.photos/100/100?random=234" }
      ]
    },
    {
      title: "Tablet Packaging...",
      items: [
        { name: "Capsule Packing Machine", price: "Price:350000 INR /Unit", image: "https://picsum.photos/100/100?random=241" },
        { name: "Fully Automatic Blister Packing Machine", price: "Price:1200000 INR /Piece", image: "https://picsum.photos/100/100?random=242" },
        { name: "Auto Tablet Packing Machine", price: "Price:950000 INR /Unit", image: "https://picsum.photos/100/100?random=243" },
        { name: "Auto Strip Packaging Machine", price: "Price:1100000 INR /Piece", image: "https://picsum.photos/100/100?random=244" }
      ]
    }
  ];

  const popularPostsData = [
    {
      image: "https://picsum.photos/400/300?random=201",
      title: "Why Your Chemical Business Needs a Drum Filling System",
      description: "A drum filling system boosts efficiency and safety in your chemical business by automating precise filling, reducing spills, and minimizing...",
      overlayTitle: "Why Your Chemical Business Needs a Drum Filling System"
    },
    {
      image: "https://picsum.photos/400/300?random=202",
      title: "Discover How Jumbo Bag Filling Machine Fastrack the Industrial...",
      description: "Learn how jumbo bag filling machines accelerate industrial packaging processes, enhancing efficiency and saving time in your production line.",
      overlayTitle: "Discover How Jumbo Bag Filling Machine Fastrack the Industrial Packaging Process"
    },
    {
      image: "https://picsum.photos/400/300?random=203",
      title: "How to Operate a Jumbo Bag Filling Machine",
      description: "Learn the step-by-step process of operating a jumbo bag filling machine effectively and safely.",
      overlayTitle: "How to Operate a Jumbo Bag Filling Machine"
    },
    {
      image: "https://picsum.photos/400/300?random=204",
      title: "Top 5 Benefits of Automatic Packaging Machines",
      description: "Discover why upgrading to automatic packaging machinery can drastically reduce your operational costs and increase output.",
      overlayTitle: "Top 5 Benefits of Automatic Packaging Machines"
    },
    {
      image: "https://picsum.photos/400/300?random=205",
      title: "Maintaining Your Industrial Packaging Equipment",
      description: "A comprehensive guide to routine maintenance that extends the lifespan of your filling and packaging machines.",
      overlayTitle: "Maintaining Your Industrial Packaging Equipment"
    }
  ];

  const packagingMachinePostsData = [
    {
      image: "https://picsum.photos/400/300?random=301",
      title: "How to Optimize Your Packaging Line",
      description: "Learn the best practices to increase throughput and reduce downtime in your packaging facility.",
      overlayTitle: "Optimize Packaging Line"
    },
    {
      image: "https://picsum.photos/400/300?random=302",
      title: "Sustainable Packaging Trends in 2024",
      description: "Discover eco-friendly materials and machines that are shaping the future of the packaging industry.",
      overlayTitle: "Sustainable Packaging"
    },
    {
      image: "https://picsum.photos/400/300?random=303",
      title: "Choosing the Right VFFS Machine",
      description: "A comprehensive guide on selecting a vertical form fill seal machine for your specific product type.",
      overlayTitle: "VFFS Machine Guide"
    },
    {
      image: "https://picsum.photos/400/300?random=304",
      title: "Maintenance Tips for Corrugated Box Machines",
      description: "Keep your corrugation equipment running smoothly with these essential daily and weekly maintenance tasks.",
      overlayTitle: "Machine Maintenance"
    },
    {
      image: "https://picsum.photos/400/300?random=305",
      title: "The Impact of Automation in Packaging",
      description: "Explore how automated packaging systems reduce labor costs and improve consistency and quality.",
      overlayTitle: "Automation Impact"
    }
  ];

  const faqData = [
    {
      question: "What Are the Different Types of Industrial Machinery?",
      answer: "Industrial machinery is divided into various categories as per their function and the type of application they smoothly execute. There are CNC machines, 3D printers, construction equipment like excavators and bulldozers, food processing systems, and much more. Moreover, there are more useful and handy material handling equipment that are not specific to any industry and are used by all including pallet trucks, conveyors, electric pallet trucks, and many others."
    },
    {
      question: "How Do You Choose the Right Industrial Machinery for Your Business?",
      answer: "Selecting the right machinery involves evaluating your production requirements, space, budget, and long-term maintenance costs. Always source from trusted suppliers."
    },
    {
      question: "What Is the Importance of Regular Maintenance for Industrial Machinery?",
      answer: "Regular maintenance extends equipment lifespan, prevents unexpected downtime, ensures operator safety, and maintains product quality standards."
    },
    {
      question: "What are the new updates on industrial machinery?",
      answer: "Modern industrial machinery frequently incorporates IoT for predictive maintenance, AI-driven quality control, and enhanced energy efficiency measures."
    },
    {
      question: "How Can You Increase the Performance of Industrial Machinery?",
      answer: "Performance can be optimized through regular servicing, using high-quality lubricants, training operators thoroughly, and upgrading legacy control systems."
    },
    {
      question: "What are the Safety Measures to Consider to Operate Industrial Machinery?",
      answer: "Operators must wear appropriate PPE, undergo rigorous training, ensure all safety guards are in place, and follow strict lockout/tagout procedures during maintenance."
    },
    {
      question: "How Does Industrial Machinery Impact Productivity?",
      answer: "Advanced machinery dramatically increases production speed, reduces human error, lowers per-unit costs, and enables 24/7 manufacturing operations."
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
        <h1 className="text-[24px] md:text-[28px] font-bold mb-4 text-primary">{category.name}</h1>
        <p className="text-foreground/80 text-[15px] leading-[1.8] text-justify">
          {category.description && category.description.length > 100
            ? category.description
            : "Machine manufacturers & suppliers listed on Tradeindia have an impeccable collection of machinery products that delivers high performance, durability, and accuracy. From manufacturing units to textile companies and even energy-generating facilities, listed reputed sellers from the machinery category provide a large variety of advanced machines for different applications. Modern machines feature a ton of advanced functions that help to automate the complete industrial process. These machines not only help achieve faster operations but also save money and time with high performance. Sellers provide automatic machines as the cost-effective solution for industrial applications and make the work environment highly safe and secure with zero chance of human error. Modern machineries are available with AI and IoT technology, which makes them advanced enough to detect errors, track performance on their own, and adapt to the production requirements of the business. With this development, a business not only increases its production ability but also saves additional expenses by using resources efficiently and reducing additional labour costs. Explore our Machinery category, which is composed of trending products, popular blog posts, stories, videos, government policies, schemes, and many more."}
        </p>
      </div>

      {/* Subcategories Section (Extracted and Reusable) */}
      <SubcategoriesSection
        categoryId={category.id}
        sectionTitle="Machineries"
        mainImage="https://picsum.photos/400/600?random=100"
        subCategoriesData={subCategoriesData}
      />

      <PopularPosts 
        title="Popular Posts Related to Packaging Machine" 
        posts={popularPostsData} 
      />

      <SubcategoriesSection
        categoryId={category.id}
        sectionTitle="Industrial Machinery & Parts"
        mainImage="https://picsum.photos/400/600?random=101"
        subCategoriesData={industrialMachineryData}
      />

      <SubcategoriesSection
        categoryId={category.id}
        sectionTitle="Machinery & Parts"
        mainImage="https://picsum.photos/400/600?random=102"
        subCategoriesData={machineryAndPartsData}
      />

      <SubcategoriesSection
        categoryId={category.id}
        sectionTitle="Cutting Machine"
        mainImage="https://picsum.photos/400/600?random=103"
        subCategoriesData={cuttingMachineData}
      />

      <SubcategoriesSection
        categoryId={category.id}
        sectionTitle="Packaging Machine"
        mainImage="https://picsum.photos/400/600?random=104"
        subCategoriesData={packagingMachineData}
      />

      <PopularPosts 
        title="Popular Posts Related to Packaging Machine" 
        posts={packagingMachinePostsData} 
      />

      <FAQSection title="FAQs Related to Machinery" faqs={faqData} />

      <PopularCategories />

      {/* 
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
      */}
    </div>
  );
};

export default CategoryProducts;
