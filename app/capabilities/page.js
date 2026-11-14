import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { capabilities } from "@/data/capabilities";
import { lifecycle } from "@/data/lifecycle";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Capabilities", href: "/capabilities" },
];

export const metadata = buildMeta({
  title: "Capabilities",
  description: "Engineering, procurement support, construction management, modular and fabrication engineering, and project management.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Capabilities"
        title="What the team is set up to do."
        lede="Engineering, project management, procurement support, construction management, commissioning and start-up support."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.slug} className="flex flex-col bg-white">
              <div className="media-frame relative aspect-[16/10] overflow-hidden">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1280px) 400px, 50vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-2xl text-navy">{item.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{item.text}</p>
                <Link href={item.href} className="mt-5 text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
        <section className="mt-16">
          <h2 className="font-display text-3xl text-navy">Lifecycle</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {lifecycle.map((stage) => (
              <li key={stage.id} className="border-t border-line pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-bronze">{stage.number}</p>
                <p className="mt-1 font-semibold text-navy">{stage.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{stage.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
