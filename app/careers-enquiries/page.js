import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { gmailLink } from "@/lib/mailto";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/site";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Careers", href: "/careers-enquiries" },
];

const applyLink = gmailLink({
  to: company.email,
  subject: "Career application",
  body: "I am applying for an engineering role with OTE Projects.\n\nDiscipline:\n\nA CV is attached.",
});

export const metadata = buildMeta({
  title: "Careers",
  description: "OTE Projects considers applications as engineering roles open.",
  path: "/careers-enquiries",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Careers"
        title="Bring your experience to the work."
        lede="Applications are considered as engineering roles open. Include the discipline you practise and a current CV."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <a href={applyLink} target="_blank" rel="noopener noreferrer" className="inline-flex bg-navy px-5 py-3 text-sm font-semibold text-white">
          Apply now
        </a>
      </div>
    </>
  );
}
