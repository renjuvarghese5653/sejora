import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { PRODUCTS, CATEGORIES_LIST, OCCASIONS_LIST } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { SortOption } from "../types";
import { useCart } from "../context/CartContext";

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist } = useCart();

  // Extract query filters
  const categoryParam = searchParams.get("category") || "";
  const occasionParam = searchParams.get("occasion") || "";
  const filterParam = searchParams.get("filter") || ""; // 'new', 'featured', 'wishlist'

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [selectedOccasion, setSelectedOccasion] = useState<string>(occasionParam);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(25000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Sync state when query params change
  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
    if (occasionParam) setSelectedOccasion(occasionParam);
  }, [categoryParam, occasionParam]);

  // Extract unique colors and sizes from catalog
  const allColors = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.colors.forEach((c) => set.add(c)));
    return Array.from(set);
  }, []);

  const allSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.sizes.forEach((s) => set.add(s)));
    return Array.from(set);
  }, []);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Wishlist special view
      if (filterParam === "wishlist") {
        if (!wishlist.includes(product.id)) return false;
      }

      // New arrivals special view
      if (filterParam === "new" && !product.newArrival) return false;

      // Featured special view
      if (filterParam === "featured" && !product.featured) return false;

      // Category filter
      if (selectedCategory && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Subcategory filter
      if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
        return false;
      }

      // Occasion filter
      if (selectedOccasion && product.occasion.toLowerCase() !== selectedOccasion.toLowerCase()) {
        return false;
      }

      // Color filter
      if (selectedColor && !product.colors.includes(selectedColor)) {
        return false;
      }

      // Size filter
      if (selectedSize && !product.sizes.includes(selectedSize)) {
        return false;
      }

      // Price filter
      if (product.price > maxPrice) {
        return false;
      }

      // In stock
      if (inStockOnly && !product.available) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "newest") {
        return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      }
      if (sortBy === "price-asc") {
        return a.price - b.price;
      }
      if (sortBy === "price-desc") {
        return b.price - a.price;
      }
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      // default "featured"
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [
    filterParam,
    wishlist,
    selectedCategory,
    selectedSubcategory,
    selectedOccasion,
    selectedColor,
    selectedSize,
    maxPrice,
    inStockOnly,
    sortBy,
  ]);

  const clearAllFilters = () => {
    setSelectedCategory("");
    setSelectedSubcategory("");
    setSelectedOccasion("");
    setSelectedColor("");
    setSelectedSize("");
    setMaxPrice(25000);
    setInStockOnly(false);
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== "" ||
    selectedSubcategory !== "" ||
    selectedOccasion !== "" ||
    selectedColor !== "" ||
    selectedSize !== "" ||
    maxPrice < 25000 ||
    inStockOnly ||
    filterParam !== "";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Header Banner */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#8A642D] font-semibold mb-2">
          Sejora Atelier
        </p>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#171411]">
          {filterParam === "wishlist"
            ? "Your Saved Wishlist"
            : filterParam === "new"
            ? "New In Collection"
            : selectedCategory
            ? selectedCategory
            : "The Full Collection"}
        </h1>
        <p className="text-xs sm:text-sm text-[#3A3027]/75 mt-2">
          Handcrafted sarees, tailored couture suites, and 22k antique temple jewellery.
        </p>
      </div>

      {/* Top Filter & Sort Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-[#D4AF6A]/25 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 py-2 px-4 bg-[#FAF6F0] border border-[#D4AF6A]/40 text-xs uppercase tracking-wider font-semibold text-[#171411]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#8A642D]" />
            <span>Filters ({hasActiveFilters ? "Active" : "All"})</span>
          </button>

          <span className="text-xs tracking-wider uppercase text-[#8A642D]">
            Showing <strong className="text-[#171411] tabular-nums">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "Piece" : "Pieces"}
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="hidden lg:inline-flex items-center gap-1 text-xs text-[#8A642D] hover:text-red-700 transition-colors ml-2 underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <label htmlFor="sortBy" className="text-xs uppercase tracking-wider text-[#8A642D] font-medium shrink-0">
            Sort by:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-[#FAF6F0] border border-[#D4AF6A]/40 text-xs py-1.5 px-3 text-[#171411] focus:outline-none focus:border-[#8A642D]"
          >
            <option value="featured">Featured Pieces</option>
            <option value="newest">Newest Arrivals</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Main Layout: Sidebar (desktop) + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block space-y-7 p-6 bg-[#FAF6F0] border border-[#D4AF6A]/25">
          <div className="flex items-center justify-between pb-3 border-b border-[#D4AF6A]/20">
            <h3 className="font-editorial text-xl text-[#171411] font-semibold">
              Filter By
            </h3>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-[11px] uppercase tracking-wider text-[#8A642D] hover:text-red-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#8A642D] font-semibold mb-3">
              Category
            </h4>
            <div className="space-y-1.5 text-xs text-[#3A3027]">
              <button
                type="button"
                onClick={() => setSelectedCategory("")}
                className={`block w-full text-left py-1 transition-colors ${
                  selectedCategory === "" ? "font-bold text-[#8A642D]" : "hover:text-[#8A642D]"
                }`}
              >
                All Categories ({PRODUCTS.length})
              </button>
              {CATEGORIES_LIST.map((cat) => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`block w-full text-left py-1 transition-colors ${
                    selectedCategory.toLowerCase() === cat.name.toLowerCase()
                      ? "font-bold text-[#8A642D]"
                      : "hover:text-[#8A642D]"
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Occasion Filter */}
          <div className="pt-4 border-t border-[#D4AF6A]/20">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#8A642D] font-semibold mb-3">
              Occasion
            </h4>
            <div className="space-y-1.5 text-xs text-[#3A3027]">
              <button
                type="button"
                onClick={() => setSelectedOccasion("")}
                className={`block w-full text-left py-1 transition-colors ${
                  selectedOccasion === "" ? "font-bold text-[#8A642D]" : "hover:text-[#8A642D]"
                }`}
              >
                All Occasions
              </button>
              {OCCASIONS_LIST.map((occ) => (
                <button
                  key={occ}
                  type="button"
                  onClick={() => setSelectedOccasion(occ)}
                  className={`block w-full text-left py-1 transition-colors ${
                    selectedOccasion === occ ? "font-bold text-[#8A642D]" : "hover:text-[#8A642D]"
                  }`}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="pt-4 border-t border-[#D4AF6A]/20">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xs uppercase tracking-[0.18em] text-[#8A642D] font-semibold">
                Price Cap
              </h4>
              <span className="text-xs font-semibold tabular-nums text-[#171411]">
                Up to ₹{maxPrice.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min="1500"
              max="25000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#B88A3B]"
            />
          </div>

          {/* In Stock Only Toggle */}
          <div className="pt-4 border-t border-[#D4AF6A]/20 flex items-center justify-between">
            <label htmlFor="stockOnlyDesktop" className="text-xs uppercase tracking-wider text-[#3A3027] font-medium cursor-pointer">
              In Stock Only
            </label>
            <input
              id="stockOnlyDesktop"
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="w-4 h-4 accent-[#B88A3B]"
            />
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-[#FAF6F0] border border-[#D4AF6A]/25 p-8 space-y-4">
              <h3 className="font-editorial text-2xl text-[#171411]">
                No matching pieces found
              </h3>
              <p className="text-xs sm:text-sm text-[#3A3027]/75 max-w-sm mx-auto">
                Try widening your price range or clearing category filters to explore more of the collection.
              </p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="py-2.5 px-6 bg-[#3A3027] text-[#EFE4D2] text-xs uppercase tracking-wider font-semibold hover:bg-[#171411] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Mobile Filters Slide-over */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#171411]/60 backdrop-blur-xs"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF6F0] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#D4AF6A]/20">
                <h3 className="font-editorial text-2xl text-[#171411]">Filters</h3>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-[#3A3027]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#8A642D] font-semibold mb-2">
                  Category
                </h4>
                <div className="space-y-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("")}
                    className={`block w-full text-left py-1 ${
                      selectedCategory === "" ? "font-bold text-[#8A642D]" : ""
                    }`}
                  >
                    All Categories
                  </button>
                  {CATEGORIES_LIST.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedCategory(c.name)}
                      className={`block w-full text-left py-1 ${
                        selectedCategory === c.name ? "font-bold text-[#8A642D]" : ""
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div className="pt-4 border-t border-[#D4AF6A]/20">
                <h4 className="text-xs uppercase tracking-widest text-[#8A642D] font-semibold mb-2">
                  Occasion
                </h4>
                <div className="space-y-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedOccasion("")}
                    className={`block w-full text-left py-1 ${
                      selectedOccasion === "" ? "font-bold text-[#8A642D]" : ""
                    }`}
                  >
                    All Occasions
                  </button>
                  {OCCASIONS_LIST.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => setSelectedOccasion(o)}
                      className={`block w-full text-left py-1 ${
                        selectedOccasion === o ? "font-bold text-[#8A642D]" : ""
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="pt-4 border-t border-[#D4AF6A]/20">
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="uppercase text-[#8A642D] font-semibold tracking-wider">
                    Max Price
                  </span>
                  <span className="font-bold">₹{maxPrice.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="25000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#B88A3B]"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[#D4AF6A]/20 space-y-2">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#3A3027] text-[#EFE4D2] text-xs uppercase tracking-wider font-semibold"
              >
                Apply Filters ({filteredProducts.length})
              </button>
              <button
                type="button"
                onClick={clearAllFilters}
                className="w-full py-2 text-xs text-[#8A642D] hover:underline"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
