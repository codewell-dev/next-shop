"use client";

import { useAppDispatch } from "@/lib/hooks";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function BasketCart({
  title, price, quantity, imgSrc, id,
  addQuantity, deleteQuantity, deleteProduct,
}: {
  title: string;
  price: number;
  quantity: number | undefined;
  imgSrc: string;
  size: number;
  id: number;
  addQuantity: any;
  deleteQuantity: any;
  deleteProduct: any;
}) {
  const dispatch = useAppDispatch();
  const qty = quantity ?? 1;
  const lineTotal = (price * qty).toFixed(2);

  return (
    <div
      className="flex gap-3 py-4"
      style={{ borderBottom: "1px solid var(--border-light)" }}
    >
      {/* Image */}
      <div
        className="relative flex-none w-16 h-16 overflow-hidden rounded-sm"
        style={{ background: "var(--bg-overlay)", border: "1px solid var(--border-light)" }}
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-contain p-1.5"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/80x80/1c1c1f/4a4a4e?text=F";
          }}
        />
        <button
          onClick={() => dispatch(deleteProduct(id))}
          className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center transition-colors"
          style={{ background: "var(--bg-overlay)", border: "1px solid var(--border)" }}
          aria-label="Remove item"
        >
          <XMarkIcon className="size-2.5" style={{ color: "var(--text-muted)" }} />
        </button>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p
          className="line-clamp-1 mb-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.95rem",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
          ${price.toFixed(2)} each
        </p>
      </div>

      {/* Quantity + price */}
      <div className="flex flex-col items-end gap-2">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.95rem",
            color: "var(--text-primary)",
          }}
        >
          ${lineTotal}
        </span>
        <div
          className="flex items-center gap-3 rounded-sm px-2 py-1"
          style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
        >
          <button
            onClick={() => dispatch(deleteQuantity(id))}
            aria-label="Decrease quantity"
          >
            <MinusIcon className="size-3" style={{ color: "var(--text-secondary)" }} />
          </button>
          <span style={{ fontSize: "0.78rem", color: "var(--text-primary)", minWidth: "16px", textAlign: "center" }}>
            {qty}
          </span>
          <button
            onClick={() => dispatch(addQuantity(id))}
            aria-label="Increase quantity"
          >
            <PlusIcon className="size-3" style={{ color: "var(--text-secondary)" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
