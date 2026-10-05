import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, MessageCircle } from "lucide-react";
import { PRODUCTS, CATEGORIES_LIST } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { STORE_CONFIG } from "../config/store";

export const HomePage: React.FC = () => {
  const newArrivals = PRODUCTS.filter((p) => p.newArrival).slice(0, 4);
  const featuredPieces = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  const edits = [
    {
      title: "Wedding Atelier",
      subtitle: "Heirloom bridal lehengas, heavy zardozi blouses & regal silk ensembles",
      query: "occasion=Wedding",
      image: "./products/lehenga-001-1.jpg",
    },
    {
      title: "Festive Glamour",
      subtitle: "Light-catching tissue organza sarees and hand-embroidered velvet suits",
      query: "occasion=Festive",
      image: "./products/saree-001-1.jpg",
    },
    {
      title: "Everyday Elegance",
      subtitle: "Bespoke raw silk kurtis and lightweight handloom Kerala cottons",
      query: "occasion=Everyday+Elegance",
      image: "./products/kurti-001-1.jpg",
    },
    {
      title: "Statement Jewellery",
      subtitle: "Handcrafted 22k antique gold finish temple chokers, jhumkas and kadas",
      query: "category=Jewellery",
      image: "./products/jewel-001-1.jpg",
    },
  ];

  const categoryImages: Record<string, string> = {
    sarees: "./products/saree-001-1.jpg",
    kurtis: "./products/kurti-001-1.jpg",
    "salwar-suits": "./products/suit-001-1.jpg",
    lehengas: "./products/lehenga-001-1.jpg",
    blouses: "./products/blouse-001-1.jpg",
    jewellery: "./products/jewel-001-1.jpg",
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] flex items-center justify-center bg-[#171411] overflow-hidden">
        {/* Background Editorial Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="./hero/hero-main.jpg"
            alt="Sejora Indian Women's Fashion Editorial"
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05]"
          />
          {/* Measured Scrim for Legibility (WCAG AA) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-[#171411]/45 to-[#171411]/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6F0]/10 backdrop-blur-md border border-[#D4AF6A]/40 text-[#D4AF6A] text-[11px] uppercase tracking-[0.25em] font-medium mb-6">
            <span>Autumn / Winter Luxury Atelier</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#FAF6F0] tracking-wide leading-[1.08] mb-6 [text-wrap:balance]">
            Elegance, Rooted in Tradition.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#EFE4D2]/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 [text-wrap:balance]">
            Discover thoughtfully curated women's fashion and jewellery for every occasion.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/shop"
              className="w-full sm:w-auto py-3.5 px-8 bg-[#D4AF6A] hover:bg-[#B88A3B] text-[#171411] text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg text-center"
            >
              SHOP WOMENSWEAR
            </Link>

            <Link
              to="/category/jewellery"
              className="w-full sm:w-auto py-3.5 px-8 bg-transparent hover:bg-[#FAF6F0]/10 text-[#FAF6F0] border border-[#D4AF6A] text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 text-center"
            >
              EXPLORE JEWELLERY
            </Link>
          </div>
        </div>
      </section>

      {/* 2. NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#D4AF6A]/25 gap-4">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#8A642D] font-semibold mb-1">
              Curated Just Arrived
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171411]">
              New Arrivals
            </h2>
          </div>
          <Link
            to="/shop?filter=new"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8A642D] hover:text-[#171411] font-semibold group"
          >
            <span>View All New Additions</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-[#8A642D] font-semibold mb-2">
            The Collections
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#171411]">
            Shop by Category
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF6A] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES_LIST.slice(0, 6).map((cat) => {
            const imgPath = categoryImages[cat.slug] || "./products/saree-001-1.jpg";
            return (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group relative flex flex-col bg-[#FAF6F0] border border-[#D4AF6A]/25 hover:border-[#8A642D] overflow-hidden transition-all duration-300"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#EFE4D2]/40">
                  <img
                    src={imgPath}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center bg-[#FAF6F0]">
                  <h3 className="font-editorial text-base sm:text-lg text-[#171411] group-hover:text-[#8A642D] transition-colors font-medium">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] tracking-widest uppercase text-[#8A642D]">
                    {cat.count} {cat.count === 1 ? "Piece" : "Pieces"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. THE SEJORA EDIT */}
      <section className="bg-[#FAF6F0] border-y border-[#D4AF6A]/25 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-[#8A642D] font-semibold mb-2">
              Curated Occasions
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#171411]">
              The Sejora Edit
            </h2>
            <p className="text-xs sm:text-sm text-[#3A3027]/75 mt-2">
              Thoughtfully styled narratives bringing Indian traditions into modern celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {edits.map((edit) => (
              <Link
                key={edit.title}
                to={`/shop?${edit.query}`}
                className="group relative flex flex-col bg-white border border-[#D4AF6A]/25 overflow-hidden shadow-xs hover:border-[#8A642D] transition-all"
              >
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <img
                    src={edit.image}
                    alt={edit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/80 via-[#171411]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-editorial text-2xl font-medium tracking-wide">
                      {edit.title}
                    </h3>
                    <p className="text-[11px] text-[#EFE4D2]/80 mt-1 line-clamp-2 leading-relaxed">
                      {edit.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#D4AF6A] font-bold mt-2 group-hover:translate-x-1 transition-transform">
                      <span>Explore Edit</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED COLLECTION SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171411] text-[#EFE4D2] border border-[#D4AF6A]/40 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF6A] font-semibold block">
              Heritage Spotlight
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#FAF6F0] leading-tight">
              Kerala Kasavu & Tissue Organza
            </h2>
            <p className="text-xs sm:text-sm text-[#EFE4D2]/80 leading-relaxed font-light">
              Rooted in the timeless temple traditions of Kerala, our signature Kasavu collection brings together handspun unbleached threads, pure gold tissue, and intricate geometric temple motifs. Each piece represents weeks of dedicated master weaving.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/category/sarees"
                className="py-3 px-6 bg-[#D4AF6A] hover:bg-[#B88A3B] text-[#171411] text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Shop Kerala Sarees
              </Link>
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Sejora, I would like to learn more about the Kerala Kasavu collection.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-transparent hover:bg-white/10 text-[#FAF6F0] border border-[#D4AF6A]/60 text-xs font-semibold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF6A]" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden border border-[#D4AF6A]/30">
              <img
                src="./products/saree-002-1.jpg"
                alt="Kerala Kasavu Traditional Saree"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden border border-[#D4AF6A]/30 mt-6 sm:mt-10">
              <img
                src="./products/jewel-001-1.jpg"
                alt="Rajkumari Choker Necklace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. WHY SEJORA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-[#8A642D] font-semibold mb-2">
            The Sejora Standard
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#171411]">
            Why Sejora
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF6A] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 bg-[#FAF6F0] border border-[#D4AF6A]/25 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EFE4D2] text-[#8A642D] mx-auto flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#171411] font-semibold">
              Curated Indian Fashion
            </h3>
            <p className="text-xs text-[#3A3027]/75 leading-relaxed">
              Every saree, suit, and jewellery piece is personally vetted for authenticity, exquisite drape, and heritage craftsmanship.
            </p>
          </div>

          <div className="p-6 bg-[#FAF6F0] border border-[#D4AF6A]/25 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EFE4D2] text-[#8A642D] mx-auto flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#171411] font-semibold">
              Timeless Designs
            </h3>
            <p className="text-xs text-[#3A3027]/75 leading-relaxed">
              Silhouettes created to transcend seasonal fads, crafted to be cherished heirlooms passed through generations.
            </p>
          </div>

          <div className="p-6 bg-[#FAF6F0] border border-[#D4AF6A]/25 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EFE4D2] text-[#8A642D] mx-auto flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#171411] font-semibold">
              Quality First
            </h3>
            <p className="text-xs text-[#3A3027]/75 leading-relaxed">
              Pure raw silks, genuine handloom weaves, rich zardozi needlework, and hypoallergenic 22k gold plated jewellery.
            </p>
          </div>

          <div className="p-6 bg-[#FAF6F0] border border-[#D4AF6A]/25 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EFE4D2] text-[#8A642D] mx-auto flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#171411] font-semibold">
              Personal WhatsApp Assistance
            </h3>
            <p className="text-xs text-[#3A3027]/75 leading-relaxed">
              Direct access to our London & Cochin styling team via WhatsApp for sizing, blouse tailoring, and custom matching.
            </p>
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA: "Find something beautiful." */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="p-10 sm:p-14 bg-[#FAF6F0] border border-[#D4AF6A]/40 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF6A] mx-auto mb-4">
            <img src="./sejora-logo.png" alt="Sejora" className="w-full h-full object-cover" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl text-[#171411] font-normal mb-4">
            Find something beautiful.
          </h2>

          <p className="text-xs sm:text-sm text-[#3A3027]/80 max-w-md mx-auto mb-8 leading-relaxed">
            Explore our curated bridal wear, evening ensembles, and handcrafted jewellery.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-[#3A3027] hover:bg-[#171411] text-[#EFE4D2] text-xs font-bold tracking-[0.2em] uppercase transition-colors border border-[#D4AF6A]/40 shadow-sm"
          >
            <span>EXPLORE COLLECTION</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF6A]" />
          </Link>
        </div>
      </section>

    </div>
  );
};
