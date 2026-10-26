import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LINKS, NAV_ITEMS } from "../lib/data";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy */
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.querySelector(i.href)).filter(
      Boolean
    ) as Element[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2.5px] origin-left bg-accent"
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-paper/85 backdrop-blur-xl border-b border-line shadow-[0_1px_24px_rgba(13,21,18,0.05)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="group flex items-baseline gap-1 font-display">
            <span className="text-lg font-bold tracking-tight">sandip</span>
            <span className="text-lg font-bold text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
              .
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              /dev
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-300",
                  active === item.href ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-cream border border-line"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-paper transition-all duration-300 hover:bg-accent-deep hover:shadow-lg hover:shadow-accent/20 sm:inline-flex"
            >
              Let's Talk
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid size-10 place-items-center rounded-full border border-line bg-paper md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  className="group flex items-center justify-between border-b border-line-dark py-5"
                >
                  <span className="font-display text-3xl font-semibold text-paper transition-colors group-hover:text-accent-soft">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-muted-dark">0{i + 1}</span>
                </motion.a>
              ))}
              <motion.a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-paper"
              >
                Let's Talk <ArrowUpRight className="size-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
