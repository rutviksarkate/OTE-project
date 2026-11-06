import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Vision", href: "/vision-mission-values" },
];

export const metadata = buildMeta({
  title: "Vision, mission and values",
  description: "The vision, mission and values of OTE Projects.",
  path: "/vision-mission-values",
});

export default function VisionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Direction"
        title="Clarity before complexity."
        lede="Engineering that an operator can build, commission and live with."
        crumbs={crumbs}
      />
      <article className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-3">
        {[
          ["Vision", "Engineering that an operator can build, commission and live with, on offshore facilities and operating refineries."],
          ["Mission", "Carry a scope from bid engineering through start-up support without separating the disciplines that have to fit together."],
          ["Values", "Be precise about the work. Hold quality, environment and occupational safety inside every job."],
        ].map(([title, text]) => (
          <section key={title} className="border-t-2 border-bronze pt-6">
            <h2 className="font-display text-3xl text-navy">{title}</h2>
            <p className="mt-4 leading-relaxed text-steel">{text}</p>
          </section>
        ))}
      </article>
    </>
  );
}
