import React, { Suspense } from "react";
import { Label } from "../label";
import Image from "next/image";
import Spinner from "../spinner";

export default function GridTileImage({
  position,
  imgSrc,
  title,
  price,
  label = true,
}: any) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-white cursor-pointer w-full h-full`}
    >
        <img
          src={imgSrc}
          alt="t-shirt avif"
          className="w-full h-full object-contain"
        />
      {label ? <Label position={position} title={title} price={price} /> : null}
    </div>
  );
}
