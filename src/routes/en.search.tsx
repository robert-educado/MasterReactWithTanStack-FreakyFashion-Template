import ProductGrid from "@/components/ProductGrid/ProductGrid";
import type { Product } from "@/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/en/search")({
  component: RouteComponent,
});

function RouteComponent() {
  const products: Product[] = [
    {
      id: 1,
      name: "Black T-Shirt",
      description: "Lorem ipsum dolor",
      imageUrl: "http://localhost:3000/images/product-clothing-image-1.png",
      brand: "Levis",
      price: 100,
      url: "/products/slug",
      new: true,
    },
    {
      id: 1,
      name: "Black T-Shirt",
      description: "Lorem ipsum dolor",
      imageUrl: "http://localhost:3000/images/product-clothing-image-2.png",
      brand: "Levis",
      price: 100,
      url: "/products/slug",
      new: true,
    },
    {
      id: 1,
      name: "Black T-Shirt",
      description: "Lorem ipsum dolor",
      imageUrl: "http://localhost:3000/images/product-clothing-image-3.png",
      brand: "Levis",
      price: 100,
      url: "/products/slug",
      new: true,
    },
    {
      id: 1,
      name: "Black T-Shirt",
      description: "Lorem ipsum dolor",
      imageUrl: "http://localhost:3000/images/product-clothing-image-4.png",
      brand: "Levis",
      price: 100,
      url: "/products/slug",
      new: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-2 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Result: skirt</h2>
        <div className="flex gap-2">
          <button className="text-xs border px-4 py-1 rounded">Clothing</button>
          <button className="text-xs border px-4 py-1 rounded">Accessories</button>
        </div>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
