"use client";

interface GridTileImageProps {
  imgSrc: string;
  title?: string;
  price?: number;
  rating?: number;
  category?: string;
  discountPercentage?: number;
  label?: boolean;
  index?: number;
  onQuickAdd?: () => void;
}

export default function GridTileImage({
  imgSrc,
  title,
  price,
  rating,
  category,
  discountPercentage,
  label = true,
  index,
  onQuickAdd,
}: GridTileImageProps) {
  const original = price && discountPercentage
    ? (price / (1 - discountPercentage / 100)).toFixed(2)
    : null;

  const idx = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <div className="product-card w-full h-full flex flex-col">
      {/* Image */}
      <div className="product-card-img-wrap">
        <img
          src={imgSrc}
          alt={title || "Product"}
          className="product-card-img"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/400x400/ddd6c8/999?text=FORMA";
          }}
        />
        {/* Overlay */}
        <div className="product-card-overlay">
          {onQuickAdd && (
            <button
              className="product-card-quick-btn"
              onClick={(e) => { e.preventDefault(); onQuickAdd(); }}
            >
              Quick Add →
            </button>
          )}
        </div>
        {/* Discount */}
        {discountPercentage && discountPercentage > 5 && (
          <div className="disc-badge absolute top-3 left-3">
            −{Math.round(discountPercentage)}%
          </div>
        )}
      </div>

      {/* Info */}
      {label && title && (
        <div className="p-3 flex flex-col gap-1.5" style={{ borderTop: "var(--rule-thin)" }}>
          <div className="flex items-center justify-between">
            {idx && (
              <span className="prod-number">{idx} — {category}</span>
            )}
            {!idx && category && (
              <span className="prod-number">{category}</span>
            )}
            {rating !== undefined && (
              <span
                style={{
                  fontFamily: "var(--fm)",
                  fontSize: "0.6rem",
                  color: "var(--ink-4)",
                  letterSpacing: "0.06em",
                }}
              >
                ★ {rating.toFixed(1)}
              </span>
            )}
          </div>

          <p
            className="leading-tight line-clamp-1"
            style={{
              fontFamily: "var(--fd)",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "var(--ink)",
              fontWeight: 400,
            }}
          >
            {title}
          </p>

          {price !== undefined && (
            <div className="flex items-center gap-2">
              <span className="t-price" style={{ fontSize: "0.85rem", color: "var(--ink)" }}>
                ${price.toFixed(2)}
              </span>
              {original && (
                <span
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "0.75rem",
                    color: "var(--ink-4)",
                    textDecoration: "line-through",
                  }}
                >
                  ${original}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
