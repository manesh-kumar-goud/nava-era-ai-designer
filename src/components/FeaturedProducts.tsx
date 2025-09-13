import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Essential Oversized Tee",
      price: "$89",
      image: product1,
      category: "Essentials"
    },
    {
      id: 2,
      name: "Minimal Cargo Pants",
      price: "$145",
      image: product1,
      category: "Bottoms"
    },
    {
      id: 3,
      name: "Urban Utility Jacket",
      price: "$210",
      image: product1,
      category: "Outerwear"
    },
    {
      id: 4,
      name: "Signature Hoodie",
      price: "$125",
      image: product1,
      category: "Hoodies"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-headline mb-2">Featured Pieces</h2>
            <p className="text-body text-muted-foreground">
              Curated essentials from our latest collection
            </p>
          </div>
          <Button variant="editorial" className="hidden sm:flex items-center">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid-products">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-caption uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="text-subhead">{product.name}</h3>
                <p className="text-body font-display">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Button variant="editorial">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;