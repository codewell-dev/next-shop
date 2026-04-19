"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Search from "./search";
import MobileMenu from "./mobile-menu";
import { ProviderSheet } from "../provider-sheet";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getAllData } from "@/lib/slices/cartSlice";
import { Menu } from "@/lib/interfaces";

const MENU: Menu[] = [
  { id: 1, path: "/search", title: "All" },
  { id: 2, path: "/search/beauty", title: "Beauty" },
  { id: 3, path: "/search/fragrances", title: "Fragrances" },
  { id: 4, path: "/search/furniture", title: "Furniture" },
];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    dispatch(getAllData());
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cart = useAppSelector((state) => state.cart);
  const totalPrice =
    cart.length > 0
      ? cart.reduce((a: number, b: any) => a + b.price * b.quantity, 0)
      : 0;

  return (
    <header className="navbar" style={{ borderBottomColor: scrolled ? "var(--border)" : "var(--border-light)" }}>
      {/* Ticker */}
      <div className="ticker-bar">
        <div className="ticker-track">
          {[...Array(2)].map((_, idx) => (
            <span key={idx} className="ticker-item">
              Free shipping on orders over $150 <span className="ticker-sep">✦</span>
              Handcrafted with intention <span className="ticker-sep">✦</span>
              New arrivals every fortnight <span className="ticker-sep">✦</span>
              Complimentary gift wrapping available <span className="ticker-sep">✦</span>
              Worldwide delivery in 5–10 days <span className="ticker-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 py-3.5 max-w-screen-2xl mx-auto">
        {/* Mobile menu */}
        <div className="block md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={MENU} />
          </Suspense>
        </div>

        {/* Logo + links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="navbar-logo">
            FORMA
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            {MENU.map((item) => (
              <li key={item.id}>
                <Link href={item.path} className="nav-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: search + cart */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Search />
          </div>
          <ProviderSheet
            cart={cart}
            totalPrice={totalPrice}
            cartTotal={cart.length}
          />
        </div>
      </nav>
    </header>
  );
}
