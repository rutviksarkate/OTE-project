import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { disciplines } from "@/data/disciplines";
import { lifecycle } from "@/data/lifecycle";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Capabilities", href: "/capabilities" },
];

export const metadata = buildMeta({
  title: "Capabilities",
  description: "Engineering, project management, procurement support, construction management, commissioning and technical inspection across eight disciplines.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Capabilities"
        title="What the team is set up to do."
        lede="Engineering, project management, procurement support, construction management, commissioning, start-up support and technical inspection."
        crumbs={crumbs}
      />
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-16 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-3xl text-navy">Lifecycle</h2>
          <ol className="mt-6 space-y-4">
            {lifecycle.map((stage) => (
              <li key={stage.id}>
                <p className="font-semibold text-navy">{stage.title}</p>
                <p className="text-sm leading-relaxed text-steel">{stage.text}</p>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="font-display text-3xl text-navy">Disciplines</h2>
          <ul className="mt-6 space-y-3">
            {disciplines.map((item) => (
              <li key={item.slug}>
                <Link href={`/engineering-disciplines#${item.slug}`} className="text-navy underline decoration-bronze underline-offset-4">
                  {item.title}
                </Link>
                <p className="text-sm text-steel">{item.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
