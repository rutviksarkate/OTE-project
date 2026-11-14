import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { company } from "@/lib/site";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
];

export const metadata = buildMeta({
  title: "Leadership",
  description: "Rajesh M. Sarkate, General Manager – Projects at OTE Projects FZ LLC.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Leadership"
        title="Rajesh M. Sarkate"
        lede="General Manager – Projects."
        crumbs={crumbs}
      />
      <article className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-16 lg:grid-cols-[280px_1fr]">
        <div className="photo-frame relative mx-auto h-[360px] w-[260px] overflow-hidden bg-navy">
          <Image src="/images/leadership/rajesh-m-sarkate.jpg" alt="Rajesh M. Sarkate, General Manager – Projects." fill sizes="280px" className="object-cover object-top" />
        </div>
        <div className="max-w-3xl text-base leading-relaxed text-steel md:text-lg">
          <p>
            Rajesh M. Sarkate has more than 29 years leading EPC, greenfield and brownfield work, from FEED through commissioning. The profile covers offshore, FPSO, FLNG, refining and petrochemicals, including asset integrity, platform revamps and plant handover.
          </p>
          <p className="mt-4">
            Operators and contractors named in that career are professional experience. They are not a client list of {company.legalName}.
          </p>
          <p className="mt-4">
            The 29 years describe his career. They are not a statement of how long the company has traded.
          </p>
          <p className="mt-6">
            <a className="font-semibold text-navy underline decoration-bronze underline-offset-4" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <Link href="/about" className="mt-8 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
            Company overview
          </Link>
        </div>
      </article>
    </>
  );
}
