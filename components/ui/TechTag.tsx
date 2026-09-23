export function TechTag({ children }: { children: React.ReactNode }) {
  return <li className="rounded-md border border-[var(--tag-border)] bg-[var(--tag-background)] px-2.5 py-2 font-[family-name:var(--font-mono)] text-[0.66rem] font-medium leading-none text-[var(--tag-foreground)]">{children}</li>;
}
