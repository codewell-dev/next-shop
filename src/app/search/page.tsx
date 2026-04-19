"use client";

import GridTileImage from "@/components/grid/grid-tile-images";
import Spinner from "@/components/spinner";
import { Product, Products } from "@/lib/interfaces";
import { useGetProductsQuery } from "@/lib/products";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/slices/cartSlice";
import Link from "next/link";
import React, { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function SearchPage() {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState("featured");
  const [limit] = useState("30");

  const { data, isLoading } = useGetProductsQuery<{
    data: Products;
    error: string;
    isLoading: boolean;
  }>(limit);

  const sorted = React.useMemo(() => {
    if (!data?.products) return [];
    const arr = [...data.products];
    switch (sort) {
      case "price-asc": return arr.sort((a, b) => a.price - b.price);
      case "price-desc": return arr.sort((a, b) => b.price - a.price);
      case "rating": return arr.sort((a, b) => b.rating - a.rating);
      default: return arr;
    }
  }, [data, sort]);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div
        className="py-16 px-6 border-b"
        style={{
          borderColor: "var(--border-light)",
          background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <p className="section-eyebrow mb-3">Browse</p>
          <h1
            className="section-title"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            All Products
          </h1>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8">
        {/* Toolbar */}
        <div
          className="flex items-center justify-between mb-8 pb-6"
          style={{ borderBottom: "1px solid var(--border-light)" }}
        >
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
            {sorted.length} {sorted.length === 1 ? "product" : "products"}
          </p>
          <div className="flex items-center gap-3">
            <AdjustmentsHorizontalIcon className="size-4" style={{ color: "var(--text-muted)" }} />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm outline-none rounded-sm px-3 py-1.5 cursor-pointer"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
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
                className={`block animate-fade-up`}
                style={{ animationDelay: `${Math.min(i * 0.04, 0.5)}s` }}
              >
                <GridTileImage
                  imgSrc={product.images[0]}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  category={product.category}
                  discountPercentage={product.discountPercentage}
                  onQuickAdd={() => dispatch(addProduct(product))}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
