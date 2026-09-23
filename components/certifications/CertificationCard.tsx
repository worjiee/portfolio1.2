import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TechTag } from "@/components/ui/TechTag";
import type { Certification } from "@/types/certification";

export function CertificationCard({ certification, index }: { certification: Certification; index: number }) {
  const proofLink = certification.proofPdf ?? certification.credentialUrl;
  return <article className="group flex min-h-72 flex-col rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[color-mix(in_srgb,var(--accent)_48%,var(--border))] hover:bg-[var(--surface-soft)] sm:p-7">
    <div className="mb-10 flex items-start justify-between gap-4">
      <span className="font-[family-name:var(--font-mono)] text-[0.65rem] font-medium tracking-[.08em] text-[var(--subtle)]">{String(index + 1).padStart(2, "0")}</span>
      {proofLink ? <ArrowUpRight aria-hidden="true" size={18} className="text-[var(--subtle)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]" /> : <span className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[.08em] text-[var(--accent)] uppercase">Placeholder</span>}
    </div>
    {certification.previewImage && proofLink && <a href={proofLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${certification.title} certificate`} className="mb-7 block w-fit self-center rounded-md"><Image src={certification.previewImage} alt={`IT Specialist ${certification.title} badge issued by ${certification.issuer}`} width={124} height={124} className="h-auto w-28 object-contain sm:w-[124px]" /></a>}
    <div>
      <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-[var(--accent)]">{certification.title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">{certification.issuer}</p>
    </div>
    <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-[var(--border)] pt-4 font-[family-name:var(--font-mono)] text-[0.65rem]">
      <div><dt className="mb-1 text-[var(--subtle)] uppercase">Issued</dt><dd>{certification.issued}</dd></div>
      {certification.expires && <div><dt className="mb-1 text-[var(--subtle)] uppercase">Expires</dt><dd>{certification.expires}</dd></div>}
      {certification.credentialId && <div className="col-span-2"><dt className="mb-1 text-[var(--subtle)] uppercase">Credential ID</dt><dd className="break-all">{certification.credentialId}</dd></div>}
    </dl>
    {certification.skills?.length ? <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${certification.title} topics`}>{certification.skills.map((skill) => <TechTag key={skill}>{skill}</TechTag>)}</ul> : null}
    <div className="mt-auto pt-7">
      {proofLink ? <a href={proofLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.68rem] font-medium tracking-[.08em] uppercase transition-colors hover:text-[var(--accent)]">View certificate <ArrowUpRight aria-hidden="true" size={14} /></a> : <span className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[.05em] text-[var(--subtle)] uppercase">Credential link pending</span>}
    </div>
  </article>;
}
