"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Product } from "@/lib/interfaces";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/slices/cartSlice";

export default function Carousel({ items }: { items: Product[] | undefined }) {
  const dispatch = useAppDispatch();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  if (!items?.length) return null;

  return (
    <section style={{ borderBottom: "var(--rule)" }}>
      {/* Header */}
      <div
        className="flex items-baseline justify-between px-6 py-5"
        style={{ borderBottom: "var(--rule-thin)" }}
      >
        <div className="flex items-baseline gap-6">
          <span className="t-label" style={{ color: "var(--rust)" }}>Curated Selection</span>
          <h2
            className="t-section"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            More to Explore
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-0">
          {["←", "→"].map((arrow, i) => (
            <button
              key={arrow}
              onClick={() => scroll(i === 0 ? "left" : "right")}
              style={{
                fontFamily: "var(--fm)",
                fontSize: "1rem",
                color: "var(--ink-3)",
                background: "none",
                border: "var(--rule-thin)",
                borderRight: i === 0 ? "none" : "var(--rule-thin)",
                width: 40,
                height: 40,
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--ink)";
                el.style.color = "var(--paper)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "none";
                el.style.color = "var(--ink-3)";
              }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((product: Product, i: number) => (
          <div
            key={product.id}
            className="flex-none w-56 md:w-64"
            style={{
              borderRight: "var(--rule-thin)",
            }}
          >
            <Link href={`/product/${product.id}`} className="block">
              <div
                style={{
                  background: "var(--paper-3)",
                  height: 220,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "var(--rule-thin)",
                  position: "relative",
                }}
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{
                    height: 180,
                    objectFit: "contain",
                    padding: "1rem",
                    filter: "contrast(1.06)",
                    transition: "transform 0.4s ease",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/300x300/ddd6c8/999?text=FORMA";
                  }}
                />
              </div>
              <div className="p-3">
                <span className="prod-number block mb-1">
                  {String(i + 1).padStart(2, "0")} — {product.category}
                </span>
                <p
                  className="line-clamp-1 mb-1"
                  style={{
                    fontFamily: "var(--fd)",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "var(--ink)",
                  }}
                >
                  {product.title}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontFamily: "var(--fm)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addProduct(product));
                    }}
                    style={{
                      fontFamily: "var(--fm)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      background: "none",
                      border: "var(--rule-thin)",
                      padding: "4px 10px",
                      cursor: "pointer",
                      transition: "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "var(--ink)";
                      el.style.color = "var(--paper)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "none";
                      el.style.color = "var(--ink-3)";
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
