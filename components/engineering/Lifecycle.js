"use client";

import { useEffect, useState } from "react";
import { lifecycle } from "@/data/lifecycle";

export default function Lifecycle() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const stage = lifecycle[index];

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % lifecycle.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused]);

  function hold(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
  }

  return (
    <div
      className="overflow-x-clip border border-line bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={hold}
    >
      <article className="grid gap-6 px-6 py-10 md:px-10 lg:grid-cols-[7rem_1fr] lg:items-end" aria-live="polite">
        <p className="font-display text-6xl text-bronze md:text-7xl">{stage.number}</p>
        <div>
          <h3 className="font-display text-4xl text-navy">{stage.title}</h3>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-steel">{stage.text}</p>
        </div>
      </article>
      <div className="grid grid-cols-2 border-t border-line sm:grid-cols-4 lg:grid-cols-8" role="tablist" aria-label="Project lifecycle">
        {lifecycle.map((item, itemIndex) => {
          const selected = itemIndex === index;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setIndex(itemIndex)}
              className={`border-line px-3 py-4 text-left transition sm:border-l sm:first:border-l-0 ${selected ? "bg-navy text-white" : "bg-white text-navy hover:bg-mist"}`}
            >
              <span className="block font-display text-lg text-bronze">{item.number}</span>
              <span className="mt-1 block text-xs font-semibold leading-snug">{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
