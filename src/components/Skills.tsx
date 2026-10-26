import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Database,
  Layers,
  Rocket,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SKILL_CATEGORIES, SOFT_SKILLS } from "../lib/data";
import { Reveal, SectionHead, useSpotlight } from "./ui";

const ICONS: Record<string, LucideIcon> = {
  frontend: Layers,
  backend: Workflow,
  languages: Code2,
  database: Database,
  integrations: Boxes,
  devops: Rocket,
};

function SkillCard({
  cat,
  i,
}: {
  cat: (typeof SKILL_CATEGORIES)[number];
  i: number;
}) {
  const { onMove, spotlight } = useSpotlight();
  const Icon = ICONS[cat.id] ?? Code2;

  return (
    <Reveal delay={0.05 * i} className="h-full">
      <div
        onMouseMove={onMove}
        className="group relative h-full overflow-hidden rounded-3xl border border-line-dark bg-ink-2 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-soft/30"
      >
        {/* cursor spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        <div className="relative">
          <div className="flex items-start justify-between">
            <span className="grid size-11 place-items-center rounded-2xl border border-line-dark bg-ink text-accent-soft transition-all duration-500 group-hover:rotate-6 group-hover:border-accent-soft/40">
              <Icon className="size-5" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-dark">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-6 font-display text-lg font-semibold text-paper">
            {cat.title}
          </h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-dark">
            {cat.blurb}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line-dark bg-ink px-3 py-1.5 font-mono text-[11px] text-paper/75 transition-all duration-300 hover:border-accent-soft/50 hover:text-accent-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 bg-ink py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            dark
            index="02"
            eyebrow="Technical Arsenal"
            title={
              <>
                The tools I use to{" "}
                <span className="text-accent-soft">ship</span>.
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-dark">
              Every technology here has been used in a shipped product — not
              just a tutorial. Hover the cards, they're alive.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.id} cat={cat} i={i} />
          ))}
        </div>

        {/* Soft skills */}
        <div className="mt-14 grid gap-5 rounded-3xl border border-line-dark bg-ink-2/60 p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-soft">
                Beyond the keyboard
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-paper">
                How I work, not just what I use.
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {SOFT_SKILLS.map((s, i) => (
              <Reveal key={s.title} delay={0.06 * i}>
                <div className="border-l-2 border-accent-soft/40 pl-4">
                  <p className="text-sm font-semibold text-paper">{s.title}</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-dark">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
