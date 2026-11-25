import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/data/certifications";

const points = [
  {
    title: "One discipline set",
    text: "Process, mechanical, piping, structural, electrical, instrumentation, construction management and naval architecture are coordinated as a single engineering line.",
  },
  {
    title: "A defined lifecycle",
    text: "BID engineering, Pre-FEED, FEED, detailed engineering, procurement support, construction, commissioning and start-up support.",
  },
  {
    title: "Certified systems",
    text: "Quality, environmental and occupational health and safety management are certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.",
  },
];

export default function Excellence() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Engineering excellence</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-navy md:text-5xl">Standards, safety and a scope that can be built.</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-steel">
            Quality in every deliverable. Safety in every activity. Responsibility in every decision. Technical safety sits with the engineering: hazard identification, operability review and the controls a modification has to satisfy.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <article className="h-full border-t-2 border-bronze pt-6">
                <h3 className="font-display text-2xl text-navy">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{point.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {certifications.map((item) => (
            <li key={item.slug} className="bg-mist px-5 py-5">
              <p className="text-xs uppercase tracking-[0.14em] text-steel">{item.system}</p>
              <p className="mt-1 font-display text-xl text-navy">{item.standard}</p>
              <p className="mt-3 font-mono text-sm text-navy">{item.number}</p>
              <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
                Open certificate
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
          <Link href="/certifications" className="text-navy underline decoration-bronze underline-offset-4">
            View the certificates
          </Link>
          <Link href="/quality-safety" className="text-navy underline decoration-bronze underline-offset-4">
            Quality and safety
          </Link>
          <Link href="/engineering-disciplines" className="text-navy underline decoration-bronze underline-offset-4">
            Our expertise
          </Link>
        </div>
      </div>
    </section>
  );
}
