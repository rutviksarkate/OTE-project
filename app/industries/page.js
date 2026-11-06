import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const sectors = [
  {
    title: "Offshore oil and gas",
    text: "Topsides, marine interfaces and brownfield modifications for floating and fixed facilities, including FPSO, FSO, FSRU and FLNG-related engineering, mobile offshore production units and platforms.",
  },
  {
    title: "Refining",
    text: "Brownfield modifications, turnaround engineering and project management consultancy for operating refineries. Bushehr Refinery is a consultancy engagement in this sector.",
  },
  {
    title: "Onshore storage and process",
    text: "Tank farms, transfer facilities and process-plant engineering. Hawax covers detailed engineering for a jet fuel and diesel tank farm.",
  },
  {
    title: "Energy infrastructure",
    text: "Utilities that let a facility run: power, water and modular packages.",
  },
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/industries" },
];

export const metadata = buildMeta({
  title: "Industries",
  description: "Engineering for offshore facilities, refinery brownfield work, storage and energy infrastructure.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro eyebrow="Industries" title="Where the engineering is applied." lede="Offshore facilities, operating refineries, storage and the utilities that keep a plant running." crumbs={crumbs} />
      <div className="mx-auto max-w-3xl px-5 py-16">
        {sectors.map((sector, index) => (
          <article key={sector.title} className="border-t border-line py-12">
            <p className="font-display text-4xl text-bronze">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 font-display text-4xl text-navy">{sector.title}</h2>
            <p className="mt-4 leading-relaxed text-steel">{sector.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
