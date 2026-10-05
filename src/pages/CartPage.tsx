import React from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, MessageCircle, ArrowLeft, ShieldCheck, Truck, RotateCcw, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { STORE_CONFIG, generateWhatsAppCartUrl } from "../config/store";

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartItemCount } = useCart();

  const handleWhatsAppOrder = () => {
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

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#EFE4D2]/60 text-[#8A642D] mx-auto flex items-center justify-center">
          <ShoppingBag className="w-10 h-10 stroke-1" />
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#171411]">
          Your Shopping Bag is Empty
        </h1>
        <p className="text-xs sm:text-sm text-[#3A3027]/75 max-w-md mx-auto leading-relaxed">
          Looks like you haven't added any pieces yet. Explore our handcrafted sarees, royal anarkalis, and temple jewellery.
        </p>
        <div className="pt-2">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 py-3 px-8 bg-[#3A3027] hover:bg-[#171411] text-[#EFE4D2] text-xs uppercase tracking-widest font-semibold transition-colors border border-[#D4AF6A]/40"
          >
            <span>Explore The Collection</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      
      {/* Page Title */}
      <div className="border-b border-[#D4AF6A]/25 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A642D] font-semibold mb-1">
            Sejora Client Bag
          </p>
          <h1 className="font-editorial text-3xl sm:text-4xl text-[#171411]">
            Review Your Selection
          </h1>
        </div>
        <div className="flex items-center gap-4 text-xs text-[#8A642D]">
          <span>{cartItemCount} {cartItemCount === 1 ? "Piece" : "Pieces"}</span>
          <span>·</span>
          <button
            type="button"
            onClick={clearCart}
            className="hover:text-red-700 underline transition-colors"
          >
            Clear Entire Bag
          </button>
        </div>
      </div>

      {/* Main Grid: Items List Left + WhatsApp Checkout Summary Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: Cart Items Table */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-6 bg-white border border-[#D4AF6A]/25 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between shadow-xs"
            >
              {/* Image & Title */}
              <div className="flex items-center gap-4">
                <Link
                  to={`/product/${item.product.id}`}
                  className="w-20 h-28 bg-[#EFE4D2]/40 overflow-hidden shrink-0 border border-[#D4AF6A]/20"
                >
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#8A642D]">
                    {item.product.category}
                  </span>
                  <h3 className="font-editorial text-lg sm:text-xl text-[#171411] font-medium leading-snug">
                    <Link to={`/product/${item.product.id}`} className="hover:text-[#8A642D]">
                      {item.product.name}
                    </Link>
                  </h3>
                  <div className="text-xs text-[#8A642D] space-x-2">
                    {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                    {item.selectedColor && <span>· Color: {item.selectedColor}</span>}
                  </div>
                  <div className="text-sm font-semibold text-[#171411] pt-1 tabular-nums sm:hidden">
                    {STORE_CONFIG.currencySymbol}{item.product.price.toLocaleString("en-IN")} each
                  </div>
                </div>
              </div>

              {/* Quantity Stepper & Subtotal */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#D4AF6A]/15">
                <div className="hidden sm:block text-right">
                  <span className="text-sm font-semibold text-[#171411] tabular-nums block">
                    {STORE_CONFIG.currencySymbol}{item.product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[10px] text-[#8A642D]">per item</span>
                </div>

                {/* Stepper */}
                <div className="flex items-center border border-[#D4AF6A]/40 bg-[#FAF6F0]">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2.5 py-1 text-sm text-[#3A3027] hover:text-[#8A642D]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-3 text-xs font-semibold tabular-nums text-[#171411]">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2.5 py-1 text-sm text-[#3A3027] hover:text-[#8A642D]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Line Total */}
                <div className="text-right min-w-[5rem]">
                  <span className="text-base font-bold text-[#171411] tabular-nums">
                    {STORE_CONFIG.currencySymbol}
                    {(item.product.price * item.quantity).toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="p-1.5 text-[#8A642D]/60 hover:text-red-700 transition-colors"
                  title="Remove from bag"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}

          <div className="pt-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A642D] hover:text-[#171411] font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Right: WhatsApp Order Summary Module */}
        <div className="lg:col-span-4 bg-[#FAF6F0] border border-[#D4AF6A]/30 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-[#D4AF6A]/25 pb-4">
            <h2 className="font-editorial text-2xl text-[#171411] font-semibold">
              Order Enquiry Summary
            </h2>
            <p className="text-xs text-[#8A642D] mt-1">
              Direct checkout concierge via WhatsApp
            </p>
          </div>

          <div className="space-y-3 text-xs text-[#3A3027]">
            <div className="flex justify-between">
              <span>Subtotal ({cartItemCount} items)</span>
              <span className="font-semibold text-[#171411] tabular-nums">
                {STORE_CONFIG.currencySymbol}{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between text-[#8A642D]">
              <span>UK & Worldwide Dispatch</span>
              <span className="uppercase text-[11px] font-medium tracking-wider">
                Confirmed via WhatsApp
              </span>
            </div>

            <div className="flex justify-between text-[#8A642D]">
              <span>Custom Tailoring / Stitching</span>
              <span className="uppercase text-[11px] font-medium tracking-wider">
                Available on request
              </span>
            </div>

            <div className="pt-3 border-t border-[#D4AF6A]/20 flex justify-between items-baseline">
              <span className="font-editorial text-xl text-[#171411] font-semibold">
                Estimated Total
              </span>
              <span className="text-2xl font-bold text-[#171411] tabular-nums">
                {STORE_CONFIG.currencySymbol}{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* PRIMARY ORDER CTA */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase flex items-center justify-center gap-2.5 shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>ENQUIRE ON WHATSAPP</span>
            </button>
            <p className="text-[11px] text-[#8A642D] text-center leading-relaxed">
              Clicking above opens a WhatsApp chat with our boutique concierge pre-filled with your items, sizing, and pricing details.
            </p>
          </div>

          {/* Assurance bullets */}
          <div className="pt-6 border-t border-[#D4AF6A]/20 space-y-3 text-xs text-[#3A3027]">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#8A642D] shrink-0" />
              <span>100% Genuine Certified Indian Handloom & Silk</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-[#8A642D] shrink-0" />
              <span>Complimentary shipping over £100 / ₹10,000</span>
            </div>
            <div className="flex items-center gap-2.5">
              <RotateCcw className="w-4 h-4 text-[#8A642D] shrink-0" />
              <span>Direct WhatsApp communication with store stylists</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
