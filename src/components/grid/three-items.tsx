"use client";

import React from "react";
import Link from "next/link";
import GridTileImage from "./grid-tile-images";
import { Product } from "@/lib/interfaces";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/slices/cartSlice";

function FeaturedItem({
  product,
  size,
  index,
}: {
  product: Product;
  size: "large" | "small";
  index: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`animate-fade-up animate-fade-up-${index + 1} ${
        size === "large"
          ? "lg:col-span-4 lg:row-span-2 col-span-2 row-span-2"
          : "lg:col-span-2 lg:row-span-1 col-span-2"
      }`}
    >
      <Link href={`/product/${product.id}`} className="block w-full h-full">
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
    </div>
  );
}

export function ThreeItemGrid({ items }: { items: Product[] | undefined }) {
  if (!items || items.length < 3) return null;
  const [first, second, third] = items;

  return (
    <div className="mx-auto grid max-w-screen-2xl gap-3 px-4 pb-4 grid-cols-2 lg:grid-cols-6 lg:grid-rows-2" style={{ minHeight: "60vh" }}>
      <FeaturedItem product={first} size="large" index={1} />
      <FeaturedItem product={second} size="small" index={2} />
      <FeaturedItem product={third} size="small" index={3} />
    </div>
  );
}
