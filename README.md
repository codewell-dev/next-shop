# FORMA — Objects of Intention

A production-grade e-commerce storefront built with Next.js 14, TypeScript, Redux Toolkit, and Tailwind CSS. Designed as a premium dark-luxury lifestyle brand — engineered like a real product, not a demo.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=flat-square&logo=redux&logoColor=white)

---

## Preview

| Home                                                             | Product Listing                                | Product Detail                                 |
| ---------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| Hero · featured picks · category grid · brand story · newsletter | Sortable grid · 30 products · animated stagger | Gallery · reviews · stock status · add to cart |

---

## Tech Stack

| Layer         | Technology                                  |
| ------------- | ------------------------------------------- |
| Framework     | Next.js 14 (App Router)                     |
| Language      | TypeScript                                  |
| Styling       | Tailwind CSS + custom CSS design system     |
| State         | Redux Toolkit + RTK Query                   |
| UI Primitives | Radix UI (Toast, Sheet)                     |
| Icons         | Heroicons                                   |
| Data          | DummyJSON REST API                          |
| Fonts         | Cormorant Garamond + DM Sans (Google Fonts) |

---

## Features

**Brand & Design**

- Dark luxury design system with CSS custom properties
- Editorial typography: Cormorant Garamond (display) + DM Sans (body)
- Gold `#c9a96e` accent palette with warm cream `#ede8dc` text
- Subtle grain texture overlay and radial gradient accents
- Fully responsive — mobile-first layout

**Pages**

- `/` — Hero section, editors' picks, category grid, brand story, newsletter signup
- `/search` — Full product listing with sort controls (featured / price / rating)
- `/search/[collection]` — Filtered collection pages (beauty, fragrances, furniture…)
- `/product/[id]` — Product detail with image gallery, reviews, stock indicator

**Components**

- Fixed glassmorphism navbar with scrolling ticker bar
- Cart drawer (Radix Sheet) with line items, quantity controls, subtotal
- Product cards with hover overlay and quick-add
- 3-item editorial featured grid
- Horizontal scrollable carousel with arrow navigation
- Toast notification on add-to-cart
- Minimal gold ring spinner

**UX Details**

- Staggered fade-up animations on page load
- Image hover zoom on product cards
- Active thumbnail switching in product gallery
- Color-coded stock status (in stock / low stock / out of stock)
- Discount badge with calculated original price

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/codewell-dev/next-shop.git
cd next-shop

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Design system & global styles
│   ├── StoreProvider.tsx         # Redux provider wrapper
│   ├── search/
│   │   ├── page.tsx              # Product listing page
│   │   └── [collection]/
│   │       └── page.tsx          # Collection filter page
│   └── product/
│       └── [handle]/
│           └── page.tsx          # Product detail page
│
├── components/
│   ├── navbar/
│   │   ├── index.tsx             # Main navbar with ticker
│   │   ├── search.tsx            # Search input
│   │   └── mobile-menu.tsx       # Mobile drawer menu
│   ├── grid/
│   │   ├── grid-tile-images.tsx  # Product card component
│   │   └── three-items.tsx       # Editorial 3-item grid
│   ├── provider-sheet.tsx        # Cart slide-over (Radix Sheet)
│   ├── basket-cart.tsx           # Cart line item
│   ├── carousel.tsx              # Horizontal product carousel
│   ├── footer.tsx                # Site footer
│   ├── gallery.tsx               # Product image gallery
│   ├── spinner.tsx               # Loading indicator
│   ├── tostify.tsx               # Toast notification
│   └── label.tsx                 # Product label overlay
│
└── lib/
    ├── interfaces.ts             # TypeScript types
    ├── products.ts               # RTK Query API endpoints
    ├── hooks.ts                  # Typed Redux hooks
    ├── store.ts                  # Redux store
    ├── utils.ts                  # Helper functions
    └── slices/
        └── cartSlice.ts          # Cart state + localStorage sync
```

---

## Design System

All design tokens are defined as CSS custom properties in `globals.css`:

```css
--bg: #0a0a0b; /* Page background */
--bg-elevated: #131315; /* Surfaces */
--bg-overlay: #1c1c1f; /* Overlays */
--text-primary: #ede8dc; /* Warm cream */
--text-secondary: #8a8a8e;
--accent: #c9a96e; /* Gold */
--font-display: "Cormorant Garamond", serif;
--font-body: "DM Sans", sans-serif;
```

Component classes follow a BEM-like naming convention (`product-card`, `product-card-img`, `product-card-overlay`) and are kept in `globals.css` for direct CSS performance — no runtime class generation.

---

## API

Data is fetched from [DummyJSON](https://dummyjson.com/) via RTK Query:

```
GET https://dummyjson.com/products?limit={n}     — product listing
GET https://dummyjson.com/products/{id}          — product detail
GET https://dummyjson.com/products/category/{c}  — category filter
```

To swap in a real backend, update the `baseUrl` in `src/lib/products.ts`.

---

## Cart Persistence

Cart state is persisted to `localStorage` and rehydrated on load via the Redux slice. The `getAllData` thunk runs once on navbar mount to restore the session.

---

## Roadmap

- [ ] Checkout flow with form validation
- [ ] Authentication (next-auth)
- [ ] Wishlist / favourites
- [ ] Product search with live results
- [ ] Filter sidebar (price range, category, rating)
- [ ] `next/image` migration for LCP optimisation
- [ ] Skeleton loading states
- [ ] Unit tests (Vitest + Testing Library)
