"use client";

import Link from "next/link";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Carousel from "@/components/carousel";
import { useGetProductsQuery } from "@/lib/products";
import Spinner from "@/components/spinner";

const CATEGORIES = [
  { name: "Beauty",     path: "/search/beauty",     num: "01", desc: "Ritual skincare & cosmetics" },
  { name: "Fragrances", path: "/search/fragrances",  num: "02", desc: "Olfactory art" },
  { name: "Furniture",  path: "/search/furniture",   num: "03", desc: "Considered interiors" },
  { name: "Groceries",  path: "/search/groceries",   num: "04", desc: "Artisan pantry" },
];

const PILLARS = [
  { num: "I",   title: "Intentional Sourcing",  body: "Every product hand-selected against strict quality and sustainability criteria." },
  { num: "II",  title: "Minimal Packaging",     body: "100% recycled, plastic-free packaging. Because it matters." },
  { num: "III", title: "Fair Pricing",           body: "Direct maker relationships ensure fair compensation throughout." },
  { num: "IV",  title: "Lifetime Support",       body: "We stand behind everything we sell. If something goes wrong, we make it right." },
];

export default function Home() {
  const { data: featured, isLoading: l1 } = useGetProductsQuery("5");
  const { data: carousel, isLoading: l2 } = useGetProductsQuery("16");

  if (l1 && l2) return <Spinner />;

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ borderBottom: "var(--rule)" }}>
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 2px 1fr", minHeight: "88vh" }}
        >
          {/* Left col */}
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <div className="issue-tag mb-8 fade-up">№ 001 — Objects of Intention</div>

              <h1
                className="t-display fade-up fade-up-1 mb-8"
                style={{ fontSize: "clamp(4rem, 11vw, 10rem)" }}
              >
                Things<br />
                worth<br />
                owning.
              </h1>
            </div>

            <div className="fade-up fade-up-2">
              <p
                style={{
                  fontFamily: "var(--fb)",
                  fontSize: "0.9rem",
                  color: "var(--ink-3)",
                  lineHeight: 1.85,
                  maxWidth: 380,
                  marginBottom: "2rem",
                }}
              >
                We source from independent makers and heritage brands who share
                our obsession with materials, longevity, and restraint.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/search" className="btn-primary">
                  Shop Collection →
                </Link>
                <Link href="#brand-story" className="btn-outline">
                  Our Story
                </Link>
              </div>
            </div>
          </div>

          {/* Vertical rule */}
          <div style={{ background: "var(--ink)" }} />

          {/* Right col: metadata + stats */}
          <div className="flex flex-col">
            {/* Top: issue info */}
            <div
              className="p-8 md:p-12 flex-1 flex flex-col justify-end gap-6"
              style={{ borderBottom: "var(--rule)" }}
            >
              <div>
                <div
                  className="t-label mb-2"
                  style={{ color: "var(--rust)" }}
                >
                  New Collection
                </div>
                <div
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "0.72rem",
                    color: "var(--ink-3)",
                    lineHeight: 1.9,
                    letterSpacing: "0.04em",
                  }}
                >
                  Spring · Summer 2025<br />
                  Premium lifestyle goods<br />
                  Curated for the intentional
                </div>
              </div>

              {/* Manifesto pull-quote */}
              <blockquote
                style={{
                  fontFamily: "var(--fd)",
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "var(--ink-2)",
                  lineHeight: 1.5,
                  borderLeft: "3px solid var(--rust)",
                  paddingLeft: "1rem",
                  maxWidth: 300,
                }}
              >
                "The things you own, end up owning you — unless you choose them
                wisely."
              </blockquote>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2">
              {[
                { v: "2019",  l: "Founded" },
                { v: "40+",   l: "Countries" },
                { v: "12k+",  l: "Clients" },
                { v: "100%",  l: "Curated" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className="p-6"
                  style={{
                    borderTop: "var(--rule)",
                    borderRight: i % 2 === 0 ? "var(--rule-thin)" : "none",
                    borderBottom: i < 2 ? "var(--rule-thin)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--fm)",
                      fontSize: "2.4rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.v}
                  </div>
                  <div className="t-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ──────────────────────────────────────── */}
      <section>
        {/* Section header */}
        <div
          className="flex items-baseline justify-between px-6 py-5"
          style={{ borderBottom: "var(--rule-thin)" }}
        >
          <div className="flex items-baseline gap-6">
            <span className="t-label" style={{ color: "var(--rust)" }}>Featured</span>
            <h2
              className="t-section"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Editors' Picks
            </h2>
          </div>
          <Link
            href="/search"
            style={{
              fontFamily: "var(--fm)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              textDecoration: "none",
            }}
          >
            View all →
          </Link>
        </div>

        <ThreeItemGrid items={featured?.products} />
      </section>

      {/* ── CATEGORIES ────────────────────────────────────── */}
      <section style={{ borderTop: "var(--rule)" }}>
        <div
          className="flex items-baseline gap-6 px-6 py-5"
          style={{ borderBottom: "var(--rule-thin)" }}
        >
          <span className="t-label" style={{ color: "var(--rust)" }}>Browse</span>
          <h2
            className="t-section"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: "var(--rule)" }}>
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.name}
              href={cat.path}
              className={`block p-6 fade-up fade-up-${i + 1}`}
              style={{
                borderRight: i < 3 ? "var(--rule-thin)" : "none",
                textDecoration: "none",
                minHeight: 160,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--paper-2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "transparent")
              }
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-4)",
                  }}
                >
                  {cat.num}
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    marginBottom: 6,
                  }}
                >
                  {cat.desc}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--fd)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {cat.name} →
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BRAND STORY ───────────────────────────────────── */}
      <section id="brand-story" style={{ borderBottom: "var(--rule)" }}>
        {/* Heading row */}
        <div
          className="flex items-baseline gap-6 px-6 py-5"
          style={{ borderBottom: "var(--rule-thin)" }}
        >
          <span className="t-label" style={{ color: "var(--rust)" }}>Our Philosophy</span>
          <h2
            className="t-section"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Craft meets considered design
          </h2>
        </div>

        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 2px 1fr" }}
        >
          {/* Left: text */}
          <div className="p-8 md:p-12">
            <p
              style={{
                fontFamily: "var(--fb)",
                fontSize: "0.9rem",
                color: "var(--ink-2)",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
                maxWidth: 440,
              }}
            >
              FORMA was founded on a single belief: the objects that fill your
              everyday life should be chosen with the same care you'd give to
              anything important.
            </p>
            <p
              style={{
                fontFamily: "var(--fb)",
                fontSize: "0.88rem",
                color: "var(--ink-3)",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
                maxWidth: 420,
              }}
            >
              We source from independent makers, heritage brands, and emerging
              designers who share our obsession with materials, longevity, and
              restraint.
            </p>
            <Link href="/search" className="btn-primary">
              Shop Now →
            </Link>
          </div>

          {/* Vertical rule */}
          <div style={{ background: "var(--ink)" }} />

          {/* Right: pillars */}
          <div className="grid grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={p.num}
                className="p-6"
                style={{
                  borderBottom: i < 2 ? "var(--rule-thin)" : "none",
                  borderRight: i % 2 === 0 ? "var(--rule-thin)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "0.75rem",
                    color: "var(--rust)",
                    marginBottom: 10,
                    fontWeight: 500,
                  }}
                >
                  {p.num}.
                </div>
                <h4
                  style={{
                    fontFamily: "var(--fd)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--ink)",
                    marginBottom: 8,
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--fb)",
                    fontSize: "0.78rem",
                    color: "var(--ink-3)",
                    lineHeight: 1.75,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ──────────────────────────────────────── */}
      <Carousel items={carousel?.products} />

      {/* ── NEWSLETTER ────────────────────────────────────── */}
      <section style={{ borderTop: "var(--rule)", borderBottom: "var(--rule)" }}>
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 2px 1fr" }}
        >
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="t-label mb-3" style={{ color: "var(--rust)" }}>
              Stay Informed
            </span>
            <h2
              className="t-section mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              The FORMA Edit
            </h2>
            <p
              style={{
                fontFamily: "var(--fb)",
                fontSize: "0.87rem",
                color: "var(--ink-3)",
                lineHeight: 1.85,
                maxWidth: 360,
              }}
            >
              New arrivals, behind-the-scenes stories, and curated reading —
              direct to your inbox.
            </p>
          </div>

          <div style={{ background: "var(--ink)" }} />

          <div className="p-8 md:p-12 flex flex-col justify-center gap-5">
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  background: "var(--paper-2)",
                  border: "var(--rule-thin)",
                  padding: "12px 16px",
                  fontFamily: "var(--fm)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.04em",
                  color: "var(--ink)",
                  outline: "none",
                  width: "100%",
                }}
              />
              <button type="submit" className="btn-primary">
                Subscribe →
              </button>
            </form>
            <p
              style={{
                fontFamily: "var(--fm)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-4)",
              }}
            >
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
