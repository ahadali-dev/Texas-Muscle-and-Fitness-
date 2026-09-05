export default function Stars({
  count = 5,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex gap-0.5 text-brand ${className}`}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}
