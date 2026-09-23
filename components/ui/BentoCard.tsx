export function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <article className={`min-h-52 rounded-2xl border border-[var(--border)] bg-white p-7 ${className}`}>{children}</article>;
}
