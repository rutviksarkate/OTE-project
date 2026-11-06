import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import { disciplines } from "@/data/disciplines";
import { gmailLink } from "@/lib/mailto";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { company, offices } from "@/lib/site";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Careers", href: "/careers-enquiries" },
];

const steps = [
  { number: "01", title: "Discipline", text: "Name the engineering you practise." },
  { number: "02", title: "Experience", text: "Offshore, refinery, or the systems that keep a plant running." },
  { number: "03", title: "CV", text: "Attach a current curriculum vitae." },
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
      <header className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-white/60">
            <ol className="flex flex-wrap gap-2">
              <li className="flex items-center gap-2">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
              </li>
              <li className="text-white">Careers</li>
            </ol>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Careers</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95]">Bring your experience to the work.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Applications are considered as engineering roles open. Include the discipline you practise and a current CV.
          </p>
        </div>
      </header>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">What to include</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-navy">An application that can be read.</h2>
          <ol className="mt-8 grid gap-px bg-line sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="bg-mist p-6">
                <p className="font-display text-3xl text-bronze">{step.number}</p>
                <h3 className="mt-4 font-display text-2xl text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{step.text}</p>
              </li>
            ))}
          </ol>
          <a href={applyLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-bronze hover:text-navy">
            Apply now
          </a>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Disciplines</p>
              <h2 className="mt-4 font-display text-4xl leading-none text-navy">Eight places the work sits.</h2>
            </div>
            <Link href="/engineering-disciplines" className="text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
              Explore the disciplines
            </Link>
          </div>
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((item) => (
              <article key={item.slug} className="bg-white p-6">
                <p className="font-display text-2xl text-bronze">{item.number}</p>
                <h3 className="mt-3 font-display text-xl text-navy">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Offices</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-navy">Ras Al Khaimah, Chennai and Port Harcourt.</h2>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {offices.map((office) => (
              <article key={office.id} className="bg-mist p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">{office.role}</p>
                <h3 className="mt-3 font-display text-2xl text-navy">{office.city}</h3>
                <p className="mt-2 text-sm text-steel">{office.country}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
