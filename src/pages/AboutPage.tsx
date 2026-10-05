import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles, Gem, Compass } from "lucide-react";
import { STORE_CONFIG } from "../config/store";

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. Hero Brand Statement */}
      <section className="relative bg-[#171411] text-[#EFE4D2] py-20 sm:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D4AF6A] mx-auto shadow-md">
            <img src="./sejora-logo.png" alt="Sejora Emblem" className="w-full h-full object-cover" />
          </div>

          <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF6A] font-semibold">
            The Sejora Atelier
          </p>

          <h1 className="font-editorial text-4xl sm:text-6xl text-[#FAF6F0] leading-tight [text-wrap:balance]">
            Elegance, Rooted in Tradition.
          </h1>

          <p className="text-sm sm:text-base text-[#EFE4D2]/85 max-w-2xl mx-auto leading-relaxed font-light [text-wrap:balance]">
            Sejora was born from a reverent celebration of Indian textile artistry. Guided by centuries-old weaver legacies from Kerala to Varanasi, we curate timeless silhouettes for the discerning woman across the globe.
          </p>
        </div>
      </section>

      {/* 2. The Story & Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.24em] text-[#8A642D] font-semibold block">
              Chapter 01 · Our Origins
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171411] leading-snug">
              Bridging Heritage Looms & Contemporary Editorial Grace
            </h2>
            <p className="text-xs sm:text-sm text-[#3A3027]/85 leading-relaxed">
              Growing up surrounded by the golden rustle of unbleached Kerala Kasavu cottons, the opulent sheen of Banarasi brocades, and the chiming cadence of antique temple jhumkas, our founder envisioned a luxury boutique where Indian heritage remains untouched by fleeting trends.
            </p>
            <p className="text-xs sm:text-sm text-[#3A3027]/85 leading-relaxed">
              Based between London and Cochin, Sejora curates limited editions directly from master weaving families, zardozi needlework ateliers, and heritage metalsmiths. Every thread tells a story of patience, dignity, and quiet luxury.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Sejora, I would like to learn more about your artisanal sourcing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 bg-[#3A3027] text-[#EFE4D2] hover:bg-[#171411] text-xs uppercase tracking-wider font-semibold border border-[#D4AF6A]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF6A]" />
                <span>Speak with Our Stylist</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#EFE4D2]/40 border border-[#D4AF6A]/30 overflow-hidden shadow-sm">
              <img
                src="./products/saree-001-1.jpg"
                alt="Sejora Heritage Saree Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FAF6F0] border border-[#D4AF6A]/40 p-4 max-w-xs shadow-md hidden sm:block">
              <p className="font-editorial text-lg text-[#171411] italic">
                "Not fast fashion. Slow heirloom artistry meant to be preserved."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Pillars of Craftsmanship */}
      <section id="craftsmanship" className="bg-[#FAF6F0] border-y border-[#D4AF6A]/25 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A642D] font-semibold mb-2">
              The Atelier Standards
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171411]">
              Pillars of Craftsmanship
            </h2>
            <div className="w-12 h-0.5 bg-[#D4AF6A] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-white border border-[#D4AF6A]/25 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#8A642D] flex items-center justify-center border border-[#D4AF6A]/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl text-[#171411] font-semibold">
                Authentic Handloom Weaving
              </h3>
              <p className="text-xs text-[#3A3027]/75 leading-relaxed">
                We partner with certified artisanal cooperatives in Kerala, Chanderi, and Varanasi. Each saree and fabric piece supports centuries-old hereditary weaver households.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#D4AF6A]/25 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#8A642D] flex items-center justify-center border border-[#D4AF6A]/30">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl text-[#171411] font-semibold">
                22k Antique Plated Temple Jewellery
              </h3>
              <p className="text-xs text-[#3A3027]/75 leading-relaxed">
                Handcrafted using lost-wax repoussé and filigree techniques, set with cultured pearls, uncut polki stones, and finished in a rich 22k matte gold vintage patina.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#D4AF6A]/25 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#8A642D] flex items-center justify-center border border-[#D4AF6A]/30">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl text-[#171411] font-semibold">
                Personal WhatsApp Concierge
              </h3>
              <p className="text-xs text-[#3A3027]/75 leading-relaxed">
                No faceless checkouts. Connect directly with our styling consultants to customize blouse necklines, verify draping length, and orchestrate matching jewellery sets.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Invitation CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#171411]">
          Explore the Full Atelier
        </h2>
        <p className="text-xs sm:text-sm text-[#3A3027]/80 max-w-lg mx-auto leading-relaxed">
          From organza sarees to heirloom wedding ensembles, discover the piece that resonates with your personal elegance.
        </p>
        <div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-[#3A3027] hover:bg-[#171411] text-[#EFE4D2] text-xs uppercase tracking-widest font-bold border border-[#D4AF6A]/50 transition-colors shadow-sm"
          >
            <span>DISCOVER THE COLLECTION</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF6A]" />
          </Link>
        </div>
      </section>

    </div>
  );
};
