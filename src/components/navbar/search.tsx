"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Search() {
  const router   = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search…"
        style={{
          background: "transparent",
          border: "none",
          borderBottom: focused ? "var(--rule-thin)" : "1px solid transparent",
          outline: "none",
          fontFamily: "var(--fm)",
          fontSize: "0.68rem",
          letterSpacing: "0.08em",
          color: "var(--ink)",
          width: focused ? 160 : 100,
          transition: "width 0.2s, border-color 0.2s",
          paddingBottom: 2,
        }}
      />
      <button
        type="submit"
        style={{
          fontFamily: "var(--fm)",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--ink-4)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--ink)")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ink-4)")}
      >
        ↵
      </button>
    </form>
  );
}
