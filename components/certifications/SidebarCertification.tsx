import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Certification } from "@/types/certification";

export function SidebarCertification({ certification }: { certification: Certification }) {
  if (!certification.previewImage || !certification.proofPdf) return null;

  return <section aria-labelledby="sidebar-certification-title" className="sidebar-certification mt-6 hidden border-y border-[var(--border)] py-5 md:block">
    <p className="sidebar-certification-label mb-3 font-[family-name:var(--font-mono)] text-[0.64rem] font-medium tracking-[.14em] text-[var(--accent)] uppercase">Certification</p>
    <a href={certification.proofPdf} target="_blank" rel="noopener noreferrer" aria-label={`View ${certification.title} certificate`} className="mx-auto block w-fit rounded-md focus-visible:outline-offset-4">
      <Image src={certification.previewImage} alt={`IT Specialist ${certification.title} badge issued by ${certification.issuer}`} width={120} height={120} className="sidebar-certification-badge h-auto w-[110px] object-contain" />
    </a>
    <div className="sidebar-certification-details mt-4">
      <h2 id="sidebar-certification-title" className="text-sm font-semibold">{certification.title}</h2>
      <p className="mt-1 text-xs text-[var(--muted)]">{certification.issuer}</p>
    </div>
    <a href={certification.proofPdf} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[0.62rem] font-medium tracking-[.05em] uppercase transition-colors hover:text-[var(--accent)]">View certificate <ArrowUpRight aria-hidden="true" size={12} /></a>
  </section>;
}
