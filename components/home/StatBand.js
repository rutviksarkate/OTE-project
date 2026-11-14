"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/data/metrics";

function useCount(target, run) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return undefined;
    }
    const start = performance.now();
    const duration = 1100;
    let frame = 0;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, target]);

  return value;
}

function Stat({ metric, run }) {
  const value = useCount(metric.value, run);
  return (
    <div className="border-white/10 px-6 py-10 md:border-l md:first:border-l-0">
      <p className="font-display text-5xl text-white">{value}</p>
      <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-bronze">{metric.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{metric.detail}</p>
    </div>
  );
}

export default function StatBand() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy text-white" aria-label="Organisation">
      <div className="mx-auto max-w-7xl px-5 pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Organisation</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl">Published facts about the company.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
          These figures describe offices, disciplines, certified systems and lifecycle stages. They are not employee counts, revenue, tonnage or a project total.
        </p>
      </div>
      <div className="mx-auto mt-6 grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Stat key={metric.id} metric={metric} run={run} />
        ))}
      </div>
    </section>
  );
}
