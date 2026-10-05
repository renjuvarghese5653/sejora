export type ProductCategory =
  | "Sarees"
  | "Kurtis"
  | "Salwar Suits"
  | "Lehengas"
  | "Blouses"
  | "Jewellery"
  | "Co-ord Sets";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  thumbnail: string;
  sizes: string[];
  colors: string[];
  material: string;
  occasion: "Bridal" | "Festive" | "Wedding" | "Everyday Elegance" | "Party" | "Traditional";
  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
  available: boolean;
  stockLabel: string;
  details?: string[];
  care?: string[];
}

export interface CartItem {
  id: string; // generated unique id: `${product.id}-${size}-${color}`
  productId: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export type SortOption =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "name-asc";

export interface FilterState {
  category: string;
  subcategory: string;
  occasion: string;
  color: string;
  size: string;
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  searchQuery: string;
}
