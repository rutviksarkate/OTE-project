import Link from "next/link";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { projects } from "@/data/projects";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Project experience", href: "/project-experience" },
];

const labels = { fpso: "FPSO", onshore: "Onshore", refinery: "Refinery" };

export const metadata = buildMeta({
  title: "Project experience",
  description: "Published scopes for FPSO Mystras, Hawax and Bushehr Refinery.",
  path: "/project-experience",
});

export default function ProjectExperiencePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro
        eyebrow="Projects"
        title="What the published scopes covered."
        lede="Three engagements are described here. Client names, fields, quantities and a wider project register are not published."
        crumbs={crumbs}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        {projects.map((project) => (
          <article key={project.slug} className="border-t border-line py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{labels[project.category]}</p>
            <h2 className="mt-3 font-display text-4xl text-navy">{project.name}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-steel">{project.description}</p>
            <h3 className="mt-8 font-display text-2xl text-navy">Scope of work</h3>
            <ul className="mt-4 max-w-3xl space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="border-l-2 border-bronze pl-4 text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
              Project details
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
