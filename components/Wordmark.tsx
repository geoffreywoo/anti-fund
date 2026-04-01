export default function Wordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`font-display uppercase leading-none tracking-[-0.05em] text-ink ${className}`.trim()}
    >
      Anti Fund
    </span>
  );
}
