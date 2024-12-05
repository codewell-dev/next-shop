"use client";

import GridTileImage from "@/components/grid/grid-tile-images";
import Link from "next/link";
import { title } from "process";
import React from "react";

export default function Page() {
    const items = [
        {
          id: 1,
          title: "Acme Circles T-Shirt",
          path: "./main-shirt.svg",
          price: "$20.00 USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
        {
          id: 2,
          title: "Acme Drawstring Bag",
          path: "./main-bag.svg",
          price: "$12.00USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
        {
          id: 3,
          title: "Acme Cup",
          path: "./main-cup.svg",
          price: "$15.00USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
        {
          id: 4,
          title: "Acme Circles T-Shirt",
          path: "./main-shirt.svg",
          price: "$20.00 USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
        {
          id: 5,
          title: "Acme Drawstring Bag",
          path: "./main-bag.svg",
          price: "$12.00USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
        {
          id: 6,
          title: "Acme Cup",
          path: "./main-cup.svg",
          price: "$15.00USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
        {
          id: 7,
          title: "Acme Circles T-Shirt",
          path: "./main-shirt.svg",
          price: "$20.00 USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
        {
          id: 8,
          title: "Acme Drawstring Bag",
          path: "./main-bag.svg",
          price: "$12.00USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
        {
          id: 9,
          title: "Acme Cup",
          path: "./main-cup.svg",
          price: "$15.00USD",
          imgSize: { height: 300, width: 350 },
          position: "bottom",
          size: "",
        },
      ];
  const collections = [
    {
      id: 1,
      title: "All",
      path: "/",
    },
    {
      id: 2,
      title: "Bags",
      path: "/",
    },
    {
      id: 3,
      title: "Drinkware",
      path: "/",
    },
    {
      id: 4,
      title: "Electronics",
      path: "/",
    },
  ];

  const sortby = [
    {
      id: 1,
      title: "Relevance",
      path: "/",
    },
    {
      id: 2,
      title: "Trending",
      path: "/",
    },
    {
      id: 3,
      title: "Latest arrivals",
      path: "/",
    },
    {
      id: 4,
      title: "Price: Low to high",
      path: "/",
    },
  ];
  return (
    <div className="category min-h-screen">
      <div className="mx-auto max-w-screen-2xl flex justify-between ">
        <div className="flex justify-between w-full">
          <div className="category_left w-36">
            <p className="text-neutral-500 text-sm">Collections</p>
            <div className="flex flex-col">
              {collections.map((i) => (
                <Link
                  href={i.path}
                  key={i.id}
                  className="text-sm hover:underline my-0.5"
                >
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap gap-4 justify-center items-center mx-auto">
              {items.map((i: any) => (
                <Link href={`/product/${i.path}`}
                  className="w-96 h-80 mb-4 rounded-lg border hover:border-blue-600"
                  key={i.id}
                >
                  <GridTileImage
                    imgSrc={i.path}
                    title={i.title}
                    position={i.position}
                    size={i.size}
                    price={i.price}
                    id={i.id}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="category_right w-36">
            <p className="text-neutral-500 text-sm">Collections</p>
            <div className="flex flex-col">
              {sortby.map((i) => (
                <Link
                  href={i.path}
                  key={i.id}
                  className="text-sm hover:underline my-0.5"
                >
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
