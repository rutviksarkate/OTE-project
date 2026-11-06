"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const filters = [
  ["all", "All"],
  ["fpso", "FPSO"],
  ["offshore", "Offshore"],
  ["refinery", "Refinery"],
  ["onshore", "Onshore"],
];

export default function ProjectIndex() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((project) => filter === "all" || project.categories.includes(filter));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {filters.map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={filter === id}
            onClick={() => setFilter(id)}
            className={`px-4 py-2 text-sm ${filter === id ? "bg-navy text-white" : "bg-white text-navy"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-8 space-y-6">
        {visible.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className={`grid overflow-hidden bg-white ${project.image ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
            {project.image ? (
              <div className="relative min-h-64">
                <Image src={project.image} alt={project.imageAlt} fill quality={100} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ) : null}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{project.category}</p>
              <h2 className="mt-3 font-display text-4xl text-navy">{project.name}</h2>
              <p className="mt-4 leading-relaxed text-steel">{project.summary}</p>
              <span className="mt-6 text-sm font-semibold text-navy">Read the scope</span>
            </div>
          </Link>
        ))}
        {visible.length === 0 ? <p className="text-steel">No project is filed under that category.</p> : null}
      </div>
    </div>
  );
}
