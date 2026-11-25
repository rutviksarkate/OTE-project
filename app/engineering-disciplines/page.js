import Image from "next/image";
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
        title="Multidisciplinary engineering disciplines, delivered as one set."
        lede="Technical safety sits with the quality and HSE system rather than as a ninth card. The multidisciplinary engineering disciplines below are the set named by the company, supported by innovative design solutions, third-party verification and software-enabled services."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        {disciplines.map((item) => (
          <article key={item.slug} id={item.slug} className="border-t border-line py-12">
            <div className={`grid items-start gap-8 ${item.image ? "lg:grid-cols-[minmax(0,1fr)_22rem]" : ""}`}>
              <div className="max-w-3xl">
                <p className="font-display text-5xl text-bronze">{item.number}</p>
                <h2 className="mt-3 font-display text-4xl text-navy">{item.title}</h2>
                <p className="mt-4 leading-relaxed text-steel">{item.text}</p>
              </div>
              {item.image ? (
                <figure>
                  <div className="media-frame relative h-80 w-full overflow-hidden bg-navy">
                    <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 352px, 100vw" className={`object-cover ${item.imagePosition || "object-center"}`} />
                  </div>
                  <figcaption className="mt-3 text-sm text-steel">{item.imageAlt}</figcaption>
                </figure>
              ) : null}
            </div>
            <ul className="mt-6 max-w-3xl space-y-2 text-sm">
              {(disciplineScope[item.slug] || item.points).map((point) => (
                <li key={point} className="border-l border-bronze pl-3">{point}</li>
              ))}
            </ul>
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
