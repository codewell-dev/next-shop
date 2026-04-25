"use client";

import Link from "next/link";
import GridTileImage from "./grid-tile-images";
import { Product } from "@/lib/interfaces";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/slices/cartSlice";

export function ThreeItemGrid({ items }: { items: Product[] | undefined }) {
  const dispatch = useAppDispatch();
  if (!items || items.length < 3) return null;
  const [first, second, third] = items;

  return (
    <div className="feat-grid" style={{ borderTop: "var(--rule)" }}>
      {/* Large — spans 2 rows on desktop */}
      <div className="feat-large" style={{ borderRight: "var(--rule-thin)" }}>
        <Link href={`/product/${first.id}`} className="block h-full">
          <GridTileImage
            imgSrc={first.images[0]}
            title={first.title}
            price={first.price}
            rating={first.rating}
            category={first.category}
            discountPercentage={first.discountPercentage}
            index={0}
            onQuickAdd={() => dispatch(addProduct(first))}
          />
        </Link>
      </div>

      <div className="feat-small" style={{ borderRight: "var(--rule-thin)" }}>
        <Link href={`/product/${second.id}`} className="block h-full">
          <GridTileImage
            imgSrc={second.images[0]}
            title={second.title}
            price={second.price}
            rating={second.rating}
            category={second.category}
            discountPercentage={second.discountPercentage}
            index={1}
            onQuickAdd={() => dispatch(addProduct(second))}
          />
        </Link>
      </div>

      <div style={{ borderRight: "var(--rule-thin)" }}>
        <Link href={`/product/${third.id}`} className="block h-full">
          <GridTileImage
            imgSrc={third.images[0]}
            title={third.title}
            price={third.price}
            rating={third.rating}
            category={third.category}
            discountPercentage={third.discountPercentage}
            index={2}
            onQuickAdd={() => dispatch(addProduct(third))}
          />
        </Link>
      </div>
    </div>
  );
}
