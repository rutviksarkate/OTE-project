import Image from "next/image";
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
  title: "About",
  description: "OTE Projects FZ LLC is an engineering and project services company working across offshore, oil and gas, refining and energy infrastructure.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="About"
        title="Engineering and project services, based in Ras Al Khaimah."
        lede="OTE Projects FZ LLC provides multidisciplinary engineering, project management, procurement support, construction management, commissioning and technical manpower for offshore and onshore energy work."
        crumbs={crumbs}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 text-lg leading-relaxed text-steel">
        <p>
          The work runs from BID engineering, Pre-FEED, FEED and detailed engineering through as-built engineering, procurement support, construction, commissioning and start-up. Particular depth is described for FPSO brownfield modifications and onshore refinery projects.
        </p>
        <h2 className="mt-12 font-display text-3xl text-navy">Leadership</h2>
        <div className="mt-6 grid items-start gap-8 sm:grid-cols-[200px_1fr]">
          <div className="relative h-64 w-48 overflow-hidden">
            <Image src="/images/leadership/rajesh-m-sarkate.jpg" alt="Rajesh M. Sarkate, General Manager – Projects." fill quality={100} sizes="200px" className="object-cover object-top" />
          </div>
          <p>
            Rajesh M. Sarkate, General Manager – Projects, has more than 29 years leading EPC, greenfield and brownfield work from FEED through commissioning. The profile covers offshore, FPSO, FLNG, refining and petrochemicals, including asset integrity, platform revamps and plant handover. Operators and contractors named in that career, including work associated with ONGC, ExxonMobil, Sasol, Samsung Heavy Industries, Saipem Triune, Dangote and Essar, are professional experience. They are not clients of {company.legalName}.
          </p>
        </div>
        <p className="mt-4">
          <a className="text-navy underline decoration-bronze" href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <h2 className="mt-12 font-display text-3xl text-navy">Offices</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <section key={office.id}>
              <h3 className="font-display text-2xl text-navy">{office.city}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.14em]">{office.role}</p>
              <p className="mt-3 text-base">{office.company}</p>
              {office.lines.map((line) => (
                <p key={line} className="text-base">{line}</p>
              ))}
              <p className="text-base">{office.country}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-base">
          <Link href="/vision-mission-values" className="text-navy underline decoration-bronze">Vision, mission and values</Link>
        </p>
      </article>
    </>
  );
}
