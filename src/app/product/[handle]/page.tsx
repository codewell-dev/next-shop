"use client";

import Spinner from "@/components/spinner";
import ToastDemo from "@/components/tostify";
import { useAppDispatch } from "@/lib/hooks";
import { Product } from "@/lib/interfaces";
import { useGetProductByIdQuery } from "@/lib/products";
import { addProduct } from "@/lib/slices/cartSlice";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function ProductPage() {
  const [toastOpen, setToastOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const dispatch = useAppDispatch();
  const { handle } = useParams<{ handle: string }>();

  const { data, isLoading } = useGetProductByIdQuery<{
    data: Product; error: string; isLoading: boolean;
  }>(handle);

  if (isLoading) return <Spinner />;
  if (!data) return null;

  const original = data.discountPercentage > 0
    ? (data.price / (1 - data.discountPercentage / 100)).toFixed(2)
    : null;

  const stock =
    data.stock > 20 ? { label: "In Stock",                color: "#2d6a4f" } :
    data.stock >  0 ? { label: `Only ${data.stock} left`, color: "var(--rust)" } :
                      { label: "Out of Stock",             color: "#c1121f" };

  const P = "clamp(16px, 3vw, 40px)";

  return (
    <div className="page-wrap">

      {/* Breadcrumb */}
      <div className="flex items-center gap-3 flex-wrap"
        style={{ padding: "10px clamp(16px, 3vw, 28px)", borderBottom: "var(--rule-thin)" }}>
        <Link href="/search" style={{ fontFamily: "var(--fm)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", textDecoration: "none" }}>
          ← All Products
        </Link>
        <span style={{ color: "var(--ink-5)", fontFamily: "var(--fm)", fontSize: "0.65rem" }}>/</span>
        <span style={{ fontFamily: "var(--fm)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-4)" }}>{data.category}</span>
      </div>

      {/* Main split */}
      <div className="split-grid" style={{ borderBottom: "var(--rule)" }}>

        {/* Gallery */}
        <div className="pd-gallery">
          <div className="pd-main-img" style={{
            background: "var(--paper-3)",
            height: "min(60vh, 520px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderBottom: "var(--rule-thin)", overflow: "hidden", position: "relative",
          }}>
            <img
              src={data.images[activeImg]}
              alt={data.title}
              style={{ maxHeight: "85%", maxWidth: "85%", objectFit: "contain", filter: "contrast(1.06)", transition: "opacity 0.25s" }}
              onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x600/ddd6c8/999?text=FORMA"; }}
            />
            {data.discountPercentage > 5 && (
              <div className="disc-badge" style={{ position: "absolute", top: 16, left: 16 }}>
                −{Math.round(data.discountPercentage)}%
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {data.images.length > 1 && (
            <div className="flex flex-wrap" style={{ borderBottom: "var(--rule-thin)" }}>
              {data.images.map((img: string, idx: number) => (
                <button key={idx} onClick={() => setActiveImg(idx)} style={{
                  width: 70, height: 70, flexShrink: 0,
                  background: "var(--paper-3)", border: "none",
                  borderRight: "var(--rule-thin)",
                  borderBottom: idx === activeImg ? "3px solid var(--ink)" : "3px solid transparent",
                  cursor: "pointer", padding: 6, transition: "border-color 0.15s",
                }}>
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vertical rule */}
        <div className="vr" style={{ background: "var(--ink)" }} />

        {/* Info */}
        <div className="pd-info flex flex-col gap-5" style={{ padding: P }}>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="t-label">{data.category}</span>
            {data.brand && (
              <span style={{ fontFamily: "var(--fm)", fontSize: "0.62rem", color: "var(--ink-4)", letterSpacing: "0.08em" }}>by {data.brand}</span>
            )}
          </div>

          <h1 style={{
            fontFamily: "var(--fd)", fontWeight: 700,
            fontSize: "clamp(1.6rem, 4vw, 3rem)", lineHeight: 1.05, color: "var(--ink)",
          }}>
            {data.title}
          </h1>

          <div style={{ fontFamily: "var(--fm)", fontSize: "0.72rem", color: "var(--ink-3)", letterSpacing: "0.06em" }}>
            {"★".repeat(Math.round(data.rating))}{"☆".repeat(5 - Math.round(data.rating))}
            <span style={{ marginLeft: 8 }}>{data.rating.toFixed(1)} ({data.reviews?.length ?? 0} reviews)</span>
          </div>

          {/* Price */}
          <div style={{ borderTop: "var(--rule-thin)", paddingTop: "1rem" }}>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span style={{ fontFamily: "var(--fm)", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 500, letterSpacing: "0.02em" }}>
                ${data.price.toFixed(2)}
              </span>
              {original && (
                <span style={{ fontFamily: "var(--fm)", fontSize: "1.05rem", color: "var(--ink-4)", textDecoration: "line-through" }}>
                  ${original}
                </span>
              )}
            </div>
          </div>

          <p style={{ fontFamily: "var(--fb)", fontSize: "clamp(0.82rem, 1.4vw, 0.88rem)", color: "var(--ink-2)", lineHeight: 1.85 }}>
            {data.description}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2" style={{ border: "var(--rule-thin)" }}>
            {[
              { l: "SKU",      v: data.sku },
              { l: "Weight",   v: `${data.weight}g` },
              { l: "Warranty", v: data.warrantyInformation },
              { l: "Shipping", v: data.shippingInformation },
            ].map((d, i) => (
              <div key={d.l} style={{
                padding: "clamp(8px, 1.5vw, 12px) clamp(10px, 2vw, 14px)",
                borderRight: i % 2 === 0 ? "var(--rule-thin)" : "none",
                borderBottom: i < 2 ? "var(--rule-thin)" : "none",
              }}>
                <div className="t-label" style={{ marginBottom: 3 }}>{d.l}</div>
                <div style={{ fontFamily: "var(--fm)", fontSize: "clamp(0.7rem, 1.3vw, 0.76rem)", color: "var(--ink-2)", letterSpacing: "0.02em" }}>{d.v}</div>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: "var(--fm)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: stock.color }}>
            ● {stock.label}
          </div>

          <ToastDemo open={toastOpen} setOpen={setToastOpen}>
            <button className="btn-primary w-full justify-center py-4"
              style={{ fontSize: "0.78rem" }}
              onClick={() => { dispatch(addProduct(data)); setToastOpen(true); }}>
              Add to Bag — ${data.price.toFixed(2)}
            </button>
          </ToastDemo>

          <p style={{ fontFamily: "var(--fm)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-4)", textAlign: "center" }}>
            {data.returnPolicy}
          </p>
        </div>
      </div>

      {/* Reviews */}
      {data.reviews?.length > 0 && (
        <div style={{ borderBottom: "var(--rule)" }}>
          <div className="flex items-baseline gap-4 flex-wrap"
            style={{ padding: "14px clamp(16px, 3vw, 28px)", borderBottom: "var(--rule-thin)" }}>
            <span className="t-label" style={{ color: "var(--rust)" }}>Testimonials</span>
            <h2 className="t-section" style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}>Customer Reviews</h2>
          </div>
          <div className="grid md:grid-cols-3">
            {data.reviews.map((r: any, i: number) => (
              <div key={i} style={{
                padding: "clamp(14px, 2.5vw, 22px)",
                borderRight: "var(--rule-thin)",
                borderBottom: "var(--rule-thin)",
              }}>
                <div style={{ fontFamily: "var(--fm)", fontSize: "0.72rem", color: "var(--rust)", marginBottom: 10, letterSpacing: "0.06em" }}>
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </div>
                <blockquote style={{ fontFamily: "var(--fd)", fontStyle: "italic", fontSize: "clamp(0.9rem, 1.6vw, 1rem)", color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 10 }}>
                  "{r.comment}"
                </blockquote>
                <cite style={{ fontFamily: "var(--fm)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-4)", fontStyle: "normal" }}>
                  — {r.reviewerName}
                </cite>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
