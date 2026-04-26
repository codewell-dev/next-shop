"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "@/lib/interfaces";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          fontFamily: "var(--fm)",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
        aria-label="Menu"
      >
        Menu
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex"
          style={{ background: "rgba(26,26,26,0.6)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-72 h-full flex flex-col"
            style={{
              background: "var(--paper)",
              borderRight: "var(--rule)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "var(--rule)" }}
            >
              <span
                style={{
                  fontFamily: "var(--fd)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                }}
              >
                FORMA
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--fm)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>

            {/* Nav */}
            <nav className="flex flex-col">
              {menu.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-6 py-4"
                  style={{
                    fontFamily: "var(--fm)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-2)",
                    textDecoration: "none",
                    borderBottom: "var(--rule-thin)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "var(--paper-2)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "transparent")
                  }
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-auto px-6 pb-8">
              <span
                style={{
                  fontFamily: "var(--fm)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-4)",
                }}
              >
                Objects of Intention
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
