import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MoveDownRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechTag } from "@/components/ui/TechTag";

const skills = ["React", "TypeScript", "Next.js", "Java", "Appwrite"];

export function ProfileSidebar() {
  return <aside aria-label="Profile" className="relative flex min-h-svh w-full items-center border-b border-[var(--border)] bg-[var(--sidebar)] px-5 py-16 md:fixed md:inset-y-0 md:left-0 md:w-[36%] md:overflow-hidden md:border-r md:border-b-0 md:px-8 md:py-6 lg:w-[34%]">
    <div className="profile-content mx-auto flex w-full max-w-[420px] flex-col md:my-auto">
      <Image src="/images/profile.svg" alt="Karl profile placeholder" width={150} height={150} priority className="profile-image mb-10 size-[120px] self-center rounded-full object-cover ring-[3px] ring-[var(--surface)] outline outline-1 outline-[var(--border)] shadow-[0_14px_32px_rgba(17,26,43,.12)] md:size-[142px]" />
      <SectionLabel>IT STUDENT &amp; DEVELOPER</SectionLabel>
      <h1 className="profile-name mb-6 font-[family-name:var(--font-mono)] text-[clamp(2.7rem,5vw,4.2rem)] font-medium leading-[.96] tracking-[-.07em]">Karl<span className="text-[var(--accent)]">.</span></h1>
      <p className="profile-bio mb-6 max-w-md text-[0.98rem] leading-[1.82] text-[var(--muted)]">I’m an IT student and developer who enjoys building web applications, systems, and clean digital experiences. I’m exploring full-stack development, databases, and UI/UX while turning ideas into working projects.</p>
      <ul className="flex flex-wrap gap-2" aria-label="Core skills">{skills.map((skill) => <TechTag key={skill}>{skill}</TechTag>)}</ul>
      <nav aria-label="Portfolio navigation" className="profile-nav my-7 flex gap-6 border-y border-[var(--border)] py-5 font-[family-name:var(--font-mono)] text-[0.7rem] font-medium tracking-[.08em] text-[var(--muted)] uppercase">
        <Link className="transition-colors hover:text-[var(--accent)]" href="#work">Work</Link><Link className="transition-colors hover:text-[var(--accent)]" href="#about">About</Link><Link className="transition-colors hover:text-[var(--accent)]" href="#contact">Contact</Link>
      </nav>
      <div className="flex flex-col gap-5 min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between md:flex-col md:items-start lg:flex-row lg:items-center">
        <div className="flex gap-2">
          {[{ label: "GitHub", href: "https://github.com/", Icon: Github }, { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: Linkedin }, { label: "Email Karl", href: "mailto:hello@example.com", Icon: Mail }].map(({ label, href, Icon }) => <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="grid size-9 place-items-center rounded-full border border-[var(--icon-border)] text-[var(--icon-foreground)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"><Icon size={15} strokeWidth={1.8} /></a>)}
        </div>
        <Link href="#contact" className="inline-flex items-center justify-center gap-3 rounded-[9px] bg-[var(--accent)] px-5 py-3.5 font-[family-name:var(--font-mono)] text-xs font-semibold text-white shadow-[0_9px_22px_rgba(101,105,244,.25)] transition hover:-translate-y-0.5"><span>Get in touch</span><MoveDownRight size={15} /></Link>
      </div>
    </div>
  </aside>;
}
