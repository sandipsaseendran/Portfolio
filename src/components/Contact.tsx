import { ArrowUpRight, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LINKS } from "../lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Magnetic, Reveal } from "./ui";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 1], [0.4, 1]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-ink py-32 sm:py-44"
    >
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      {/* Giant ghost name */}
      <motion.span
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-4 select-none text-center font-display text-[18vw] font-extrabold leading-none tracking-tight text-outline-light lg:text-[11rem]"
      >
        SAY HELLO
      </motion.span>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
      >
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-soft">
            05 — Contact
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-tight text-paper">
            Have a role in mind?
            <br />
            <span className="text-accent-soft">Let's build together.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-dark sm:text-base">
            I'm currently open to full-stack and frontend roles — full-time,
            internship or freelance. If you're looking for someone who ships,
            my inbox and DMs are open.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:bg-accent-soft hover:text-ink hover:shadow-2xl hover:shadow-accent/25"
              >
                <LinkedinIcon className="size-4" />
                Connect on LinkedIn
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 px-8 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:border-accent-soft hover:text-accent-soft"
              >
                <GithubIcon className="size-4" />
                Explore GitHub
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-line-dark bg-ink-2/80 px-5 py-2.5 text-xs text-muted-dark">
            <MapPin className="size-3.5 text-accent-soft" />
            Bengaluru, India · Open to remote & relocation
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
