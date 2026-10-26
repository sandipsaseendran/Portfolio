import { GraduationCap, MapPin, Sparkles, Target } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const FACTS = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "BCA — Bangalore University",
    sub: "Class of 2025",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    sub: "Open to remote & relocation",
  },
  {
    icon: Target,
    label: "Focus",
    value: "Full-Stack Engineering",
    sub: "React · Node · TypeScript",
  },
  {
    icon: Sparkles,
    label: "Currently",
    value: "Building & learning daily",
    sub: "DSA + AI tooling",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              index="01"
              eyebrow="About Me"
              title={
                <>
                  Turning ideas into{" "}
                  <span className="text-accent">production-ready</span>{" "}
                  products.
                </>
              }
            />
            <Reveal delay={0.16} className="mt-8">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-line bg-cream px-5 py-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink font-display text-sm font-bold text-accent-soft">
                  SS
                </div>
                <p className="font-mono text-[11px] leading-relaxed tracking-wide text-muted">
                  "Good software is built twice —
                  <br />
                  once in the mind, once in the code."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — narrative + facts */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-ink/85 sm:text-[1.2rem]">
                I'm a full-stack developer from Bengaluru who loves owning a
                product end to end — sketching the data model, designing the
                API contract, and sweating over the last 2px of the UI.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-[15px] leading-relaxed text-muted sm:text-base">
                During my internship at Nestsoft Technologies I learned what
                "production" really means: readable code, reviewable pull
                requests and features that survive real users. Since then I've
                shipped two live products — an IPTV & Music streaming portal and a
                personal finance manager — each built with clean architecture,
                complex state management, and third-party streaming integrations
                like HLS.js, Media Session APIs and Radio Browser APIs.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">
                Right now I'm deepening my data-structures practice and
                exploring AI-assisted workflows, looking for a team where I can
                contribute from day one and grow fast.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {FACTS.map((f, i) => (
                <Reveal key={f.label} delay={0.06 * i}>
                  <div className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-ink/5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
                      <f.icon className="size-[18px]" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        {f.label}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold">{f.value}</p>
                      <p className="mt-0.5 text-xs text-muted">{f.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
