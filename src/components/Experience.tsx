import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../lib/data";
import { Reveal, SectionHead } from "./ui";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-t border-line bg-cream/50 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          index="04"
          eyebrow="Journey"
          title={
            <>
              Experience <span className="text-accent">&</span> education.
            </>
          }
        />

        <div className="relative mt-16 max-w-3xl">
          {/* Timeline spine */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[22px] top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent/40 to-transparent"
          />

          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => {
              const Icon = e.type === "work" ? Briefcase : GraduationCap;
              return (
                <Reveal key={e.role} delay={0.08 * i}>
                  <div className="relative pl-16">
                    {/* Node */}
                    <span className="absolute left-0 top-1 grid size-11 place-items-center rounded-full border border-accent/30 bg-paper shadow-sm">
                      <Icon className="size-[18px] text-accent" />
                    </span>

                    <div className="group rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-ink/5 sm:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-deep">
                            {e.type === "work" ? "Work" : "Education"}
                          </p>
                          <h3 className="mt-2 font-display text-xl font-bold tracking-tight sm:text-2xl">
                            {e.role}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-ink/70">
                            {e.org}
                          </p>
                        </div>
                        <span className="rounded-full border border-line bg-cream px-4 py-1.5 font-mono text-[11px] tracking-wide text-muted">
                          {e.period}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-2.5">
                        {e.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-3 text-[14px] leading-relaxed text-muted"
                          >
                            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
