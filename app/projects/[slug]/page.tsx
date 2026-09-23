import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { BentoCard } from "@/components/ui/BentoCard";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechTag } from "@/components/ui/TechTag";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description, openGraph: { title: `${project.title} — Karl`, description: project.description, images: [{ url: project.heroImage }] } };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <>
    <MobileHeader />
    <header className="sticky top-0 z-10 hidden h-[82px] items-center justify-between border-b border-[var(--border)] bg-[#f7f8fb]/90 px-[5vw] backdrop-blur md:flex"><Link href="/" className="font-[family-name:var(--font-mono)] text-[1.35rem] font-medium tracking-[-.06em]">Karl<span className="text-[var(--accent)]">.</span></Link><Link href="/#work" className="font-[family-name:var(--font-mono)] text-[0.68rem] font-medium tracking-[.08em] text-[var(--muted)] uppercase">← All projects</Link></header>
    <main className="mx-auto max-w-[1320px] px-5 py-16 md:px-[5vw] md:py-[8vw]">
      <section className="mb-16 grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div><SectionLabel>CASE STUDY / {String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, "0")}</SectionLabel><h1 className="font-[family-name:var(--font-mono)] text-[clamp(3.6rem,9vw,8rem)] font-medium leading-[.9] tracking-[-.09em]">{project.title}<span className="text-[var(--accent)]">.</span></h1><p className="mt-7 max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)]">{project.description}</p></div>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">{[["Year", project.year], ["Role", project.role], ["Status", project.status]].map(([term, value]) => <div key={term} className="border-t border-[#cfd6e1] pt-3"><dt className="mb-2 font-[family-name:var(--font-mono)] text-[0.62rem] font-medium text-[#8a95a6] uppercase">{term}</dt><dd className="m-0 text-[0.78rem] leading-6">{value}</dd></div>)}</dl>
      </section>
      <ProjectHero project={project} />
      <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <BentoCard className="md:col-span-2"><SectionLabel>ABOUT THE PROJECT</SectionLabel><h2 className="mb-6 font-[family-name:var(--font-mono)] text-[clamp(1.5rem,2.7vw,2.6rem)] font-medium leading-[1.18] tracking-[-.05em]">{project.longDescription}</h2></BentoCard>
        <BentoCard><SectionLabel>MY ROLE</SectionLabel><p className="text-sm leading-7 text-[var(--muted)]">{project.role}</p></BentoCard>
        <BentoCard><SectionLabel>YEAR / STATUS</SectionLabel><strong className="font-[family-name:var(--font-mono)] text-3xl tracking-[-.06em]">{project.year}</strong><p className="mt-4 text-sm text-[var(--muted)]">{project.status}</p></BentoCard>
        <BentoCard className="md:col-span-2 lg:col-span-1"><SectionLabel>TECH STACK</SectionLabel><ul className="flex flex-wrap gap-2">{project.technologies.map((technology) => <TechTag key={technology}>{technology}</TechTag>)}</ul></BentoCard>
        <BentoCard className="md:col-span-2 lg:col-span-3"><SectionLabel>MAIN FEATURES</SectionLabel><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{project.features.map((feature, index) => <div key={feature} className="border-t border-[var(--border)] pt-4"><span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><p className="mt-4 font-semibold">{feature}</p></div>)}</div></BentoCard>
      </section>
      <section className="mt-4"><ProjectGallery title={project.title} images={project.screenshots} /></section>
      <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <BentoCard><SectionLabel>CHALLENGE</SectionLabel>{project.challenges.map((challenge) => <p key={challenge} className="text-base leading-7 text-[var(--muted)]">{challenge}</p>)}</BentoCard>
        <BentoCard><SectionLabel>WHAT I LEARNED</SectionLabel>{project.learnings.map((learning) => <p key={learning} className="text-base leading-7 text-[var(--muted)]">{learning}</p>)}</BentoCard>
      </section>
      <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-between rounded-2xl bg-[var(--foreground)] p-7 font-[family-name:var(--font-mono)] text-white">View GitHub <ArrowUpRight size={18} /></a>}
        {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-between rounded-2xl border border-[var(--border)] bg-white p-7 font-[family-name:var(--font-mono)]">Live demo <ArrowUpRight size={18} /></a> : <span className="flex min-h-28 items-center justify-between rounded-2xl border border-[var(--border)] bg-white p-7 font-[family-name:var(--font-mono)]">Live demo <small className="text-[var(--muted)]">Coming soon</small></span>}
      </section>
    </main>
    <footer className="flex flex-col items-start justify-between gap-7 bg-[var(--foreground)] px-[5vw] py-16 text-white sm:flex-row sm:items-center"><p className="font-[family-name:var(--font-mono)] text-[clamp(1.5rem,3vw,2.7rem)] font-medium">Have a project in mind?</p><Link href="/#contact" className="border-b border-[#687185] pb-1 font-[family-name:var(--font-mono)] text-xs">Let’s talk ↗</Link></footer>
  </>;
}
