"use client";
import React, { Fragment } from "react";
import GridTileImage from "./grid-tile-images";
import Link from "next/link";
import { Product } from "@/lib/interfaces";

export function ThreeItemGridItem({
  size,
  id,
  path,
  position,
  price,
  title,
}: {size: number, id: number, path: string, position: string | undefined, price: number, title: string}) {
  return (
    <div
      className={
        size == 0
          ? "lg:md:col-span-4 lg:md:row-span-2 col-span-2 row-span-2"
          : "lg:md:col-span-2 lg:md:row-span-1 col-span-2 row-span-2"
      }
    >
      <Link
        href={`/product/${id}`}
        className="relative block aspect-square w-full h-full shadow-lg rounded-lg border hover:border-blue-600"
      >
        <GridTileImage
          imgSrc={path}
          title={title}
          position={position}
          size={size}
          price={price}
          id={id}
        />
      </Link>
    </div>
  );
}

export function ThreeItemGrid({items}: {items: Product[] | undefined}) {
  return (
    <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      {items?.map((item: Product, index: number) => (
        <Fragment key={item.id}>
          <ThreeItemGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            path={item.images[0]}
            price={item.price}
            position={item.position}
            size={index}
          />
        </Fragment>
      ))}
    </div>
  );
}
