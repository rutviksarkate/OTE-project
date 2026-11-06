import EnquiryForm from "@/components/forms/EnquiryForm";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { offices, company } from "@/lib/site";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export const metadata = buildMeta({
  title: "Contact",
  description: "Contact OTE Projects FZ LLC in Ras Al Khaimah, with offices in Chennai and Port Harcourt.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro eyebrow="Contact" title="Discuss your project." lede="Write with a scope, a site and the discipline you need." crumbs={crumbs} />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-8">
          <p>
            <a className="text-lg text-navy underline decoration-bronze" href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          {offices.map((office) => (
            <section key={office.id}>
              <h2 className="font-display text-2xl text-navy">{office.city}</h2>
              <p className="text-sm uppercase tracking-[0.14em] text-steel">{office.role}</p>
              <p className="mt-2 text-sm">{office.company}</p>
              {office.lines.map((line) => (
                <p key={line} className="text-sm text-steel">{line}</p>
              ))}
              <p className="text-sm text-steel">{office.country}</p>
            </section>
          ))}
        </div>
        <EnquiryForm />
      </div>
    </>
  );
}
