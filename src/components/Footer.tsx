import { ArrowUp } from "lucide-react";
import { LINKS, NAV_ITEMS } from "../lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-dark bg-ink pb-10 pt-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a href="#home" className="flex items-baseline gap-1 font-display text-paper">
              <span className="text-xl font-bold tracking-tight">sandip</span>
              <span className="text-xl font-bold text-accent-soft">.</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark">
                /dev
              </span>
            </a>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-muted-dark">
              Full-stack developer crafting interfaces people enjoy and backends
              engineers trust.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-muted-dark transition-colors hover:text-accent-soft"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-full border border-line-dark text-muted-dark transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft hover:text-accent-soft"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-full border border-line-dark text-muted-dark transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft hover:text-accent-soft"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid size-10 place-items-center rounded-full bg-accent text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-accent-soft hover:text-ink"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line-dark pt-6 font-mono text-[11px] tracking-wide text-muted-dark sm:flex-row sm:items-center">
          <span>© {year} Sandip Saseendran. All rights reserved.</span>
          <span>
            Designed & built with React, TypeScript & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
