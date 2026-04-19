"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/interfaces";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/slices/cartSlice";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Carousel({ items }: { items: Product[] | undefined }) {
  const dispatch = useAppDispatch();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = 320;
    trackRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (!items?.length) return null;

  return (
    <section className="py-20 px-4" style={{ borderTop: "1px solid var(--border-light)" }}>
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto mb-10 flex items-end justify-between">
        <div>
          <p className="section-eyebrow mb-3">Curated Selection</p>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl">
            More to Explore
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2.5 rounded-sm transition-colors"
            style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}
            aria-label="Scroll left"
          >
            <ArrowLeftIcon className="size-4" style={{ color: "var(--text-secondary)" }} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2.5 rounded-sm transition-colors"
            style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}
            aria-label="Scroll right"
          >
            <ArrowRightIcon className="size-4" style={{ color: "var(--text-secondary)" }} />
          </button>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-4 max-w-screen-2xl mx-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((product: Product, i: number) => (
          <div key={product.id} className="flex-none w-64 md:w-72">
            <Link href={`/product/${product.id}`} className="block">
              <div className="product-card">
                <div className="product-card-img-wrap" style={{ height: "260px", aspectRatio: "unset" }}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="product-card-img"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/400x400/131315/4a4a4e?text=FORMA";
                    }}
                  />
                </div>
                <div className="product-card-overlay">
                  <button
                    className="product-card-quick-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addProduct(product));
                    }}
                  >
                    Quick Add
                  </button>
                </div>
                <div className="p-3" style={{ borderTop: "1px solid var(--border-light)" }}>
                  <p
                    className="line-clamp-1 mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {product.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text-primary)" }}>
                      ${product.price.toFixed(2)}
                    </span>
                    {product.discountPercentage > 5 && (
                      <span className="discount-badge">−{Math.round(product.discountPercentage)}%</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
