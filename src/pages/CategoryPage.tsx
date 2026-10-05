import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PRODUCTS, CATEGORIES_LIST } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const currentCategory = CATEGORIES_LIST.find(
    (c) => c.slug.toLowerCase() === (categorySlug || "").toLowerCase()
  );

  // Match products by category name
  const categoryProducts = PRODUCTS.filter((p) => {
    if (!currentCategory) return false;
    return p.category.toLowerCase() === currentCategory.name.toLowerCase();
  });

  if (!currentCategory) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-editorial text-3xl text-[#171411]">Category Not Found</h1>
        <p className="text-xs text-[#3A3027]/70">
          The requested category could not be located in our atelier catalog.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 py-2 px-6 bg-[#3A3027] text-[#EFE4D2] text-xs uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Shop</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Category Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8A642D]">
          <Link to="/shop" className="hover:underline">
            Atelier
          </Link>
          <span>/</span>
          <span>Category</span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#171411]">
          {currentCategory.name}
        </h1>
        <p className="text-xs sm:text-sm text-[#3A3027]/80 leading-relaxed font-light">
          {currentCategory.desc}
        </p>
        <div className="w-12 h-0.5 bg-[#D4AF6A] mx-auto mt-4" />
      </div>

      {/* Subcategory Pills or Highlights */}
      <div className="flex items-center justify-between pb-4 border-b border-[#D4AF6A]/25">
        <span className="text-xs uppercase tracking-wider text-[#8A642D]">
          Curated Selection: <strong className="text-[#171411] tabular-nums">{categoryProducts.length}</strong> {categoryProducts.length === 1 ? "Piece" : "Pieces"}
        </span>

        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs text-[#8A642D] hover:text-[#171411] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>View All Collections</span>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
