import CertificateShowcase from "@/components/content/CertificateShowcase";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { certificateIssuer } from "@/data/certifications";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Certifications", href: "/certifications" },
];

export const metadata = buildMeta({
  title: "Certifications",
  description: `ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certificates issued to OTE Projects FZ LLC by ${certificateIssuer}.`,
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Certifications"
        title="Three published management-system certificates."
        lede="ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018, as published by OTE Projects."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <CertificateShowcase />
      </div>
    </>
  );
}
