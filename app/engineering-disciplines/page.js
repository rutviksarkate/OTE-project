import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { disciplineScope, safetyScope } from "@/data/discipline-scope";
import { disciplines } from "@/data/disciplines";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Disciplines", href: "/engineering-disciplines" },
];

export const metadata = buildMeta({
  title: "Engineering disciplines",
  description: "Process, mechanical, piping, structural, construction and project management, electrical, instrumentation and naval architecture.",
  path: "/engineering-disciplines",
});

export default function DisciplinesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Disciplines"
        title="Eight disciplines, delivered as one set."
        lede="Technical safety sits with the quality and HSE system rather than as a ninth card. The eight disciplines below are the set named by the company."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        {disciplines.map((item) => (
          <article key={item.slug} id={item.slug} className="max-w-3xl border-t border-line py-12">
            <div>
              <p className="font-display text-5xl text-bronze">{item.number}</p>
              <h2 className="mt-3 font-display text-4xl text-navy">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-steel">{item.text}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {(disciplineScope[item.slug] || item.points).map((point) => (
                  <li key={point} className="border-l border-bronze pl-3">{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <section className="border-t border-line py-12">
          <p className="font-display text-5xl text-bronze">09</p>
          <h2 className="mt-3 font-display text-4xl text-navy">Technical safety</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-steel">Safety studies sit with the engineering, as part of the quality and HSE system.</p>
          <ul className="mt-5 max-w-2xl space-y-2 text-sm">
            {safetyScope.map((point) => (
              <li key={point} className="border-l border-bronze pl-3">{point}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
