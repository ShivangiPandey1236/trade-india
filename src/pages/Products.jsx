import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { categories } from '../data/productsData';

const Products = () => {
  return (
    <div className="flex-1 p-8 w-full max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-foreground">Our Categories</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our wide range of product categories designed to meet all your needs with premium quality and affordable prices.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border bg-card">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {category.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                  {category.priceRange}
                </span>
                <Link to={`/products/${category.id}`}>
                  <Button variant="default" className="shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                    View Products
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

export default Products;
