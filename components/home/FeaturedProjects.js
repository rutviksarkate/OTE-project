import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

const labels = {
  fpso: "FPSO",
  onshore: "Onshore",
  refinery: "Refinery",
};

export default function FeaturedProjects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Projects</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-navy md:text-5xl">Published project experience.</h2>
          <p className="mt-4 max-w-2xl text-steel">Three scopes are on this site. A wider register of named clients and facilities is not published.</p>
        </Reveal>
        <Reveal>
          <article className="mt-12 grid overflow-hidden bg-navy text-white lg:grid-cols-2">
            <div className="media-frame relative min-h-72">
              <Image src={featured.image} alt={featured.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{labels[featured.category]}</p>
              <h3 className="mt-3 font-display text-4xl">{featured.name}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-white/75">{featured.summary}</p>
              <p className="mt-4 text-sm text-white/55">Location is not published for this scope.</p>
              <Link href={`/projects/${featured.slug}`} className="mt-8 inline-flex text-sm font-semibold text-bronze">
                Project details
              </Link>
            </div>
          </article>
        </Reveal>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {rest.map((project) => (
            <Reveal key={project.slug}>
              <article className="flex h-full flex-col bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{labels[project.category]}</p>
                <h3 className="mt-3 font-display text-3xl text-navy">{project.name}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-steel">{project.summary}</p>
                <p className="mt-4 text-sm text-steel/80">A project photograph and a location are not published for this scope.</p>
                <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
                  Project details
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
