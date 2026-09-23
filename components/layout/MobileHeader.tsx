import Link from "next/link";

export function MobileHeader() {
  return <header className="flex h-[70px] items-center justify-between border-b border-[var(--border)] bg-[var(--header)] px-5 backdrop-blur md:hidden"><Link href="/" className="font-[family-name:var(--font-mono)] text-xl font-medium tracking-[-.06em]">Karl<span className="text-[var(--accent)]">.</span></Link><Link href="/#work" className="font-[family-name:var(--font-mono)] text-[0.68rem] font-medium tracking-[.08em] text-[var(--muted)] uppercase">← All projects</Link></header>;
}
