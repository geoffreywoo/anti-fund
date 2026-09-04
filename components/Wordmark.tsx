export default function Wordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`font-display font-medium uppercase leading-none tracking-[-0.035em] text-ink ${className}`.trim()}
    >
      Anti Fund
    </span>
  );
}
