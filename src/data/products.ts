import { Product } from "../types";

export const PRODUCTS: Product[] = [
  {
    id: "saree-001",
    name: "Aura Rose Gold Organza Saree",
    category: "Sarees",
    subcategory: "Organza Sarees",
    price: 3499,
    originalPrice: 4299,
    description: "An ethereal sheer organza saree woven with spun metallic rose-gold threads, framed by an artisanal scalloped zardozi border. Perfect for modern weddings and evening festivities.",
    images: [
      "./products/saree-001-1.jpg",
      "./products/saree-001-2.jpg"
    ],
    thumbnail: "./products/saree-001-1.jpg",
    sizes: ["Free Size (5.5m + Unstitched Blouse Piece)"],
    colors: ["Rose Gold", "Champagne Blush"],
    material: "Pure Sheer Organza with Zardozi Work",
    occasion: "Festive",
    featured: true,
    newArrival: true,
    bestSeller: true,
    available: true,
    stockLabel: "In Stock · Ready to Dispatch",
    details: [
      "Length: 5.5 metres saree with 0.8 metre matching unstitched blouse fabric",
      "Weave: Lightweight luminous sheer organza with metallic thread undertones",
      "Border: Hand-embroidered floral scalloped zardozi with cutwork edging",
      "Drape: Crisp yet fluid drape that holds pleats effortlessly"
    ],
    care: [
      "Dry clean only",
      "Store flat wrapped in muslin fabric",
      "Do not spray perfume directly on metallic embroidery"
    ]
  },
  {
    id: "saree-002",
    name: "Heritage Kerala Kasavu Tissue Saree",
    category: "Sarees",
    subcategory: "Kerala Sarees",
    price: 4899,
    originalPrice: 5500,
    description: "Honouring timeless Kerala artisanal traditions, this handcrafted Kasavu saree is woven from golden tissue cotton with an ornate temple kara (border). The epitome of quiet regal grace.",
    images: [
      "./products/saree-002-1.jpg",
      "./products/saree-002-2.jpg"
    ],
    thumbnail: "./products/saree-002-1.jpg",
    sizes: ["Free Size (6.25m with Blouse)"],
    colors: ["Antique Gold", "Ivory Cream"],
    material: "Kerala Handloom Tissue Cotton & 100% Gold Zari",
    occasion: "Traditional",
    featured: true,
    newArrival: false,
    bestSeller: true,
    available: true,
    stockLabel: "Artisanal Handloom · Limited Stock",
    details: [
      "Authentic Kerala Kasavu handloom weave from master weavers",
      "Broad 4-inch woven temple motif gold zari border and pallu",
      "Includes running unstitched brocade blouse piece",
      "Breathable, lightweight, and structured for traditional ceremonies"
    ],
    care: [
      "Gentle dry clean recommended",
      "Iron on reverse side on low to medium heat",
      "Avoid wringing or rough spinning"
    ]
  },
  {
    id: "saree-003",
    name: "Noor Banarasi Gold Brocade Saree",
    category: "Sarees",
    subcategory: "Silk Sarees",
    price: 6999,
    originalPrice: 8500,
    description: "A royal heirloom Banarasi katan silk saree featuring all-over intricately woven kadwa jaal motifs and an opulent antique gold pallu. Designed for brides and landmark celebrations.",
    images: [
      "./products/saree-003-1.jpg",
      "./products/saree-001-2.jpg"
    ],
    thumbnail: "./products/saree-003-1.jpg",
    sizes: ["Free Size (5.5m + Blouse)"],
    colors: ["Golden Champagne", "Deep Amber Gold"],
    material: "Pure Katan Silk with Antique Zari",
    occasion: "Bridal",
    featured: true,
    newArrival: true,
    bestSeller: false,
    available: true,
    stockLabel: "Heirloom Edition",
    details: [
      "Heavy traditional kadwa floral motifs handwoven into pure silk base",
      "Grand bridal pallu finished with antique metallic tassels",
      "Includes 1 metre embellished unstitched blouse fabric",
      "Substantial weight giving rich, stately pleats"
    ],
    care: [
      "Professional dry clean only",
      "Refold periodically to preserve silk threads",
      "Store in a cool, dry cedar or muslin box"
    ]
  },
  {
    id: "saree-004",
    name: "Malabar Morning Cotton Handloom Saree",
    category: "Sarees",
    subcategory: "Cotton Sarees",
    price: 1899,
    originalPrice: 2299,
    description: "Breathable fine-count South Indian cotton in natural unbleached ivory with minimalist antique brass temple borders. Pure everyday elegance and understated luxury.",
    images: [
      "./products/saree-004-1.jpg"
    ],
    thumbnail: "./products/saree-004-1.jpg",
    sizes: ["Free Size (5.5m)"],
    colors: ["Natural Ivory", "Sand Gold"],
    material: "100% Fine Handloom Cotton",
    occasion: "Everyday Elegance",
    featured: false,
    newArrival: false,
    bestSeller: true,
    available: true,
    stockLabel: "In Stock",
    details: [
      "Pure organic unbleached cotton threads",
      "Soft skin feel that softens further with every wear",
      "Delicate 1.5-inch zari temple border",
      "Includes blouse piece"
    ],
    care: [
      "Hand wash cold with mild detergent or dry clean",
      "Line dry in shade",
      "Warm iron while slightly damp"
    ]
  },
  {
    id: "suit-001",
    name: "Mehrunissa Velvet & Organza Anarkali Suit",
    category: "Salwar Suits",
    subcategory: "Anarkali",
    price: 7499,
    originalPrice: 8999,
    description: "A show-stopping floor-length Anarkali featuring a deep maroon velvet bodice richly adorned with tilla and dabka embroidery, paired with a flowing georgette flare and hand-painted organza dupatta.",
    images: [
      "./products/suit-001-1.jpg",
      "./products/suit-001-2.jpg"
    ],
    thumbnail: "./products/suit-001-1.jpg",
    sizes: ["XS", "S", "M", "L", "XL", "Custom Tailoring"],
    colors: ["Royal Maroon & Gold", "Emerald Velvet"],
    material: "Silk Velvet Bodice with Georgette Flare & Sheer Organza",
    occasion: "Wedding",
    featured: true,
    newArrival: true,
    bestSeller: true,
    available: true,
    stockLabel: "Bespoke Finishing Available",
    details: [
      "3-Piece Set: Anarkali Gown, Churidar Pants, and Hand-Embroidered Dupatta",
      "Over 48 hours of artisanal hand embroidery across neckline and cuffs",
      "Generous 6-metre flare circumference for cinematic movement",
      "Concealed side zipper and adjustable inner waist tie"
    ],
    care: [
      "Strictly dry clean only",
      "Steam iron with protective press cloth only",
      "Store on padded hanger inside breathable garment bag"
    ]
  },
  {
    id: "suit-002",
    name: "Sitara Silk Churidar Suit Set",
    category: "Salwar Suits",
    subcategory: "Churidar",
    price: 4299,
    originalPrice: 4999,
    description: "A tailored straight-cut raw silk kurta with resham floral bootis, paired with a classic churidar and a tissue zari dupatta with delicate hand-knotted fringe.",
    images: [
      "./products/suit-002-1.jpg"
    ],
    thumbnail: "./products/suit-002-1.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Champagne Gold", "Vintage Rose"],
    material: "Raw Silk Kurta & Chanderi Dupatta",
    occasion: "Festive",
    featured: false,
    newArrival: false,
    bestSeller: false,
    available: true,
    stockLabel: "In Stock",
    details: [
      "Includes 3 pieces: Kurta, Churidar, Dupatta",
      "Calf-length straight silhouette with side slits",
      "Fully lined with breathable pure mulmul cotton",
      "Mandarin collar with miniature gold buttons"
    ],
    care: [
      "Dry clean recommended",
      "Do not bleach"
    ]
  },
  {
    id: "kurti-001",
    name: "Zari V-Neck Raw Silk Tunic Kurti",
    category: "Kurtis",
    subcategory: "Silk Kurtis",
    price: 2499,
    originalPrice: 2999,
    description: "Refined minimalist styling meets royal craftsmanship. Tailored in heavy raw silk with a sharp plunging V-neckline framed by antique zari pita work and three-quarter sleeves.",
    images: [
      "./products/kurti-001-1.jpg",
      "./products/kurti-001-2.jpg"
    ],
    thumbnail: "./products/kurti-001-1.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne Gold", "Pewter Sand"],
    material: "100% Hand-Spun Raw Silk",
    occasion: "Everyday Elegance",
    featured: true,
    newArrival: true,
    bestSeller: true,
    available: true,
    stockLabel: "In Stock",
    details: [
      "Flattering structured silhouette with subtle A-line ease",
      "Antique beaten gold thread (pita work) on neckline and cuff hem",
      "Pairs effortlessly with palazzos, cigarette trousers, or draped skirts",
      "Premium butter-soft cotton lining"
    ],
    care: [
      "Dry clean or gentle cold hand wash",
      "Dry inside out in shade",
      "Medium warm iron"
    ]
  },
  {
    id: "lehenga-001",
    name: "Rani Bagh Zardozi Bridal Lehenga Set",
    category: "Lehengas",
    subcategory: "Bridal Lehengas",
    price: 18999,
    originalPrice: 22500,
    description: "The crown jewel of our wedding atelier. Handcrafted on heavy champagne silk with micro pearls, dabka, and burnished antique gold zardozi illustrating classic Mughal garden motifs.",
    images: [
      "./products/lehenga-001-1.jpg",
      "./products/lehenga-001-2.jpg"
    ],
    thumbnail: "./products/lehenga-001-1.jpg",
    sizes: ["Semi-Stitched (Fits up to 44 waist)", "Custom Stitched by WhatsApp Consultation"],
    colors: ["Champagne Gold & Blush", "Royal Ivory"],
    material: "Raw Silk, Net, Can-Can Lining, and Metallic Bullion Wire",
    occasion: "Bridal",
    featured: true,
    newArrival: true,
    bestSeller: false,
    available: true,
    stockLabel: "Atelier Made · Order Early",
    details: [
      "Full 3-piece bridal ensemble: Lehenga Skirt, Blouse, and Double Dupatta",
      "Reinforced double layer can-can structured skirt for royal ballroom flare",
      "Over 120 hours of intricate needlework by master Lucknowi artisans",
      "Custom neckline and sleeve tailoring available upon request"
    ],
    care: [
      "Specialist bridal dry clean only",
      "Do not hang from waist loops alone; use hanger ties",
      "Keep away from direct humidity and sunlight"
    ]
  },
  {
    id: "blouse-001",
    name: "Chandrika Handcrafted Zardozi Silk Blouse",
    category: "Blouses",
    subcategory: "Designer Blouses",
    price: 2799,
    originalPrice: 3299,
    description: "An opulent padded designer saree blouse featuring an open back with jewelled latkan strings and dense hand-embroidered floral vines across the sweetheart neck and elbow sleeves.",
    images: [
      "./products/blouse-001-1.jpg"
    ],
    thumbnail: "./products/blouse-001-1.jpg",
    sizes: ["34", "36", "38", "40", "42"],
    colors: ["Antique Gold", "Ivory Gold"],
    material: "Dupion Silk with Zardozi and Pearl Beading",
    occasion: "Wedding",
    featured: false,
    newArrival: true,
    bestSeller: true,
    available: true,
    stockLabel: "Padded · Ready to Wear",
    details: [
      "Pre-padded cups for seamless bridal fitting",
      "2 inches margin on either side for easy alterations",
      "Deep U-back with handcrafted metallic dori latkan",
      "Cotton lining for all-day ceremonial comfort"
    ],
    care: [
      "Dry clean only",
      "Do not iron directly over raised beadwork"
    ]
  },
  {
    id: "coord-001",
    name: "Nizami Embroidered Cape & Pant Set",
    category: "Co-ord Sets",
    subcategory: "Festive Co-ords",
    price: 4999,
    originalPrice: 5899,
    description: "Modern Indian festive dressing redefined. Includes a sculpted bustier top, wide-leg silk trousers, and a floor-skimming sheer organza cape embroidered with geometric gold borders.",
    images: [
      "./products/coord-001-1.jpg"
    ],
    thumbnail: "./products/coord-001-1.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne Gold", "Alabaster White"],
    material: "Crepe Silk & Pure Organza",
    occasion: "Party",
    featured: false,
    newArrival: false,
    bestSeller: false,
    available: true,
    stockLabel: "In Stock",
    details: [
      "3-Piece Set: Embellished Crop Bustier, High-Rise Palazzos, Flowing Long Cape",
      "Flattering contemporary fusion silhouette",
      "Elasticated back waist on trousers for easy fitting",
      "Perfect for sangeet nights, cocktail receptions, and destination weddings"
    ],
    care: [
      "Dry clean only"
    ]
  },
  {
    id: "jewel-001",
    name: "Rajkumari 22k Antique Gold Choker Necklace Set",
    category: "Jewellery",
    subcategory: "Necklaces",
    price: 4499,
    originalPrice: 5499,
    description: "An awe-inspiring royal collar choker inspired by royal Indian temple architecture. Featuring intricate floral filigree, uncut polki stones, and dangling freshwater pearls with matching earrings.",
    images: [
      "./products/jewel-001-1.jpg",
      "./products/jewel-001-2.jpg"
    ],
    thumbnail: "./products/jewel-001-1.jpg",
    sizes: ["Standard Adjustable Dori"],
    colors: ["Antique 22k Gold Finish"],
    material: "Brass Core with 22k Antique Micro Gold Plating, Polki, Pearls",
    occasion: "Wedding",
    featured: true,
    newArrival: true,
    bestSeller: true,
    available: true,
    stockLabel: "Signature Heritage Piece",
    details: [
      "Set includes: Choker Necklace + Matching Drop Earrings",
      "Adjustable woven gold thread dori fits all neck sizes comfortably",
      "Hypoallergenic, nickel-free, lead-free luxury plating",
      "Comes packaged in Sejora luxury hard-shell jewelry keepsake box"
    ],
    care: [
      "Store individually in velvet/air-tight pouch",
      "Wipe gently with soft dry microfiber cloth after each wear",
      "Keep away from direct perfume, water, lotions, and sanitizers"
    ]
  },
  {
    id: "jewel-002",
    name: "Devi Polki & Emerald Temple Jhumkas",
    category: "Jewellery",
    subcategory: "Jhumkas",
    price: 1999,
    originalPrice: 2499,
    description: "Classic bell-shaped Indian temple jhumkas crowned with a floral stud, encrusted with polki stones, suspended emerald green glass droplets, and clustered miniature seed pearls.",
    images: [
      "./products/jewel-002-1.jpg",
      "./products/jewel-002-2.jpg"
    ],
    thumbnail: "./products/jewel-002-1.jpg",
    sizes: ["Length: 6.5 cm, Width: 3 cm"],
    colors: ["Antique Gold & Emerald"],
    material: "Heritage Matte Gold Finish with Kundan & Pearls",
    occasion: "Festive",
    featured: true,
    newArrival: true,
    bestSeller: true,
    available: true,
    stockLabel: "In Stock · High Demand",
    details: [
      "Weight: 26 grams per earring (balanced for comfortable prolonged wear)",
      "Secure push-back closure with wide support clutch",
      "Delicate chiming bell interior with pearl cluster fringe",
      "Pairs beautifully with sarees, suits, and fusion lehengas"
    ],
    care: [
      "Store dry in individual jewelry pouch",
      "Avoid contact with hairspray or perfumes"
    ]
  },
  {
    id: "jewel-003",
    name: "Kalyani Filigree Antique Gold Kada Pair",
    category: "Jewellery",
    subcategory: "Bangles",
    price: 2899,
    originalPrice: 3499,
    description: "A pair of openable antique gold kadas adorned with intricate repoussé floral scrollwork, peacock motifs, and tiny ruby-hued cabochons.",
    images: [
      "./products/jewel-003-1.jpg"
    ],
    thumbnail: "./products/jewel-003-1.jpg",
    sizes: ["2.4", "2.6", "2.8"],
    colors: ["Antique Matte Gold"],
    material: "Copper-Brass Alloy with Micro Gold Plating",
    occasion: "Traditional",
    featured: false,
    newArrival: false,
    bestSeller: true,
    available: true,
    stockLabel: "In Stock (Pair of 2)",
    details: [
      "Sold as a matched pair (2 bangles)",
      "Screw-pin closure ensures easy wear over hands without forcing",
      "Rich antique matte finish with vintage patina",
      "Sturdy, non-tarnish protective coating"
    ],
    care: [
      "Wipe clean after wear with dry flannel",
      "Do not submerge in liquids"
    ]
  },
  {
    id: "jewel-004",
    name: "Mayuri Chandbali Pearl Statement Earrings",
    category: "Jewellery",
    subcategory: "Chandbali",
    price: 2299,
    originalPrice: 2799,
    description: "Crescent moon-inspired chandeliers featuring concentric rings of kundan stones, carved petal filigree, and a waterfall cascade of lustrous white seed pearls.",
    images: [
      "./products/jewel-004-1.jpg"
    ],
    thumbnail: "./products/jewel-004-1.jpg",
    sizes: ["Length: 8 cm, Width: 4.5 cm"],
    colors: ["Champagne Gold & Pearl"],
    material: "Gold Plated Brass with Kundan & Cultured Pearls",
    occasion: "Festive",
    featured: false,
    newArrival: false,
    bestSeller: false,
    available: true,
    stockLabel: "In Stock",
    details: [
      "Dramatic statement silhouette that frames the face elegantly",
      "Lightweight hollow back construction for effortless wear",
      "Signature Sejora gold antique luster"
    ],
    care: [
      "Keep dry in sealed pouch",
      "Protect pearls from cosmetics and moisture"
    ]
  }
];

export const CATEGORIES_LIST = [
  { name: "Sarees", slug: "sarees", count: 4, desc: "Organza, Kerala Kasavu, Banarasi Silk & Fine Handlooms" },
  { name: "Kurtis", slug: "kurtis", count: 1, desc: "Raw silk tunics, hand-spun fabrics & beaten zari work" },
  { name: "Salwar Suits", slug: "salwar-suits", count: 2, desc: "Velvet Anarkalis, tailored ch мечта, and flowing dupattas" },
  { name: "Lehengas", slug: "lehengas", count: 1, desc: "Artisanal bridal & festive sets with zardozi embroidery" },
  { name: "Blouses", slug: "blouses", count: 1, desc: "Designer padded silk blouses with handcrafted latkans" },
  { name: "Co-ord Sets", slug: "coord-sets", count: 1, desc: "Modern celebratory fusion capes and pant sets" },
  { name: "Jewellery", slug: "jewellery", count: 4, desc: "22k antique gold finish chokers, jhumkas, and temple kadas" },
];

export const OCCASIONS_LIST = [
  "Bridal",
  "Festive",
  "Wedding",
  "Everyday Elegance",
  "Party",
  "Traditional"
];
