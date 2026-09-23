import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { ProfileSidebar } from "@/components/layout/ProfileSidebar";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export default function Home() {
  return <main className="min-h-screen">
    <a href="#work" className="fixed top-3 left-3 z-50 -translate-y-[160%] rounded-lg bg-[var(--foreground)] px-4 py-2.5 text-white focus:translate-y-0">Skip to selected work</a>
    <ProfileSidebar />
    <section className="w-full px-[18px] py-16 md:ml-[36%] md:w-[64%] md:px-[5vw] md:py-[8vw] lg:ml-[34%] lg:w-[66%] lg:px-[6vw]">
      <section id="work">
        <MotionReveal className="mb-12 flex items-end justify-between">
          <div><SectionLabel>SELECTED WORK</SectionLabel><h2 className="font-[family-name:var(--font-mono)] text-[clamp(2rem,3vw,3.25rem)] font-medium leading-[1.08] tracking-[-.055em]">Featured Projects</h2></div>
          <p className="hidden font-[family-name:var(--font-mono)] text-[0.68rem] font-medium tracking-[.08em] text-[#8a96a8] sm:block">01 — 04 / 2025–26</p>
        </MotionReveal>
        <ProjectGrid projects={projects} />
      </section>

      <section id="about"><MotionReveal className="my-24 grid grid-cols-1 gap-8 border-y border-[var(--border)] py-16 lg:grid-cols-[.55fr_1.4fr_.7fr]">
          <SectionLabel>CURRENT FOCUS</SectionLabel>
          <div><h2 className="font-[family-name:var(--font-mono)] text-[clamp(2rem,3vw,3.25rem)] font-medium leading-[1.08] tracking-[-.055em]">Learning by making.</h2><p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">I care about clear interfaces, dependable systems, and the details that make software feel considered. Right now I’m sharpening my full-stack skills through practical projects.</p></div>
          <div className="flex flex-wrap gap-4 border-[var(--border)] font-[family-name:var(--font-mono)] text-[0.65rem] font-medium text-[#707c8e] uppercase lg:flex-col lg:border-l lg:pl-6"><span>01 Front-end</span><span>02 Back-end</span><span>03 Databases</span></div>
      </MotionReveal></section>

      <section id="contact" className="pb-24">
        <MotionReveal className="mb-11"><SectionLabel>CONTACT</SectionLabel><h2 className="font-[family-name:var(--font-mono)] text-[clamp(2.3rem,4vw,4.3rem)] font-medium leading-[1.08] tracking-[-.055em]">Let’s build something<br />together<span className="text-[var(--accent)]">.</span></h2></MotionReveal>
        <MotionReveal><ContactForm /></MotionReveal>
      </section>
      <Footer />
    </section>
  </main>;
}
