import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { LINKS } from "../lib/data";
import { GithubIcon } from "./icons";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

/* ─── Import real screenshots captured from the live Airwave app ─── */
import airwaveHome from "../assets/airwave_home.png";
import airwaveSports from "../assets/airwave_sports.png";
import airwaveMusic from "../assets/airwave_music.png";
import airwaveCatalog from "../assets/airwave_catalog.png";
import tallywiseImg from "../assets/tallywise.jpg";

const AIRWAVE_SCREENS = [
  { label: "Home Dashboard", src: airwaveHome },
  { label: "Live Sports", src: airwaveSports },
  { label: "Stream Music", src: airwaveMusic },
  { label: "IPTV Catalog", src: airwaveCatalog },
];

/* ─── Carousel component ─── */
function ScreenshotCarousel({ screens, live }: { screens: typeof AIRWAVE_SCREENS; live: string }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => go((active - 1 + screens.length) % screens.length);
  const next = () => go((active + 1) % screens.length);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-line bg-[#0d0d0d] shadow-[0_30px_60px_-20px_rgba(13,21,18,0.35)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a2e] px-5 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[10px] text-white/40">
          {live.replace("https://", "")}
        </span>
        <span className="rounded-md bg-accent/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-soft">
          {screens[active].label}
        </span>
      </div>

      {/* Slide */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d0d]">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.img
            key={active}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d * 60, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d * -60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            src={screens[active].src}
            alt={screens[active].label}
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="eager"
          />
        </AnimatePresence>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Arrow controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-accent group-hover:opacity-100"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-accent group-hover:opacity-100"
          aria-label="Next screenshot"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Open site link */}
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-accent/90 px-4 py-2 text-[12px] font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-accent group-hover:opacity-100"
        >
          Open Live Site <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      {/* Tab strip */}
      <div className="flex gap-1 border-t border-white/10 bg-[#111120] p-2">
        {screens.map((s, i) => (
          <button
            key={s.label}
            onClick={() => go(i)}
            className={cn(
              "flex-1 rounded-lg px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-300",
              i === active
                ? "bg-accent/20 text-accent-soft"
                : "text-white/35 hover:bg-white/5 hover:text-white/60"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Data ─── */
const PROJECTS = [
  {
    index: "01",
    name: "Airwave",
    tagline: "IPTV Dashboard & Music Portal",
    status: "Live in production" as const,
    description:
      "Open-source entertainment hub — stream live TV from 4,000+ deduplicated IPTV channels, watch live sports via the SportSRC API, and listen to 45,000+ internet radio stations or YouTube Music. All inside a persistent, background-capable media player.",
    highlights: [
      "IPTV Player — HLS.js with 4,000+ community channels & auto-deduplication",
      "Live Sports — SportSRC API for football, cricket, NBA, NFL, hockey & more",
      "Music Portal — 45K+ radio stations (Radio Browser API) + YouTube Music via Invidious",
      "Background Playback — Media Session API with lock-screen & notification controls",
    ],
    tech: ["React 19", "TypeScript", "HLS.js", "YouTube IFrame API", "Framer Motion", "Vite"],
    live: LINKS.airwave,
    isCarousel: true as const,
  },
  {
    index: "02",
    name: "TallyWise",
    tagline: "Personal Finance Manager",
    status: "Latest build" as const,
    description:
      "A money-management app that turns raw transactions into clear decisions. Track spending, set budgets and visualise cash flow with interactive analytics — wrapped in a fast, TypeScript-safe React interface.",
    highlights: [
      "Expense tracking with categories, budgets & filters",
      "Interactive analytics — charts, trends & breakdowns",
      "Type-safe codebase with TypeScript end to end",
      "Secure auth with input validation across every route",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
    live: LINKS.tallywise,
    image: tallywiseImg,
    isCarousel: false as const,
  },
];

/* ─── Shared copy block ─── */
function ProjectCopy({ p, flip }: { p: (typeof PROJECTS)[number]; flip: boolean }) {
  return (
    <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[12px] tracking-[0.25em] text-accent">{p.index}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-accent-deep">
          <span className="size-1.5 rounded-full bg-accent" />
          {p.status}
        </span>
      </div>

      <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{p.name}</h3>
      <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.2em] text-muted">{p.tagline}</p>

      <p className="mt-5 text-[15px] leading-relaxed text-muted">{p.description}</p>

      <ul className="mt-6 space-y-2.5">
        {p.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink/80">
            <span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-accent/10">
              <Check className="size-3 text-accent" strokeWidth={3} />
            </span>
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-accent-deep"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:bg-accent-deep hover:shadow-lg hover:shadow-accent/25"
        >
          <ExternalLink className="size-4" />
          Live Demo
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent-deep"
        >
          <GithubIcon className="size-4" />
          Source
        </a>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-paper py-28 sm:py-36">
      <div className="absolute inset-0 bg-dots opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_32%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            index="03"
            eyebrow="Selected Work"
            title={
              <>
                Real products,{" "}
                <span className="text-accent">live on the web</span>.
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Not tutorial clones — deployed, working applications you can open and use right now.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 sm:space-y-32">
          {PROJECTS.map((p, i) => {
            const flip = i % 2 === 1;

            if (p.isCarousel) {
              return (
                <Reveal key={p.name}>
                  <article className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                    <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
                      <ScreenshotCarousel screens={AIRWAVE_SCREENS} live={p.live} />
                    </div>
                    <ProjectCopy p={p} flip={flip} />
                  </article>
                </Reveal>
              );
            }

            return (
              <Reveal key={p.name}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  {/* Single image */}
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "group relative block overflow-hidden rounded-3xl border border-line bg-cream shadow-[0_30px_60px_-30px_rgba(13,21,18,0.25)] lg:col-span-7",
                      flip && "lg:order-2"
                    )}
                  >
                    <div className="flex items-center gap-2 border-b border-line bg-paper px-5 py-3">
                      <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
                      <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
                      <span className="size-2.5 rounded-full bg-[#28c840]/80" />
                      <span className="ml-3 flex-1 truncate rounded-md bg-cream px-3 py-1 font-mono text-[10px] text-muted">
                        {p.live.replace("https://", "")}
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      {"image" in p && (
                        <img
                          src={p.image}
                          alt={`${p.name} — ${p.tagline}`}
                          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      )}
                      <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/90">Open live site</span>
                        <span className="grid size-11 place-items-center rounded-full bg-accent text-paper">
                          <ArrowUpRight className="size-5" />
                        </span>
                      </div>
                    </div>
                  </a>
                  <ProjectCopy p={p} flip={flip} />
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-dashed border-ink/20 bg-cream/60 px-8 py-7 transition-all duration-300 hover:border-accent/60 hover:bg-cream"
          >
            <div>
              <p className="font-display text-lg font-semibold">More experiments live on my GitHub</p>
              <p className="mt-1 text-sm text-muted">DSA practice, UI explorations and backend deep-dives.</p>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-deep">
              github.com/sandipsaseendran
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
