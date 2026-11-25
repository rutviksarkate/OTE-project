import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CompanyIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">The company</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-navy md:text-5xl">An engineering company for work that has to stay buildable.</h2>
          <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">
            OTE Projects FZ LLC is a UAE-based engineering and project services company, with branch offices in Chennai, India and Nigeria. The work runs from BID engineering and technical clarification through Pre-FEED, FEED, detailed engineering, procurement support, construction, commissioning and as-built documentation, with particular depth in FPSO brownfield modifications and onshore refinery projects.
          </p>
          <p className="mt-4 leading-relaxed text-steel">
            Offices in Ras Al Khaimah, Chennai and Port Harcourt support clients in the FPSO, offshore, oil and gas, refining, petrochemical and energy industries.
          </p>
          <Link href="/about" className="mt-8 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
            Discover more
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <figure className="media-frame relative aspect-[4/3] overflow-hidden bg-navy">
            <Image
              src="/images/company/blog-2.jpg"
              alt="Piping, valves and grating on an offshore deck."
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
