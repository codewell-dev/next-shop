"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import GridTileImage from "./grid/grid-tile-images";
import { changeActiveImgMinus, changeActiveImgPlus } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Spinner from "./spinner";
import { Product } from "@/lib/interfaces";

export default function Gallery({ item }: {item: Product}) {
  const searchParams = useSearchParams();
  const imageParamsId: number = Number(searchParams.get("image"));
  const [activeImage, setActiveImage] = useState<number>(imageParamsId || 0);

  useEffect(() => {
    setActiveImage(imageParamsId);
  }, [imageParamsId]);

  if (!item) {
    return <Spinner />;
  }
  return (
    <div className="relative w-full h-[800px] flex justify-center items-center flex-col pt-10">
      <div className="w-[600px] h-[500px] relative p-3">
        <GridTileImage
          imgSrc={item.images[activeImage]}
          title={item.title}
          price={item.price}
          id={item.id}
          label={false}
        />
        <div className="arrow-box flex w-full absolute bottom-10">
          <div className="flex justify-between w-32 bg-neutral-200 px-5 py-2 rounded-full mx-auto">
            <ArrowLeftIcon
              className="size-6 text-neutral-500 hover:text-black cursor-pointer"
              onClick={() => changeActiveImgMinus(activeImage, setActiveImage)}
            />
            <div className="h-6 w-0.5 bg-neutral-400"></div>
            <ArrowRightIcon
              className="size-6 text-neutral-500 hover:text-black cursor-pointer"
              onClick={() =>
                changeActiveImgPlus(activeImage, setActiveImage, item)
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-2">

          {item.images.map((i: any, index: any) => (
            <div
              className={`w-24 h-24  border-2 rounded-lg  ${
                index == activeImage ? `border-blue-600` : `border-neutral-400`
              }`}
              key={index}
            >
              <Link href={`/product/${item.id}?image=${index}`} prefetch={true}>
                <GridTileImage imgSrc={i} label={false} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
