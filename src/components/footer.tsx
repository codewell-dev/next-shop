"use client";

import Link from "next/link";

const LINKS = {
  Shop:    [["All Products", "/search"], ["Beauty", "/search/beauty"], ["Fragrances", "/search/fragrances"], ["Furniture", "/search/furniture"]],
  Company: [["Our Story", "/#brand-story"], ["Sustainability", "/"], ["Press", "/"], ["Careers", "/"]],
  Support: [["FAQ", "/"], ["Shipping & Returns", "/"], ["Contact", "/"], ["Privacy", "/"]],
};

export function Footer() {
  return (
    <footer style={{ borderTop: "var(--rule)", background: "var(--paper-2)" }}>
      <div className="page-wrap">

        {/* Masthead */}
        <div style={{
          padding: "clamp(16px, 4vw, 36px) clamp(16px, 4vw, 32px)",
          borderBottom: "var(--rule-thin)",
        }}>
          <div style={{
            fontFamily: "var(--fd)", fontStyle: "italic", fontWeight: 700,
            fontSize: "clamp(2.8rem, 10vw, 6rem)",
            letterSpacing: "-0.04em", lineHeight: 0.88, color: "var(--ink)",
          }}>
            FORMA
          </div>
          <p style={{
            fontFamily: "var(--fm)", fontSize: "0.65rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--ink-4)", marginTop: 10,
          }}>
            Objects of Intention — Est. 2019
          </p>
        </div>

        {/* Link columns */}
        <div className="footer-cols">
          {/* Brand desc */}
          <div className="fc" style={{ padding: "clamp(14px, 3vw, 24px)" }}>
            <p style={{ fontFamily: "var(--fb)", fontSize: "clamp(0.8rem, 1.4vw, 0.85rem)", color: "var(--ink-2)", lineHeight: 1.85, marginBottom: 14, maxWidth: 260 }}>
              Premium goods for those who believe the things you own should reflect the life you want to live.
            </p>
            <div style={{ fontFamily: "var(--fm)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--rust)" }}>
              № 001 — SS 2025
            </div>
          </div>

          {Object.entries(LINKS).map(([group, items], gi) => (
            <div key={group} className="fc" style={{
              padding: "clamp(14px, 3vw, 24px)",
              borderRight: gi < 2 ? "var(--rule-thin)" : "none",
            }}>
              <div className="footer-col-title">{group}</div>
              <ul className="flex flex-col gap-2">
                {items.map(([label, path]) => (
                  <li key={label}>
                    <Link href={path} style={{
                      fontFamily: "var(--fb)", fontSize: "clamp(0.8rem, 1.4vw, 0.85rem)",
                      color: "var(--ink-3)", textDecoration: "none", transition: "color 0.15s",
                    }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--ink)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ink-3)")}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ padding: "clamp(10px, 2vw, 16px) clamp(14px, 3vw, 24px)", borderTop: "var(--rule-thin)" }}>
          <p style={{ fontFamily: "var(--fm)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-4)" }}>
            © 2025 FORMA, Inc. All rights reserved.
          </p>
          <div className="flex gap-5 flex-wrap">
            {["Twitter / X", "Instagram", "Pinterest"].map((s) => (
              <Link key={s} href="/" style={{
                fontFamily: "var(--fm)", fontSize: "0.6rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--ink-4)", textDecoration: "none", transition: "color 0.15s",
              }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--ink)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ink-4)")}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
