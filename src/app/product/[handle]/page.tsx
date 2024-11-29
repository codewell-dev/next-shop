"use client";
import GridTileImage from "@/components/grid/grid-tile-images";
import React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function Page() {
  const item = {
    id: 1,
    title: "Acme Circles T-Shirt",
    path: "../main-shirt.svg",
    price: "$20.00 USD",
    imgSize: { height: 600, width: 800 },
    position: "center",
    size: "full",
  };
  return (
    <div className="mx-auto max-w-screen-2xl flex shadow-lg border bg-white">
      <div className="relative w-full h-[800px] flex justify-center items-center flex-col pt-10">
        <div className="w-[600px] h-[500px] relative">
          <GridTileImage
            sizes={
              item.size === ""
                ? "(min-width: 768px) 66vw, 100vw"
                : "(min-width: 768px) 33vw, 100vw"
            }
            imgSrc={item.path}
            title={item.title}
            position={item.position}
            size={item.size}
            price={item.price}
            id={item.id}
            label={false}
          />
          <div className="arrow-box flex w-full absolute bottom-10">
            <div className="flex justify-between w-32 bg-neutral-200 px-5 py-2 rounded-full mx-auto">
              <ArrowLeftIcon className="size-6 text-neutral-500 hover:text-black cursor-pointer" />
              <div className="h-6 w-0.5 bg-neutral-400"></div>
              <ArrowRightIcon className="size-6 text-neutral-500 hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-20 flex gap-2">
          <div className="w-24 h-24 border-neutral-400 border-2 rounded-lg hover:border-blue-600">
            <GridTileImage
              sizes={
                item.size === ""
                  ? "(min-width: 768px) 66vw, 100vw"
                  : "(min-width: 768px) 33vw, 100vw"
              }
              imgSrc={item.path}
              title={item.title}
              position={item.position}
              size={item.size}
              price={item.price}
              id={item.id}
              label={false}
            />
          </div>
          <div className="w-24 h-24 border-neutral-400 border-2 rounded-lg hover:border-blue-600">
            <GridTileImage
              sizes={
                item.size === ""
                  ? "(min-width: 768px) 66vw, 100vw"
                  : "(min-width: 768px) 33vw, 100vw"
              }
              imgSrc={item.path}
              title={item.title}
              position={item.position}
              size={item.size}
              price={item.price}
              id={item.id}
              label={false}
            />
          </div>
          <div className="w-24 h-24 border-neutral-400 border-2 rounded-lg hover:border-blue-600">
            <GridTileImage
              sizes={
                item.size === ""
                  ? "(min-width: 768px) 66vw, 100vw"
                  : "(min-width: 768px) 33vw, 100vw"
              }
              imgSrc={item.path}
              title={item.title}
              position={item.position}
              size={item.size}
              price={item.price}
              id={item.id}
              label={false}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-[800px] p-5">
        <h1 className="text-6xl mt-10 mb-2">Acme Circles T-Shirt</h1>
        <div className="rounded-full text-white px-2 bg-blue-600 w-fit max-w-40">
          <p className="text-sm px-1.5 py-1.5 font-semibold">$20.00 USD</p>
        </div>
        <div className="h-0.5 bg-neutral-200 w-full my-5" />
        <div className="mb-3">
          <p className="text-md mb-2">Color</p>
          <div className="flex gap-3">
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600 cursor-not-allowed opacity-50">
              White
            </p>
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600">
              White
            </p>
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600">
              Black
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-md mb-2">Size</p>
          <div className="flex gap-3">
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600">
              XS
            </p>
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600">
              S
            </p>
          </div>
        </div>
        <p className="text-sm my-5">
          60% combed ringspun cotton/40% polyester jersey tee.
        </p>
        <Button
          variant={"outline"}
          className="relative bg-blue-600 text-white w-full py-6 rounded-full text-md font-medium cursor-not-allowed opacity-40"
        >
          Add to Cart
          <PlusIcon className="size-8 text-white absolute left-5" />
        </Button>
      </div>
    </div>
  );
}
