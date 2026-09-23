import Link from "next/link";

export function Footer() {
  return <footer className="flex justify-between border-t border-[var(--border)] pt-7 font-[family-name:var(--font-mono)] text-[0.65rem] font-medium text-[#8994a5]"><span>© 2026 Karl</span><Link className="uppercase" href="#work">Back to top ↑</Link></footer>;
}
