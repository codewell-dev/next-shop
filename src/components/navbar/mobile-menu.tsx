"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu } from "@/lib/interfaces";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-sm"
        style={{ border: "1px solid var(--border-light)", background: "var(--bg-elevated)" }}
        aria-label="Open menu"
      >
        <Bars3Icon className="size-4" style={{ color: "var(--text-secondary)" }} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex"
          style={{ background: "rgba(10,10,11,0.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-72 h-full flex flex-col p-8 animate-fade-in"
            style={{ background: "var(--bg-elevated)", borderRight: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-12">
              <span
                className="navbar-logo"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                FORMA
              </span>
              <button onClick={() => setOpen(false)}>
                <XMarkIcon className="size-5" style={{ color: "var(--text-secondary)" }} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {menu.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="nav-link"
                  style={{ fontSize: "0.82rem" }}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <div className="divider mb-6" />
              <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                Objects of intention
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
