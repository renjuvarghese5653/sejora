import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShoppingBag,
  Heart,
  MessageCircle,
  Truck,
  Shield,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
  Share2,
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { STORE_CONFIG, generateWhatsAppProductUrl } from "../config/store";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, isInWishlist, toggleWishlist } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Accordion tabs
  const [openAccordion, setOpenAccordion] = useState<string>("details");

  // Reset state when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    if (product) {
      setSelectedSize(product.sizes.length > 0 ? product.sizes[0] : "");
      setSelectedColor(product.colors.length > 0 ? product.colors[0] : "");
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="font-editorial text-3xl text-[#171411]">Piece Not Found</h1>
        <p className="text-xs sm:text-sm text-[#3A3027]/75">
          This piece might have been archived or is temporarily unavailable.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 py-3 px-8 bg-[#3A3027] text-[#EFE4D2] text-xs uppercase tracking-widest font-semibold"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  const inWish = isInWishlist(product.id);
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleWhatsAppEnquiry = () => {
    const url = generateWhatsAppProductUrl(
      product.name,
      product.price,
      selectedSize,
      selectedColor
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Related products (same category or occasion)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.occasion === product.occasion)
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8A642D]">
        <Link to="/" className="hover:text-[#171411]">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-[#171411]">Shop</Link>
        <span>/</span>
        <Link to={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[#171411]">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[#171411] font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Grid: Gallery Left + Contiguous Purchase Module Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left: Gallery (Sticky on large screens) */}
        <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
          
          {/* Thumbnails Column */}
          {product.images.length > 1 && (
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-20 shrink-0 pb-2 sm:pb-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 sm:w-20 aspect-[3/4] overflow-hidden border transition-all shrink-0 ${
                    activeImageIndex === idx
                      ? "border-[#8A642D] ring-1 ring-[#8A642D]"
                      : "border-[#D4AF6A]/30 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}

          {/* Main Large Stage */}
          <div className="flex-1 aspect-[3/4] bg-[#EFE4D2]/40 border border-[#D4AF6A]/30 overflow-hidden relative shadow-xs">
            <img
              src={product.images[activeImageIndex] || product.thumbnail}
              alt={product.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105 cursor-zoom-in"
            />
            {product.newArrival && (
              <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8A642D] bg-[#FAF6F0]/95 px-3 py-1 border-l-2 border-[#D4AF6A]">
                New In Atelier
              </span>
            )}
          </div>
        </div>

        {/* Right: Purchase & Details Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Category & Action row */}
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-[0.22em] text-[#8A642D] font-semibold">
              {product.category} · {product.occasion}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="p-2 text-[#3A3027] hover:text-[#8A642D] transition-colors relative"
                title="Copy piece link"
              >
                <Share2 className="w-4 h-4" />
                {copiedLink && (
                  <span className="absolute right-0 -bottom-6 text-[10px] bg-[#171411] text-[#EFE4D2] px-2 py-0.5 whitespace-nowrap">
                    Link Copied!
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className="p-2 text-[#3A3027] hover:text-[#8A642D] transition-colors"
                title="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${inWish ? "fill-[#B88A3B] text-[#B88A3B]" : ""}`} />
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-editorial text-3xl sm:text-4xl text-[#171411] font-semibold leading-tight">
            {product.name}
          </h1>

          {/* Price & Stock */}
          <div className="flex items-baseline gap-4 py-2 border-y border-[#D4AF6A]/25">
            <span className="text-2xl sm:text-3xl font-bold text-[#171411] tabular-nums">
              {STORE_CONFIG.currencySymbol}{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="text-base text-[#8A642D]/70 line-through tabular-nums">
                {STORE_CONFIG.currencySymbol}{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="text-xs uppercase tracking-wider text-[#8A642D] font-semibold">
                Save {discountPercent}%
              </span>
            )}
            <span className="ml-auto text-xs text-[#25D366] font-medium tracking-wide">
              {product.stockLabel}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#3A3027]/85 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Key Attributes */}
          <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#FAF6F0] border border-[#D4AF6A]/20 text-xs">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#8A642D] block">
                Fabric / Material
              </span>
              <span className="font-medium text-[#171411] mt-0.5 block">{product.material}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#8A642D] block">
                Occasion Styling
              </span>
              <span className="font-medium text-[#171411] mt-0.5 block">{product.occasion}</span>
            </div>
          </div>

          {/* Color Selector */}
          {product.colors.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wider text-[#8A642D] font-semibold mb-2">
                Color Shade: <span className="text-[#171411] font-bold">{selectedColor}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`py-1.5 px-3.5 text-xs tracking-wider border transition-all ${
                      selectedColor === color
                        ? "bg-[#3A3027] text-[#EFE4D2] border-[#3A3027]"
                        : "bg-white text-[#3A3027] border-[#D4AF6A]/40 hover:border-[#8A642D]"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wider text-[#8A642D] font-semibold mb-2">
                Size / Sizing: <span className="text-[#171411] font-bold">{selectedSize}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-1.5 px-3.5 text-xs tracking-wider border transition-all ${
                      selectedSize === size
                        ? "bg-[#3A3027] text-[#EFE4D2] border-[#3A3027]"
                        : "bg-white text-[#3A3027] border-[#D4AF6A]/40 hover:border-[#8A642D]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-[#8A642D] font-semibold">
              Quantity:
            </span>
            <div className="flex items-center border border-[#D4AF6A]/40 bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 text-sm text-[#3A3027] hover:text-[#8A642D]"
              >
                -
              </button>
              <span className="px-4 text-xs font-semibold tabular-nums text-[#171411]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1.5 text-sm text-[#3A3027] hover:text-[#8A642D]"
              >
                +
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            {/* ADD TO BAG */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-3.5 px-6 bg-[#3A3027] hover:bg-[#171411] text-[#EFE4D2] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 border border-[#D4AF6A]/50 transition-all duration-200 shadow-xs"
            >
              {addedNotice ? (
                <>
                  <Check className="w-4 h-4 text-[#D4AF6A]" />
                  <span>Added to Shopping Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#D4AF6A]" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>

            {/* ENQUIRE ON WHATSAPP */}
            <button
              type="button"
              onClick={handleWhatsAppEnquiry}
              className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>ENQUIRE ON WHATSAPP</span>
            </button>
          </div>

          {/* Trust markers */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#D4AF6A]/20 text-[11px] text-[#3A3027] text-center">
            <div className="flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-[#8A642D]" />
              <span>UK & Global Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-4 h-4 text-[#8A642D]" />
              <span>100% Authentic Handloom</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RotateCcw className="w-4 h-4 text-[#8A642D]" />
              <span>WhatsApp Styling Support</span>
            </div>
          </div>

          {/* Accordion Sections: Details, Shipping, Care */}
          <div className="pt-6 border-t border-[#D4AF6A]/25 space-y-3">
            
            {/* Product Details Tab */}
            <div className="border border-[#D4AF6A]/25 bg-[#FAF6F0]">
              <button
                type="button"
                onClick={() => setOpenAccordion(openAccordion === "details" ? "" : "details")}
                className="w-full p-3.5 flex items-center justify-between text-left font-editorial text-lg text-[#171411] font-semibold"
              >
                <span>Product Specifications</span>
                {openAccordion === "details" ? <ChevronUp className="w-4 h-4 text-[#8A642D]" /> : <ChevronDown className="w-4 h-4 text-[#8A642D]" />}
              </button>
              {openAccordion === "details" && (
                <div className="p-4 pt-0 text-xs text-[#3A3027]/85 space-y-2 border-t border-[#D4AF6A]/15">
                  {product.details?.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#8A642D] mt-0.5">·</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                  <div className="mt-2 pt-2 border-t border-[#D4AF6A]/15 text-[11px] text-[#8A642D]">
                    Authentic Sejora hallmark guaranteed.
                  </div>
                </div>
              )}
            </div>

            {/* Shipping Information Tab */}
            <div className="border border-[#D4AF6A]/25 bg-[#FAF6F0]">
              <button
                type="button"
                onClick={() => setOpenAccordion(openAccordion === "shipping" ? "" : "shipping")}
                className="w-full p-3.5 flex items-center justify-between text-left font-editorial text-lg text-[#171411] font-semibold"
              >
                <span>Shipping & Delivery</span>
                {openAccordion === "shipping" ? <ChevronUp className="w-4 h-4 text-[#8A642D]" /> : <ChevronDown className="w-4 h-4 text-[#8A642D]" />}
              </button>
              {openAccordion === "shipping" && (
                <div className="p-4 pt-0 text-xs text-[#3A3027]/85 space-y-2 border-t border-[#D4AF6A]/15">
                  <p>
                    <strong>UK Express Delivery:</strong> Dispatched from London warehouse within 24-48 hours. Royal Mail Tracked 24.
                  </p>
                  <p>
                    <strong>Worldwide Express:</strong> Dispatched via DHL Express (3-6 business days delivery).
                  </p>
                  <p>
                    Custom blouse tailoring and falls/pico stitching may require an additional 3-5 days.
                  </p>
                </div>
              )}
            </div>

            {/* Care Instructions Tab */}
            <div className="border border-[#D4AF6A]/25 bg-[#FAF6F0]">
              <button
                type="button"
                onClick={() => setOpenAccordion(openAccordion === "care" ? "" : "care")}
                className="w-full p-3.5 flex items-center justify-between text-left font-editorial text-lg text-[#171411] font-semibold"
              >
                <span>Fabric Care & Storage</span>
                {openAccordion === "care" ? <ChevronUp className="w-4 h-4 text-[#8A642D]" /> : <ChevronDown className="w-4 h-4 text-[#8A642D]" />}
              </button>
              {openAccordion === "care" && (
                <div className="p-4 pt-0 text-xs text-[#3A3027]/85 space-y-2 border-t border-[#D4AF6A]/15">
                  {product.care?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#8A642D] mt-0.5">·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="pt-16 border-t border-[#D4AF6A]/25">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8A642D] font-semibold mb-1">
              You May Also Adore
            </p>
            <h2 className="font-editorial text-3xl text-[#171411]">
              Complementary Pieces
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
