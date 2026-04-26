"use client";

import Link from "next/link";
import { Suspense, useEffect } from "react";
import Search from "./search";
import MobileMenu from "./mobile-menu";
import { ProviderSheet } from "../provider-sheet";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getAllData } from "@/lib/slices/cartSlice";
import { Menu } from "@/lib/interfaces";

const MENU: Menu[] = [
  { id: 1, path: "/search",            title: "All" },
  { id: 2, path: "/search/beauty",     title: "Beauty" },
  { id: 3, path: "/search/fragrances", title: "Fragrances" },
  { id: 4, path: "/search/furniture",  title: "Furniture" },
];

const TICKER = [
  "Free shipping on orders over $150",
  "Handcrafted with intention",
  "New arrivals every fortnight",
  "Complimentary gift wrapping",
  "Worldwide delivery in 5–10 days",
];

export default function Navbar() {
  const dispatch = useAppDispatch();

  useEffect(() => { dispatch(getAllData()); }, []);

  const cart       = useAppSelector((s) => s.cart);
  const totalPrice = cart.length > 0
    ? cart.reduce((a: number, b: any) => a + b.price * b.quantity, 0)
    : 0;

  return (
    <header className="navbar">
      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[0, 1].map((rep) => (
            <span key={rep} className="ticker-item">
              {TICKER.map((t, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 36 }}>
                  {t}<span className="ticker-sep">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Nav row */}
      <div className="page-wrap flex items-stretch" style={{ minHeight: 56 }}>

        {/* Mobile menu trigger */}
        <div className="flex items-center px-4 md:hidden" style={{ borderRight: "var(--rule-thin)" }}>
          <Suspense fallback={null}>
            <MobileMenu menu={MENU} />
          </Suspense>
        </div>

        {/* Desktop: logo + links */}
        <div className="hidden md:flex items-stretch">
          <Link href="/" className="flex items-center px-6" style={{ borderRight: "var(--rule-thin)" }}>
            <span style={{ fontFamily: "var(--fd)", fontStyle: "italic", fontWeight: 700, fontSize: "1.45rem", letterSpacing: "-0.03em", color: "var(--ink)" }}>
              FORMA
            </span>
          </Link>
          <div className="flex items-stretch">
            {MENU.map((item) => (
              <Link key={item.id} href={item.path}
                className="flex items-center px-5"
                style={{ fontFamily: "var(--fm)", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)", borderRight: "var(--rule-thin)", textDecoration: "none", transition: "color 0.15s, background 0.15s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--ink)"; el.style.background = "var(--paper-2)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--ink-3)"; el.style.background = "transparent"; }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile: logo center */}
        <Link href="/" className="flex items-center justify-center flex-1 px-4 md:hidden">
          <span style={{ fontFamily: "var(--fd)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "-0.03em", color: "var(--ink)" }}>
            FORMA
          </span>
        </Link>

        {/* Right: search + cart */}
        <div className="flex items-stretch ml-auto">
          <div className="nav-search hidden md:flex items-center px-4" style={{ borderLeft: "var(--rule-thin)" }}>
            <Search />
          </div>
          <div className="flex items-center px-4" style={{ borderLeft: "var(--rule-thin)" }}>
            <ProviderSheet cart={cart} totalPrice={totalPrice} cartTotal={cart.length} />
          </div>
        </div>

      </div>
    </header>
  );
}
