import Link from "next/link";
import { disciplines } from "@/data/disciplines";

export default function DisciplineStudio() {
  return (
    <div>
      <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map((item) => (
          <article key={item.slug} className="flex h-full flex-col bg-white p-6">
            <p className="font-display text-3xl text-bronze">{item.number}</p>
            <h3 className="mt-4 font-display text-2xl text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-steel">{item.summary}</p>
          </article>
        ))}
      </div>
      <Link href="/engineering-disciplines" className="mt-8 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
        Explore the disciplines
      </Link>
    </div>
  );
}
