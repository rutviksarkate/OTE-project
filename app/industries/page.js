import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { industries } from "@/data/industries";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/industries" },
];

export const metadata = buildMeta({
  title: "Industries",
  description: "Engineering for oil and gas, petrochemicals, energy and industrial infrastructure.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Industries"
        title="Where the engineering is applied."
        lede="Offshore facilities, process plants, operating refineries, storage and the utilities that keep a plant running."
        crumbs={crumbs}
      />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2">
        {industries.map((item) => (
          <Link key={item.slug} href={item.href} className="group relative block min-h-80 overflow-hidden bg-navy text-white">
            <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071422] via-[#071422]/20 to-transparent" />
            <div className="relative flex min-h-80 flex-col justify-end p-7">
              <h2 className="font-display text-3xl">{item.title}</h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
