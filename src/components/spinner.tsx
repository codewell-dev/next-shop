export default function Spinner() {
  return (
    <div className="flex items-center justify-center w-full min-h-[40vh]">
      <span
        style={{
          fontFamily: "var(--fm)",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-4)",
          animation: "pulse 1.2s ease-in-out infinite",
        }}
      >
        Loading…
      </span>
    </div>
  );
}
