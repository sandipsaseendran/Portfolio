import { Asterisk } from "lucide-react";
import { MARQUEE_ITEMS } from "../lib/data";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="relative overflow-hidden border-y border-line-dark bg-ink py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-sm font-medium uppercase tracking-[0.22em] text-paper/70 transition-colors hover:text-accent-soft">
              {item}
            </span>
            <Asterisk className="size-4 text-accent-soft/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
