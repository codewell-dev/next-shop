"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Search() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className="flex items-center gap-2 rounded-sm px-3 py-2 transition-all duration-200"
        style={{
          background: "var(--bg-elevated)",
          border: `1px solid ${focused ? "var(--border)" : "var(--border-light)"}`,
          minWidth: focused ? "220px" : "180px",
        }}
      >
        <MagnifyingGlassIcon
          className="size-4 flex-shrink-0"
          style={{ color: "var(--text-muted)" }}
        />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search products..."
          className="bg-transparent outline-none text-sm w-full"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            letterSpacing: "0.02em",
          }}
        />
        {query && (
          <button type="button" onClick={() => setQuery("")}>
            <XMarkIcon className="size-3.5" style={{ color: "var(--text-muted)" }} />
          </button>
        )}
      </div>
    </form>
  );
}
