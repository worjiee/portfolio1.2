import Link from "next/link";

export default function NotFound() { return <main className="grid min-h-screen place-items-center bg-[var(--sidebar)] px-6 text-center"><div><p className="mb-4 font-[family-name:var(--font-mono)] text-xs tracking-[.15em] text-[var(--accent)]">404</p><h1 className="font-[family-name:var(--font-mono)] text-5xl tracking-[-.06em]">Project not found.</h1><Link href="/#work" className="mt-8 inline-block rounded-lg bg-[var(--button)] px-5 py-3 text-sm text-[var(--button-foreground)]">Return to selected work</Link></div></main>; }
