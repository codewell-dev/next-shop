import React from "react";
import { Label } from "../label";
import Image from "next/image";

export default function GridTileImage({ position, imgSrc, title, price, label = true }: any) {
  return (
      <div className={`relative flex items-center justify-center rounded-xl bg-white cursor-pointer w-full h-full`} >
        <Image src={imgSrc} alt="t-shirt avif" className="w-full h-full object-contain image-full" width={500} height={500}  />
        {label ? <Label position={position} title={title} price={price}/> : null }
      </div>
  );
}
