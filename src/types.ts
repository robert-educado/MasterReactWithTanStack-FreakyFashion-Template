export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  imageUrl: string;
  url: string;
  new: boolean;
}

export interface BasketItem {
  product: Product;
  quantity: number;
}

export interface Basket {
  items: BasketItem[];
  discountCode?: string
}

