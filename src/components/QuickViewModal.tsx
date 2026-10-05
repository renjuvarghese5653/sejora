import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ShoppingBag, MessageCircle, Heart, Check, ExternalLink } from "lucide-react";
import { useCart } from "../context/CartContext";
import { STORE_CONFIG, generateWhatsAppProductUrl } from "../config/store";

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, isInWishlist, toggleWishlist } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const currentSize = selectedSize || (product.sizes.length > 0 ? product.sizes[0] : "Standard");
  const currentColor = selectedColor || (product.colors.length > 0 ? product.colors[0] : "Standard");
  const inWish = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, quantity, currentSize, currentColor);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setQuickViewProduct(null);
    }, 800);
  };

  const handleWhatsApp = () => {
    const url = generateWhatsAppProductUrl(product.name, product.price, currentSize, currentColor);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171411]/70 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FAF6F0] w-full max-w-3xl shadow-2xl border border-[#D4AF6A]/40 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FAF6F0]/90 text-[#3A3027] hover:text-[#8A642D] transition-colors rounded-full"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Image Gallery */}
          <div className="bg-[#EFE4D2]/40 p-6 flex flex-col justify-between">
            <div className="aspect-[3/4] w-full overflow-hidden bg-white border border-[#D4AF6A]/20 shadow-xs mb-3">
              <img
                src={product.images[selectedImage] || product.thumbnail}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Thumbnail Selectors */}
            {product.images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-12 h-14 border overflow-hidden transition-all ${
                      selectedImage === idx
                        ? "border-[#8A642D] ring-1 ring-[#8A642D]"
                        : "border-[#D4AF6A]/30 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Purchase Module */}
          <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#FAF6F0]">
            <div>
              {/* Category */}
              <div className="text-xs uppercase tracking-[0.2em] text-[#8A642D] font-medium mb-1">
                {product.category} · {product.occasion}
              </div>

              {/* Title */}
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#171411] font-semibold leading-tight">
                {product.name}
              </h2>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-xl font-bold text-[#171411] tabular-nums">
                  {STORE_CONFIG.currencySymbol}{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8A642D]/70 line-through tabular-nums">
                    {STORE_CONFIG.currencySymbol}{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-xs text-[#25D366] font-medium tracking-wide">
                  {product.stockLabel}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-[13px] text-[#3A3027]/85 leading-relaxed line-clamp-3">
                {product.description}
              </p>

              {/* Color Select */}
              {product.colors.length > 0 && (
                <div className="mt-5">
                  <div className="text-[11px] uppercase tracking-wider text-[#8A642D] font-medium mb-2">
                    Color: <span className="text-[#171411] font-semibold">{currentColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`text-xs py-1 px-3 border transition-colors ${
                          currentColor === c
                            ? "bg-[#3A3027] text-[#EFE4D2] border-[#3A3027]"
                            : "bg-white text-[#3A3027] border-[#D4AF6A]/40 hover:border-[#8A642D]"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Select */}
              {product.sizes.length > 0 && (
                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-wider text-[#8A642D] font-medium mb-2">
                    Size: <span className="text-[#171411] font-semibold">{currentSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`text-xs py-1 px-3 border transition-colors ${
                          currentSize === s
                            ? "bg-[#3A3027] text-[#EFE4D2] border-[#3A3027]"
                            : "bg-white text-[#3A3027] border-[#D4AF6A]/40 hover:border-[#8A642D]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-wider text-[#8A642D] font-medium">
                  Quantity:
                </span>
                <div className="flex items-center border border-[#D4AF6A]/40 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-2.5 py-1 text-sm text-[#3A3027] hover:text-[#8A642D]"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold tabular-nums text-[#171411]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-2.5 py-1 text-sm text-[#3A3027] hover:text-[#8A642D]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 pt-5 border-t border-[#D4AF6A]/20 space-y-2.5">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={justAdded}
                  className="flex-1 py-3 px-4 bg-[#3A3027] hover:bg-[#171411] text-[#EFE4D2] text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors border border-[#D4AF6A]/50"
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4 text-[#D4AF6A]" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#D4AF6A]" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 border transition-colors ${
                    inWish
                      ? "bg-[#EFE4D2] border-[#8A642D] text-[#8A642D]"
                      : "bg-white border-[#D4AF6A]/40 text-[#3A3027] hover:text-[#8A642D]"
                  }`}
                  aria-label="Wishlist toggle"
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${inWish ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Product WhatsApp Enquiry */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire on WhatsApp</span>
              </button>

              <div className="text-center pt-1">
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#8A642D] hover:text-[#171411] font-medium"
                >
                  <span>View Full Details & Sizing Guide</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
