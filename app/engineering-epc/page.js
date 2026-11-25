import Lifecycle from "@/components/engineering/Lifecycle";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { engineeringIntro, engineeringSections } from "@/data/engineering";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Engineering", href: "/engineering-epc" },
];

export const metadata = buildMeta({
  title: "Engineering and execution support",
  description: "BID engineering, technical bid evaluation, Pre-FEED, FEED, detailed engineering, brownfield modifications, procurement support, construction, commissioning and as-built documentation.",
  path: "/engineering-epc",
});

export default function EngineeringPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={serviceSchema({ name: "Engineering and execution support", description: "Multidisciplinary engineering across the project lifecycle.", path: "/engineering-epc" })} />
      <PageIntro
        eyebrow="Engineering"
        title="From a bid through as-built."
        lede="Multidisciplinary engineering from BID engineering and technical clarification through detailed design, construction support, commissioning and as-built documentation."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-steel">{engineeringIntro}</p>
        <div className="mt-12 max-w-3xl">
          {engineeringSections.map((section) => (
            <section key={section.title} className="border-t border-line py-10">
              <h2 className="font-display text-3xl text-navy">{section.title}</h2>
              {section.text ? <p className="mt-4 leading-relaxed text-steel">{section.text}</p> : null}
              {section.points ? (
                <ul className="mt-5 space-y-2 text-sm">
                  {section.points.map((point) => (
                    <li key={point} className="border-l border-bronze pl-3">{point}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
        <h2 className="mt-4 font-display text-3xl text-navy">Lifecycle</h2>
        <div className="mt-6">
          <Lifecycle />
        </div>
      </div>
    </>
  );
}
