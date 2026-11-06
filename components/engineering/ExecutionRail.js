"use client";

import { useState } from "react";
import { executionStages } from "@/data/execution";

export default function ExecutionRail() {
  const [open, setOpen] = useState(executionStages[0].number);

  return (
    <ol className="relative border-l border-bronze/50">
      {executionStages.map((stage) => {
        const active = open === stage.number;
        return (
          <li key={stage.number} className="ml-6 pb-4">
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(stage.number)}
              className="group w-full text-left"
            >
              <span className={`absolute -left-[7px] mt-3 h-3 w-3 rounded-full border-2 border-bronze transition ${active ? "bg-bronze" : "bg-mist"}`} />
              <span className="block bg-white px-6 py-5 transition duration-500 group-hover:translate-x-1">
                <span className="font-display text-sm text-bronze">{stage.number}</span>
                <span className="mt-1 block font-display text-2xl text-navy md:text-3xl">{stage.title}</span>
                <span className={`mt-3 block max-w-3xl text-sm leading-relaxed text-steel ${active ? "" : "hidden"}`}>{stage.text}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
