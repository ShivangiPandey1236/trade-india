import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { categories } from '../data/productsData';

const CategoryProducts = () => {
  const { categoryId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

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
