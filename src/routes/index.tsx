import ProductGrid from '@/components/ProductGrid/ProductGrid'
import type { Product } from '@/types'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  const products: Product[] = [
    {
      id: 1,
      name: "Black T-Shirt",
      description: "Lorem ipsum dolor",
      imageUrl: "http://localhost:3000/images/product-clothing-image-1.png",
      brand: "Levis",
      price: 100,
      url: "/products/slug",
      new: true
    },
    {
      id: 1,
      name: "Black T-Shirt",
      description: "Lorem ipsum dolor",
      imageUrl: "http://localhost:3000/images/product-clothing-image-2.png",
      brand: "Levis",
      price: 100,
      url: "/products/slug",
      new: true
    },{
      id: 1,
      name: "Black T-Shirt",
      description: "Lorem ipsum dolor",
      imageUrl: "http://localhost:3000/images/product-clothing-image-3.png",
      brand: "Levis",
      price: 100,
      url: "/products/slug",
      new: true
    }
    ,{
      id: 1,
      name: "Black T-Shirt",
      description: "Lorem ipsum dolor",
      imageUrl: "http://localhost:3000/images/product-clothing-image-4.png",
      brand: "Levis",
      price: 100,
      url: "/products/slug",
      new: true
    }
  ];

  return (
    <ProductGrid products={products} />
  )
}