"use client";

import Spinner from "@/components/spinner";
import ToastDemo from "@/components/tostify";
import { useAppDispatch } from "@/lib/hooks";
import { Product } from "@/lib/interfaces";
import { useGetProductByIdQuery, useGetProductsQuery } from "@/lib/products";
import { addProduct } from "@/lib/slices/cartSlice";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ShoppingBagIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

function ReviewCard({ review }: { review: any }) {
  return (
    <div
      className="p-5"
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-light)",
        borderRadius: "3px",
      }}
    >
      <div className="flex items-center gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((s) =>
          s <= review.rating ? (
            <StarSolid key={s} className="w-3 h-3" style={{ color: "var(--accent)" }} />
          ) : (
            <StarIcon key={s} className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
          )
        )}
      </div>
      <p
        style={{
          fontSize: "0.83rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "10px",
          fontStyle: "italic",
        }}
      >
        "{review.comment}"
      </p>
      <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        — {review.reviewerName}
      </p>
    </div>
  );
}

export default function ProductPage() {
  const [toastOpen, setToastOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const dispatch = useAppDispatch();
  const { handle } = useParams<{ handle: string }>();

  const { data, isLoading } = useGetProductByIdQuery<{
    data: Product;
    error: string;
    isLoading: boolean;
  }>(handle);

  const { data: relatedData } = useGetProductsQuery("6");

  if (isLoading) return <Spinner />;
  if (!data) return null;

  const discountedOriginal =
    data.discountPercentage > 0
      ? (data.price / (1 - data.discountPercentage / 100)).toFixed(2)
      : null;

  const stockStatus =
    data.stock > 20
      ? { label: "In Stock", color: "var(--success)" }
      : data.stock > 0
      ? { label: `Only ${data.stock} left`, color: "var(--accent)" }
      : { label: "Out of Stock", color: "var(--red)" };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div
        className="px-6 py-4 border-b"
        style={{ borderColor: "var(--border-light)" }}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center gap-3">
          <Link href="/search" className="flex items-center gap-2 nav-link" style={{ fontSize: "0.72rem" }}>
            <ArrowLeftIcon className="size-3" /> All Products
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>/</span>
          <span
            style={{
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {data.category}
          </span>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* ── Gallery ── */}
          <div>
            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-sm mb-3"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-light)",
                aspectRatio: "1",
              }}
            >
              <img
                src={data.images[activeImage]}
                alt={data.title}
                className="w-full h-full object-contain p-6 transition-all duration-500"
                style={{ transform: "scale(1)" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/600x600/131315/4a4a4e?text=FORMA";
                }}
              />
              {data.discountPercentage > 5 && (
                <div className="absolute top-4 left-4 discount-badge">
                  −{Math.round(data.discountPercentage)}%
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {data.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {data.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className="flex-none w-16 h-16 overflow-hidden rounded-sm transition-all"
                    style={{
                      border: `1px solid ${idx === activeImage ? "var(--accent)" : "var(--border-light)"}`,
                      background: "var(--bg-elevated)",
                    }}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-contain p-1.5"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/80x80/131315/4a4a4e?text=F";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info ── */}
          <div className="flex flex-col gap-6">
            {/* Category + brand */}
            <div className="flex items-center gap-3">
              <span
                className="product-tag"
                style={{
                  background: "var(--bg-overlay)",
                  border: "1px solid var(--border-light)",
                  color: "var(--text-muted)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "2px",
                }}
              >
                {data.category}
              </span>
              {data.brand && (
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  by {data.brand}
                </span>
              )}
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              {data.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) =>
                  s <= Math.round(data.rating) ? (
                    <StarSolid key={s} className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                  ) : (
                    <StarIcon key={s} className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                  )
                )}
              </div>
              <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                {data.rating.toFixed(1)} ({data.reviews?.length ?? 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                }}
              >
                ${data.price.toFixed(2)}
              </span>
              {discountedOriginal && (
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    color: "var(--text-muted)",
                    textDecoration: "line-through",
                  }}
                >
                  ${discountedOriginal}
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="divider" />

            {/* Description */}
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
              }}
            >
              {data.description}
            </p>

            {/* Meta details */}
            <div
              className="grid grid-cols-2 gap-3 py-4"
              style={{ borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}
            >
              {[
                { label: "SKU", value: data.sku },
                { label: "Weight", value: `${data.weight}g` },
                { label: "Warranty", value: data.warrantyInformation },
                { label: "Shipping", value: data.shippingInformation },
              ].map((d) => (
                <div key={d.label}>
                  <p
                    style={{
                      fontSize: "0.63rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "3px",
                    }}
                  >
                    {d.label}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{d.value}</p>
                </div>
              ))}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full flex-none"
                style={{ background: stockStatus.color }}
              />
              <span style={{ fontSize: "0.75rem", color: stockStatus.color, letterSpacing: "0.06em" }}>
                {stockStatus.label}
              </span>
            </div>

            {/* Add to cart */}
            <ToastDemo open={toastOpen} setOpen={setToastOpen}>
              <button
                className="btn-primary w-full text-center justify-center gap-3 py-4"
                onClick={() => {
                  dispatch(addProduct(data));
                  setToastOpen(true);
                }}
                style={{ fontSize: "0.78rem" }}
              >
                <ShoppingBagIcon className="size-4" />
                Add to Cart — ${data.price.toFixed(2)}
              </button>
            </ToastDemo>

            <p
              style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                textAlign: "center",
                letterSpacing: "0.06em",
              }}
            >
              {data.returnPolicy}
            </p>
          </div>
        </div>

        {/* Reviews */}
        {data.reviews?.length > 0 && (
          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-light)" }}>
            <p className="section-eyebrow mb-3">What People Say</p>
            <h2
              className="section-title mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Customer Reviews
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.reviews.map((review: any, i: number) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
