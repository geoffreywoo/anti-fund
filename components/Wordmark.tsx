export default function Wordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`font-display uppercase leading-none tracking-normal text-ink ${className}`.trim()}
    >
      Anti Fund
    </span>
  );
}
