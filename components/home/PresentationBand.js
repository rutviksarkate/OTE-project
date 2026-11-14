import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const chapters = ["Company profile", "Capabilities and disciplines", "Lifecycle and execution", "Published project scopes"];

export default function PresentationBand() {
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Company presentation</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-navy md:text-5xl">The official presentation, issued on request.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-steel">
            The company presentation sets out the profile, the engineering services and the way a project is taken from bid through start-up. It is not posted as a file on this website. Ask for the current edition and it will be sent from the company.
          </p>
          <Link href="/resources/presentation" className="btn-accent mt-8">
            Request the presentation
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <ol className="border border-line bg-white">
            {chapters.map((chapter, index) => (
              <li key={chapter} className="flex items-baseline gap-4 border-b border-line px-6 py-5 last:border-b-0">
                <span className="font-display text-2xl text-bronze">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-navy">{chapter}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
