import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X, ChevronRight, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { STORE_CONFIG } from "../config/store";

export const Header: React.FC = () => {
  const { cartItemCount, wishlist, setIsCartOpen, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "WOMEN", href: "/shop" },
    { label: "SAREES", href: "/category/sarees" },
    { label: "JEWELLERY", href: "/category/jewellery" },
    { label: "COLLECTIONS", href: "/shop?filter=featured" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#3A3027] text-[#EFE4D2] text-[11px] md:text-xs tracking-[0.18em] uppercase py-2 px-4 text-center font-medium border-b border-[#8A642D]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span>Complimentary Worldwide & UK Shipping on orders above £100 / ₹10,000</span>
          <span className="hidden md:inline text-[#D4AF6A]">·</span>
          <a
            href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Sejora, I would like to enquire about bespoke styling assistance.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-[#D4AF6A] hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-xs border-b border-[#D4AF6A]/25 py-2.5"
            : "bg-[#FAF6F0] border-b border-[#D4AF6A]/20 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Mobile Hamburger + Brand Logo Lockup */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#3A3027] hover:text-[#B88A3B] transition-colors focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#D4AF6A] shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="./sejora-logo.png"
                    alt="Sejora Emblem"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image path differs
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-editorial text-2xl sm:text-3xl tracking-[0.14em] text-[#171411] font-semibold leading-tight group-hover:text-[#8A642D] transition-colors">
                    SÉJORA
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#8A642D] uppercase font-medium -mt-0.5">
                    Womenswear
                  </span>
                </div>
              </Link>
            </div>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] tracking-[0.18em] font-medium text-[#3A3027]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href.includes("category") && location.pathname.includes(link.href));
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative py-1 transition-colors duration-200 hover:text-[#B88A3B] ${
                      isActive ? "text-[#8A642D] font-semibold" : ""
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF6A]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Header Actions (Search, Wishlist, Bag) */}
            <div className="flex items-center gap-2 sm:gap-4 text-[#171411]">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#3A3027] hover:text-[#B88A3B] transition-colors"
                aria-label="Search Collection"
                title="Search collection"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/shop?filter=wishlist"
                className="p-2 text-[#3A3027] hover:text-[#B88A3B] transition-colors relative"
                aria-label="View Wishlist"
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlist.length > 0 ? "fill-[#B88A3B] text-[#B88A3B]" : ""}`} />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#B88A3B] text-white text-[10px] font-semibold rounded-full flex items-center justify-center tabular-nums">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-[#3A3027] hover:text-[#B88A3B] transition-colors relative flex items-center gap-1.5"
                aria-label="View Shopping Bag"
                title="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="w-4 h-4 bg-[#171411] text-[#EFE4D2] text-[10px] font-semibold rounded-full flex items-center justify-center tabular-nums">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#171411]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF6F0] shadow-xl border-r border-[#D4AF6A]/30 flex flex-col justify-between z-10 animate-in slide-in-from-left duration-200">
            <div>
              {/* Drawer Header */}
              <div className="p-5 border-b border-[#D4AF6A]/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#D4AF6A]">
                    <img src="./sejora-logo.png" alt="Sejora" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="font-editorial text-xl font-bold tracking-widest text-[#171411]">
                      SÉJORA
                    </span>
                    <p className="text-[9px] uppercase tracking-widest text-[#8A642D]">Womenswear</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#3A3027] hover:text-[#8A642D]"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-sm text-sm tracking-[0.14em] font-medium text-[#171411] hover:bg-[#EFE4D2]/60 hover:text-[#8A642D] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#8A642D]/50" />
                  </Link>
                ))}
              </nav>

              {/* Curated Category Shortcuts */}
              <div className="px-5 pt-3 pb-2 border-t border-[#D4AF6A]/20">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8A642D] font-semibold mb-2">
                  Featured Edits
                </p>
                <div className="space-y-1.5 text-xs text-[#3A3027]">
                  <Link
                    to="/category/sarees"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#B88A3B]"
                  >
                    Organza & Kerala Sarees
                  </Link>
                  <Link
                    to="/category/jewellery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#B88A3B]"
                  >
                    22k Antique Temple Jewellery
                  </Link>
                  <Link
                    to="/shop?occasion=Wedding"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#B88A3B]"
                  >
                    Bridal & Wedding Atelier
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Footer & Direct WhatsApp */}
            <div className="p-5 border-t border-[#D4AF6A]/20 bg-[#EFE4D2]/30">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Sejora, I would like personal assistance with your collection.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#3A3027] hover:bg-[#171411] text-[#EFE4D2] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 border border-[#D4AF6A]/40 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF6A]" />
                <span>WhatsApp Concierge</span>
              </a>
              <p className="text-[11px] text-center text-[#8A642D] mt-3">
                {STORE_CONFIG.websiteUrl.replace("https://", "")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
