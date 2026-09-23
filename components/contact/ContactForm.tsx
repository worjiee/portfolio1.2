"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return <form className="grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Contact form" onSubmit={(event) => { event.preventDefault(); setSent(true); window.setTimeout(() => setSent(false), 2400); }}>
    <Field id="name" label="Name"><input id="name" name="name" autoComplete="name" required placeholder="Your name" /></Field>
    <Field id="email" label="Email"><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></Field>
    <Field id="message" label="Tell me about your project" className="sm:col-span-2"><textarea id="message" name="message" required placeholder="A short note about what you’re working on…" className="min-h-36 resize-y" /></Field>
    <button type="submit" className={`mt-2 inline-flex w-full items-center justify-center gap-3 justify-self-start rounded-[9px] px-6 py-4 font-[family-name:var(--font-mono)] text-xs font-semibold text-white shadow-[0_9px_20px_rgba(17,26,43,.15)] transition hover:-translate-y-0.5 sm:w-auto ${sent ? "bg-[#4b8872]" : "bg-[var(--foreground)]"}`}>{sent ? "Message ready ✓" : <>Send message <ArrowUpRight size={15} /></>}</button>
  </form>;
}

function Field({ id, label, className = "", children }: { id: string; label: string; className?: string; children: React.ReactNode }) {
  return <div className={`relative ${className}`}><label htmlFor={id} className="absolute top-3 left-[18px] z-10 font-[family-name:var(--font-mono)] text-[0.62rem] font-medium tracking-[.06em] text-[#68758a] uppercase">{label}</label><div className="[&_input]:w-full [&_input]:rounded-[10px] [&_input]:border [&_input]:border-transparent [&_input]:bg-[#f2f5f8] [&_input]:px-[18px] [&_input]:pt-[34px] [&_input]:pb-[13px] [&_input]:text-sm [&_input]:outline-none [&_textarea]:w-full [&_textarea]:rounded-[10px] [&_textarea]:border [&_textarea]:border-transparent [&_textarea]:bg-[#f2f5f8] [&_textarea]:px-[18px] [&_textarea]:pt-[34px] [&_textarea]:pb-[13px] [&_textarea]:text-sm [&_textarea]:outline-none [&_input:focus]:border-[var(--accent)] [&_input:focus]:bg-white [&_textarea:focus]:border-[var(--accent)] [&_textarea:focus]:bg-white">{children}</div></div>;
}
