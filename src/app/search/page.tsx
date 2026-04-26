"use client";

import GridTileImage from "@/components/grid/grid-tile-images";
import Spinner from "@/components/spinner";
import { Product, Products } from "@/lib/interfaces";
import { useGetProductsQuery } from "@/lib/products";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/slices/cartSlice";
import Link from "next/link";
import React, { useState } from "react";

const SORT_OPTIONS = [
  { label: "Featured",           value: "featured" },
  { label: "Price: Low → High",  value: "price-asc" },
  { label: "Price: High → Low",  value: "price-desc" },
  { label: "Best Rated",         value: "rating" },
];

export default function SearchPage() {
  const dispatch = useAppDispatch();
  const [sort, setSort]  = useState("featured");

  const { data, isLoading } = useGetProductsQuery<{
    data: Products; error: string; isLoading: boolean;
  }>("30");

  const sorted = React.useMemo(() => {
    if (!data?.products) return [];
    const arr = [...data.products];
    switch (sort) {
      case "price-asc":  return arr.sort((a, b) => a.price - b.price);
      case "price-desc": return arr.sort((a, b) => b.price - a.price);
      case "rating":     return arr.sort((a, b) => b.rating - a.rating);
      default:           return arr;
    }
  }, [data, sort]);

  return (
    <div className="page-wrap">
      {/* Page header */}
      <div style={{ borderBottom: "var(--rule)" }}>
        <div className="px-6 py-10">
          <div className="issue-tag mb-4">Browse — All Products</div>
          <h1
            className="t-display"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            All Products
          </h1>
        </div>
      </div>

      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-6 py-3"
        style={{ borderBottom: "var(--rule-thin)" }}
      >
        <span
          style={{
            fontFamily: "var(--fm)",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            color: "var(--ink-4)",
          }}
        >
          {sorted.length} items
        </span>
        <div className="flex items-center gap-3">
          <span className="t-label">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              background: "var(--paper-2)",
              border: "var(--rule-thin)",
              padding: "5px 10px",
              fontFamily: "var(--fm)",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              color: "var(--ink)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="products-grid">
          {sorted.map((product: Product, i: number) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className={`block fade-up`}
              style={{ animationDelay: `${Math.min(i * 0.035, 0.5)}s` }}
            >
              <GridTileImage
                imgSrc={product.images[0]}
                title={product.title}
                price={product.price}
                rating={product.rating}
                category={product.category}
                discountPercentage={product.discountPercentage}
                index={i}
                onQuickAdd={() => dispatch(addProduct(product))}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
