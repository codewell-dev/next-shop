"use client";

import React from "react";

interface GridTileImageProps {
  imgSrc: string;
  title?: string;
  price?: number;
  rating?: number;
  category?: string;
  discountPercentage?: number;
  label?: boolean;
  position?: string;
  id?: number;
  onQuickAdd?: () => void;
  size?: number;
}

export default function GridTileImage({
  imgSrc,
  title,
  price,
  rating,
  category,
  discountPercentage,
  label = true,
  onQuickAdd,
}: GridTileImageProps) {
  const originalPrice = price && discountPercentage
    ? (price / (1 - discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className="product-card w-full h-full">
      {/* Image */}
      <div className="product-card-img-wrap">
        <img
          src={imgSrc}
          alt={title || "Product"}
          className="product-card-img"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x400/131315/4a4a4e?text=FORMA";
          }}
        />
      </div>

      {/* Overlay with quick add */}
      {label && (
        <div className="product-card-overlay">
          {onQuickAdd && (
            <button className="product-card-quick-btn" onClick={(e) => { e.preventDefault(); onQuickAdd(); }}>
              Quick Add
            </button>
          )}
        </div>
      )}

      {/* Info */}
      {label && title && (
        <div className="p-3.5" style={{ borderTop: "1px solid var(--border-light)" }}>
          {category && (
            <p style={{ fontSize: "0.63rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "5px", fontFamily: "var(--font-body)" }}>
              {category}
            </p>
          )}
          <p
            className="leading-tight line-clamp-1"
            style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text-primary)", fontWeight: 400 }}
          >
            {title}
          </p>
          {(price !== undefined) && (
            <div className="flex items-center gap-2 mt-1.5">
              <span className="price-display">${price.toFixed(2)}</span>
              {originalPrice && (
                <>
                  <span className="price-original" style={{ color: "var(--text-muted)", textDecoration: "line-through", fontSize: "0.8rem" }}>
                    ${originalPrice}
                  </span>
                  {discountPercentage && discountPercentage > 5 && (
                    <span className="discount-badge">−{Math.round(discountPercentage)}%</span>
                  )}
                </>
              )}
            </div>
          )}
          {rating !== undefined && (
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-2.5 h-2.5" viewBox="0 0 20 20" fill={s <= Math.round(rating) ? "var(--accent)" : "none"} stroke="var(--accent)" strokeWidth="1.5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
