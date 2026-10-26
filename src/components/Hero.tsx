import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Database,
  Server,
} from "lucide-react";
import { LINKS, ROLES } from "../lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Magnetic } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

function RoleRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.35em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-accent"
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const CODE_LINES: { tokens: { text: string; cls: string }[] }[] = [
  { tokens: [{ text: "// profile.config.ts", cls: "tok-comment" }] },
  {
    tokens: [
      { text: "const ", cls: "tok-kw" },
      { text: "sandip", cls: "tok-var" },
      { text: " = {", cls: "tok-op" },
    ],
  },
  {
    tokens: [
      { text: "  role", cls: "tok-prop" },
      { text: ": ", cls: "tok-op" },
      { text: '"Full-Stack Developer"', cls: "tok-str" },
      { text: ",", cls: "tok-op" },
    ],
  },
  {
    tokens: [
      { text: "  stack", cls: "tok-prop" },
      { text: ": [", cls: "tok-op" },
      { text: '"React"', cls: "tok-str" },
      { text: ", ", cls: "tok-op" },
      { text: '"Node"', cls: "tok-str" },
      { text: ", ", cls: "tok-op" },
      { text: '"TypeScript"', cls: "tok-str" },
      { text: "],", cls: "tok-op" },
    ],
  },
  {
    tokens: [
      { text: "  basedIn", cls: "tok-prop" },
      { text: ": ", cls: "tok-op" },
      { text: '"Bengaluru, IN"', cls: "tok-str" },
      { text: ",", cls: "tok-op" },
    ],
  },
  {
    tokens: [
      { text: "  build", cls: "tok-fn" },
      { text: ": (", cls: "tok-op" },
      { text: "idea", cls: "tok-var" },
      { text: ") => ", cls: "tok-op" },
      { text: "scalableProduct", cls: "tok-fn" },
      { text: ",", cls: "tok-op" },
    ],
  },
  {
    tokens: [
      { text: "  openToWork", cls: "tok-prop" },
      { text: ": ", cls: "tok-op" },
      { text: "true", cls: "tok-bool" },
      { text: ",", cls: "tok-op" },
    ],
  },
  { tokens: [{ text: "};", cls: "tok-op" }] },
  {
    tokens: [
      { text: "export default ", cls: "tok-kw" },
      { text: "sandip", cls: "tok-var" },
      { text: ";", cls: "tok-op" },
    ],
  },
];

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
      className="relative w-full max-w-[520px]"
    >
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-[40px] bg-accent/15 blur-3xl" />
      {/* Back card */}
      <div className="absolute inset-0 -rotate-[5deg] rounded-3xl border border-line-dark bg-ink-2" />

      <div className="relative overflow-hidden rounded-3xl border border-line-dark bg-ink shadow-[0_40px_80px_-24px_rgba(13,21,18,0.55)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-line-dark px-5 py-3.5">
          <div className="flex gap-2">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[11px] tracking-wider text-muted-dark">
            profile.config.ts
          </span>
          <span className="w-12" />
        </div>

        {/* Code */}
        <div className="px-6 py-6 font-mono text-[12.5px] leading-[1.9] sm:text-[13.5px]">
          {CODE_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.16, duration: 0.4 }}
              className="flex"
            >
              <span className="mr-4 w-5 select-none text-right text-[11px] leading-[2.1] text-[#3d4a43]">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.tokens.map((t, j) => (
                  <span key={j} className={t.cls}>
                    {t.text}
                  </span>
                ))}
                {i === CODE_LINES.length - 1 && (
                  <span className="ml-1 inline-block h-[1.1em] w-[7px] translate-y-[2px] animate-blink bg-accent-soft" />
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-line-dark px-5 py-2.5 font-mono text-[10px] text-muted-dark">
          <span>TypeScript · UTF-8</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping-dot rounded-full bg-accent-soft" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent-soft" />
            </span>
            ready to hire
          </span>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-3 -top-6 flex items-center gap-2 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-xl shadow-ink/5 backdrop-blur sm:-left-4 xl:-left-10"
      >
        <span className="grid size-8 place-items-center rounded-xl bg-accent/10 text-accent">
          <Braces className="size-4" />
        </span>
        <div>
          <p className="text-[11px] font-semibold leading-none">React.js</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted">frontend</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -right-1 flex items-center gap-2 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-xl shadow-ink/5 backdrop-blur sm:-right-3 xl:-right-8"
      >
        <span className="grid size-8 place-items-center rounded-xl bg-accent/10 text-accent">
          <Server className="size-4" />
        </span>
        <div>
          <p className="text-[11px] font-semibold leading-none">Node + NestJS</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted">backend</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-2 top-1/3 flex items-center gap-2 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-xl shadow-ink/5 backdrop-blur sm:-right-3 xl:-right-14"
      >
        <span className="grid size-8 place-items-center rounded-xl bg-accent/10 text-accent">
          <Database className="size-4" />
        </span>
        <div>
          <p className="text-[11px] font-semibold leading-none">MongoDB</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted">database</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const STATS = [
  { value: "02", label: "Products shipped live" },
  { value: "15+", label: "Technologies in production" },
  { value: "01", label: "Industry internship" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 120]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(75%_60%_at_50%_38%,black,transparent)]" />
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-accent/[0.07] blur-3xl"
      />
      <div className="pointer-events-none absolute -bottom-52 -left-40 size-[480px] rounded-full bg-accent/[0.05] blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-16 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-28">
        {/* Left */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.06] py-1.5 pl-2.5 pr-4"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping-dot rounded-full bg-accent" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent-deep">
              Open to full-stack roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
            className="mt-7 font-display text-[clamp(2.9rem,7vw,5.2rem)] font-bold leading-[0.98] tracking-tight"
          >
            Sandip
            <br />
            Saseendran<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.34, ease: EASE }}
            className="mt-6 font-display text-xl font-medium tracking-tight sm:text-2xl"
          >
            <RoleRotator />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: EASE }}
            className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted sm:text-base"
          >
            I design and ship end-to-end web products — from pixel-precise React
            interfaces to secure Node.js backends. Two production apps, one
            industry internship, and a habit of turning caffeine into clean,
            scalable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.54, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:bg-accent-deep hover:shadow-xl hover:shadow-accent/25"
              >
                View My Work
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent-deep"
              >
                Let's Connect
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>

            <div className="ml-1 flex items-center gap-2">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-11 place-items-center rounded-full border border-line bg-paper text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <GithubIcon />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-11 place-items-center rounded-full border border-line bg-paper text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.68, ease: EASE }}
            className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line"
          >
            {STATS.map((s) => (
              <div key={s.label} className="px-5 py-4 first:pl-0">
                <p className="font-display text-2xl font-bold sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — code window */}
        <motion.div style={{ opacity: fade }} className="relative flex justify-center lg:justify-end">
          <CodeWindow />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="group absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition-colors group-hover:text-accent">
          scroll
        </span>
        <span className="h-8 w-px overflow-hidden bg-line">
          <motion.span
            animate={{ y: [-32, 32] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-4 w-px bg-accent"
          />
        </span>
      </motion.a>
    </section>
  );
}
