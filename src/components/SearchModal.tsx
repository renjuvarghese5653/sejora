import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, X, ArrowRight, Tag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";
import { STORE_CONFIG } from "../config/store";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchSub = p.subcategory.toLowerCase().includes(q);
      const matchMat = p.material.toLowerCase().includes(q);
      const matchOcc = p.occasion.toLowerCase().includes(q);
      const matchColor = p.colors.some((c) => c.toLowerCase().includes(q));

      return matchName || matchCat || matchSub || matchMat || matchOcc || matchColor;
    });
  }, [query]);

  if (!isSearchOpen) return null;

  const popularSearches = [
    "Organza Saree",
    "Kerala Kasavu",
    "Anarkali",
    "22k Antique Jewellery",
    "Bridal Lehenga",
    "Gold Jhumka"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171411]/75 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="min-h-screen px-4 pt-16 pb-20 text-center sm:p-0 flex items-start justify-center">
        <div className="relative w-full max-w-2xl bg-[#FAF6F0] shadow-2xl border border-[#D4AF6A]/30 mt-10 md:mt-20 overflow-hidden text-left animate-in slide-in-from-top-6 duration-200">
          
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-[#D4AF6A]/20 flex items-center gap-3 bg-white">
            <Search className="w-5 h-5 text-[#8A642D]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sarees, kurtis, jewellery, occasions..."
              className="flex-1 bg-transparent text-base sm:text-lg text-[#171411] placeholder:text-[#3A3027]/40 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="p-1 text-xs text-[#8A642D] hover:text-[#171411]"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-[#3A3027] hover:text-[#8A642D]"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Results or Suggestions */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
            {query.trim() === "" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8A642D] font-medium">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Popular Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setQuery(item)}
                      className="text-xs py-1.5 px-3 bg-[#EFE4D2]/60 hover:bg-[#EFE4D2] text-[#3A3027] border border-[#D4AF6A]/30 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="py-12 text-center space-y-2">
                <p className="font-editorial text-xl text-[#171411]">
                  No pieces found for "{query}"
                </p>
                <p className="text-xs text-[#3A3027]/70">
                  Try searching for sarees, silk, lehenga, jhumkas, or wedding.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-wider text-[#8A642D] font-medium">
                  Found {searchResults.length} {searchResults.length === 1 ? "piece" : "pieces"}
                </p>

                <div className="divide-y divide-[#D4AF6A]/20">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="py-3 flex items-center justify-between gap-4 hover:bg-[#EFE4D2]/30 px-2 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={product.thumbnail}
                          alt={product.name}
                          className="w-12 h-14 object-cover border border-[#D4AF6A]/20"
                        />
                        <div>
                          <h4 className="font-editorial text-base text-[#171411] group-hover:text-[#8A642D] transition-colors line-clamp-1">
                            {product.name}
                          </h4>
                          <span className="text-[11px] text-[#8A642D] uppercase tracking-wider">
                            {product.category} · {product.occasion}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm font-semibold text-[#171411] tabular-nums">
                          {STORE_CONFIG.currencySymbol}{product.price.toLocaleString("en-IN")}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#8A642D]/50 group-hover:text-[#8A642D] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-3 bg-[#EFE4D2]/40 border-t border-[#D4AF6A]/20 text-[11px] text-center text-[#8A642D] uppercase tracking-widest">
            Sejora Client Concierge · Real-time inventory
          </div>

        </div>
      </div>
    </div>
  );
};
