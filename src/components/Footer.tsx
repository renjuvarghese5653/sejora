import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { STORE_CONFIG } from "../config/store";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171411] text-[#EFE4D2] pt-16 pb-12 border-t border-[#D4AF6A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#3A3027]">
          
          {/* Col 1 & 2: Brand Heritage Lockup */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF6A] shrink-0">
                <img src="./sejora-logo.png" alt="Sejora Emblem" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-editorial text-3xl tracking-[0.16em] text-[#EFE4D2] font-semibold block leading-none">
                  SÉJORA
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#D4AF6A] uppercase font-medium">
                  Womenswear & Jewellery
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#EFE4D2]/75 leading-relaxed max-w-sm pt-2">
              Elegance, rooted in tradition. Celebrating the rich textile heritage of India with contemporary silhouettes and handcrafted heirloom jewellery.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Sejora, I would like personal assistance.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 bg-[#3A3027] hover:bg-[#8A642D] border border-[#D4AF6A]/40 text-xs uppercase tracking-wider text-[#EFE4D2] transition-colors rounded-none"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D4AF6A]" />
                <span>Enquire via WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Col 3: Collections */}
          <div>
            <h4 className="font-editorial text-lg text-[#D4AF6A] tracking-wider mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#EFE4D2]/80">
              <li>
                <Link to="/category/sarees" className="hover:text-[#D4AF6A] transition-colors">
                  Organza & Silk Sarees
                </Link>
              </li>
              <li>
                <Link to="/category/sarees" className="hover:text-[#D4AF6A] transition-colors">
                  Kerala Kasavu Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Salwar+Suits" className="hover:text-[#D4AF6A] transition-colors">
                  Velvet & Silk Anarkalis
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Lehengas" className="hover:text-[#D4AF6A] transition-colors">
                  Bridal Atelier
                </Link>
              </li>
              <li>
                <Link to="/category/jewellery" className="hover:text-[#D4AF6A] transition-colors">
                  22k Antique Jewellery
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=new" className="hover:text-[#D4AF6A] transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: The Boutique */}
          <div>
            <h4 className="font-editorial text-lg text-[#D4AF6A] tracking-wider mb-4">
              Boutique
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#EFE4D2]/80">
              <li>
                <Link to="/about" className="hover:text-[#D4AF6A] transition-colors">
                  About Sejora
                </Link>
              </li>
              <li>
                <Link to="/about#craftsmanship" className="hover:text-[#D4AF6A] transition-colors">
                  Artisanal Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF6A] transition-colors">
                  Contact & Styling
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#D4AF6A] transition-colors">
                  Shopping Bag
                </Link>
              </li>
              <li>
                <a
                  href={STORE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF6A] transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram Journal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF6A]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Inquiries */}
          <div>
            <h4 className="font-editorial text-lg text-[#D4AF6A] tracking-wider mb-4">
              Assistance
            </h4>
            <ul className="space-y-3 text-xs text-[#EFE4D2]/80">
              <li>
                <a
                  href={`tel:${STORE_CONFIG.phoneTel}`}
                  className="flex items-center gap-2 hover:text-[#D4AF6A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF6A] shrink-0" />
                  <span>{STORE_CONFIG.displayPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STORE_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-[#D4AF6A] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF6A] shrink-0" />
                  <span>{STORE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={STORE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D4AF6A] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#D4AF6A] shrink-0" />
                  <span>{STORE_CONFIG.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={STORE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-[#D4AF6A] transition-colors pt-0.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF6A] shrink-0 mt-0.5" />
                  <span className="leading-snug">{STORE_CONFIG.address}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle Trust */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE4D2]/60">
          <p>© {new Date().getFullYear()} Sejora. All rights reserved. London · Kerala.</p>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <span>Direct WhatsApp Order Concierge</span>
            <span>·</span>
            <span>Handcrafted Indian Couture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
