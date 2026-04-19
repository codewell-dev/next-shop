export default function Spinner() {
  return (
    <div className="flex items-center justify-center w-full min-h-[40vh]">
      <div className="relative w-8 h-8">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid var(--border)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            border: "1px solid transparent",
            borderTopColor: "var(--accent)",
            animationDuration: "0.8s",
          }}
        />
      </div>
    </div>
  );
}
