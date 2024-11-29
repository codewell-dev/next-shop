"use client"
import React, { useState } from "react";
import GridTileImage from "./grid-tile-images";
import Link from "next/link";

export function ThreeItemGridItem({ size, id, path, position, price, title }: any) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        href={`/product/${id}`}
        className="relative block aspect-square w-full h-full shadow-lg rounded-lg border hover:border-blue-600"
      >
        <GridTileImage
         sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
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

export function ThreeItemGrid() {
  const data = [
    {
      id: 1,
      title: "Acme Circles T-Shirt",
      path: "../main-shirt.svg",
      price: "$20.00 USD",
      imgSize: { height: 600, width: 800 },
      position: "center",
      size: "full",
    },
    {
      id: 2,
      title: "Acme Drawstring Bag",
      path: "../main-bag.svg",
      price: "$12.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "half",
    },
    {
      id: 3,
      title: "Acme Cup",
      path: "../main-cup.svg",
      price: "$15.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "half",
    },
  ];
  const [items, setItems] = useState(data)
  return (
    <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        {items?.map((item: any) => (
            <ThreeItemGridItem key={item.id} id={item.id} title={item.title} path={item.path} price={item.price} imgSize={item.imgSize} position={item.position} size={item.size} />
        ))}
    </div>
  );
}