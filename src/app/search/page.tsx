"use client";

import GridTileImage from "@/components/grid/grid-tile-images";
import { SelectFilter } from "@/components/select-filter";
import Spinner from "@/components/spinner";
import { Product, Products } from "@/lib/interfaces";
import {
  useGetCategoryByNameQuery,
  useGetCategoryListQuery,
  useGetProductsQuery,
} from "@/lib/products";
import Link from "next/link";
import React, { Suspense } from "react";

export default function Page() {
  const { data } = useGetProductsQuery<{
    data: Products;
    error: string;
    isLoading: Boolean;
  }>("9");
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 justify-center items-center w-full">
          {data?.products.map((i: Product) => (
            <Link
              href={`/product/${i.id}`}
              className="w-80 h-80 mb-4 rounded-lg border hover:border-blue-600"
              key={i.id}
            >
              <GridTileImage
                imgSrc={i.images[0]}
                title={i.title}
                price={i.price}
                id={i.id}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
