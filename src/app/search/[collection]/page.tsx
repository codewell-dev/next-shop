"use client";
import GridTileImage from "@/components/grid/grid-tile-images";
import Spinner from "@/components/spinner";
import { Product } from "@/lib/interfaces";
import { useGetCategoryByNameQuery } from "@/lib/products";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams<{ collection: any }>();
  const { data, isLoading } = useGetCategoryByNameQuery(params.collection);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-full z-0 mt-10">
      <div className="flex flex-wrap gap-4 justify-center">
        {data?.products.map((i: Product) => (
          <Link
            href={`/product/${i.id}`}
            className="w-96 h-80 mb-4 rounded-lg border hover:border-blue-600"
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
