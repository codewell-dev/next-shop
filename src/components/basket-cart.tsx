"use client";

import { useAppDispatch } from "@/lib/hooks";

export default function BasketCart({
  title, price, quantity, imgSrc, id,
  addQuantity, deleteQuantity, deleteProduct,
}: {
  title: string; price: number; quantity: number | undefined;
  imgSrc: string; size: number; id: number;
  addQuantity: any; deleteQuantity: any; deleteProduct: any;
}) {
  const dispatch = useAppDispatch();
  const qty = quantity ?? 1;

  return (
    <div
      className="flex gap-4 px-6 py-4"
      style={{ borderBottom: "var(--rule-thin)" }}
    >
      {/* Thumb */}
      <div
        style={{
          width: 64, height: 64,
          flexShrink: 0,
          background: "var(--paper-3)",
          border: "var(--rule-thin)",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6, filter: "contrast(1.06)" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p
          className="line-clamp-1 mb-1"
          style={{ fontFamily: "var(--fd)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--ink)" }}
        >
          {title}
        </p>
        <p
          style={{ fontFamily: "var(--fm)", fontSize: "0.65rem", color: "var(--ink-4)", letterSpacing: "0.04em" }}
        >
          ${price.toFixed(2)} each
        </p>

        {/* Qty controls */}
        <div className="flex items-center gap-0 mt-2" style={{ border: "var(--rule-thin)", width: "fit-content" }}>
          <button
            onClick={() => dispatch(deleteQuantity(id))}
            style={{
              width: 28, height: 28,
              fontFamily: "var(--fm)", fontSize: "0.9rem", color: "var(--ink-3)",
              background: "none", border: "none", cursor: "pointer",
              borderRight: "var(--rule-thin)",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--paper-2)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "none")}
          >
            −
          </button>
          <span
            style={{
              width: 28, textAlign: "center",
              fontFamily: "var(--fm)", fontSize: "0.72rem", color: "var(--ink)",
            }}
          >
            {qty}
          </span>
          <button
            onClick={() => dispatch(addQuantity(id))}
            style={{
              width: 28, height: 28,
              fontFamily: "var(--fm)", fontSize: "0.9rem", color: "var(--ink-3)",
              background: "none", border: "none", cursor: "pointer",
              borderLeft: "var(--rule-thin)",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--paper-2)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "none")}
          >
            +
          </button>
        </div>
      </div>

      {/* Price + remove */}
      <div className="flex flex-col items-end justify-between">
        <span
          style={{
            fontFamily: "var(--fm)", fontSize: "0.85rem",
            fontWeight: 500, color: "var(--ink)",
            letterSpacing: "0.02em",
          }}
        >
          ${(price * qty).toFixed(2)}
        </span>
        <button
          onClick={() => dispatch(deleteProduct(id))}
          style={{
            fontFamily: "var(--fm)", fontSize: "0.6rem", letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--ink-4)",
            background: "none", border: "none", cursor: "pointer",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--rust)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-4)")}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
