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
      <div className="mb-8 flex items-center gap-4">
        <Link to="/products">
          <Button variant="outline" className="text-muted-foreground hover:text-foreground">
            &larr; Back to Categories
          </Button>
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-foreground">{category.name}</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {category.description}
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
