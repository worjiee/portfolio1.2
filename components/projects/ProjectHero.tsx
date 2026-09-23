import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectHero({ project }: { project: Project }) {
  return <div className="relative min-h-[420px] overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_78%_27%,rgba(114,90,236,.7),transparent_19%),linear-gradient(140deg,#292d61,#0d101d_62%)] p-[6%] shadow-[0_28px_70px_rgba(24,27,55,.2)] md:min-h-[620px]">
    <Image src={project.heroImage} alt={`${project.title} application interface`} fill priority sizes="(max-width: 768px) 92vw, 88vw" className="object-contain p-[5%] drop-shadow-[0_28px_35px_rgba(0,0,0,.28)]" />
  </div>;
}
