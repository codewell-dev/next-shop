"use client";
import React, { Fragment, useState } from "react";
import GridTileImage from "./grid-tile-images";
import Link from "next/link";

export function ThreeItemGridItem({
  size,
  id,
  path,
  position,
  price,
  title,
}: any) {
  return (
    <div
      className={
        size == 0
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
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

export function ThreeItemGrid({items}: any) {
  return (
    <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      {items?.map((item: any, index: any) => (
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
