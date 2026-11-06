import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Quality and safety", href: "/quality-safety" },
];

export const metadata = buildMeta({
  title: "Quality and safety",
  description: "Quality, environmental and occupational health and safety management described against ISO 9001, ISO 14001 and ISO 45001.",
  path: "/quality-safety",
});

export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Quality and safety"
        title="Quality in the deliverable. Safety in the activity."
        lede="An integrated management system covering quality, environment and occupational health and safety."
        crumbs={crumbs}
      />
      <article className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-lg leading-relaxed text-steel">
        <p>Hazard identification, operability review and the controls around a modification sit with the discipline work.</p>
        <p>Quality, environmental and occupational health and safety management are certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.</p>
        <Link href="/certifications" className="inline-flex text-base font-semibold text-navy underline decoration-bronze">Read the three systems</Link>
      </article>
    </>
  );
}
