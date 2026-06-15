export default function MoonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path
        d="M25 8a14 14 0 1 0 0 24 11 11 0 0 1 0-24Z"
        fill="currentColor"
      />
    </svg>
  );
}
