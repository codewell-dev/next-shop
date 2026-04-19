"use client";

import Link from "next/link";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Carousel from "@/components/carousel";
import { useGetProductsQuery } from "@/lib/products";
import Spinner from "@/components/spinner";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const BRAND_STORY_STATS = [
  { value: "2019", label: "Founded" },
  { value: "40+", label: "Countries" },
  { value: "12k+", label: "Happy Clients" },
  { value: "100%", label: "Curated" },
];

const CATEGORIES = [
  { name: "Beauty", path: "/search/beauty", description: "Ritual skincare & cosmetics" },
  { name: "Fragrances", path: "/search/fragrances", description: "Olfactory art" },
  { name: "Furniture", path: "/search/furniture", description: "Considered interiors" },
  { name: "Groceries", path: "/search/groceries", description: "Artisan pantry" },
];

export default function Home() {
  const { data: dataFeatured, isLoading: loadingFeatured } = useGetProductsQuery("3");
  const { data: dataCarousel, isLoading: loadingCarousel } = useGetProductsQuery("16");

  if (loadingFeatured && loadingCarousel) return <Spinner />;

  return (
    <div className="w-full">
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="hero-section">
        {/* Decorative circle */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
          style={{
            border: "1px solid var(--border-light)",
            opacity: 0.4,
            transform: "translate(30%, -50%)",
          }}
        />
        <div
          className="absolute right-0 top-1/2 w-[35vw] h-[35vw] max-w-[480px] max-h-[480px] rounded-full pointer-events-none"
          style={{
            border: "1px solid var(--border-light)",
            opacity: 0.25,
            transform: "translate(30%, -55%)",
          }}
        />

        <div className="max-w-screen-2xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="hero-badge animate-fade-up mb-8 inline-flex">
              <span className="hero-badge-dot" />
              New Collection — SS 2025
            </div>

            {/* Main title */}
            <h1 className="hero-title animate-fade-up animate-fade-up-2 mb-8">
              Objects<br />
              <em style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>of</em>
              <br />
              Intention
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle animate-fade-up animate-fade-up-3 mb-10 max-w-md" style={{ lineHeight: 1.8 }}>
              Premium goods for those who believe the things you own<br className="hidden md:block" />
              should reflect the life you want to live.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-up animate-fade-up-4">
              <Link href="/search" className="btn-primary">
                Shop Collection
                <ArrowRightIcon className="size-3.5" />
              </Link>
              <Link href="#brand-story" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 animate-fade-up animate-fade-up-5" style={{ borderTop: "1px solid var(--border-light)" }}>
            {BRAND_STORY_STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    color: "var(--text-primary)",
                    fontWeight: 300,
                  }}
                >
                  {stat.value}
                </p>
                <p className="section-eyebrow">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ──────────────────────────── */}
      <section className="py-16 px-4" style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className="max-w-screen-2xl mx-auto mb-10">
          <p className="section-eyebrow mb-3">Featured</p>
          <div className="flex items-end justify-between">
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Editors' Picks
            </h2>
            <Link
              href="/search"
              className="hidden md:flex items-center gap-2 nav-link"
              style={{ letterSpacing: "0.12em" }}
            >
              View All <ArrowRightIcon className="size-3" />
            </Link>
          </div>
        </div>
        <ThreeItemGrid items={dataFeatured?.products} />
        <div className="max-w-screen-2xl mx-auto mt-6 flex md:hidden">
          <Link href="/search" className="btn-outline w-full text-center">
            View All Products
          </Link>
        </div>
      </section>

      {/* ── CATEGORY GRID ──────────────────────────────── */}
      <section className="py-16 px-4" style={{ borderTop: "1px solid var(--border-light)" }}>
        <div className="max-w-screen-2xl mx-auto">
          <p className="section-eyebrow mb-3">Explore</p>
          <h2
            className="section-title mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            By Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.name}
                href={cat.path}
                className={`group relative p-6 flex flex-col justify-end overflow-hidden animate-fade-up animate-fade-up-${i + 1}`}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "3px",
                  minHeight: "180px",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
                }}
              >
                {/* Subtle gradient accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 80% 20%, rgba(201,169,110,0.06) 0%, transparent 60%)",
                  }}
                />
                <div className="relative">
                  <p
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {cat.description}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "var(--text-primary)",
                      fontWeight: 400,
                    }}
                  >
                    {cat.name}
                  </h3>
                </div>
                <ArrowRightIcon
                  className="absolute top-5 right-5 size-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"
                  style={{ color: "var(--accent)" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND STORY ────────────────────────────────── */}
      <section
        id="brand-story"
        className="py-24 px-4"
        style={{ borderTop: "1px solid var(--border-light)" }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <p className="section-eyebrow mb-5">Our Philosophy</p>
              <h2
                className="section-title mb-8"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1 }}
              >
                Craft meets<br />
                <em style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>considered</em>
                <br />design
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  fontSize: "0.93rem",
                  maxWidth: "480px",
                  marginBottom: "1.5rem",
                }}
              >
                FORMA was founded on a single belief: the objects that fill your everyday life
                should be chosen with the same care you'd give to anything important.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                  fontSize: "0.88rem",
                  maxWidth: "460px",
                  marginBottom: "2.5rem",
                }}
              >
                We source from independent makers, heritage brands, and emerging designers
                who share our obsession with materials, longevity, and restraint.
              </p>
              <Link href="/search" className="btn-primary inline-flex">
                Shop Now <ArrowRightIcon className="size-3.5" />
              </Link>
            </div>

            {/* Right: manifesto grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Intentional Sourcing", body: "Every product is hand-selected against strict criteria for quality and sustainability." },
                { title: "Minimal Packaging", body: "We ship in 100% recycled, plastic-free packaging. Because it matters." },
                { title: "Fair Pricing", body: "We work directly with makers to ensure fair compensation throughout the supply chain." },
                { title: "Lifetime Support", body: "We stand behind everything we sell. If something goes wrong, we make it right." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "3px",
                  }}
                >
                  <div
                    className="mb-3"
                    style={{ width: "28px", height: "1px", background: "var(--accent)" }}
                  />
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      color: "var(--text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ───────────────────────────────────── */}
      <Carousel items={dataCarousel?.products} />

      {/* ── NEWSLETTER ─────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}
      >
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="section-eyebrow mb-4">Stay Informed</p>
          <h2
            className="section-title mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            The FORMA Edit
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.88rem",
              marginBottom: "2.5rem",
              letterSpacing: "0.02em",
            }}
          >
            New arrivals, behind-the-scenes stories, and curated reading — direct to your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 text-sm outline-none rounded-sm"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.02em",
              }}
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "1rem", letterSpacing: "0.08em" }}>
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
