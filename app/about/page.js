import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { offices, company } from "@/lib/site";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export const metadata = buildMeta({
  title: "Company overview",
  description: "OTE Projects FZ LLC is a UAE engineering and project services company working across offshore, oil and gas, refining, petrochemicals and energy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="About us"
        title="Engineering and project services, based in Ras Al Khaimah."
        lede="Multidisciplinary engineering, project management, procurement support, construction management, commissioning and technical manpower for offshore and onshore energy work."
        crumbs={crumbs}
      />
      <article className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            <p>
              {company.legalName} is a UAE-based engineering and project services company. The work runs from BID engineering, Pre-FEED, FEED and detailed engineering through as-built engineering, procurement support, construction, commissioning and start-up.
            </p>
            <p className="mt-4">
              Particular depth is described for FPSO brownfield modifications and onshore refinery projects. Eight engineering disciplines are delivered as one set, with technical safety held inside the quality and HSE system.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              <Link href="/leadership" className="text-navy underline decoration-bronze underline-offset-4">
                Leadership
              </Link>
              <Link href="/engineering-disciplines" className="text-navy underline decoration-bronze underline-offset-4">
                Our expertise
              </Link>
              <Link href="/quality-safety" className="text-navy underline decoration-bronze underline-offset-4">
                Quality and safety
              </Link>
              <Link href="/vision-mission-values" className="text-navy underline decoration-bronze underline-offset-4">
                Vision, mission and values
              </Link>
            </div>
          </div>
          <aside className="border-t-2 border-bronze bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">Leadership</p>
            <h2 className="mt-3 font-display text-3xl text-navy">Rajesh M. Sarkate</h2>
            <p className="mt-2 text-sm text-steel">General Manager – Projects</p>
            <p className="mt-4 text-sm leading-relaxed text-steel">More than 29 years in EPC, greenfield and brownfield work. That figure is his career, not the age of the company.</p>
            <Link href="/leadership" className="mt-5 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
              Read the profile
            </Link>
          </aside>
        </div>
        <h2 className="mt-16 font-display text-3xl text-navy">Offices</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <section key={office.id} className="bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-bronze">{office.role}</p>
              <h3 className="mt-2 font-display text-2xl text-navy">{office.city}</h3>
              <p className="mt-3 text-sm">{office.company}</p>
              {office.lines.map((line) => (
                <p key={line} className="text-sm text-steel">
                  {line}
                </p>
              ))}
              <p className="text-sm text-steel">{office.country}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
