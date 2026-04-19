"use client";
import Link from "next/link";
import React from "react";

const FOOTER_LINKS = {
  Shop: [
    { title: "All Products", path: "/search" },
    { title: "Beauty", path: "/search/beauty" },
    { title: "Fragrances", path: "/search/fragrances" },
    { title: "Furniture", path: "/search/furniture" },
  ],
  Company: [
    { title: "Our Story", path: "/#brand-story" },
    { title: "Sustainability", path: "/" },
    { title: "Press", path: "/" },
    { title: "Careers", path: "/" },
  ],
  Support: [
    { title: "FAQ", path: "/" },
    { title: "Shipping & Returns", path: "/" },
    { title: "Contact", path: "/" },
    { title: "Privacy Policy", path: "/" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-elevated)", borderTop: "1px solid var(--border-light)" }}>
      <div className="max-w-screen-2xl mx-auto px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="footer-grid mb-14" style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: "3rem" }}>
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                textDecoration: "none",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              FORMA
            </Link>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "260px",
                marginBottom: "1.5rem",
              }}
            >
              Premium goods for those who believe the things you own should reflect the life you want to live.
            </p>
            <div
              className="h-px w-10 mb-4"
              style={{ background: "var(--accent)" }}
            />
            <p
              style={{
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Objects of intention
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1.25rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.path}
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid var(--border-light)" }}
        >
          <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
            © 2025 FORMA, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter / X", "Instagram", "Pinterest"].map((s) => (
              <Link
                key={s}
                href="/"
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
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
