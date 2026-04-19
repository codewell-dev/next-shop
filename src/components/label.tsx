export function Label({
  title,
  price,
  position,
}: {
  title?: string;
  price?: number;
  position?: string;
}) {
  if (!title) return null;
  return (
    <div
      className="absolute bottom-0 left-0 right-0 p-3"
      style={{
        background: "linear-gradient(to top, rgba(10,10,11,0.95) 0%, transparent 100%)",
      }}
    >
      <p
        className="line-clamp-1 mb-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </p>
      {price !== undefined && (
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.9rem",
            color: "var(--accent)",
          }}
        >
          ${price.toFixed(2)}
        </p>
      )}
    </div>
  );
}
