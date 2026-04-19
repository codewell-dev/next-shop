"use client";

import GridTileImage from "@/components/grid/grid-tile-images";
import Spinner from "@/components/spinner";
import { Product, Products } from "@/lib/interfaces";
import { useGetCategoryByNameQuery } from "@/lib/products";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/slices/cartSlice";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function CollectionPage() {
  const dispatch = useAppDispatch();
  const { collection } = useParams<{ collection: string }>();
  const displayName = collection
    ? collection.charAt(0).toUpperCase() + collection.slice(1)
    : "";

  const { data, isLoading } = useGetCategoryByNameQuery<{
    data: Products;
    error: string;
    isLoading: boolean;
  }>(collection);

  return (
    <div className="min-h-screen">
      <div
        className="py-16 px-6 border-b"
        style={{
          borderColor: "var(--border-light)",
          background:
            "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <p className="section-eyebrow mb-3">Collection</p>
          <h1
            className="section-title"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {displayName}
          </h1>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8">
        <div
          className="flex items-center justify-between mb-8 pb-6"
          style={{ borderBottom: "1px solid var(--border-light)" }}
        >
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
            {data?.products?.length ?? 0} products in {displayName}
          </p>
          <Link
            href="/search"
            className="nav-link"
            style={{ fontSize: "0.72rem" }}
          >
            ← All Products
          </Link>
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className="products-grid">
            {data?.products?.map((product: Product, i: number) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="block animate-fade-up"
                style={{ animationDelay: `${Math.min(i * 0.05, 0.5)}s` }}
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
