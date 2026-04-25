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

const STATS = [
  { v: "2019", l: "Founded" },
  { v: "40+",  l: "Countries" },
  { v: "12k+", l: "Clients" },
  { v: "100%", l: "Curated" },
];

const P = "clamp(20px, 4vw, 56px)";

export default function Home() {
  const { data: featured, isLoading: l1 } = useGetProductsQuery("3");
  const { data: carousel, isLoading: l2 } = useGetProductsQuery("16");

  if (l1 && l2) return <Spinner />;

  return (
    <div className="page-wrap">

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ borderBottom: "var(--rule)" }}>
        <div className="split-grid" style={{ minHeight: "min(88vh, 780px)" }}>

          <div className="hero-left flex flex-col justify-between" style={{ padding: P }}>
            <div>
              <div className="issue-tag fade-up" style={{ marginBottom: 28 }}>
                № 001 — Objects of Intention
              </div>
              <h1 className="t-display fade-up fade-up-1" style={{
                fontSize: "clamp(3rem, 10vw, 9rem)",
                marginBottom: 32,
              }}>
                Things<br />worth<br />owning.
              </h1>
            </div>
            <div className="fade-up fade-up-2">
              <p style={{
                fontFamily: "var(--fb)", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                color: "var(--ink-3)", lineHeight: 1.85,
                maxWidth: 400, marginBottom: 24,
              }}>
                We source from independent makers and heritage brands who share
                our obsession with materials, longevity, and restraint.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/search" className="btn-primary">Shop Collection →</Link>
                <Link href="#brand-story" className="btn-outline">Our Story</Link>
              </div>
            </div>
          </div>

          <div className="vr" style={{ background: "var(--ink)" }} />

          <div className="hero-right flex flex-col">
            <div className="hero-right-top flex-1 flex flex-col justify-end gap-5"
              style={{ padding: P, borderBottom: "var(--rule)" }}>
              <div>
                <div className="t-label mb-2" style={{ color: "var(--rust)" }}>New Collection</div>
                <div style={{
                  fontFamily: "var(--fm)", fontSize: "0.72rem",
                  color: "var(--ink-3)", lineHeight: 1.9, letterSpacing: "0.04em",
                }}>
                  Spring · Summer 2025<br />Premium lifestyle goods<br />Curated for the intentional
                </div>
              </div>
              <blockquote style={{
                fontFamily: "var(--fd)", fontStyle: "italic",
                fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                color: "var(--ink-2)", lineHeight: 1.55,
                borderLeft: "3px solid var(--rust)", paddingLeft: "1rem", maxWidth: 320,
              }}>
                "The things you own, end up owning you — unless you choose them wisely."
              </blockquote>
            </div>

            <div className="hero-stats grid grid-cols-2">
              {STATS.map((s, i) => (
                <div key={s.l} style={{
                  padding: "clamp(12px, 2vw, 22px) clamp(14px, 2.5vw, 26px)",
                  borderTop: "var(--rule)",
                  borderRight: i % 2 === 0 ? "var(--rule-thin)" : "none",
                  borderBottom: i < 2 ? "var(--rule-thin)" : "none",
                }}>
                  <div style={{
                    fontFamily: "var(--fm)",
                    fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                    fontWeight: 500, lineHeight: 1, marginBottom: 4,
                  }}>{s.v}</div>
                  <div className="t-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ─────────────────────────────────── */}
      <section style={{ borderTop: "var(--rule)" }}>
        <div className="flex items-baseline justify-between flex-wrap gap-3"
          style={{ padding: "14px clamp(16px, 3vw, 28px)", borderBottom: "var(--rule-thin)" }}>
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className="t-label" style={{ color: "var(--rust)" }}>Featured</span>
            <h2 className="t-section" style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}>Editors' Picks</h2>
          </div>
          <Link href="/search" style={{
            fontFamily: "var(--fm)", fontSize: "0.65rem",
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--ink-3)", textDecoration: "none", whiteSpace: "nowrap",
          }}>View all →</Link>
        </div>
        <ThreeItemGrid items={featured?.products} />
      </section>

      {/* ── CATEGORIES ───────────────────────────────── */}
      <section style={{ borderTop: "var(--rule)" }}>
        <div className="flex items-baseline gap-4 flex-wrap"
          style={{ padding: "14px clamp(16px, 3vw, 28px)", borderBottom: "var(--rule-thin)" }}>
          <span className="t-label" style={{ color: "var(--rust)" }}>Browse</span>
          <h2 className="t-section" style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}>By Category</h2>
        </div>
        <div className="cat-grid" style={{ borderBottom: "var(--rule)" }}>
          {CATEGORIES.map((cat, i) => (
            <Link key={cat.name} href={cat.path} className="cat"
              style={{
                borderRight: i < 3 ? "var(--rule-thin)" : "none",
                textDecoration: "none", color: "inherit",
                minHeight: "clamp(100px, 14vw, 170px)",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                padding: "clamp(14px, 2.5vw, 22px)",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--paper-2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "")}
            >
              <span style={{ fontFamily: "var(--fm)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-4)" }}>
                {cat.num}
              </span>
              <div>
                <div style={{ fontFamily: "var(--fm)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 5 }}>
                  {cat.desc}
                </div>
                <h3 style={{ fontFamily: "var(--fd)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.15rem, 3vw, 1.6rem)", letterSpacing: "-0.02em" }}>
                  {cat.name} →
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BRAND STORY ──────────────────────────────── */}
      <section id="brand-story" style={{ borderBottom: "var(--rule)" }}>
        <div className="flex items-baseline gap-4 flex-wrap"
          style={{ padding: "14px clamp(16px, 3vw, 28px)", borderBottom: "var(--rule-thin)" }}>
          <span className="t-label" style={{ color: "var(--rust)" }}>Our Philosophy</span>
          <h2 className="t-section" style={{ fontSize: "clamp(1.4rem, 4vw, 2.8rem)" }}>Craft meets considered design</h2>
        </div>

        <div className="split-grid">
          <div style={{ padding: P }}>
            <p style={{ fontFamily: "var(--fb)", fontSize: "clamp(0.85rem, 1.5vw, 0.92rem)", color: "var(--ink-2)", lineHeight: 1.9, marginBottom: "1.2rem", maxWidth: 480 }}>
              FORMA was founded on a single belief: the objects that fill your everyday life
              should be chosen with the same care you'd give to anything important.
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: "clamp(0.82rem, 1.4vw, 0.88rem)", color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2rem", maxWidth: 460 }}>
              We source from independent makers, heritage brands, and emerging designers
              who share our obsession with materials, longevity, and restraint.
            </p>
            <Link href="/search" className="btn-primary">Shop Now →</Link>
          </div>

          <div className="vr" style={{ background: "var(--ink)" }} />

          <div className="pillars-grid">
            {PILLARS.map((p, i) => (
              <div key={p.num} className="pillar" style={{
                padding: "clamp(14px, 2.5vw, 22px)",
                borderBottom: i < 2 ? "var(--rule-thin)" : "none",
                borderRight: i % 2 === 0 ? "var(--rule-thin)" : "none",
              }}>
                <div style={{ fontFamily: "var(--fm)", fontSize: "0.75rem", color: "var(--rust)", marginBottom: 8, fontWeight: 500 }}>{p.num}.</div>
                <h4 style={{ fontFamily: "var(--fd)", fontWeight: 700, fontSize: "clamp(0.9rem, 1.8vw, 1rem)", color: "var(--ink)", marginBottom: 7, lineHeight: 1.2 }}>{p.title}</h4>
                <p style={{ fontFamily: "var(--fb)", fontSize: "clamp(0.75rem, 1.3vw, 0.8rem)", color: "var(--ink-3)", lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ─────────────────────────────────── */}
      <Carousel items={carousel?.products} />

      {/* ── NEWSLETTER ───────────────────────────────── */}
      <section style={{ borderTop: "var(--rule)", borderBottom: "var(--rule)" }}>
        <div className="split-grid">
          <div className="newsletter-left flex flex-col justify-center" style={{ padding: P }}>
            <span className="t-label mb-3" style={{ color: "var(--rust)" }}>Stay Informed</span>
            <h2 className="t-section" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", marginBottom: 14 }}>
              The FORMA Edit
            </h2>
            <p style={{ fontFamily: "var(--fb)", fontSize: "clamp(0.82rem, 1.4vw, 0.88rem)", color: "var(--ink-3)", lineHeight: 1.85, maxWidth: 360 }}>
              New arrivals, behind-the-scenes stories, and curated reading — direct to your inbox.
            </p>
          </div>
          <div className="vr" style={{ background: "var(--ink)" }} />
          <div className="newsletter-right flex flex-col justify-center gap-5" style={{ padding: P }}>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" style={{
                background: "var(--paper-2)", border: "var(--rule-thin)",
                padding: "12px 16px", fontFamily: "var(--fm)",
                fontSize: "0.78rem", letterSpacing: "0.04em",
                color: "var(--ink)", outline: "none", width: "100%",
              }} />
              <button type="submit" className="btn-primary">Subscribe →</button>
            </form>
            <p style={{ fontFamily: "var(--fm)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-4)" }}>
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
