"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return <button type="button" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={label} title={label} className="fixed top-4 right-4 z-50 grid size-10 place-items-center rounded-full border border-[var(--icon-border)] bg-[var(--surface)] text-[var(--icon-foreground)] shadow-[0_8px_24px_rgba(17,26,43,.12)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] md:top-6 md:right-6">
    {isDark ? <Sun size={15} strokeWidth={1.8} aria-hidden="true" /> : <Moon size={15} strokeWidth={1.8} aria-hidden="true" />}
  </button>;
}
