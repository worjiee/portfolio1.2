import { certifications } from "@/data/certifications";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CertificationGrid } from "./CertificationGrid";

export function CertificationsSection() {
  return <section id="certifications" className="scroll-mt-10 py-24">
    <MotionReveal className="mb-10 flex items-end justify-between gap-5">
      <div><SectionLabel>CREDENTIALS</SectionLabel><h2 className="font-[family-name:var(--font-mono)] text-[clamp(2rem,3vw,3.25rem)] font-medium leading-[1.08] tracking-[-.055em]">Certifications</h2></div>
      <p className="hidden font-[family-name:var(--font-mono)] text-[0.68rem] font-medium tracking-[.08em] text-[var(--subtle)] sm:block">01 — {String(certifications.length).padStart(2, "0")}</p>
    </MotionReveal>
    {certifications.some((certification) => certification.isPlaceholder) && <p className="mb-6 max-w-xl border-l-2 border-[var(--accent)] pl-4 text-sm leading-6 text-[var(--muted)]">Development placeholders — replace these records with your earned credentials in <code className="font-[family-name:var(--font-mono)] text-xs text-[var(--foreground)]">data/certifications.ts</code>.</p>}
    <CertificationGrid certifications={certifications} />
  </section>;
}
