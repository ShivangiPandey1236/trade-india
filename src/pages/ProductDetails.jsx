import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { categories } from '../data/productsData';
import { CheckCircle2 } from 'lucide-react';

const ProductDetails = () => {
  const { categoryId, productId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  const product = category?.products.find(p => p.id === productId);

  if (!category || !product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="flex-1 p-8 w-full max-w-7xl mx-auto animate-fade-in-up">
      <div className="mb-8 flex items-center gap-4">
        <Link to={`/products/${category.id}`}>
          <Button variant="outline" className="text-muted-foreground hover:text-foreground">
            &larr; Back to {category.name}
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <div className="bg-white rounded-2xl p-8 border border-border shadow-sm flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-w-full h-auto object-contain max-h-[500px] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">
              {category.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-foreground">
              {product.price}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Description</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground text-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-8 border-t border-border flex gap-4">
            <Button size="lg" className="flex-1 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Buy Now
            </Button>
            <Button size="lg" variant="outline" className="flex-1 text-lg border-2 hover:-translate-y-1 transition-all">
              Inquire Price
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
