"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/types/project";
import { TechTag } from "@/components/ui/TechTag";

const backgrounds = { indigo: "bg-[#dfe1ff]", blue: "bg-[#dceaf5]", amber: "bg-[#f5e7cf]", mint: "bg-[#dcefe8]" };

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: reduceMotion ? 0 : .55, delay: index * .06 }}>
    <Link href={`/projects/${project.slug}`} className="group block min-w-0 text-inherit no-underline" aria-label={`View ${project.title} project`}>
      <div className={`relative aspect-[1.38/1] overflow-hidden rounded-2xl ${backgrounds[project.accent]}`}>
        <motion.div className="absolute inset-[8%]" whileHover={reduceMotion ? undefined : { scale: 1.035 }} transition={{ duration: .4, ease: [.2, .65, .25, 1] }}><Image src={project.thumbnail} alt={`${project.title} interface preview`} fill loading={index < 2 ? "eager" : "lazy"} sizes="(max-width: 767px) 90vw, (max-width: 1100px) 31vw, 28vw" className="object-contain drop-shadow-[0_18px_26px_rgba(20,30,50,.18)]" /></motion.div>
        <div className="absolute inset-0 bg-[#111a2b] opacity-0 transition-opacity duration-300 group-hover:opacity-[.04]" />
        <span className="absolute right-4 bottom-4 translate-y-2 rounded-full bg-[#111a2b]/90 px-3 py-2 font-[family-name:var(--font-mono)] text-[0.6rem] font-medium tracking-[.04em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">View project</span>
      </div>
      <div className="mt-5 mb-2 flex items-start justify-between gap-4"><h3 className="text-lg font-semibold">{project.title}</h3><ArrowUpRight className="text-[var(--subtle)] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]" size={21} /></div>
      <p className="mb-4 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
      <p className="mb-3 font-[family-name:var(--font-mono)] text-[0.6rem] font-medium tracking-[.06em] text-[var(--subtle)] uppercase">{project.year} / {project.category}</p>
      <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>{project.technologies.map((technology) => <TechTag key={technology}>{technology}</TechTag>)}</ul>
    </Link>
  </motion.div>;
}
