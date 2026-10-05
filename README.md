# SÉJORA · Women's Wear & Heritage Jewellery

> Official Frontend Storefront for **[Sejora](https://sejora.uk)**
> Built with React, Vite, TypeScript, and Tailwind CSS.
> 100% frontend-only static web application, perfectly deployable to GitHub Pages.

---

## Brand Architecture & Overview

- **Brand:** SÉJORA Women's Wear
- **Website:** https://sejora.uk
- **Tech Stack:** React 19, Vite, TypeScript, Tailwind CSS, Lucide Icons, HashRouter
- **Persistence:** Browser `localStorage` for Shopping Bag and Wishlist
- **Order System:** Direct WhatsApp Concierge with structured itemized messaging
- **Hosting Target:** GitHub Pages / Cloudflare Pages / Vercel / Netlify (Zero server dependencies)

---

## Product Management Guide (Manual Maintenance)

Since this application operates 100% client-side with zero database or backend, maintaining your catalog is straightforward and version-controlled.

All products live in:
```
src/data/products.ts
```

All store configuration (WhatsApp number, phone, email, address) lives in:
```
src/config/store.ts
```

All local product imagery lives in:
```
public/products/
```

---

### 1. How to Add a New Product

1. **Add the product images** to `public/products/`:
   ```bash
   public/products/saree-organza-emerald-1.jpg
   public/products/saree-organza-emerald-2.jpg
   ```
2. **Open `src/data/products.ts`** and add a new entry to the `PRODUCTS` array:
   ```typescript
   {
     id: "saree-005",
     name: "Emerald Zari Organza Saree",
     category: "Sarees",
     subcategory: "Organza Sarees",
     price: 3899,
     originalPrice: 4500,
     description: "Deep emerald green sheer organza saree woven with spun gold threads and an ornate hand-embroidered border.",
     images: [
       "./products/saree-organza-emerald-1.jpg",
       "./products/saree-organza-emerald-2.jpg"
     ],
     thumbnail: "./products/saree-organza-emerald-1.jpg",
     sizes: ["Free Size (5.5m + Unstitched Blouse)"],
     colors: ["Emerald Green", "Forest Gold"],
     material: "Pure Organza Silk with Zardozi Work",
     occasion: "Festive",
     featured: true,
     newArrival: true,
     bestSeller: false,
     available: true,
     stockLabel: "In Stock · Ready to Dispatch",
     details: [
       "Length: 5.5 metres saree with 0.8 metre blouse piece",
       "Hand-embroidered scalloped border",
       "Dry clean only"
     ],
     care: [
       "Dry clean only",
       "Store flat wrapped in muslin"
     ]
   }
   ```
3. **Commit and push** to deploy:
   ```bash
   git add .
   git commit -m "Add Emerald Zari Organza Saree"
   git push
   ```

---

### 2. How to Change a Price

1. Open `src/data/products.ts`.
2. Locate the product by its `id` (e.g. `saree-001`).
3. Update the `price` and optional `originalPrice`:
   ```typescript
   price: 2999,          // Current selling price in INR
   originalPrice: 3499,  // Previous price (shows strike-through and discount %)
   ```
4. Save the file and deploy.

---

### 3. How to Replace a Product Image

1. Place your new high-resolution photo in `public/products/` with your chosen filename (e.g., `saree-001-updated.jpg`).
2. In `src/data/products.ts`, update the `images` array and `thumbnail`:
   ```typescript
   images: [
     "./products/saree-001-updated.jpg",
     "./products/saree-001-2.jpg"
   ],
   thumbnail: "./products/saree-001-updated.jpg",
   ```
3. Save the file and deploy.

---

### 4. How to Remove a Product

1. Open `src/data/products.ts`.
2. Delete the object for that product from the `PRODUCTS` array.
3. Save the file and deploy.

---

### 5. How to Mark a Product as Sold Out

To mark a product sold out without removing it:
```typescript
available: false,
stockLabel: "Sold Out · Next Batch in Production",
```
This automatically updates the card status and alerts clients via WhatsApp if they enquire.

---

### 6. How to Deploy to GitHub Pages

1. **Verify the build locally:**
   ```bash
   npm run build
   npm run preview
   ```
2. **Deploy to GitHub:**
   - Commit your code:
     ```bash
     git add .
     git commit -m "Update Sejora boutique catalog"
     git push origin main
     ```
   - In your GitHub repository settings:
     - Navigate to **Settings > Pages**.
     - Under **Build and deployment > Source**, select **GitHub Actions** (or deploy the `dist/` branch via `gh-pages`).
   - If using custom domain `sejora.uk`, ensure `CNAME` file or repository custom domain settings point to `https://sejora.uk`.

---

## Store Configuration (`src/config/store.ts`)

To change the store contact info, WhatsApp number, or email:
```typescript
export const STORE_CONFIG = {
  storeName: "Sejora",
  whatsappNumber: "447400123456", // International format without +
  displayPhone: "+44 (0) 7400 123456",
  email: "hello@sejora.uk",
  instagram: "https://instagram.com/sejora.uk",
  websiteUrl: "https://sejora.uk"
};
```
