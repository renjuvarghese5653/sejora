import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, ShoppingBag, MessageCircle } from "lucide-react";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import { STORE_CONFIG, generateWhatsAppProductUrl } from "../config/store";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isInWishlist, toggleWishlist, setQuickViewProduct } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  const inWish = isInWishlist(product.id);
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const currentImage =
    isHovered && product.images.length > 1 ? product.images[1] : product.thumbnail;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 1500);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleWhatsAppEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(
      generateWhatsAppProductUrl(product.name, product.price),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="group relative flex flex-col bg-[#FAF6F0] border border-[#D4AF6A]/20 hover:border-[#D4AF6A]/60 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Stage */}
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-[3/4] w-full overflow-hidden bg-[#EFE4D2]/40"
      >
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback gracefully to first image if secondary is missing
            const target = e.target as HTMLImageElement;
            if (target.src !== product.thumbnail) {
              target.src = product.thumbnail;
            }
          }}
        />

        {/* Subtle Status Label (Zero-Pill discipline: quiet unboxed text) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.newArrival && (
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A642D] bg-[#FAF6F0]/90 px-2 py-0.5 border-l-2 border-[#D4AF6A]">
              New In
            </span>
          )}
          {discountPercent > 0 && (
            <span className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[#3A3027] bg-[#FAF6F0]/90 px-2 py-0.5">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#FAF6F0]/90 backdrop-blur-xs flex items-center justify-center text-[#3A3027] hover:text-[#B88A3B] transition-colors shadow-xs"
          aria-label={inWish ? "Remove from wishlist" : "Add to wishlist"}
          title={inWish ? "Saved in wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              inWish ? "fill-[#B88A3B] text-[#B88A3B]" : "text-[#3A3027]"
            }`}
          />
        </button>

        {/* Quick Action Overlay (Slide up on desktop hover) */}
        <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-[#171411]/70 via-[#171411]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={handleQuickView}
            className="flex-1 py-2 px-2 bg-[#FAF6F0] hover:bg-white text-[#171411] text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            title="Quick view"
          >
            <Eye className="w-3.5 h-3.5 text-[#8A642D]" />
            <span className="hidden sm:inline">Quick View</span>
          </button>

          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex-1 py-2 px-2 bg-[#3A3027] hover:bg-[#171411] text-[#EFE4D2] text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors border border-[#D4AF6A]/50 shadow-xs"
            title="Add to bag"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF6A]" />
            <span className="hidden sm:inline">Add to Bag</span>
          </button>
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-[#FAF6F0]">
        <div>
          {/* Category & Material kicker */}
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#8A642D] mb-1 font-medium">
            <span>{product.subcategory || product.category}</span>
            <span aria-hidden="true" className="text-[#D4AF6A]">·</span>
            <span className="truncate">{product.occasion}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-editorial text-base sm:text-lg text-[#171411] group-hover:text-[#8A642D] transition-colors line-clamp-1 font-medium leading-snug">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
        </div>

        {/* Pricing & WhatsApp Direct link */}
        <div className="mt-3 pt-2.5 border-t border-[#D4AF6A]/20 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-semibold text-[#171411] tabular-nums">
              {STORE_CONFIG.currencySymbol}{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8A642D]/70 line-through tabular-nums">
                {STORE_CONFIG.currencySymbol}{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleWhatsAppEnquire}
            className="p-1.5 text-[#3A3027] hover:text-[#25D366] transition-colors"
            title="Enquire on WhatsApp"
            aria-label="Enquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#8A642D] hover:text-[#25D366] transition-colors" />
          </button>
        </div>

        {/* Added to Bag Feedback Banner */}
        {addedNotice && (
          <div className="absolute inset-x-0 bottom-0 bg-[#3A3027] text-[#D4AF6A] text-[11px] py-1 text-center font-medium tracking-wider animate-in fade-in">
            ✓ Added to Bag
          </div>
        )}
      </div>
    </div>
  );
};
