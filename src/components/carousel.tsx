import React from "react";
import GridTileImage from "./grid/grid-tile-images";
import { useGetProductsQuery } from "@/lib/products";
import Link from "next/link";

export default function Carousel({ items }: any) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex animate-carousel gap-4 w-full">
        <div className="flex gap-6">
          {items?.map((i: any) => (
            <div
              className="w-96 h-80 mb-4 rounded-lg border hover:border-blue-600"
              key={i.id}
            >
              <Link href={`/product/${i.id}`}>
                <GridTileImage
                  imgSrc={i.images[0]}
                  title={i.title}
                  position={i.position}
                  size={i.size}
                  price={i.price}
                  id={i.id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
