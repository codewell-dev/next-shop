import React from "react";
import GridTileImage from "./grid/grid-tile-images";
import Link from "next/link";
import { Product } from "@/lib/interfaces";

export default function Carousel({ items }: { items: Product[] | undefined}) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex animate-carousel gap-4 w-full">
        <div className="flex gap-6">
          {items?.map((i: any) => (
            <div
              className="w-72 h-72 md:w-80 md:h-80 mb-4 rounded-lg border hover:border-blue-600"
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
