"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import BasketCart from "./basket-cart";
import { addQuantity, deleteProduct, deleteQuantity } from "@/lib/slices/cartSlice";
import { Product } from "@/lib/interfaces";

export function ProviderSheet({
  cart,
  totalPrice,
  cartTotal,
}: {
  cart: Product[];
  totalPrice: number | string;
  cartTotal: number;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="relative flex items-center gap-2 px-3 py-2 rounded-sm transition-colors"
          style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-light)",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            cursor: "pointer",
          }}
          aria-label={`Cart (${cartTotal} items)`}
        >
          <ShoppingBagIcon className="size-4" />
          {cartTotal > 0 && (
            <span
              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-xs"
              style={{
                background: "var(--accent)",
                color: "#0a0a0b",
                fontSize: "0.6rem",
                fontWeight: 600,
              }}
            >
              {cartTotal}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        className="flex flex-col"
        style={{
          background: "var(--bg-elevated)",
          borderLeft: "1px solid var(--border)",
          color: "var(--text-primary)",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <SheetHeader className="pb-4" style={{ borderBottom: "1px solid var(--border-light)" }}>
          <SheetTitle
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
            }}
          >
            Your Cart
            {cartTotal > 0 && (
              <span
                className="ml-2"
                style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                ({cartTotal} {cartTotal === 1 ? "item" : "items"})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto py-2">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
              <ShoppingBagIcon className="size-10" style={{ color: "var(--text-muted)" }} />
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", letterSpacing: "0.06em" }}>
                Your cart is empty
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                Add something beautiful
              </p>
            </div>
          ) : (
            cart.map((item: Product) => (
              <BasketCart
                key={item.id}
                id={item.id}
                size={item.weight}
                title={item.title}
                price={item.price}
                imgSrc={item.images[0]}
                quantity={item.quantity}
                addQuantity={addQuantity}
                deleteQuantity={deleteQuantity}
                deleteProduct={deleteProduct}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="pt-4" style={{ borderTop: "1px solid var(--border-light)" }}>
            <div className="space-y-2.5 mb-5">
              {[
                { label: "Subtotal", value: `$${Number(totalPrice).toFixed(2)}` },
                { label: "Shipping", value: "Calculated at checkout" },
                { label: "Taxes", value: "Calculated at checkout" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center">
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: row.label === "Subtotal" ? "var(--text-primary)" : "var(--text-muted)",
                      fontFamily: row.label === "Subtotal" ? "var(--font-display)" : "var(--font-body)",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
              <div
                className="flex justify-between items-center pt-3 mt-3"
                style={{ borderTop: "1px solid var(--border-light)" }}
              >
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Total
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    color: "var(--text-primary)",
                    fontWeight: 400,
                  }}
                >
                  ${Number(totalPrice).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              className="btn-primary w-full py-4 justify-center"
              style={{ fontSize: "0.75rem", letterSpacing: "0.14em" }}
            >
              Proceed to Checkout
            </button>

            <p
              className="text-center mt-3"
              style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}
            >
              Secure checkout · SSL encrypted
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
