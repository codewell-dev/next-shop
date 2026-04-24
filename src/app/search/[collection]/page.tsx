"use client";

import GridTileImage from "@/components/grid/grid-tile-images";
import Spinner from "@/components/spinner";
import { Product, Products } from "@/lib/interfaces";
import { useGetCategoryByNameQuery } from "@/lib/products";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/slices/cartSlice";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CollectionPage() {
  const dispatch = useAppDispatch();
  const { collection } = useParams<{ collection: string }>();
  const display = collection
    ? collection.charAt(0).toUpperCase() + collection.slice(1)
    : "";

  const { data, isLoading } = useGetCategoryByNameQuery<{
    data: Products; error: string; isLoading: boolean;
  }>(collection);

  return (
    <div>
      {/* Header */}
      <div style={{ borderBottom: "var(--rule)" }}>
        <div className="px-6 py-10">
          <div className="issue-tag mb-4">Collection — {display}</div>
          <h1
            className="t-display"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            {display}
          </h1>
        </div>
      </div>

      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-6 py-3"
        style={{ borderBottom: "var(--rule-thin)" }}
      >
        <span
          style={{
            fontFamily: "var(--fm)",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            color: "var(--ink-4)",
          }}
        >
          {data?.products?.length ?? 0} items in {display}
        </span>
        <Link
          href="/search"
          style={{
            fontFamily: "var(--fm)",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--ink-3)",
            textDecoration: "none",
          }}
        >
          ← All Products
        </Link>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="products-grid">
          {data?.products?.map((product: Product, i: number) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="block fade-up"
              style={{ animationDelay: `${Math.min(i * 0.04, 0.5)}s` }}
            >
              <GridTileImage
                imgSrc={product.images[0]}
                title={product.title}
                price={product.price}
                rating={product.rating}
                category={product.category}
                discountPercentage={product.discountPercentage}
                index={i}
                onQuickAdd={() => dispatch(addProduct(product))}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
