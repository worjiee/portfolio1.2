import type { Certification } from "@/types/certification";
import { CertificationCard } from "./CertificationCard";

export function CertificationGrid({ certifications }: { certifications: Certification[] }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{certifications.map((certification, index) => <CertificationCard key={certification.id} certification={certification} index={index} />)}</div>;
}
