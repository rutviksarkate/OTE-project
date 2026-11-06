import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { certificateIssuer, certifications } from "@/data/certifications";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Certifications", href: "/certifications" },
];

export const metadata = buildMeta({
  title: "Certifications",
  description: "ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018, issued to OTE Projects FZ LLC.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Certifications"
        title="Three management systems."
        lede={`Issued to OTE Projects FZ LLC by ${certificateIssuer}.`}
        crumbs={crumbs}
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-3">
        {certifications.map((item) => (
          <article key={item.slug} className="bg-white p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-bronze">{item.system}</p>
            <h2 className="mt-4 font-display text-3xl text-navy">{item.standard}</h2>
            <p className="mt-6 font-display text-2xl text-bronze">{item.number}</p>
            <p className="mt-4 leading-relaxed text-steel">{item.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
