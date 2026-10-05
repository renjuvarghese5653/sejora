import React from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, MessageCircle, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { STORE_CONFIG, generateWhatsAppCartUrl } from "../config/store";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartItemCount,
  } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppEnquiry = () => {
    const formattedItems = cart.map((item) => ({
      id: item.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      selectedSize: item.selectedSize,
      selectedColor: item.selectedColor,
    }));

    const url = generateWhatsAppCartUrl(formattedItems, cartTotal);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171411]/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full flex">
        <div className="w-full bg-[#FAF6F0] shadow-2xl border-l border-[#D4AF6A]/30 flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-[#D4AF6A]/20 bg-[#FAF6F0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#8A642D]" />
              <h2 className="font-editorial text-xl text-[#171411] font-semibold tracking-wider">
                Shopping Bag
              </h2>
              <span className="text-xs text-[#8A642D] tracking-widest uppercase font-medium">
                ({cartItemCount} {cartItemCount === 1 ? "Item" : "Items"})
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#3A3027] hover:text-[#8A642D] transition-colors"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EFE4D2]/60 flex items-center justify-center text-[#8A642D] mb-1">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-editorial text-2xl text-[#171411]">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#3A3027]/75 max-w-xs leading-relaxed">
                  Discover our handcrafted sarees, festive suits, and heirloom jewellery collections.
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 py-2.5 px-6 bg-[#3A3027] text-[#EFE4D2] text-xs font-semibold uppercase tracking-wider hover:bg-[#171411] transition-colors border border-[#D4AF6A]/40"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-[11px] text-[#8A642D] uppercase tracking-wider pb-2 border-b border-[#D4AF6A]/15">
                  <span>Selected Pieces</span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="hover:text-red-700 underline transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3.5 p-3 bg-white border border-[#D4AF6A]/20 shadow-xs relative"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-[#EFE4D2]/40 overflow-hidden shrink-0">
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-editorial text-base text-[#171411] font-medium leading-snug line-clamp-1">
                            <Link
                              to={`/product/${item.product.id}`}
                              onClick={() => setIsCartOpen(false)}
                              className="hover:text-[#8A642D]"
                            >
                              {item.product.name}
                            </Link>
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#8A642D]/60 hover:text-red-600 transition-colors p-1"
                            title="Remove item"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Variants */}
                        <div className="text-[11px] text-[#8A642D] tracking-wide mt-0.5 space-x-2">
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                          {item.selectedColor && <span>· {item.selectedColor}</span>}
                        </div>
                      </div>

                      {/* Stepper & Line Price */}
                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-[#D4AF6A]/15">
                        <div className="flex items-center border border-[#D4AF6A]/40 bg-[#FAF6F0]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2 text-[#3A3027] hover:text-[#8A642D]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold tabular-nums text-[#171411]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 text-[#3A3027] hover:text-[#8A642D]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-sm font-semibold text-[#171411] tabular-nums">
                            {STORE_CONFIG.currencySymbol}
                            {(item.product.price * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer & WhatsApp Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#D4AF6A]/30 bg-[#FAF6F0] space-y-4">
              {/* Summary Breakdown */}
              <div className="space-y-1.5 text-xs text-[#3A3027]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#171411] tabular-nums">
                    {STORE_CONFIG.currencySymbol}{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-[#8A642D]">
                  <span>Shipping & Delivery</span>
                  <span className="uppercase text-[11px] font-medium tracking-wider">
                    Calculated on WhatsApp
                  </span>
                </div>
                <div className="pt-2 border-t border-[#D4AF6A]/20 flex justify-between items-baseline">
                  <span className="font-editorial text-lg text-[#171411] font-semibold">
                    Total Estimated
                  </span>
                  <span className="text-xl font-bold text-[#171411] tabular-nums">
                    {STORE_CONFIG.currencySymbol}{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* PRIMARY CTA: ENQUIRE ON WHATSAPP */}
              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>ENQUIRE ON WHATSAPP</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#8A642D] uppercase tracking-wider text-center">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="hover:underline"
                >
                  View Full Bag Page
                </Link>
                <span>·</span>
                <span>Personal Concierge Support</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
