import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { categories } from '../data/productsData';
import SubcategoriesSection from '../components/landing/SubcategoriesSection';

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

      {/* Subcategories Section (Extracted and Reusable) */}
      <SubcategoriesSection 
        categoryId={category.id} 
        sectionTitle="Machineries" 
        mainImage="https://picsum.photos/400/600?random=100" 
        subCategoriesData={subCategoriesData} 
      />

      <SubcategoriesSection 
        categoryId={category.id} 
        sectionTitle="Industrial Machinery & Parts" 
        mainImage="https://picsum.photos/400/600?random=101" 
        subCategoriesData={industrialMachineryData} 
      />
      
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
