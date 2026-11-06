import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/ui/JsonLd";
import PageIntro from "@/components/ui/PageIntro";
import { getProject, projects } from "@/data/projects";
import { buildMeta } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMeta({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: project.name, href: `/projects/${project.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageIntro eyebrow="Project" title={project.name} lede={project.summary} crumbs={crumbs} />
      <article className={`mx-auto grid max-w-7xl gap-12 px-5 py-16 ${project.image ? "lg:grid-cols-[1.1fr_0.9fr]" : "max-w-3xl"}`}>
        <div>
          <p className="leading-relaxed text-steel">{project.description}</p>
          <h2 className="mt-10 font-display text-3xl text-navy">Scope</h2>
          <ol className="mt-4 space-y-4">
            {project.scope.map((item, index) => (
              <li key={item} className="grid grid-cols-[3rem_1fr] gap-3">
                <span className="font-display text-2xl text-bronze">{String(index + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
          <h2 className="mt-10 font-display text-3xl text-navy">Disciplines</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.disciplines.map((item) => (
              <li key={item} className="bg-white px-3 py-2 text-sm">{item}</li>
            ))}
          </ul>
          <Link href="/contact" className="mt-10 inline-flex bg-navy px-5 py-3 text-sm font-semibold text-white">
            Discuss a similar scope
          </Link>
        </div>
        {project.image ? (
          <figure>
            <div className="relative min-h-80">
              <Image src={project.image} alt={project.imageAlt} fill quality={100} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-steel">{project.imageCaption}</figcaption>
          </figure>
        ) : null}
      </article>
    </>
  );
}
