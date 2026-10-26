import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../utils/cn";

/* ---------------------------------- Reveal --------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- Section head ------------------------------ */

export function SectionHead({
  index,
  eyebrow,
  title,
  dark = false,
  className,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal y={16}>
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "font-mono text-[11px] tracking-[0.25em] uppercase",
              dark ? "text-accent-soft" : "text-accent"
            )}
          >
            {index}
          </span>
          <span className={cn("h-px w-10", dark ? "bg-accent-soft/50" : "bg-accent/50")} />
          <span
            className={cn(
              "font-mono text-[11px] tracking-[0.25em] uppercase",
              dark ? "text-muted-dark" : "text-muted"
            )}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.05] tracking-tight",
            dark ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

/* ------------------------------ Magnetic button ----------------------------- */

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ Cursor spotlight ---------------------------- */

export function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const spotlight = useTransform(
    [mx, my],
    ([x, y]) =>
      `radial-gradient(480px circle at ${x}px ${y}px, rgba(52, 211, 153, 0.08), transparent 65%)`
  );

  return { ref, onMove, spotlight };
}
