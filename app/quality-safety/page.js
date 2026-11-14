import Link from "next/link";
import CertificateShowcase from "@/components/content/CertificateShowcase";
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
      <article className="mx-auto max-w-7xl px-5 py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-steel">
          Hazard identification, operability review and the controls around a modification sit with the discipline work. The three certificates below are the documents published on oteprojects.com.
        </p>
        <div className="mt-10">
          <CertificateShowcase />
        </div>
        <Link href="/certifications" className="mt-8 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
          Certifications
        </Link>
      </article>
    </>
  );
}
