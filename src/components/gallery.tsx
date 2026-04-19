"use client";

import React, { useState } from "react";
import { Product } from "@/lib/interfaces";
import Spinner from "./spinner";

export default function Gallery({ item }: { item: Product }) {
  const [active, setActive] = useState(0);

  if (!item) return <Spinner />;

  return (
    <div className="w-full">
      {/* Main image */}
      <div
        className="relative overflow-hidden mb-3 rounded-sm"
        style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-light)",
          aspectRatio: "1",
        }}
      >
        <img
          src={item.images[active]}
          alt={item.title}
          className="w-full h-full object-contain p-6 transition-all duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/600x600/131315/4a4a4e?text=FORMA";
          }}
        />
      </div>

      {/* Thumbnails */}
      {item.images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {item.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="flex-none w-16 h-16 overflow-hidden rounded-sm transition-all"
              style={{
                border: `1px solid ${idx === active ? "var(--accent)" : "var(--border-light)"}`,
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
  );
}
