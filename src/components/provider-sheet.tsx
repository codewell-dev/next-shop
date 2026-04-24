"use client";

import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import BasketCart from "./basket-cart";
import { addQuantity, deleteProduct, deleteQuantity } from "@/lib/slices/cartSlice";
import { Product } from "@/lib/interfaces";

export function ProviderSheet({
  cart, totalPrice, cartTotal,
}: {
  cart: Product[];
  totalPrice: number | string;
  cartTotal: number;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          style={{
            fontFamily: "var(--fm)",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: cartTotal > 0 ? "var(--ink)" : "var(--ink-3)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            position: "relative",
            transition: "color 0.15s",
          }}
          aria-label={`Cart (${cartTotal})`}
        >
          Bag ({cartTotal})
        </button>
      </SheetTrigger>

      <SheetContent
        className="flex flex-col cart-sheet-inner"
        style={{
          background: "var(--paper)",
          borderLeft: "var(--rule)",
          color: "var(--ink)",
          maxWidth: 420,
          width: "100%",
          padding: 0,
        }}
      >
        {/* Header */}
        <SheetHeader
          className="px-6 py-4"
          style={{ borderBottom: "var(--rule)" }}
        >
          <SheetTitle
            style={{
              fontFamily: "var(--fd)",
              fontStyle: "italic",
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            Your Bag
            {cartTotal > 0 && (
              <span
                style={{
                  fontFamily: "var(--fm)",
                  fontSize: "0.75rem",
                  color: "var(--ink-4)",
                  fontWeight: 400,
                  fontStyle: "normal",
                  marginLeft: 10,
                  letterSpacing: "0.06em",
                }}
              >
                {cartTotal} item{cartTotal !== 1 ? "s" : ""}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-20">
              <span
                style={{
                  fontFamily: "var(--fd)",
                  fontStyle: "italic",
                  fontSize: "2rem",
                  color: "var(--ink-5)",
                }}
              >
                Empty
              </span>
              <p
                style={{
                  fontFamily: "var(--fm)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-4)",
                }}
              >
                Nothing added yet
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
          <div
            className="px-6 py-5"
            style={{ borderTop: "var(--rule)" }}
          >
            {/* Line items */}
            <div className="flex flex-col gap-2 mb-5">
              {[
                { label: "Subtotal",  val: `$${Number(totalPrice).toFixed(2)}`, bold: true },
                { label: "Shipping",  val: "At checkout" },
                { label: "Tax",       val: "At checkout" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-baseline">
                  <span
                    style={{
                      fontFamily: "var(--fm)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    {r.label}
                  </span>
                  <span
                    style={{
                      fontFamily: r.bold ? "var(--fd)" : "var(--fm)",
                      fontStyle: r.bold ? "italic" : "normal",
                      fontSize: r.bold ? "1.1rem" : "0.75rem",
                      color: r.bold ? "var(--ink)" : "var(--ink-3)",
                      fontWeight: r.bold ? 700 : 400,
                    }}
                  >
                    {r.val}
                  </span>
                </div>
              ))}

              {/* Total */}
              <div
                className="flex justify-between items-baseline pt-3 mt-1"
                style={{ borderTop: "var(--rule-thin)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                  }}
                >
                  Total
                </span>
                <span
                  style={{
                    fontFamily: "var(--fd)",
                    fontStyle: "italic",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ${Number(totalPrice).toFixed(2)}
                </span>
              </div>
            </div>

            <button className="btn-primary w-full justify-center py-4">
              Proceed to Checkout →
            </button>

            <p
              className="text-center mt-3"
              style={{
                fontFamily: "var(--fm)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-4)",
              }}
            >
              Secure checkout · SSL encrypted
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
